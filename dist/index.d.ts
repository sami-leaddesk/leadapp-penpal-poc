interface AssistedCallStartParams {
    phoneNumber: string;
}
interface ContactModifyParams {
    contact_id: number;
    first_name?: string | null;
    last_name?: string | null;
    ssc?: string | null;
    title?: string | null;
    www?: string | null;
    birth_year?: string | null;
    gender?: string | null;
    address?: Address;
    email?: string | null;
    other_infos?: OtherInfo[];
}
interface Address {
    country?: string | null;
    city?: string | null;
    postal_code?: string | null;
    street_address?: string | null;
}
interface OtherInfo {
    id: number | null;
    value: string | null;
}
interface LeadAppMethods {
    fullscreenEnable: () => Promise<void>;
    fullscreenDisable: () => Promise<void>;
    assistedCallStart: (params: AssistedCallStartParams) => Promise<void>;
    contactModify: (params: ContactModifyParams) => Promise<void>;
}
interface ApiCreationParams {
    parentOrigin: string | RegExp;
}
export declare const Domains: {
    default: RegExp;
};
export declare const LeadAppApi: (params?: ApiCreationParams | undefined) => Promise<LeadAppMethods>;
export {};
