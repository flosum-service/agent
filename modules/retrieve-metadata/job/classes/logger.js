function a300_0x2b19(){const _0x190962=['getTime','360508LdRoXZ','stringify','76131lYKdPh','error','initMessage','4836960PeOrVq','defineProperty','warning','systemLogger','apply','toString','default','search','2618GNCjgI','logPath','9OfKRNt','log','appendToLog','catch','appendFile','__esModule','18322161yUwEFg','3814812CdbQIW','__importDefault','join','4161590qJHkKJ','path','dataPath','20OFpaom','19152GBAUMD','(((.+)+)+)+$','constructor','1096PVCyOX'];a300_0x2b19=function(){return _0x190962;};return a300_0x2b19();}const a300_0x3b8401=a300_0x3bd7;(function(_0x3f0c58,_0x2faabb){const _0x4a7855=a300_0x3bd7,_0x5e247f=_0x3f0c58();while(!![]){try{const _0x2e8c9c=-parseInt(_0x4a7855(0x130))/0x1*(-parseInt(_0x4a7855(0x143))/0x2)+-parseInt(_0x4a7855(0x148))/0x3+parseInt(_0x4a7855(0x137))/0x4+parseInt(_0x4a7855(0x13a))/0x5+parseInt(_0x4a7855(0x13e))/0x6*(parseInt(_0x4a7855(0x150))/0x7)+-parseInt(_0x4a7855(0x141))/0x8*(-parseInt(_0x4a7855(0x145))/0x9)+-parseInt(_0x4a7855(0x13d))/0xa*(parseInt(_0x4a7855(0x136))/0xb);if(_0x2e8c9c===_0x2faabb)break;else _0x5e247f['push'](_0x5e247f['shift']());}catch(_0x8efaf6){_0x5e247f['push'](_0x5e247f['shift']());}}}(a300_0x2b19,0xc78e0));function a300_0x3bd7(_0xc59311,_0x230906){const _0x20a845=a300_0x2b19();return a300_0x3bd7=function(_0x36b2ff,_0x49e78b){_0x36b2ff=_0x36b2ff-0x130;let _0x2b195c=_0x20a845[_0x36b2ff];return _0x2b195c;},a300_0x3bd7(_0xc59311,_0x230906);}const a300_0x49e78b=(function(){let _0x28d9ff=!![];return function(_0x4a30da,_0x340148){const _0x5b4275=_0x28d9ff?function(){const _0x2622a7=a300_0x3bd7;if(_0x340148){const _0x41d011=_0x340148[_0x2622a7(0x14c)](_0x4a30da,arguments);return _0x340148=null,_0x41d011;}}:function(){};return _0x28d9ff=![],_0x5b4275;};}()),a300_0x36b2ff=a300_0x49e78b(this,function(){const _0x317814=a300_0x3bd7;return a300_0x36b2ff[_0x317814(0x14d)]()[_0x317814(0x14f)](_0x317814(0x13f))['toString']()[_0x317814(0x140)](a300_0x36b2ff)[_0x317814(0x14f)]('(((.+)+)+)+$');});a300_0x36b2ff();'use strict';var __importDefault=this&&this[a300_0x3b8401(0x138)]||function(_0xcc9926){const _0x145e58=a300_0x3b8401;return _0xcc9926&&_0xcc9926[_0x145e58(0x135)]?_0xcc9926:{'default':_0xcc9926};};Object[a300_0x3b8401(0x149)](exports,a300_0x3b8401(0x135),{'value':!![]});const promises_1=require('fs/promises'),path_1=__importDefault(require(a300_0x3b8401(0x13b))),csv_utils_1=__importDefault(require('../../../shared/utils/csv.utils')),job_1=require('../../../../constants/job'),constants_1=require('../../constants'),path_2=require('../../../../configs/path');class Logger{constructor(_0x5bc138,_0x5b339e){const _0x1917d7=a300_0x3b8401;this[_0x1917d7(0x14b)]=_0x5b339e,this[_0x1917d7(0x147)]=!![],this['logPath']=path_1[_0x1917d7(0x14e)][_0x1917d7(0x139)](path_2[_0x1917d7(0x13c)],constants_1['RETRIEVE_METADATA_FOLDER_NAME'],_0x5bc138,job_1['JOB_LOG_DETAILS_FILENAME']);}async[a300_0x3b8401(0x132)](_0x3dae4c){const _0x1847ac=a300_0x3b8401,_0x527c7f={'header':![]};this[_0x1847ac(0x147)]&&(_0x527c7f['header']=!![],this['initMessage']=![]);const _0xe3549a=await csv_utils_1[_0x1847ac(0x14e)][_0x1847ac(0x144)]([_0x3dae4c],_0x527c7f);await(0x0,promises_1[_0x1847ac(0x134)])(this[_0x1847ac(0x151)],_0xe3549a)[_0x1847ac(0x133)](_0x125aa4=>this['systemLogger'][_0x1847ac(0x146)](_0x125aa4['message']));}async[a300_0x3b8401(0x131)](_0x28ef54){const _0x284402=a300_0x3b8401;this['systemLogger']['log'](_0x28ef54),await this[_0x284402(0x132)]({'date':new Date()[_0x284402(0x142)](),'type':'INFO','message':_0x28ef54});}async[a300_0x3b8401(0x146)](_0x1f24db){const _0x260470=a300_0x3b8401;this['systemLogger'][_0x260470(0x146)](_0x1f24db),await this[_0x260470(0x132)]({'date':new Date()[_0x260470(0x142)](),'type':'ERROR','message':_0x1f24db});}async[a300_0x3b8401(0x14a)](_0x723a74){const _0x3de22f=a300_0x3b8401;this[_0x3de22f(0x14b)][_0x3de22f(0x131)](_0x723a74),await this[_0x3de22f(0x132)]({'date':new Date()['getTime'](),'type':'WARNING','message':_0x723a74});}}exports['default']=Logger;