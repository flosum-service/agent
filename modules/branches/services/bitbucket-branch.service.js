const a53_0x571376=a53_0x1aac;(function(_0x389343,_0x2139c9){const _0xa5f798=a53_0x1aac,_0x14eafe=_0x389343();while(!![]){try{const _0x35722b=-parseInt(_0xa5f798(0x105))/0x1+parseInt(_0xa5f798(0xf6))/0x2+parseInt(_0xa5f798(0xf7))/0x3*(-parseInt(_0xa5f798(0x106))/0x4)+parseInt(_0xa5f798(0xfd))/0x5*(parseInt(_0xa5f798(0x101))/0x6)+parseInt(_0xa5f798(0xf8))/0x7*(parseInt(_0xa5f798(0xfb))/0x8)+-parseInt(_0xa5f798(0x102))/0x9+parseInt(_0xa5f798(0xff))/0xa;if(_0x35722b===_0x2139c9)break;else _0x14eafe['push'](_0x14eafe['shift']());}catch(_0x462584){_0x14eafe['push'](_0x14eafe['shift']());}}}(a53_0x2fe3,0x553de));function a53_0x1aac(_0x59230c,_0x274989){const _0x1469ab=a53_0x2fe3();return a53_0x1aac=function(_0x4cb358,_0xe06d00){_0x4cb358=_0x4cb358-0xed;let _0x2fe366=_0x1469ab[_0x4cb358];return _0x2fe366;},a53_0x1aac(_0x59230c,_0x274989);}const a53_0xe06d00=(function(){let _0x35ace7=!![];return function(_0x3cb602,_0x1bc039){const _0x226e48=_0x35ace7?function(){if(_0x1bc039){const _0xf2fa1b=_0x1bc039['apply'](_0x3cb602,arguments);return _0x1bc039=null,_0xf2fa1b;}}:function(){};return _0x35ace7=![],_0x226e48;};}()),a53_0x4cb358=a53_0xe06d00(this,function(){const _0x7c9975=a53_0x1aac;return a53_0x4cb358[_0x7c9975(0xf0)]()['search'](_0x7c9975(0xf1))[_0x7c9975(0xf0)]()[_0x7c9975(0xfa)](a53_0x4cb358)[_0x7c9975(0xf9)](_0x7c9975(0xf1));});function a53_0x2fe3(){const _0x56b0ce=['6051500wZvRRl','BitbucketBranchService','1284CHkjzz','2029752TkgsUB','NotFoundError','../../../core/errors/not-found.error','291081jFxDXm','1428BGrmhh','refs/branches/','BitbucketApiService','get','__esModule','defineProperty','toString','(((.+)+)+)+$','request','../../git-api/services/bitbucket-api.service','repository','delete','1360268EvvCXp','4038RrCMfv','58471oWqtMv','search','constructor','8aRkyWc','createRequest','1230dNDrok','typedi'];a53_0x2fe3=function(){return _0x56b0ce;};return a53_0x2fe3();}a53_0x4cb358();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1846ea){const _0x5b96cd=a53_0x1aac;return _0x1846ea&&_0x1846ea[_0x5b96cd(0xee)]?_0x1846ea:{'default':_0x1846ea};};Object[a53_0x571376(0xef)](exports,a53_0x571376(0xee),{'value':!![]}),exports[a53_0x571376(0x100)]=void 0x0;const not_found_error_1=require(a53_0x571376(0x104)),bitbucket_api_service_1=require(a53_0x571376(0xf3)),typedi_1=__importDefault(require(a53_0x571376(0xfe))),git_branch_service_1=require('./git-branch.service');class BitbucketBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x1dcc57){const _0x3ed91b=a53_0x571376;super(_0x1dcc57),this[_0x3ed91b(0xf2)]=this['createRequest']();}[a53_0x571376(0xfc)](){const _0x372fd9=a53_0x571376,_0x5929e2=typedi_1['default'][_0x372fd9(0xed)](bitbucket_api_service_1[_0x372fd9(0x108)]);return _0x5929e2[_0x372fd9(0xfc)](this[_0x372fd9(0xf4)]['apiUrl']);}async[a53_0x571376(0xf5)](_0x2355d7){const _0x37d08a=a53_0x571376;try{await this[_0x37d08a(0xf2)][_0x37d08a(0xf5)](_0x37d08a(0x107)+_0x2355d7);}catch(_0x239455){throw new not_found_error_1[(_0x37d08a(0x103))](_0x239455);}}}exports[a53_0x571376(0x100)]=BitbucketBranchService;