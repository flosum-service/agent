function a83_0x5092(){const _0x449485=['9TMcWmi','473GOLcRM','NotFoundError','GitlabApiService','4502784ImJUBb','put','14034664SBJGMv','170080PtEswF','1132eXgsmZ','map','6793010qzWucm','(((.+)+)+)+$','repository','3186333PLpjHF','__importDefault','apply','update','__esModule','default','getOne','../../git-api/services/gitlab-api.service','fromGitlab','constructor','hooks/','HookDto','145190fgcDMZ','request','GitlabHookService','./git-hook.service','1957ukWuBp','getAll','create','createRequest','typedi','defineProperty','get','BadRequestError','hooks','search','delete','45ZTWneb'];a83_0x5092=function(){return _0x449485;};return a83_0x5092();}const a83_0x5be413=a83_0x1651;(function(_0x151b7f,_0x1e8b7f){const _0x35cf98=a83_0x1651,_0x5e2673=_0x151b7f();while(!![]){try{const _0x3c2abd=parseInt(_0x35cf98(0x1fc))/0x1*(-parseInt(_0x35cf98(0x1e7))/0x2)+parseInt(_0x35cf98(0x1ec))/0x3+parseInt(_0x35cf98(0x1e6))/0x4*(parseInt(_0x35cf98(0x207))/0x5)+parseInt(_0x35cf98(0x1e3))/0x6+parseInt(_0x35cf98(0x1e9))/0x7+-parseInt(_0x35cf98(0x1e5))/0x8*(parseInt(_0x35cf98(0x208))/0x9)+parseInt(_0x35cf98(0x1f8))/0xa*(parseInt(_0x35cf98(0x209))/0xb);if(_0x3c2abd===_0x1e8b7f)break;else _0x5e2673['push'](_0x5e2673['shift']());}catch(_0x59f62c){_0x5e2673['push'](_0x5e2673['shift']());}}}(a83_0x5092,0xe2907));const a83_0x25cfb0=(function(){let _0x6d49b4=!![];return function(_0x31f2b5,_0xf23251){const _0x5a8e79=_0x6d49b4?function(){const _0x506b61=a83_0x1651;if(_0xf23251){const _0x4a9c54=_0xf23251[_0x506b61(0x1ee)](_0x31f2b5,arguments);return _0xf23251=null,_0x4a9c54;}}:function(){};return _0x6d49b4=![],_0x5a8e79;};}()),a83_0x22c00a=a83_0x25cfb0(this,function(){const _0x12e5b5=a83_0x1651;return a83_0x22c00a['toString']()[_0x12e5b5(0x205)](_0x12e5b5(0x1ea))['toString']()[_0x12e5b5(0x1f5)](a83_0x22c00a)[_0x12e5b5(0x205)](_0x12e5b5(0x1ea));});function a83_0x1651(_0x53a9c3,_0x2a88cd){const _0x22911e=a83_0x5092();return a83_0x1651=function(_0x22c00a,_0x25cfb0){_0x22c00a=_0x22c00a-0x1e1;let _0x509242=_0x22911e[_0x22c00a];return _0x509242;},a83_0x1651(_0x53a9c3,_0x2a88cd);}a83_0x22c00a();'use strict';var __importDefault=this&&this[a83_0x5be413(0x1ed)]||function(_0x505af2){const _0x5e8f79=a83_0x5be413;return _0x505af2&&_0x505af2[_0x5e8f79(0x1f0)]?_0x505af2:{'default':_0x505af2};};Object[a83_0x5be413(0x201)](exports,'__esModule',{'value':!![]}),exports[a83_0x5be413(0x1fa)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require('../../../core/errors/not-found.error'),gitlab_api_service_1=require(a83_0x5be413(0x1f3)),typedi_1=__importDefault(require(a83_0x5be413(0x200))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a83_0x5be413(0x1fb));class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x50f21a){super(_0x50f21a),this['request']=this['createRequest']();}[a83_0x5be413(0x1ff)](){const _0x16c87d=a83_0x5be413,_0x35ea19=typedi_1[_0x16c87d(0x1f1)][_0x16c87d(0x202)](gitlab_api_service_1[_0x16c87d(0x1e2)]);return _0x35ea19['createRequest'](this[_0x16c87d(0x1eb)]['apiUrl']);}async[a83_0x5be413(0x1fe)](_0x14817c){const _0xff3e73=a83_0x5be413;try{const _0x1c98fb=await this[_0xff3e73(0x1f9)]['post'](_0xff3e73(0x204),_0x14817c);return hook_dto_1['HookDto'][_0xff3e73(0x1f4)](_0x1c98fb);}catch(_0x22686c){throw new bad_request_error_1[(_0xff3e73(0x203))](_0x22686c);}}async[a83_0x5be413(0x1f2)](_0x3e1101){const _0x1cfbf4=a83_0x5be413;try{const _0x2d7d94=await this[_0x1cfbf4(0x1f9)][_0x1cfbf4(0x202)]('hooks/'+_0x3e1101);return hook_dto_1[_0x1cfbf4(0x1f7)][_0x1cfbf4(0x1f4)](_0x2d7d94);}catch(_0x125cc0){throw new not_found_error_1[(_0x1cfbf4(0x1e1))](_0x125cc0);}}async[a83_0x5be413(0x1fd)](){const _0x2c17dc=a83_0x5be413;try{const _0x13ea3b=await this['request'][_0x2c17dc(0x202)](_0x2c17dc(0x204));return _0x13ea3b[_0x2c17dc(0x1e8)](_0x1d5434=>hook_dto_1[_0x2c17dc(0x1f7)][_0x2c17dc(0x1f4)](_0x1d5434));}catch(_0x5532d2){throw new not_found_error_1['NotFoundError'](_0x5532d2);}}async[a83_0x5be413(0x1ef)](_0x30a8bc,_0x58baa9){const _0x77347a=a83_0x5be413;try{const _0x289662=await this[_0x77347a(0x1f9)][_0x77347a(0x1e4)](_0x77347a(0x1f6)+_0x30a8bc,_0x58baa9);return hook_dto_1[_0x77347a(0x1f7)][_0x77347a(0x1f4)](_0x289662);}catch(_0x58a31c){throw new not_found_error_1[(_0x77347a(0x1e1))](_0x58a31c);}}async[a83_0x5be413(0x206)](_0x236634){const _0x326483=a83_0x5be413;try{await this[_0x326483(0x1f9)]['delete'](_0x326483(0x1f6)+_0x236634);}catch(_0x1bef7d){throw new not_found_error_1[(_0x326483(0x1e1))](_0x1bef7d);}}}exports['GitlabHookService']=GitlabHookService;