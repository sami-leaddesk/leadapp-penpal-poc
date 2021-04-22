## Classes

<dl>
<dt><a href="#LeadAppMethods">LeadAppMethods</a></dt>
<dd><p>Functions provided by LeadDesk parent for child LeadApps.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#LeadAppApi">LeadAppApi(params)</a> ⇒ <code>Promise.&lt;ApiMethods&gt;</code></dt>
<dd><p>Initialize connection to parent LeadDesk application.</p>
</dd>
</dl>

<a name="LeadAppMethods"></a>

## LeadAppMethods
Functions provided by LeadDesk parent for child LeadApps.

**Kind**: global class  

* [LeadAppMethods](#LeadAppMethods)
    * [.fullscreenEnable()](#LeadAppMethods+fullscreenEnable) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.fullscreenDisable()](#LeadAppMethods+fullscreenDisable) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.assistedCallStart(params)](#LeadAppMethods+assistedCallStart) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.contactModify(params)](#LeadAppMethods+contactModify) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="LeadAppMethods+fullscreenEnable"></a>

### leadAppMethods.fullscreenEnable() ⇒ <code>Promise.&lt;void&gt;</code>
Request LeadDesk to open this LeadApp into fullscreen mode

**Kind**: instance method of [<code>LeadAppMethods</code>](#LeadAppMethods)  
<a name="LeadAppMethods+fullscreenDisable"></a>

### leadAppMethods.fullscreenDisable() ⇒ <code>Promise.&lt;void&gt;</code>
Request LeadDesk to cancel fullscreen mode and revert LeadApp back to normal size

**Kind**: instance method of [<code>LeadAppMethods</code>](#LeadAppMethods)  
<a name="LeadAppMethods+assistedCallStart"></a>

### leadAppMethods.assistedCallStart(params) ⇒ <code>Promise.&lt;void&gt;</code>
Request LeadDesk to make assisted call to given number. This will also open the Assisted transfer dialog on LeadDesk side for user to control the call from there on.

**Kind**: instance method of [<code>LeadAppMethods</code>](#LeadAppMethods)  
**Notice**: This function can only be callable when call is active on LeadDesk side. Error is returned if called without an active call.  
**Notice**: Some call engines might not support assisted calls. Error is returned if that is the case.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.phoneNumber | <code>string</code> | Phone number to make the assisted call. Number needs to be in E.164 or pure local number format without any extra characters. |

<a name="LeadAppMethods+contactModify"></a>

### leadAppMethods.contactModify(params) ⇒ <code>Promise.&lt;void&gt;</code>
Request LeadDesk to modify contact with the given data

**Kind**: instance method of [<code>LeadAppMethods</code>](#LeadAppMethods)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.first_name | <code>string</code> | First name of the contact to be modified |
| params.last_name | <code>string</code> | Last name of the contact to be modified |
| params.ssc | <code>string</code> | SSC of the contact to be modified |
| params.title | <code>string</code> | Title of the contact to be modified |
| params.www | <code>string</code> | Website of the contact to be modified |
| params.birth_year | <code>string</code> | Birth year of the contact to be modified |
| params.gender | <code>string</code> | Gender of the contact to be modified |
| params.address.country | <code>string</code> | Country of the contact to be modified |
| params.address.city | <code>string</code> | City of the contact to be modified |
| params.address.postal_code | <code>string</code> | Postal Code of the contact to be modified |
| params.address.street_address | <code>string</code> | Street Address of the contact to be modified |
| params.email | <code>string</code> | Email of the contact to be modified |
| params.other_infos | <code>array</code> | Array of other infos containing objects of 'id' => the number of Other Infos and the 'value' => value of the Other Info |

**Example**  
```js
{
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
```
<a name="LeadAppApi"></a>

## LeadAppApi(params) ⇒ <code>Promise.&lt;ApiMethods&gt;</code>
Initialize connection to parent LeadDesk application.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.parentOrigin | <code>string</code> \| <code>RegExp</code> | Overwrite default parent domain filter to allow custom domain as parent application. Usefull for e.g. development when running parent in localhost. Example: 'http://localhost' |

