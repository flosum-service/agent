function a167_0x5a04(){const _0x3f7fb8=['defineProperty','apply','529880bqmRLB','apiUrl','3490wLxHXi','createRequest','search','NotFoundError','get','hooks','93921LJXBGp','../../../../../core/errors/bad-request.error','__esModule','request','fromGithub','api','getAll','48RjjsMy','map','post','repository','BadRequestError','patch','GitHookService','3395fIyIKw','6744294NIJgZK','4974VzJUTj','hooks/','HookDto','GithubHookService','111VLlwZK','16499604TQCqym','update','1112296SNyetg','10yZUZmA','delete','(((.+)+)+)+$'];a167_0x5a04=function(){return _0x3f7fb8;};return a167_0x5a04();}const a167_0x385c28=a167_0x41eb;(function(_0xb2360d,_0x10a671){const _0x1b5291=a167_0x41eb,_0x20e65a=_0xb2360d();while(!![]){try{const _0x293ef6=parseInt(_0x1b5291(0x139))/0x1*(-parseInt(_0x1b5291(0x144))/0x2)+parseInt(_0x1b5291(0x14a))/0x3*(-parseInt(_0x1b5291(0x151))/0x4)+parseInt(_0x1b5291(0x142))/0x5+-parseInt(_0x1b5291(0x15a))/0x6*(-parseInt(_0x1b5291(0x158))/0x7)+-parseInt(_0x1b5291(0x13c))/0x8+parseInt(_0x1b5291(0x159))/0x9*(-parseInt(_0x1b5291(0x13d))/0xa)+parseInt(_0x1b5291(0x13a))/0xb;if(_0x293ef6===_0x10a671)break;else _0x20e65a['push'](_0x20e65a['shift']());}catch(_0x312164){_0x20e65a['push'](_0x20e65a['shift']());}}}(a167_0x5a04,0x8654f));const a167_0x42c942=(function(){let _0x17c2a6=!![];return function(_0x3a9930,_0x2f89e7){const _0x20b6da=_0x17c2a6?function(){const _0x5f329d=a167_0x41eb;if(_0x2f89e7){const _0x4a21a2=_0x2f89e7[_0x5f329d(0x141)](_0x3a9930,arguments);return _0x2f89e7=null,_0x4a21a2;}}:function(){};return _0x17c2a6=![],_0x20b6da;};}()),a167_0x303570=a167_0x42c942(this,function(){const _0x469d28=a167_0x41eb;return a167_0x303570['toString']()[_0x469d28(0x146)](_0x469d28(0x13f))['toString']()['constructor'](a167_0x303570)[_0x469d28(0x146)]('(((.+)+)+)+$');});a167_0x303570();'use strict';Object[a167_0x385c28(0x140)](exports,a167_0x385c28(0x14c),{'value':!![]}),exports[a167_0x385c28(0x138)]=void 0x0;const bad_request_error_1=require(a167_0x385c28(0x14b)),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require('./git-hook.service');function a167_0x41eb(_0x2a7b4a,_0x463444){const _0x22f35d=a167_0x5a04();return a167_0x41eb=function(_0x303570,_0x42c942){_0x303570=_0x303570-0x136;let _0x5a047e=_0x22f35d[_0x303570];return _0x5a047e;},a167_0x41eb(_0x2a7b4a,_0x463444);}class GithubHookService extends git_hook_service_1[a167_0x385c28(0x157)]{constructor(_0x68369b,_0x474837){const _0x34b941=a167_0x385c28;super(_0x68369b),this['api']=_0x474837,this[_0x34b941(0x14d)]=this[_0x34b941(0x145)]();}['createRequest'](){const _0x50d38c=a167_0x385c28;return this[_0x50d38c(0x14f)][_0x50d38c(0x145)](this[_0x50d38c(0x154)][_0x50d38c(0x143)]);}async['create'](_0xcc693b){const _0x2b3708=a167_0x385c28;try{const _0xd73b52=await this['request'][_0x2b3708(0x153)](_0x2b3708(0x149),_0xcc693b);return hook_dto_1[_0x2b3708(0x137)][_0x2b3708(0x14e)](_0xd73b52);}catch(_0x22f083){throw new bad_request_error_1[(_0x2b3708(0x155))](_0x22f083);}}async['getOne'](_0x20181a){const _0x5bd5fd=a167_0x385c28;try{const _0x3d8657=await this[_0x5bd5fd(0x14d)]['get'](_0x5bd5fd(0x136)+_0x20181a);return hook_dto_1[_0x5bd5fd(0x137)]['fromGithub'](_0x3d8657);}catch(_0x33788a){throw new not_found_error_1[(_0x5bd5fd(0x147))](_0x33788a);}}async[a167_0x385c28(0x150)](){const _0x508897=a167_0x385c28;try{const _0x15cbff=await this[_0x508897(0x14d)][_0x508897(0x148)](_0x508897(0x149));return _0x15cbff[_0x508897(0x152)](_0x3ef8ff=>hook_dto_1[_0x508897(0x137)]['fromGithub'](_0x3ef8ff));}catch(_0x3d7fa1){throw new not_found_error_1['NotFoundError'](_0x3d7fa1);}}async[a167_0x385c28(0x13b)](_0x559027,_0x5df905){const _0x40f9b4=a167_0x385c28;try{const _0x1060d8=await this[_0x40f9b4(0x14d)][_0x40f9b4(0x156)](_0x40f9b4(0x136)+_0x559027,_0x5df905);return hook_dto_1[_0x40f9b4(0x137)]['fromGithub'](_0x1060d8);}catch(_0x495d65){throw new bad_request_error_1['BadRequestError'](_0x495d65);}}async[a167_0x385c28(0x13e)](_0x35ef01){const _0x551791=a167_0x385c28;try{await this[_0x551791(0x14d)][_0x551791(0x13e)](_0x551791(0x136)+_0x35ef01);}catch(_0x90d6ef){throw new bad_request_error_1['BadRequestError'](_0x90d6ef);}}}exports['GithubHookService']=GithubHookService;