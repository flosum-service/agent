function a121_0x4477(_0x43b8e7,_0x54935d){const _0x34a8e0=a121_0x4115();return a121_0x4477=function(_0x53d3b0,_0x412cbf){_0x53d3b0=_0x53d3b0-0x18f;let _0x4115b1=_0x34a8e0[_0x53d3b0];return _0x4115b1;},a121_0x4477(_0x43b8e7,_0x54935d);}function a121_0x4115(){const _0x37c5f7=['getCurrentHash','5689584fVprhn','5YmmBwC','sleep','includes','3797412YtflRd','commitAndPush','setCredentials','107168LqGJQy','../../../shared/utils','search','removeDir','git','email','6262837HIyISp','(((.+)+)+)+$','constructor','commit','defineProperty','name','MAX_GIT_STATUS_CHECK','1529836cFAAMc','__esModule','clone','status','add','checkout','Git','describeCommit','message','772997rrVLuO','__importDefault','8978013BHwyuM','shortid','uniqueId','../../internal/git.internal','Shell','cd\x20','remote','apply','nothing\x20to\x20commit','dir','push','33TrqEnG','GitUtils','default','catch','GIT_STATUS_CHECK_INTERVAL','../../internal/shell.internal'];a121_0x4115=function(){return _0x37c5f7;};return a121_0x4115();}const a121_0x53a733=a121_0x4477;(function(_0xd48d2f,_0x3104ed){const _0x493a80=a121_0x4477,_0x1ab565=_0xd48d2f();while(!![]){try{const _0x53dfbe=parseInt(_0x493a80(0x18f))/0x1+parseInt(_0x493a80(0x1b7))/0x2+parseInt(_0x493a80(0x19c))/0x3*(parseInt(_0x493a80(0x1aa))/0x4)+-parseInt(_0x493a80(0x1a4))/0x5*(parseInt(_0x493a80(0x1a7))/0x6)+-parseInt(_0x493a80(0x1b0))/0x7+-parseInt(_0x493a80(0x1a3))/0x8+parseInt(_0x493a80(0x191))/0x9;if(_0x53dfbe===_0x3104ed)break;else _0x1ab565['push'](_0x1ab565['shift']());}catch(_0xabcb6c){_0x1ab565['push'](_0x1ab565['shift']());}}}(a121_0x4115,0x90621));const a121_0x412cbf=(function(){let _0x4df9b5=!![];return function(_0x5d8a6f,_0x186dbb){const _0x119c51=_0x4df9b5?function(){const _0x22cdbd=a121_0x4477;if(_0x186dbb){const _0x1bad90=_0x186dbb[_0x22cdbd(0x198)](_0x5d8a6f,arguments);return _0x186dbb=null,_0x1bad90;}}:function(){};return _0x4df9b5=![],_0x119c51;};}()),a121_0x53d3b0=a121_0x412cbf(this,function(){const _0x1458b7=a121_0x4477;return a121_0x53d3b0['toString']()[_0x1458b7(0x1ac)](_0x1458b7(0x1b1))['toString']()[_0x1458b7(0x1b2)](a121_0x53d3b0)[_0x1458b7(0x1ac)](_0x1458b7(0x1b1));});a121_0x53d3b0();'use strict';var __importDefault=this&&this[a121_0x53a733(0x190)]||function(_0x55f8f2){const _0x3a7a89=a121_0x53a733;return _0x55f8f2&&_0x55f8f2[_0x3a7a89(0x1b8)]?_0x55f8f2:{'default':_0x55f8f2};};Object[a121_0x53a733(0x1b4)](exports,a121_0x53a733(0x1b8),{'value':!![]}),exports[a121_0x53a733(0x19d)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),git_internal_1=require(a121_0x53a733(0x194)),shell_internal_1=require(a121_0x53a733(0x1a1)),utils_1=require(a121_0x53a733(0x1ab)),shortid_1=__importDefault(require(a121_0x53a733(0x192)));class GitUtils{constructor(_0x563a43){const _0x45754e=a121_0x53a733;this[_0x45754e(0x197)]=_0x563a43,this[_0x45754e(0x1b6)]=0xa,this[_0x45754e(0x1a0)]=0xbb8,this['uniqueId']=(0x0,shortid_1[_0x45754e(0x19e)])();}get[a121_0x53a733(0x19a)](){const _0x53bfc7=a121_0x53a733;return this[_0x53bfc7(0x1ae)]['baseDir'];}async[a121_0x53a733(0x1b9)](_0xeaacdf,_0x210ee2){const _0x481343=a121_0x53a733;this[_0x481343(0x1ae)]=await git_internal_1[_0x481343(0x1bd)][_0x481343(0x1b9)](this['remote'],''+this[_0x481343(0x193)],_0xeaacdf);}async['checkoutTo'](_0x2d1863){const _0x56d4f9=a121_0x53a733;await this[_0x56d4f9(0x1ae)][_0x56d4f9(0x1bc)](_0x2d1863);}[a121_0x53a733(0x1a2)](){const _0x136008=a121_0x53a733;return this[_0x136008(0x1ae)][_0x136008(0x1a2)]();}[a121_0x53a733(0x1be)](_0x5c42b7){const _0x1e5f78=a121_0x53a733;return this[_0x1e5f78(0x1ae)]['describeCommit'](_0x5c42b7);}async[a121_0x53a733(0x1a8)](_0xad1ec5,_0x44eb76,_0x413fca){const _0x42793c=a121_0x53a733;await this['git'][_0x42793c(0x1bb)]('.');const _0x350b78=await this[_0x42793c(0x1ae)]['status']()[_0x42793c(0x19f)](_0x2f84ce=>_0x2f84ce['message']||_0x2f84ce);if(_0x350b78['includes'](_0x42793c(0x199)))return;await this[_0x42793c(0x1ae)][_0x42793c(0x1a9)](_0x44eb76[_0x42793c(0x1b5)],_0x44eb76[_0x42793c(0x1af)]);try{await this[_0x42793c(0x1ae)][_0x42793c(0x1b3)](_0xad1ec5);}catch(_0x28c927){let _0x32509f=0x0;do{_0x32509f++;const _0x3016c8=await this[_0x42793c(0x1ae)][_0x42793c(0x1ba)]()[_0x42793c(0x19f)](_0x46a301=>_0x46a301[_0x42793c(0x1bf)]||_0x46a301);if(_0x3016c8[_0x42793c(0x1a6)]('nothing\x20to\x20commit')){_0x32509f=0x0;break;}await(0x0,utils_1[_0x42793c(0x1a5)])(this[_0x42793c(0x1a0)]);}while(_0x32509f<this[_0x42793c(0x1b6)]);if(_0x32509f===this[_0x42793c(0x1b6)])throw _0x28c927;}await this[_0x42793c(0x1ae)][_0x42793c(0x19b)](_0x413fca);}async['clearDir'](){const _0x3f87f6=a121_0x53a733;await shell_internal_1[_0x3f87f6(0x195)]['exec'](_0x3f87f6(0x196)+this[_0x3f87f6(0x19a)]+'\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd')[_0x3f87f6(0x19f)](()=>void 0x0);}async[a121_0x53a733(0x1ad)](){const _0x79a84b=a121_0x53a733;await fs_internal_1['FS'][_0x79a84b(0x1ad)](this[_0x79a84b(0x19a)]);}}exports['GitUtils']=GitUtils;