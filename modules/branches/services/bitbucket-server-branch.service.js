const a54_0x383c01=a54_0x17ec;function a54_0x17ec(_0x179faf,_0x3e49cc){const _0x126577=a54_0x3075();return a54_0x17ec=function(_0x453a59,_0x401121){_0x453a59=_0x453a59-0x1cf;let _0x30758e=_0x126577[_0x453a59];return _0x30758e;},a54_0x17ec(_0x179faf,_0x3e49cc);}function a54_0x3075(){const _0x5df26b=['916631DxKfWc','1912610ZZoZGC','3xbGQcJ','18ddkAxR','default','repository','../../../core/errors/bad-request.error','../../git-api/services/bitbucket-server-api.service','(((.+)+)+)+$','/branch-utils/','2kEEDuX','toString','defineProperty','request','get','createRequest','28zKGprm','630420sCHUPd','replace','typedi','BitbucketServerBranchService','/branches','4920520AMdpcz','__esModule','apiUrl','search','apply','__importDefault','1902884vHCanM','delete','15460643ndFlEP','GitBranchService','1819784vILJkV','BitbucketServerApiService'];a54_0x3075=function(){return _0x5df26b;};return a54_0x3075();}(function(_0x4aca08,_0x5ef111){const _0x199fab=a54_0x17ec,_0x3cba11=_0x4aca08();while(!![]){try{const _0x3e06ff=parseInt(_0x199fab(0x1d3))/0x1*(parseInt(_0x199fab(0x1dd))/0x2)+parseInt(_0x199fab(0x1d5))/0x3*(parseInt(_0x199fab(0x1ef))/0x4)+-parseInt(_0x199fab(0x1e9))/0x5+parseInt(_0x199fab(0x1e4))/0x6+parseInt(_0x199fab(0x1e3))/0x7*(-parseInt(_0x199fab(0x1d1))/0x8)+-parseInt(_0x199fab(0x1d6))/0x9*(parseInt(_0x199fab(0x1d4))/0xa)+parseInt(_0x199fab(0x1cf))/0xb;if(_0x3e06ff===_0x5ef111)break;else _0x3cba11['push'](_0x3cba11['shift']());}catch(_0x1f2c96){_0x3cba11['push'](_0x3cba11['shift']());}}}(a54_0x3075,0x98ef1));const a54_0x401121=(function(){let _0x4c691b=!![];return function(_0x2a455a,_0x5681c8){const _0x107eb3=_0x4c691b?function(){const _0x3d721e=a54_0x17ec;if(_0x5681c8){const _0xcbcb4c=_0x5681c8[_0x3d721e(0x1ed)](_0x2a455a,arguments);return _0x5681c8=null,_0xcbcb4c;}}:function(){};return _0x4c691b=![],_0x107eb3;};}()),a54_0x453a59=a54_0x401121(this,function(){const _0x1637b0=a54_0x17ec;return a54_0x453a59[_0x1637b0(0x1de)]()['search'](_0x1637b0(0x1db))[_0x1637b0(0x1de)]()['constructor'](a54_0x453a59)[_0x1637b0(0x1ec)](_0x1637b0(0x1db));});a54_0x453a59();'use strict';var __importDefault=this&&this[a54_0x383c01(0x1ee)]||function(_0x1db12d){return _0x1db12d&&_0x1db12d['__esModule']?_0x1db12d:{'default':_0x1db12d};};Object[a54_0x383c01(0x1df)](exports,a54_0x383c01(0x1ea),{'value':!![]}),exports['BitbucketServerBranchService']=void 0x0;const bad_request_error_1=require(a54_0x383c01(0x1d9)),typedi_1=__importDefault(require(a54_0x383c01(0x1e6))),bitbucket_server_api_service_1=require(a54_0x383c01(0x1da)),git_branch_service_1=require('./git-branch.service');class BitbucketServerBranchService extends git_branch_service_1[a54_0x383c01(0x1d0)]{constructor(_0x434a7d){const _0x162b43=a54_0x383c01;super(_0x434a7d),this[_0x162b43(0x1e0)]=this[_0x162b43(0x1e2)]();}[a54_0x383c01(0x1e2)](){const _0xd8fb50=a54_0x383c01,_0x3b8fe2=typedi_1[_0xd8fb50(0x1d7)][_0xd8fb50(0x1e1)](bitbucket_server_api_service_1[_0xd8fb50(0x1d2)]);return _0x3b8fe2[_0xd8fb50(0x1e2)](this[_0xd8fb50(0x1d8)][_0xd8fb50(0x1eb)]);}async[a54_0x383c01(0x1f0)](_0x4575d){const _0x41f1b7=a54_0x383c01;try{await this['getOne'](_0x4575d);const _0x22a9ff=this['repository'][_0x41f1b7(0x1eb)][_0x41f1b7(0x1e5)]('/api/',_0x41f1b7(0x1dc));await this[_0x41f1b7(0x1e0)]['delete'](_0x22a9ff+_0x41f1b7(0x1e8),{'data':{'name':'refs/heads/'+_0x4575d,'dryRun':![]}});}catch(_0x18681c){throw new bad_request_error_1['BadRequestError'](_0x18681c);}}}exports[a54_0x383c01(0x1e7)]=BitbucketServerBranchService;