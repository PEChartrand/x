!function(){const e=document.querySelector("#ixomclient");let o="";e.dataset.hasOwnProperty("pid")&&(o="p="+encodeURIComponent(e.dataset.pid));let t="";e.dataset.hasOwnProperty("tid")&&(t="trace="+encodeURIComponent(e.dataset.tid));const i=new XMLHttpRequest,n="https://"+e.dataset.eturl+"/event/oe?"+o+"&"+t+"&t=5555";i.open("POST",n),i.send()}(),function(e,o,t){if("object"==typeof t&&"string"!=typeof t.nodeName)o(e,t);else{t={};var i=["1.3.15-dev"];function n(e){for(var o in e)e.hasOwnProperty(o)&&(e[o]=n(e[o]));return Object.freeze(e)}for(var s in i.push("default"),o(e,t),t)t.hasOwnProperty(s)&&(null==Object.getOwnPropertyDescriptor(e,s)&&Object.defineProperty(e,s,{value:{}}),i.forEach(function(o){if(null==Object.getOwnPropertyDescriptor(e[s],o)){var i=n(t[s]);Object.defineProperty(e[s],o,{get:function(){return i},enumerable:!0})}}))}}("undefined"==typeof global?this:global,function(omidGlobal,omidExports){"use strict";var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.arrayIteratorImpl=function(e){var o=0;return function(){return o<e.length?{done:!1,value:e[o++]}:{done:!0}}},$jscomp.arrayIterator=function(e){return{next:$jscomp.arrayIteratorImpl(e)}},$jscomp.makeIterator=function(e){var o="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return o?o.call(e):$jscomp.arrayIterator(e)},$jscomp.arrayFromIterator=function(e){for(var o,t=[];!(o=e.next()).done;)t.push(o.value);return t},$jscomp.arrayFromIterable=function(e){return e instanceof Array?e:$jscomp.arrayFromIterator($jscomp.makeIterator(e))},$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.SIMPLE_FROUND_POLYFILL=!1,$jscomp.objectCreate=$jscomp.ASSUME_ES5||"function"==typeof Object.create?Object.create:function(e){var o=function(){};return o.prototype=e,new o},$jscomp.underscoreProtoCanBeSet=function(){var e={};try{return e.__proto__={a:!0},e.a}catch(e){}return!1},$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(e,o){if(e.__proto__=o,e.__proto__!==o)throw new TypeError(e+" is not extensible");return e}:null,$jscomp.inherits=function(e,o){if(e.prototype=$jscomp.objectCreate(o.prototype),e.prototype.constructor=e,$jscomp.setPrototypeOf){var t=$jscomp.setPrototypeOf;t(e,o)}else for(t in o)if("prototype"!=t)if(Object.defineProperties){var i=Object.getOwnPropertyDescriptor(o,t);i&&Object.defineProperty(e,t,i)}else e[t]=o[t];e.superClass_=o.prototype};var module$exports$omid$common$constants={AdEventType:{IMPRESSION:"impression",LOADED:"loaded",GEOMETRY_CHANGE:"geometryChange",SESSION_START:"sessionStart",SESSION_ERROR:"sessionError",SESSION_FINISH:"sessionFinish",MEDIA:"media",VIDEO:"video",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",PAUSE:"pause",RESUME:"resume",BUFFER_START:"bufferStart",BUFFER_FINISH:"bufferFinish",SKIPPED:"skipped",VOLUME_CHANGE:"volumeChange",PLAYER_STATE_CHANGE:"playerStateChange",AD_USER_INTERACTION:"adUserInteraction",STATE_CHANGE:"stateChange"},MediaEventType:{LOADED:"loaded",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",PAUSE:"pause",RESUME:"resume",BUFFER_START:"bufferStart",BUFFER_FINISH:"bufferFinish",SKIPPED:"skipped",VOLUME_CHANGE:"volumeChange",PLAYER_STATE_CHANGE:"playerStateChange",AD_USER_INTERACTION:"adUserInteraction"},ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",UNSPECIFIED:"unspecified",LOADED:"loaded",BEGIN_TO_RENDER:"beginToRender",ONE_PIXEL:"onePixel",VIEWABLE:"viewable",AUDIBLE:"audible",OTHER:"other"},ErrorType:{GENERIC:"generic",VIDEO:"video",MEDIA:"media"},AdSessionType:{NATIVE:"native",HTML:"html",JAVASCRIPT:"javascript"},EventOwner:{NATIVE:"native",JAVASCRIPT:"javascript",NONE:"none"},AccessMode:{FULL:"full",DOMAIN:"domain",LIMITED:"limited"},AppState:{BACKGROUNDED:"backgrounded",FOREGROUNDED:"foregrounded"},Environment:{APP:"app",WEB:"web"},InteractionType:{CLICK:"click",INVITATION_ACCEPT:"invitationAccept"},CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",HTML_DISPLAY:"htmlDisplay",NATIVE_DISPLAY:"nativeDisplay",VIDEO:"video",AUDIO:"audio"},MediaType:{DISPLAY:"display",VIDEO:"video"},Reason:{NOT_FOUND:"notFound",HIDDEN:"hidden",BACKGROUNDED:"backgrounded",VIEWPORT:"viewport",OBSTRUCTED:"obstructed",CLIPPED:"clipped",UNMEASURABLE:"unmeasurable",NO_WINDOW_FOCUS:"noWindowFocus"},SupportedFeatures:{CONTAINER:"clid",VIDEO:"vlid"},VideoPosition:{PREROLL:"preroll",MIDROLL:"midroll",POSTROLL:"postroll",STANDALONE:"standalone"},VideoPlayerState:{MINIMIZED:"minimized",COLLAPSED:"collapsed",NORMAL:"normal",EXPANDED:"expanded",FULLSCREEN:"fullscreen"},NativeViewKeys:{X:"x",LEFT:"left",Y:"y",TOP:"top",WIDTH:"width",HEIGHT:"height",AD_SESSION_ID:"adSessionId",IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor",CLIPS_TO_BOUNDS:"clipsToBounds",CHILD_VIEWS:"childViews",END_X:"endX",END_Y:"endY",OBSTRUCTIONS:"obstructions",OBSTRUCTION_CLASS:"obstructionClass",OBSTRUCTION_PURPOSE:"obstructionPurpose",OBSTRUCTION_REASON:"obstructionReason",PIXELS:"pixels",HAS_WINDOW_FOCUS:"hasWindowFocus"},MeasurementStateChangeSource:{CONTAINER:"container",CREATIVE:"creative"},ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"},CommunicationType:{NONE:"NONE",DIRECT:"DIRECT",POST_MESSAGE:"POST_MESSAGE"},OmidImplementer:{OMSDK:"omsdk"}},module$contents$omid$common$InternalMessage_GUID_KEY="omid_message_guid",module$contents$omid$common$InternalMessage_METHOD_KEY="omid_message_method",module$contents$omid$common$InternalMessage_VERSION_KEY="omid_message_version",module$contents$omid$common$InternalMessage_ARGS_KEY="omid_message_args",module$exports$omid$common$InternalMessage=function(e,o,t,i){this.guid=e,this.method=o,this.version=t,this.args=i};module$exports$omid$common$InternalMessage.isValidSerializedMessage=function(e){return!!e&&void 0!==e[module$contents$omid$common$InternalMessage_GUID_KEY]&&void 0!==e[module$contents$omid$common$InternalMessage_METHOD_KEY]&&void 0!==e[module$contents$omid$common$InternalMessage_VERSION_KEY]&&"string"==typeof e[module$contents$omid$common$InternalMessage_GUID_KEY]&&"string"==typeof e[module$contents$omid$common$InternalMessage_METHOD_KEY]&&"string"==typeof e[module$contents$omid$common$InternalMessage_VERSION_KEY]&&(void 0===e[module$contents$omid$common$InternalMessage_ARGS_KEY]||void 0!==e[module$contents$omid$common$InternalMessage_ARGS_KEY])},module$exports$omid$common$InternalMessage.deserialize=function(e){return new module$exports$omid$common$InternalMessage(e[module$contents$omid$common$InternalMessage_GUID_KEY],e[module$contents$omid$common$InternalMessage_METHOD_KEY],e[module$contents$omid$common$InternalMessage_VERSION_KEY],e[module$contents$omid$common$InternalMessage_ARGS_KEY])},module$exports$omid$common$InternalMessage.prototype.serialize=function(){var e={};return e[module$contents$omid$common$InternalMessage_GUID_KEY]=this.guid,e[module$contents$omid$common$InternalMessage_METHOD_KEY]=this.method,e[module$contents$omid$common$InternalMessage_VERSION_KEY]=this.version,e=e,void 0!==this.args&&(e[module$contents$omid$common$InternalMessage_ARGS_KEY]=this.args),e};var module$exports$omid$common$Communication=function(e){this.to=e,this.communicationType_=module$exports$omid$common$constants.CommunicationType.NONE};module$exports$omid$common$Communication.prototype.sendMessage=function(e,o){},module$exports$omid$common$Communication.prototype.handleMessage=function(e,o){this.onMessage&&this.onMessage(e,o)},module$exports$omid$common$Communication.prototype.serialize=function(e){return JSON.stringify(e)},module$exports$omid$common$Communication.prototype.deserialize=function(e){return JSON.parse(e)},module$exports$omid$common$Communication.prototype.isDirectCommunication=function(){return this.communicationType_===module$exports$omid$common$constants.CommunicationType.DIRECT},module$exports$omid$common$Communication.prototype.isCrossOrigin=function(){};var module$exports$omid$common$logger={error:function(e){for(var o=[],t=0;t<arguments.length;++t)o[t-0]=arguments[t];module$contents$omid$common$logger_executeLog(function(){throw new(Function.prototype.bind.apply(Error,[null,"Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(o))))},function(){return console.error.apply(console,$jscomp.arrayFromIterable(o))})},debug:function(e){for(var o=[],t=0;t<arguments.length;++t)o[t-0]=arguments[t];module$contents$omid$common$logger_executeLog(function(){},function(){return console.error.apply(console,$jscomp.arrayFromIterable(o))})}};function module$contents$omid$common$logger_executeLog(e,o){"undefined"!=typeof jasmine&&jasmine?e():"undefined"!=typeof console&&console&&console.error&&o()}var module$exports$omid$common$eventTypedefs={},module$exports$omid$common$version={ApiVersion:"1.0",Version:"1.3.32-iab3343"},module$exports$omid$common$argsChecker={assertTruthyString:function(e,o){if(!o)throw Error("Value for "+e+" is undefined, null or blank.");if("string"!=typeof o&&!(o instanceof String))throw Error("Value for "+e+" is not a string.");if(""===o.trim())throw Error("Value for "+e+" is empty string.")},assertNotNullObject:function(e,o){if(null==o)throw Error("Value for "+e+" is undefined or null")},assertNumber:function(e,o){if(null==o)throw Error(e+" must not be null or undefined.");if("number"!=typeof o||isNaN(o))throw Error("Value for "+e+" is not a number")},assertNumberBetween:function(e,o,t,i){if((0,module$exports$omid$common$argsChecker.assertNumber)(e,o),o<t||o>i)throw Error("Value for "+e+" is outside the range ["+t+","+i+"]")},assertFunction:function(e,o){if(!o)throw Error(e+" must not be truthy.")},assertPositiveNumber:function(e,o){if((0,module$exports$omid$common$argsChecker.assertNumber)(e,o),0>o)throw Error(e+" must be a positive number.")}},module$exports$omid$common$VersionUtils={},module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER=3;module$exports$omid$common$VersionUtils.isValidVersion=function(e){return/\d+\.\d+\.\d+(-.*)?/.test(e)},module$exports$omid$common$VersionUtils.versionGreaterOrEqual=function(e,o){e=e.split("-")[0].split("."),o=o.split("-")[0].split(".");for(var t=0;t<module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER;t++){var i=parseInt(e[t],10),n=parseInt(o[t],10);if(i>n)break;if(i<n)return!1}return!0};var module$exports$omid$common$ArgsSerDe={},module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION="1.0.3";module$exports$omid$common$ArgsSerDe.serializeMessageArgs=function(e,o){return(0,module$exports$omid$common$VersionUtils.isValidVersion)(e)&&(0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(e,module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION)?o:JSON.stringify(o)},module$exports$omid$common$ArgsSerDe.deserializeMessageArgs=function(e,o){return(0,module$exports$omid$common$VersionUtils.isValidVersion)(e)&&(0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(e,module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION)?o||[]:o&&"string"==typeof o?JSON.parse(o):[]};var module$exports$omid$common$guid={generateGuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var o=16*Math.random()|0;return e="y"===e?(3&o|8).toString(16):o.toString(16)})}},module$exports$omid$common$OmidGlobalProvider={};function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal(){if(void 0!==omidGlobal&&omidGlobal)return omidGlobal;if("undefined"!=typeof global&&global)return global;if("undefined"!=typeof window&&window)return window;if("undefined"!=typeof globalThis&&globalThis)return globalThis;var e=Function("return this")();if(e)return e;throw Error("Could not determine global object context.")}module$exports$omid$common$OmidGlobalProvider.omidGlobal=module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();var module$exports$omid$common$exporter={};function module$contents$omid$common$exporter_getOmidExports(){return void 0===omidExports?null:omidExports}function module$contents$omid$common$exporter_getOrCreateName(e,o){return e&&(e[o]||(e[o]={}))}module$exports$omid$common$exporter.packageExport=function(e,o,t){(t=void 0===t?module$contents$omid$common$exporter_getOmidExports():t)&&((e=e.split(".")).slice(0,e.length-1).reduce(module$contents$omid$common$exporter_getOrCreateName,t)[e[e.length-1]]=o)};var module$exports$omid$common$windowUtils={};function module$contents$omid$common$windowUtils_isValidWindow(e){return null!=e&&void 0!==e.top&&null!=e.top}function module$contents$omid$common$windowUtils_isSameOriginForIE(e){return""===e.x||""!==e.x}module$exports$omid$common$windowUtils.isCrossOrigin=function(e){if(e===module$exports$omid$common$OmidGlobalProvider.omidGlobal)return!1;try{if(void 0===e.location.hostname)return!0;module$contents$omid$common$windowUtils_isSameOriginForIE(e)}catch(e){return!0}return!1},module$exports$omid$common$windowUtils.resolveGlobalContext=function(e){return void 0===e&&"undefined"!=typeof window&&window&&(e=window),module$contents$omid$common$windowUtils_isValidWindow(e)?e:module$exports$omid$common$OmidGlobalProvider.omidGlobal},module$exports$omid$common$windowUtils.resolveTopWindowContext=function(e){return module$contents$omid$common$windowUtils_isValidWindow(e)?e.top:module$exports$omid$common$OmidGlobalProvider.omidGlobal},module$exports$omid$common$windowUtils.isTopWindowAccessible=function(e){try{return!!e.top.location.href}catch(e){return!1}},module$exports$omid$common$windowUtils.evaluatePageUrl=function(e){if(!module$contents$omid$common$windowUtils_isValidWindow(e))return null;try{var o=e.top;return(0,module$exports$omid$common$windowUtils.isCrossOrigin)(o)?null:o.location.href}catch(e){return null}};var module$exports$omid$common$DirectCommunication=function(e){module$exports$omid$common$Communication.call(this,e),this.communicationType_=module$exports$omid$common$constants.CommunicationType.DIRECT,this.handleExportedMessage=module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this)};$jscomp.inherits(module$exports$omid$common$DirectCommunication,module$exports$omid$common$Communication),module$exports$omid$common$DirectCommunication.prototype.sendMessage=function(e,o){if(!(o=void 0===o?this.to:o))throw Error("Message destination must be defined at construction time or when sending the message.");o.handleExportedMessage(e.serialize(),this)},module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage=function(e,o){module$exports$omid$common$InternalMessage.isValidSerializedMessage(e)&&this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(e),o)},module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin=function(){return!1};var module$exports$omid$common$PostMessageCommunication=function(e,o){o=void 0===o?module$exports$omid$common$OmidGlobalProvider.omidGlobal:o,module$exports$omid$common$Communication.call(this,o);var t=this;this.communicationType_=module$exports$omid$common$constants.CommunicationType.POST_MESSAGE,e.addEventListener("message",function(e){if("object"==typeof e.data){var o=e.data;module$exports$omid$common$InternalMessage.isValidSerializedMessage(o)&&(o=module$exports$omid$common$InternalMessage.deserialize(o),e.source&&t.handleMessage(o,e.source))}})};$jscomp.inherits(module$exports$omid$common$PostMessageCommunication,module$exports$omid$common$Communication),module$exports$omid$common$PostMessageCommunication.isCompatibleContext=function(e){return!!(e&&e.addEventListener&&e.postMessage)},module$exports$omid$common$PostMessageCommunication.prototype.sendMessage=function(e,o){if(!(o=void 0===o?this.to:o))throw Error("Message destination must be defined at construction time or when sending the message.");o.postMessage(e.serialize(),"*")},module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin=function(){return!this.to||(0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to)};var module$exports$omid$common$DetectOmid={OMID_PRESENT_FRAME_NAME:"omid_v1_present",isOmidPresent:function(e){try{return!!e.frames&&!!e.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME]}catch(e){return!1}},declareOmidPresence:function(e){e.frames&&e.document&&(module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in e.frames||(null==e.document.body&&module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(e)?module$exports$omid$common$DetectOmid.registerMutationObserver_(e):e.document.body?module$exports$omid$common$DetectOmid.appendPresenceIframe_(e):e.document.write('<iframe style="display:none" id="'+module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME+'" name="'+module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME+'"></iframe>')))},appendPresenceIframe_:function(e){var o=e.document.createElement("iframe");o.id=module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME,o.name=module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME,o.style.display="none",e.document.body.appendChild(o)},isMutationObserverAvailable_:function(e){return"MutationObserver"in e},registerMutationObserver_:function(e){var o=new MutationObserver(function(t){t.forEach(function(t){"BODY"===t.addedNodes[0].nodeName&&(module$exports$omid$common$DetectOmid.appendPresenceIframe_(e),o.disconnect())})});o.observe(e.document.documentElement,{childList:!0})}},module$exports$omid$common$serviceCommunication={},module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME=["omid","v1_SessionServiceCommunication"],module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME=["omid","v1_VerificationServiceCommunication"],module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME=["omidVerificationProperties","serviceWindow"];function module$contents$omid$common$serviceCommunication_getValueForKeypath(e,o){return o.reduce(function(e,o){return e&&e[o]},e)}function module$contents$omid$common$serviceCommunication_startServiceCommunication(e,o,t,i){if(!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(o))try{var n=module$contents$omid$common$serviceCommunication_getValueForKeypath(o,t);if(n)return new module$exports$omid$common$DirectCommunication(n)}catch(e){}return i(o)?new module$exports$omid$common$PostMessageCommunication(e,o):null}function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(e,o,t,i){for(var n=(o=$jscomp.makeIterator(o)).next();!n.done;n=o.next())if(n=module$contents$omid$common$serviceCommunication_startServiceCommunication(e,n.value,t,i))return n;return null}module$exports$omid$common$serviceCommunication.startSessionServiceCommunication=function(e,o,t){t=void 0===t?module$exports$omid$common$DetectOmid.isOmidPresent:t;var i=[e,(0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(e)];return o&&i.unshift(o),module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(e,i,module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME,t)},module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication=function(e,o){o=void 0===o?module$exports$omid$common$DetectOmid.isOmidPresent:o;var t=[],i=module$contents$omid$common$serviceCommunication_getValueForKeypath(e,module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);return i&&t.push(i),t.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(e)),module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(e,t,module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME,o)};var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION=module$exports$omid$common$version.Version,module$contents$omid$verificationClient$VerificationClient_EventCallback;function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid(){var e=module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;return e&&"function"==typeof e.registerSessionObserver&&"function"==typeof e.addEventListener?e:null}var module$exports$omid$verificationClient$VerificationClient=function(e){(this.communication=e||(0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)()))?this.communication.onMessage=this.handleMessage_.bind(this):(e=module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid())&&(this.omid3p=e),this.remoteIntervals_=this.remoteTimeouts_=0,this.callbackMap_={},this.imgCache_=[],this.injectionId_=(e=module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties)?e.injectionId:void 0};module$exports$omid$verificationClient$VerificationClient.prototype.isSupported=function(){return!(!this.communication&&!this.omid3p)},module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource=function(){var e=module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;if(e&&e.injectionSource)return e.injectionSource},module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver=function(e,o){(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute",e),this.omid3p?this.omid3p.registerSessionObserver(e,o,this.injectionId_):this.sendMessage_("addSessionListener",e,o,this.injectionId_)},module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener=function(e,o){(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType",e),(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute",o),this.omid3p?this.omid3p.addEventListener(e,o):this.sendMessage_("addEventListener",o,e)},module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl=function(e,o,t){(0,module$exports$omid$common$argsChecker.assertTruthyString)("url",e),module$exports$omid$common$OmidGlobalProvider.omidGlobal.document&&module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement?this.sendUrlWithImg_(e,o,t):this.sendMessage_("sendUrl",function(e){e&&o?o():!e&&t&&t()},e)},module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_=function(e,o,t){var i=this,n=module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");this.imgCache_.push(n);var s=function(e){var o=i.imgCache_.indexOf(n);0<=o&&i.imgCache_.splice(o,1),e&&e()};n.addEventListener("load",s.bind(this,o)),n.addEventListener("error",s.bind(this,t)),n.src=e},module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource=function(e,o,t){var i=this;(0,module$exports$omid$common$argsChecker.assertTruthyString)("url",e),module$exports$omid$common$OmidGlobalProvider.omidGlobal.document?this.injectJavascriptResourceUrlInDom_(e,o,t):this.sendMessage_("injectJavaScriptResource",function(n,s){n?(i.evaluateJavaScript_(s,e),o()):(module$exports$omid$common$logger.error("Service failed to load JavaScript resource."),t())},e)},module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_=function(e,o,t){var i=module$exports$omid$common$OmidGlobalProvider.omidGlobal.document,n=i.body;(i=i.createElement("script")).onload=o,i.onerror=t,i.src=e,i.type="application/javascript",n.appendChild(i)},module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_=function(a,b){try{eval(a)}catch(e){module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "'+b+'".')}},module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout=function(e,o){if((0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute",e),(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis",o),this.hasTimeoutMethods_())return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(e,o);var t=this.remoteTimeouts_++;return this.sendMessage_("setTimeout",e,t,o),t},module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout=function(e){(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId",e),this.hasTimeoutMethods_()?module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(e):this.sendOneWayMessage_("clearTimeout",e)},module$exports$omid$verificationClient$VerificationClient.prototype.setInterval=function(e,o){if((0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute",e),(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis",o),this.hasIntervalMethods_())return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(e,o);var t=this.remoteIntervals_++;return this.sendMessage_("setInterval",e,t,o),t},module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval=function(e){(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId",e),this.hasIntervalMethods_()?module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(e):this.sendOneWayMessage_("clearInterval",e)},module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_=function(){return"function"==typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout&&"function"==typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout},module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_=function(){return"function"==typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval&&"function"==typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval},module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_=function(e,o){o=e.method;var t=e.guid;if(e=e.args,"response"===o&&this.callbackMap_[t]){var i=(0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION,e);this.callbackMap_[t].apply(this,i)}"error"===o&&window.console&&module$exports$omid$common$logger.error(e)},module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_=function(e,o){for(var t=[],i=1;i<arguments.length;++i)t[i-1]=arguments[i];this.sendMessage_.apply(this,[e,null].concat($jscomp.arrayFromIterable(t)))},module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_=function(e,o,t){for(var i=[],n=2;n<arguments.length;++n)i[n-2]=arguments[n];this.communication&&(n=(0,module$exports$omid$common$guid.generateGuid)(),o&&(this.callbackMap_[n]=o),i=new module$exports$omid$common$InternalMessage(n,"VerificationService."+e,module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION,(0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION,i)),this.communication.sendMessage(i))},(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient",module$exports$omid$verificationClient$VerificationClient);var module$contents$omid$client$VisibilityMeasurementClient_sentImpressions={},module$contents$omid$client$VisibilityMeasurementClient_sessionEvents={},module$contents$omid$client$VisibilityMeasurementClient_eventIDs={SESSION_START:"SESSION_START",SESSION_FINISH:"SESSION_FINISH",IMPRESSION:"IMPRESSION",LOADED:"LOADED",GEOMETRY_CHANGE_100:"GEOMETRY_CHANGE_100",GEOMETRY_CHANGE_50:"GEOMETRY_CHANGE_50",GEOMETRY_CHANGE_0:"GEOMETRY_CHANGE_0",SESSION_ERROR:"SESSION_ERROR"},module$exports$omid$client$VisibilityMeasurementClient=function(e){this.log("constructor","debug"),this.verificationClient_=e,console.log("vc: "+JSON.stringify(this.verificationClient_)),console.log("vc.callback: "+JSON.stringify(this.verificationClient_.callbackMap_)),this.IMPRESSION_EVENT_TYPE=1,this.GEOMETRY_EVENT_TYPE=2,this.CUSTOM_EVENT_TYPE=30,this.TYPE_QUERY_KEY="t",e=document.querySelector("#ixomclient"),this.validateMetaData(e)?(this.debugMode=e.dataset.hasOwnProperty("dbg"),this.log("this.debugMode","debug"),this.verificationClient_.isSupported()||this.log("Omid was not available for client to call","warn"),this.registerToEvents()):this.log("meta data is invalid","error")};module$exports$omid$client$VisibilityMeasurementClient.prototype.registerToEvents=function(){this.log("registerToEvents()","debug");try{this.verificationClient_.registerSessionObserver(function(e){this.onSessionEvent_(e)}.bind(this))}catch(e){this.log(e.name+" "+e.media,"warn")}this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.LOADED,this.loaded_.bind(this)),this.log("this.verificationClient_.addEventListener(AdEventType.LOADED","debug"),this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.GEOMETRY_CHANGE,this.handleGeometryChangeEvent_.bind(this)),this.log("addEventListener(AdEventType.GEOMETRY_CHANGE","debug"),this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.IMPRESSION,this.registerPubImpression_.bind(this)),this.log("addEventListener(AdEventType.IMPRESSION","debug"),console.log("vc.callback: "+JSON.stringify(this.verificationClient_.callbackMap_))},module$exports$omid$client$VisibilityMeasurementClient.prototype.log=function(e,o){switch(o){case"debug":this.debugMode&&console.debug("IX: "+e);break;case"warn":console.warn("IX: "+e);break;case"error":console.error("IX: "+e);break;default:console.log("IX: "+e)}},module$exports$omid$client$VisibilityMeasurementClient.prototype.validateMetaData=function(e){return null==e&&this.log("An element with ID ixomclient is required for this omclient to work","error"),this.currentScriptTag=e,e.dataset.hasOwnProperty("eturl")||this.log("no event tracker domain fond","warn"),this.eventTrackerDomain=e.dataset.eturl,e.dataset.hasOwnProperty("pid")||this.log("no publisher id has been provided","warn"),this.publisherIDParameter="p="+encodeURIComponent(e.dataset.pid),e.dataset.hasOwnProperty("tid")||this.log("no trace id has been provided","warn"),this.traceIDParameter="trace="+encodeURIComponent(e.dataset.tid),!0},module$exports$omid$client$VisibilityMeasurementClient.prototype.getEventTracerUrl=function(e,o){e=this.TYPE_QUERY_KEY+"="+encodeURIComponent(e);var t="";return null!=o&&o.forEach(function(e){t+="&"+encodeURIComponent(e.key)+"="+encodeURIComponent(e.value)}),"https://"+this.eventTrackerDomain+"/event/oe?"+this.publisherIDParameter+"&"+this.traceIDParameter+"&"+e+t},module$exports$omid$client$VisibilityMeasurementClient.prototype.sendToEventTracker=function(e,o,t){this.log("sendToEventTracker: "+e+" "+(null!==o?o[0].value:""),"debug"),e=this.getEventTracerUrl(e,o),(o=new XMLHttpRequest).open("POST",e),o.setRequestHeader("Content-Type","application/json"),o.send(t)},module$exports$omid$client$VisibilityMeasurementClient.prototype.registerPubImpression_=function(e){this.log("registerPubImpression_ "+e.adSessionId,"debug"),this.log(e.data,"debug"),this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"pubimp"}])},module$exports$omid$client$VisibilityMeasurementClient.prototype.onSessionEvent_=function(e){switch(this.log("onSessionEvent_() event.type: "+e.type+", adSessionID: "+e.adSessionId,"debug"),e.type){case module$exports$omid$common$constants.AdEventType.SESSION_START:if(this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.SESSION_START))break;module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e.adSessionId][module$contents$omid$client$VisibilityMeasurementClient_eventIDs.SESSION_START]=!0,this.sessionStartOccurred();break;case module$exports$omid$common$constants.AdEventType.LOADED:if(this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.LOADED))break;module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e.adSessionId][module$contents$omid$client$VisibilityMeasurementClient_eventIDs.LOADED]=!0,this.resetSessionFlags_();break;case module$exports$omid$common$constants.AdEventType.SESSION_FINISH:if(this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.SESSION_FINISH))break;module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e.adSessionId][module$contents$omid$client$VisibilityMeasurementClient_eventIDs.SESSION_FINISH]=!0,this.viewed(e.adSessionId),this.resetSessionFlags_(),this.registerToEvents();break;case module$exports$omid$common$constants.AdEventType.SESSION_ERROR:this.callErrorOccurred_(e.data)}},module$exports$omid$client$VisibilityMeasurementClient.prototype.viewed=function(e){this.log("viewed","debug"),this.isEventSent(e,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_100)||this.isEventSent(e,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_50)||this.isEventSent(e,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_0)?(this.log("isviewed","debug"),this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"viewed"}])):(this.log("notviewed","debug"),this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"notviewed"}]))},module$exports$omid$client$VisibilityMeasurementClient.prototype.loaded_=function(e){this.log("loaded_ "+e.adSessionId,"debug"),this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"adload"}]),this.log("loaded","debug")},module$exports$omid$client$VisibilityMeasurementClient.prototype.sessionStartOccurred=function(){this.log("impressionOccured()","debug"),this.callSessionStartOccurred_()},module$exports$omid$client$VisibilityMeasurementClient.prototype.callSessionStartOccurred_=function(){this.log("callSessionStartOccurred_","debug"),this.sendToEventTracker(this.IMPRESSION_EVENT_TYPE,null)},module$exports$omid$client$VisibilityMeasurementClient.prototype.callErrorOccurred_=function(e){this.log("callErrorOccurred - type:"+e.data.errorType+"; message: "+e.data.message,"warn"),this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"error"}])},module$exports$omid$client$VisibilityMeasurementClient.prototype.fireImpUrls_=function(){var e=this;this.log("fireImpUrls_()","debug");for(var o=0,t={};this.currentScriptTag.dataset.hasOwnProperty("impurl-"+o);)t.$jscomp$loop$prop$url$8=this.currentScriptTag.dataset["impurl-"+o],module$contents$omid$client$VisibilityMeasurementClient_sentImpressions[t.$jscomp$loop$prop$url$8]?this.log("impression url has been fired : "+t.$jscomp$loop$prop$url$8,"debug"):(this.log("===> FIRING IMPRESSION ["+o+"] <===: "+t.$jscomp$loop$prop$url$8,"debug"),t.$jscomp$loop$prop$xhr$7=new XMLHttpRequest,t.$jscomp$loop$prop$xhr$7.onreadystatechange=function(o){return function(){o.$jscomp$loop$prop$xhr$7.readyState===XMLHttpRequest.DONE&&200!==o.$jscomp$loop$prop$xhr$7.status&&(e.log("impression response error "+o.$jscomp$loop$prop$url$8,"debug"),e.sendToEventTracker(e.CUSTOM_EVENT_TYPE,[{key:"fd",value:"badresponse"}]))}}(t),module$contents$omid$client$VisibilityMeasurementClient_sentImpressions[t.$jscomp$loop$prop$url$8]=!0,t.$jscomp$loop$prop$xhr$7.open("GET",t.$jscomp$loop$prop$url$8),t.$jscomp$loop$prop$xhr$7.send()),o++,t={$jscomp$loop$prop$xhr$7:t.$jscomp$loop$prop$xhr$7,$jscomp$loop$prop$url$8:t.$jscomp$loop$prop$url$8};0<o?(this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"impurlfired"}]),this.log("imp url fired","debug")):(this.sendToEventTracker(this.CUSTOM_EVENT_TYPE,[{key:"fd",value:"impurlnotfired"}]),this.log("imp url not fired","debug"))},module$exports$omid$client$VisibilityMeasurementClient.prototype.handleGeometryChangeEvent_=function(e){if(this.log("handleGeometryChangeEvent_ "+e.adSessionId,"debug"),!this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_100)){var o=e.data.adView.percentageInView;this.log("geo event percentageinview "+o,"debug"),0<o&&this.fireImpUrls_(),100!==o||this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_100)?50<=o&&100>o&&!this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_50)?(this.sendToEventTracker(this.GEOMETRY_EVENT_TYPE,null,JSON.stringify(e.data)),this.log("percentageInView >= 50","debug"),this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_50)||(module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e.adSessionId][module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_50]=!0)):0<o&&50>o&&!this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_0)&&(this.sendToEventTracker(this.GEOMETRY_EVENT_TYPE,null,JSON.stringify(e.data)),this.log("percentageInView > 0","debug"),this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_0)||(module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e.adSessionId][module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_0]=!0)):(this.sendToEventTracker(this.GEOMETRY_EVENT_TYPE,null,JSON.stringify(e.data)),this.log("percentageInView === 100","debug"),this.isEventSent(e.adSessionId,module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_100)||(module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e.adSessionId][module$contents$omid$client$VisibilityMeasurementClient_eventIDs.GEOMETRY_CHANGE_100]=!0))}},module$exports$omid$client$VisibilityMeasurementClient.prototype.resetSessionFlags_=function(){this.log("resetSessionFlags_","debug"),this.log("reset sentImpressions: "+JSON.stringify(module$contents$omid$client$VisibilityMeasurementClient_sentImpressions),"debug"),module$contents$omid$client$VisibilityMeasurementClient_sentImpressions={},module$contents$omid$client$VisibilityMeasurementClient_sessionEvents={}},module$exports$omid$client$VisibilityMeasurementClient.prototype.isEventSent=function(e,o){return module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e]?(this.log("Event IS sent: "+!!module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e][o]+" "+o+" "+e,"debug"),!!module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e][o]):(module$contents$omid$client$VisibilityMeasurementClient_sessionEvents[e]={},this.log("New Session created : "+e,"debug"),!1)},new module$exports$omid$client$VisibilityMeasurementClient(new module$exports$omid$verificationClient$VerificationClient)},"undefined"==typeof exports?void 0:exports);