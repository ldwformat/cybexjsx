import EventEmitter from "wolfy87-eventemitter";
declare type ChainWsConfig = {
    wsClient: typeof WebSocket;
    keepAliveInterval: number;
    maxSendLife: number;
    maxRecvLife: number;
    url: string;
    autoRestoreStateAfterReconnect: boolean;
    subMethods: Set<string>;
    unsubMethods: Set<string>;
    apiTypes: string[];
    debugMode: boolean;
    autoReconnect: boolean;
};
export declare class ChainWebSocket extends EventEmitter {
    config: ChainWsConfig;
    static WsEvents: {
        DISCONNECT: string;
    };
    static DefaultSubMothods: Set<string>;
    static DefaultUnsubMothods: Set<string>;
    static DefaultApiType: string[];
    static DefaultWsConfig: Partial<ChainWsConfig>;
    static getInstanceWithWs(url: string, config?: Partial<ChainWsConfig>): Promise<ChainWebSocket>;
    apiIds: {};
    cbs: {};
    subs: {
        [id: string]: {
            rawCall: {
                apiName: string;
                method: string;
                params: any[];
            };
            callback: CallableFunction;
        };
    };
    unsub: {};
    ws: WebSocket;
    _callId: number;
    private readonly callId;
    constructor(config: ChainWsConfig);
    initState(): void;
    connect(restoreState?: boolean): Promise<void>;
    login(apis?: string[]): Promise<void[]>;
    api(apiName: string): (method: string, ...rest: any[]) => Promise<unknown>;
    call(apiName: string, method: string, params?: any[]): Promise<unknown>;
    private listener;
    private pickCallback;
    private rejectAllCbs;
    close(): void;
    log(...params: any[]): void;
}
export default ChainWebSocket;