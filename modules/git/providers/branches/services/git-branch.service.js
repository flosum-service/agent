const a176_0x2370db=a176_0x15fa;function a176_0x15fa(_0x374656,_0x23cfae){const _0x5650cd=a176_0x3cde();return a176_0x15fa=function(_0x22c62b,_0x2eeebc){_0x22c62b=_0x22c62b-0x78;let _0x3cde95=_0x5650cd[_0x22c62b];return _0x3cde95;},a176_0x15fa(_0x374656,_0x23cfae);}(function(_0x3a1c45,_0x20c7e6){const _0x22f26d=a176_0x15fa,_0x3d06bb=_0x3a1c45();while(!![]){try{const _0x20b019=parseInt(_0x22f26d(0x78))/0x1+parseInt(_0x22f26d(0x7e))/0x2*(-parseInt(_0x22f26d(0x90))/0x3)+-parseInt(_0x22f26d(0x81))/0x4+parseInt(_0x22f26d(0x7d))/0x5+parseInt(_0x22f26d(0x8f))/0x6*(-parseInt(_0x22f26d(0x7b))/0x7)+parseInt(_0x22f26d(0x87))/0x8+-parseInt(_0x22f26d(0x92))/0x9*(-parseInt(_0x22f26d(0x85))/0xa);if(_0x20b019===_0x20c7e6)break;else _0x3d06bb['push'](_0x3d06bb['shift']());}catch(_0xf4226f){_0x3d06bb['push'](_0x3d06bb['shift']());}}}(a176_0x3cde,0x6c9d6));const a176_0x2eeebc=(function(){let _0x9d0dd0=!![];return function(_0x12362c,_0x40855d){const _0x5c59c9=_0x9d0dd0?function(){const _0x5d0cd3=a176_0x15fa;if(_0x40855d){const _0x11eedd=_0x40855d[_0x5d0cd3(0x95)](_0x12362c,arguments);return _0x40855d=null,_0x11eedd;}}:function(){};return _0x9d0dd0=![],_0x5c59c9;};}()),a176_0x22c62b=a176_0x2eeebc(this,function(){const _0x180668=a176_0x15fa;return a176_0x22c62b[_0x180668(0x93)]()['search']('(((.+)+)+)+$')[_0x180668(0x93)]()[_0x180668(0x91)](a176_0x22c62b)[_0x180668(0x84)]('(((.+)+)+)+$');});function a176_0x3cde(){const _0x1beb64=['../../../../../core/errors/bad-request.error','Git','2908240nvpISk','../../../internal/git.internal','getOne','search','1196910cQLsMQ','Branch\x20not\x20found','2249936VwwgRq','init\x20branch','getAll','name','GitBranchService','find','repository','credentials','3942rFWrxI','1882383adYmGE','constructor','36pNatYJ','toString','../../../../../core/errors/not-found.error','apply','196844zbJHuN','BadRequestError','__esModule','217LXRujL','create','4314620SJzuto','2wzmtZe'];a176_0x3cde=function(){return _0x1beb64;};return a176_0x3cde();}a176_0x22c62b();'use strict';Object['defineProperty'](exports,a176_0x2370db(0x7a),{'value':!![]}),exports[a176_0x2370db(0x8b)]=void 0x0;const bad_request_error_1=require(a176_0x2370db(0x7f)),not_found_error_1=require(a176_0x2370db(0x94)),git_internal_1=require(a176_0x2370db(0x82));class GitBranchService{constructor(_0x34d49e,_0x50db34){const _0x2344ef=a176_0x2370db;this[_0x2344ef(0x8d)]=_0x34d49e,this[_0x2344ef(0x8e)]=_0x50db34;}async[a176_0x2370db(0x7c)](_0xa7c6b1){const _0x13f083=a176_0x2370db;try{return await git_internal_1[_0x13f083(0x80)]['createEmptyBranch'](this[_0x13f083(0x8d)],_0xa7c6b1[_0x13f083(0x8a)],_0x13f083(0x88),this['credentials']),this['getOne'](_0xa7c6b1[_0x13f083(0x8a)]);}catch(_0x5abb80){throw new bad_request_error_1[(_0x13f083(0x79))](_0x5abb80);}}async[a176_0x2370db(0x83)](_0x51cdcc){const _0x351c7e=a176_0x2370db;try{const _0x156d0a=await this[_0x351c7e(0x89)](),_0x5b2247=_0x156d0a[_0x351c7e(0x8c)](_0x40ef0d=>_0x40ef0d[_0x351c7e(0x8a)]===_0x51cdcc);if(!_0x5b2247)throw new Error(_0x351c7e(0x86));return _0x5b2247;}catch(_0x193090){throw new not_found_error_1['NotFoundError'](_0x193090);}}async[a176_0x2370db(0x89)](){const _0x161afa=a176_0x2370db;try{const _0x1d2d5c=await git_internal_1[_0x161afa(0x80)]['getRepositoryBranches'](this[_0x161afa(0x8d)],this[_0x161afa(0x8e)]);return _0x1d2d5c;}catch(_0xe45f0){throw new bad_request_error_1[(_0x161afa(0x79))](_0xe45f0);}}}exports[a176_0x2370db(0x8b)]=GitBranchService;