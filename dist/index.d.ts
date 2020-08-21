interface AssistedCallStartParams {
    phoneNumber: string;
}
interface LeadAppMethods {
    fullscreenEnable: () => Promise<void>;
    fullscreenDisable: () => Promise<void>;
    assistedCallStart: (params: AssistedCallStartParams) => Promise<void>;
}
interface ApiCreationParams {
    parentOrigin: string | RegExp;
}
export declare const Domains: {
    default: RegExp;
};
export declare const LeadAppMethods: (params?: ApiCreationParams | undefined) => Promise<LeadAppMethods>;
export {};
