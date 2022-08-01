// eslint-disable-next-line no-undef

console.log("IX: RENDER IX_RENDER_COUNTER_95784 render " + IX_RENDER_COUNTER_95784);


if (IX_RENDER_COUNTER_95784 === undefined) {
    var IX_RENDER_COUNTER_95784 = 0
    console.log("IX: RENDER IX_RENDER_COUNTER_95784 init " + IX_RENDER_COUNTER_95784);
} else {
    IX_RENDER_COUNTER_95784++
    console.log("IX: RENDER IX_RENDER_COUNTER_95784 increment " + IX_RENDER_COUNTER_95784);
}

(function() {
    const currentScriptTag = document.querySelector('#ixomclient');
    let pid = '';
    if (currentScriptTag.dataset.hasOwnProperty('pid')) {
        pid = 'p=' + encodeURIComponent(currentScriptTag.dataset.pid);
    }
    let tid = '';
    if (currentScriptTag.dataset.hasOwnProperty('tid')) {
        tid = 'trace=' + encodeURIComponent(currentScriptTag.dataset.tid);
    }
    const Http = new XMLHttpRequest();
    const url = 'https://' + currentScriptTag.dataset.eturl + '/event/oe?' + pid + '&' + tid + '&t=5555';
    Http.open('POST', url);
    Http.send();
})();

