const a188_0x160756=a188_0x287a;function a188_0x5583(){const _0x5a308e=['x-connection-id','search','Middleware','20YUobdZ','Tokens','24122VkLZeg','fetchConnection','length','defineProperty','container','../credentials/credentials.factory','object','SalesforceService','gitProvider','__esModule','3391713zmPfib','../../../../core','ServicesFactory','1411062OkDdEW','2036960gnHVYG','GitConnectionMiddleware','function','createFromConnection','design:paramtypes','context','metadata','20523591WzXozv','salesforceService','2064hbthpX','699040YcXjBD','decorate','set','CredentialsFactory','createFromProvider','ERR_UNKNOWN_GIT_SERVICE','credentials','toString','691954jxIYAt','../api/git-api.factory','getOwnPropertyDescriptor','provider','__metadata'];a188_0x5583=function(){return _0x5a308e;};return a188_0x5583();}(function(_0x22191f,_0x3f5523){const _0x2d4b33=a188_0x287a,_0x149da2=_0x22191f();while(!![]){try{const _0x5632cd=parseInt(_0x2d4b33(0x1e9))/0x1+-parseInt(_0x2d4b33(0x201))/0x2+-parseInt(_0x2d4b33(0x1fd))/0x3+-parseInt(_0x2d4b33(0x20b))/0x4+-parseInt(_0x2d4b33(0x1f1))/0x5*(parseInt(_0x2d4b33(0x200))/0x6)+-parseInt(_0x2d4b33(0x1f3))/0x7*(-parseInt(_0x2d4b33(0x20a))/0x8)+parseInt(_0x2d4b33(0x208))/0x9;if(_0x5632cd===_0x3f5523)break;else _0x149da2['push'](_0x149da2['shift']());}catch(_0x2b75f5){_0x149da2['push'](_0x149da2['shift']());}}}(a188_0x5583,0x91ba6));const a188_0x515c41=(function(){let _0x3303ab=!![];return function(_0x2505ca,_0x1690c9){const _0x10aafa=_0x3303ab?function(){if(_0x1690c9){const _0x518895=_0x1690c9['apply'](_0x2505ca,arguments);return _0x1690c9=null,_0x518895;}}:function(){};return _0x3303ab=![],_0x10aafa;};}()),a188_0x239e2c=a188_0x515c41(this,function(){const _0x349e8b=a188_0x287a;return a188_0x239e2c[_0x349e8b(0x1e8)]()[_0x349e8b(0x1ef)]('(((.+)+)+)+$')[_0x349e8b(0x1e8)]()['constructor'](a188_0x239e2c)['search']('(((.+)+)+)+$');});function a188_0x287a(_0x2f1efe,_0x2209c9){const _0x1709c8=a188_0x5583();return a188_0x287a=function(_0x239e2c,_0x515c41){_0x239e2c=_0x239e2c-0x1e8;let _0x558305=_0x1709c8[_0x239e2c];return _0x558305;},a188_0x287a(_0x2f1efe,_0x2209c9);}a188_0x239e2c();'use strict';var __decorate=this&&this['__decorate']||function(_0x195090,_0x13de5f,_0x30ee07,_0x2bb93a){const _0x44bf62=a188_0x287a;var _0x227ce6=arguments[_0x44bf62(0x1f5)],_0x40d130=_0x227ce6<0x3?_0x13de5f:_0x2bb93a===null?_0x2bb93a=Object[_0x44bf62(0x1eb)](_0x13de5f,_0x30ee07):_0x2bb93a,_0x2a2afb;if(typeof Reflect==='object'&&typeof Reflect[_0x44bf62(0x20c)]===_0x44bf62(0x203))_0x40d130=Reflect[_0x44bf62(0x20c)](_0x195090,_0x13de5f,_0x30ee07,_0x2bb93a);else{for(var _0x1d63fa=_0x195090[_0x44bf62(0x1f5)]-0x1;_0x1d63fa>=0x0;_0x1d63fa--)if(_0x2a2afb=_0x195090[_0x1d63fa])_0x40d130=(_0x227ce6<0x3?_0x2a2afb(_0x40d130):_0x227ce6>0x3?_0x2a2afb(_0x13de5f,_0x30ee07,_0x40d130):_0x2a2afb(_0x13de5f,_0x30ee07))||_0x40d130;}return _0x227ce6>0x3&&_0x40d130&&Object[_0x44bf62(0x1f6)](_0x13de5f,_0x30ee07,_0x40d130),_0x40d130;},__metadata=this&&this[a188_0x160756(0x1ed)]||function(_0x5c824f,_0x5178c6){const _0x1b81e7=a188_0x160756;if(typeof Reflect===_0x1b81e7(0x1f9)&&typeof Reflect[_0x1b81e7(0x207)]===_0x1b81e7(0x203))return Reflect[_0x1b81e7(0x207)](_0x5c824f,_0x5178c6);};Object[a188_0x160756(0x1f6)](exports,a188_0x160756(0x1fc),{'value':!![]}),exports[a188_0x160756(0x202)]=void 0x0;const core_1=require(a188_0x160756(0x1fe)),salesforce_service_1=require('../../salesforce/services/salesforce.service'),providers_tokens_1=require('../providers.tokens'),credentials_factory_1=require(a188_0x160756(0x1f8)),git_api_factory_1=require(a188_0x160756(0x1ea)),errors_1=require('../../../../constants/errors');let GitConnectionMiddleware=class GitConnectionMiddleware{constructor(_0x40535f){const _0x3ad18b=a188_0x160756;this[_0x3ad18b(0x209)]=_0x40535f;}async['handle'](_0x38d758,_0x4112c2){const _0xdde0f2=a188_0x160756,_0x32a4b3=_0x38d758['headers'][_0xdde0f2(0x1ee)]||null;if(!_0x32a4b3||!_0x38d758[_0xdde0f2(0x206)][_0xdde0f2(0x1f7)])throw new Error(errors_1[_0xdde0f2(0x210)]);const _0x5ea1ec=await this[_0xdde0f2(0x209)][_0xdde0f2(0x1f4)](_0x32a4b3);if(!_0x5ea1ec)throw new Error(errors_1['ERR_UNKNOWN_GIT_SERVICE']);const _0xf6db33=await credentials_factory_1[_0xdde0f2(0x20e)][_0xdde0f2(0x204)](_0x5ea1ec),_0x29fbd2=_0x38d758['context'][_0xdde0f2(0x1f7)];_0x29fbd2[_0xdde0f2(0x20d)](providers_tokens_1[_0xdde0f2(0x1f2)]['provider'],_0x5ea1ec[_0xdde0f2(0x1fb)]),_0x29fbd2[_0xdde0f2(0x20d)](providers_tokens_1[_0xdde0f2(0x1f2)][_0xdde0f2(0x211)],_0xf6db33),_0x38d758[_0xdde0f2(0x206)][_0xdde0f2(0x1ec)]=git_api_factory_1[_0xdde0f2(0x1ff)][_0xdde0f2(0x20f)](_0x29fbd2,_0x5ea1ec[_0xdde0f2(0x1fb)]);}};GitConnectionMiddleware=__decorate([(0x0,core_1[a188_0x160756(0x1f0)])('before'),__metadata(a188_0x160756(0x205),[salesforce_service_1[a188_0x160756(0x1fa)]])],GitConnectionMiddleware),exports['GitConnectionMiddleware']=GitConnectionMiddleware;