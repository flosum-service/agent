const a79_0xaa0acb=a79_0x37fe;(function(_0x2c258f,_0x3ff703){const _0xa4cce3=a79_0x37fe,_0x43e8ee=_0x2c258f();while(!![]){try{const _0x515cab=-parseInt(_0xa4cce3(0xbb))/0x1*(parseInt(_0xa4cce3(0xa1))/0x2)+-parseInt(_0xa4cce3(0xc3))/0x3*(parseInt(_0xa4cce3(0xbe))/0x4)+parseInt(_0xa4cce3(0xc2))/0x5+parseInt(_0xa4cce3(0xba))/0x6+parseInt(_0xa4cce3(0xac))/0x7+-parseInt(_0xa4cce3(0xb3))/0x8*(-parseInt(_0xa4cce3(0xc5))/0x9)+-parseInt(_0xa4cce3(0xab))/0xa;if(_0x515cab===_0x3ff703)break;else _0x43e8ee['push'](_0x43e8ee['shift']());}catch(_0x5c8f39){_0x43e8ee['push'](_0x43e8ee['shift']());}}}(a79_0x45ef,0x8f4d4));const a79_0x268336=(function(){let _0x1f3cd8=!![];return function(_0x49dffc,_0x58b684){const _0x384df6=_0x1f3cd8?function(){if(_0x58b684){const _0x3dc143=_0x58b684['apply'](_0x49dffc,arguments);return _0x58b684=null,_0x3dc143;}}:function(){};return _0x1f3cd8=![],_0x384df6;};}()),a79_0x55fc5e=a79_0x268336(this,function(){const _0x23e14b=a79_0x37fe;return a79_0x55fc5e[_0x23e14b(0xa8)]()[_0x23e14b(0xb6)](_0x23e14b(0xa4))[_0x23e14b(0xa8)]()['constructor'](a79_0x55fc5e)['search'](_0x23e14b(0xa4));});a79_0x55fc5e();function a79_0x37fe(_0x56f8ea,_0x3d46f7){const _0x42218c=a79_0x45ef();return a79_0x37fe=function(_0x55fc5e,_0x268336){_0x55fc5e=_0x55fc5e-0x9e;let _0x45ef7f=_0x42218c[_0x55fc5e];return _0x45ef7f;},a79_0x37fe(_0x56f8ea,_0x3d46f7);}'use strict';var __importDefault=this&&this[a79_0xaa0acb(0xa2)]||function(_0x4b78df){const _0xe0bc98=a79_0xaa0acb;return _0x4b78df&&_0x4b78df[_0xe0bc98(0xa3)]?_0x4b78df:{'default':_0x4b78df};};Object[a79_0xaa0acb(0xa5)](exports,a79_0xaa0acb(0xa3),{'value':!![]}),exports[a79_0xaa0acb(0xc1)]=void 0x0;function a79_0x45ef(){const _0x12e303=['BitbucketHookService','4839700ibSwrh','3xejicx','default','171veheWm','typedi','fromBitbucket','delete','201538ccvpif','__importDefault','__esModule','(((.+)+)+)+$','defineProperty','GitHookService','map','toString','update','apiUrl','25216800AtWxzY','4774861KELCRy','values','createRequest','../../../core/errors/not-found.error','hooks/','getAll','HookDto','477968ZaTMCB','./git-hook.service','NotFoundError','search','hooks','get','BitbucketApiService','6803526CGqjpM','7SJWLCV','../dto/hook.dto','BadRequestError','420524yMOfsp','../../../core/errors/bad-request.error','request'];a79_0x45ef=function(){return _0x12e303;};return a79_0x45ef();}const bad_request_error_1=require(a79_0xaa0acb(0xbf)),not_found_error_1=require(a79_0xaa0acb(0xaf)),bitbucket_api_service_1=require('../../git-api/services/bitbucket-api.service'),typedi_1=__importDefault(require(a79_0xaa0acb(0x9e))),hook_dto_1=require(a79_0xaa0acb(0xbc)),git_hook_service_1=require(a79_0xaa0acb(0xb4));class BitbucketHookService extends git_hook_service_1[a79_0xaa0acb(0xa6)]{constructor(_0x50e25e){const _0x1f6640=a79_0xaa0acb;super(_0x50e25e),this['request']=this[_0x1f6640(0xae)]();}[a79_0xaa0acb(0xae)](){const _0x8bf6c9=a79_0xaa0acb,_0x17751b=typedi_1[_0x8bf6c9(0xc4)][_0x8bf6c9(0xb8)](bitbucket_api_service_1[_0x8bf6c9(0xb9)]);return _0x17751b[_0x8bf6c9(0xae)](this['repository'][_0x8bf6c9(0xaa)]);}async['create'](_0x2da520){const _0x55d520=a79_0xaa0acb;try{const _0x3bc22b=await this[_0x55d520(0xc0)]['post'](_0x55d520(0xb7),_0x2da520);return hook_dto_1[_0x55d520(0xb2)]['fromBitbucket'](_0x3bc22b);}catch(_0x9b82b6){throw new bad_request_error_1[(_0x55d520(0xbd))](_0x9b82b6);}}async['getOne'](_0x3c2292){const _0x59a669=a79_0xaa0acb;try{const _0x3247cd=await this[_0x59a669(0xc0)][_0x59a669(0xb8)](_0x59a669(0xb0)+_0x3c2292);return hook_dto_1[_0x59a669(0xb2)][_0x59a669(0x9f)](_0x3247cd);}catch(_0x224264){throw new not_found_error_1[(_0x59a669(0xb5))](_0x224264);}}async[a79_0xaa0acb(0xb1)](){const _0x925768=a79_0xaa0acb;try{const _0x457a95=await this[_0x925768(0xc0)][_0x925768(0xb8)]('hooks');return _0x457a95[_0x925768(0xad)][_0x925768(0xa7)](_0x300eaf=>hook_dto_1[_0x925768(0xb2)][_0x925768(0x9f)](_0x300eaf));}catch(_0x2d3d4f){throw new not_found_error_1[(_0x925768(0xb5))](_0x2d3d4f);}}async[a79_0xaa0acb(0xa9)](_0x5ad780,_0x4c9d05){const _0x37c46a=a79_0xaa0acb;try{const _0x2784b4=await this[_0x37c46a(0xc0)]['put'](_0x37c46a(0xb0)+_0x5ad780,_0x4c9d05);return hook_dto_1['HookDto']['fromBitbucket'](_0x2784b4);}catch(_0x5bec26){throw new not_found_error_1['NotFoundError'](_0x5bec26);}}async['delete'](_0x27fc69){const _0x968045=a79_0xaa0acb;try{await this['request'][_0x968045(0xa0)](_0x968045(0xb0)+_0x27fc69);}catch(_0x2c524a){throw new not_found_error_1[(_0x968045(0xb5))](_0x2c524a);}}}exports[a79_0xaa0acb(0xc1)]=BitbucketHookService;