const a73_0x32c5dc=a73_0x4467;(function(_0x538f35,_0x154b5f){const _0x299589=a73_0x4467,_0x307d2f=_0x538f35();while(!![]){try{const _0x23e70b=parseInt(_0x299589(0x1a8))/0x1*(parseInt(_0x299589(0x1d0))/0x2)+parseInt(_0x299589(0x1b5))/0x3*(parseInt(_0x299589(0x1ac))/0x4)+-parseInt(_0x299589(0x1b7))/0x5+parseInt(_0x299589(0x1b6))/0x6+-parseInt(_0x299589(0x1be))/0x7+-parseInt(_0x299589(0x1c2))/0x8+-parseInt(_0x299589(0x1c7))/0x9*(-parseInt(_0x299589(0x1c5))/0xa);if(_0x23e70b===_0x154b5f)break;else _0x307d2f['push'](_0x307d2f['shift']());}catch(_0x694480){_0x307d2f['push'](_0x307d2f['shift']());}}}(a73_0x3538,0xee411));const a73_0x5b618b=(function(){let _0x37cce2=!![];return function(_0x4a3f2d,_0xc6236a){const _0x7cf4c2=_0x37cce2?function(){const _0x596165=a73_0x4467;if(_0xc6236a){const _0x467d11=_0xc6236a[_0x596165(0x1a6)](_0x4a3f2d,arguments);return _0xc6236a=null,_0x467d11;}}:function(){};return _0x37cce2=![],_0x7cf4c2;};}()),a73_0x59018a=a73_0x5b618b(this,function(){const _0x3550e2=a73_0x4467;return a73_0x59018a[_0x3550e2(0x1cf)]()[_0x3550e2(0x1bb)](_0x3550e2(0x1c6))['toString']()[_0x3550e2(0x1ad)](a73_0x59018a)['search'](_0x3550e2(0x1c6));});a73_0x59018a();'use strict';var __decorate=this&&this[a73_0x32c5dc(0x1b3)]||function(_0x2cf091,_0x543113,_0x59f738,_0x27ff5c){const _0x51b9d3=a73_0x32c5dc;var _0x1a1c2c=arguments[_0x51b9d3(0x1cc)],_0x329ea2=_0x1a1c2c<0x3?_0x543113:_0x27ff5c===null?_0x27ff5c=Object[_0x51b9d3(0x1c4)](_0x543113,_0x59f738):_0x27ff5c,_0x2de107;if(typeof Reflect===_0x51b9d3(0x1a7)&&typeof Reflect[_0x51b9d3(0x1c0)]==='function')_0x329ea2=Reflect[_0x51b9d3(0x1c0)](_0x2cf091,_0x543113,_0x59f738,_0x27ff5c);else{for(var _0x5a6c50=_0x2cf091[_0x51b9d3(0x1cc)]-0x1;_0x5a6c50>=0x0;_0x5a6c50--)if(_0x2de107=_0x2cf091[_0x5a6c50])_0x329ea2=(_0x1a1c2c<0x3?_0x2de107(_0x329ea2):_0x1a1c2c>0x3?_0x2de107(_0x543113,_0x59f738,_0x329ea2):_0x2de107(_0x543113,_0x59f738))||_0x329ea2;}return _0x1a1c2c>0x3&&_0x329ea2&&Object[_0x51b9d3(0x1ce)](_0x543113,_0x59f738,_0x329ea2),_0x329ea2;},__metadata=this&&this[a73_0x32c5dc(0x1d2)]||function(_0x434517,_0x19cd84){const _0x28e506=a73_0x32c5dc;if(typeof Reflect===_0x28e506(0x1a7)&&typeof Reflect[_0x28e506(0x1aa)]==='function')return Reflect[_0x28e506(0x1aa)](_0x434517,_0x19cd84);};function a73_0x4467(_0x243eb4,_0x14f98f){const _0x5bce4d=a73_0x3538();return a73_0x4467=function(_0x59018a,_0x5b618b){_0x59018a=_0x59018a-0x1a6;let _0x353820=_0x5bce4d[_0x59018a];return _0x353820;},a73_0x4467(_0x243eb4,_0x14f98f);}Object[a73_0x32c5dc(0x1ce)](exports,'__esModule',{'value':!![]}),exports[a73_0x32c5dc(0x1ba)]=void 0x0;const typedi_1=require(a73_0x32c5dc(0x1b4)),errors_1=require(a73_0x32c5dc(0x1bf)),credentials_factory_1=require(a73_0x32c5dc(0x1a9)),providers_tokens_1=require(a73_0x32c5dc(0x1b8)),git_api_factory_1=require('../../providers/api/git-api.factory'),bad_request_error_1=require('../../../../core/errors/bad-request.error'),salesforce_service_1=require(a73_0x32c5dc(0x1d1));let ProvidersFactory=class ProvidersFactory{constructor(_0x4937a3){const _0x11708b=a73_0x32c5dc;this[_0x11708b(0x1ae)]=_0x4937a3;}async[a73_0x32c5dc(0x1cd)](_0x236b24){const _0x5baa21=a73_0x32c5dc,_0x123100=await this[_0x5baa21(0x1ae)][_0x5baa21(0x1bc)](_0x236b24);if(!_0x123100)throw new Error(errors_1[_0x5baa21(0x1af)]);typedi_1[_0x5baa21(0x1c1)][_0x5baa21(0x1c9)](providers_tokens_1[_0x5baa21(0x1c8)][_0x5baa21(0x1b0)],_0x123100);const _0x3b8b1d=await credentials_factory_1[_0x5baa21(0x1cb)][_0x5baa21(0x1cd)](_0x123100);typedi_1[_0x5baa21(0x1c1)]['set'](providers_tokens_1[_0x5baa21(0x1c8)]['provider'],_0x123100[_0x5baa21(0x1ab)]),typedi_1[_0x5baa21(0x1c1)][_0x5baa21(0x1c9)](providers_tokens_1[_0x5baa21(0x1c8)][_0x5baa21(0x1c3)],_0x3b8b1d);const _0x529c89=await git_api_factory_1['ServicesFactory'][_0x5baa21(0x1b1)](typedi_1[_0x5baa21(0x1c1)],_0x123100[_0x5baa21(0x1ab)]);if(!await _0x529c89[_0x5baa21(0x1ca)]())throw new bad_request_error_1[(_0x5baa21(0x1b2))](errors_1[_0x5baa21(0x1af)]);return _0x529c89;}};function a73_0x3538(){const _0xdf5b9a=['Service','2116569GKavsm','../../../../constants/errors','decorate','Container','10748896trAnqi','credentials','getOwnPropertyDescriptor','220qihTdF','(((.+)+)+)+$','605187fcYABN','Tokens','set','isLoggedIn','CredentialsFactory','length','createFromConnection','defineProperty','toString','2GtgRbN','../../salesforce/services/salesforce.service','__metadata','apply','object','51079YpVBJh','../../providers/credentials/credentials.factory','metadata','gitProvider','75216ywPcsZ','constructor','salesforceService','ERR_UNKNOWN_GIT_SERVICE','config','createFromProvider','BadRequestError','__decorate','typedi','249SafDCo','2636478liNUNI','4543510QkrVCj','../../providers/providers.tokens','SalesforceService','ProvidersFactory','search','fetchConnection'];a73_0x3538=function(){return _0xdf5b9a;};return a73_0x3538();}ProvidersFactory=__decorate([typedi_1[a73_0x32c5dc(0x1bd)](),__metadata('design:paramtypes',[salesforce_service_1[a73_0x32c5dc(0x1b9)]])],ProvidersFactory),exports['ProvidersFactory']=ProvidersFactory;