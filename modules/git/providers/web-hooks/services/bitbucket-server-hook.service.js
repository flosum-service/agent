const a165_0x5c190a=a165_0x4273;function a165_0x4273(_0x35d9b8,_0x2af652){const _0x516bde=a165_0x1e24();return a165_0x4273=function(_0x4329f7,_0x3119f8){_0x4329f7=_0x4329f7-0xb2;let _0x1e249f=_0x516bde[_0x4329f7];return _0x1e249f;},a165_0x4273(_0x35d9b8,_0x2af652);}(function(_0x34a389,_0x235fcb){const _0x6aa457=a165_0x4273,_0x23c841=_0x34a389();while(!![]){try{const _0x78a1b0=parseInt(_0x6aa457(0xc8))/0x1*(-parseInt(_0x6aa457(0xcd))/0x2)+-parseInt(_0x6aa457(0xb3))/0x3*(parseInt(_0x6aa457(0xc0))/0x4)+-parseInt(_0x6aa457(0xc9))/0x5+-parseInt(_0x6aa457(0xc1))/0x6+-parseInt(_0x6aa457(0xdb))/0x7*(-parseInt(_0x6aa457(0xc7))/0x8)+parseInt(_0x6aa457(0xd7))/0x9*(-parseInt(_0x6aa457(0xc3))/0xa)+-parseInt(_0x6aa457(0xda))/0xb*(-parseInt(_0x6aa457(0xca))/0xc);if(_0x78a1b0===_0x235fcb)break;else _0x23c841['push'](_0x23c841['shift']());}catch(_0x9b3bac){_0x23c841['push'](_0x23c841['shift']());}}}(a165_0x1e24,0x3dbdf));const a165_0x3119f8=(function(){let _0x4e252a=!![];return function(_0x549bec,_0x1083cf){const _0x55e9b1=_0x4e252a?function(){if(_0x1083cf){const _0x10c61f=_0x1083cf['apply'](_0x549bec,arguments);return _0x1083cf=null,_0x10c61f;}}:function(){};return _0x4e252a=![],_0x55e9b1;};}()),a165_0x4329f7=a165_0x3119f8(this,function(){const _0x38b638=a165_0x4273;return a165_0x4329f7['toString']()['search'](_0x38b638(0xb8))[_0x38b638(0xbf)]()[_0x38b638(0xd9)](a165_0x4329f7)[_0x38b638(0xbb)](_0x38b638(0xb8));});a165_0x4329f7();'use strict';function a165_0x1e24(){const _0x514c36=['update','create','6056nKvrev','226361BPcgjs','2448725NYXyGM','1368LVaXxX','getOne','../../../../../core/errors/bad-request.error','4EbvjhG','BitbucketServerHookService','repository','apiUrl','fromBitbucketServer','values','map','NotFoundError','put','__esModule','782361BKfGrb','get','constructor','136576FmkSzB','4354NFTtRH','request','31611CAtTnz','BadRequestError','defineProperty','delete','webhooks','(((.+)+)+)+$','./git-hook.service','../../../../../core/errors/not-found.error','search','GitHookService','webhooks/','HookDto','toString','56Kondav','1695666cxroAt','api','30Wrfziy','createRequest'];a165_0x1e24=function(){return _0x514c36;};return a165_0x1e24();}Object[a165_0x5c190a(0xb5)](exports,a165_0x5c190a(0xd6),{'value':!![]}),exports[a165_0x5c190a(0xce)]=void 0x0;const bad_request_error_1=require(a165_0x5c190a(0xcc)),not_found_error_1=require(a165_0x5c190a(0xba)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a165_0x5c190a(0xb9));class BitbucketServerHookService extends git_hook_service_1[a165_0x5c190a(0xbc)]{constructor(_0x52ce33,_0x46cf37){const _0xbec9ee=a165_0x5c190a;super(_0x52ce33),this[_0xbec9ee(0xc2)]=_0x46cf37,this[_0xbec9ee(0xb2)]=this[_0xbec9ee(0xc4)]();}['createRequest'](){const _0x3d5f16=a165_0x5c190a;return this['api'][_0x3d5f16(0xc4)](this[_0x3d5f16(0xcf)][_0x3d5f16(0xd0)]);}async[a165_0x5c190a(0xc6)](_0x367757){const _0x2d89a1=a165_0x5c190a;try{const _0x13a0b9=await this[_0x2d89a1(0xb2)]['post']('webhooks',_0x367757);return hook_dto_1[_0x2d89a1(0xbe)][_0x2d89a1(0xd1)](_0x13a0b9);}catch(_0xac7f6f){throw new bad_request_error_1[(_0x2d89a1(0xb4))](_0xac7f6f);}}async[a165_0x5c190a(0xcb)](_0x11adec){const _0x35990f=a165_0x5c190a;try{const _0x124a43=await this['request']['get']('webhooks/'+_0x11adec);return hook_dto_1[_0x35990f(0xbe)][_0x35990f(0xd1)](_0x124a43);}catch(_0x13d7c8){throw new not_found_error_1[(_0x35990f(0xd4))](_0x13d7c8);}}async['getAll'](){const _0x2f062a=a165_0x5c190a;try{const _0x3eb67c=await this[_0x2f062a(0xb2)][_0x2f062a(0xd8)](_0x2f062a(0xb7));return _0x3eb67c[_0x2f062a(0xd2)][_0x2f062a(0xd3)](_0x2a1266=>hook_dto_1[_0x2f062a(0xbe)][_0x2f062a(0xd1)](_0x2a1266));}catch(_0x901ab5){throw new not_found_error_1[(_0x2f062a(0xd4))](_0x901ab5);}}async[a165_0x5c190a(0xc5)](_0x2d1e46,_0x55d1be){const _0x5173dd=a165_0x5c190a;try{const _0x26c309=await this[_0x5173dd(0xb2)][_0x5173dd(0xd5)]('webhooks/'+_0x2d1e46,_0x55d1be);return hook_dto_1[_0x5173dd(0xbe)][_0x5173dd(0xd1)](_0x26c309);}catch(_0x44b9e6){throw new not_found_error_1[(_0x5173dd(0xd4))](_0x44b9e6);}}async[a165_0x5c190a(0xb6)](_0x47216a){const _0x38087a=a165_0x5c190a;try{await this['request']['delete'](_0x38087a(0xbd)+_0x47216a);}catch(_0x48055b){throw new not_found_error_1[(_0x38087a(0xd4))](_0x48055b);}}}exports[a165_0x5c190a(0xce)]=BitbucketServerHookService;