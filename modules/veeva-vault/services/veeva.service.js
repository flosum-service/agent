const a313_0xd78262=a313_0x521c;(function(_0x4868e0,_0x108b26){const _0x4c84da=a313_0x521c,_0x5c2be4=_0x4868e0();while(!![]){try{const _0x54ddc4=-parseInt(_0x4c84da(0x1ea))/0x1*(parseInt(_0x4c84da(0x1e5))/0x2)+-parseInt(_0x4c84da(0x1f3))/0x3+parseInt(_0x4c84da(0x1f5))/0x4*(parseInt(_0x4c84da(0x1d9))/0x5)+parseInt(_0x4c84da(0x200))/0x6*(parseInt(_0x4c84da(0x204))/0x7)+parseInt(_0x4c84da(0x1fe))/0x8+-parseInt(_0x4c84da(0x1f4))/0x9*(-parseInt(_0x4c84da(0x1f6))/0xa)+-parseInt(_0x4c84da(0x1e7))/0xb;if(_0x54ddc4===_0x108b26)break;else _0x5c2be4['push'](_0x5c2be4['shift']());}catch(_0x28b598){_0x5c2be4['push'](_0x5c2be4['shift']());}}}(a313_0x5693,0x4aabc));const a313_0x1ab720=(function(){let _0x29c250=!![];return function(_0x593e75,_0x1d1dde){const _0x5bc974=_0x29c250?function(){const _0x215155=a313_0x521c;if(_0x1d1dde){const _0x1c26af=_0x1d1dde[_0x215155(0x1fc)](_0x593e75,arguments);return _0x1d1dde=null,_0x1c26af;}}:function(){};return _0x29c250=![],_0x5bc974;};}()),a313_0x230a33=a313_0x1ab720(this,function(){const _0x43a79b=a313_0x521c;return a313_0x230a33['toString']()[_0x43a79b(0x1e3)](_0x43a79b(0x1e9))[_0x43a79b(0x1f0)]()[_0x43a79b(0x20a)](a313_0x230a33)[_0x43a79b(0x1e3)](_0x43a79b(0x1e9));});a313_0x230a33();'use strict';function a313_0x5693(){const _0x55899d=['constructor','SUCCESS','VeevaService','push','RUNNING','delete','length','42115hGsnRi','createVeevaObjectRecords','responseStatus','JOB_STATUS_TIMEOUT','errors','Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.','get','log','CREATE_RECORDS_LIMIT','Unknown\x20Job\x20status\x20:\x20\x27','search','../../shared/utils','319946RHJSRv','CANCELLED','10486047lVPwRS','MISSED_SCHEDULE','(((.+)+)+)+$','1dhhxwQ','VeevaResponseStatus','VeevaJobStatus','executeVQL','chunkArray','QUEUEING','toString','application/json','post','98514iDfTXC','153UywcAu','212LoOqBt','275800OQqLXO','executeManyVQL','../enums/status.enums','status','defineProperty','DELETE_RECORDS_LIMIT','apply','../classes/errors/veeva-error','3159376yvRpff','VeevaError','850434QshGuE','ERRORS_ENCOUNTERED','SCHEDULED','deleteVeevaObjectRecords','7OJyUjt','data','Creating\x20','\x20records','\x20records.','__esModule'];a313_0x5693=function(){return _0x55899d;};return a313_0x5693();}function a313_0x521c(_0x2ac01e,_0x2eb443){const _0x68ecdb=a313_0x5693();return a313_0x521c=function(_0x230a33,_0x1ab720){_0x230a33=_0x230a33-0x1d3;let _0x569351=_0x68ecdb[_0x230a33];return _0x569351;},a313_0x521c(_0x2ac01e,_0x2eb443);}Object[a313_0xd78262(0x1fa)](exports,a313_0xd78262(0x209),{'value':!![]}),exports['VeevaService']=void 0x0;const utils_1=require(a313_0xd78262(0x1e4)),status_enums_1=require(a313_0xd78262(0x1f8)),veeva_error_1=require(a313_0xd78262(0x1fd));class VeevaService{static async[a313_0xd78262(0x1f7)](_0x2e14cb,_0x5d65bd){const _0x44a73d=a313_0xd78262,_0x46eef0=[];for(const _0x696c44 of _0x2e14cb){_0x46eef0['push'](this[_0x44a73d(0x1ed)](_0x696c44,_0x5d65bd));}const _0x55261c=await Promise['all'](_0x46eef0);return _0x55261c['flat']();}static async[a313_0xd78262(0x1ed)](_0x3f895f,_0x58085a){const _0x54938f=a313_0xd78262,_0x460305=[];do{const _0x47bbaf=await _0x58085a[_0x54938f(0x1df)](_0x3f895f),_0x4aec21=_0x47bbaf[_0x54938f(0x205)];if(_0x4aec21['responseStatus']===status_enums_1[_0x54938f(0x1eb)]['SUCCESS']){const {responseDetails:{next_page:_0x21e156},data:_0x4000bb}=_0x4aec21;_0x3f895f=_0x21e156||null,_0x460305[_0x54938f(0x1d5)](..._0x4000bb);}else throw new veeva_error_1[(_0x54938f(0x1ff))](_0x4aec21['errors']);}while(_0x3f895f);return _0x460305;}static async[a313_0xd78262(0x1da)](_0x16ff5b,_0x5c2bd0,_0x5289f4,_0x4b52ae){const _0x4b47fd=a313_0xd78262,_0x59ee0e=[],_0x1961d3=(0x0,utils_1[_0x4b47fd(0x1ee)])(_0x5289f4,VeevaService['CREATE_RECORDS_LIMIT']),_0x12d3a6=_0x5289f4['length'];let _0xadfcd1=0x0;for(const _0x3ecffa of _0x1961d3){_0xadfcd1+=_0x3ecffa[_0x4b47fd(0x1d8)],_0x4b52ae[_0x4b47fd(0x1e0)](_0x4b47fd(0x206)+_0xadfcd1+'/'+_0x12d3a6+_0x4b47fd(0x208));const _0x5488ad=await _0x5c2bd0[_0x4b47fd(0x1f2)](_0x16ff5b,_0x3ecffa),_0x1dde27=_0x5488ad['data'];if(_0x1dde27[_0x4b47fd(0x1db)]===status_enums_1[_0x4b47fd(0x1eb)][_0x4b47fd(0x1d3)])for(const {responseStatus:_0x2f13c0,data:_0x5309b1}of _0x1dde27[_0x4b47fd(0x205)]){if(_0x2f13c0===status_enums_1[_0x4b47fd(0x1eb)][_0x4b47fd(0x1d3)])_0x59ee0e['push'](_0x5309b1['id']);else throw new veeva_error_1['VeevaError'](_0x1dde27['errors']);}else throw new veeva_error_1[(_0x4b47fd(0x1ff))](_0x1dde27[_0x4b47fd(0x1dd)]);}return _0x59ee0e;}static async[a313_0xd78262(0x203)](_0xbe7d1b,_0x4d1964,_0x29a493,_0x25feac){const _0x5dbf8f=a313_0xd78262,_0x5ee02d=_0x29a493['map'](_0x237868=>({'id':_0x237868})),_0x3675b8=(0x0,utils_1['chunkArray'])(_0x5ee02d,VeevaService['DELETE_RECORDS_LIMIT']);let _0x4abf2b=0x0;for(const _0x2db113 of _0x3675b8){_0x4abf2b+=_0x2db113[_0x5dbf8f(0x1d8)],_0x25feac[_0x5dbf8f(0x1e0)]('Deleting\x20'+_0x4abf2b+'/'+_0x29a493['length']+_0x5dbf8f(0x207));const {data:_0xfb3983}=await _0x4d1964[_0x5dbf8f(0x1d7)](_0xbe7d1b,{'headers':{'Content-Type':_0x5dbf8f(0x1f1)},'data':_0x2db113});if(_0xfb3983[_0x5dbf8f(0x1db)]===status_enums_1[_0x5dbf8f(0x1eb)][_0x5dbf8f(0x1d3)])for(const _0x5a6a27 of _0xfb3983[_0x5dbf8f(0x205)]){const {responseStatus:_0x4a9420,errors:_0x580c32}=_0x5a6a27;if(_0x4a9420!==status_enums_1[_0x5dbf8f(0x1eb)]['SUCCESS'])throw new veeva_error_1[(_0x5dbf8f(0x1ff))](_0x580c32);}else throw new veeva_error_1[(_0x5dbf8f(0x1ff))](_0xfb3983[_0x5dbf8f(0x1dd)]);}}static async['getJobResult'](_0xa8fc53,_0x3c234d,_0x17a438){const _0x4303a2=a313_0xd78262,_0x3017ae=[];do{_0x17a438[_0x4303a2(0x1e0)](_0x4303a2(0x1de)),await(0x0,utils_1['sleep'])(VeevaService[_0x4303a2(0x1dc)]);const _0x19677c=[];for(const _0x3622d3 of _0xa8fc53){const {data:_0x2b6b36}=await _0x3c234d['get'](_0x3622d3);if(_0x2b6b36[_0x4303a2(0x1db)]===status_enums_1['VeevaResponseStatus'][_0x4303a2(0x1d3)]){const {data:_0x3c1464}=_0x2b6b36;switch(_0x3c1464[_0x4303a2(0x1f9)]){case status_enums_1[_0x4303a2(0x1ec)]['SUCCESS']:case status_enums_1[_0x4303a2(0x1ec)][_0x4303a2(0x201)]:_0x3017ae[_0x4303a2(0x1d5)](_0x3c1464);break;case status_enums_1[_0x4303a2(0x1ec)][_0x4303a2(0x1ef)]:case status_enums_1[_0x4303a2(0x1ec)][_0x4303a2(0x1e6)]:case status_enums_1['VeevaJobStatus'][_0x4303a2(0x1e8)]:throw new Error('Cannot\x20retrieve\x20job.\x20Job\x20status:\x20'+_0x3c1464[_0x4303a2(0x1f9)]);case status_enums_1[_0x4303a2(0x1ec)]['QUEUED']:case status_enums_1[_0x4303a2(0x1ec)][_0x4303a2(0x1d6)]:case status_enums_1[_0x4303a2(0x1ec)][_0x4303a2(0x202)]:_0x19677c[_0x4303a2(0x1d5)](_0x3622d3);break;default:throw new Error(_0x4303a2(0x1e2)+_0x3c1464['status']+'\x27');}}else throw new veeva_error_1[(_0x4303a2(0x1ff))](_0x2b6b36['errors']);}_0xa8fc53=_0x19677c;}while(_0xa8fc53[_0x4303a2(0x1d8)]);return _0x3017ae;}}exports[a313_0xd78262(0x1d4)]=VeevaService,VeevaService['JOB_STATUS_TIMEOUT']=0x2710,VeevaService[a313_0xd78262(0x1e1)]=0x1f4,VeevaService[a313_0xd78262(0x1fb)]=0x1f4;