;(function(omidGlobal, factory, exports) {
  // CommonJS support
  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(omidGlobal, exports);

  // If neither AMD nor CommonJS are used, export to a versioned name in the
  // global context.
  } else {
    var exports = {};
    var versions = ['1.3.15-dev'];
    var additionalVersionString = 'default';
    if (!!additionalVersionString) {
       versions.push(additionalVersionString);
    }

    factory(omidGlobal, exports);

    function deepFreeze(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          object[key] = deepFreeze(object[key]);
        }
      }
      return Object.freeze(object);
    }

    // Inject and freeze the exported components of omid.
    for (var key in exports) {
      if (exports.hasOwnProperty(key)) {
        if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
          // Define the top level property in the global scope
          Object.defineProperty(omidGlobal, key, {
            value: {},
          });
        }
        versions.forEach(function(version) {
          if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
            var frozenObject = deepFreeze(exports[key]);
            // Define the object exports keyed-off versions
            Object.defineProperty(omidGlobal[key], version, {
              get: function () {
                return frozenObject;
              },
              enumerable: true,
            });
          }
        });
      }
    }
  }
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
  'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.arrayFromIterator = function(a) {
  for (var b, c = []; !(b = a.next()).done;) {
    c.push(b.value);
  }
  return c;
};
$jscomp.arrayFromIterable = function(a) {
  return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
  var b = function() {
  };
  b.prototype = a;
  return new b;
};
$jscomp.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (c) {
  }
  return !1;
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + " is not extensible");
  }
  return a;
} : null;
$jscomp.inherits = function(a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf;
    c(a, b);
  } else {
    for (c in b) {
      if ("prototype" != c) {
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
  a.superClass_ = b.prototype;
};
var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", 
PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", 
UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", DOMAIN:"domain", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", 
WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped", UNMEASURABLE:"unmeasurable", NO_WINDOW_FOCUS:"noWindowFocus"}, SupportedFeatures:{CONTAINER:"clid", 
VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", 
OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose", OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels", HAS_WINDOW_FOCUS:"hasWindowFocus"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
  this.guid = a;
  this.method = b;
  this.version = c;
  this.args = d;
};
module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
  return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] || 
  void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
};
module$exports$omid$common$InternalMessage.deserialize = function(a) {
  return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
};
module$exports$omid$common$InternalMessage.prototype.serialize = function() {
  var a = {};
  a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
  void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
  return a;
};
var module$exports$omid$common$Communication = function(a) {
  this.to = a;
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
};
module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
};
module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
  if (this.onMessage) {
    this.onMessage(a, b);
  }
};
module$exports$omid$common$Communication.prototype.serialize = function(a) {
  return JSON.stringify(a);
};
module$exports$omid$common$Communication.prototype.deserialize = function(a) {
  return JSON.parse(a);
};
module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
  return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
};
module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
};
var module$exports$omid$common$logger = {error:function(a) {
  for (var b = [], c = 0; c < arguments.length; ++c) {
    b[c - 0] = arguments[c];
  }
  module$contents$omid$common$logger_executeLog(function() {
    throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
  }, function() {
    return console.error.apply(console, $jscomp.arrayFromIterable(b));
  });
}, debug:function(a) {
  for (var b = [], c = 0; c < arguments.length; ++c) {
    b[c - 0] = arguments[c];
  }
  module$contents$omid$common$logger_executeLog(function() {
  }, function() {
    return console.error.apply(console, $jscomp.arrayFromIterable(b));
  });
}};
function module$contents$omid$common$logger_executeLog(a, b) {
  "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
}
;var module$exports$omid$common$eventTypedefs = {};
var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.32-iab3343"};
var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
  if (!b) {
    throw Error("Value for " + a + " is undefined, null or blank.");
  }
  if ("string" !== typeof b && !(b instanceof String)) {
    throw Error("Value for " + a + " is not a string.");
  }
  if ("" === b.trim()) {
    throw Error("Value for " + a + " is empty string.");
  }
}, assertNotNullObject:function(a, b) {
  if (null == b) {
    throw Error("Value for " + a + " is undefined or null");
  }
}, assertNumber:function(a, b) {
  if (null == b) {
    throw Error(a + " must not be null or undefined.");
  }
  if ("number" !== typeof b || isNaN(b)) {
    throw Error("Value for " + a + " is not a number");
  }
}, assertNumberBetween:function(a, b, c, d) {
  (0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
  if (b < c || b > d) {
    throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
  }
}, assertFunction:function(a, b) {
  if (!b) {
    throw Error(a + " must not be truthy.");
  }
}, assertPositiveNumber:function(a, b) {
  (0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
  if (0 > b) {
    throw Error(a + " must be a positive number.");
  }
}};
var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
  return /\d+\.\d+\.\d+(-.*)?/.test(a);
};
module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
  a = a.split("-")[0].split(".");
  b = b.split("-")[0].split(".");
  for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
    var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
    if (d > e) {
      break;
    } else {
      if (d < e) {
        return !1;
      }
    }
  }
  return !0;
};
var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
  return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
};
module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
  return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
};
var module$exports$omid$common$guid = {generateGuid:function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    var b = 16 * Math.random() | 0;
    a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
    return a;
  });
}};
var module$exports$omid$common$OmidGlobalProvider = {};
function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
  if ("undefined" !== typeof omidGlobal && omidGlobal) {
    return console.log("IX: omidGlobal: " + omidGlobal), omidGlobal;
  }
  if ("undefined" !== typeof global && global) {
    return console.log("IX: global: " + global), global;
  }
  if ("undefined" !== typeof window && window) {
    return console.log("IX: window: " + window), window;
  }
  if ("undefined" !== typeof globalThis && globalThis) {
    return console.log("IX: globalThis: " + globalThis), globalThis;
  }
  var a = Function("return this")();
  console.log("IX: globalObject: " + a);
  if (a) {
    return a;
  }
  throw Error("Could not determine global object context.");
}
module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
var module$exports$omid$common$exporter = {};
function module$contents$omid$common$exporter_getOmidExports() {
  return "undefined" === typeof omidExports ? null : omidExports;
}
function module$contents$omid$common$exporter_getOrCreateName(a, b) {
  return a && (a[b] || (a[b] = {}));
}
module$exports$omid$common$exporter.packageExport = function(a, b, c) {
  if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
    a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
  }
};
var module$exports$omid$common$windowUtils = {};
function module$contents$omid$common$windowUtils_isValidWindow(a) {
  return null != a && "undefined" !== typeof a.top && null != a.top;
}
module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
  if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
    return !1;
  }
  try {
    if ("undefined" === typeof a.location.hostname) {
      return !0;
    }
    module$contents$omid$common$windowUtils_isSameOriginForIE(a);
  } catch (b) {
    return !0;
  }
  return !1;
};
function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
  return "" === a.x || "" !== a.x;
}
module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
  "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
};
module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
};
module$exports$omid$common$windowUtils.isTopWindowAccessible = function(a) {
  try {
    return a.top.location.href ? !0 : !1;
  } catch (b) {
    return !1;
  }
};
module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
  if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
    return null;
  }
  try {
    var b = a.top;
    return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
  } catch (c) {
    return null;
  }
};
var module$exports$omid$common$DirectCommunication = function(a) {
  module$exports$omid$common$Communication.call(this, a);
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
  this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
};
$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
  b = void 0 === b ? this.to : b;
  if (!b) {
    throw Error("Message destination must be defined at construction time or when sending the message.");
  }
  b.handleExportedMessage(a.serialize(), this);
};
module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
  module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
};
module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
  return !1;
};
var module$exports$omid$common$PostMessageCommunication = function(a, b) {
  b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
  module$exports$omid$common$Communication.call(this, b);
  var c = this;
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
  a.addEventListener("message", function(a) {
    if ("object" === typeof a.data) {
      var b = a.data;
      module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
    }
  });
};
$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
  return !!(a && a.addEventListener && a.postMessage);
};
module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
  b = void 0 === b ? this.to : b;
  if (!b) {
    throw Error("Message destination must be defined at construction time or when sending the message.");
  }
  b.postMessage(a.serialize(), "*");
};
module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
  return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
};
var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
  try {
    return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
  } catch (b) {
    return !1;
  }
}, declareOmidPresence:function(a) {
  a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + 
  '"></iframe>'))));
}, appendPresenceIframe_:function(a) {
  var b = a.document.createElement("iframe");
  b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
  b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
  b.style.display = "none";
  a.document.body.appendChild(b);
}, isMutationObserverAvailable_:function(a) {
  return "MutationObserver" in a;
}, registerMutationObserver_:function(a) {
  var b = new MutationObserver(function(c) {
    c.forEach(function(c) {
      "BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
    });
  });
  b.observe(a.document.documentElement, {childList:!0});
}};
var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
  return b.reduce(function(a, b) {
    return a && a[b];
  }, a);
}
function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
  if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
    try {
      var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
      if (e) {
        return new module$exports$omid$common$DirectCommunication(e);
      }
    } catch (f) {
    }
  }
  return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
}
function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
  b = $jscomp.makeIterator(b);
  for (var e = b.next(); !e.done; e = b.next()) {
    if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
      return e;
    }
  }
  return null;
}
module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
  c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
  var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
  b && d.unshift(b);
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
};
module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
  b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
  var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
  d && c.push(d);
  c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
};
var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
  var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
  return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
}
var module$exports$omid$verificationClient$VerificationClient = function(a) {
  if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
    this.communication.onMessage = this.handleMessage_.bind(this);
  } else {
    if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
      this.omid3p = a;
    }
  }
  this.remoteIntervals_ = this.remoteTimeouts_ = 0;
  this.callbackMap_ = {};
  this.imgCache_ = [];
  this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
};
module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
  return !(!this.communication && !this.omid3p);
};
module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function() {
  var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
  if (a && a.injectionSource) {
    return a.injectionSource;
  }
};
module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
  (0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
  console.log("IX: this.omid3p: " + this.omid3p);
  this.omid3p ? (console.log("IX: this.omid3p true: " + this.omid3p), this.omid3p.registerSessionObserver(a, b, this.injectionId_)) : (console.log("IX: this.omid3p FALSE"), this.sendMessage_("addSessionListener", a, b, this.injectionId_));
};
module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
  (0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
  (0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
  this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
  (0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
  module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
    a && b ? b() : !a && c && c();
  }, a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
  var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
  this.imgCache_.push(e);
  var f = function(a) {
    var b = d.imgCache_.indexOf(e);
    0 <= b && d.imgCache_.splice(b, 1);
    a && a();
  };
  e.addEventListener("load", f.bind(this, b));
  e.addEventListener("error", f.bind(this, c));
  e.src = a;
};
module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
  var d = this;
  (0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
  module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
    e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
  }, a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
  var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
  d = d.createElement("script");
  d.onload = b;
  d.onerror = c;
  d.src = a;
  d.type = "application/javascript";
  e.appendChild(d);
};
module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
  try {
    eval(a);
  } catch (c) {
    module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
  }
};
module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
  (0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
  (0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
  if (this.hasTimeoutMethods_()) {
    return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
  }
  var c = this.remoteTimeouts_++;
  this.sendMessage_("setTimeout", a, c, b);
  return c;
};
module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
  (0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
  this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
  (0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
  (0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
  if (this.hasIntervalMethods_()) {
    return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
  }
  var c = this.remoteIntervals_++;
  this.sendMessage_("setInterval", a, c, b);
  return c;
};
module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
  (0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
  this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
  return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
};
module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
  return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
};
module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
  b = a.method;
  var c = a.guid;
  a = a.args;
  if ("response" === b && this.callbackMap_[c]) {
    var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
    this.callbackMap_[c].apply(this, d);
  }
  "error" === b && window.console && module$exports$omid$common$logger.error(a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
  for (var c = [], d = 1; d < arguments.length; ++d) {
    c[d - 1] = arguments[d];
  }
  this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
  for (var d = [], e = 2; e < arguments.length; ++e) {
    d[e - 2] = arguments[e];
  }
  console.log("IX: sendmessage");
  this.communication && (console.log("IX: sendmessage has comms"), e = (0,module$exports$omid$common$guid.generateGuid)(), b && (console.log("IX: sendmessage has responseCallback"), this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, 
  d)), console.log("IX: sendmessage new INternalMessage: "), this.communication.sendMessage(d));
};
(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);
var module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent = !1, module$contents$omid$client$VisibilityMeasurementClient_fiftyPercentSent = !1, module$contents$omid$client$VisibilityMeasurementClient_onePercentSent = !1, module$contents$omid$client$VisibilityMeasurementClient_onePixelSent = !1, module$contents$omid$client$VisibilityMeasurementClient_sentImpressions = {}, module$contents$omid$client$VisibilityMeasurementClient_pubImpCounter = 0, module$exports$omid$client$VisibilityMeasurementClient = 
function(a) {
  var b = this;
  this.log("has render: " + window.IX_RENDER_COUNTER_95784, "debug");
  this.log("constructor", "debug");
  this.verificationClient_ = a;
  this.IMPRESSION_EVENT_TYPE = 1;
  this.GEOMETRY_EVENT_TYPE = 2;
  this.CUSTOM_EVENT_TYPE = 30;
  this.TYPE_QUERY_KEY = "t";
  a = document.querySelector("#ixomclient");
  if (this.validateMetaData(a)) {
    this.resetSessionFlags_();
    this.debugMode = a.dataset.hasOwnProperty("dbg");
    this.log("this.debugMode", "debug");
    this.debugDiv = document.querySelector("#dbg");
    this.log("this.debugDiv", "debug");
    this.verificationClient_.isSupported() || this.log("Omid was not available for client to call", "warn");
    try {
      this.verificationClient_.registerSessionObserver(function(a) {
        return b.onSessionEvent_(a);
      });
    } catch (c) {
      console.log(c.name + " " + c.media, "debug");
    }
    this.log("this.verificationClient_.registerSessionObserver", "debug");
    this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.LOADED, this.loaded_.bind(this));
    this.log("this.verificationClient_.addEventListener(AdEventType.LOADED", "debug");
    this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.GEOMETRY_CHANGE, this.handleGeometryChangeEvent_.bind(this));
    this.log("addEventListener(AdEventType.GEOMETRY_CHANGE", "debug");
    this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.IMPRESSION, this.registerPubImpression_.bind(this));
    this.log("addEventListener(AdEventType.IMPRESSION", "debug");
  } else {
    this.log("meta data is invalid", "error");
  }
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.log = function(a, b) {
  switch(b) {
    case "debug":
      this.debugMode && console.debug("IX: " + a);
      break;
    case "warn":
      console.warn("IX: " + a);
      break;
    case "error":
      console.error("IX: " + a);
      break;
    default:
      console.log("IX: " + a);
  }
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.validateMetaData = function(a) {
  null == a && this.log("An element with ID ixomclient is required for this omclient to work", "error");
  this.currentScriptTag = a;
  a.dataset.hasOwnProperty("eturl") || this.log("no eventracker domain fond", "warn");
  this.eventTrackerDomain = a.dataset.eturl;
  a.dataset.hasOwnProperty("pid") || this.log("no publisher id has been provided", "warn");
  this.publisherIDParameter = "p=" + encodeURIComponent(a.dataset.pid);
  a.dataset.hasOwnProperty("tid") || this.log("no trace id has been provided", "warn");
  this.traceIDParameter = "trace=" + encodeURIComponent(a.dataset.tid);
  return !0;
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.getEventTracerUrl = function(a, b) {
  a = this.TYPE_QUERY_KEY + "=" + encodeURIComponent(a);
  var c = "";
  null != b && b.forEach(function(a) {
    c += "&" + encodeURIComponent(a.key) + "=" + encodeURIComponent(a.value);
  });
  return "https://" + this.eventTrackerDomain + "/event/oe?" + this.publisherIDParameter + "&" + this.traceIDParameter + "&" + a + c;
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.sendToEventTracker = function(a, b, c) {
  this.log("sendToEventTracker: " + b[0].value, "debug");
  a = this.getEventTracerUrl(a, b);
  b = new XMLHttpRequest;
  b.open("POST", a);
  b.setRequestHeader("Content-Type", "application/json");
  b.send(c);
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.registerPubImpression_ = function(a) {
  this.log("registerPubImpression_ " + a.adSessionId, "debug");
  this.log(a.data, "debug");
  this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"pubimp"}]);
  module$contents$omid$client$VisibilityMeasurementClient_pubImpCounter++;
  1 < module$contents$omid$client$VisibilityMeasurementClient_pubImpCounter && (this.log("pubImpCounter: " + module$contents$omid$client$VisibilityMeasurementClient_pubImpCounter, "debug"), this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"multipubimp"}]));
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.onSessionEvent_ = function(a) {
  var b = this;
  this.log("onSessionEvent_()", "debug");
  this.log("eventtype: " + a.type, "debug");
  this.log("adsesisonID : " + a.adSessionId, "debug");
  this.log("data : ", "debug");
  this.log(a.data, "debug");
  switch(a.type) {
    case module$exports$omid$common$constants.AdEventType.SESSION_START:
      this.log("SESSION START", "debug");
      this.sessionStartOccurred();
      break;
    case module$exports$omid$common$constants.AdEventType.LOADED:
      try {
        this.verificationClient_.registerSessionObserver(function(a) {
          return b.onSessionEvent_(a);
        });
      } catch (c) {
        console.log(c.name + " " + c.media, "debug");
      }
      break;
    case module$exports$omid$common$constants.AdEventType.SESSION_FINISH:
      this.log("SESSION FINISH", "debug");
      this.viewed();
      this.resetSessionFlags_();
      try {
        this.verificationClient_.registerSessionObserver(function(a) {
          return b.onSessionEvent_(a);
        });
      } catch (c) {
        console.log(c.name + " " + c.media, "debug");
      }
      this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.LOADED, this.loaded_.bind(this));
      this.log("this.verificationClient_.addEventListener(AdEventType.LOADED", "debug");
      this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.GEOMETRY_CHANGE, this.handleGeometryChangeEvent_.bind(this));
      this.log("addEventListener(AdEventType.GEOMETRY_CHANGE", "debug");
      this.verificationClient_.addEventListener(module$exports$omid$common$constants.AdEventType.IMPRESSION, this.registerPubImpression_.bind(this));
      this.log("addEventListener(AdEventType.IMPRESSION", "debug");
      break;
    case module$exports$omid$common$constants.AdEventType.SESSION_ERROR:
      this.log("SESSION ERROR", "debug"), this.callErrorOccurred_(a.data);
  }
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.viewed = function() {
  this.log("viewed", "debug");
  module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent || module$contents$omid$client$VisibilityMeasurementClient_fiftyPercentSent || module$contents$omid$client$VisibilityMeasurementClient_onePercentSent || module$contents$omid$client$VisibilityMeasurementClient_onePixelSent ? (this.log("isviewed", "debug"), this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"viewed"}])) : (this.log("notviewed", "debug"), this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", 
  value:"notviewed"}]));
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.loaded_ = function() {
  this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"adload"}]);
  this.log("loaded", "debug");
  this.log("has render: " + window.IX_RENDER_COUNTER_95784, "debug");
  void 0 !== window.IX_RENDER_COUNTER_95784 && 0 < window.IX_RENDER_COUNTER_95784 && this.fireImpUrls_();
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.sessionStartOccurred = function() {
  this.log("impressionOccured()", "debug");
  this.callSessionStartOccurred_();
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.callSessionStartOccurred_ = function() {
  this.log("callSessionStartOccurred_", "debug");
  this.sendToEventTracker(this.IMPRESSION_EVENT_TYPE, null);
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.callErrorOccurred_ = function() {
  this.log("callErrorOccurred_", "debug");
  this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"error"}]);
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.fireImpUrls_ = function() {
  var a = this;
  this.log("fireImpUrls_()", "debug");
  for (var b = 0, c = {}; this.currentScriptTag.dataset.hasOwnProperty("impurl-" + b);) {
    c.$jscomp$loop$prop$url$9 = this.currentScriptTag.dataset["impurl-" + b], module$contents$omid$client$VisibilityMeasurementClient_sentImpressions[c.$jscomp$loop$prop$url$9] ? this.log("impression url has been fired: " + c.$jscomp$loop$prop$url$9, "debug") : (this.log("===> FIRING IMPRESSION <===: " + c.$jscomp$loop$prop$url$9, "debug"), c.$jscomp$loop$prop$xhr$8 = new XMLHttpRequest, c.$jscomp$loop$prop$xhr$8.onreadystatechange = function(b) {
      return function() {
        b.$jscomp$loop$prop$xhr$8.readyState === XMLHttpRequest.DONE && 200 !== b.$jscomp$loop$prop$xhr$8.status && (a.log("impression response error " + b.$jscomp$loop$prop$url$9, "debug"), a.sendToEventTracker(a.CUSTOM_EVENT_TYPE, [{key:"fd", value:"badresponse"}]));
      };
    }(c), module$contents$omid$client$VisibilityMeasurementClient_sentImpressions[c.$jscomp$loop$prop$url$9] = !0, this.log("sentImpressions[url]: " + JSON.stringify(module$contents$omid$client$VisibilityMeasurementClient_sentImpressions), "debug"), c.$jscomp$loop$prop$xhr$8.open("GET", c.$jscomp$loop$prop$url$9), c.$jscomp$loop$prop$xhr$8.send()), b++, c = {$jscomp$loop$prop$xhr$8:c.$jscomp$loop$prop$xhr$8, $jscomp$loop$prop$url$9:c.$jscomp$loop$prop$url$9};
  }
  0 < b ? (this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"impurlfired"}]), this.log("imp url fired", "debug")) : (this.sendToEventTracker(this.CUSTOM_EVENT_TYPE, [{key:"fd", value:"impurlnotfired"}]), this.log("imp url not fired", "debug"));
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.handleGeometryChangeEvent_ = function(a) {
  this.log("handleGeometryChangeEvent_", "debug");
  this.log(a.data, "debug");
  if (!module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent) {
    var b = a.data.adView.percentageInView;
    0 < b && this.fireImpUrls_(b);
    100 !== b || module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent ? 50 <= b && 100 > b && !module$contents$omid$client$VisibilityMeasurementClient_fiftyPercentSent ? (this.sendToEventTracker(this.GEOMETRY_EVENT_TYPE, null, JSON.stringify(a.data)), this.log("percentageInView >= 50", "debug"), module$contents$omid$client$VisibilityMeasurementClient_fiftyPercentSent = !0) : 0 < b && 50 > b && !module$contents$omid$client$VisibilityMeasurementClient_onePercentSent && (this.sendToEventTracker(this.GEOMETRY_EVENT_TYPE, 
    null, JSON.stringify(a.data)), this.log("percentageInView > 0", "debug"), module$contents$omid$client$VisibilityMeasurementClient_onePercentSent = !0) : (this.sendToEventTracker(this.GEOMETRY_EVENT_TYPE, null, JSON.stringify(a.data)), this.log("percentageInView === 100", "debug"), module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent = !0);
  }
};
module$exports$omid$client$VisibilityMeasurementClient.prototype.resetSessionFlags_ = function() {
  this.log("resetSessionFlags_", "debug");
  this.log("reset hundredthPercentSent: " + module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent, "debug");
  this.log("reset fiftyPercentSent: " + module$contents$omid$client$VisibilityMeasurementClient_fiftyPercentSent, "debug");
  this.log("reset onePercentSent: " + module$contents$omid$client$VisibilityMeasurementClient_onePercentSent, "debug");
  this.log("reset onePixelSent: " + module$contents$omid$client$VisibilityMeasurementClient_onePixelSent, "debug");
  this.log("reset sentImpressions: " + JSON.stringify(module$contents$omid$client$VisibilityMeasurementClient_sentImpressions), "debug");
  module$contents$omid$client$VisibilityMeasurementClient_onePixelSent = module$contents$omid$client$VisibilityMeasurementClient_onePercentSent = module$contents$omid$client$VisibilityMeasurementClient_fiftyPercentSent = module$contents$omid$client$VisibilityMeasurementClient_hundredthPercentSent = !1;
  module$contents$omid$client$VisibilityMeasurementClient_sentImpressions = {};
};
new module$exports$omid$client$VisibilityMeasurementClient(new module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));

