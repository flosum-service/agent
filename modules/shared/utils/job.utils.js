const a290_0x375f48=a290_0x4c1c;(function(_0xf42498,_0x1bfd96){const _0x2e7c45=a290_0x4c1c,_0x8f99ec=_0xf42498();while(!![]){try{const _0x329882=parseInt(_0x2e7c45(0x185))/0x1*(-parseInt(_0x2e7c45(0x1a4))/0x2)+parseInt(_0x2e7c45(0x19a))/0x3*(parseInt(_0x2e7c45(0x1a0))/0x4)+parseInt(_0x2e7c45(0x1a3))/0x5*(parseInt(_0x2e7c45(0x18e))/0x6)+-parseInt(_0x2e7c45(0x187))/0x7+parseInt(_0x2e7c45(0x195))/0x8+-parseInt(_0x2e7c45(0x199))/0x9+parseInt(_0x2e7c45(0x191))/0xa;if(_0x329882===_0x1bfd96)break;else _0x8f99ec['push'](_0x8f99ec['shift']());}catch(_0x41880c){_0x8f99ec['push'](_0x8f99ec['shift']());}}}(a290_0x285b,0x656c7));function a290_0x4c1c(_0x4e63f3,_0x3aba62){const _0x58b91b=a290_0x285b();return a290_0x4c1c=function(_0x1bc0e5,_0x31f7ca){_0x1bc0e5=_0x1bc0e5-0x181;let _0x285b32=_0x58b91b[_0x1bc0e5];return _0x285b32;},a290_0x4c1c(_0x4e63f3,_0x3aba62);}const a290_0x31f7ca=(function(){let _0xd71a73=!![];return function(_0x528af7,_0x102f46){const _0x454ad4=_0xd71a73?function(){if(_0x102f46){const _0x2e1caa=_0x102f46['apply'](_0x528af7,arguments);return _0x102f46=null,_0x2e1caa;}}:function(){};return _0xd71a73=![],_0x454ad4;};}()),a290_0x1bc0e5=a290_0x31f7ca(this,function(){const _0x180cd8=a290_0x4c1c;return a290_0x1bc0e5[_0x180cd8(0x189)]()[_0x180cd8(0x192)]('(((.+)+)+)+$')[_0x180cd8(0x189)]()[_0x180cd8(0x18b)](a290_0x1bc0e5)[_0x180cd8(0x192)]('(((.+)+)+)+$');});a290_0x1bc0e5();'use strict';var __importDefault=this&&this[a290_0x375f48(0x1a5)]||function(_0x25a710){const _0x56d0df=a290_0x375f48;return _0x25a710&&_0x25a710[_0x56d0df(0x1a2)]?_0x25a710:{'default':_0x25a710};};Object[a290_0x375f48(0x18f)](exports,'__esModule',{'value':!![]});function a290_0x285b(){const _0x5a27d3=['2251280DOUESg','search','name','map','1855600UQIsPd','runJob','default','JOB_LOG_STATE_FILENAME','1958238PqtSKB','75vsiMUT','./spawn.utils','sortJobsIds','isExistsPath','readdir','isDirectory','49864nFYpaQ','once','__esModule','15jGuadf','2YusSMd','__importDefault','FsUtils','push','log','@flosum/utils','get','path','Logger','fs/promises','keys','../../../core','set','75515pASuyJ','filter','3358418IGRoOC','birthtime','toString','sort','constructor','executeInterpreter','getJobsIds','839148ifGHMZ','defineProperty','../../../constants/job'];a290_0x285b=function(){return _0x5a27d3;};return a290_0x285b();}const path_1=__importDefault(require(a290_0x375f48(0x1ab))),spawn_utils_1=require(a290_0x375f48(0x19b)),core_1=require(a290_0x375f48(0x183)),shortid_1=__importDefault(require('shortid')),utils_1=require(a290_0x375f48(0x1a9)),promises_1=require(a290_0x375f48(0x181)),job_1=require(a290_0x375f48(0x190));class JobUtils{static['generateJobId'](){const _0x36ac13=a290_0x375f48;return(0x0,shortid_1[_0x36ac13(0x197)])();}static[a290_0x375f48(0x196)](_0x35de6b,_0x4e0e76){return new Promise((_0x2220dc,_0x5b7665)=>{const _0x20d546=a290_0x4c1c,{jobStorePath:_0x1a6101,jobId:_0x1168df}=_0x4e0e76,_0x4567e4=(0x0,spawn_utils_1[_0x20d546(0x18c)])(_0x35de6b,...(0x0,spawn_utils_1['objectToArgsList'])({'jobStorePath':_0x1a6101,'jobId':_0x1168df})),_0x4c876f=new core_1[(_0x20d546(0x1ac))](_0x1168df);_0x4567e4[_0x20d546(0x1a1)]('close',_0x1146fd=>{const _0x186649=_0x20d546,_0x2e24b7='Job\x20has\x20been\x20closed\x20with\x20status\x20code:\x20'+_0x1146fd;_0x4c876f[_0x186649(0x1a8)](_0x2e24b7),_0x1146fd===0x0?_0x2220dc(_0x2e24b7):_0x5b7665(new Error(_0x2e24b7));});});}static async[a290_0x375f48(0x18d)](_0x3a1fb1){const _0x3a6885=a290_0x375f48;if(!await utils_1[_0x3a6885(0x1a6)][_0x3a6885(0x19d)](_0x3a1fb1))return[];const _0x34cdbe=await(0x0,promises_1[_0x3a6885(0x19e)])(_0x3a1fb1,{'withFileTypes':!![]}),_0x2db970=_0x34cdbe[_0x3a6885(0x186)](_0x47603a=>_0x47603a[_0x3a6885(0x19f)]())[_0x3a6885(0x194)](_0x58690b=>_0x58690b[_0x3a6885(0x193)]),_0x4a55f1=[];for(const _0x23a19a of _0x2db970){const _0x9b8dae=path_1[_0x3a6885(0x197)]['join'](_0x3a1fb1,_0x23a19a,job_1[_0x3a6885(0x198)]);await utils_1[_0x3a6885(0x1a6)][_0x3a6885(0x19d)](_0x9b8dae)&&_0x4a55f1[_0x3a6885(0x1a7)](_0x23a19a);}return _0x4a55f1;}static async[a290_0x375f48(0x19c)](_0x48609a,_0x36c4f7){const _0x34b82e=a290_0x375f48,_0x469af1=new Map();for(const _0x224af5 of _0x36c4f7){const _0x295482=await(0x0,promises_1['stat'])(path_1[_0x34b82e(0x197)]['join'](_0x48609a,_0x224af5));_0x469af1[_0x34b82e(0x184)](_0x295482,_0x224af5);}return Array['from'](_0x469af1[_0x34b82e(0x182)]())[_0x34b82e(0x18a)]((_0x21598d,_0x77ef75)=>_0x77ef75[_0x34b82e(0x188)]-_0x21598d[_0x34b82e(0x188)])[_0x34b82e(0x194)](_0xe96ce7=>_0x469af1[_0x34b82e(0x1aa)](_0xe96ce7));}}exports['default']=JobUtils;