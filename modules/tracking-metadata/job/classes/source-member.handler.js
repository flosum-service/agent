const a300_0x3ea8e6=a300_0x8f8c;(function(_0x116797,_0x59a2d2){const _0x1ac4d1=a300_0x8f8c,_0x3dbbdf=_0x116797();while(!![]){try{const _0x3dae3b=-parseInt(_0x1ac4d1(0x200))/0x1+parseInt(_0x1ac4d1(0x1fe))/0x2+parseInt(_0x1ac4d1(0x1e2))/0x3*(parseInt(_0x1ac4d1(0x1d7))/0x4)+-parseInt(_0x1ac4d1(0x1ea))/0x5+-parseInt(_0x1ac4d1(0x1dd))/0x6*(parseInt(_0x1ac4d1(0x1cd))/0x7)+-parseInt(_0x1ac4d1(0x1d8))/0x8*(parseInt(_0x1ac4d1(0x1e4))/0x9)+-parseInt(_0x1ac4d1(0x1f5))/0xa*(-parseInt(_0x1ac4d1(0x1d2))/0xb);if(_0x3dae3b===_0x59a2d2)break;else _0x3dbbdf['push'](_0x3dbbdf['shift']());}catch(_0x318e2a){_0x3dbbdf['push'](_0x3dbbdf['shift']());}}}(a300_0x25c1,0xf1fac));function a300_0x8f8c(_0x11f9ab,_0x415726){const _0x3033a8=a300_0x25c1();return a300_0x8f8c=function(_0x55837d,_0x21cee9){_0x55837d=_0x55837d-0x1c6;let _0x25c1ab=_0x3033a8[_0x55837d];return _0x25c1ab;},a300_0x8f8c(_0x11f9ab,_0x415726);}const a300_0x21cee9=(function(){let _0x123939=!![];return function(_0x9e80d8,_0x436dd8){const _0x18e75c=_0x123939?function(){const _0x50f711=a300_0x8f8c;if(_0x436dd8){const _0x224ad4=_0x436dd8[_0x50f711(0x1e7)](_0x9e80d8,arguments);return _0x436dd8=null,_0x224ad4;}}:function(){};return _0x123939=![],_0x18e75c;};}()),a300_0x55837d=a300_0x21cee9(this,function(){const _0x4fe41d=a300_0x8f8c;return a300_0x55837d[_0x4fe41d(0x1cb)]()[_0x4fe41d(0x1da)](_0x4fe41d(0x1d6))[_0x4fe41d(0x1cb)]()['constructor'](a300_0x55837d)[_0x4fe41d(0x1da)](_0x4fe41d(0x1d6));});a300_0x55837d();function a300_0x25c1(){const _0x322262=['keys','120eOWFLF','\x20IN\x20(:sourceMemberIds)','QueryBuilder','@flosum/salesforce','stream','API_Name__c','../../constants','__esModule','targetOrgId','978394vJwfVb','../../../../constants','1727377ZCroYR','execute','CompositeRetrieveData','\x20=\x20:targetOrgId','get','defineProperty','toString','Component_Type__c','7zEDtkr','update','handledMembersCounter','api','handle','4384391xzanUq','OrganisationName__c','Source_Member_Id__c','Changes\x20found\x20for\x20','(((.+)+)+)+$','4412tPkpPl','8yQsZfM','MemberType','search','set','instance','11164506fHiriG','select','Attachment_ID__c','logger','sourceMemberRecords','4341tFoaid','MemberIdOrName','10794213GHKSxd','FLOSUM_NAMESPACE','Transform','apply','SourceMemberHandler','ORG_COMPONENT_OBJECT_NAME','5447885QqgUQT','getComponentFromFlosum','addToChunk','Revision_Counter__c','push','Name__c','_transform','buildOrgComponentQuery','Folder__c','ChangedBy'];a300_0x25c1=function(){return _0x322262;};return a300_0x25c1();}'use strict';Object[a300_0x3ea8e6(0x1ca)](exports,a300_0x3ea8e6(0x1fc),{'value':!![]}),exports[a300_0x3ea8e6(0x1e8)]=void 0x0;const stream_1=require(a300_0x3ea8e6(0x1f9)),salesforce_1=require(a300_0x3ea8e6(0x1f8)),constants_1=require(a300_0x3ea8e6(0x1fb)),constants_2=require(a300_0x3ea8e6(0x1ff)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME='RevisionCounter',IS_NAME_OBSOLETE='IsNameObsolete',MEMBER_ID_FIELD_NAME=a300_0x3ea8e6(0x1e3),MEMBER_TYPE_FIELD_NAME=a300_0x3ea8e6(0x1d9),CHANGED_BY_FIELD_NAME=a300_0x3ea8e6(0x1f3),SOURCE_MEMBER_ID_FIELD_NAME=constants_2[a300_0x3ea8e6(0x1e5)]+'Source_Member_Id__c',ORGANIZATION_NAME_FIELD=constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1d3),REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1ed),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1ed),constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1cc),constants_2['FLOSUM_NAMESPACE']+a300_0x3ea8e6(0x1fa),constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1ef),constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1d4),constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1d3),constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1df),constants_2[a300_0x3ea8e6(0x1e5)]+a300_0x3ea8e6(0x1f2)];class SourceMemberHandler extends stream_1[a300_0x3ea8e6(0x1e6)]{constructor({apiVersion:_0xbfa448,instance:_0x1d4ba7,targetOrgId:_0x336a8a,logger:_0x2d85a4}){const _0x346009=a300_0x3ea8e6;super({'objectMode':!![]}),this[_0x346009(0x1e1)]=new Map(),this['handledMembersCounter']=0x0,this[_0x346009(0x1d0)]=_0xbfa448,this[_0x346009(0x1dc)]=_0x1d4ba7,this[_0x346009(0x1fd)]=_0x336a8a,this[_0x346009(0x1e0)]=_0x2d85a4;}[a300_0x3ea8e6(0x1f1)](){const _0x56dde8=a300_0x3ea8e6;return new salesforce_1[(_0x56dde8(0x1f7))]()[_0x56dde8(0x1de)](...ORG_COMPONENT_SELECT_FIELDS)['from'](constants_1[_0x56dde8(0x1e9)])['where'](SOURCE_MEMBER_ID_FIELD_NAME+_0x56dde8(0x1f6),{'sourceMemberIds':[...this[_0x56dde8(0x1e1)][_0x56dde8(0x1f4)]()]})['andWhere'](ORGANIZATION_NAME_FIELD+_0x56dde8(0x1c8),{'targetOrgId':this[_0x56dde8(0x1fd)]});}async['getComponentFromFlosum'](){const _0xabcaff=a300_0x3ea8e6,_0x214a3b=new salesforce_1[(_0xabcaff(0x1c7))]({'api':this[_0xabcaff(0x1d0)],'queryBuilder':this[_0xabcaff(0x1f1)](),'instance':this[_0xabcaff(0x1dc)],'isTooling':![]}),_0x1f7cfe=new Map();do{const {records:_0x2ec8fe}=await _0x214a3b[_0xabcaff(0x1c6)]();for(const _0x372914 of _0x2ec8fe){_0x1f7cfe[_0xabcaff(0x1db)](_0x372914[SOURCE_MEMBER_ID_FIELD_NAME],_0x372914);}}while(!_0x214a3b['getIsDone']());return _0x1f7cfe;}async[a300_0x3ea8e6(0x1ec)](_0xbd2b1a){const _0x41743b=a300_0x3ea8e6;this['sourceMemberRecords'][_0x41743b(0x1db)](_0xbd2b1a['Id'],_0xbd2b1a),this['sourceMemberRecords']['size']===MAX_CHUNK_SIZE&&await this[_0x41743b(0x1d1)]();}async[a300_0x3ea8e6(0x1d1)](){const _0x1c1261=a300_0x3ea8e6,_0x3f0bb5=await this[_0x1c1261(0x1eb)]();for(const [_0xa20322,_0x56a7ca]of this[_0x1c1261(0x1e1)]){const _0xf1a2ec=_0x3f0bb5[_0x1c1261(0x1c9)](_0xa20322);if(_0xf1a2ec&&_0x56a7ca[REVISION_COUNTER_FIELD_NAME]===_0xf1a2ec[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0xff4644={'sourceMemberId':_0x56a7ca['Id'],'componentId':(_0xf1a2ec===null||_0xf1a2ec===void 0x0?void 0x0:_0xf1a2ec['Id'])||null,'attachmentId':(_0xf1a2ec===null||_0xf1a2ec===void 0x0?void 0x0:_0xf1a2ec['Attachment_ID__c'])||null,'metadataId':_0x56a7ca[MEMBER_ID_FIELD_NAME],'metadataType':_0x56a7ca[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0x56a7ca[IS_NAME_OBSOLETE],'revisionCounter':_0x56a7ca[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x56a7ca[CHANGED_BY_FIELD_NAME]};this[_0x1c1261(0x1cf)]++,this[_0x1c1261(0x1ee)](_0xff4644);}this[_0x1c1261(0x1e1)]=new Map();}async[a300_0x3ea8e6(0x1f0)](_0x558eb7,_0x39b085,_0x15b9da){const _0xc85218=a300_0x3ea8e6;try{await this[_0xc85218(0x1ec)](_0x558eb7),_0x15b9da();}catch(_0x79bd4f){_0x15b9da(_0x79bd4f);}}async['_flush'](_0xe218e0){const _0x1eebad=a300_0x3ea8e6;try{this['sourceMemberRecords']['size']&&await this[_0x1eebad(0x1d1)](),this['logger']['log'](_0x1eebad(0x1d5)+this[_0x1eebad(0x1cf)]+'\x20components'),await this[_0x1eebad(0x1e0)][_0x1eebad(0x1ce)](),_0xe218e0();}catch(_0x5a64a3){_0xe218e0(_0x5a64a3);}}}exports[a300_0x3ea8e6(0x1e8)]=SourceMemberHandler;