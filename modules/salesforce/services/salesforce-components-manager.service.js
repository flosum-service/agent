const a128_0x24c062=a128_0x21c0;(function(_0x4ceb12,_0x2fda32){const _0x491cf5=a128_0x21c0,_0x10ce51=_0x4ceb12();while(!![]){try{const _0x63a0ce=-parseInt(_0x491cf5(0xda))/0x1+parseInt(_0x491cf5(0xc4))/0x2+-parseInt(_0x491cf5(0xa6))/0x3*(parseInt(_0x491cf5(0xb4))/0x4)+-parseInt(_0x491cf5(0xac))/0x5*(-parseInt(_0x491cf5(0x99))/0x6)+parseInt(_0x491cf5(0x7c))/0x7+-parseInt(_0x491cf5(0xc0))/0x8*(-parseInt(_0x491cf5(0xc9))/0x9)+parseInt(_0x491cf5(0x88))/0xa*(parseInt(_0x491cf5(0x7b))/0xb);if(_0x63a0ce===_0x2fda32)break;else _0x10ce51['push'](_0x10ce51['shift']());}catch(_0x2184b7){_0x10ce51['push'](_0x10ce51['shift']());}}}(a128_0x1f33,0x7f510));const a128_0x1e48e3=(function(){let _0x2320e8=!![];return function(_0x5151bf,_0x3e2a46){const _0x158da8=_0x2320e8?function(){const _0xfd9fdd=a128_0x21c0;if(_0x3e2a46){const _0x2cae2e=_0x3e2a46[_0xfd9fdd(0x89)](_0x5151bf,arguments);return _0x3e2a46=null,_0x2cae2e;}}:function(){};return _0x2320e8=![],_0x158da8;};}()),a128_0x5a6a19=a128_0x1e48e3(this,function(){const _0x285d71=a128_0x21c0;return a128_0x5a6a19[_0x285d71(0x83)]()['search'](_0x285d71(0xa0))['toString']()[_0x285d71(0xca)](a128_0x5a6a19)['search'](_0x285d71(0xa0));});function a128_0x21c0(_0x1cffac,_0xb9fbfb){const _0x218c1a=a128_0x1f33();return a128_0x21c0=function(_0x5a6a19,_0x1e48e3){_0x5a6a19=_0x5a6a19-0x79;let _0x1f33fd=_0x218c1a[_0x5a6a19];return _0x1f33fd;},a128_0x21c0(_0x1cffac,_0xb9fbfb);}a128_0x5a6a19();'use strict';var __importDefault=this&&this[a128_0x24c062(0xd4)]||function(_0x4badc9){const _0x18a9fa=a128_0x24c062;return _0x4badc9&&_0x4badc9[_0x18a9fa(0x9a)]?_0x4badc9:{'default':_0x4badc9};};function a128_0x1f33(){const _0x5aba71=['map','fetchCommitManifestsByComponentIds','branchId','__importDefault','Last_Modified_Date__c','Logger','Could\x20not\x20proceed\x20component\x20','Last_Modified_By__c','defineProperty','585256BZjTpE','Component_Name__c','delete','createPatchRequest','createPostRequest','type','7491PmaGHy','7009359gnaBdd','prepareComponentAttachmentRecord','componentType','CRC32__c','prepareCommitManifest','Commit__c','RecordTypeId','toString','componentName','version','request','../../parsers/utils/zip','1190zhdlUe','apply','prepareComponentRecord','update','FLOSUM_ATTACHMENT','toISOString','createDeleteRequest','base64','gitSync','get','FLOSUM_COMPONENT','Component__c','Changed_On__c','proceedComponentMeta','SalesforceComponentsManager','Version__c','body','2412EQbCpU','__esModule','logger','FLOSUM_GIT_NAMESPACE','recordTypes','push','Branch','(((.+)+)+)+$','Committed_On__c','Is_From_Agent__c','username','componentId','Component_History__c','4152IFIUov','Deletion_By_Agent__c','Changed_By__c','Body','../../../constants','Component_Type__c','390jrlLdo','Name','Repository__c','getProceededComponentsMeta','generateAsync','Repository','name','proceededComponentsMeta','2244TLfASC','FLOSUM_COMMIT_MANIFEST','File_Name__c','createZip','.id}','reference','ContentType','default','DEFLATE','files','manifests','SalesforceGitSyncService','2344vBgCzG','Description','FLOSUM_NAMESPACE','componentsToDelete','1140978vNvqsL','Last_Updated_By__c','repositoryId','../utils/composite.utils','componentsToUpdate','6111zXznOP','constructor','crc','Source__c','find','ParentId','prepareComponentHistoryRecord','./salesforce-git-sync.service'];a128_0x1f33=function(){return _0x5aba71;};return a128_0x1f33();}Object[a128_0x24c062(0xd9)](exports,a128_0x24c062(0x9a),{'value':!![]}),exports[a128_0x24c062(0x96)]=void 0x0;const constants_1=require(a128_0x24c062(0xaa)),core_1=require('../../../core'),zip_1=require(a128_0x24c062(0x87)),typedi_1=__importDefault(require('typedi')),salesforce_error_1=require('../errors/salesforce.error'),composite_utils_1=require(a128_0x24c062(0xc7)),flosum_naming_utils_1=require('../utils/flosum-naming.utils'),salesforce_git_sync_service_1=require(a128_0x24c062(0xd0));class SalesforceComponentsManager{constructor(_0x4edb9f,_0x32c0ad,_0x45446e,_0x53bd4f,_0x513810){const _0x47cb44=a128_0x24c062;this[_0x47cb44(0xc6)]=_0x4edb9f,this[_0x47cb44(0xd3)]=_0x32c0ad,this['username']=_0x45446e,this['recordTypes']=_0x53bd4f,this[_0x47cb44(0xb3)]=_0x513810,this[_0x47cb44(0x9b)]=new core_1[(_0x47cb44(0xd6))](SalesforceComponentsManager[_0x47cb44(0xb2)]),this[_0x47cb44(0x90)]=typedi_1[_0x47cb44(0xbb)][_0x47cb44(0x91)](salesforce_git_sync_service_1[_0x47cb44(0xbf)]);}[a128_0x24c062(0x95)](_0x29ce49,_0x3f9a93){const _0x4de0eb=a128_0x24c062,_0x1dad0a=flosum_naming_utils_1['extractFieldsFromRecord'](_0x29ce49,['Component_Type__c','Component_Name__c',_0x4de0eb(0x97)]);this[_0x4de0eb(0xb3)][_0x4de0eb(0x9e)]({'componentId':'','reference':_0x3f9a93,'version':_0x1dad0a[_0x4de0eb(0x97)],'componentName':_0x1dad0a['Component_Name__c'],'componentType':_0x1dad0a['Component_Type__c']});}[a128_0x24c062(0x80)](_0x5f1278,_0x339809){const _0x3a6a85=a128_0x24c062,{request:_0x215b44}=composite_utils_1['createPostRequest'](constants_1['FLOSUM_COMMIT_MANIFEST'],{[constants_1[_0x3a6a85(0xc2)]+_0x3a6a85(0x81)]:_0x5f1278,[constants_1['FLOSUM_NAMESPACE']+_0x3a6a85(0xa5)]:_0x339809});return _0x215b44;}async[a128_0x24c062(0x7d)](_0x391889,_0x3c29bc){const _0xede969=a128_0x24c062,_0x2bf35b={},_0x3ee5c1=zip_1['Zip'][_0xede969(0xb7)]();for(const _0x5b43dc of Object['keys'](_0x391889[_0xede969(0xbd)])){_0x3ee5c1['file'](_0x5b43dc,_0x391889['files'][_0x5b43dc],{'createFolders':!![]});}return _0x2bf35b[_0xede969(0xba)]='application/zip',_0x2bf35b[_0xede969(0xad)]=_0x391889[_0xede969(0x7a)],_0x2bf35b[_0xede969(0xc1)]=_0x391889['type'],_0x2bf35b[_0xede969(0xce)]=_0x3c29bc,_0x2bf35b[_0xede969(0xa9)]=await _0x3ee5c1[_0xede969(0xb0)]({'type':_0xede969(0x8f),'compression':_0xede969(0xbc),'compressionOptions':{'level':0x6}}),_0x2bf35b;}['prepareComponentHistoryRecord'](_0x3d5ad7,_0x10269e,_0x37599f){const _0x1ef6f9=a128_0x24c062,_0x2af654=new Date()[_0x1ef6f9(0x8d)](),_0x228050={};return _0x228050[constants_1[_0x1ef6f9(0xc2)]+_0x1ef6f9(0x93)]=_0x10269e,_0x228050[constants_1[_0x1ef6f9(0xc2)]+_0x1ef6f9(0x7f)]=_0x3d5ad7[_0x1ef6f9(0xcb)],_0x228050[constants_1[_0x1ef6f9(0xc2)]+_0x1ef6f9(0x94)]=_0x2af654,_0x228050[constants_1['FLOSUM_NAMESPACE']+_0x1ef6f9(0xa8)]=this[_0x1ef6f9(0xa3)],_0x228050[constants_1[_0x1ef6f9(0xc2)]+_0x1ef6f9(0x97)]=_0x37599f?_0x37599f+0x1:0x1,_0x228050[constants_1['FLOSUM_GIT_NAMESPACE']+_0x1ef6f9(0xa2)]=!![],_0x228050;}['prepareComponentRecord'](_0x392a17,_0x5f35d2){const _0x34b840=a128_0x24c062;var _0x270e65,_0x43f3a3;const _0x1d1749=new Date()['toISOString'](),_0x3d196b={};return!_0x5f35d2?(this[_0x34b840(0xd3)]?(_0x3d196b[constants_1['FLOSUM_NAMESPACE']+'Branch__c']=this[_0x34b840(0xd3)],_0x3d196b[constants_1['FLOSUM_NAMESPACE']+_0x34b840(0xcc)]='Branch',_0x3d196b[_0x34b840(0x82)]=(_0x270e65=this[_0x34b840(0x9d)][_0x34b840(0xcd)](_0x4a3b16=>_0x4a3b16['name']===_0x34b840(0x9f)))===null||_0x270e65===void 0x0?void 0x0:_0x270e65['id']):(_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xae)]=this[_0x34b840(0xc6)],_0x3d196b[constants_1[_0x34b840(0xc2)]+'Source__c']=_0x34b840(0xb1),_0x3d196b[_0x34b840(0x82)]=(_0x43f3a3=this['recordTypes']['find'](_0x5a4d95=>_0x5a4d95[_0x34b840(0xb2)]===_0x34b840(0xb1)))===null||_0x43f3a3===void 0x0?void 0x0:_0x43f3a3['id']),_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0x97)]=0x1):_0x3d196b[constants_1['FLOSUM_NAMESPACE']+_0x34b840(0x97)]=_0x5f35d2[_0x34b840(0x85)]+0x1,_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xab)]=_0x392a17[_0x34b840(0x7a)],_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xdb)]=_0x392a17[_0x34b840(0xb2)],_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xb6)]=_0x392a17['filePath'],_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xc5)]=this['username'],_0x3d196b[constants_1['FLOSUM_NAMESPACE']+_0x34b840(0xd8)]=this['username'],_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xd5)]=_0x1d1749,_0x3d196b[constants_1[_0x34b840(0xc2)]+_0x34b840(0xa1)]=_0x1d1749,_0x3d196b[constants_1[_0x34b840(0xc2)]+'CRC32__c']=_0x392a17[_0x34b840(0xcb)],_0x3d196b;}[a128_0x24c062(0xaf)](){const _0x9602c3=a128_0x24c062;return this[_0x9602c3(0xb3)];}async['insert'](_0x212e76,_0x132e77){const _0x2cd71a=a128_0x24c062,_0x3cc959=[];for(const _0x5dbd04 of _0x212e76){const _0x1b16bc=composite_utils_1[_0x2cd71a(0x79)](constants_1['FLOSUM_COMPONENT'],this[_0x2cd71a(0x8a)](_0x5dbd04)),_0x3f2636=composite_utils_1['createPostRequest'](constants_1['FLOSUM_COMPONENT_HISTORY'],this[_0x2cd71a(0xcf)](_0x5dbd04,'@{'+_0x1b16bc[_0x2cd71a(0xb9)]+_0x2cd71a(0xb8))),_0x42dc68=composite_utils_1[_0x2cd71a(0x79)](constants_1[_0x2cd71a(0x8c)],await this[_0x2cd71a(0x7d)](_0x5dbd04,'@{'+_0x3f2636[_0x2cd71a(0xb9)]+_0x2cd71a(0xb8)));this['proceedComponentMeta'](_0x1b16bc['request'][_0x2cd71a(0x98)],_0x1b16bc[_0x2cd71a(0xb9)]),_0x3cc959[_0x2cd71a(0x9e)](_0x1b16bc['request'],_0x3f2636[_0x2cd71a(0x86)],_0x42dc68[_0x2cd71a(0x86)]),_0x132e77&&_0x3cc959[_0x2cd71a(0x9e)](this[_0x2cd71a(0x80)](_0x132e77,'@{'+_0x3f2636['reference']+'.id}'));}return _0x3cc959;}async[a128_0x24c062(0x8b)](_0x227d39,_0x3f6987=''){const _0x15a6b6=a128_0x24c062,_0x5b2a1a=[];for(const {component:_0x115a45,meta:_0x2036e5}of _0x227d39){if(!_0x2036e5['id']){const _0x24a567=this['proceededComponentsMeta']['find'](_0x269367=>_0x269367[_0x15a6b6(0x84)]===_0x115a45[_0x15a6b6(0xb2)]&&_0x269367['componentType']===_0x115a45['type']);if(!_0x24a567)throw new salesforce_error_1['SalesforceError'](new Error(_0x15a6b6(0xd7)+_0x115a45[_0x15a6b6(0xb2)]+'\x20['+_0x115a45[_0x15a6b6(0x7a)]+']\x20-\x20meta\x20not\x20found'));_0x2036e5['id']=_0x24a567[_0x15a6b6(0xa4)];}const _0x55f1fd=composite_utils_1[_0x15a6b6(0xdd)](constants_1[_0x15a6b6(0x92)],_0x2036e5['id'],this[_0x15a6b6(0x8a)](_0x115a45,_0x2036e5)),_0x3532d7=composite_utils_1[_0x15a6b6(0x79)](constants_1['FLOSUM_COMPONENT_HISTORY'],this[_0x15a6b6(0xcf)](_0x115a45,_0x2036e5['id'],_0x2036e5['version'])),_0x72c20e=composite_utils_1[_0x15a6b6(0x79)](constants_1[_0x15a6b6(0x8c)],await this['prepareComponentAttachmentRecord'](_0x115a45,'@{'+_0x3532d7[_0x15a6b6(0xb9)]+'.id}'));this[_0x15a6b6(0x95)](_0x55f1fd[_0x15a6b6(0x86)][_0x15a6b6(0x98)],_0x55f1fd[_0x15a6b6(0xb9)]),_0x5b2a1a[_0x15a6b6(0x9e)](_0x55f1fd[_0x15a6b6(0x86)],_0x3532d7[_0x15a6b6(0x86)],_0x72c20e[_0x15a6b6(0x86)]),_0x3f6987&&_0x5b2a1a[_0x15a6b6(0x9e)](this[_0x15a6b6(0x80)](_0x3f6987,'@{'+_0x3532d7[_0x15a6b6(0xb9)]+'.id}'));}return _0x5b2a1a;}async[a128_0x24c062(0xdc)](_0x223816,_0xa32965=![]){const _0x4f15da=a128_0x24c062,_0x190e69={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x28ddef=[];for(const _0x498723 of _0x223816){if(_0x498723['id'])_0x28ddef['push'](_0x498723['id']);else{const _0x43b5e3=this[_0x4f15da(0xb3)][_0x4f15da(0xcd)](_0x6ab57d=>_0x6ab57d[_0x4f15da(0x84)]===_0x498723['name']&&_0x6ab57d[_0x4f15da(0x7e)]===_0x498723[_0x4f15da(0x7a)]);if(!_0x43b5e3||!_0x43b5e3[_0x4f15da(0xa4)])continue;_0x28ddef[_0x4f15da(0x9e)](_0x43b5e3[_0x4f15da(0xa4)]);}}if(_0xa32965){const _0x48cc7a=await this[_0x4f15da(0x90)][_0x4f15da(0xd2)](_0x28ddef);_0x190e69[_0x4f15da(0xbe)]=_0x48cc7a['map'](_0x1305c0=>composite_utils_1[_0x4f15da(0x8e)](constants_1[_0x4f15da(0xb5)],_0x1305c0)[_0x4f15da(0x86)]);}return _0x190e69[_0x4f15da(0xc8)]=_0x28ddef[_0x4f15da(0xd1)](_0x43b442=>composite_utils_1['createPatchRequest'](constants_1[_0x4f15da(0x92)],_0x43b442,{[constants_1[_0x4f15da(0x9c)]+_0x4f15da(0xa7)]:!![]})[_0x4f15da(0x86)]),_0x190e69[_0x4f15da(0xc3)]=_0x28ddef['map'](_0x3e5d6a=>composite_utils_1[_0x4f15da(0x8e)](constants_1[_0x4f15da(0x92)],_0x3e5d6a)['request']),_0x190e69;}}exports['SalesforceComponentsManager']=SalesforceComponentsManager;