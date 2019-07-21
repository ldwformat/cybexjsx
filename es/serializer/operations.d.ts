import Serializer from "./serializer";
declare const operation: {
    nosort: boolean;
    st_operations: any;
    fromByteBuffer(b: any): any[];
    appendByteBuffer(b: any, object: any): void;
    fromObject(object: any): any[];
    toObject(object: any, debug?: any): any[];
};
export { operation };
export declare let void_ext: Serializer<unknown>;
export declare const transfer_operation_fee_parameters: Serializer<unknown>;
export declare const limit_order_create_operation_fee_parameters: Serializer<unknown>;
export declare const limit_order_cancel_operation_fee_parameters: Serializer<unknown>;
export declare const call_order_update_operation_fee_parameters: Serializer<unknown>;
export declare const fill_order_operation_fee_parameters: Serializer<unknown>;
export declare const account_create_operation_fee_parameters: Serializer<unknown>;
export declare const account_update_operation_fee_parameters: Serializer<unknown>;
export declare const account_whitelist_operation_fee_parameters: Serializer<unknown>;
export declare const account_upgrade_operation_fee_parameters: Serializer<unknown>;
export declare const account_transfer_operation_fee_parameters: Serializer<unknown>;
export declare const asset_create_operation_fee_parameters: Serializer<unknown>;
export declare const asset_update_operation_fee_parameters: Serializer<unknown>;
export declare const asset_update_bitasset_operation_fee_parameters: Serializer<unknown>;
export declare const asset_update_feed_producers_operation_fee_parameters: Serializer<unknown>;
export declare const asset_issue_operation_fee_parameters: Serializer<unknown>;
export declare const initiate_crowdfund_operation_fee_parameters: Serializer<unknown>;
export declare const participate_crowdfund_operation_fee_parameters: Serializer<unknown>;
export declare const withdraw_crowdfund_operation_fee_parameters: Serializer<unknown>;
export declare const asset_reserve_operation_fee_parameters: Serializer<unknown>;
export declare const asset_fund_fee_pool_operation_fee_parameters: Serializer<unknown>;
export declare const asset_settle_operation_fee_parameters: Serializer<unknown>;
export declare const asset_global_settle_operation_fee_parameters: Serializer<unknown>;
export declare const asset_publish_feed_operation_fee_parameters: Serializer<unknown>;
export declare const witness_create_operation_fee_parameters: Serializer<unknown>;
export declare const witness_update_operation_fee_parameters: Serializer<unknown>;
export declare const proposal_create_operation_fee_parameters: Serializer<unknown>;
export declare const proposal_update_operation_fee_parameters: Serializer<unknown>;
export declare const proposal_delete_operation_fee_parameters: Serializer<unknown>;
export declare const withdraw_permission_create_operation_fee_parameters: Serializer<unknown>;
export declare const withdraw_permission_update_operation_fee_parameters: Serializer<unknown>;
export declare const withdraw_permission_claim_operation_fee_parameters: Serializer<unknown>;
export declare const withdraw_permission_delete_operation_fee_parameters: Serializer<unknown>;
export declare const committee_member_create_operation_fee_parameters: Serializer<unknown>;
export declare const committee_member_update_operation_fee_parameters: Serializer<unknown>;
export declare const committee_member_update_global_parameters_operation_fee_parameters: Serializer<unknown>;
export declare const vesting_balance_create_operation_fee_parameters: Serializer<unknown>;
export declare const vesting_balance_withdraw_operation_fee_parameters: Serializer<unknown>;
export declare const worker_create_operation_fee_parameters: Serializer<unknown>;
export declare const custom_operation_fee_parameters: Serializer<unknown>;
export declare const assert_operation_fee_parameters: Serializer<unknown>;
export declare const balance_claim_operation_fee_parameters: Serializer<unknown>;
export declare const override_transfer_operation_fee_parameters: Serializer<unknown>;
export declare const transfer_to_blind_operation_fee_parameters: Serializer<unknown>;
export declare const blind_transfer_operation_fee_parameters: Serializer<unknown>;
export declare const transfer_from_blind_operation_fee_parameters: Serializer<unknown>;
export declare const asset_settle_cancel_operation_fee_parameters: Serializer<unknown>;
export declare const asset_claim_fees_operation_fee_parameters: Serializer<unknown>;
export declare const fee_schedule: Serializer<unknown>;
export declare const void_result: Serializer<unknown>;
export declare const asset: Serializer<unknown>;
export declare const processed_transaction: Serializer<unknown>;
export declare const signed_block: Serializer<unknown>;
export declare const block_header: Serializer<unknown>;
export declare const signed_block_header: Serializer<unknown>;
export declare const memo_data: Serializer<unknown>;
export declare const transfer: Serializer<unknown>;
export declare const limit_order_create: Serializer<unknown>;
export declare const limit_order_cancel: Serializer<unknown>;
export declare const call_order_update: Serializer<unknown>;
export declare const fill_order: Serializer<unknown>;
export declare const authority: Serializer<unknown>;
export declare const account_options: Serializer<unknown>;
export declare const account_create: Serializer<unknown>;
export declare const account_update: Serializer<unknown>;
export declare const account_whitelist: Serializer<unknown>;
export declare const account_upgrade: Serializer<unknown>;
export declare const account_transfer: Serializer<unknown>;
export declare const price: Serializer<unknown>;
export declare const asset_options: Serializer<unknown>;
export declare const bitasset_options: Serializer<unknown>;
export declare const asset_create: Serializer<unknown>;
export declare const asset_update: Serializer<unknown>;
export declare const asset_update_bitasset: Serializer<unknown>;
export declare const asset_update_feed_producers: Serializer<unknown>;
export declare const asset_issue: Serializer<unknown>;
export declare const asset_reserve: Serializer<unknown>;
export declare const asset_fund_fee_pool: Serializer<unknown>;
export declare const asset_settle: Serializer<unknown>;
export declare const asset_global_settle: Serializer<unknown>;
export declare const participate_crowdfund: Serializer<unknown>;
export declare const withdraw_crowdfund: Serializer<unknown>;
export declare const initiate_crowdfund: Serializer<unknown>;
export declare const price_feed: Serializer<unknown>;
export declare const asset_publish_feed: Serializer<unknown>;
export declare const witness_create: Serializer<unknown>;
export declare const witness_update: Serializer<unknown>;
export declare const op_wrapper: Serializer<unknown>;
export declare const proposal_create: Serializer<unknown>;
export declare const proposal_update: Serializer<unknown>;
export declare const proposal_delete: Serializer<unknown>;
export declare const withdraw_permission_create: Serializer<unknown>;
export declare const withdraw_permission_update: Serializer<unknown>;
export declare const withdraw_permission_claim: Serializer<unknown>;
export declare const withdraw_permission_delete: Serializer<unknown>;
export declare const committee_member_create: Serializer<unknown>;
export declare const committee_member_update: Serializer<unknown>;
export declare const chain_parameters: Serializer<unknown>;
export declare const committee_member_update_global_parameters: Serializer<unknown>;
export declare const linear_vesting_policy_initializer: Serializer<unknown>;
export declare const cdd_vesting_policy_initializer: Serializer<unknown>;
export declare const vesting_balance_create: Serializer<unknown>;
export declare const vesting_balance_withdraw: Serializer<unknown>;
export declare const refund_worker_initializer: Serializer<unknown>;
export declare const vesting_balance_worker_initializer: Serializer<unknown>;
export declare const burn_worker_initializer: Serializer<unknown>;
export declare const worker_create: Serializer<unknown>;
export declare const custom: Serializer<unknown>;
export declare const account_name_eq_lit_predicate: Serializer<unknown>;
export declare const asset_symbol_eq_lit_predicate: Serializer<unknown>;
export declare const block_id_predicate: Serializer<unknown>;
export declare const assert: Serializer<unknown>;
export declare const balance_claim: Serializer<unknown>;
export declare const override_transfer: Serializer<unknown>;
export declare const stealth_confirmation: Serializer<unknown>;
export declare const blind_output: Serializer<unknown>;
export declare const transfer_to_blind: Serializer<unknown>;
export declare const blind_input: Serializer<unknown>;
export declare const blind_transfer: Serializer<unknown>;
export declare const transfer_from_blind: Serializer<unknown>;
export declare const asset_settle_cancel: Serializer<unknown>;
export declare const asset_claim_fees: Serializer<unknown>;
export declare const transaction: Serializer<unknown>;
export declare type SignedTransaction = {
    ref_block_num: number;
    ref_block_prefix: number;
    expiration: number;
    operations: Array<[number, any]>;
    extensions: Array<[number, any]>;
    signatures: Array<string>;
};
export declare const signed_transaction: Serializer<unknown>;
export declare const stealth_memo_data: Serializer<unknown>;
export declare const fund_query: Serializer<unknown>;
export declare type RequestWithExpire = {
    expiration: number;
};
export declare type BackendRequestMethod = "query" | "create";
export declare type BackendRequest<BackendRequestMethod> = {
    signature: string;
    method: BackendRequestMethod;
};
export declare type SetAddress = {
    loginName: string;
    receiverName: string;
    email: string;
    qqNo: string;
    wechatNo: string;
    proviceId: number;
    homeAddress: string;
};
export declare type SetAddressWithExpire = SetAddress & RequestWithExpire;
export declare type SetAddressRequest = SetAddressWithExpire & BackendRequest<"create">;
export declare type GetAddress = {
    loginName: string;
};
export declare type GetAddressWithExpire = GetAddress & RequestWithExpire;
export declare type GetAddressRequest = GetAddressWithExpire & BackendRequest<"query">;
export declare type SetRefer = {
    action: string;
    referrer: string;
    account: string;
};
export declare type SetReferRequest = GetAddressWithExpire & RequestWithExpire;
export declare const set_refer: Serializer<GetAddressWithExpire>;
export declare const query_address: Serializer<GetAddressWithExpire>;
export declare const set_address: Serializer<SetAddressWithExpire>;
