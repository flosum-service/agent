const a288_0x453969=a288_0x3db8;function a288_0x6877(){const _0x46474e=['errors','type','application/x-www-form-urlencoded','some','axios','constructor','toString','280AmuxWd','default','LOGIN_TIMEOUT','681794RgxnuS','post','message','1202910vAWFrn','353640UVGTek','AppConstants','search','attemptsOfUpdateToken','VeevaConstants','UNDEFINED_ERROR','132418zTPScz','664QDpLaH','username','auth','append','__esModule','(((.+)+)+)+$','VeevaAuth','104024jTWMuV','39456tovIpG','1011333BPlvqu','instanceUrl','1YQRDfz','sleep','./base-veeva-auth','7BndIdb','getNewAccessToken','../../constants/app.constants'];a288_0x6877=function(){return _0x46474e;};return a288_0x6877();}(function(_0x55a200,_0x28b376){const _0x4f63e9=a288_0x3db8,_0x4ec9c4=_0x55a200();while(!![]){try{const _0x13c55c=-parseInt(_0x4f63e9(0xe4))/0x1*(-parseInt(_0x4f63e9(0xf4))/0x2)+-parseInt(_0x4f63e9(0xe2))/0x3+parseInt(_0x4f63e9(0xe0))/0x4+-parseInt(_0x4f63e9(0xf8))/0x5+-parseInt(_0x4f63e9(0xf7))/0x6*(-parseInt(_0x4f63e9(0xe7))/0x7)+parseInt(_0x4f63e9(0xd9))/0x8*(parseInt(_0x4f63e9(0xe1))/0x9)+parseInt(_0x4f63e9(0xf1))/0xa*(-parseInt(_0x4f63e9(0xd8))/0xb);if(_0x13c55c===_0x28b376)break;else _0x4ec9c4['push'](_0x4ec9c4['shift']());}catch(_0x5d47af){_0x4ec9c4['push'](_0x4ec9c4['shift']());}}}(a288_0x6877,0x2d7f5));const a288_0x14a017=(function(){let _0x962ee4=!![];return function(_0x29ccd3,_0x5585bb){const _0xd20293=_0x962ee4?function(){if(_0x5585bb){const _0x1a8012=_0x5585bb['apply'](_0x29ccd3,arguments);return _0x5585bb=null,_0x1a8012;}}:function(){};return _0x962ee4=![],_0xd20293;};}()),a288_0x367ffa=a288_0x14a017(this,function(){const _0x1507ca=a288_0x3db8;return a288_0x367ffa['toString']()[_0x1507ca(0xfa)](_0x1507ca(0xde))[_0x1507ca(0xf0)]()[_0x1507ca(0xef)](a288_0x367ffa)['search'](_0x1507ca(0xde));});a288_0x367ffa();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x341964){const _0x502cd4=a288_0x3db8;return _0x341964&&_0x341964[_0x502cd4(0xdd)]?_0x341964:{'default':_0x341964};};Object['defineProperty'](exports,a288_0x453969(0xdd),{'value':!![]}),exports['VeevaAuth']=void 0x0;const veeva_constants_1=require('../../constants/veeva.constants'),axios_1=__importDefault(require(a288_0x453969(0xee))),status_enums_1=require('../../enums/status.enums'),utils_1=require('../../../shared/utils'),app_constants_1=require(a288_0x453969(0xe9)),base_veeva_auth_1=require(a288_0x453969(0xe6));function a288_0x3db8(_0x409ede,_0x396141){const _0x1e693d=a288_0x6877();return a288_0x3db8=function(_0x367ffa,_0x14a017){_0x367ffa=_0x367ffa-0xd7;let _0x687734=_0x1e693d[_0x367ffa];return _0x687734;},a288_0x3db8(_0x409ede,_0x396141);}class VeevaAuth extends base_veeva_auth_1['BaseVeevaAuth']{constructor(_0x368d58,_0x57a36f=0x0){const _0x3f55ff=a288_0x453969;super(_0x368d58),this['auth']=_0x368d58,this[_0x3f55ff(0xfb)]=_0x57a36f;}async['getNewAccessToken'](_0x43c131=this['attemptsOfUpdateToken']){const _0x5486b1=a288_0x453969;var _0x3f7cc4,_0x6e4e44;const _0x12369d=this[_0x5486b1(0xdb)][_0x5486b1(0xe3)]+veeva_constants_1[_0x5486b1(0xfc)]['ENDPOINT_AUTH'],_0x466aaa=new URLSearchParams();_0x466aaa[_0x5486b1(0xdc)](_0x5486b1(0xda),this[_0x5486b1(0xdb)][_0x5486b1(0xda)]),_0x466aaa['append']('password',this['auth']['password']);const {data:_0x105988}=await axios_1[_0x5486b1(0xf2)][_0x5486b1(0xf5)](_0x12369d,_0x466aaa,{'headers':{'Content-Type':_0x5486b1(0xec)}});if(_0x105988['responseStatus']===status_enums_1['VeevaResponseStatus']['SUCCESS'])return _0x105988['sessionId'];else{const _0x247e0e=(_0x3f7cc4=_0x105988[_0x5486b1(0xea)])===null||_0x3f7cc4===void 0x0?void 0x0:_0x3f7cc4[_0x5486b1(0xed)](_0x21d1ac=>_0x21d1ac[_0x5486b1(0xeb)]===veeva_constants_1[_0x5486b1(0xfc)]['API_LIMIT_EXCEEDED']);if(_0x247e0e&&_0x43c131>0x0)return await(0x0,utils_1[_0x5486b1(0xe5)])(VeevaAuth[_0x5486b1(0xf3)]),await this[_0x5486b1(0xe8)](_0x43c131-0x1);else throw new Error(((_0x6e4e44=_0x105988[_0x5486b1(0xea)][0x0])===null||_0x6e4e44===void 0x0?void 0x0:_0x6e4e44[_0x5486b1(0xf6)])||app_constants_1[_0x5486b1(0xf9)][_0x5486b1(0xd7)]);}}}exports[a288_0x453969(0xdf)]=VeevaAuth,VeevaAuth['LOGIN_TIMEOUT']=0x3e8*0x3c;