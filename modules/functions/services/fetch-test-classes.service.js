const a85_0x287043=a85_0x4ce4;(function(_0x24fbb5,_0x116fa6){const _0x12d66f=a85_0x4ce4,_0x6c497c=_0x24fbb5();while(!![]){try{const _0x20d7e8=parseInt(_0x12d66f(0x183))/0x1*(parseInt(_0x12d66f(0x18d))/0x2)+parseInt(_0x12d66f(0x16b))/0x3+-parseInt(_0x12d66f(0x168))/0x4*(parseInt(_0x12d66f(0x16d))/0x5)+parseInt(_0x12d66f(0x181))/0x6+parseInt(_0x12d66f(0x172))/0x7+parseInt(_0x12d66f(0x16c))/0x8*(parseInt(_0x12d66f(0x190))/0x9)+parseInt(_0x12d66f(0x165))/0xa*(-parseInt(_0x12d66f(0x164))/0xb);if(_0x20d7e8===_0x116fa6)break;else _0x6c497c['push'](_0x6c497c['shift']());}catch(_0x5d12e9){_0x6c497c['push'](_0x6c497c['shift']());}}}(a85_0x5340,0x21d0e));const a85_0x6599d3=(function(){let _0x67c221=!![];return function(_0x45caab,_0xb05d78){const _0x11fa18=_0x67c221?function(){const _0x4155ac=a85_0x4ce4;if(_0xb05d78){const _0x2a69a5=_0xb05d78[_0x4155ac(0x16e)](_0x45caab,arguments);return _0xb05d78=null,_0x2a69a5;}}:function(){};return _0x67c221=![],_0x11fa18;};}()),a85_0x5b304d=a85_0x6599d3(this,function(){const _0xc524b1=a85_0x4ce4;return a85_0x5b304d['toString']()[_0xc524b1(0x17c)](_0xc524b1(0x18f))[_0xc524b1(0x18a)]()[_0xc524b1(0x184)](a85_0x5b304d)[_0xc524b1(0x17c)](_0xc524b1(0x18f));});a85_0x5b304d();'use strict';Object[a85_0x287043(0x17a)](exports,'__esModule',{'value':!![]}),exports[a85_0x287043(0x188)]=void 0x0;const constants_1=require(a85_0x287043(0x186)),zip_1=require(a85_0x287043(0x17b)),components_api_1=require('../utils/components-api'),fetch_attachments_1=require(a85_0x287043(0x161)),BINARY_FIELDS=['Body'],ATTACHMENT_NAME=a85_0x287043(0x167),ATTACHMENT_DESCRIPTION='TEST\x20CLASSES';function a85_0x5340(){const _0x5358f0=['apply','map','reduce','SALESFORCE_API_VERSION','14910bqmclm','dir','attachmentsId','base64','test','join','files','Zip','defineProperty','../../git/parsers/utils/zip','search','string','post','metadataLogId','No\x20component\x20by\x20attachment\x20id','1557726DVZblf','fetchAttachmentsDetailsById','1PIFkoU','constructor','find','../../../constants','fetchAttachments','fetchTestClasses','async','toString','from','Component_Name__c','344092YHYpHp','/services/data/','(((.+)+)+)+$','299259QbUGWa','../../shared/utils/fetch-attachments','values','keys','1036761FYSgZy','40xdYwgu','removeNamespacePrefix','TEST\x20CLASSES','1062492HXGMIf','fetchComponentsDetailsByComponentsHistory','ParentId','343749uvVeAw','56HfQWTc','5BmsuIJ'];a85_0x5340=function(){return _0x5358f0;};return a85_0x5340();}async function fetchTestClasses(_0x4b4682,_0x3e9236){const _0x323912=a85_0x287043,_0x398ff7=await(0x0,fetch_attachments_1[_0x323912(0x182)])(_0x3e9236,_0x4b4682[_0x323912(0x174)]),_0x128bb8=await components_api_1['ComponentsApi'][_0x323912(0x169)](_0x3e9236,_0x398ff7['map'](({ParentId:_0x141080})=>_0x141080))['then'](_0x4bbe38=>components_api_1['ComponentsApi'][_0x323912(0x166)](_0x4bbe38)),_0x28ca9f=await retrieveTestClasses(_0x3e9236,_0x398ff7,_0x128bb8),_0x55704f={'ParentId':_0x4b4682[_0x323912(0x17f)],'Name':ATTACHMENT_NAME,'Description':ATTACHMENT_DESCRIPTION,'Body':Buffer[_0x323912(0x18b)](_0x28ca9f[_0x323912(0x177)]('\x0a'))[_0x323912(0x18a)](_0x323912(0x175))};await _0x3e9236[_0x323912(0x17e)](_0x323912(0x18e)+constants_1[_0x323912(0x171)]+'/sobjects/Attachment',_0x55704f);}exports[a85_0x287043(0x188)]=fetchTestClasses;function a85_0x4ce4(_0x1b6df9,_0xba6206){const _0xd93310=a85_0x5340();return a85_0x4ce4=function(_0x5b304d,_0x6599d3){_0x5b304d=_0x5b304d-0x161;let _0x53407=_0xd93310[_0x5b304d];return _0x53407;},a85_0x4ce4(_0x1b6df9,_0xba6206);}async function retrieveTestClasses(_0x2723e3,_0x2a89d3,_0x5cbbf3){const _0x15641f=a85_0x287043,_0x285d49=[],_0x108834=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0x2a89d3,_0x2723e3),_0x5d43f=_0x108834[_0x15641f(0x16f)](_0x51d356=>_0x51d356['id']);return await getTestClassesNames(_0x2723e3,_0x5d43f,_0x5cbbf3,_0x2a89d3)['then'](_0x45742f=>{_0x285d49['push'](..._0x45742f);}),_0x285d49;}async function getTestClassesNames(_0x24cc90,_0x59a9f5,_0x3a01fc,_0x30f83a){const _0x40a4ad=a85_0x287043,_0x270f45=await(0x0,fetch_attachments_1[_0x40a4ad(0x187)])(_0x24cc90,BINARY_FIELDS,_0x59a9f5),_0x14e862=[],_0x42858e=_0x30f83a[_0x40a4ad(0x170)]((_0x3b04a4,_0x557130)=>{const _0x46c07b=_0x40a4ad;var _0x346706;const _0x1bd424=(_0x346706=_0x3a01fc[_0x46c07b(0x185)](_0x49b1fd=>_0x49b1fd['Id']===_0x557130[_0x46c07b(0x16a)]))===null||_0x346706===void 0x0?void 0x0:_0x346706['Component__r'][_0x46c07b(0x18c)];if(!_0x1bd424)throw new Error(_0x46c07b(0x180));return{..._0x3b04a4,[_0x557130['Id']]:_0x1bd424};},{});for(const _0x12d60e of _0x270f45){const _0x4595f4=await zip_1[_0x40a4ad(0x179)]['unzip'](_0x12d60e[_0x40a4ad(0x162)]['Body']);for(const _0x42c2b9 of Object[_0x40a4ad(0x163)](_0x4595f4[_0x40a4ad(0x178)])){if(!_0x4595f4[_0x40a4ad(0x178)][_0x42c2b9][_0x40a4ad(0x173)]){const _0xf1e56e=await _0x4595f4[_0x40a4ad(0x178)][_0x42c2b9][_0x40a4ad(0x189)](_0x40a4ad(0x17d)),_0x383f64=new RegExp('@istest','i');if(_0x383f64[_0x40a4ad(0x176)](_0xf1e56e)){const _0x5cafc6=_0x42858e[_0x12d60e['id']];if(!_0x5cafc6)throw new Error(_0x40a4ad(0x180));_0x14e862['push'](_0x5cafc6);}}}}return _0x14e862;}