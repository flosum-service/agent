const a92_0x159bd3=a92_0x5604;(function(_0x19343a,_0x469669){const _0x3e3f1a=a92_0x5604,_0x43b011=_0x19343a();while(!![]){try{const _0x548cb6=parseInt(_0x3e3f1a(0x1f4))/0x1+-parseInt(_0x3e3f1a(0x1ee))/0x2*(-parseInt(_0x3e3f1a(0x205))/0x3)+parseInt(_0x3e3f1a(0x1f6))/0x4+parseInt(_0x3e3f1a(0x1fb))/0x5+-parseInt(_0x3e3f1a(0x200))/0x6+-parseInt(_0x3e3f1a(0x1f7))/0x7+-parseInt(_0x3e3f1a(0x202))/0x8*(parseInt(_0x3e3f1a(0x207))/0x9);if(_0x548cb6===_0x469669)break;else _0x43b011['push'](_0x43b011['shift']());}catch(_0x47d4c4){_0x43b011['push'](_0x43b011['shift']());}}}(a92_0xbba0,0x54218));const a92_0x1de92c=(function(){let _0x41c5a1=!![];return function(_0x4d390c,_0x15deae){const _0x536889=_0x41c5a1?function(){if(_0x15deae){const _0x1c00ec=_0x15deae['apply'](_0x4d390c,arguments);return _0x15deae=null,_0x1c00ec;}}:function(){};return _0x41c5a1=![],_0x536889;};}()),a92_0x4b2f01=a92_0x1de92c(this,function(){const _0x14921f=a92_0x5604;return a92_0x4b2f01[_0x14921f(0x1f0)]()[_0x14921f(0x204)](_0x14921f(0x1f8))[_0x14921f(0x1f0)]()[_0x14921f(0x1eb)](a92_0x4b2f01)[_0x14921f(0x204)](_0x14921f(0x1f8));});a92_0x4b2f01();'use strict';var __importDefault=this&&this[a92_0x159bd3(0x1fc)]||function(_0x227089){return _0x227089&&_0x227089['__esModule']?_0x227089:{'default':_0x227089};};Object[a92_0x159bd3(0x20c)](exports,a92_0x159bd3(0x20a),{'value':!![]}),exports[a92_0x159bd3(0x1ec)]=exports[a92_0x159bd3(0x1ed)]=void 0x0;const axios_1=__importDefault(require(a92_0x159bd3(0x210))),axios_retry_1=__importDefault(require(a92_0x159bd3(0x206))),request_error_1=require('../../shared/errors/request.error'),auth_utils_1=require('./auth.utils'),constants_1=require(a92_0x159bd3(0x213)),DELAY=0x9c4;function a92_0x5604(_0x96dbe2,_0x2a0fbf){const _0x220101=a92_0xbba0();return a92_0x5604=function(_0x4b2f01,_0x1de92c){_0x4b2f01=_0x4b2f01-0x1eb;let _0xbba05d=_0x220101[_0x4b2f01];return _0xbba05d;},a92_0x5604(_0x96dbe2,_0x2a0fbf);}exports[a92_0x159bd3(0x1ed)]=constants_1[a92_0x159bd3(0x1f9)]?'/Flosum':'';function createRequest(_0x91ffcc){const _0xa55a2b=a92_0x159bd3,_0xbea4af=axios_1['default']['create']();return(0x0,axios_retry_1[_0xa55a2b(0x214)])(_0xbea4af,{'retries':0x3,'retryDelay'(_0xb966ed){return _0xb966ed*DELAY;}}),_0xbea4af[_0xa55a2b(0x20f)][_0xa55a2b(0x20b)][_0xa55a2b(0x209)](_0x56bec9=>{const _0x2ddd0e=_0xa55a2b;return _0x56bec9[_0x2ddd0e(0x1fa)]['accept']=_0x2ddd0e(0x1fd),_0x56bec9[_0x2ddd0e(0x1fa)][_0x2ddd0e(0x203)]=_0x2ddd0e(0x1f2)+_0x91ffcc[_0x2ddd0e(0x215)],_0x56bec9[_0x2ddd0e(0x216)]=_0x91ffcc[_0x2ddd0e(0x208)],_0x56bec9['maxBodyLength']=0x6400000,_0x56bec9[_0x2ddd0e(0x1f5)]=0x6400000,_0x56bec9;}),_0xbea4af['interceptors'][_0xa55a2b(0x201)]['use'](undefined,async _0x5009bc=>{const _0x38efd8=_0xa55a2b;var _0x5c9d8b,_0x3642cd,_0x300731;if(_0x5009bc[_0x38efd8(0x212)]&&_0x5009bc['config']){if(((_0x5c9d8b=_0x5009bc[_0x38efd8(0x201)])===null||_0x5c9d8b===void 0x0?void 0x0:_0x5c9d8b['status'])===0x191)return _0x91ffcc[_0x38efd8(0x215)]=await auth_utils_1['AuthUtils'][_0x38efd8(0x211)](_0x91ffcc['instanceUrl'],_0x91ffcc['refreshToken'],_0x91ffcc[_0x38efd8(0x1f3)],_0x91ffcc['clientSecret']),_0x5009bc['config'][_0x38efd8(0x1fa)][_0x38efd8(0x203)]=_0x38efd8(0x1f2)+_0x91ffcc['accessToken'],_0x5009bc[_0x38efd8(0x20e)][_0x38efd8(0x216)]=_0x91ffcc[_0x38efd8(0x208)],_0xbea4af(_0x5009bc[_0x38efd8(0x20e)]);}let _0x23ebf4=((_0x3642cd=_0x5009bc===null||_0x5009bc===void 0x0?void 0x0:_0x5009bc[_0x38efd8(0x201)])===null||_0x3642cd===void 0x0?void 0x0:_0x3642cd[_0x38efd8(0x20d)])||{};Array[_0x38efd8(0x1ef)](_0x23ebf4)&&(_0x23ebf4=_0x23ebf4[0x0]);const _0x2a1573=_0x23ebf4[_0x38efd8(0x1f1)]||typeof _0x23ebf4[_0x38efd8(0x1ff)]===_0x38efd8(0x1fe)?_0x23ebf4[_0x38efd8(0x1ff)]:((_0x300731=_0x23ebf4['error'])===null||_0x300731===void 0x0?void 0x0:_0x300731[_0x38efd8(0x1f1)])||_0x5009bc[_0x38efd8(0x1f1)];throw new request_error_1['RequestError'](_0x2a1573,_0x23ebf4);}),_0xbea4af;}function a92_0xbba0(){const _0x3419d4=['error','2623602NigJxb','response','360ZszMaD','authorization','search','1854KFqfOX','axios-retry','44379UFBCMP','instanceUrl','use','__esModule','request','defineProperty','data','config','interceptors','axios','updateAccessToken','isAxiosError','../../../constants','default','accessToken','baseURL','constructor','createRequest','namespace','2210OnGeOT','isArray','toString','message','Bearer\x20','clientId','230034qTstuZ','maxContentLength','322304TQrkMO','3910116DQdVMn','(((.+)+)+)+$','FLOSUM_NAMESPACE','headers','2844250PmlQmM','__importDefault','application/json','string'];a92_0xbba0=function(){return _0x3419d4;};return a92_0xbba0();}exports['createRequest']=createRequest;