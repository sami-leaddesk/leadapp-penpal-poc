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

  /**
   * Request LeadDesk to modify contact
   *
   * @param {object} params
   * @param {string} params.first_name
   * @param {string} params.last_name
   * @param {string} params.ssc
   * @param {string} params.title
   * @param {string} params.www
   * @param {string} params.birth_year
   * @param {string} params.gender
   * @param {string} params.address.country
   * @param {string} params.address.city
   * @param {string} params.address.postal_code
   * @param {string} params.address.street_address
   * @param {string} params.email
   * @param {array} params.other_infos
   * @return {Promise.<void>}
   */
  contactModify(params) {}
}
