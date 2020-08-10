import { connectToParent } from "penpal";
import { Domains } from "./Domains";

interface AssistedCallStartParams {
  phoneNumber: string;
}
interface LeadAppApi {
  /* call */
  callStart: () => void;
  callHangup: () => void;
  callTransfer: () => void;
  callFinalize: () => void;
  /* contactDialog */
  contactDialogClose: () => void;
  /* callRecording */
  callRecordingContinue: () => void;
  callRecordingPause: () => void;
  /* voiceReceipt */
  voiceReceiptStart: () => void;
  voiceReceiptStrop: () => void;
  /* fullscreen */
  fullscreenEnable: () => void;
  fullscreenDisable: () => void;
  /* assistedCall */
  assistedCallStart: (params: AssistedCallStartParams) => void;
  /* generic */
  get(name: string): () => string | number | boolean;
}

interface ApiCreationParams {
  parentOrigin: string | RegExp;
}

export const LeadAppApi = async (
  params?: ApiCreationParams
): Promise<LeadAppApi> => {
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
  return api as LeadAppApi;
};
