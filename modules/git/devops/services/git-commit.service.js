const a109_0x18dac1=a109_0xc218;(function(_0x423cd0,_0x59cb78){const _0x5d101a=a109_0xc218,_0x55a694=_0x423cd0();while(!![]){try{const _0x1cec53=parseInt(_0x5d101a(0x154))/0x1+parseInt(_0x5d101a(0x16b))/0x2+-parseInt(_0x5d101a(0x185))/0x3+-parseInt(_0x5d101a(0x170))/0x4+-parseInt(_0x5d101a(0x134))/0x5+-parseInt(_0x5d101a(0x17e))/0x6+parseInt(_0x5d101a(0x15a))/0x7;if(_0x1cec53===_0x59cb78)break;else _0x55a694['push'](_0x55a694['shift']());}catch(_0x906a49){_0x55a694['push'](_0x55a694['shift']());}}}(a109_0x326f,0x5b2cb));const a109_0x51bf09=(function(){let _0x246b06=!![];return function(_0x401c92,_0x4b6aca){const _0x1deb90=_0x246b06?function(){if(_0x4b6aca){const _0x2c86ff=_0x4b6aca['apply'](_0x401c92,arguments);return _0x4b6aca=null,_0x2c86ff;}}:function(){};return _0x246b06=![],_0x1deb90;};}()),a109_0x12a02b=a109_0x51bf09(this,function(){const _0x247c59=a109_0xc218;return a109_0x12a02b[_0x247c59(0x141)]()[_0x247c59(0x13c)](_0x247c59(0x172))[_0x247c59(0x141)]()[_0x247c59(0x174)](a109_0x12a02b)[_0x247c59(0x13c)](_0x247c59(0x172));});a109_0x12a02b();function a109_0xc218(_0x4f53f4,_0x36fcce){const _0x40f75a=a109_0x326f();return a109_0xc218=function(_0x12a02b,_0x51bf09){_0x12a02b=_0x12a02b-0x131;let _0x326f05=_0x40f75a[_0x12a02b];return _0x326f05;},a109_0xc218(_0x4f53f4,_0x36fcce);}'use strict';var __decorate=this&&this[a109_0x18dac1(0x15c)]||function(_0xa0ef0,_0x192596,_0x43b4e2,_0x33c3df){const _0x3e7b7b=a109_0x18dac1;var _0x48b5c6=arguments[_0x3e7b7b(0x14d)],_0x183646=_0x48b5c6<0x3?_0x192596:_0x33c3df===null?_0x33c3df=Object[_0x3e7b7b(0x136)](_0x192596,_0x43b4e2):_0x33c3df,_0x4e5dad;if(typeof Reflect===_0x3e7b7b(0x133)&&typeof Reflect[_0x3e7b7b(0x159)]==='function')_0x183646=Reflect['decorate'](_0xa0ef0,_0x192596,_0x43b4e2,_0x33c3df);else{for(var _0xa16fd3=_0xa0ef0[_0x3e7b7b(0x14d)]-0x1;_0xa16fd3>=0x0;_0xa16fd3--)if(_0x4e5dad=_0xa0ef0[_0xa16fd3])_0x183646=(_0x48b5c6<0x3?_0x4e5dad(_0x183646):_0x48b5c6>0x3?_0x4e5dad(_0x192596,_0x43b4e2,_0x183646):_0x4e5dad(_0x192596,_0x43b4e2))||_0x183646;}return _0x48b5c6>0x3&&_0x183646&&Object['defineProperty'](_0x192596,_0x43b4e2,_0x183646),_0x183646;},__metadata=this&&this[a109_0x18dac1(0x147)]||function(_0xfe78e0,_0x2a2418){const _0xf5bbb4=a109_0x18dac1;if(typeof Reflect==='object'&&typeof Reflect[_0xf5bbb4(0x148)]===_0xf5bbb4(0x180))return Reflect[_0xf5bbb4(0x148)](_0xfe78e0,_0x2a2418);};Object['defineProperty'](exports,a109_0x18dac1(0x184),{'value':!![]}),exports['GitCommitService']=void 0x0;const constants_1=require(a109_0x18dac1(0x13e)),salesforce_git_sync_service_1=require('../../salesforce/services/salesforce-git-sync.service'),salesforce_rest_service_1=require(a109_0x18dac1(0x131)),typedi_1=require(a109_0x18dac1(0x166)),salesforce_sync_service_1=require(a109_0x18dac1(0x14f)),salesforce_service_1=require(a109_0x18dac1(0x142)),parser_v2_1=require(a109_0x18dac1(0x17b)),utils_1=require('../../parsers/utils');let GitCommitService=class GitCommitService{constructor(_0x4aa979,_0x611b3f,_0x265a49,_0x129f9f){const _0x385b5c=a109_0x18dac1;this[_0x385b5c(0x168)]=_0x4aa979,this['salesforceRest']=_0x611b3f,this[_0x385b5c(0x177)]=_0x265a49,this['salesforce']=_0x129f9f,this[_0x385b5c(0x150)]=0xc8;}get[a109_0x18dac1(0x13a)](){const _0x4b4f92=a109_0x18dac1;var _0x2d6e0b;return((_0x2d6e0b=this[_0x4b4f92(0x155)])===null||_0x2d6e0b===void 0x0?void 0x0:_0x2d6e0b[_0x4b4f92(0x13a)])||'';}get[a109_0x18dac1(0x178)](){const _0x4b34c1=a109_0x18dac1;var _0x207516;return((_0x207516=this[_0x4b34c1(0x155)])===null||_0x207516===void 0x0?void 0x0:_0x207516[_0x4b34c1(0x178)])||'';}async['createCommit'](_0x11c010){const _0x392641=a109_0x18dac1;return this[_0x392641(0x168)]['createCommit'](_0x11c010,this['repositoryId']);}async[a109_0x18dac1(0x161)](_0x18fc17){const _0x310896=a109_0x18dac1;if(this[_0x310896(0x155)]){const _0x580f5a=await this[_0x310896(0x177)][_0x310896(0x158)](this[_0x310896(0x155)]),_0xdd2667=await this[_0x310896(0x135)][_0x310896(0x188)](_0x580f5a)[_0x310896(0x167)](_0x22afef=>typeof _0x22afef===_0x310896(0x171)?JSON[_0x310896(0x17a)](_0x22afef):_0x22afef)[_0x310896(0x14c)](()=>({}));if(_0xdd2667[this['gitCommit'][_0x310896(0x13b)]]){if(_0xdd2667[this[_0x310896(0x144)]['repositoryGit']][_0x310896(0x164)]===_0x18fc17)return!![];}return![];}return![];}async[a109_0x18dac1(0x13d)](_0x3bb555){const _0x5be42d=a109_0x18dac1;this[_0x5be42d(0x155)]&&await this[_0x5be42d(0x177)]['updateRemoteState'](this['syncRecord'],_0x3bb555);}[a109_0x18dac1(0x17c)](){const _0x7e9ee4=a109_0x18dac1;return this[_0x7e9ee4(0x14b)][_0x7e9ee4(0x149)](({fileName:_0x2d23ed})=>_0x2d23ed);}async[a109_0x18dac1(0x151)](_0x3113cb,_0x503f2e,_0x4a2806){const _0x310070=a109_0x18dac1,_0x3ab86d=new RegExp('^'+_0x3113cb+_0x310070(0x152));let _0x18dfdc=[_0x3113cb];_0x4a2806&&(_0x18dfdc=(0x0,utils_1['filterParserPaths'])(await(0x0,utils_1[_0x310070(0x16a)])(_0x3113cb,_0x503f2e)['catch'](()=>[])));const _0x50bf5d=_0x4a2806?this[_0x310070(0x14b)][_0x310070(0x17f)](_0x5d986d=>_0x5d986d[_0x310070(0x138)][_0x310070(0x143)](_0x3ab86d)):this[_0x310070(0x14b)][_0x310070(0x17f)](_0x5ba028=>_0x5ba028[_0x310070(0x138)]===_0x3113cb||_0x5ba028['fileName']===_0x3113cb[_0x310070(0x16f)](constants_1[_0x310070(0x160)],'')),_0x26d426=new parser_v2_1[(_0x310070(0x137))](_0x503f2e,_0x18dfdc),_0x39a3ad=await _0x26d426[_0x310070(0x17a)](),_0x34c282=[],_0x61f1e9=[];for(const _0x42ce7c of _0x39a3ad){const _0x19d41c=_0x50bf5d[_0x310070(0x156)](_0x242df0=>_0x242df0['name']===_0x42ce7c[_0x310070(0x145)]&&_0x242df0[_0x310070(0x15d)]===_0x42ce7c[_0x310070(0x15d)]);if(!_0x19d41c){_0x34c282[_0x310070(0x13f)](_0x42ce7c);continue;}_0x42ce7c[_0x310070(0x14e)]!==_0x19d41c[_0x310070(0x139)]&&_0x61f1e9['push']({'meta':_0x19d41c,'component':_0x42ce7c}),_0x50bf5d[_0x310070(0x146)](_0x50bf5d['indexOf'](_0x19d41c),0x1);}return{'inserted':_0x34c282,'modified':_0x61f1e9,'removed':_0x50bf5d};}async['fetchRepositoryOrBranchData'](){const _0x49c06a=a109_0x18dac1;this[_0x49c06a(0x155)]=this['gitCommit'][_0x49c06a(0x175)]===_0x49c06a(0x16e)?await this[_0x49c06a(0x177)]['getRepositoryRecordByName'](this[_0x49c06a(0x144)]['repository']):await this['salesforceSync'][_0x49c06a(0x173)](this[_0x49c06a(0x144)][_0x49c06a(0x175)]),this[_0x49c06a(0x165)]=await this['salesforceGitSync']['getComponentRecordTypes']();}async[a109_0x18dac1(0x189)](_0x55e46f){const _0x1a3b9c=a109_0x18dac1;if(this[_0x1a3b9c(0x144)]['force']||_0x55e46f){this[_0x1a3b9c(0x14b)]=this[_0x1a3b9c(0x178)]?await this[_0x1a3b9c(0x168)][_0x1a3b9c(0x16d)](this[_0x1a3b9c(0x178)]):await this[_0x1a3b9c(0x168)][_0x1a3b9c(0x132)](this[_0x1a3b9c(0x13a)]);return;}const _0x4c12e4=[...new Set(this[_0x1a3b9c(0x144)][_0x1a3b9c(0x15b)][_0x1a3b9c(0x149)](_0x483c07=>_0x483c07[_0x1a3b9c(0x16f)](constants_1['META_XML_EXTENSION'],'')))];this[_0x1a3b9c(0x14b)]=[];while(_0x4c12e4[_0x1a3b9c(0x14d)]){const _0x22976=_0x4c12e4[_0x1a3b9c(0x146)](0x0,this[_0x1a3b9c(0x150)]),_0x2508f8=this[_0x1a3b9c(0x178)]?await this[_0x1a3b9c(0x168)]['fetchBranchComponentsByFilenames'](_0x22976,this[_0x1a3b9c(0x178)]):await this[_0x1a3b9c(0x168)][_0x1a3b9c(0x15e)](_0x22976,this['repositoryId']);this[_0x1a3b9c(0x14b)][_0x1a3b9c(0x13f)](..._0x2508f8);}}async[a109_0x18dac1(0x182)](_0x447e1c){const _0x18ae3b=a109_0x18dac1;this['branchId']?await this[_0x18ae3b(0x162)][_0x18ae3b(0x17d)](constants_1[_0x18ae3b(0x16c)],this[_0x18ae3b(0x178)],{[constants_1[_0x18ae3b(0x181)]+_0x18ae3b(0x186)]:_0x447e1c,[constants_1[_0x18ae3b(0x15f)]+_0x18ae3b(0x153)]:Date[_0x18ae3b(0x169)]()}):await this[_0x18ae3b(0x162)][_0x18ae3b(0x17d)](constants_1[_0x18ae3b(0x183)],this[_0x18ae3b(0x13a)],{[constants_1[_0x18ae3b(0x181)]+_0x18ae3b(0x186)]:_0x447e1c});}[a109_0x18dac1(0x176)](_0x1fe093){const _0x4a9784=a109_0x18dac1;this[_0x4a9784(0x144)]=_0x1fe093;}[a109_0x18dac1(0x157)](){const _0x308c39=a109_0x18dac1;return this[_0x308c39(0x165)];}[a109_0x18dac1(0x163)](){const _0x208e85=a109_0x18dac1;return this[_0x208e85(0x13a)];}['getBranchId'](){const _0x143088=a109_0x18dac1;return this[_0x143088(0x178)];}};function a109_0x326f(){const _0x4780fa=['1050594zBwXKZ','Synchronization_Status__c','GitCommitService','retrieveAttachment','fetchComponentsMetadata','../../salesforce/services/salesforce-rest.service','fetchRepositoryComponents','object','483135sxupNL','salesforce','getOwnPropertyDescriptor','MDApiParserV2','fileName','crc32','repositoryId','repositoryGit','search','updateRemoteState','../../../../constants','push','SalesforceGitSyncService','toString','../../salesforce/services/salesforce.service','match','gitCommit','name','splice','__metadata','metadata','map','SalesforceService','componentsMetadata','catch','length','crc','../../salesforce/services/salesforce-sync.service','TASKS_PER_TICK','proceedFile','([./-]{1}|$)','Last_Updated_On__c','445047yaxEEW','syncRecord','find','getRecordTypes','getRemoteStateAttachmentId','decorate','5249405iosvqr','fileNames','__decorate','type','fetchRepositoryComponentsByFilenames','FLOSUM_NAMESPACE','META_XML_EXTENSION','checkSyncStatus','salesforceRest','getRepositoryId','lastCommit','recordTypes','typedi','then','salesforceGitSync','now','readFilesByFilename','900302uJivAv','FLOSUM_BRANCH','fetchBranchComponents','master','replace','825488TONhRg','string','(((.+)+)+)+$','getBranchRecordByName','constructor','branch','setCommitDto','salesforceSync','branchId','SalesforceRestService','parse','../../parsers/mdapi/parser-v2','getUnusedComponentsFilePaths','patch','3710790Oibjjc','filter','function','FLOSUM_GIT_NAMESPACE','updateStatus','FLOSUM_REPOSITORY','__esModule'];a109_0x326f=function(){return _0x4780fa;};return a109_0x326f();}GitCommitService=__decorate([(0x0,typedi_1['Service'])({'transient':!![]}),__metadata('design:paramtypes',[salesforce_git_sync_service_1[a109_0x18dac1(0x140)],salesforce_rest_service_1[a109_0x18dac1(0x179)],salesforce_sync_service_1['SalesforceSyncService'],salesforce_service_1[a109_0x18dac1(0x14a)]])],GitCommitService),exports[a109_0x18dac1(0x187)]=GitCommitService;