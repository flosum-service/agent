function a83_0x2627(_0x220f61,_0x515117){const _0x2c4322=a83_0x4244();return a83_0x2627=function(_0x345402,_0x56a965){_0x345402=_0x345402-0x144;let _0x4244de=_0x2c4322[_0x345402];return _0x4244de;},a83_0x2627(_0x220f61,_0x515117);}const a83_0x11e346=a83_0x2627;(function(_0x5ea5c0,_0x4d0e0f){const _0x491a90=a83_0x2627,_0x18545b=_0x5ea5c0();while(!![]){try{const _0x5a98bb=parseInt(_0x491a90(0x156))/0x1+parseInt(_0x491a90(0x144))/0x2*(parseInt(_0x491a90(0x157))/0x3)+-parseInt(_0x491a90(0x15d))/0x4+parseInt(_0x491a90(0x15f))/0x5+parseInt(_0x491a90(0x161))/0x6+-parseInt(_0x491a90(0x148))/0x7*(-parseInt(_0x491a90(0x160))/0x8)+-parseInt(_0x491a90(0x16c))/0x9;if(_0x5a98bb===_0x4d0e0f)break;else _0x18545b['push'](_0x18545b['shift']());}catch(_0x1cb41c){_0x18545b['push'](_0x18545b['shift']());}}}(a83_0x4244,0xd93ae));const a83_0x56a965=(function(){let _0x2a196a=!![];return function(_0x39bbd4,_0x36e282){const _0x10b230=_0x2a196a?function(){if(_0x36e282){const _0x31d142=_0x36e282['apply'](_0x39bbd4,arguments);return _0x36e282=null,_0x31d142;}}:function(){};return _0x2a196a=![],_0x10b230;};}()),a83_0x345402=a83_0x56a965(this,function(){const _0x4d34aa=a83_0x2627;return a83_0x345402['toString']()[_0x4d34aa(0x159)](_0x4d34aa(0x146))[_0x4d34aa(0x16a)]()['constructor'](a83_0x345402)['search']('(((.+)+)+)+$');});function a83_0x4244(){const _0x2db9a1=['default','1291920cAmfVo','map','1202795iMsByA','241688mImOHM','8078058YIpIuY','../dto/hook.dto','apiUrl','request','hooks/','update','fromGitlab','./git-hook.service','../../../core/errors/not-found.error','toString','GitlabHookService','29573442jxuoHQ','34AWkDSo','__importDefault','(((.+)+)+)+$','post','259nFjLmJ','NotFoundError','BadRequestError','create','get','typedi','GitHookService','__esModule','HookDto','createRequest','../../git-api/services/gitlab-api.service','GitlabApiService','delete','defineProperty','679446TKQfZX','196683nMjnQo','getAll','search','put','hooks'];a83_0x4244=function(){return _0x2db9a1;};return a83_0x4244();}a83_0x345402();'use strict';var __importDefault=this&&this[a83_0x11e346(0x145)]||function(_0x19b3e6){const _0x2025b7=a83_0x11e346;return _0x19b3e6&&_0x19b3e6[_0x2025b7(0x14f)]?_0x19b3e6:{'default':_0x19b3e6};};Object[a83_0x11e346(0x155)](exports,a83_0x11e346(0x14f),{'value':!![]}),exports[a83_0x11e346(0x16b)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a83_0x11e346(0x169)),gitlab_api_service_1=require(a83_0x11e346(0x152)),typedi_1=__importDefault(require(a83_0x11e346(0x14d))),hook_dto_1=require(a83_0x11e346(0x162)),git_hook_service_1=require(a83_0x11e346(0x168));class GitlabHookService extends git_hook_service_1[a83_0x11e346(0x14e)]{constructor(_0x2ae8db){super(_0x2ae8db),this['request']=this['createRequest']();}[a83_0x11e346(0x151)](){const _0x3c5069=a83_0x11e346,_0x331472=typedi_1[_0x3c5069(0x15c)][_0x3c5069(0x14c)](gitlab_api_service_1[_0x3c5069(0x153)]);return _0x331472[_0x3c5069(0x151)](this['repository'][_0x3c5069(0x163)]);}async[a83_0x11e346(0x14b)](_0x12dfd7){const _0x31a196=a83_0x11e346;try{const _0xad7f=await this[_0x31a196(0x164)][_0x31a196(0x147)](_0x31a196(0x15b),_0x12dfd7);return hook_dto_1[_0x31a196(0x150)][_0x31a196(0x167)](_0xad7f);}catch(_0x3d1955){throw new bad_request_error_1[(_0x31a196(0x14a))](_0x3d1955);}}async['getOne'](_0x5c9572){const _0x173b5f=a83_0x11e346;try{const _0x226d52=await this[_0x173b5f(0x164)][_0x173b5f(0x14c)]('hooks/'+_0x5c9572);return hook_dto_1[_0x173b5f(0x150)]['fromGitlab'](_0x226d52);}catch(_0x59cbed){throw new not_found_error_1['NotFoundError'](_0x59cbed);}}async[a83_0x11e346(0x158)](){const _0x520da6=a83_0x11e346;try{const _0x2350db=await this[_0x520da6(0x164)][_0x520da6(0x14c)](_0x520da6(0x15b));return _0x2350db[_0x520da6(0x15e)](_0x262faa=>hook_dto_1[_0x520da6(0x150)][_0x520da6(0x167)](_0x262faa));}catch(_0x21a7f2){throw new not_found_error_1['NotFoundError'](_0x21a7f2);}}async[a83_0x11e346(0x166)](_0x28d804,_0x200096){const _0xb94c99=a83_0x11e346;try{const _0x31e140=await this[_0xb94c99(0x164)][_0xb94c99(0x15a)](_0xb94c99(0x165)+_0x28d804,_0x200096);return hook_dto_1[_0xb94c99(0x150)][_0xb94c99(0x167)](_0x31e140);}catch(_0x2f5a53){throw new not_found_error_1[(_0xb94c99(0x149))](_0x2f5a53);}}async[a83_0x11e346(0x154)](_0x19eee5){const _0x28d576=a83_0x11e346;try{await this[_0x28d576(0x164)]['delete'](_0x28d576(0x165)+_0x19eee5);}catch(_0x1f1902){throw new not_found_error_1[(_0x28d576(0x149))](_0x1f1902);}}}exports[a83_0x11e346(0x16b)]=GitlabHookService;