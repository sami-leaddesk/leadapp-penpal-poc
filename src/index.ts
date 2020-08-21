import { connectToParent } from "penpal";

interface AssistedCallStartParams {
  phoneNumber: string;
}
interface LeadAppMethods {
  /* fullscreen */
  fullscreenEnable: () => Promise<void>;
  fullscreenDisable: () => Promise<void>;
  /* assistedCall */
  assistedCallStart: (params: AssistedCallStartParams) => Promise<void>;
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
