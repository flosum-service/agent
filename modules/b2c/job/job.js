const a66_0x87cd75=a66_0x3075;(function(_0x1d84f7,_0x388f6c){const _0x2bbc77=a66_0x3075,_0x40ab2a=_0x1d84f7();while(!![]){try{const _0x563edb=-parseInt(_0x2bbc77(0x210))/0x1*(-parseInt(_0x2bbc77(0x1f0))/0x2)+-parseInt(_0x2bbc77(0x1e5))/0x3*(-parseInt(_0x2bbc77(0x1f1))/0x4)+-parseInt(_0x2bbc77(0x1e3))/0x5*(-parseInt(_0x2bbc77(0x1d2))/0x6)+parseInt(_0x2bbc77(0x202))/0x7+-parseInt(_0x2bbc77(0x214))/0x8*(-parseInt(_0x2bbc77(0x217))/0x9)+parseInt(_0x2bbc77(0x1f2))/0xa+-parseInt(_0x2bbc77(0x1eb))/0xb;if(_0x563edb===_0x388f6c)break;else _0x40ab2a['push'](_0x40ab2a['shift']());}catch(_0x440de0){_0x40ab2a['push'](_0x40ab2a['shift']());}}}(a66_0x3150,0x2a10e));const a66_0x2fd05f=(function(){let _0x45cfc7=!![];return function(_0x3ad903,_0x344c12){const _0x205079=_0x45cfc7?function(){const _0x3a97bb=a66_0x3075;if(_0x344c12){const _0x22ddcd=_0x344c12[_0x3a97bb(0x1fa)](_0x3ad903,arguments);return _0x344c12=null,_0x22ddcd;}}:function(){};return _0x45cfc7=![],_0x205079;};}()),a66_0x413c4e=a66_0x2fd05f(this,function(){const _0x2f7bed=a66_0x3075;return a66_0x413c4e[_0x2f7bed(0x1f6)]()['search']('(((.+)+)+)+$')['toString']()[_0x2f7bed(0x203)](a66_0x413c4e)[_0x2f7bed(0x1df)](_0x2f7bed(0x208));});a66_0x413c4e();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3980c7){const _0x842330=a66_0x3075;return _0x3980c7&&_0x3980c7[_0x842330(0x1f3)]?_0x3980c7:{'default':_0x3980c7};};function a66_0x3150(){const _0x242c3b=['B2C\x20job\x20has\x20been\x20completed.','======\x20Retrieve\x20cartridges\x20','setCompleted','isCompileCartridges','FLOSUM_NAMESPACE','B2C\x20job\x20has\x20been\x20started.','join','6deAFoa','AuthManager','padEnd','jobId','./classes/run-script','IGNORE_FLOSUM_NAMESPACE','cartridges','getAxiosInstance','execute','argv','default','true','jobPath','search','axiosInstance','env','./classes/retrieve-cartridges','1645265mwakDJ','retrieveCartridges','365622BikzGj','error','log','toLowerCase','credentials','getFlosumNamespace','12524765ItNEhX','runScript','./classes/salesforce-auth','./classes/deploy-cartridges','./classes/logger','2918yZgPES','8HVxgPh','2552180JIgMeV','__esModule','isExistsPath','namespace','toString','../../../core','../../shared/managers/auth.manager','setError','apply','@flosum/salesforce','deployCartridges','logger','apiVersion','@flosum/utils','B2C\x20job\x20has\x20been\x20failed.','minimist','1492421RlwpPO','constructor','../../shared/managers/state-manger','branchId','path','defineProperty','(((.+)+)+)+$','Job','message','activateCodeVersion','init','variables','isActivateCodeVersion','catch','3kPDpWt','FsUtils','create','Logger','40048TJyojD','======\x20Run\x20script\x20','setInProgress','477MhDMaJ','then','codeVersion'];a66_0x3150=function(){return _0x242c3b;};return a66_0x3150();}function a66_0x3075(_0x10c0f5,_0x588b5f){const _0x44d64b=a66_0x3150();return a66_0x3075=function(_0x413c4e,_0x2fd05f){_0x413c4e=_0x413c4e-0x1d0;let _0x31501c=_0x44d64b[_0x413c4e];return _0x31501c;},a66_0x3075(_0x10c0f5,_0x588b5f);}Object[a66_0x87cd75(0x207)](exports,a66_0x87cd75(0x1f3),{'value':!![]}),exports[a66_0x87cd75(0x209)]=void 0x0;const core_1=require(a66_0x87cd75(0x1f7)),salesforce_1=require(a66_0x87cd75(0x1fb)),auth_manager_1=require(a66_0x87cd75(0x1f8)),constants_1=require('../constants'),utils_1=require(a66_0x87cd75(0x1ff)),minimist_1=__importDefault(require(a66_0x87cd75(0x201))),path_1=__importDefault(require(a66_0x87cd75(0x206))),state_manger_1=__importDefault(require(a66_0x87cd75(0x204))),logger_1=__importDefault(require(a66_0x87cd75(0x1ef))),retrieve_cartridges_1=__importDefault(require(a66_0x87cd75(0x1e2))),deploy_cartridges_1=__importDefault(require(a66_0x87cd75(0x1ee))),run_script_1=__importDefault(require(a66_0x87cd75(0x1d6))),manifest_manager_1=__importDefault(require('./classes/manifest-manager')),salesforce_auth_1=__importDefault(require(a66_0x87cd75(0x1ed)));class Job{constructor(){const _0x5b0755=a66_0x87cd75,{jobId:_0xa6b042,jobStorePath:_0x459b4e}=(0x0,minimist_1[_0x5b0755(0x1dc)])(process[_0x5b0755(0x1db)]['slice'](0x2));this[_0x5b0755(0x1de)]=_0x459b4e,this[_0x5b0755(0x1d5)]=_0xa6b042;}async[a66_0x87cd75(0x1da)](){const _0x439e94=a66_0x87cd75,_0x3f10d5=new core_1[(_0x439e94(0x213))](this['jobId']);this[_0x439e94(0x1fd)]=new logger_1[(_0x439e94(0x1dc))](this[_0x439e94(0x1d5)],_0x3f10d5);const _0x591448=await new state_manger_1[(_0x439e94(0x1dc))](this[_0x439e94(0x1de)])[_0x439e94(0x20c)](),_0x92e004=path_1[_0x439e94(0x1dc)][_0x439e94(0x1d1)](this[_0x439e94(0x1de)],_0x439e94(0x1d8),constants_1['FLOSUM_SCRIPT_PATH']);await this[_0x439e94(0x1fd)][_0x439e94(0x1e7)](_0x439e94(0x1d0));try{await _0x591448[_0x439e94(0x216)](),this[_0x439e94(0x1e0)]=await this['getAxiosInstance'](),this[_0x439e94(0x1f5)]=this['getFlosumNamespace'](),await this['getManifestParameters'](),await this[_0x439e94(0x1e4)](),await utils_1[_0x439e94(0x211)][_0x439e94(0x1f4)](_0x92e004)?await this[_0x439e94(0x1ec)]():(await this[_0x439e94(0x1fc)](),this[_0x439e94(0x20e)]&&await this[_0x439e94(0x20b)]()),await _0x591448[_0x439e94(0x21c)](),await this[_0x439e94(0x1fd)]['log'](_0x439e94(0x21a));}catch(_0x11b87c){await _0x591448[_0x439e94(0x1f9)](_0x11b87c),await this[_0x439e94(0x1fd)][_0x439e94(0x1e6)](_0x11b87c[_0x439e94(0x20a)]),await this[_0x439e94(0x1fd)][_0x439e94(0x1e6)](_0x439e94(0x200));}}async['getManifestParameters'](){const _0x2498bc=a66_0x87cd75,{credentials:_0x4f60e3,apiVersion:_0x90ad34,branchId:_0x564482,codeVersion:_0x11f8d2,isCompileCartridges:_0x587000,isActivateCodeVersion:_0x26612e,variables:_0x5526a4}=await new manifest_manager_1[(_0x2498bc(0x1dc))](this[_0x2498bc(0x1de)])['init']();this[_0x2498bc(0x1e9)]=_0x4f60e3,this[_0x2498bc(0x1fe)]=_0x90ad34,this[_0x2498bc(0x205)]=_0x564482,this[_0x2498bc(0x219)]=_0x11f8d2,this['isCompileCartridges']=_0x587000,this[_0x2498bc(0x20e)]=_0x26612e,this[_0x2498bc(0x20d)]=_0x5526a4;}async[a66_0x87cd75(0x1d9)](){const _0x208ff1=a66_0x87cd75,_0x4b45aa=await salesforce_auth_1[_0x208ff1(0x1dc)]['getAuthDetails']();return salesforce_1['AxiosInstanceUtils'][_0x208ff1(0x212)](new auth_manager_1[(_0x208ff1(0x1d3))](_0x4b45aa),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a66_0x87cd75(0x1e4)](){const _0x556e36=a66_0x87cd75;await this[_0x556e36(0x1fd)]['log'](_0x556e36(0x21b)[_0x556e36(0x1d4)](0x32,'=')),await new retrieve_cartridges_1[(_0x556e36(0x1dc))](this['jobPath'],this[_0x556e36(0x1e0)],this[_0x556e36(0x1fe)],this[_0x556e36(0x1f5)],this['branchId'],this[_0x556e36(0x20d)],this['logger'])[_0x556e36(0x1da)]();}async[a66_0x87cd75(0x1ec)](){const _0x5cd450=a66_0x87cd75;await this[_0x5cd450(0x1fd)][_0x5cd450(0x1e7)](_0x5cd450(0x215)[_0x5cd450(0x1d4)](0x32,'=')),await new run_script_1['default'](this[_0x5cd450(0x1de)],this[_0x5cd450(0x1e9)],this[_0x5cd450(0x219)],this[_0x5cd450(0x21d)],this[_0x5cd450(0x20e)],this[_0x5cd450(0x1fd)])[_0x5cd450(0x1da)]();}async[a66_0x87cd75(0x1fc)](){const _0x22423c=a66_0x87cd75;await this[_0x22423c(0x1fd)][_0x22423c(0x1e7)]('======\x20Deploy\x20cartridges\x20'[_0x22423c(0x1d4)](0x32,'=')),await new deploy_cartridges_1[(_0x22423c(0x1dc))](this[_0x22423c(0x1de)],this[_0x22423c(0x1e9)],this[_0x22423c(0x219)],this[_0x22423c(0x1fd)])[_0x22423c(0x1da)]();}async['activateCodeVersion'](){const _0x4f84b6=a66_0x87cd75;await this[_0x4f84b6(0x1fd)][_0x4f84b6(0x1e7)]('======\x20Deploy\x20cartridges\x20'['padEnd'](0x32,'=')),await new deploy_cartridges_1[(_0x4f84b6(0x1dc))](this[_0x4f84b6(0x1de)],this[_0x4f84b6(0x1e9)],this[_0x4f84b6(0x219)],this['logger'])[_0x4f84b6(0x20b)]();}[a66_0x87cd75(0x1ea)](){const _0x3b073b=a66_0x87cd75;var _0x141b67,_0x248935;return((_0x248935=(_0x141b67=process[_0x3b073b(0x1e1)])===null||_0x141b67===void 0x0?void 0x0:_0x141b67[_0x3b073b(0x1d7)])===null||_0x248935===void 0x0?void 0x0:_0x248935[_0x3b073b(0x1e8)]())===_0x3b073b(0x1dd)?'':constants_1[_0x3b073b(0x21e)];}}exports['Job']=Job,new Job()['execute']()[a66_0x87cd75(0x218)](()=>process['exit'](0x0))[a66_0x87cd75(0x20f)](()=>process['exit'](0x1));