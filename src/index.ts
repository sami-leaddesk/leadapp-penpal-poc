import { connectToParent } from "penpal";

interface AssistedCallStartParams {
  phoneNumber: string;
}

interface ContactModifyParams {
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
  /* fullscreen */
  fullscreenEnable: () => Promise<void>;
  fullscreenDisable: () => Promise<void>;
  /* assistedCall */
  assistedCallStart: (params: AssistedCallStartParams) => Promise<void>;
  contactModify: (params: ContactModifyParams) => Promise<void>;
}

interface ApiCreationParams {
  parentOrigin: string | RegExp;
}

export const Domains = {
  default: /^http(s)?:\/\/[\-\w]*\.leaddesk\.(com|ch|eu)$/,
};

export const LeadAppMethods = async (
  params?: ApiCreationParams
): Promise<LeadAppMethods> => {
  const options = Object.assign(
    {},
    {
      parentOrigin: Domains.default,
      timeout: 3000,
    },
    // TODO: strip out unnecessary properties
    params
  );
  const connection = connectToParent(options);
  const api: unknown = await connection.promise;
  return api as LeadAppMethods;
};
