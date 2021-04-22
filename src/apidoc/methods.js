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
   * Request LeadDesk to modify contact with the given data
   *
   * @param {object} params
   * @param {string} params.first_name First name of the contact to be modified
   * @param {string} params.last_name Last name of the contact to be modified
   * @param {string} params.ssc SSC of the contact to be modified
   * @param {string} params.title Title of the contact to be modified
   * @param {string} params.www Website of the contact to be modified
   * @param {string} params.birth_year Birth year of the contact to be modified
   * @param {string} params.gender Gender of the contact to be modified
   * @param {string} params.address.country Country of the contact to be modified
   * @param {string} params.address.city City of the contact to be modified
   * @param {string} params.address.postal_code Postal Code of the contact to be modified
   * @param {string} params.address.street_address Street Address of the contact to be modified
   * @param {string} params.email Email of the contact to be modified
   * @param {array} params.other_infos Array of other infos containing objects of 'id' => the number of Other Infos and the 'value' => value of the Other Info
   * @example {
     "first_name": "<first name>",
     "last_name": "<last name>",
     "ssc": "<social security number>",
     "title": "<title>",
     "www": "<url>",
     "birth_year": <year>,
     "gender": "<gender>",
     "address": {
       "country": "<country>",
       "city": "<city>",
       "postal_code": "<postal code>",
       "street_address": "<street address>"
     },
     "email": "<email address>",
     "other_infos": [
       {
         "id": 1,
         "value": "<value for other field 1>"
       },
       {
         "id": 2,
         "value": "<value for other field 2>"
       },
       {
         "id": 3,
         "value": "<value for other field 3>"
       },
       // <... other info fields from 4 to 34... >
       {
         "id": 35,
         "value": "<value for other field 35>"
       }
     ]
   }
   * @return {Promise.<void>}
   */
  contactModify(params) {}
}
