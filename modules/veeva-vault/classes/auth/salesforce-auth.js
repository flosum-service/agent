const a287_0x36b246=a287_0x2f25;(function(_0x541fa2,_0x2d47e2){const _0x203859=a287_0x2f25,_0x5baa5c=_0x541fa2();while(!![]){try{const _0x113b4b=-parseInt(_0x203859(0x10a))/0x1+-parseInt(_0x203859(0x106))/0x2*(parseInt(_0x203859(0x11f))/0x3)+-parseInt(_0x203859(0x105))/0x4+parseInt(_0x203859(0x101))/0x5*(parseInt(_0x203859(0x110))/0x6)+-parseInt(_0x203859(0x102))/0x7*(parseInt(_0x203859(0x10e))/0x8)+parseInt(_0x203859(0x111))/0x9*(-parseInt(_0x203859(0x116))/0xa)+parseInt(_0x203859(0xfb))/0xb;if(_0x113b4b===_0x2d47e2)break;else _0x5baa5c['push'](_0x5baa5c['shift']());}catch(_0x1b37fd){_0x5baa5c['push'](_0x5baa5c['shift']());}}}(a287_0x5c90,0x934d4));function a287_0x5c90(){const _0x765483=['One\x20of\x20the\x20parameters\x20in\x20Salesforce\x20Token\x20is\x20missing','9984gBkHqD','default','148518avILhn','9cWhhHO','SalesforceAuth','getLoginUrl','auth','trim','1482710SwKycA','axios','post','__esModule','refresh_token','BaseVeevaAuth','(((.+)+)+)+$','getNewAccessToken','__importDefault','102930uxSLhw','search','30270372JXHRvL','Sandbox','joinURL','Production','../../../shared/utils','apply','105cdrdyr','6622zciQdz','split','getAuthDetails','2922200IdKslS','12DkiDWJ','https://test.salesforce.com','Unknown\x20Salesforce\x20Organization\x20type:\x20','toString','403028JVKORX','/services/oauth2/token','constructor'];a287_0x5c90=function(){return _0x765483;};return a287_0x5c90();}const a287_0x416bb0=(function(){let _0x7f6acb=!![];return function(_0x279a1e,_0x2a41e0){const _0x1327d3=_0x7f6acb?function(){const _0x572c09=a287_0x2f25;if(_0x2a41e0){const _0x19dddd=_0x2a41e0[_0x572c09(0x100)](_0x279a1e,arguments);return _0x2a41e0=null,_0x19dddd;}}:function(){};return _0x7f6acb=![],_0x1327d3;};}()),a287_0x25557b=a287_0x416bb0(this,function(){const _0x19bd2c=a287_0x2f25;return a287_0x25557b[_0x19bd2c(0x109)]()[_0x19bd2c(0x120)](_0x19bd2c(0x11c))[_0x19bd2c(0x109)]()[_0x19bd2c(0x10c)](a287_0x25557b)[_0x19bd2c(0x120)](_0x19bd2c(0x11c));});a287_0x25557b();'use strict';var __importDefault=this&&this[a287_0x36b246(0x11e)]||function(_0x764b12){const _0x46480c=a287_0x36b246;return _0x764b12&&_0x764b12[_0x46480c(0x119)]?_0x764b12:{'default':_0x764b12};};function a287_0x2f25(_0x4bc9e1,_0x32f7ed){const _0x5c7a43=a287_0x5c90();return a287_0x2f25=function(_0x25557b,_0x416bb0){_0x25557b=_0x25557b-0xfb;let _0x5c90a5=_0x5c7a43[_0x25557b];return _0x5c90a5;},a287_0x2f25(_0x4bc9e1,_0x32f7ed);}Object['defineProperty'](exports,a287_0x36b246(0x119),{'value':!![]}),exports[a287_0x36b246(0x112)]=void 0x0;const axios_1=__importDefault(require(a287_0x36b246(0x117))),utils_1=require(a287_0x36b246(0xff)),base_veeva_auth_1=require('./base-veeva-auth');class SalesforceAuth extends base_veeva_auth_1[a287_0x36b246(0x11b)]{constructor(_0x55ab8b){const _0x2b5c02=a287_0x36b246;super(_0x55ab8b),this[_0x2b5c02(0x114)]=_0x55ab8b;}async[a287_0x36b246(0x11d)](){const _0x425392=a287_0x36b246,{accessToken:_0x3893e4}=await SalesforceAuth[_0x425392(0x104)]();return _0x3893e4;}static async['getAuthDetails'](){const _0x84ac6=a287_0x36b246,_0x179512=process['env']['SALESFORCE_TOKEN'];if(!_0x179512)throw new Error('Salesforce\x20token\x20missing');const [_0x2eaf88,_0x5227b6,_0x2beb8e,_0x7815ea]=_0x179512[_0x84ac6(0x115)]()[_0x84ac6(0x103)]('\x20');if(!_0x2eaf88||!_0x5227b6||!_0x2beb8e||!_0x7815ea)throw new Error(_0x84ac6(0x10d));const _0x4c5967=SalesforceAuth[_0x84ac6(0x113)](_0x7815ea),{data:_0x37efd9}=await axios_1[_0x84ac6(0x10f)][_0x84ac6(0x118)]((0x0,utils_1[_0x84ac6(0xfd)])(_0x4c5967,_0x84ac6(0x10b)),null,{'params':{'grant_type':_0x84ac6(0x11a),'refresh_token':_0x2eaf88,'client_id':_0x5227b6,'client_secret':_0x2beb8e}});return{'instanceUrl':_0x37efd9['instance_url'],'accessToken':_0x37efd9['access_token']};}static[a287_0x36b246(0x113)](_0x464f1e){const _0x53f78d=a287_0x36b246;switch(_0x464f1e){case _0x53f78d(0xfc):return _0x53f78d(0x107);case _0x53f78d(0xfe):return'https://login.salesforce.com';default:throw new Error(_0x53f78d(0x108)+_0x464f1e);}}}exports[a287_0x36b246(0x112)]=SalesforceAuth;