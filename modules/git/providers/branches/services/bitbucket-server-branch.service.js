const a170_0x3a54b5=a170_0x51a9;(function(_0x40715f,_0x1008ea){const _0x1fc10f=a170_0x51a9,_0x46aaef=_0x40715f();while(!![]){try{const _0x150fde=-parseInt(_0x1fc10f(0x9c))/0x1*(-parseInt(_0x1fc10f(0x89))/0x2)+parseInt(_0x1fc10f(0x9d))/0x3+-parseInt(_0x1fc10f(0x8a))/0x4*(-parseInt(_0x1fc10f(0x99))/0x5)+-parseInt(_0x1fc10f(0x91))/0x6+parseInt(_0x1fc10f(0x90))/0x7*(-parseInt(_0x1fc10f(0x8d))/0x8)+parseInt(_0x1fc10f(0x98))/0x9+-parseInt(_0x1fc10f(0x9b))/0xa;if(_0x150fde===_0x1008ea)break;else _0x46aaef['push'](_0x46aaef['shift']());}catch(_0x5e3df9){_0x46aaef['push'](_0x46aaef['shift']());}}}(a170_0x4043,0x35114));const a170_0x21e8c4=(function(){let _0x429c98=!![];return function(_0xa0a752,_0x70f77c){const _0x2fd386=_0x429c98?function(){const _0x2289e6=a170_0x51a9;if(_0x70f77c){const _0x3d68e6=_0x70f77c[_0x2289e6(0x97)](_0xa0a752,arguments);return _0x70f77c=null,_0x3d68e6;}}:function(){};return _0x429c98=![],_0x2fd386;};}()),a170_0x475aee=a170_0x21e8c4(this,function(){const _0x5792f5=a170_0x51a9;return a170_0x475aee[_0x5792f5(0x95)]()[_0x5792f5(0x93)](_0x5792f5(0x88))[_0x5792f5(0x95)]()['constructor'](a170_0x475aee)['search'](_0x5792f5(0x88));});function a170_0x4043(){const _0x2a962a=['../../../../../core/errors/bad-request.error','toString','GitBranchService','apply','2831589QbIDTI','5vrFZiZ','BitbucketServerBranchService','4237980pqYzWW','44866drYSJQ','827646CXfXGF','./git-branch.service','repository','getOne','__esModule','(((.+)+)+)+$','8ynyArf','1623112OWLwiZ','api','defineProperty','296wrUKiu','replace','createRequest','37121cmQOro','2030232YzPjYV','delete','search'];a170_0x4043=function(){return _0x2a962a;};return a170_0x4043();}a170_0x475aee();'use strict';Object[a170_0x3a54b5(0x8c)](exports,a170_0x3a54b5(0x87),{'value':!![]}),exports[a170_0x3a54b5(0x9a)]=void 0x0;function a170_0x51a9(_0x4771d0,_0x27490e){const _0x4c1315=a170_0x4043();return a170_0x51a9=function(_0x475aee,_0x21e8c4){_0x475aee=_0x475aee-0x84;let _0x4043ee=_0x4c1315[_0x475aee];return _0x4043ee;},a170_0x51a9(_0x4771d0,_0x27490e);}const bad_request_error_1=require(a170_0x3a54b5(0x94)),git_branch_service_1=require(a170_0x3a54b5(0x84));class BitbucketServerBranchService extends git_branch_service_1[a170_0x3a54b5(0x96)]{constructor(_0x4892f8,_0xfdcf8e,_0x3f0108){const _0x41343b=a170_0x3a54b5;super(_0x4892f8,_0x3f0108),this[_0x41343b(0x8b)]=_0xfdcf8e,this['request']=this['createRequest']();}[a170_0x3a54b5(0x8f)](){const _0x2269fc=a170_0x3a54b5;return this['api'][_0x2269fc(0x8f)](this[_0x2269fc(0x85)]['apiUrl']);}async[a170_0x3a54b5(0x92)](_0x10368a){const _0x36686d=a170_0x3a54b5;try{await this[_0x36686d(0x86)](_0x10368a);const _0x4a2082=this[_0x36686d(0x85)]['apiUrl'][_0x36686d(0x8e)]('/api/','/branch-utils/');await this['request'][_0x36686d(0x92)](_0x4a2082+'/branches',{'data':{'name':'refs/heads/'+_0x10368a,'dryRun':![]}});}catch(_0x587e05){throw new bad_request_error_1['BadRequestError'](_0x587e05);}}}exports[a170_0x3a54b5(0x9a)]=BitbucketServerBranchService;