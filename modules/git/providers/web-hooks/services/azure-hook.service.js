const a210_0x32c503=a210_0x1f0f;(function(_0xa00216,_0x382a0d){const _0x5786e6=a210_0x1f0f,_0x57fd31=_0xa00216();while(!![]){try{const _0x47f762=-parseInt(_0x5786e6(0xd2))/0x1+parseInt(_0x5786e6(0xc6))/0x2+parseInt(_0x5786e6(0xd4))/0x3+parseInt(_0x5786e6(0xb4))/0x4+parseInt(_0x5786e6(0xae))/0x5*(-parseInt(_0x5786e6(0xc3))/0x6)+-parseInt(_0x5786e6(0xb9))/0x7*(-parseInt(_0x5786e6(0xd9))/0x8)+parseInt(_0x5786e6(0xbc))/0x9*(-parseInt(_0x5786e6(0xd3))/0xa);if(_0x47f762===_0x382a0d)break;else _0x57fd31['push'](_0x57fd31['shift']());}catch(_0x13d6f0){_0x57fd31['push'](_0x57fd31['shift']());}}}(a210_0x4816,0x67ec1));const a210_0x2246fd=(function(){let _0x5af0a4=!![];return function(_0x403832,_0x4d9aba){const _0x56d4f1=_0x5af0a4?function(){const _0x28b79b=a210_0x1f0f;if(_0x4d9aba){const _0x5f2c9a=_0x4d9aba[_0x28b79b(0xc5)](_0x403832,arguments);return _0x4d9aba=null,_0x5f2c9a;}}:function(){};return _0x5af0a4=![],_0x56d4f1;};}()),a210_0x67ede8=a210_0x2246fd(this,function(){const _0x11de90=a210_0x1f0f;return a210_0x67ede8[_0x11de90(0xb5)]()['search'](_0x11de90(0xbf))[_0x11de90(0xb5)]()[_0x11de90(0xd6)](a210_0x67ede8)[_0x11de90(0xbe)](_0x11de90(0xbf));});function a210_0x1f0f(_0x2fe4e3,_0x104b8a){const _0x4002a4=a210_0x4816();return a210_0x1f0f=function(_0x67ede8,_0x2246fd){_0x67ede8=_0x67ede8-0xae;let _0x4816c9=_0x4002a4[_0x67ede8];return _0x4816c9;},a210_0x1f0f(_0x2fe4e3,_0x104b8a);}function a210_0x4816(){const _0x5dc761=['credentials','create','1749965JbXesE','getProjectId','value','567GjvKGh','api','search','(((.+)+)+)+$','NotFoundError','publisherInputs','fromAzure','30KcZhaD','getOne','apply','379244nzGNrK','GitHookService','BadRequestError','../../../../../core/errors/not-found.error','getAll','delete','defineProperty','filter','../../../../../core/errors/bad-request.error','createRequest','patch','map','656913mkbSLS','70630XyqFWC','2455137ZEalOD','request','constructor','/_apis/hooks/subscriptions/','get','24QDrYem','710965SybLwM','projectId','post','HookDto','/_apis/hooks/subscriptions','organization','1922104aWdASf','toString','AzureHookService'];a210_0x4816=function(){return _0x5dc761;};return a210_0x4816();}a210_0x67ede8();'use strict';Object[a210_0x32c503(0xcc)](exports,'__esModule',{'value':!![]}),exports['AzureHookService']=void 0x0;const bad_request_error_1=require(a210_0x32c503(0xce)),not_found_error_1=require(a210_0x32c503(0xc9)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require('./git-hook.service');class AzureHookService extends git_hook_service_1[a210_0x32c503(0xc7)]{constructor(_0x209197,_0x5c78df,_0x2c72a8,_0x471c3c){const _0x42c2f1=a210_0x32c503;super(_0x209197),this[_0x42c2f1(0xaf)]=_0x5c78df,this[_0x42c2f1(0xbd)]=_0x2c72a8,this['credentials']=_0x471c3c,this[_0x42c2f1(0xd5)]=this['createRequest']();}get[a210_0x32c503(0xb3)](){const _0x4bfd23=a210_0x32c503;return this[_0x4bfd23(0xb7)][_0x4bfd23(0xb3)];}[a210_0x32c503(0xcf)](){const _0x34f48e=a210_0x32c503;return this[_0x34f48e(0xbd)][_0x34f48e(0xcf)]();}[a210_0x32c503(0xba)](){const _0x2fa0c4=a210_0x32c503;return this[_0x2fa0c4(0xaf)];}async[a210_0x32c503(0xb8)](_0x169213){const _0x2665fc=a210_0x32c503;try{const _0x582821=await this[_0x2665fc(0xd5)][_0x2665fc(0xb0)](this[_0x2665fc(0xb3)]+_0x2665fc(0xb2),_0x169213);return hook_dto_1[_0x2665fc(0xb1)][_0x2665fc(0xc2)](_0x582821);}catch(_0x3f6a47){throw new bad_request_error_1[(_0x2665fc(0xc8))](_0x3f6a47);}}async[a210_0x32c503(0xc4)](_0x20f759){const _0x35db1f=a210_0x32c503;try{const _0x400cdd=await this[_0x35db1f(0xd5)][_0x35db1f(0xd8)](this['organization']+_0x35db1f(0xd7)+_0x20f759);return hook_dto_1[_0x35db1f(0xb1)]['fromAzure'](_0x400cdd);}catch(_0x437855){throw new not_found_error_1['NotFoundError'](_0x437855);}}async[a210_0x32c503(0xca)](){const _0x3e973=a210_0x32c503;try{const _0x3ebc5c=await this['request'][_0x3e973(0xd8)](this[_0x3e973(0xb3)]+_0x3e973(0xb2));return _0x3ebc5c[_0x3e973(0xbb)][_0x3e973(0xcd)](_0x50ca06=>{const _0x55a850=_0x3e973;var _0x26effb;return((_0x26effb=_0x50ca06===null||_0x50ca06===void 0x0?void 0x0:_0x50ca06[_0x55a850(0xc1)])===null||_0x26effb===void 0x0?void 0x0:_0x26effb[_0x55a850(0xaf)])===this[_0x55a850(0xaf)];})[_0x3e973(0xd1)](_0x316cf2=>hook_dto_1[_0x3e973(0xb1)][_0x3e973(0xc2)](_0x316cf2));}catch(_0x4b9834){throw new not_found_error_1[(_0x3e973(0xc0))](_0x4b9834);}}async['update'](_0x551fc7,_0x5a3c32){const _0x2e4c30=a210_0x32c503;try{const _0x637558=await this['request'][_0x2e4c30(0xd0)](this[_0x2e4c30(0xb3)]+_0x2e4c30(0xd7)+_0x551fc7,_0x5a3c32);return hook_dto_1['HookDto']['fromGithub'](_0x637558);}catch(_0x111282){throw new bad_request_error_1[(_0x2e4c30(0xc8))](_0x111282);}}async[a210_0x32c503(0xcb)](_0x1eb544){const _0x84adc9=a210_0x32c503;try{await this[_0x84adc9(0xd5)][_0x84adc9(0xcb)](this[_0x84adc9(0xb3)]+_0x84adc9(0xd7)+_0x1eb544);}catch(_0x5c1c49){throw new bad_request_error_1[(_0x84adc9(0xc8))](_0x5c1c49);}}}exports[a210_0x32c503(0xb6)]=AzureHookService;