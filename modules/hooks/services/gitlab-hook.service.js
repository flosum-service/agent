const a83_0x419034=a83_0x36fb;(function(_0x4d5a62,_0x34c22d){const _0x24bb35=a83_0x36fb,_0x2ecbc0=_0x4d5a62();while(!![]){try{const _0x1bbccf=-parseInt(_0x24bb35(0x165))/0x1+parseInt(_0x24bb35(0x16d))/0x2+-parseInt(_0x24bb35(0x162))/0x3*(-parseInt(_0x24bb35(0x174))/0x4)+parseInt(_0x24bb35(0x16f))/0x5+-parseInt(_0x24bb35(0x179))/0x6*(parseInt(_0x24bb35(0x177))/0x7)+parseInt(_0x24bb35(0x168))/0x8+-parseInt(_0x24bb35(0x171))/0x9*(parseInt(_0x24bb35(0x169))/0xa);if(_0x1bbccf===_0x34c22d)break;else _0x2ecbc0['push'](_0x2ecbc0['shift']());}catch(_0x569abd){_0x2ecbc0['push'](_0x2ecbc0['shift']());}}}(a83_0x3a88,0x3ea0c));function a83_0x36fb(_0x48f682,_0x1b8a05){const _0xd82da3=a83_0x3a88();return a83_0x36fb=function(_0xc0a71,_0x36418c){_0xc0a71=_0xc0a71-0x15a;let _0x3a88e6=_0xd82da3[_0xc0a71];return _0x3a88e6;},a83_0x36fb(_0x48f682,_0x1b8a05);}const a83_0x36418c=(function(){let _0x2fcb05=!![];return function(_0x4685f7,_0x2cee86){const _0x5eb38=_0x2fcb05?function(){const _0x1e0642=a83_0x36fb;if(_0x2cee86){const _0xc712f9=_0x2cee86[_0x1e0642(0x15f)](_0x4685f7,arguments);return _0x2cee86=null,_0xc712f9;}}:function(){};return _0x2fcb05=![],_0x5eb38;};}()),a83_0xc0a71=a83_0x36418c(this,function(){const _0x5fbc27=a83_0x36fb;return a83_0xc0a71[_0x5fbc27(0x17d)]()[_0x5fbc27(0x15a)](_0x5fbc27(0x170))['toString']()[_0x5fbc27(0x15e)](a83_0xc0a71)[_0x5fbc27(0x15a)](_0x5fbc27(0x170));});a83_0xc0a71();'use strict';function a83_0x3a88(){const _0xeef592=['fromGitlab','1447998uzxeGp','./git-hook.service','defineProperty','GitlabApiService','toString','get','search','../../../core/errors/bad-request.error','delete','HookDto','constructor','apply','GitlabHookService','update','348252sRSpHF','hooks/','createRequest','508144CBnQVH','create','repository','2769816ZBPeqP','10jLFyeU','default','request','hooks','693200txaYWV','NotFoundError','1076955jlBtMl','(((.+)+)+)+$','164709WIDzli','post','__importDefault','4dBzbZK','__esModule','apiUrl','7ZSCMks'];a83_0x3a88=function(){return _0xeef592;};return a83_0x3a88();}var __importDefault=this&&this[a83_0x419034(0x173)]||function(_0x123cde){const _0x29b66c=a83_0x419034;return _0x123cde&&_0x123cde[_0x29b66c(0x175)]?_0x123cde:{'default':_0x123cde};};Object[a83_0x419034(0x17b)](exports,a83_0x419034(0x175),{'value':!![]}),exports[a83_0x419034(0x160)]=void 0x0;const bad_request_error_1=require(a83_0x419034(0x15b)),not_found_error_1=require('../../../core/errors/not-found.error'),gitlab_api_service_1=require('../../git-api/services/gitlab-api.service'),typedi_1=__importDefault(require('typedi')),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a83_0x419034(0x17a));class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0xb9507b){const _0x511039=a83_0x419034;super(_0xb9507b),this[_0x511039(0x16b)]=this[_0x511039(0x164)]();}[a83_0x419034(0x164)](){const _0xd49eae=a83_0x419034,_0x8ee0a9=typedi_1[_0xd49eae(0x16a)][_0xd49eae(0x17e)](gitlab_api_service_1[_0xd49eae(0x17c)]);return _0x8ee0a9['createRequest'](this[_0xd49eae(0x167)][_0xd49eae(0x176)]);}async[a83_0x419034(0x166)](_0x3e7c24){const _0x365992=a83_0x419034;try{const _0x5c975a=await this['request'][_0x365992(0x172)](_0x365992(0x16c),_0x3e7c24);return hook_dto_1['HookDto']['fromGitlab'](_0x5c975a);}catch(_0x201d72){throw new bad_request_error_1['BadRequestError'](_0x201d72);}}async['getOne'](_0x20bbce){const _0x25fd1a=a83_0x419034;try{const _0x254ab3=await this[_0x25fd1a(0x16b)][_0x25fd1a(0x17e)](_0x25fd1a(0x163)+_0x20bbce);return hook_dto_1[_0x25fd1a(0x15d)][_0x25fd1a(0x178)](_0x254ab3);}catch(_0x316ec6){throw new not_found_error_1['NotFoundError'](_0x316ec6);}}async['getAll'](){const _0x28e60c=a83_0x419034;try{const _0x35da94=await this['request'][_0x28e60c(0x17e)](_0x28e60c(0x16c));return _0x35da94['map'](_0x157b99=>hook_dto_1[_0x28e60c(0x15d)][_0x28e60c(0x178)](_0x157b99));}catch(_0x20d6b0){throw new not_found_error_1[(_0x28e60c(0x16e))](_0x20d6b0);}}async[a83_0x419034(0x161)](_0x4a56de,_0x4868a6){const _0x1f478f=a83_0x419034;try{const _0x3a15a5=await this[_0x1f478f(0x16b)]['put'](_0x1f478f(0x163)+_0x4a56de,_0x4868a6);return hook_dto_1['HookDto'][_0x1f478f(0x178)](_0x3a15a5);}catch(_0x2a4692){throw new not_found_error_1['NotFoundError'](_0x2a4692);}}async[a83_0x419034(0x15c)](_0x325324){const _0x430aa6=a83_0x419034;try{await this['request'][_0x430aa6(0x15c)]('hooks/'+_0x325324);}catch(_0x56e191){throw new not_found_error_1['NotFoundError'](_0x56e191);}}}exports['GitlabHookService']=GitlabHookService;