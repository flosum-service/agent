const a340_0x37ca3b=a340_0x4a8e;function a340_0x4687(){const _0x4b0fb6=['Unknown\x20Job\x20status\x20:\x20\x27','2456127VQmfld','MISSED_SCHEDULE','SCHEDULED','defineProperty','VeevaJobStatus','\x20records','delete','toString','../enums/status.enums','deleteVeevaObjectRecords','../classes/errors/veeva-error','getJobResult','CANCELLED','\x20records.','responseStatus','chunkArray','Creating\x20','map','JOB_STATUS_TIMEOUT','ERRORS_ENCOUNTERED','application/json','status','../../shared/utils','post','SUCCESS','9ryUIhz','406592NSQgKp','VeevaService','RUNNING','sleep','5250iysLFA','Cannot\x20retrieve\x20job.\x20Job\x20status:\x20','search','_logger','QUEUEING','flat','Deleting\x20','executeVQL','VeevaResponseStatus','14200dTpqmy','log','get','length','VeevaError','data','push','executeManyVQL','8668224LJoMpG','(((.+)+)+)+$','1500476LuCcmv','282301PKdFeb','__esModule','_connection','QUEUED','DELETE_RECORDS_LIMIT','CREATE_RECORDS_LIMIT','70Qrxons','constructor','8801380usRnYr','apply','errors','all'];a340_0x4687=function(){return _0x4b0fb6;};return a340_0x4687();}(function(_0x1793b7,_0x391bff){const _0x52a85c=a340_0x4a8e,_0x22a410=_0x1793b7();while(!![]){try{const _0x1a04f6=parseInt(_0x52a85c(0x1ef))/0x1+-parseInt(_0x52a85c(0x1d7))/0x2+-parseInt(_0x52a85c(0x1d6))/0x3*(-parseInt(_0x52a85c(0x1ee))/0x4)+parseInt(_0x52a85c(0x1b8))/0x5+-parseInt(_0x52a85c(0x1ec))/0x6+parseInt(_0x52a85c(0x1db))/0x7*(parseInt(_0x52a85c(0x1e4))/0x8)+parseInt(_0x52a85c(0x1bd))/0x9*(-parseInt(_0x52a85c(0x1b6))/0xa);if(_0x1a04f6===_0x391bff)break;else _0x22a410['push'](_0x22a410['shift']());}catch(_0x3a2ef9){_0x22a410['push'](_0x22a410['shift']());}}}(a340_0x4687,0xe5b3f));const a340_0x2cd60d=(function(){let _0x4e05b1=!![];return function(_0x4c2c4b,_0xf53a62){const _0x50986b=_0x4e05b1?function(){const _0x14106f=a340_0x4a8e;if(_0xf53a62){const _0x57c3d5=_0xf53a62[_0x14106f(0x1b9)](_0x4c2c4b,arguments);return _0xf53a62=null,_0x57c3d5;}}:function(){};return _0x4e05b1=![],_0x50986b;};}()),a340_0x2c90b4=a340_0x2cd60d(this,function(){const _0x23f430=a340_0x4a8e;return a340_0x2c90b4[_0x23f430(0x1c4)]()[_0x23f430(0x1dd)](_0x23f430(0x1ed))['toString']()[_0x23f430(0x1b7)](a340_0x2c90b4)[_0x23f430(0x1dd)](_0x23f430(0x1ed));});a340_0x2c90b4();'use strict';Object[a340_0x37ca3b(0x1c0)](exports,a340_0x37ca3b(0x1b1),{'value':!![]}),exports[a340_0x37ca3b(0x1d8)]=void 0x0;const utils_1=require(a340_0x37ca3b(0x1d3)),status_enums_1=require(a340_0x37ca3b(0x1c5)),veeva_error_1=require(a340_0x37ca3b(0x1c7));function a340_0x4a8e(_0x542c7a,_0x5395b8){const _0x43a022=a340_0x4687();return a340_0x4a8e=function(_0x2c90b4,_0x2cd60d){_0x2c90b4=_0x2c90b4-0x1b1;let _0x4687ef=_0x43a022[_0x2c90b4];return _0x4687ef;},a340_0x4a8e(_0x542c7a,_0x5395b8);}class VeevaService{constructor({connection:_0x34156c,logger:_0x4f3d77}){const _0x3e58ee=a340_0x37ca3b;this[_0x3e58ee(0x1b2)]=_0x34156c,this[_0x3e58ee(0x1de)]=_0x4f3d77;}async[a340_0x37ca3b(0x1eb)](_0x4ed6c5){const _0x3bcac4=a340_0x37ca3b,_0x3305db=[];for(const _0x8c1acf of _0x4ed6c5){_0x3305db['push'](this[_0x3bcac4(0x1e2)](_0x8c1acf));}const _0x354317=await Promise[_0x3bcac4(0x1bb)](_0x3305db);return _0x354317[_0x3bcac4(0x1e0)]();}async['executeVQL'](_0x560f5f){const _0x261a92=a340_0x37ca3b,_0x509867=[];do{const _0xbfae49=await this[_0x261a92(0x1b2)][_0x261a92(0x1e6)](_0x560f5f),_0x4cf32d=_0xbfae49[_0x261a92(0x1e9)];if(_0x4cf32d[_0x261a92(0x1cb)]===status_enums_1[_0x261a92(0x1e3)][_0x261a92(0x1d5)]){const {responseDetails:{next_page:_0x3e9ff9},data:_0x5dbd42}=_0x4cf32d;_0x560f5f=_0x3e9ff9||null,_0x509867[_0x261a92(0x1ea)](..._0x5dbd42);}else throw new veeva_error_1[(_0x261a92(0x1e8))](_0x4cf32d[_0x261a92(0x1ba)]);}while(_0x560f5f);return _0x509867;}async['createVeevaObjectRecords'](_0x22626e,_0x4690f2){const _0x14f537=a340_0x37ca3b,_0x47bf0f=[],_0x3b1f8c=(0x0,utils_1[_0x14f537(0x1cc)])(_0x4690f2,VeevaService['CREATE_RECORDS_LIMIT']),_0x8be76=_0x4690f2[_0x14f537(0x1e7)];let _0x189694=0x0;for(const _0x1d90e2 of _0x3b1f8c){_0x189694+=_0x1d90e2[_0x14f537(0x1e7)],this[_0x14f537(0x1de)]['log'](_0x14f537(0x1cd)+_0x189694+'/'+_0x8be76+_0x14f537(0x1ca));const _0x9e89dd=await this[_0x14f537(0x1b2)][_0x14f537(0x1d4)](_0x22626e,_0x1d90e2),_0x5af4d5=_0x9e89dd[_0x14f537(0x1e9)];if(_0x5af4d5['responseStatus']===status_enums_1['VeevaResponseStatus'][_0x14f537(0x1d5)])for(const {responseStatus:_0x1e7b33,data:_0x43870b}of _0x5af4d5['data']){if(_0x1e7b33===status_enums_1['VeevaResponseStatus'][_0x14f537(0x1d5)])_0x47bf0f[_0x14f537(0x1ea)](_0x43870b['id']);else throw new veeva_error_1[(_0x14f537(0x1e8))](_0x5af4d5[_0x14f537(0x1ba)]);}else throw new veeva_error_1[(_0x14f537(0x1e8))](_0x5af4d5[_0x14f537(0x1ba)]);}return _0x47bf0f;}async[a340_0x37ca3b(0x1c6)](_0x1ef263,_0x5cfc9a){const _0x31141d=a340_0x37ca3b,_0x6b1caa=_0x5cfc9a[_0x31141d(0x1ce)](_0x551236=>({'id':_0x551236})),_0x19d709=(0x0,utils_1['chunkArray'])(_0x6b1caa,VeevaService['DELETE_RECORDS_LIMIT']);let _0x177909=0x0;for(const _0x5f21ff of _0x19d709){_0x177909+=_0x5f21ff[_0x31141d(0x1e7)],this[_0x31141d(0x1de)][_0x31141d(0x1e5)](_0x31141d(0x1e1)+_0x177909+'/'+_0x5cfc9a[_0x31141d(0x1e7)]+_0x31141d(0x1c2));const {data:_0x11dc8f}=await this['_connection'][_0x31141d(0x1c3)](_0x1ef263,{'headers':{'Content-Type':_0x31141d(0x1d1)},'data':_0x5f21ff});if(_0x11dc8f[_0x31141d(0x1cb)]===status_enums_1[_0x31141d(0x1e3)][_0x31141d(0x1d5)])for(const _0x55cf8a of _0x11dc8f[_0x31141d(0x1e9)]){const {responseStatus:_0x400531,errors:_0x4a842d}=_0x55cf8a;if(_0x400531!==status_enums_1[_0x31141d(0x1e3)][_0x31141d(0x1d5)])throw new veeva_error_1['VeevaError'](_0x4a842d);}else throw new veeva_error_1[(_0x31141d(0x1e8))](_0x11dc8f[_0x31141d(0x1ba)]);}}async[a340_0x37ca3b(0x1c8)](_0x10ed7e){const _0x4cddf8=a340_0x37ca3b,_0x44fd54=[];do{this[_0x4cddf8(0x1de)][_0x4cddf8(0x1e5)]('Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.'),await(0x0,utils_1[_0x4cddf8(0x1da)])(VeevaService['JOB_STATUS_TIMEOUT']);const _0x522a5d=[];for(const _0x3a9de0 of _0x10ed7e){const {data:_0x299d9c}=await this[_0x4cddf8(0x1b2)][_0x4cddf8(0x1e6)](_0x3a9de0);if(_0x299d9c[_0x4cddf8(0x1cb)]===status_enums_1[_0x4cddf8(0x1e3)][_0x4cddf8(0x1d5)]){const {data:_0x142467}=_0x299d9c;switch(_0x142467[_0x4cddf8(0x1d2)]){case status_enums_1['VeevaJobStatus'][_0x4cddf8(0x1d5)]:case status_enums_1[_0x4cddf8(0x1c1)][_0x4cddf8(0x1d0)]:_0x44fd54['push'](_0x142467);break;case status_enums_1[_0x4cddf8(0x1c1)][_0x4cddf8(0x1df)]:case status_enums_1[_0x4cddf8(0x1c1)][_0x4cddf8(0x1c9)]:case status_enums_1[_0x4cddf8(0x1c1)][_0x4cddf8(0x1be)]:throw new Error(_0x4cddf8(0x1dc)+_0x142467[_0x4cddf8(0x1d2)]);case status_enums_1[_0x4cddf8(0x1c1)][_0x4cddf8(0x1b3)]:case status_enums_1['VeevaJobStatus'][_0x4cddf8(0x1d9)]:case status_enums_1[_0x4cddf8(0x1c1)][_0x4cddf8(0x1bf)]:_0x522a5d[_0x4cddf8(0x1ea)](_0x3a9de0);break;default:throw new Error(_0x4cddf8(0x1bc)+_0x142467['status']+'\x27');}}else throw new veeva_error_1[(_0x4cddf8(0x1e8))](_0x299d9c['errors']);}_0x10ed7e=_0x522a5d;}while(_0x10ed7e['length']);return _0x44fd54;}}exports[a340_0x37ca3b(0x1d8)]=VeevaService,VeevaService[a340_0x37ca3b(0x1cf)]=0x2710,VeevaService[a340_0x37ca3b(0x1b5)]=0x1f4,VeevaService[a340_0x37ca3b(0x1b4)]=0x1f4;