const a309_0x1823df=a309_0x35c9;function a309_0x35c9(_0x3f4b22,_0x408d00){const _0x146288=a309_0x1f77();return a309_0x35c9=function(_0x13f67b,_0x2cad94){_0x13f67b=_0x13f67b-0x1d6;let _0x1f7773=_0x146288[_0x13f67b];return _0x1f7773;},a309_0x35c9(_0x3f4b22,_0x408d00);}(function(_0xfe22f4,_0xe7fae){const _0x4d540d=a309_0x35c9,_0x1b5f2a=_0xfe22f4();while(!![]){try{const _0x6852cf=-parseInt(_0x4d540d(0x1f7))/0x1*(parseInt(_0x4d540d(0x1fb))/0x2)+parseInt(_0x4d540d(0x1f2))/0x3+parseInt(_0x4d540d(0x200))/0x4+-parseInt(_0x4d540d(0x1e3))/0x5*(-parseInt(_0x4d540d(0x1d8))/0x6)+-parseInt(_0x4d540d(0x1e7))/0x7+-parseInt(_0x4d540d(0x1de))/0x8*(-parseInt(_0x4d540d(0x1e9))/0x9)+parseInt(_0x4d540d(0x1df))/0xa;if(_0x6852cf===_0xe7fae)break;else _0x1b5f2a['push'](_0x1b5f2a['shift']());}catch(_0x336327){_0x1b5f2a['push'](_0x1b5f2a['shift']());}}}(a309_0x1f77,0x2245d));const a309_0x2cad94=(function(){let _0x515497=!![];return function(_0x23693c,_0x4ee963){const _0x38f820=_0x515497?function(){const _0x207392=a309_0x35c9;if(_0x4ee963){const _0x2db39c=_0x4ee963[_0x207392(0x1e6)](_0x23693c,arguments);return _0x4ee963=null,_0x2db39c;}}:function(){};return _0x515497=![],_0x38f820;};}()),a309_0x13f67b=a309_0x2cad94(this,function(){const _0x2d057c=a309_0x35c9;return a309_0x13f67b[_0x2d057c(0x1f6)]()[_0x2d057c(0x1fa)]('(((.+)+)+)+$')[_0x2d057c(0x1f6)]()['constructor'](a309_0x13f67b)[_0x2d057c(0x1fa)]('(((.+)+)+)+$');});a309_0x13f67b();'use strict';var __importDefault=this&&this[a309_0x1823df(0x1f9)]||function(_0x1a4d2c){const _0x2e6934=a309_0x1823df;return _0x1a4d2c&&_0x1a4d2c[_0x2e6934(0x1ef)]?_0x1a4d2c:{'default':_0x1a4d2c};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['VeevaAuth']=void 0x0;const veeva_constants_1=require(a309_0x1823df(0x1ff)),axios_1=__importDefault(require(a309_0x1823df(0x1da))),status_enums_1=require(a309_0x1823df(0x1e2)),utils_1=require(a309_0x1823df(0x1ed)),app_constants_1=require(a309_0x1823df(0x1f5)),base_veeva_auth_1=require(a309_0x1823df(0x1d6));function a309_0x1f77(){const _0x5af404=['instanceUrl','__esModule','VeevaResponseStatus','some','380667MGYyId','sessionId','application/x-www-form-urlencoded','../../constants/app.constants','toString','1RrBsyw','SUCCESS','__importDefault','search','548294gBwPAH','getNewAccessToken','append','type','../../constants/veeva.constants','310668oMSDhA','./base-veeva-auth','password','778350ttmYRs','API_LIMIT_EXCEEDED','axios','username','attemptsOfUpdateToken','VeevaAuth','16432nRaOwm','957320WDQSQN','post','VeevaConstants','../../enums/status.enums','5Zhdvmq','LOGIN_TIMEOUT','AppConstants','apply','439089byzrFg','message','207YpNsFz','BaseVeevaAuth','auth','UNDEFINED_ERROR','../../../shared/utils'];a309_0x1f77=function(){return _0x5af404;};return a309_0x1f77();}class VeevaAuth extends base_veeva_auth_1[a309_0x1823df(0x1ea)]{constructor(_0x585071,_0x4070e5=0x0){const _0x4731ed=a309_0x1823df;super(_0x585071),this[_0x4731ed(0x1eb)]=_0x585071,this[_0x4731ed(0x1dc)]=_0x4070e5;}async[a309_0x1823df(0x1fc)](_0x1a415d=this[a309_0x1823df(0x1dc)]){const _0x35613f=a309_0x1823df;var _0x53bcaf,_0x2469d1;const _0x1bf0a2=this[_0x35613f(0x1eb)][_0x35613f(0x1ee)]+veeva_constants_1[_0x35613f(0x1e1)]['ENDPOINT_AUTH'],_0x59c52e=new URLSearchParams();_0x59c52e['append'](_0x35613f(0x1db),this['auth'][_0x35613f(0x1db)]),_0x59c52e[_0x35613f(0x1fd)](_0x35613f(0x1d7),this[_0x35613f(0x1eb)][_0x35613f(0x1d7)]);const {data:_0x282d4a}=await axios_1['default'][_0x35613f(0x1e0)](_0x1bf0a2,_0x59c52e,{'headers':{'Content-Type':_0x35613f(0x1f4)}});if(_0x282d4a['responseStatus']===status_enums_1[_0x35613f(0x1f0)][_0x35613f(0x1f8)])return _0x282d4a[_0x35613f(0x1f3)];else{const _0x11636f=(_0x53bcaf=_0x282d4a['errors'])===null||_0x53bcaf===void 0x0?void 0x0:_0x53bcaf[_0x35613f(0x1f1)](_0x2f0306=>_0x2f0306[_0x35613f(0x1fe)]===veeva_constants_1[_0x35613f(0x1e1)][_0x35613f(0x1d9)]);if(_0x11636f&&_0x1a415d>0x0)return await(0x0,utils_1['sleep'])(VeevaAuth[_0x35613f(0x1e4)]),await this[_0x35613f(0x1fc)](_0x1a415d-0x1);else throw new Error(((_0x2469d1=_0x282d4a['errors'][0x0])===null||_0x2469d1===void 0x0?void 0x0:_0x2469d1[_0x35613f(0x1e8)])||app_constants_1[_0x35613f(0x1e5)][_0x35613f(0x1ec)]);}}}exports[a309_0x1823df(0x1dd)]=VeevaAuth,VeevaAuth[a309_0x1823df(0x1e4)]=0x3e8*0x3c;