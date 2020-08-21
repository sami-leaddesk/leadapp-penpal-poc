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

<a name="LeadAppApi"></a>

## LeadAppApi(params) ⇒ <code>Promise.&lt;ApiMethods&gt;</code>
Initialize connection to parent LeadDesk application.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.parentOrigin | <code>string</code> \| <code>RegExp</code> | Overwrite default parent domain filter to allow custom domain as parent application. Usefull for e.g. development when running parent in localhost. Example: 'http://localhost' |

