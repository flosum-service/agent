function a223_0x2563(){const _0xc403bf=['apply','742362BzGMQn','1395747edkyMk','49EZKpCS','4405300dYVLXQ','410LTwxkR','response','56lQlMIQ','SalesforceError','4188547yYVWlH','123QfXcpi','message','toString','toJSON','stringify','18272200AjMJaR','1945toJBLz','errorResponse','search','constructor','RequestError','90172FdzeFN','ERR_UNKNOWN','(((.+)+)+)+$'];a223_0x2563=function(){return _0xc403bf;};return a223_0x2563();}const a223_0x38619b=a223_0x2a45;(function(_0x49046f,_0x5514ef){const _0x1be54a=a223_0x2a45,_0x38fb87=_0x49046f();while(!![]){try{const _0x5758bb=-parseInt(_0x1be54a(0x1e5))/0x1*(-parseInt(_0x1be54a(0x1f2))/0x2)+parseInt(_0x1be54a(0x1f7))/0x3*(parseInt(_0x1be54a(0x1ea))/0x4)+-parseInt(_0x1be54a(0x1f1))/0x5+-parseInt(_0x1be54a(0x1ee))/0x6*(-parseInt(_0x1be54a(0x1f0))/0x7)+-parseInt(_0x1be54a(0x1f4))/0x8*(-parseInt(_0x1be54a(0x1ef))/0x9)+-parseInt(_0x1be54a(0x1e4))/0xa+parseInt(_0x1be54a(0x1f6))/0xb;if(_0x5758bb===_0x5514ef)break;else _0x38fb87['push'](_0x38fb87['shift']());}catch(_0x1d0d55){_0x38fb87['push'](_0x38fb87['shift']());}}}(a223_0x2563,0xe73d3));const a223_0x260e1b=(function(){let _0x307e5e=!![];return function(_0x7b6723,_0x340deb){const _0x4d2f2c=_0x307e5e?function(){const _0x39c3eb=a223_0x2a45;if(_0x340deb){const _0x3e2f8a=_0x340deb[_0x39c3eb(0x1ed)](_0x7b6723,arguments);return _0x340deb=null,_0x3e2f8a;}}:function(){};return _0x307e5e=![],_0x4d2f2c;};}()),a223_0x2f79cc=a223_0x260e1b(this,function(){const _0xa31856=a223_0x2a45;return a223_0x2f79cc[_0xa31856(0x1e1)]()[_0xa31856(0x1e7)](_0xa31856(0x1ec))[_0xa31856(0x1e1)]()[_0xa31856(0x1e8)](a223_0x2f79cc)['search'](_0xa31856(0x1ec));});function a223_0x2a45(_0x57957f,_0x427656){const _0x1a8527=a223_0x2563();return a223_0x2a45=function(_0x2f79cc,_0x260e1b){_0x2f79cc=_0x2f79cc-0x1e0;let _0x25639e=_0x1a8527[_0x2f79cc];return _0x25639e;},a223_0x2a45(_0x57957f,_0x427656);}a223_0x2f79cc();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a223_0x38619b(0x1f5)]=void 0x0;const errors_1=require('../../../../constants/errors'),request_error_1=require('../../../shared/errors/request.error');class SalesforceError extends Error{constructor(_0x2b34c6){const _0x475891=a223_0x38619b;super(_0x2b34c6[_0x475891(0x1e0)]||_0x2b34c6||errors_1[_0x475891(0x1eb)]),_0x2b34c6 instanceof request_error_1[_0x475891(0x1e9)]&&(this[_0x475891(0x1f3)]=_0x2b34c6[_0x475891(0x1e6)]),this['original']=_0x2b34c6;}[a223_0x38619b(0x1e2)](){const _0x34802f=a223_0x38619b;return{'message':this['message'],'original':this['original'],'response':this[_0x34802f(0x1f3)]};}[a223_0x38619b(0x1e1)](){const _0x11e5a6=a223_0x38619b;return JSON[_0x11e5a6(0x1e3)](this[_0x11e5a6(0x1e2)](),null,0x2);}}exports[a223_0x38619b(0x1f5)]=SalesforceError;