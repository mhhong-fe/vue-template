import type { ARC } from 'axios';
import type { CommonResponseData } from '..';

export interface BindChannelProviderListItem {
    channelProviderId: number;
    channelProviderName: string;
    channelProviderFullName: string;
    internalContactName: string;
    channelType: string;
    projectName: string;
}

interface PageDto {
    pageDto?: { pageNum: number; pageSize: number };
}

export interface GetBindChannelPayload extends PageDto {
    ruleId: number;
}

/**
 * @url
 * @description 查询结算规则绑定的渠道商
 */
export function API_GET_BIND_CHANNEL_LIST_V2(
    data: GetBindChannelPayload,
): ARC<CommonResponseData<BindChannelProviderListItem[]>> {
    return {
        url: '/sn/settle/pubRegionSettle/rule/v2/queryBindBizDetailByRuleId',
        data,
        method: 'post',
    };
}

interface RuleDetailHtml {
    id: number;
    bizType: string;
    number: string;
    settleRuleName: string;
    settleRuleDesc: string;
    ruleDetailHtml: string;
}

export function API_GET_RULE_DETAIL_BY_ID_V2(id: number): ARC<CommonResponseData<RuleDetailHtml>> {
    return {
        url: '/sn/settle/pubRegionSettle/rule/v2/feign/querySettleRuleInfoViewLatestVersionById',
        method: 'post',
        params: { id },
    };
}
