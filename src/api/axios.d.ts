import 'axios';

declare module 'axios' {
    export interface AxiosRequestConfig<D> {
        alertOnError?: boolean | string;
    }

    export interface ARC<R, D = any> extends AxiosRequestConfig<D> {
    }
}
