const a73_0x3ed2aa=a73_0xedc8;(function(_0x5e2b2f,_0x5795ab){const _0x2ee44e=a73_0xedc8,_0x597b8f=_0x5e2b2f();while(!![]){try{const _0x430db3=-parseInt(_0x2ee44e(0x7d))/0x1*(-parseInt(_0x2ee44e(0x86))/0x2)+parseInt(_0x2ee44e(0xa9))/0x3+-parseInt(_0x2ee44e(0x67))/0x4*(-parseInt(_0x2ee44e(0xb1))/0x5)+parseInt(_0x2ee44e(0x9f))/0x6+-parseInt(_0x2ee44e(0x77))/0x7+parseInt(_0x2ee44e(0x96))/0x8+-parseInt(_0x2ee44e(0xa6))/0x9;if(_0x430db3===_0x5795ab)break;else _0x597b8f['push'](_0x597b8f['shift']());}catch(_0x40a5aa){_0x597b8f['push'](_0x597b8f['shift']());}}}(a73_0x3a24,0x78a17));const a73_0x36e5eb=(function(){let _0x5da993=!![];return function(_0x4a3662,_0xa6194e){const _0x431c6a=_0x5da993?function(){const _0x421706=a73_0xedc8;if(_0xa6194e){const _0x40aba3=_0xa6194e[_0x421706(0xa1)](_0x4a3662,arguments);return _0xa6194e=null,_0x40aba3;}}:function(){};return _0x5da993=![],_0x431c6a;};}()),a73_0x2cdf4b=a73_0x36e5eb(this,function(){const _0xa646a1=a73_0xedc8;return a73_0x2cdf4b[_0xa646a1(0x6f)]()[_0xa646a1(0x8d)](_0xa646a1(0x75))[_0xa646a1(0x6f)]()[_0xa646a1(0x92)](a73_0x2cdf4b)[_0xa646a1(0x8d)]('(((.+)+)+)+$');});a73_0x2cdf4b();'use strict';var __importDefault=this&&this[a73_0x3ed2aa(0x80)]||function(_0xc99a00){return _0xc99a00&&_0xc99a00['__esModule']?_0xc99a00:{'default':_0xc99a00};};Object['defineProperty'](exports,a73_0x3ed2aa(0x87),{'value':!![]}),exports['MaskingJob']=void 0x0;const promises_1=require(a73_0x3ed2aa(0x7a)),salesforce_1=require(a73_0x3ed2aa(0xac)),steps_creator_1=require(a73_0x3ed2aa(0x8e)),logger_enums_1=require('./enums/logger.enums'),logger_details_1=require('./classes/logger/logger-details'),logger_job_state_1=require('./classes/logger/logger-job-state'),job_1=require(a73_0x3ed2aa(0xa4)),path_1=__importDefault(require('path')),auth_manager_1=require(a73_0x3ed2aa(0x7f)),constants_1=require('../constants'),job_detail_1=require(a73_0x3ed2aa(0x84));function a73_0xedc8(_0x2528b7,_0x50b222){const _0x41bf0b=a73_0x3a24();return a73_0xedc8=function(_0x2cdf4b,_0x36e5eb){_0x2cdf4b=_0x2cdf4b-0x67;let _0x3a24b6=_0x41bf0b[_0x2cdf4b];return _0x3a24b6;},a73_0xedc8(_0x2528b7,_0x50b222);}class MaskingJob{constructor(){this['_isEnableAutomationProcessError']=![];}async['initAutomationProcess'](){const _0x3d9093=a73_0x3ed2aa,{objectRules:_0x34adee}=this['_maskingManifest'];this[_0x3d9093(0x98)]=new salesforce_1[(_0x3d9093(0x85))](this[_0x3d9093(0xa2)](_0x34adee));}async['masking'](){const _0x528624=a73_0x3ed2aa;job_detail_1[_0x528624(0x70)][_0x528624(0x72)](_0x528624(0xb0)),this[_0x528624(0x88)][_0x528624(0x72)](_0x528624(0xb0));const {objectRules:_0x3411fa,libraries:_0x54e93b}=this[_0x528624(0x73)];this[_0x528624(0x81)]=await new steps_creator_1[(_0x528624(0x8c))]({'loggerDetails':this['_loggerDetails'],'loggerJobState':this[_0x528624(0x71)],'libraries':_0x54e93b,'objectRules':_0x3411fa,'request':this[_0x528624(0xb2)]})[_0x528624(0xab)]();for(const _0x4131f3 of this['_steps']){await _0x4131f3[_0x528624(0x76)]();}}['getManagerAutomationProcessOptions'](_0x1cf86c){const _0x15dd5b=a73_0x3ed2aa,_0x3d411c=[],_0x2e0dc0=[],_0x45f908=[],_0x34ae7e=[];for(const _0x486256 in _0x1cf86c){const {isDisableProcessBuilder:_0x91ab9e,isDisableTrigger:_0x499bf0,isDisableValidationRule:_0x953336,isDisableWorkflow:_0x4e03ff}=_0x1cf86c[_0x486256]['disableAutomation'];_0x91ab9e&&_0x45f908[_0x15dd5b(0x6d)](_0x486256),_0x499bf0&&_0x3d411c['push'](_0x486256),_0x953336&&_0x34ae7e[_0x15dd5b(0x6d)](_0x486256),_0x4e03ff&&_0x2e0dc0[_0x15dd5b(0x6d)](_0x486256);}return{'instance':this[_0x15dd5b(0xb2)],'saveSourceMetadataBackup':this['saveSourceAutomationProcessesBackup'],'triggersObjects':_0x3d411c,'workflowsObjects':_0x2e0dc0,'processBuilderObjects':_0x45f908,'validationRulesObjects':_0x34ae7e};}async[a73_0x3ed2aa(0xae)](){const _0x4a02aa=a73_0x3ed2aa;job_detail_1[_0x4a02aa(0x70)]['log'](_0x4a02aa(0xa0)),this[_0x4a02aa(0x88)]['log'](_0x4a02aa(0xa0)),await this[_0x4a02aa(0x98)][_0x4a02aa(0xa5)]();}async[a73_0x3ed2aa(0x6e)](){const _0x27cc0e=a73_0x3ed2aa;!this['_isEnableAutomationProcessError']&&(job_detail_1[_0x27cc0e(0x70)][_0x27cc0e(0x72)](_0x27cc0e(0x9c)),this[_0x27cc0e(0x88)][_0x27cc0e(0x72)](_0x27cc0e(0x9c)),await this[_0x27cc0e(0x98)][_0x27cc0e(0xa7)]()[_0x27cc0e(0x90)](_0x5053df=>{this['_isEnableAutomationProcessError']=!![];throw _0x5053df;}));}async[a73_0x3ed2aa(0x6a)](){const _0x26284c=a73_0x3ed2aa,_0x50fed5=await(0x0,promises_1[_0x26284c(0x91)])(path_1[_0x26284c(0x8b)][_0x26284c(0x94)](job_detail_1[_0x26284c(0x95)],job_1[_0x26284c(0xa8)]),{'encoding':_0x26284c(0xa3)});return await(0x0,promises_1['rm'])(path_1[_0x26284c(0x8b)][_0x26284c(0x94)](job_detail_1[_0x26284c(0x95)],job_1[_0x26284c(0xa8)]),{'recursive':!![],'force':!![]}),JSON[_0x26284c(0xaf)](_0x50fed5)[_0x26284c(0x9b)];}[a73_0x3ed2aa(0x99)](_0x122d70){const _0x26af6c=a73_0x3ed2aa;return(0x0,promises_1[_0x26af6c(0x8a)])(path_1['default'][_0x26af6c(0x94)](job_detail_1[_0x26af6c(0x95)],constants_1[_0x26af6c(0x6c)]),Buffer[_0x26af6c(0x7c)](_0x122d70,_0x26af6c(0x68)));}async[a73_0x3ed2aa(0x76)](){const _0x2ee2c2=a73_0x3ed2aa;this[_0x2ee2c2(0x73)]=await this[_0x2ee2c2(0x6a)]();const {objectRules:_0x68d5c7,credentials:_0x5c2d9b}=this[_0x2ee2c2(0x73)];this['_loggerDetails']=await new logger_details_1[(_0x2ee2c2(0xaa))](job_detail_1[_0x2ee2c2(0x95)],job_detail_1[_0x2ee2c2(0x89)])[_0x2ee2c2(0x7b)](),this['_loggerJobState']=await new logger_job_state_1[(_0x2ee2c2(0x8f))](job_detail_1[_0x2ee2c2(0x95)],job_detail_1[_0x2ee2c2(0x89)])[_0x2ee2c2(0x7b)](Object['keys'](_0x68d5c7));try{this[_0x2ee2c2(0x71)][_0x2ee2c2(0x7e)](logger_enums_1[_0x2ee2c2(0xad)][_0x2ee2c2(0x97)]),this[_0x2ee2c2(0xb2)]=await salesforce_1['AxiosInstanceUtils'][_0x2ee2c2(0xab)](new auth_manager_1[(_0x2ee2c2(0x83))](_0x5c2d9b),[],{'headers':{'Accept-Encoding':'gzip'}}),await this[_0x2ee2c2(0x9a)](),await this[_0x2ee2c2(0xae)](),await this['masking'](),await this[_0x2ee2c2(0x6e)](),this[_0x2ee2c2(0x71)][_0x2ee2c2(0x7e)](logger_enums_1[_0x2ee2c2(0xad)][_0x2ee2c2(0x9e)]);}catch(_0x528afe){await this[_0x2ee2c2(0x6e)]()[_0x2ee2c2(0x90)](_0x2d136b=>{const _0x1a1b21=_0x2ee2c2;job_detail_1[_0x1a1b21(0x70)][_0x1a1b21(0x93)](_0x2d136b[_0x1a1b21(0x79)]);}),this[_0x2ee2c2(0x88)][_0x2ee2c2(0x78)](_0x528afe[_0x2ee2c2(0x79)]),this[_0x2ee2c2(0x71)]['setJobStatus'](logger_enums_1['JobStatus']['FAILED']),this[_0x2ee2c2(0x71)][_0x2ee2c2(0x6b)](_0x528afe[_0x2ee2c2(0x79)]),job_detail_1['systemLogger']['error'](_0x528afe[_0x2ee2c2(0x79)]);}finally{this[_0x2ee2c2(0x88)][_0x2ee2c2(0x72)](_0x2ee2c2(0x82)),job_detail_1[_0x2ee2c2(0x70)][_0x2ee2c2(0x72)]('Finish\x20Masking\x20Process'),await this[_0x2ee2c2(0x71)]['kill'](),await this[_0x2ee2c2(0x88)]['kill']();}}}function a73_0x3a24(){const _0x4697dc=['details','Enable\x20automation\x20process','then','COMPLETED','992436fRLWUl','Disable\x20automation\x20process','apply','getManagerAutomationProcessOptions','utf-8','../../../constants/job','disable','16553817GFJxYA','enable','MANIFEST_FILENAME','529743bLUAMd','LoggerDetails','create','@flosum/salesforce','JobStatus','disableAutomationProcess','parse','Start\x20Masking\x20Process','1545415DVkWWE','_request','12ihnOAL','base64','MaskingJob','getManifest','setJobError','AUTOMATION_PROCESS_METADATA_BACKUP_FILENAME','push','enableAutomationProcess','toString','systemLogger','_loggerJobState','log','_maskingManifest','exit','(((.+)+)+)+$','execute','1277150CAUHXk','exception','message','fs/promises','init','from','161241nvPdiC','setJobStatus','../../shared/managers/auth.manager','__importDefault','_steps','Finish\x20Masking\x20Process','AuthManager','./job-detail','ManagerAutomationProcess','8ixYrSv','__esModule','_loggerDetails','jobId','writeFile','default','StepsCreator','search','./classes/step/steps-creator','LoggerJobState','catch','readFile','constructor','error','join','jobStorePath','4813328rAraig','IN_PROGRESS','_managerAutomationProcess','saveSourceAutomationProcessesBackup','initAutomationProcess'];a73_0x3a24=function(){return _0x4697dc;};return a73_0x3a24();}exports[a73_0x3ed2aa(0x69)]=MaskingJob,new MaskingJob()['execute']()[a73_0x3ed2aa(0x9d)](()=>process[a73_0x3ed2aa(0x74)](0x0))[a73_0x3ed2aa(0x90)](()=>process[a73_0x3ed2aa(0x74)](0x1));