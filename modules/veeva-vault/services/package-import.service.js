const a391_0x24b78e=a391_0x2df8;(function(_0x17a95c,_0x4233a9){const _0x4ba5d0=a391_0x2df8,_0x49b679=_0x17a95c();while(!![]){try{const _0x557a3d=-parseInt(_0x4ba5d0(0x11a))/0x1+-parseInt(_0x4ba5d0(0x121))/0x2+-parseInt(_0x4ba5d0(0x15d))/0x3+parseInt(_0x4ba5d0(0x167))/0x4+parseInt(_0x4ba5d0(0x116))/0x5*(parseInt(_0x4ba5d0(0x11c))/0x6)+parseInt(_0x4ba5d0(0x14b))/0x7+-parseInt(_0x4ba5d0(0x142))/0x8*(-parseInt(_0x4ba5d0(0x157))/0x9);if(_0x557a3d===_0x4233a9)break;else _0x49b679['push'](_0x49b679['shift']());}catch(_0x2941df){_0x49b679['push'](_0x49b679['shift']());}}}(a391_0xf73f,0x4d91d));const a391_0x4cdcf5=(function(){let _0x581e92=!![];return function(_0x13132a,_0x506b7e){const _0x5219e7=_0x581e92?function(){const _0xbae738=a391_0x2df8;if(_0x506b7e){const _0x1562ed=_0x506b7e[_0xbae738(0x15a)](_0x13132a,arguments);return _0x506b7e=null,_0x1562ed;}}:function(){};return _0x581e92=![],_0x5219e7;};}()),a391_0x217cb7=a391_0x4cdcf5(this,function(){const _0x3e8926=a391_0x2df8;return a391_0x217cb7[_0x3e8926(0x156)]()[_0x3e8926(0x158)](_0x3e8926(0x15f))['toString']()[_0x3e8926(0x14c)](a391_0x217cb7)['search'](_0x3e8926(0x15f));});a391_0x217cb7();'use strict';var __importDefault=this&&this[a391_0x24b78e(0x138)]||function(_0x2c9ce7){const _0x46c045=a391_0x24b78e;return _0x2c9ce7&&_0x2c9ce7[_0x46c045(0x151)]?_0x2c9ce7:{'default':_0x2c9ce7};};function a391_0x2df8(_0x557b65,_0x46b30e){const _0xca2a=a391_0xf73f();return a391_0x2df8=function(_0x217cb7,_0x4cdcf5){_0x217cb7=_0x217cb7-0x10a;let _0xf73f41=_0xca2a[_0x217cb7];return _0xf73f41;},a391_0x2df8(_0x557b65,_0x46b30e);}Object[a391_0x24b78e(0x144)](exports,a391_0x24b78e(0x151),{'value':!![]}),exports[a391_0x24b78e(0x137)]=void 0x0;const veeva_constants_1=require(a391_0x24b78e(0x13a)),status_enums_1=require(a391_0x24b78e(0x14e)),veeva_error_1=require(a391_0x24b78e(0x13e)),form_data_1=__importDefault(require('form-data')),fs_1=require('fs'),veeva_auth_utils_1=require(a391_0x24b78e(0x150)),package_details_dto_1=require('../dtos/package-details.dto'),package_component_dto_1=require(a391_0x24b78e(0x124)),array_utils_1=require('../utils/array.utils');function a391_0xf73f(){const _0x8d3e62=['filter','links','62222uipzIn','file','6TXpDrE','href','deployment_status__v','append','convertDeploymentAction','325810AbbHhv','name__v','{package_id}','../dtos/package-component.dto','importVpk','url','getLogResultText','log','_logger','deployPackage','VeevaError','endsWith','_veevaService','packageComponentList','formPackageComponentList','Deployment.log','artifacts','Package\x20not\x20verified','groupUniqueToMap','_saveLog','status','replace','PackageImportService','__importDefault','rel','../constants/veeva.constants','isDeployed','vaultPackage','errors','../classes/errors/veeva-error','ENDPOINT_EXPORT_IMPORT_PACKAGE','VERIFIED','Validation.log','520zdsamn','multipart/form-data','defineProperty','ArrayUtils','Import\x20package','Deploy\x20Log','data','filename','text','2924355mYixkn','constructor','Get\x20validation\x20details.','../enums/status.enums','post','../utils/veeva-auth.utils','__esModule','Cannot\x20find\x20deployment\x20results','getJobDetailUrl','VeevaPackageStatus','PackageDetailsDto','toString','5940WOUjzE','search','VeevaConstants','apply','get','createReadStream','615441sHyWiP','responseStatus','(((.+)+)+)+$','groupToMap','updateVeevaConnection','put','SUCCESS','package_components','includes','default','1055360adbOBA','packageId','getDeployDetailsAndSaveLog','VeevaResponseStatus','_connection','ENDPOINT_DEPLOY_PACKAGE','uniqueName','Deploy\x20package','getJobResult','PackageComponentStatus','PackageComponentDto','fillPackageDeploymentAction','find','getValidationDetailsAndSaveLog','ENDPOINT_VALIDATE_PACKAGE','length','117470sSzdTZ','Get\x20deploy\x20result'];a391_0xf73f=function(){return _0x8d3e62;};return a391_0xf73f();}class PackageImportService{constructor({veevaService:_0x1dc5e5,connection:_0x3eb697,logger:_0x47e067,saveLog:_0x3c0f6c}){const _0x1a381d=a391_0x24b78e;this[_0x1a381d(0x12d)]=_0x1dc5e5,this['_connection']=_0x3eb697,this[_0x1a381d(0x129)]=_0x47e067,this[_0x1a381d(0x134)]=_0x3c0f6c;}async['importVpk'](_0x179473,_0x31f15b=0x1){const _0x325013=a391_0x24b78e;this[_0x325013(0x129)][_0x325013(0x128)](_0x325013(0x146));const _0xf2da77=new form_data_1[(_0x325013(0x166))]();_0xf2da77[_0x325013(0x11f)](_0x325013(0x11b),(0x0,fs_1[_0x325013(0x15c)])(_0x179473));const _0x2a8554=await this['_connection'][_0x325013(0x162)](veeva_constants_1[_0x325013(0x159)][_0x325013(0x13f)],_0xf2da77,{'headers':{'Content-Type':_0x325013(0x143)}}),_0x248f8b=_0x2a8554[_0x325013(0x148)];if(_0x248f8b[_0x325013(0x15e)]===status_enums_1[_0x325013(0x16a)][_0x325013(0x163)])return _0x248f8b[_0x325013(0x126)];else{if(_0x31f15b>0x0)return await(0x0,veeva_auth_utils_1[_0x325013(0x161)])(this[_0x325013(0x10a)]),await this[_0x325013(0x125)](_0x179473,_0x31f15b-0x1);throw new veeva_error_1[(_0x325013(0x12b))](_0x248f8b[_0x325013(0x13d)]);}}async[a391_0x24b78e(0x12a)](_0x1848d3){const _0x5afc06=a391_0x24b78e;this['_logger']['log'](_0x5afc06(0x10d));const _0x26a4d5=await this[_0x5afc06(0x10a)][_0x5afc06(0x14f)](veeva_constants_1[_0x5afc06(0x159)][_0x5afc06(0x10b)][_0x5afc06(0x136)](_0x5afc06(0x123),_0x1848d3)),_0xea63d0=await _0x26a4d5[_0x5afc06(0x148)];if(_0xea63d0['responseStatus']===status_enums_1[_0x5afc06(0x16a)][_0x5afc06(0x163)])return _0xea63d0[_0x5afc06(0x126)];else throw new veeva_error_1[(_0x5afc06(0x12b))](_0xea63d0[_0x5afc06(0x13d)]);}async[a391_0x24b78e(0x153)](_0x12b889){const _0x40eb4a=a391_0x24b78e;this['_logger'][_0x40eb4a(0x128)]('Wait\x20Executing\x20job');const [_0x26b1eb]=await this[_0x40eb4a(0x12d)][_0x40eb4a(0x10e)]([_0x12b889]);return _0x26b1eb[_0x40eb4a(0x119)][_0x40eb4a(0x112)](_0x2464f2=>_0x2464f2[_0x40eb4a(0x139)]===_0x40eb4a(0x131))[_0x40eb4a(0x11d)];}async['getValidationDetailsAndSaveLog'](_0x5c3fb1){const _0x3b2fd3=a391_0x24b78e;this['_logger']['log'](_0x3b2fd3(0x14d));const {data:_0x48b2b6}=await this[_0x3b2fd3(0x10a)][_0x3b2fd3(0x15b)](_0x5c3fb1);if(_0x48b2b6['responseStatus']===status_enums_1['VeevaResponseStatus']['SUCCESS']){const _0x8eb3ff=new package_details_dto_1[(_0x3b2fd3(0x155))](),{log:_0x151030,id:_0xe3b2fe,package_status:_0xd4780,package_steps:_0x2269d6}=_0x48b2b6[_0x3b2fd3(0x13c)],_0x6cb7d0=_0x151030['filter'](_0x433d1d=>_0x433d1d[_0x3b2fd3(0x149)]['endsWith'](_0x3b2fd3(0x141))),_0x5984f3=await this[_0x3b2fd3(0x127)](_0x6cb7d0[0x0][_0x3b2fd3(0x126)]);await this[_0x3b2fd3(0x134)](_0x5984f3,'Validation\x20Log'),_0x8eb3ff[_0x3b2fd3(0x168)]=_0xe3b2fe,_0x8eb3ff[_0x3b2fd3(0x12e)]=this[_0x3b2fd3(0x12f)](_0x2269d6),await this[_0x3b2fd3(0x111)](_0x8eb3ff);if(_0xd4780!==status_enums_1[_0x3b2fd3(0x154)][_0x3b2fd3(0x140)])throw new Error(_0x3b2fd3(0x132));return _0x8eb3ff;}else throw new veeva_error_1[(_0x3b2fd3(0x12b))](_0x48b2b6[_0x3b2fd3(0x13d)]);}async[a391_0x24b78e(0x169)](_0x5a9ee9,_0x35f0db){const _0x464099=a391_0x24b78e;var _0x5d4eb1;this['_logger'][_0x464099(0x128)](_0x464099(0x117));const {data:_0x46b8d7}=await this[_0x464099(0x10a)][_0x464099(0x15b)](_0x5a9ee9);if(_0x46b8d7[_0x464099(0x15e)]===status_enums_1[_0x464099(0x16a)][_0x464099(0x163)]){const {responseDetails:{deployment_log:_0x4c6870,package_status__v:_0x2ad6b4},package_steps:_0x423d03}=_0x46b8d7,_0x17f404=_0x4c6870[_0x464099(0x118)](_0x1d4909=>_0x1d4909[_0x464099(0x149)][_0x464099(0x12c)](_0x464099(0x130))),_0x444b0f=await this['getLogResultText'](_0x17f404[0x0][_0x464099(0x126)]);await this[_0x464099(0x134)](_0x444b0f,_0x464099(0x147)),_0x35f0db[_0x464099(0x13b)]=[status_enums_1['VeevaPackageStatus']['DEPLOYED'],status_enums_1[_0x464099(0x154)]['DEPLOYED_WITH_WARNINGS']][_0x464099(0x165)](_0x2ad6b4);const _0x40e5c6=array_utils_1[_0x464099(0x145)][_0x464099(0x133)](this[_0x464099(0x12f)](_0x423d03),({uniqueName:_0x1eba7d})=>_0x1eba7d);for(const _0x4573c0 of _0x35f0db[_0x464099(0x12e)]){const _0x24ab94=(_0x5d4eb1=_0x40e5c6[_0x464099(0x15b)](_0x4573c0[_0x464099(0x10c)]))===null||_0x5d4eb1===void 0x0?void 0x0:_0x5d4eb1['status'];_0x24ab94&&(_0x4573c0[_0x464099(0x135)]=_0x24ab94);}_0x35f0db['packageComponentList']=_0x35f0db['packageComponentList']['filter'](_0xea4fdc=>_0xea4fdc[_0x464099(0x135)]!==status_enums_1[_0x464099(0x10f)]['VERIFIED']);if(!_0x35f0db[_0x464099(0x12e)][_0x464099(0x115)])throw new Error(_0x464099(0x152));return _0x35f0db;}else throw new veeva_error_1['VeevaError'](_0x46b8d7[_0x464099(0x13d)]);}async[a391_0x24b78e(0x127)](_0x508b79){const _0xc723aa=a391_0x24b78e,{data:_0x3f7318}=await this[_0xc723aa(0x10a)][_0xc723aa(0x15b)](_0x508b79,{'responseType':_0xc723aa(0x14a)});return _0x3f7318;}[a391_0x24b78e(0x12f)](_0x8f6eca){return _0x8f6eca['reduce']((_0xb679b7,_0x344636)=>{const _0x3e2139=a391_0x2df8,_0x4f20a7=_0x344636[_0x3e2139(0x164)]['map'](_0x196a92=>new package_component_dto_1[(_0x3e2139(0x110))]({'status':_0x344636[_0x3e2139(0x11e)],'stepName':_0x344636[_0x3e2139(0x122)],'component':_0x196a92}));return[..._0xb679b7,..._0x4f20a7];},[]);}async['fillPackageDeploymentAction'](_0x3f87a7){const _0x9d7ef6=a391_0x24b78e,{data:_0x4e9a6b}=await this[_0x9d7ef6(0x10a)]['post'](veeva_constants_1[_0x9d7ef6(0x159)][_0x9d7ef6(0x114)][_0x9d7ef6(0x136)](_0x9d7ef6(0x123),_0x3f87a7[_0x9d7ef6(0x168)]));if(_0x4e9a6b[_0x9d7ef6(0x15e)]===status_enums_1[_0x9d7ef6(0x16a)]['SUCCESS']){const {package_steps:_0x43359a}=_0x4e9a6b['responseDetails'],_0x52aff5=array_utils_1['ArrayUtils'][_0x9d7ef6(0x160)](_0x3f87a7[_0x9d7ef6(0x12e)],({stepName:_0xa6abd6})=>_0xa6abd6);for(const {name__v:_0x1a6d02,deployment_action:_0x150968}of _0x43359a){for(const _0x297544 of _0x52aff5[_0x9d7ef6(0x15b)](_0x1a6d02)||[]){_0x297544['deploymentAction']=package_component_dto_1[_0x9d7ef6(0x110)][_0x9d7ef6(0x120)](_0x150968);}}}else throw new veeva_error_1[(_0x9d7ef6(0x12b))](_0x4e9a6b[_0x9d7ef6(0x13d)]);}async['import'](_0x2cf25a){const _0x42f86=a391_0x24b78e,_0x5bcc31=await this['importVpk'](_0x2cf25a),_0x20a7ac=await this[_0x42f86(0x153)](_0x5bcc31),_0x808345=await this[_0x42f86(0x113)](_0x20a7ac),_0x238798=await this[_0x42f86(0x12a)](_0x808345['packageId']),_0xc472eb=await this[_0x42f86(0x153)](_0x238798);return this[_0x42f86(0x169)](_0xc472eb,_0x808345);}}exports['PackageImportService']=PackageImportService;