const a283_0x4ce2d2=a283_0xd939;(function(_0x2de0bd,_0x14f306){const _0x34dc03=a283_0xd939,_0x22ccf8=_0x2de0bd();while(!![]){try{const _0x21714d=-parseInt(_0x34dc03(0x17c))/0x1+-parseInt(_0x34dc03(0x167))/0x2+-parseInt(_0x34dc03(0x173))/0x3+-parseInt(_0x34dc03(0x189))/0x4*(-parseInt(_0x34dc03(0x180))/0x5)+-parseInt(_0x34dc03(0x183))/0x6+parseInt(_0x34dc03(0x16a))/0x7*(parseInt(_0x34dc03(0x170))/0x8)+parseInt(_0x34dc03(0x194))/0x9;if(_0x21714d===_0x14f306)break;else _0x22ccf8['push'](_0x22ccf8['shift']());}catch(_0x4e6165){_0x22ccf8['push'](_0x22ccf8['shift']());}}}(a283_0x2e64,0x8759c));const a283_0x4a2181=(function(){let _0x17a4b5=!![];return function(_0x38d148,_0x399651){const _0x3d46b0=_0x17a4b5?function(){if(_0x399651){const _0x14fdc9=_0x399651['apply'](_0x38d148,arguments);return _0x399651=null,_0x14fdc9;}}:function(){};return _0x17a4b5=![],_0x3d46b0;};}()),a283_0x125ee8=a283_0x4a2181(this,function(){const _0x113a2d=a283_0xd939;return a283_0x125ee8[_0x113a2d(0x171)]()[_0x113a2d(0x17a)](_0x113a2d(0x191))[_0x113a2d(0x171)]()[_0x113a2d(0x17f)](a283_0x125ee8)['search'](_0x113a2d(0x191));});a283_0x125ee8();'use strict';var __importDefault=this&&this[a283_0x4ce2d2(0x18c)]||function(_0x5c0229){return _0x5c0229&&_0x5c0229['__esModule']?_0x5c0229:{'default':_0x5c0229};};function a283_0x2e64(){const _0x51a540=['toString','FsUtils','2764788wLoseb','IN_PROGRESS','writeFile','isExistsPath','statePath','utf-8','__esModule','search','JobStatus','320095xKWTVe','QUEUED','update','constructor','17990oEjMTT','path','setCompleted','3982122okPzUF','init','readFile','addWarning','completedDate','warnings','668CSfixa','defineProperty','create','__importDefault','jobState','getJobStatePath','default','fs/promises','(((.+)+)+)+$','../enums/logger.enums','setInProgress','24063633SGvoXS','Job\x20not\x20found.','stringify','status','JOB_LOG_STATE_FILENAME','1845582hFTWcF','getTime','getJobState','322TjARqu','FAILED','parse','then','@flosum/utils','createdDate','18776doCLyg'];a283_0x2e64=function(){return _0x51a540;};return a283_0x2e64();}Object[a283_0x4ce2d2(0x18a)](exports,a283_0x4ce2d2(0x179),{'value':!![]});const logger_enums_1=require(a283_0x4ce2d2(0x192)),path_1=__importDefault(require(a283_0x4ce2d2(0x181))),promises_1=require(a283_0x4ce2d2(0x190)),utils_1=require(a283_0x4ce2d2(0x16e)),job_1=require('../../../constants/job');function a283_0xd939(_0x1eb49f,_0x3256a4){const _0x51ce4d=a283_0x2e64();return a283_0xd939=function(_0x125ee8,_0x4a2181){_0x125ee8=_0x125ee8-0x167;let _0x2e6425=_0x51ce4d[_0x125ee8];return _0x2e6425;},a283_0xd939(_0x1eb49f,_0x3256a4);}class StateManager{constructor(_0x535b1a){const _0x4ec7b0=a283_0x4ce2d2;this['statePath']=StateManager[_0x4ec7b0(0x18e)](_0x535b1a);}static['getJobStatePath'](_0x222b0f){const _0x3d8439=a283_0x4ce2d2;return path_1[_0x3d8439(0x18f)]['join'](_0x222b0f,job_1[_0x3d8439(0x198)]);}static async[a283_0x4ce2d2(0x18b)](_0x559c15,_0x380c50){const _0x26f35b=a283_0x4ce2d2,_0x510712=StateManager[_0x26f35b(0x18e)](_0x559c15),_0x462133={'id':_0x380c50,'status':logger_enums_1[_0x26f35b(0x17b)][_0x26f35b(0x17d)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1['writeFile'])(_0x510712,JSON[_0x26f35b(0x196)](_0x462133));}static async[a283_0x4ce2d2(0x169)](_0x5b4413){const _0x5d183d=a283_0x4ce2d2,_0x5cd24f=StateManager['getJobStatePath'](_0x5b4413);if(await utils_1[_0x5d183d(0x172)][_0x5d183d(0x176)](_0x5cd24f))return(0x0,promises_1[_0x5d183d(0x185)])(_0x5cd24f,_0x5d183d(0x178))[_0x5d183d(0x16d)](JSON[_0x5d183d(0x16c)]);throw new Error(_0x5d183d(0x195));}async['update'](){const _0x240a86=a283_0x4ce2d2;await(0x0,promises_1[_0x240a86(0x175)])(this[_0x240a86(0x177)],JSON[_0x240a86(0x196)](this['jobState']));}async[a283_0x4ce2d2(0x184)](){const _0x3f848c=a283_0x4ce2d2;return this['jobState']=await(0x0,promises_1[_0x3f848c(0x185)])(this[_0x3f848c(0x177)],'utf-8')[_0x3f848c(0x16d)](JSON['parse']),this;}async[a283_0x4ce2d2(0x193)](){const _0x3a1323=a283_0x4ce2d2;this[_0x3a1323(0x18d)][_0x3a1323(0x197)]=logger_enums_1[_0x3a1323(0x17b)][_0x3a1323(0x174)],this[_0x3a1323(0x18d)][_0x3a1323(0x16f)]=new Date()['getTime'](),await this[_0x3a1323(0x17e)]();}async[a283_0x4ce2d2(0x182)](){const _0xdf5ef0=a283_0x4ce2d2;this[_0xdf5ef0(0x18d)][_0xdf5ef0(0x197)]=logger_enums_1[_0xdf5ef0(0x17b)]['COMPLETED'],this['jobState'][_0xdf5ef0(0x187)]=new Date()[_0xdf5ef0(0x168)](),await this[_0xdf5ef0(0x17e)]();}async['setError']({message:_0x1a7cbe}){const _0x25016e=a283_0x4ce2d2;this['jobState']['status']=logger_enums_1['JobStatus'][_0x25016e(0x16b)],this['jobState']['completedDate']=new Date()[_0x25016e(0x168)](),this[_0x25016e(0x18d)]['error']=_0x1a7cbe,await this[_0x25016e(0x17e)]();}[a283_0x4ce2d2(0x186)](_0x4a2919){const _0x1045d3=a283_0x4ce2d2;return this[_0x1045d3(0x18d)][_0x1045d3(0x188)]['push'](_0x4a2919),this['update']();}}exports[a283_0x4ce2d2(0x18f)]=StateManager;