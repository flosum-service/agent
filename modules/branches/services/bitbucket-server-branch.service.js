const a54_0x23b658=a54_0x4ba0;(function(_0x132c3c,_0x36b718){const _0x4aa335=a54_0x4ba0,_0x503372=_0x132c3c();while(!![]){try{const _0x504daa=-parseInt(_0x4aa335(0x180))/0x1+-parseInt(_0x4aa335(0x182))/0x2+-parseInt(_0x4aa335(0x172))/0x3*(parseInt(_0x4aa335(0x161))/0x4)+parseInt(_0x4aa335(0x177))/0x5*(parseInt(_0x4aa335(0x17f))/0x6)+parseInt(_0x4aa335(0x163))/0x7*(parseInt(_0x4aa335(0x179))/0x8)+parseInt(_0x4aa335(0x16c))/0x9+-parseInt(_0x4aa335(0x17c))/0xa*(-parseInt(_0x4aa335(0x17b))/0xb);if(_0x504daa===_0x36b718)break;else _0x503372['push'](_0x503372['shift']());}catch(_0x223b7a){_0x503372['push'](_0x503372['shift']());}}}(a54_0x4096,0xc512f));function a54_0x4ba0(_0x4eccd9,_0x5eb527){const _0x118e55=a54_0x4096();return a54_0x4ba0=function(_0x223f2f,_0x53bf80){_0x223f2f=_0x223f2f-0x15e;let _0x4096fb=_0x118e55[_0x223f2f];return _0x4096fb;},a54_0x4ba0(_0x4eccd9,_0x5eb527);}const a54_0x53bf80=(function(){let _0x185fb3=!![];return function(_0x1b0c20,_0x42eff0){const _0x3fad74=_0x185fb3?function(){const _0x1a9944=a54_0x4ba0;if(_0x42eff0){const _0x56e80b=_0x42eff0[_0x1a9944(0x168)](_0x1b0c20,arguments);return _0x42eff0=null,_0x56e80b;}}:function(){};return _0x185fb3=![],_0x3fad74;};}()),a54_0x223f2f=a54_0x53bf80(this,function(){const _0x12b6bb=a54_0x4ba0;return a54_0x223f2f[_0x12b6bb(0x16f)]()['search'](_0x12b6bb(0x171))[_0x12b6bb(0x16f)]()[_0x12b6bb(0x174)](a54_0x223f2f)[_0x12b6bb(0x16b)](_0x12b6bb(0x171));});function a54_0x4096(){const _0x18a038=['BitbucketServerBranchService','GitBranchService','search','8331633yKYjZq','default','__esModule','toString','refs/heads/','(((.+)+)+)+$','2247474FTCmKe','../../git-api/services/bitbucket-server-api.service','constructor','request','BadRequestError','455hqVesm','__importDefault','95448ubQwDR','typedi','11561DSGobO','19740fECGqN','./git-branch.service','createRequest','85962xncZNJ','1184118YHFknS','defineProperty','2154002GsFCni','/branches','/branch-utils/','repository','apiUrl','8QLSqIz','getOne','154Zkwnnm','replace','../../../core/errors/bad-request.error','BitbucketServerApiService','delete','apply'];a54_0x4096=function(){return _0x18a038;};return a54_0x4096();}a54_0x223f2f();'use strict';var __importDefault=this&&this[a54_0x23b658(0x178)]||function(_0xc51d5a){const _0x197d86=a54_0x23b658;return _0xc51d5a&&_0xc51d5a[_0x197d86(0x16e)]?_0xc51d5a:{'default':_0xc51d5a};};Object[a54_0x23b658(0x181)](exports,a54_0x23b658(0x16e),{'value':!![]}),exports[a54_0x23b658(0x169)]=void 0x0;const bad_request_error_1=require(a54_0x23b658(0x165)),typedi_1=__importDefault(require(a54_0x23b658(0x17a))),bitbucket_server_api_service_1=require(a54_0x23b658(0x173)),git_branch_service_1=require(a54_0x23b658(0x17d));class BitbucketServerBranchService extends git_branch_service_1[a54_0x23b658(0x16a)]{constructor(_0x52bad2){const _0x25730d=a54_0x23b658;super(_0x52bad2),this[_0x25730d(0x175)]=this[_0x25730d(0x17e)]();}[a54_0x23b658(0x17e)](){const _0x1a7bf4=a54_0x23b658,_0x3b9798=typedi_1[_0x1a7bf4(0x16d)]['get'](bitbucket_server_api_service_1[_0x1a7bf4(0x166)]);return _0x3b9798[_0x1a7bf4(0x17e)](this[_0x1a7bf4(0x15f)][_0x1a7bf4(0x160)]);}async[a54_0x23b658(0x167)](_0x1a4dc6){const _0x298cac=a54_0x23b658;try{await this[_0x298cac(0x162)](_0x1a4dc6);const _0x3f76aa=this[_0x298cac(0x15f)][_0x298cac(0x160)][_0x298cac(0x164)]('/api/',_0x298cac(0x15e));await this[_0x298cac(0x175)][_0x298cac(0x167)](_0x3f76aa+_0x298cac(0x183),{'data':{'name':_0x298cac(0x170)+_0x1a4dc6,'dryRun':![]}});}catch(_0x9391ce){throw new bad_request_error_1[(_0x298cac(0x176))](_0x9391ce);}}}exports['BitbucketServerBranchService']=BitbucketServerBranchService;