const a237_0x2d4214=a237_0x30a5;(function(_0x79ab8,_0x30b78e){const _0x569a5d=a237_0x30a5,_0x61a4e7=_0x79ab8();while(!![]){try{const _0x5764ef=parseInt(_0x569a5d(0x1ec))/0x1*(-parseInt(_0x569a5d(0x1ee))/0x2)+-parseInt(_0x569a5d(0x1d6))/0x3*(parseInt(_0x569a5d(0x1f6))/0x4)+parseInt(_0x569a5d(0x1cb))/0x5+parseInt(_0x569a5d(0x1e1))/0x6*(-parseInt(_0x569a5d(0x205))/0x7)+-parseInt(_0x569a5d(0x1f9))/0x8*(-parseInt(_0x569a5d(0x1f7))/0x9)+-parseInt(_0x569a5d(0x1b2))/0xa+parseInt(_0x569a5d(0x1c9))/0xb;if(_0x5764ef===_0x30b78e)break;else _0x61a4e7['push'](_0x61a4e7['shift']());}catch(_0x3ce09a){_0x61a4e7['push'](_0x61a4e7['shift']());}}}(a237_0x1527,0xbe440));const a237_0x2d4c08=(function(){let _0x178821=!![];return function(_0x4ae48f,_0x3f82f4){const _0x58dfab=_0x178821?function(){if(_0x3f82f4){const _0x458b17=_0x3f82f4['apply'](_0x4ae48f,arguments);return _0x3f82f4=null,_0x458b17;}}:function(){};return _0x178821=![],_0x58dfab;};}()),a237_0x2a706f=a237_0x2d4c08(this,function(){const _0x4f3cc6=a237_0x30a5;return a237_0x2a706f[_0x4f3cc6(0x1cf)]()[_0x4f3cc6(0x1b1)](_0x4f3cc6(0x1d7))[_0x4f3cc6(0x1cf)]()[_0x4f3cc6(0x1e7)](a237_0x2a706f)[_0x4f3cc6(0x1b1)]('(((.+)+)+)+$');});a237_0x2a706f();function a237_0x30a5(_0x5b86b2,_0xd0f6d3){const _0x5ed86c=a237_0x1527();return a237_0x30a5=function(_0x2a706f,_0x2d4c08){_0x2a706f=_0x2a706f-0x1ac;let _0x15278d=_0x5ed86c[_0x2a706f];return _0x15278d;},a237_0x30a5(_0x5b86b2,_0xd0f6d3);}'use strict';var __decorate=this&&this[a237_0x2d4214(0x1ef)]||function(_0x5bc306,_0x8590a,_0x326d93,_0xd5d01b){const _0x100d40=a237_0x2d4214;var _0x215539=arguments[_0x100d40(0x1b0)],_0x2658d0=_0x215539<0x3?_0x8590a:_0xd5d01b===null?_0xd5d01b=Object[_0x100d40(0x1b4)](_0x8590a,_0x326d93):_0xd5d01b,_0xdb6527;if(typeof Reflect==='object'&&typeof Reflect[_0x100d40(0x1d1)]===_0x100d40(0x1ba))_0x2658d0=Reflect[_0x100d40(0x1d1)](_0x5bc306,_0x8590a,_0x326d93,_0xd5d01b);else{for(var _0xc39b2a=_0x5bc306['length']-0x1;_0xc39b2a>=0x0;_0xc39b2a--)if(_0xdb6527=_0x5bc306[_0xc39b2a])_0x2658d0=(_0x215539<0x3?_0xdb6527(_0x2658d0):_0x215539>0x3?_0xdb6527(_0x8590a,_0x326d93,_0x2658d0):_0xdb6527(_0x8590a,_0x326d93))||_0x2658d0;}return _0x215539>0x3&&_0x2658d0&&Object[_0x100d40(0x206)](_0x8590a,_0x326d93,_0x2658d0),_0x2658d0;},__metadata=this&&this[a237_0x2d4214(0x1e6)]||function(_0x46dcb3,_0x53b700){const _0x9d3566=a237_0x2d4214;if(typeof Reflect===_0x9d3566(0x1f3)&&typeof Reflect[_0x9d3566(0x1f0)]===_0x9d3566(0x1ba))return Reflect[_0x9d3566(0x1f0)](_0x46dcb3,_0x53b700);};Object[a237_0x2d4214(0x206)](exports,'__esModule',{'value':!![]}),exports[a237_0x2d4214(0x1b5)]=void 0x0;const typedi_1=require(a237_0x2d4214(0x1c8)),constants_1=require(a237_0x2d4214(0x203)),errors_1=require(a237_0x2d4214(0x201)),utils_1=require(a237_0x2d4214(0x1dd)),flosum_repository_sync_dto_1=require(a237_0x2d4214(0x1af)),not_found_error_1=require(a237_0x2d4214(0x1b9)),queries_1=require(a237_0x2d4214(0x1e8)),salesforce_query_service_1=require('./salesforce-query.service'),salesforce_service_1=require('./salesforce.service');let SalesforceSyncService=class SalesforceSyncService{constructor(_0x54fd45,_0x40f324){const _0x21ce8=a237_0x2d4214;this[_0x21ce8(0x204)]=_0x54fd45,this[_0x21ce8(0x1e0)]=_0x40f324;}async[a237_0x2d4214(0x1d5)](_0x196bfe){const _0x9d3875=a237_0x2d4214;var _0x1281d5;const _0xfef56a=await this['salesforceQuery'][_0x9d3875(0x200)](_0x196bfe),_0x3e8ccb=[];for(const _0x1df7ea of _0xfef56a){const _0xa5163=(_0x1281d5=_0x1df7ea[constants_1['FLOSUM_NAMESPACE']+_0x9d3875(0x208)])===null||_0x1281d5===void 0x0?void 0x0:_0x1281d5['records'];_0xa5163&&_0xa5163['length']&&_0x3e8ccb[_0x9d3875(0x1db)](_0xa5163[0x0]['Id']);}return _0x3e8ccb;}async[a237_0x2d4214(0x1ac)](_0x55850e){const _0x424a47=a237_0x2d4214,_0x4fbc3b=await this['salesforceQuery'][_0x424a47(0x200)](queries_1['GET_REPOSITORIES_NAMES_QUERY']['replace'](/\%connection_id\%/g,_0x55850e));return _0x4fbc3b[_0x424a47(0x1d2)](_0x143075=>{const _0x12ff82=_0x424a47;return _0x143075[constants_1['FLOSUM_GIT_NAMESPACE']+_0x12ff82(0x1c6)]?_0x143075[constants_1[_0x12ff82(0x1c0)]+_0x12ff82(0x1c6)][_0x12ff82(0x207)]:_0x143075[_0x12ff82(0x207)];});}async['getRepositoryRecords'](_0x2fbd5b){const _0x4b7332=a237_0x2d4214,_0x109ac1=await this[_0x4b7332(0x204)][_0x4b7332(0x200)](queries_1[_0x4b7332(0x1b3)][_0x4b7332(0x1b8)](/\%connection_id\%/g,_0x2fbd5b));return _0x109ac1[_0x4b7332(0x1d2)](_0x135f96=>flosum_repository_sync_dto_1[_0x4b7332(0x1b6)]['fromRepositoryRecord'](_0x135f96));}async[a237_0x2d4214(0x1b7)](_0x591592){const _0x9fea1e=a237_0x2d4214,_0x2db195=await this[_0x9fea1e(0x204)]['query'](queries_1[_0x9fea1e(0x202)][_0x9fea1e(0x1b8)](/%repositories_ids\%/g,_0x591592));return _0x2db195['map'](_0x23d689=>flosum_repository_sync_dto_1['FlosumRepositorySyncDto'][_0x9fea1e(0x1fe)](_0x23d689));}async[a237_0x2d4214(0x1ed)](_0x4c4aa4){const _0x5a3ec1=a237_0x2d4214,_0x3b3627=await this[_0x5a3ec1(0x204)][_0x5a3ec1(0x200)](queries_1[_0x5a3ec1(0x1c7)]['replace']('%id%',_0x4c4aa4));if(_0x3b3627[_0x5a3ec1(0x1b0)]===0x0)throw new not_found_error_1[(_0x5a3ec1(0x1d9))](_0x5a3ec1(0x1ae)+_0x4c4aa4+'\x20not\x20found\x20on\x20salesforce');return flosum_repository_sync_dto_1['FlosumRepositorySyncDto'][_0x5a3ec1(0x1c5)](_0x3b3627[0x0]);}async[a237_0x2d4214(0x1fc)](_0x36b81c){const _0x3d414e=a237_0x2d4214,_0x1b1440=await this['salesforceQuery'][_0x3d414e(0x200)](queries_1[_0x3d414e(0x1ce)]['replace'](_0x3d414e(0x1f1),_0x36b81c));if(_0x1b1440[_0x3d414e(0x1b0)]===0x0)throw new not_found_error_1[(_0x3d414e(0x1d9))]('Branch\x20with\x20Id\x20'+_0x36b81c+_0x3d414e(0x1cc));return flosum_repository_sync_dto_1[_0x3d414e(0x1b6)][_0x3d414e(0x1fe)](_0x1b1440[0x0]);}async[a237_0x2d4214(0x1da)](_0x54da97){const _0x4d4f25=a237_0x2d4214,_0x1114bb=await this[_0x4d4f25(0x204)][_0x4d4f25(0x200)](queries_1[_0x4d4f25(0x1d3)]['replace'](_0x4d4f25(0x1bd),_0x54da97));if(_0x1114bb['length']===0x0)throw new not_found_error_1['SalesforceNotFoundError'](_0x4d4f25(0x1bf)+_0x54da97+_0x4d4f25(0x1cc));const _0x39f6bc=_0x1114bb[_0x4d4f25(0x1f5)](_0x3ed65b=>_0x3ed65b[constants_1[_0x4d4f25(0x1f4)]+_0x4d4f25(0x1ea)]===_0x54da97);if(!_0x39f6bc)throw new not_found_error_1[(_0x4d4f25(0x1d9))](_0x4d4f25(0x1bf)+_0x54da97+_0x4d4f25(0x1cc));return flosum_repository_sync_dto_1[_0x4d4f25(0x1b6)][_0x4d4f25(0x1fe)](_0x39f6bc);}async['getRepositoryRecordByName'](_0x8ea650){const _0x3c753f=a237_0x2d4214,_0x5a9123=await this['salesforceQuery'][_0x3c753f(0x200)](queries_1[_0x3c753f(0x1d8)][_0x3c753f(0x1b8)](_0x3c753f(0x1bd),_0x8ea650));if(_0x5a9123[_0x3c753f(0x1b0)]===0x0)throw new not_found_error_1[(_0x3c753f(0x1d9))]('Repository\x20'+_0x8ea650+'\x20not\x20found\x20on\x20salesforce');return flosum_repository_sync_dto_1[_0x3c753f(0x1b6)][_0x3c753f(0x1c5)](_0x5a9123[0x0]);}async['getComponentsFromRepository'](_0x36108a){const _0x4f2094=a237_0x2d4214,_0x375169='\x0a\x20\x20\x20\x20\x20\x20'+queries_1[_0x4f2094(0x1d4)]+_0x4f2094(0x1dc)+_0x36108a+'\x27';return this[_0x4f2094(0x1d5)](_0x375169);}async[a237_0x2d4214(0x1c1)](_0x56ec14){const _0x2bc303=a237_0x2d4214,_0x20bd6b=_0x2bc303(0x1fa)+queries_1[_0x2bc303(0x1d4)]+_0x2bc303(0x1eb)+_0x56ec14+'\x27';return this[_0x2bc303(0x1d5)](_0x20bd6b);}async[a237_0x2d4214(0x1f8)](_0x2bb4c6){const _0x2eaeaf=a237_0x2d4214;var _0xadc19f;const _0x193af4=queries_1[_0x2eaeaf(0x1bc)][_0x2eaeaf(0x1b8)](_0x2eaeaf(0x1e9),_0x2bb4c6['objectId'])[_0x2eaeaf(0x1b8)](_0x2eaeaf(0x1bd),_0x2bb4c6[_0x2eaeaf(0x1ca)]?constants_1[_0x2eaeaf(0x1e4)]:constants_1[_0x2eaeaf(0x1e5)]),_0x529b8f=await this[_0x2eaeaf(0x204)][_0x2eaeaf(0x200)](_0x193af4),_0x5ebbad=(_0xadc19f=_0x529b8f[0x0])===null||_0xadc19f===void 0x0?void 0x0:_0xadc19f['Id'];if(!_0x5ebbad)throw new Error(errors_1['ERR_INVALID_ATTACHMENT_ID']);return _0x5ebbad;}async[a237_0x2d4214(0x1fb)](_0x4d9666){const _0x5d231f=a237_0x2d4214;let _0x47ee2f=await this[_0x5d231f(0x1f8)](_0x4d9666)[_0x5d231f(0x1c4)](()=>null);return!_0x47ee2f&&(_0x47ee2f=await this[_0x5d231f(0x1e0)][_0x5d231f(0x1c3)](_0x5d231f(0x1f2),{'Body':(0x0,utils_1[_0x5d231f(0x1bb)])('{}'),'ParentId':_0x4d9666[_0x5d231f(0x1cd)],'ContentType':_0x5d231f(0x1fd),'Name':_0x4d9666[_0x5d231f(0x1ca)]?constants_1['SYNC_ATTACHMENT_FOR_REPOSITORY_NAME']:constants_1['SYNC_ATTACHMENT_FOR_BRANCH_NAME']})),_0x47ee2f;}async['updateRemoteState'](_0x48f173,_0x27ef80){const _0x3fc080=a237_0x2d4214,_0x3f6436=await this[_0x3fc080(0x1fb)](_0x48f173);await this[_0x3fc080(0x1e0)]['patchObject'](_0x3fc080(0x1f2),_0x3f6436,{'Body':(0x0,utils_1[_0x3fc080(0x1bb)])(JSON[_0x3fc080(0x1ff)](_0x27ef80))});}async[a237_0x2d4214(0x1e2)](_0x1fa208,_0x157f16){const _0x55cb35=a237_0x2d4214;await this[_0x55cb35(0x1e0)][_0x55cb35(0x1d0)](_0x1fa208[_0x55cb35(0x1be)],_0x1fa208['objectId'],{[constants_1[_0x55cb35(0x1c0)]+_0x55cb35(0x1ad)]:_0x157f16});}async[a237_0x2d4214(0x1e3)](_0x1be97d){const _0x2ebb4f=a237_0x2d4214;await this['salesforceService'][_0x2ebb4f(0x1d0)](constants_1[_0x2ebb4f(0x1c0)]+'Connection__c',_0x1be97d,{[constants_1[_0x2ebb4f(0x1c0)]+_0x2ebb4f(0x1df)]:![]});}};SalesforceSyncService=__decorate([(0x0,typedi_1['Service'])(),__metadata('design:paramtypes',[salesforce_query_service_1[a237_0x2d4214(0x1c2)],salesforce_service_1[a237_0x2d4214(0x1de)]])],SalesforceSyncService),exports[a237_0x2d4214(0x1b5)]=SalesforceSyncService;function a237_0x1527(){const _0x209add=['GET_BRANCH_BY_NAME_QUERY','GET_COMPONENTS_QUERY','getComponents','51guHRdr','(((.+)+)+)+$','GET_REPOSITORY_BY_NAME_QUERY','SalesforceNotFoundError','getBranchRecordByName','push','\x0a\x20\x20\x20\x20\x20\x20WHERE\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20%flosum_namespace%Repository__c\x20=\x27','../../../shared/utils','SalesforceService','Sync_In_Progress__c','salesforceService','1192224oJqXDx','setStatus','disableSync','SYNC_ATTACHMENT_FOR_REPOSITORY_NAME','SYNC_ATTACHMENT_FOR_BRANCH_NAME','__metadata','constructor','../queries','%parentId%','Branch_Name__c','\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%flosum_namespace%Branch__c\x20=\x20\x27','11WYwWzs','getRepositoryRecord','147106XzHiDS','__decorate','metadata','%id%','Attachment','object','FLOSUM_NAMESPACE','find','222092JSnGOq','423swVJSa','getAttachmentId','62224IRUDyl','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','getRemoteStateAttachmentId','getBranchRecord','text/plain','fromBranchRecord','stringify','query','../../../../constants/errors','GET_WAITING_BRANCHES_QUERY','../../../../constants','salesforceQuery','7tudCiE','defineProperty','Name','Components__r','getAllRepositoryNames','Synchronization_Status__c','Repository\x20with\x20Id\x20','../dto/flosum-repository-sync.dto','length','search','1953730wuXRGu','GET_WAITING_REPOSITORIES_QUERY','getOwnPropertyDescriptor','SalesforceSyncService','FlosumRepositorySyncDto','getBranchRecords','replace','../errors/not-found.error','function','encodeBase64','GET_ATTACHMENT_BY_PARENT_ID_AND_NAME_QUERY','%name%','objectType','Branch\x20','FLOSUM_GIT_NAMESPACE','getBranchComponents','SalesforceQueryService','createObject','catch','fromRepositoryRecord','Repository__r','GET_REPOSITORY_QUERY','typedi','26791589iYHMEX','repositoryId','626070xpOjWa','\x20not\x20found\x20on\x20salesforce','objectId','GET_BRANCH_QUERY','toString','patchObject','decorate','map'];a237_0x1527=function(){return _0x209add;};return a237_0x1527();}