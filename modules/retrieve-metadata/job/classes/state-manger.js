const a268_0x5de21c=a268_0x51cd;(function(_0xd3e277,_0x49b36a){const _0x450807=a268_0x51cd,_0x35e7cf=_0xd3e277();while(!![]){try{const _0x44b2df=-parseInt(_0x450807(0x157))/0x1+-parseInt(_0x450807(0x159))/0x2*(-parseInt(_0x450807(0x161))/0x3)+-parseInt(_0x450807(0x141))/0x4*(parseInt(_0x450807(0x16e))/0x5)+parseInt(_0x450807(0x15e))/0x6+-parseInt(_0x450807(0x170))/0x7*(parseInt(_0x450807(0x150))/0x8)+parseInt(_0x450807(0x14c))/0x9*(-parseInt(_0x450807(0x160))/0xa)+-parseInt(_0x450807(0x16c))/0xb*(-parseInt(_0x450807(0x15f))/0xc);if(_0x44b2df===_0x49b36a)break;else _0x35e7cf['push'](_0x35e7cf['shift']());}catch(_0x2b062e){_0x35e7cf['push'](_0x35e7cf['shift']());}}}(a268_0x36b4,0xe217e));const a268_0x16feb0=(function(){let _0x315c93=!![];return function(_0x199ffa,_0x52421f){const _0x3ce233=_0x315c93?function(){const _0x3fcec6=a268_0x51cd;if(_0x52421f){const _0x3bbcfc=_0x52421f[_0x3fcec6(0x16b)](_0x199ffa,arguments);return _0x52421f=null,_0x3bbcfc;}}:function(){};return _0x315c93=![],_0x3ce233;};}()),a268_0x557c64=a268_0x16feb0(this,function(){const _0x6ee944=a268_0x51cd;return a268_0x557c64[_0x6ee944(0x145)]()[_0x6ee944(0x162)]('(((.+)+)+)+$')[_0x6ee944(0x145)]()[_0x6ee944(0x15c)](a268_0x557c64)[_0x6ee944(0x162)](_0x6ee944(0x14b));});a268_0x557c64();'use strict';var __importDefault=this&&this[a268_0x5de21c(0x149)]||function(_0x1a1dc8){return _0x1a1dc8&&_0x1a1dc8['__esModule']?_0x1a1dc8:{'default':_0x1a1dc8};};function a268_0x51cd(_0x5f14ac,_0x3c91ad){const _0x1accb1=a268_0x36b4();return a268_0x51cd=function(_0x557c64,_0x16feb0){_0x557c64=_0x557c64-0x140;let _0x36b40e=_0x1accb1[_0x557c64];return _0x36b40e;},a268_0x51cd(_0x5f14ac,_0x3c91ad);}Object[a268_0x5de21c(0x16d)](exports,a268_0x5de21c(0x154),{'value':!![]});const logger_enums_1=require('../enums/logger.enums'),path_1=__importDefault(require(a268_0x5de21c(0x15a))),promises_1=require(a268_0x5de21c(0x152)),utils_1=require(a268_0x5de21c(0x14d)),job_1=require(a268_0x5de21c(0x172));class StateManager{constructor(_0x36815f){const _0x26bd0e=a268_0x5de21c;this[_0x26bd0e(0x163)]=StateManager['getJobStatePath'](_0x36815f);}static['getJobStatePath'](_0x48829c){const _0x25abf5=a268_0x5de21c;return path_1['default']['join'](_0x48829c,job_1[_0x25abf5(0x148)]);}static async[a268_0x5de21c(0x174)](_0x3189a6,_0x26d436){const _0x33a1ba=a268_0x5de21c,_0x175dd6=StateManager[_0x33a1ba(0x153)](_0x3189a6),_0x27bc83={'id':_0x26d436,'status':logger_enums_1['JobStatus'][_0x33a1ba(0x16f)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0x33a1ba(0x143)])(_0x175dd6,JSON[_0x33a1ba(0x14f)](_0x27bc83));}static async[a268_0x5de21c(0x14a)](_0x4e79c8){const _0x17e840=a268_0x5de21c,_0x26d861=StateManager[_0x17e840(0x153)](_0x4e79c8);if(await utils_1[_0x17e840(0x140)]['isExistsPath'](_0x26d861))return(0x0,promises_1[_0x17e840(0x168)])(_0x26d861,_0x17e840(0x164))[_0x17e840(0x142)](JSON[_0x17e840(0x171)]);throw new Error('Job\x20not\x20found.');}async[a268_0x5de21c(0x144)](){const _0x2b0747=a268_0x5de21c;await(0x0,promises_1[_0x2b0747(0x143)])(this[_0x2b0747(0x163)],JSON[_0x2b0747(0x14f)](this[_0x2b0747(0x15b)]));}async[a268_0x5de21c(0x167)](){const _0x3dc964=a268_0x5de21c;return this[_0x3dc964(0x15b)]=await(0x0,promises_1[_0x3dc964(0x168)])(this[_0x3dc964(0x163)],_0x3dc964(0x164))[_0x3dc964(0x142)](JSON[_0x3dc964(0x171)]),this;}async[a268_0x5de21c(0x14e)](){const _0x5f5577=a268_0x5de21c;this['jobState']['status']=logger_enums_1[_0x5f5577(0x158)][_0x5f5577(0x146)],this['jobState'][_0x5f5577(0x147)]=new Date()['getTime'](),await this[_0x5f5577(0x144)]();}async[a268_0x5de21c(0x15d)](){const _0x5d92e8=a268_0x5de21c;this[_0x5d92e8(0x15b)][_0x5d92e8(0x169)]=logger_enums_1['JobStatus'][_0x5d92e8(0x156)],this[_0x5d92e8(0x15b)][_0x5d92e8(0x16a)]=new Date()[_0x5d92e8(0x165)](),await this[_0x5d92e8(0x144)]();}async[a268_0x5de21c(0x166)]({message:_0x5f464b}){const _0x47204a=a268_0x5de21c;this['jobState']['status']=logger_enums_1['JobStatus']['FAILED'],this[_0x47204a(0x15b)][_0x47204a(0x16a)]=new Date()['getTime'](),this[_0x47204a(0x15b)]['error']=_0x5f464b,await this[_0x47204a(0x144)]();}[a268_0x5de21c(0x151)](_0x140238){const _0x57e88e=a268_0x5de21c;return this[_0x57e88e(0x15b)][_0x57e88e(0x155)][_0x57e88e(0x175)](_0x140238),this[_0x57e88e(0x144)]();}}function a268_0x36b4(){const _0x5998f7=['setCompleted','9387648dOkPgh','30767280gvuZCn','10PgGsPc','7722cyeYyX','search','statePath','utf-8','getTime','setError','init','readFile','status','completedDate','apply','11OwfHlz','defineProperty','55QHqdfV','QUEUED','1775151dQxIoT','parse','../../../../constants/job','default','create','push','FsUtils','81544WDwHIm','then','writeFile','update','toString','IN_PROGRESS','createdDate','JOB_LOG_STATE_FILENAME','__importDefault','getJobState','(((.+)+)+)+$','8227701xCNZzo','@flosum/utils','setInProgress','stringify','56vYvOoq','addWarning','fs/promises','getJobStatePath','__esModule','warnings','COMPLETED','1223246whkAjk','JobStatus','726yzrvHP','path','jobState','constructor'];a268_0x36b4=function(){return _0x5998f7;};return a268_0x36b4();}exports[a268_0x5de21c(0x173)]=StateManager;