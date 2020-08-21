/**
 * Functions provided by LeadDesk parent for child LeadApps.
 */
class LeadAppMethods {
  /**
   * Request LeadDesk to open this LeadApp into fullscreen mode
   *
   * @return {Promise.<void>}
   */
  fullscreenEnable() {}

  /**
   * Request LeadDesk to cancel fullscreen mode and revert LeadApp back to normal size
   *
   * @return {Promise.<void>}
   */
  fullscreenDisable() {}

  /**
   * Request LeadDesk to make assisted call to given number. This will also open the Assisted transfer dialog on LeadDesk side for user to control the call from there on.
   *
   * @notice This function can only be callable when call is active on LeadDesk side. Error is returned if called without an active call.
   * @notice Some call engines might not support assisted calls. Error is returned if that is the case.
   *
   * @param {object} params
   * @param {string} params.phoneNumber Phone number to make the assisted call. Number needs to be in E.164 or pure local number format without any extra characters.
   * @return {Promise.<void>}
   */
  assistedCallStart(params) {}
}
