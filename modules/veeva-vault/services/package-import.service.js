function a360_0x54d0(){const _0x27fd4c=['141663OPbFza','deployment_status__v','../utils/veeva-auth.utils','form-data','uniqueName','status','../enums/status.enums','href','__esModule','PackageComponentDto','reduce','deployPackage','packageId','SUCCESS','PackageComponentStatus','getJobResult','ArrayUtils','(((.+)+)+)+$','get','DEPLOYED','DEPLOYED_WITH_WARNINGS','../dtos/package-component.dto','Deployment.log','constructor','filename','Get\x20deploy\x20result','Import\x20package','importVpk','groupUniqueToMap','getJobDetailUrl','_logger','VeevaConstants','Wait\x20Executing\x20job','VeevaPackageStatus','fillPackageDeploymentAction','Cannot\x20find\x20deployment\x20results','replace','_connection','packageComponentList','310053uCGhwX','length','Validation\x20Log','getDeployDetailsAndSaveLog','../utils/array.utils','getValidationDetailsAndSaveLog','updateVeevaConnection','package_components','28680WdtmoZ','isDeployed','file','find','4cKszhG','responseStatus','defineProperty','11VBnddC','../classes/errors/veeva-error','filter','VERIFIED','toString','apply','responseDetails','includes','rel','1057UrOOXh','5401800uLiREZ','19874660uKBZdq','PackageDetailsDto','ENDPOINT_EXPORT_IMPORT_PACKAGE','search','name__v','_saveLog','getLogResultText','convertDeploymentAction','import','Deploy\x20package','put','artifacts','formPackageComponentList','log','PackageImportService','_veevaService','ENDPOINT_DEPLOY_PACKAGE','VeevaResponseStatus','errors','url','1675100DGWAAS','vaultPackage','groupToMap','96QyeBOD','append','VeevaError','../constants/veeva.constants','ENDPOINT_VALIDATE_PACKAGE','7453096rcoojc','Deploy\x20Log','data','createReadStream','endsWith'];a360_0x54d0=function(){return _0x27fd4c;};return a360_0x54d0();}const a360_0x251418=a360_0x1506;(function(_0x5389bd,_0x42b897){const _0x2b3adf=a360_0x1506,_0x55ab65=_0x5389bd();while(!![]){try{const _0xaf1632=-parseInt(_0x2b3adf(0xb7))/0x1*(parseInt(_0x2b3adf(0xc3))/0x2)+-parseInt(_0x2b3adf(0xf2))/0x3*(-parseInt(_0x2b3adf(0xe8))/0x4)+parseInt(_0x2b3adf(0xe5))/0x5+-parseInt(_0x2b3adf(0xbf))/0x6*(parseInt(_0x2b3adf(0xcf))/0x7)+-parseInt(_0x2b3adf(0xed))/0x8+-parseInt(_0x2b3adf(0xd0))/0x9+parseInt(_0x2b3adf(0xd1))/0xa*(parseInt(_0x2b3adf(0xc6))/0xb);if(_0xaf1632===_0x42b897)break;else _0x55ab65['push'](_0x55ab65['shift']());}catch(_0x503979){_0x55ab65['push'](_0x55ab65['shift']());}}}(a360_0x54d0,0x8e1b3));const a360_0x115913=(function(){let _0x15a0ab=!![];return function(_0x2d146c,_0x151eb5){const _0x2bdaa5=_0x15a0ab?function(){const _0x4f8dd9=a360_0x1506;if(_0x151eb5){const _0x340664=_0x151eb5[_0x4f8dd9(0xcb)](_0x2d146c,arguments);return _0x151eb5=null,_0x340664;}}:function(){};return _0x15a0ab=![],_0x2bdaa5;};}()),a360_0x5008e8=a360_0x115913(this,function(){const _0x3b2ee5=a360_0x1506;return a360_0x5008e8['toString']()[_0x3b2ee5(0xd4)](_0x3b2ee5(0xa1))[_0x3b2ee5(0xca)]()[_0x3b2ee5(0xa7)](a360_0x5008e8)['search'](_0x3b2ee5(0xa1));});a360_0x5008e8();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x46b43e){const _0xfef17e=a360_0x1506;return _0x46b43e&&_0x46b43e[_0xfef17e(0x98)]?_0x46b43e:{'default':_0x46b43e};};Object[a360_0x251418(0xc5)](exports,a360_0x251418(0x98),{'value':!![]}),exports[a360_0x251418(0xdf)]=void 0x0;const veeva_constants_1=require(a360_0x251418(0xeb)),status_enums_1=require(a360_0x251418(0x96)),veeva_error_1=require(a360_0x251418(0xc7)),form_data_1=__importDefault(require(a360_0x251418(0xf5))),fs_1=require('fs'),veeva_auth_utils_1=require(a360_0x251418(0xf4)),package_details_dto_1=require('../dtos/package-details.dto'),package_component_dto_1=require(a360_0x251418(0xa5)),array_utils_1=require(a360_0x251418(0xbb));function a360_0x1506(_0x29b0f4,_0xd66d42){const _0x3fa6d8=a360_0x54d0();return a360_0x1506=function(_0x5008e8,_0x115913){_0x5008e8=_0x5008e8-0x94;let _0x54d057=_0x3fa6d8[_0x5008e8];return _0x54d057;},a360_0x1506(_0x29b0f4,_0xd66d42);}class PackageImportService{constructor({veevaService:_0x5956b9,connection:_0x31db7a,logger:_0x14168b,saveLog:_0x179e9e}){const _0x511e04=a360_0x251418;this[_0x511e04(0xe0)]=_0x5956b9,this[_0x511e04(0xb5)]=_0x31db7a,this[_0x511e04(0xae)]=_0x14168b,this[_0x511e04(0xd6)]=_0x179e9e;}async[a360_0x251418(0xab)](_0x2284f4,_0x2f75b7=0x1){const _0x35c041=a360_0x251418;this[_0x35c041(0xae)]['log'](_0x35c041(0xaa));const _0x494c84=new form_data_1['default']();_0x494c84[_0x35c041(0xe9)](_0x35c041(0xc1),(0x0,fs_1[_0x35c041(0xf0)])(_0x2284f4));const _0x12d029=await this[_0x35c041(0xb5)][_0x35c041(0xdb)](veeva_constants_1[_0x35c041(0xaf)][_0x35c041(0xd3)],_0x494c84,{'headers':{'Content-Type':'multipart/form-data'}}),_0x4ffe2c=_0x12d029['data'];if(_0x4ffe2c[_0x35c041(0xc4)]===status_enums_1['VeevaResponseStatus'][_0x35c041(0x9d)])return _0x4ffe2c[_0x35c041(0xe4)];else{if(_0x2f75b7>0x0)return await(0x0,veeva_auth_utils_1[_0x35c041(0xbd)])(this[_0x35c041(0xb5)]),await this['importVpk'](_0x2284f4,_0x2f75b7-0x1);throw new veeva_error_1[(_0x35c041(0xea))](_0x4ffe2c[_0x35c041(0xe3)]);}}async[a360_0x251418(0x9b)](_0x24e337){const _0x33c69b=a360_0x251418;this[_0x33c69b(0xae)]['log'](_0x33c69b(0xda));const _0x3805c8=await this[_0x33c69b(0xb5)]['post'](veeva_constants_1[_0x33c69b(0xaf)][_0x33c69b(0xe1)][_0x33c69b(0xb4)]('{package_id}',_0x24e337)),_0x2f605e=await _0x3805c8[_0x33c69b(0xef)];if(_0x2f605e['responseStatus']===status_enums_1['VeevaResponseStatus'][_0x33c69b(0x9d)])return _0x2f605e[_0x33c69b(0xe4)];else throw new veeva_error_1[(_0x33c69b(0xea))](_0x2f605e[_0x33c69b(0xe3)]);}async['getJobDetailUrl'](_0x5a4f1c){const _0xd77c50=a360_0x251418;this['_logger'][_0xd77c50(0xde)](_0xd77c50(0xb0));const [_0x18ae8f]=await this[_0xd77c50(0xe0)][_0xd77c50(0x9f)]([_0x5a4f1c]);return _0x18ae8f['links'][_0xd77c50(0xc2)](_0x14f63a=>_0x14f63a[_0xd77c50(0xce)]===_0xd77c50(0xdc))[_0xd77c50(0x97)];}async[a360_0x251418(0xbc)](_0x2a35a1){const _0x39b439=a360_0x251418;this[_0x39b439(0xae)][_0x39b439(0xde)]('Get\x20validation\x20details.');const {data:_0x13d614}=await this[_0x39b439(0xb5)]['get'](_0x2a35a1);if(_0x13d614[_0x39b439(0xc4)]===status_enums_1[_0x39b439(0xe2)][_0x39b439(0x9d)]){const _0x4c7a02=new package_details_dto_1[(_0x39b439(0xd2))](),{log:_0x249df3,id:_0x383d52,package_status:_0x3957e8,package_steps:_0x49370a}=_0x13d614[_0x39b439(0xe6)],_0x5efc8d=_0x249df3[_0x39b439(0xc8)](_0x43408d=>_0x43408d[_0x39b439(0xa8)]['endsWith']('Validation.log')),_0x23057e=await this[_0x39b439(0xd7)](_0x5efc8d[0x0][_0x39b439(0xe4)]);await this['_saveLog'](_0x23057e,_0x39b439(0xb9)),_0x4c7a02[_0x39b439(0x9c)]=_0x383d52,_0x4c7a02[_0x39b439(0xb6)]=this['formPackageComponentList'](_0x49370a),await this['fillPackageDeploymentAction'](_0x4c7a02);if(_0x3957e8!==status_enums_1['VeevaPackageStatus'][_0x39b439(0xc9)])throw new Error('Package\x20not\x20verified');return _0x4c7a02;}else throw new veeva_error_1[(_0x39b439(0xea))](_0x13d614[_0x39b439(0xe3)]);}async[a360_0x251418(0xba)](_0x14279a,_0x3c0bf3){const _0x547502=a360_0x251418;var _0x2c8d7a;this[_0x547502(0xae)][_0x547502(0xde)](_0x547502(0xa9));const {data:_0x1315a9}=await this[_0x547502(0xb5)][_0x547502(0xa2)](_0x14279a);if(_0x1315a9['responseStatus']===status_enums_1[_0x547502(0xe2)][_0x547502(0x9d)]){const {responseDetails:{deployment_log:_0x15f5b3,package_status__v:_0x4c5bb6},package_steps:_0x153c41}=_0x1315a9,_0x154f7c=_0x15f5b3[_0x547502(0xc8)](_0x4afd3d=>_0x4afd3d['filename'][_0x547502(0xf1)](_0x547502(0xa6))),_0x29a187=await this[_0x547502(0xd7)](_0x154f7c[0x0]['url']);await this['_saveLog'](_0x29a187,_0x547502(0xee)),_0x3c0bf3[_0x547502(0xc0)]=[status_enums_1[_0x547502(0xb1)][_0x547502(0xa3)],status_enums_1[_0x547502(0xb1)][_0x547502(0xa4)]][_0x547502(0xcd)](_0x4c5bb6);const _0x18cbd5=array_utils_1[_0x547502(0xa0)][_0x547502(0xac)](this[_0x547502(0xdd)](_0x153c41),({uniqueName:_0x32a23b})=>_0x32a23b);for(const _0x3609cc of _0x3c0bf3['packageComponentList']){const _0x758903=(_0x2c8d7a=_0x18cbd5[_0x547502(0xa2)](_0x3609cc[_0x547502(0x94)]))===null||_0x2c8d7a===void 0x0?void 0x0:_0x2c8d7a[_0x547502(0x95)];_0x758903&&(_0x3609cc[_0x547502(0x95)]=_0x758903);}_0x3c0bf3[_0x547502(0xb6)]=_0x3c0bf3['packageComponentList'][_0x547502(0xc8)](_0x44b83e=>_0x44b83e[_0x547502(0x95)]!==status_enums_1[_0x547502(0x9e)][_0x547502(0xc9)]);if(!_0x3c0bf3[_0x547502(0xb6)][_0x547502(0xb8)])throw new Error(_0x547502(0xb3));return _0x3c0bf3;}else throw new veeva_error_1['VeevaError'](_0x1315a9[_0x547502(0xe3)]);}async[a360_0x251418(0xd7)](_0x166f02){const _0x189c9b=a360_0x251418,{data:_0x4b4c20}=await this[_0x189c9b(0xb5)][_0x189c9b(0xa2)](_0x166f02,{'responseType':'text'});return _0x4b4c20;}[a360_0x251418(0xdd)](_0x24c010){const _0x37d7fa=a360_0x251418;return _0x24c010[_0x37d7fa(0x9a)]((_0x4c5fa3,_0x334301)=>{const _0x31cd93=_0x37d7fa,_0x4a5ea6=_0x334301[_0x31cd93(0xbe)]['map'](_0x148b2c=>new package_component_dto_1[(_0x31cd93(0x99))]({'status':_0x334301[_0x31cd93(0xf3)],'stepName':_0x334301[_0x31cd93(0xd5)],'component':_0x148b2c}));return[..._0x4c5fa3,..._0x4a5ea6];},[]);}async[a360_0x251418(0xb2)](_0x3e07f0){const _0x16df47=a360_0x251418,{data:_0x440812}=await this[_0x16df47(0xb5)]['post'](veeva_constants_1[_0x16df47(0xaf)][_0x16df47(0xec)][_0x16df47(0xb4)]('{package_id}',_0x3e07f0[_0x16df47(0x9c)]));if(_0x440812[_0x16df47(0xc4)]===status_enums_1[_0x16df47(0xe2)][_0x16df47(0x9d)]){const {package_steps:_0xee137d}=_0x440812[_0x16df47(0xcc)],_0x3c8177=array_utils_1[_0x16df47(0xa0)][_0x16df47(0xe7)](_0x3e07f0[_0x16df47(0xb6)],({stepName:_0x3bdf96})=>_0x3bdf96);for(const {name__v:_0x31cf79,deployment_action:_0x19c6f5}of _0xee137d){for(const _0x4e6d65 of _0x3c8177['get'](_0x31cf79)||[]){_0x4e6d65['deploymentAction']=package_component_dto_1[_0x16df47(0x99)][_0x16df47(0xd8)](_0x19c6f5);}}}else throw new veeva_error_1['VeevaError'](_0x440812[_0x16df47(0xe3)]);}async[a360_0x251418(0xd9)](_0x50f107){const _0x3ccba0=a360_0x251418,_0x62aab8=await this[_0x3ccba0(0xab)](_0x50f107),_0x1cb22c=await this['getJobDetailUrl'](_0x62aab8),_0x23d1ba=await this[_0x3ccba0(0xbc)](_0x1cb22c),_0x1d9f04=await this['deployPackage'](_0x23d1ba[_0x3ccba0(0x9c)]),_0x42ba2b=await this[_0x3ccba0(0xad)](_0x1d9f04);return this[_0x3ccba0(0xba)](_0x42ba2b,_0x23d1ba);}}exports[a360_0x251418(0xdf)]=PackageImportService;