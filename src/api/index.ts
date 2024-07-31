import axios, { type ARC, type AxiosError, type AxiosResponse } from 'axios';

// 定义统一的接口返回值结构
type CodeType = 200 | 400 | 500 | 600 | 700;
export interface CommonResponseData<T = object> {
    code: CodeType;
    msg: string;
    data: T;
    pageDto?: {
        pageNum: number;
        pageSize: number;
        count: number;
    };
}

// 创建axios实例
export const axiosIns = axios.create({
    timeout: 10 * 1000,
    method: 'POST',
});

// 请求拦截
axiosIns.interceptors.request.use((config) => {
    const modifiedConfig = { ...config };
    // 统一增加apiVersion=4
    if (modifiedConfig.url && !modifiedConfig.url.includes('apiVersion=4')) {
        if (modifiedConfig.url.includes('?')) {
            modifiedConfig.url = `${modifiedConfig.url}&apiVersion=4`;
        }
        else {
            modifiedConfig.url = `${modifiedConfig.url}?apiVersion=4`;
        }
    }
    return modifiedConfig;
});

let casVerifyLock = false;

// copy from app-layout
async function casVerify() {
    const res = await fetch('/fr/cas/verify.do', { method: 'get', redirect: 'manual' });
    if (res && res.type === 'opaqueredirect' && res.status === 0) {
        // 302 redirect
        return Promise.resolve();
    }
    // code = 700
    const resJson = await res.json();
    if (resJson.code === 700) {
        window.sessionStorage.setItem('__market_redirect', document.location.href);

        window.location.href = resJson.location;
        return Promise.reject(new Error(resJson.msg || 'cas登录失效'));
    }
}

// 响应拦截
axiosIns.interceptors.response.use(
    (response) => {
        const { data, status, config } = response as AxiosResponse<CommonResponseData>;
        const { code, msg } = data;
        // 200，正常的业务逻辑
        if (code === 200) {
            return Promise.resolve(response);
        }
        // 400～700，统一拦截的错误
        if (code >= 400 && code < 700) {
            // 如果要自定义错误提示，可以在config中配置alertOnError
            if (config.alertOnError !== false) {
                let message = msg || '服务错误';
                if (typeof config.alertOnError === 'string') {
                    message = config.alertOnError;
                }
                ElMessage({
                    message,
                    type: 'error',
                });
            }
            return Promise.reject(data);
        }

        if (code === 700 || status === 302) {
            if (casVerifyLock === false) {
                casVerifyLock = true;
                return casVerify()
                    .then(() => Promise.reject(data))
                    .finally(() => {
                        casVerifyLock = false;
                    });
            }
        }

        return Promise.reject(data);
    },
    (error) => {
        const { code } = error as AxiosError;
        if (code === 'ECONNABORTED') {
            ElMessage({
                message: '访问超时，请刷新页面重试',
                type: 'error',
            });
        }
        else {
            ElMessage({
                message: '网络异常，请尝试刷新页面',
                type: 'error',
            });
        }
        return Promise.reject(error);
    },
);

export function request<R, D>(config: ARC<R, D>) {
    return axiosIns.request<R, AxiosResponse<R, D>>(config);
}
