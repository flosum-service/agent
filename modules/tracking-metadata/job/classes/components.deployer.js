const a295_0x2cb645=a295_0x2438;(function(_0x47114e,_0x156890){const _0x58f331=a295_0x2438,_0x1fc9ef=_0x47114e();while(!![]){try{const _0x27c46b=parseInt(_0x58f331(0x19d))/0x1*(-parseInt(_0x58f331(0x166))/0x2)+parseInt(_0x58f331(0x1ab))/0x3*(parseInt(_0x58f331(0x1a3))/0x4)+-parseInt(_0x58f331(0x1a7))/0x5+parseInt(_0x58f331(0x19a))/0x6*(-parseInt(_0x58f331(0x196))/0x7)+parseInt(_0x58f331(0x16c))/0x8*(parseInt(_0x58f331(0x184))/0x9)+parseInt(_0x58f331(0x17b))/0xa+-parseInt(_0x58f331(0x17a))/0xb*(-parseInt(_0x58f331(0x16e))/0xc);if(_0x27c46b===_0x156890)break;else _0x1fc9ef['push'](_0x1fc9ef['shift']());}catch(_0xc72872){_0x1fc9ef['push'](_0x1fc9ef['shift']());}}}(a295_0x37fa,0x4f803));const a295_0x3fd5e6=(function(){let _0x4a6d61=!![];return function(_0x230a44,_0xe6811b){const _0x3cda02=_0x4a6d61?function(){if(_0xe6811b){const _0x24355f=_0xe6811b['apply'](_0x230a44,arguments);return _0xe6811b=null,_0x24355f;}}:function(){};return _0x4a6d61=![],_0x3cda02;};}()),a295_0x4afd00=a295_0x3fd5e6(this,function(){const _0x329ada=a295_0x2438;return a295_0x4afd00[_0x329ada(0x189)]()[_0x329ada(0x1a4)](_0x329ada(0x180))[_0x329ada(0x189)]()[_0x329ada(0x16b)](a295_0x4afd00)[_0x329ada(0x1a4)]('(((.+)+)+)+$');});a295_0x4afd00();'use strict';var __importDefault=this&&this[a295_0x2cb645(0x1ba)]||function(_0x116583){const _0x487bb3=a295_0x2cb645;return _0x116583&&_0x116583[_0x487bb3(0x16f)]?_0x116583:{'default':_0x116583};};function a295_0x37fa(){const _0xe7ebd9=['28ESpAsh','file','orgComponentsToDeployChunk','Writable','558552VbRrnS','length','METADATA_FOLDER_MAP','2Vwqeft','BINARY_FIELD_NAME','API_Name__c','stream','addAttachmentToChunk','update','128jlungh','search','populateAttachmentId','execute','535345yERHyN','../../constants','addOrgComponentToChunk','componentId','35361YWtmbT','generateAsync','deployAttachments','default','CompositeBinaryDeployData','binaryRecordsSizeChunk','Process\x20completed\x20for\x20','logger','Last_Updated_By__c','ATTACHMENT_OBJECT_NAME','ORG_COMPONENT_OBJECT_NAME','nodebuffer','error','_write','records','__importDefault','isNameObsolete','70826ZWcaCA','targetOrgId','ComponentsDeployer','jszip','instance','constructor','8KiOkIG','type','229764gycowC','__esModule','binary','_final','Folder__c','CompositeConstants','fullName','createZip','sourceMemberId','trackingSettingId','push','isReachedMaxChunk','176itBbNA','942150HigeeI','defineProperty','apiVersion','RestSimpleDeployData','successDeployedCounter','(((.+)+)+)+$','@flosum/salesforce','deployOrgComponents','deploy','883323SrjheW','OrganisationName__c','from','../../../../constants','attachmentsToDeployChunk','toString','Tracking_Setting__c','then','changedBy','Revision_Counter__c','handleDeployResult','FLOSUM_NAMESPACE','revisionCounter','\x20components','Readable','Is_Deleted__c','resetChunks','Attachment_ID__c'];a295_0x37fa=function(){return _0xe7ebd9;};return a295_0x37fa();}Object[a295_0x2cb645(0x17c)](exports,a295_0x2cb645(0x16f),{'value':!![]}),exports[a295_0x2cb645(0x168)]=void 0x0;const salesforce_1=require(a295_0x2cb645(0x181)),constants_1=require(a295_0x2cb645(0x1a8)),stream_1=require(a295_0x2cb645(0x1a0)),jszip_1=__importDefault(require(a295_0x2cb645(0x169))),constants_2=require(a295_0x2cb645(0x187)),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2[a295_0x2cb645(0x18f)]+a295_0x2cb645(0x195),CONTENT_TYPE='application/zip';class ComponentsDeployer extends stream_1[a295_0x2cb645(0x199)]{constructor({apiVersion:_0x2acc6e,instance:_0x2cc0e8,logger:_0x3e3e32,targetOrgId:_0x1d0337,trackingSettingId:_0x49cffd}){const _0x237805=a295_0x2cb645;super({'objectMode':!![]}),this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x237805(0x1b0)]=0x0,this[_0x237805(0x198)]=[],this[_0x237805(0x17f)]=0x0,this[_0x237805(0x17d)]=_0x2acc6e,this[_0x237805(0x16a)]=_0x2cc0e8,this[_0x237805(0x1b2)]=_0x3e3e32,this[_0x237805(0x167)]=_0x1d0337,this[_0x237805(0x177)]=_0x49cffd;}async[a295_0x2cb645(0x183)](){const _0x34108b=a295_0x2cb645;await this[_0x34108b(0x1ad)]()['then'](_0x11a6de=>this[_0x34108b(0x1a5)](_0x11a6de))[_0x34108b(0x18b)](()=>this[_0x34108b(0x182)]())['then'](_0x1d6ab1=>this[_0x34108b(0x18e)](_0x1d6ab1)),this['resetChunks']();}[a295_0x2cb645(0x1ad)](){const _0x34992f=a295_0x2cb645,_0xdc1eba=new salesforce_1[(_0x34992f(0x1af))]({'instance':this[_0x34992f(0x16a)],'objectName':constants_1[_0x34992f(0x1b4)],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0x34992f(0x17d)]});return _0xdc1eba[_0x34992f(0x1a6)](this[_0x34992f(0x188)]);}[a295_0x2cb645(0x182)](){const _0x4f3173=a295_0x2cb645,_0x9a690c=new salesforce_1[(_0x4f3173(0x17e))]({'instance':this[_0x4f3173(0x16a)],'objectName':constants_1[_0x4f3173(0x1b5)],'api':this[_0x4f3173(0x17d)],'allOrNone':![],'externalIdField':'Id'});return _0x9a690c[_0x4f3173(0x1a6)]({'records':this[_0x4f3173(0x198)]});}async[a295_0x2cb645(0x18e)](_0xa7a3f1){const _0x1dbd7e=a295_0x2cb645;for(const {success:_0x421f17,error:_0x38f95f}of _0xa7a3f1){if(_0x421f17){this[_0x1dbd7e(0x17f)]++;continue;}_0x38f95f&&this[_0x1dbd7e(0x1b2)][_0x1dbd7e(0x1b7)](_0x38f95f);}}['isReachedMaxChunk'](_0x4ea259){const _0xc3b1f7=a295_0x2cb645;return _0x4ea259+this['binaryRecordsSizeChunk']>=salesforce_1[_0xc3b1f7(0x173)]['MAX_BODY_SIZE']||this[_0xc3b1f7(0x188)][_0xc3b1f7(0x1b9)][_0xc3b1f7(0x19b)]===MAX_COMPOSITE_CHUNK_COUNT;}[a295_0x2cb645(0x194)](){const _0x1e2dac=a295_0x2cb645;this['binaryRecordsSizeChunk']=0x0,this[_0x1e2dac(0x188)]={'records':[],'binary':[]},this[_0x1e2dac(0x198)]=[];}['populateAttachmentId'](_0x3b3ea6){const _0x1c7359=a295_0x2cb645;for(const _0xa09a30 in _0x3b3ea6){this[_0x1c7359(0x198)][_0xa09a30][ATTACHMENT_FIELD_NAME]=_0x3b3ea6[_0xa09a30]['id'];}}async[a295_0x2cb645(0x1a1)](_0x4b24ab,_0x1dc86d){const _0x27f6c7=a295_0x2cb645,{listMetadataItem:_0x29e055,sourceMemberRecord:_0xab5a73}=_0x4b24ab,_0x24f2fe={'attributes':{'type':constants_1[_0x27f6c7(0x1b4)],'binaryPartName':_0x29e055[_0x27f6c7(0x174)],'binaryPartNameAlias':constants_1['BINARY_FIELD_NAME']},'Id':_0xab5a73['attachmentId'],'Name':_0x29e055[_0x27f6c7(0x174)],'Description':_0x29e055['type'],'ContentType':CONTENT_TYPE,'ParentId':this[_0x27f6c7(0x167)],'Body':_0x29e055['fullName']},_0x5c12fc={'binaryFieldName':constants_1[_0x27f6c7(0x19e)],'name':_0x29e055['fullName'],'value':stream_1[_0x27f6c7(0x192)][_0x27f6c7(0x186)](_0x1dc86d)};this['attachmentsToDeployChunk'][_0x27f6c7(0x1b9)][_0x27f6c7(0x178)](_0x24f2fe),this[_0x27f6c7(0x188)][_0x27f6c7(0x170)][_0x27f6c7(0x178)](_0x5c12fc);}['createZip'](_0xb678c2){const _0x3c333a=a295_0x2cb645,_0x26cfce=new jszip_1[(_0x3c333a(0x1ae))]();for(const _0xdd88c6 in _0xb678c2){_0x26cfce[_0x3c333a(0x197)](_0xdd88c6,_0xb678c2[_0xdd88c6]);}return _0x26cfce[_0x3c333a(0x1ac)]({'type':_0x3c333a(0x1b6)});}[a295_0x2cb645(0x1a9)](_0xd22ba6,_0x230608){const _0x53efb9=a295_0x2cb645,_0x2d94d6={'attributes':{'type':constants_1[_0x53efb9(0x1b5)]},'Id':_0x230608[_0x53efb9(0x1aa)],[constants_2['FLOSUM_NAMESPACE']+_0x53efb9(0x193)]:_0x230608[_0x53efb9(0x1bb)],[constants_2[_0x53efb9(0x18f)]+_0x53efb9(0x18d)]:_0x230608[_0x53efb9(0x190)],[constants_2[_0x53efb9(0x18f)]+'Source_Member_Id__c']:_0x230608[_0x53efb9(0x176)],[constants_2[_0x53efb9(0x18f)]+_0x53efb9(0x1b3)]:_0x230608[_0x53efb9(0x18c)],[constants_2[_0x53efb9(0x18f)]+_0x53efb9(0x19f)]:_0xd22ba6[_0x53efb9(0x174)],[constants_2['FLOSUM_NAMESPACE']+'Name__c']:_0xd22ba6[_0x53efb9(0x174)],[constants_2['FLOSUM_NAMESPACE']+'Component_Type__c']:_0xd22ba6[_0x53efb9(0x16d)],[constants_2[_0x53efb9(0x18f)]+'Label__c']:_0xd22ba6['fileName'],[constants_2[_0x53efb9(0x18f)]+_0x53efb9(0x172)]:constants_1[_0x53efb9(0x19c)]['has'](_0xd22ba6[_0x53efb9(0x16d)])||null,[constants_2[_0x53efb9(0x18f)]+'Is_Retrieved__c']:!![],[constants_2['FLOSUM_NAMESPACE']+_0x53efb9(0x185)]:this['targetOrgId'],[constants_2[_0x53efb9(0x18f)]+_0x53efb9(0x18a)]:this['trackingSettingId'],[constants_2[_0x53efb9(0x18f)]+'Status__c']:'Retrieved'};this[_0x53efb9(0x198)][_0x53efb9(0x178)](_0x2d94d6);}async[a295_0x2cb645(0x1b8)](_0x5e21e5,_0x500f53,_0x226bab){const _0x50e302=a295_0x2cb645;try{const {listMetadataItem:_0x19e23e,sourceMemberRecord:_0x4769a0,files:_0x1bdf73}=_0x5e21e5,_0x3f2753=await this[_0x50e302(0x175)](_0x1bdf73),_0x5cb806=Buffer['byteLength'](_0x3f2753);this[_0x50e302(0x179)](_0x5cb806)&&await this['deploy'](),this['binaryRecordsSizeChunk']+=_0x5cb806,await this[_0x50e302(0x1a1)](_0x5e21e5,_0x3f2753),this[_0x50e302(0x1a9)](_0x19e23e,_0x4769a0),_0x226bab();}catch(_0x193a24){_0x226bab(_0x193a24);}}async[a295_0x2cb645(0x171)](_0x371959){const _0x5f14e2=a295_0x2cb645;try{this[_0x5f14e2(0x188)][_0x5f14e2(0x1b9)][_0x5f14e2(0x19b)]&&this[_0x5f14e2(0x198)][_0x5f14e2(0x19b)]&&await this[_0x5f14e2(0x183)](),this[_0x5f14e2(0x1b2)]['log'](_0x5f14e2(0x1b1)+this['successDeployedCounter']+_0x5f14e2(0x191)),await this['logger'][_0x5f14e2(0x1a2)](),_0x371959();}catch(_0x4fd40b){_0x371959(_0x4fd40b);}}}function a295_0x2438(_0x4e9e81,_0x30a178){const _0x1bea48=a295_0x37fa();return a295_0x2438=function(_0x4afd00,_0x3fd5e6){_0x4afd00=_0x4afd00-0x166;let _0x37fa37=_0x1bea48[_0x4afd00];return _0x37fa37;},a295_0x2438(_0x4e9e81,_0x30a178);}exports[a295_0x2cb645(0x168)]=ComponentsDeployer;