function a363_0x3cc7(_0x5be324,_0x3021e0){const _0xf10d60=a363_0x41c9();return a363_0x3cc7=function(_0x167b35,_0x3a2eb0){_0x167b35=_0x167b35-0x179;let _0x41c9dd=_0xf10d60[_0x167b35];return _0x41c9dd;},a363_0x3cc7(_0x5be324,_0x3021e0);}const a363_0x265198=a363_0x3cc7;(function(_0x203ed4,_0x290726){const _0x54dd21=a363_0x3cc7,_0x2d5012=_0x203ed4();while(!![]){try{const _0x17de5d=parseInt(_0x54dd21(0x197))/0x1+parseInt(_0x54dd21(0x18c))/0x2+-parseInt(_0x54dd21(0x184))/0x3+-parseInt(_0x54dd21(0x189))/0x4*(parseInt(_0x54dd21(0x1af))/0x5)+parseInt(_0x54dd21(0x17b))/0x6*(parseInt(_0x54dd21(0x1a1))/0x7)+parseInt(_0x54dd21(0x1ae))/0x8*(-parseInt(_0x54dd21(0x198))/0x9)+-parseInt(_0x54dd21(0x1a7))/0xa*(-parseInt(_0x54dd21(0x18e))/0xb);if(_0x17de5d===_0x290726)break;else _0x2d5012['push'](_0x2d5012['shift']());}catch(_0x2167b1){_0x2d5012['push'](_0x2d5012['shift']());}}}(a363_0x41c9,0x6b7fd));const a363_0x3a2eb0=(function(){let _0x18f754=!![];return function(_0x199a26,_0x5acc84){const _0xe83248=_0x18f754?function(){const _0x404e68=a363_0x3cc7;if(_0x5acc84){const _0x413bde=_0x5acc84[_0x404e68(0x1aa)](_0x199a26,arguments);return _0x5acc84=null,_0x413bde;}}:function(){};return _0x18f754=![],_0xe83248;};}()),a363_0x167b35=a363_0x3a2eb0(this,function(){const _0x14dfb3=a363_0x3cc7;return a363_0x167b35[_0x14dfb3(0x1a2)]()[_0x14dfb3(0x180)]('(((.+)+)+)+$')['toString']()[_0x14dfb3(0x19d)](a363_0x167b35)[_0x14dfb3(0x180)](_0x14dfb3(0x1b2));});a363_0x167b35();function a363_0x41c9(){const _0x409cf4=['(((.+)+)+)+$','get','log','JOB_STATUS_TIMEOUT','522OfBSdQ','chunkArray','SCHEDULED','errors','responseStatus','search','../enums/status.enums','status','data','1251363MbyNnJ','push','VeevaResponseStatus','all','DELETE_RECORDS_LIMIT','416ppTXWW','deleteVeevaObjectRecords','VeevaJobStatus','287186JnaWTp','executeManyVQL','209evIwwW','post','Cannot\x20retrieve\x20job.\x20Job\x20status:\x20','length','getJobResult','Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.','__esModule','Creating\x20','map','169168eviPIy','927fWLuZr','SUCCESS','VeevaError','CREATE_RECORDS_LIMIT','Unknown\x20Job\x20status\x20:\x20\x27','constructor','executeVQL','createVeevaObjectRecords','../../shared/utils','17129ItHBkf','toString','\x20records.','Deleting\x20','VeevaService','QUEUED','734780YBEhDj','RUNNING','QUEUEING','apply','_logger','../classes/errors/veeva-error','_connection','62736DGQLMo','12335qgHTCB','\x20records','CANCELLED'];a363_0x41c9=function(){return _0x409cf4;};return a363_0x41c9();}'use strict';Object['defineProperty'](exports,a363_0x265198(0x194),{'value':!![]}),exports[a363_0x265198(0x1a5)]=void 0x0;const utils_1=require(a363_0x265198(0x1a0)),status_enums_1=require(a363_0x265198(0x181)),veeva_error_1=require(a363_0x265198(0x1ac));class VeevaService{constructor({connection:_0x2ed03b,logger:_0x4f56b0}){const _0x5f5d2d=a363_0x265198;this[_0x5f5d2d(0x1ad)]=_0x2ed03b,this['_logger']=_0x4f56b0;}async[a363_0x265198(0x18d)](_0x121025){const _0x417adc=a363_0x265198,_0x19b2d1=[];for(const _0x5c2b86 of _0x121025){_0x19b2d1['push'](this[_0x417adc(0x19e)](_0x5c2b86));}const _0x8074e4=await Promise[_0x417adc(0x187)](_0x19b2d1);return _0x8074e4['flat']();}async[a363_0x265198(0x19e)](_0x98bd2c){const _0x569384=a363_0x265198,_0x150b4f=[];do{const _0x5cd8ab=await this[_0x569384(0x1ad)][_0x569384(0x1b3)](_0x98bd2c),_0x24d559=_0x5cd8ab[_0x569384(0x183)];if(_0x24d559[_0x569384(0x17f)]===status_enums_1[_0x569384(0x186)][_0x569384(0x199)]){const {responseDetails:{next_page:_0x41fbfd},data:_0x3d7c5a}=_0x24d559;_0x98bd2c=_0x41fbfd||null,_0x150b4f[_0x569384(0x185)](..._0x3d7c5a);}else throw new veeva_error_1['VeevaError'](_0x24d559[_0x569384(0x17e)]);}while(_0x98bd2c);return _0x150b4f;}async[a363_0x265198(0x19f)](_0x26c077,_0x1a6dfc){const _0x2d8436=a363_0x265198,_0x4adfc1=[],_0x4fedb8=(0x0,utils_1[_0x2d8436(0x17c)])(_0x1a6dfc,VeevaService['CREATE_RECORDS_LIMIT']),_0x13918b=_0x1a6dfc[_0x2d8436(0x191)];let _0x2c96a3=0x0;for(const _0x3fd4b3 of _0x4fedb8){_0x2c96a3+=_0x3fd4b3[_0x2d8436(0x191)],this[_0x2d8436(0x1ab)][_0x2d8436(0x179)](_0x2d8436(0x195)+_0x2c96a3+'/'+_0x13918b+_0x2d8436(0x1a3));const _0x150eeb=await this[_0x2d8436(0x1ad)][_0x2d8436(0x18f)](_0x26c077,_0x3fd4b3),_0x2138e4=_0x150eeb['data'];if(_0x2138e4['responseStatus']===status_enums_1[_0x2d8436(0x186)][_0x2d8436(0x199)])for(const {responseStatus:_0x1c439a,data:_0x49b9fc}of _0x2138e4['data']){if(_0x1c439a===status_enums_1[_0x2d8436(0x186)]['SUCCESS'])_0x4adfc1[_0x2d8436(0x185)](_0x49b9fc['id']);else throw new veeva_error_1['VeevaError'](_0x2138e4[_0x2d8436(0x17e)]);}else throw new veeva_error_1['VeevaError'](_0x2138e4[_0x2d8436(0x17e)]);}return _0x4adfc1;}async[a363_0x265198(0x18a)](_0x51c2ea,_0x23d0ca){const _0x205778=a363_0x265198,_0x356977=_0x23d0ca[_0x205778(0x196)](_0x15158e=>({'id':_0x15158e})),_0x35e4e6=(0x0,utils_1['chunkArray'])(_0x356977,VeevaService['DELETE_RECORDS_LIMIT']);let _0xfdcb2c=0x0;for(const _0x32d91a of _0x35e4e6){_0xfdcb2c+=_0x32d91a[_0x205778(0x191)],this[_0x205778(0x1ab)][_0x205778(0x179)](_0x205778(0x1a4)+_0xfdcb2c+'/'+_0x23d0ca[_0x205778(0x191)]+_0x205778(0x1b0));const {data:_0x511f3e}=await this['_connection']['delete'](_0x51c2ea,{'headers':{'Content-Type':'application/json'},'data':_0x32d91a});if(_0x511f3e[_0x205778(0x17f)]===status_enums_1[_0x205778(0x186)][_0x205778(0x199)])for(const _0x5a6a60 of _0x511f3e['data']){const {responseStatus:_0x37034d,errors:_0x3ead67}=_0x5a6a60;if(_0x37034d!==status_enums_1[_0x205778(0x186)][_0x205778(0x199)])throw new veeva_error_1['VeevaError'](_0x3ead67);}else throw new veeva_error_1['VeevaError'](_0x511f3e[_0x205778(0x17e)]);}}async[a363_0x265198(0x192)](_0x17103b){const _0x5196ca=a363_0x265198,_0x2e9c2a=[];do{this[_0x5196ca(0x1ab)]['log'](_0x5196ca(0x193)),await(0x0,utils_1['sleep'])(VeevaService[_0x5196ca(0x17a)]);const _0x456b3e=[];for(const _0x61d4c2 of _0x17103b){const {data:_0x91c0db}=await this[_0x5196ca(0x1ad)]['get'](_0x61d4c2);if(_0x91c0db[_0x5196ca(0x17f)]===status_enums_1['VeevaResponseStatus'][_0x5196ca(0x199)]){const {data:_0x2c73b1}=_0x91c0db;switch(_0x2c73b1[_0x5196ca(0x182)]){case status_enums_1[_0x5196ca(0x18b)]['SUCCESS']:case status_enums_1[_0x5196ca(0x18b)]['ERRORS_ENCOUNTERED']:_0x2e9c2a[_0x5196ca(0x185)](_0x2c73b1);break;case status_enums_1[_0x5196ca(0x18b)][_0x5196ca(0x1a9)]:case status_enums_1[_0x5196ca(0x18b)][_0x5196ca(0x1b1)]:case status_enums_1[_0x5196ca(0x18b)]['MISSED_SCHEDULE']:throw new Error(_0x5196ca(0x190)+_0x2c73b1['status']);case status_enums_1[_0x5196ca(0x18b)][_0x5196ca(0x1a6)]:case status_enums_1['VeevaJobStatus'][_0x5196ca(0x1a8)]:case status_enums_1[_0x5196ca(0x18b)][_0x5196ca(0x17d)]:_0x456b3e[_0x5196ca(0x185)](_0x61d4c2);break;default:throw new Error(_0x5196ca(0x19c)+_0x2c73b1['status']+'\x27');}}else throw new veeva_error_1[(_0x5196ca(0x19a))](_0x91c0db['errors']);}_0x17103b=_0x456b3e;}while(_0x17103b[_0x5196ca(0x191)]);return _0x2e9c2a;}}exports[a363_0x265198(0x1a5)]=VeevaService,VeevaService[a363_0x265198(0x17a)]=0x2710,VeevaService[a363_0x265198(0x19b)]=0x1f4,VeevaService[a363_0x265198(0x188)]=0x1f4;