const a72_0x84f2c4=a72_0x19bb;(function(_0x484d3c,_0x173d07){const _0xb01c=a72_0x19bb,_0x1807c7=_0x484d3c();while(!![]){try{const _0x352acb=-parseInt(_0xb01c(0x13e))/0x1+parseInt(_0xb01c(0xf9))/0x2+parseInt(_0xb01c(0xfb))/0x3+parseInt(_0xb01c(0x11f))/0x4+parseInt(_0xb01c(0x136))/0x5+parseInt(_0xb01c(0x13d))/0x6*(-parseInt(_0xb01c(0x10a))/0x7)+-parseInt(_0xb01c(0x10e))/0x8;if(_0x352acb===_0x173d07)break;else _0x1807c7['push'](_0x1807c7['shift']());}catch(_0x59d385){_0x1807c7['push'](_0x1807c7['shift']());}}}(a72_0x607b,0x7a024));const a72_0x4b4256=(function(){let _0x2751cf=!![];return function(_0x38705d,_0x3a6b52){const _0x52447c=_0x2751cf?function(){if(_0x3a6b52){const _0x402439=_0x3a6b52['apply'](_0x38705d,arguments);return _0x3a6b52=null,_0x402439;}}:function(){};return _0x2751cf=![],_0x52447c;};}()),a72_0x4f19ad=a72_0x4b4256(this,function(){const _0x4f7500=a72_0x19bb;return a72_0x4f19ad['toString']()['search'](_0x4f7500(0x139))['toString']()[_0x4f7500(0x126)](a72_0x4f19ad)[_0x4f7500(0x112)]('(((.+)+)+)+$');});a72_0x4f19ad();'use strict';function a72_0x19bb(_0x3cc078,_0x59f781){const _0xcd399c=a72_0x607b();return a72_0x19bb=function(_0x4f19ad,_0x4b4256){_0x4f19ad=_0x4f19ad-0xf8;let _0x607b24=_0xcd399c[_0x4f19ad];return _0x607b24;},a72_0x19bb(_0x3cc078,_0x59f781);}var __importDefault=this&&this[a72_0x84f2c4(0x118)]||function(_0x2c10d1){const _0x285f25=a72_0x84f2c4;return _0x2c10d1&&_0x2c10d1[_0x285f25(0x11c)]?_0x2c10d1:{'default':_0x2c10d1};};Object[a72_0x84f2c4(0x106)](exports,a72_0x84f2c4(0x11c),{'value':!![]}),exports[a72_0x84f2c4(0x10d)]=void 0x0;const promises_1=require(a72_0x84f2c4(0x110)),salesforce_1=require(a72_0x84f2c4(0xff)),steps_creator_1=require(a72_0x84f2c4(0x12c)),logger_enums_1=require('./enums/logger.enums'),logger_details_1=require(a72_0x84f2c4(0x133)),logger_job_state_1=require('./classes/logger/logger-job-state'),job_1=require(a72_0x84f2c4(0x111)),path_1=__importDefault(require(a72_0x84f2c4(0x140))),auth_manager_1=require(a72_0x84f2c4(0x125)),constants_1=require(a72_0x84f2c4(0x123)),job_detail_1=require(a72_0x84f2c4(0x143));class MaskingJob{constructor(){const _0x2b0d7f=a72_0x84f2c4;this[_0x2b0d7f(0x141)]=![];}async[a72_0x84f2c4(0x10c)](){const _0xc53e50=a72_0x84f2c4,{objectRules:_0x526b08}=this['_maskingManifest'];this[_0xc53e50(0x12a)]=new salesforce_1[(_0xc53e50(0x11d))](this[_0xc53e50(0x117)](_0x526b08));}async[a72_0x84f2c4(0x13b)](){const _0x283bea=a72_0x84f2c4;job_detail_1['systemLogger']['log']('Start\x20Masking\x20Process'),this[_0x283bea(0x109)]['log'](_0x283bea(0x10b));const {objectRules:_0x34baf7,libraries:_0x2b9d7d}=this[_0x283bea(0x103)];this[_0x283bea(0x142)]=await new steps_creator_1[(_0x283bea(0x132))]({'loggerDetails':this[_0x283bea(0x109)],'loggerJobState':this[_0x283bea(0xfc)],'libraries':_0x2b9d7d,'objectRules':_0x34baf7,'request':this[_0x283bea(0x12f)]})[_0x283bea(0x115)]();for(const _0x42d776 of this['_steps']){await _0x42d776[_0x283bea(0xfd)]();}}[a72_0x84f2c4(0x117)](_0x5adfee){const _0xb5dccd=a72_0x84f2c4,_0x3c09ae=[],_0x4e6912=[],_0x57405a=[],_0x4ad9ff=[];for(const _0x5bfd7f in _0x5adfee){const {isDisableProcessBuilder:_0x508df6,isDisableTrigger:_0x5c439d,isDisableValidationRule:_0x27b721,isDisableWorkflow:_0x5548b6}=_0x5adfee[_0x5bfd7f][_0xb5dccd(0x128)];_0x508df6&&_0x57405a[_0xb5dccd(0x135)](_0x5bfd7f),_0x5c439d&&_0x3c09ae[_0xb5dccd(0x135)](_0x5bfd7f),_0x27b721&&_0x4ad9ff[_0xb5dccd(0x135)](_0x5bfd7f),_0x5548b6&&_0x4e6912[_0xb5dccd(0x135)](_0x5bfd7f);}return{'instance':this[_0xb5dccd(0x12f)],'saveSourceMetadataBackup':this['saveSourceAutomationProcessesBackup'],'triggersObjects':_0x3c09ae,'workflowsObjects':_0x4e6912,'processBuilderObjects':_0x57405a,'validationRulesObjects':_0x4ad9ff};}async['disableAutomationProcess'](){const _0x5da34f=a72_0x84f2c4;job_detail_1[_0x5da34f(0x13a)]['log']('Disable\x20automation\x20process'),this[_0x5da34f(0x109)][_0x5da34f(0x121)]('Disable\x20automation\x20process'),await this[_0x5da34f(0x12a)]['disable']();}async[a72_0x84f2c4(0x131)](){const _0xbd79bb=a72_0x84f2c4;!this[_0xbd79bb(0x141)]&&(job_detail_1[_0xbd79bb(0x13a)][_0xbd79bb(0x121)](_0xbd79bb(0x122)),this[_0xbd79bb(0x109)][_0xbd79bb(0x121)]('Enable\x20automation\x20process'),await this[_0xbd79bb(0x12a)][_0xbd79bb(0x102)]()[_0xbd79bb(0x108)](_0x2686c0=>{const _0x4c5330=_0xbd79bb;this[_0x4c5330(0x141)]=!![];throw _0x2686c0;}));}async[a72_0x84f2c4(0x10f)](){const _0x1a72b1=a72_0x84f2c4,_0x1a1efe=await(0x0,promises_1[_0x1a72b1(0x134)])(path_1[_0x1a72b1(0x130)][_0x1a72b1(0xfa)](job_detail_1[_0x1a72b1(0x11e)],job_1[_0x1a72b1(0x138)]),{'encoding':_0x1a72b1(0x120)});return await(0x0,promises_1['rm'])(path_1[_0x1a72b1(0x130)][_0x1a72b1(0xfa)](job_detail_1['jobStorePath'],job_1[_0x1a72b1(0x138)]),{'recursive':!![],'force':!![]}),JSON[_0x1a72b1(0x104)](_0x1a1efe)[_0x1a72b1(0x13c)];}[a72_0x84f2c4(0x113)](_0x353579){const _0x4a6d3d=a72_0x84f2c4;return(0x0,promises_1[_0x4a6d3d(0x137)])(path_1[_0x4a6d3d(0x130)][_0x4a6d3d(0xfa)](job_detail_1[_0x4a6d3d(0x11e)],constants_1['AUTOMATION_PROCESS_METADATA_BACKUP_FILENAME']),Buffer[_0x4a6d3d(0x144)](_0x353579,_0x4a6d3d(0xfe)));}async[a72_0x84f2c4(0xfd)](){const _0x40f33b=a72_0x84f2c4;this[_0x40f33b(0x103)]=await this[_0x40f33b(0x10f)]();const {objectRules:_0x3e6c35,credentials:_0x510e8e}=this['_maskingManifest'];this[_0x40f33b(0x109)]=await new logger_details_1[(_0x40f33b(0x116))](job_detail_1[_0x40f33b(0x11e)],job_detail_1[_0x40f33b(0x12d)])['init'](),this['_loggerJobState']=await new logger_job_state_1[(_0x40f33b(0x12e))](job_detail_1['jobStorePath'],job_detail_1['jobId'])[_0x40f33b(0x114)](Object['keys'](_0x3e6c35));try{this[_0x40f33b(0xfc)]['setJobStatus'](logger_enums_1[_0x40f33b(0xf8)]['IN_PROGRESS']),this[_0x40f33b(0x12f)]=await salesforce_1['AxiosInstanceUtils']['create'](new auth_manager_1[(_0x40f33b(0x127))](_0x510e8e),[],{'headers':{'Accept-Encoding':_0x40f33b(0x11b)}}),await this[_0x40f33b(0x10c)](),await this[_0x40f33b(0x101)](),await this[_0x40f33b(0x13b)](),await this[_0x40f33b(0x131)](),this[_0x40f33b(0xfc)][_0x40f33b(0x11a)](logger_enums_1[_0x40f33b(0xf8)][_0x40f33b(0x129)]);}catch(_0x58461d){await this[_0x40f33b(0x131)]()[_0x40f33b(0x108)](_0xb48c88=>{const _0x394d37=_0x40f33b;job_detail_1[_0x394d37(0x13a)][_0x394d37(0x13f)](_0xb48c88[_0x394d37(0x105)]);}),this[_0x40f33b(0x109)][_0x40f33b(0x12b)](_0x58461d[_0x40f33b(0x105)]),this[_0x40f33b(0xfc)]['setJobStatus'](logger_enums_1[_0x40f33b(0xf8)]['FAILED']),this['_loggerJobState']['setJobError'](_0x58461d[_0x40f33b(0x105)]),job_detail_1[_0x40f33b(0x13a)][_0x40f33b(0x13f)](_0x58461d[_0x40f33b(0x105)]);}finally{this['_loggerDetails']['log'](_0x40f33b(0x124)),job_detail_1['systemLogger'][_0x40f33b(0x121)](_0x40f33b(0x124)),await this['_loggerJobState'][_0x40f33b(0x119)](),await this['_loggerDetails'][_0x40f33b(0x119)]();}}}function a72_0x607b(){const _0x5b1835=['path','_isEnableAutomationProcessError','_steps','./job-detail','from','JobStatus','1388292iRohCm','join','2013117XsVXkL','_loggerJobState','execute','base64','@flosum/salesforce','exit','disableAutomationProcess','enable','_maskingManifest','parse','message','defineProperty','then','catch','_loggerDetails','7kxwwmZ','Start\x20Masking\x20Process','initAutomationProcess','MaskingJob','7293160BtMMMF','getManifest','fs/promises','../../../constants/job','search','saveSourceAutomationProcessesBackup','init','create','LoggerDetails','getManagerAutomationProcessOptions','__importDefault','kill','setJobStatus','gzip','__esModule','ManagerAutomationProcess','jobStorePath','691424VKQToW','utf-8','log','Enable\x20automation\x20process','../constants','Finish\x20Masking\x20Process','../../shared/managers/auth.manager','constructor','AuthManager','disableAutomation','COMPLETED','_managerAutomationProcess','exception','./classes/step/steps-creator','jobId','LoggerJobState','_request','default','enableAutomationProcess','StepsCreator','./classes/logger/logger-details','readFile','push','3227650QPVhln','writeFile','MANIFEST_FILENAME','(((.+)+)+)+$','systemLogger','masking','details','1754574FnFKck','479749AediEQ','error'];a72_0x607b=function(){return _0x5b1835;};return a72_0x607b();}exports[a72_0x84f2c4(0x10d)]=MaskingJob,new MaskingJob()[a72_0x84f2c4(0xfd)]()[a72_0x84f2c4(0x107)](()=>process[a72_0x84f2c4(0x100)](0x0))[a72_0x84f2c4(0x108)](()=>process[a72_0x84f2c4(0x100)](0x1));