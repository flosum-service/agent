const a365_0x3850e9=a365_0x4bb1;function a365_0x4bb1(_0x3c59d3,_0x37d093){const _0x32c55e=a365_0x2051();return a365_0x4bb1=function(_0x137792,_0x5a1487){_0x137792=_0x137792-0x139;let _0x2051aa=_0x32c55e[_0x137792];return _0x2051aa;},a365_0x4bb1(_0x3c59d3,_0x37d093);}(function(_0x2ac732,_0x416e42){const _0x34ec9a=a365_0x4bb1,_0x20f63d=_0x2ac732();while(!![]){try{const _0x4418c1=-parseInt(_0x34ec9a(0x153))/0x1*(-parseInt(_0x34ec9a(0x142))/0x2)+parseInt(_0x34ec9a(0x157))/0x3*(parseInt(_0x34ec9a(0x141))/0x4)+parseInt(_0x34ec9a(0x145))/0x5+-parseInt(_0x34ec9a(0x151))/0x6*(parseInt(_0x34ec9a(0x146))/0x7)+parseInt(_0x34ec9a(0x15d))/0x8+-parseInt(_0x34ec9a(0x154))/0x9+-parseInt(_0x34ec9a(0x144))/0xa;if(_0x4418c1===_0x416e42)break;else _0x20f63d['push'](_0x20f63d['shift']());}catch(_0x66cf50){_0x20f63d['push'](_0x20f63d['shift']());}}}(a365_0x2051,0xd9134));const a365_0x5a1487=(function(){let _0x7d9aad=!![];return function(_0x425afe,_0x185dfd){const _0x3c38ab=_0x7d9aad?function(){const _0x26ba1f=a365_0x4bb1;if(_0x185dfd){const _0x423c4f=_0x185dfd[_0x26ba1f(0x14a)](_0x425afe,arguments);return _0x185dfd=null,_0x423c4f;}}:function(){};return _0x7d9aad=![],_0x3c38ab;};}()),a365_0x137792=a365_0x5a1487(this,function(){const _0x32f9be=a365_0x4bb1;return a365_0x137792[_0x32f9be(0x14e)]()[_0x32f9be(0x13e)]('(((.+)+)+)+$')[_0x32f9be(0x14e)]()[_0x32f9be(0x155)](a365_0x137792)[_0x32f9be(0x13e)](_0x32f9be(0x14f));});a365_0x137792();'use strict';function a365_0x2051(){const _0x1d12f8=['__esModule','1861704AFUzXR','../utils/veeva-auth.utils','VeevaConstants','post','defineProperty','createReadStream','6022288aSVRVJ','parse','SUCCESS','../classes/errors/veeva-error','includes','VpkService','__importDefault','ENDPOINT_EXPORT_IMPORT_PACKAGE','../constants/veeva.constants','data','file','search','VeevaError','form-data','4kqmEwK','64490Xddzwi','validate','26444410QwaFmE','6461015xllhUn','153832VTQwWo','responseStatus','../enums/status.enums','append','apply','updateVeevaConnection','ENDPOINT_VALIDATE_VPK','default','toString','(((.+)+)+)+$','multipart/form-data','54JsGSbl','_connection','39QdHLNh','1725723iUxxab','constructor'];a365_0x2051=function(){return _0x1d12f8;};return a365_0x2051();}var __importDefault=this&&this[a365_0x3850e9(0x139)]||function(_0xdcc356){const _0x8e661d=a365_0x3850e9;return _0xdcc356&&_0xdcc356[_0x8e661d(0x156)]?_0xdcc356:{'default':_0xdcc356};};Object[a365_0x3850e9(0x15b)](exports,a365_0x3850e9(0x156),{'value':!![]}),exports['VpkService']=void 0x0;const form_data_1=__importDefault(require(a365_0x3850e9(0x140))),fs_1=require('fs'),veeva_constants_1=require(a365_0x3850e9(0x13b)),veeva_auth_utils_1=require(a365_0x3850e9(0x158)),veeva_error_1=require(a365_0x3850e9(0x160)),status_enums_1=require(a365_0x3850e9(0x148));class VpkService{constructor({connection:_0x293b23}){const _0x57af3d=a365_0x3850e9;this[_0x57af3d(0x152)]=_0x293b23;}async['generate'](_0x26165c,_0x3dd708=0x1){const _0x1be3db=a365_0x3850e9;var _0x1ec687;const _0x544f1d=new form_data_1['default']();_0x544f1d[_0x1be3db(0x149)](_0x1be3db(0x13d),(0x0,fs_1[_0x1be3db(0x15c)])(_0x26165c));const _0x31ddb9=await this[_0x1be3db(0x152)][_0x1be3db(0x15a)](veeva_constants_1[_0x1be3db(0x159)][_0x1be3db(0x13a)],_0x544f1d,{'responseType':'arraybuffer','headers':{'Content-Type':_0x1be3db(0x150)}}),_0x52afcf=(_0x1ec687=_0x31ddb9['headers']['content-type'])===null||_0x1ec687===void 0x0?void 0x0:_0x1ec687[_0x1be3db(0x161)]('application/json');if(!_0x52afcf)return _0x31ddb9['data'];else{const _0x2f1a3a=JSON[_0x1be3db(0x15e)](_0x31ddb9[_0x1be3db(0x13c)]);if(_0x3dd708>0x0)return await(0x0,veeva_auth_utils_1[_0x1be3db(0x14b)])(this['_connection']),await this['generate'](_0x26165c,_0x3dd708-0x1);throw new veeva_error_1[(_0x1be3db(0x13f))](_0x2f1a3a['errors']);}}async[a365_0x3850e9(0x143)](_0x525eae,_0x5666cd=0x1){const _0x24920b=a365_0x3850e9,_0x5ca621=new form_data_1[(_0x24920b(0x14d))]();_0x5ca621[_0x24920b(0x149)](_0x24920b(0x13d),(0x0,fs_1['createReadStream'])(_0x525eae));const _0x3b50f9=await this[_0x24920b(0x152)][_0x24920b(0x15a)](veeva_constants_1[_0x24920b(0x159)][_0x24920b(0x14c)],_0x5ca621,{'headers':{'Content-Type':_0x24920b(0x150)}}),_0x345dac=_0x3b50f9[_0x24920b(0x13c)];if(_0x345dac[_0x24920b(0x147)]===status_enums_1['VeevaResponseStatus'][_0x24920b(0x15f)])return _0x345dac;else{if(_0x5666cd>0x0)return await(0x0,veeva_auth_utils_1['updateVeevaConnection'])(this[_0x24920b(0x152)]),await this['validate'](_0x525eae,_0x5666cd-0x1);throw new veeva_error_1[(_0x24920b(0x13f))](_0x345dac['errors']);}}}exports[a365_0x3850e9(0x162)]=VpkService;