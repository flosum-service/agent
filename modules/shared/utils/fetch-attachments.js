const a279_0x5d413=a279_0xe5d2;(function(_0x2c553f,_0x18e202){const _0x3bc223=a279_0xe5d2,_0x57d741=_0x2c553f();while(!![]){try{const _0x3b5fb2=-parseInt(_0x3bc223(0x16d))/0x1+parseInt(_0x3bc223(0x16c))/0x2*(parseInt(_0x3bc223(0x181))/0x3)+-parseInt(_0x3bc223(0x185))/0x4*(parseInt(_0x3bc223(0x168))/0x5)+parseInt(_0x3bc223(0x164))/0x6*(parseInt(_0x3bc223(0x17b))/0x7)+-parseInt(_0x3bc223(0x17f))/0x8*(parseInt(_0x3bc223(0x179))/0x9)+-parseInt(_0x3bc223(0x18c))/0xa+-parseInt(_0x3bc223(0x170))/0xb*(parseInt(_0x3bc223(0x17d))/0xc);if(_0x3b5fb2===_0x18e202)break;else _0x57d741['push'](_0x57d741['shift']());}catch(_0x35f061){_0x57d741['push'](_0x57d741['shift']());}}}(a279_0x6115,0x734ca));function a279_0x6115(){const _0x5e95f2=['24tPxObn','chunkArray','toString','ParentId','4ZTCHDI','SALESFORCE_API_VERSION','BodyLength','/services/apexrest','./index','/retrieveAttachments/','(((.+)+)+)+$','3243070oQmDQB','fetchAttachmentsDetailsById','\x27,\x27','18lGEvWL','/services/data/','/body','base64','513755fbQEpw','Attachment','fetchAttachments','\x20IN\x20(','209608FCUTym','542454KBBKwG','join','search','473lvEPrr','fetchAttachmentBody','push','../../../constants','get','/sobjects/Attachment/','__esModule','fetchAttachmentsDetailsByParentId','/query/','1629IgHJPj','retrieveAttachments','1947106qLYOVO','post','58692SUewGQ','namespace','920OBKyAX','arraybuffer'];a279_0x6115=function(){return _0x5e95f2;};return a279_0x6115();}const a279_0x418a3d=(function(){let _0xfcf49c=!![];return function(_0x36001b,_0x1aba50){const _0x23116d=_0xfcf49c?function(){if(_0x1aba50){const _0x4da798=_0x1aba50['apply'](_0x36001b,arguments);return _0x1aba50=null,_0x4da798;}}:function(){};return _0xfcf49c=![],_0x23116d;};}()),a279_0x1cab99=a279_0x418a3d(this,function(){const _0x2aafa4=a279_0xe5d2;return a279_0x1cab99[_0x2aafa4(0x183)]()[_0x2aafa4(0x16f)](_0x2aafa4(0x18b))[_0x2aafa4(0x183)]()['constructor'](a279_0x1cab99)[_0x2aafa4(0x16f)](_0x2aafa4(0x18b));});a279_0x1cab99();'use strict';Object['defineProperty'](exports,a279_0x5d413(0x176),{'value':!![]}),exports['fetchAttachments']=exports[a279_0x5d413(0x171)]=exports[a279_0x5d413(0x177)]=exports[a279_0x5d413(0x18d)]=exports[a279_0x5d413(0x17a)]=void 0x0;const index_1=require(a279_0x5d413(0x189)),constants_1=require(a279_0x5d413(0x173)),salesforce_request_1=require('../../functions/utils/salesforce-request'),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=['Body'],FIELD_PARENT_ID=a279_0x5d413(0x184),FIELD_ID='Id';async function retrieveAttachments(_0x46dc11,_0x590d84){const _0xa3e909=a279_0x5d413;let _0x40a7bb=0x0,_0x5cc0c2=0x0,_0x533f6f=[];const _0x2e632d=[];for(const _0x40f598 of _0x46dc11){if(_0x40f598[_0xa3e909(0x187)]>REST_ATTACHMENT_MAX_SIZE){const _0x4d47e9=await fetchAttachmentBody(_0x590d84,_0x40f598['Id']);_0x2e632d['push']({'id':_0x40f598['Id'],'values':{'Body':_0x4d47e9[_0xa3e909(0x183)](_0xa3e909(0x167))}});continue;}if(_0x40f598[_0xa3e909(0x187)]+_0x40a7bb>REST_ATTACHMENT_MAX_SIZE||_0x5cc0c2+0x1>=REST_ATTACHMENT_COUNT){const _0x3cdaf1=await fetchAttachments(_0x590d84,BINARY_FIELDS,_0x533f6f);_0x2e632d[_0xa3e909(0x172)](..._0x3cdaf1),_0x533f6f=[],_0x40a7bb=0x0,_0x5cc0c2=0x0;}_0x533f6f['push'](_0x40f598['Id']),_0x40a7bb+=_0x40f598[_0xa3e909(0x187)],_0x5cc0c2++;}if(_0x533f6f['length']){const _0x54e835=await fetchAttachments(_0x590d84,BINARY_FIELDS,_0x533f6f);_0x2e632d['push'](..._0x54e835);}return _0x2e632d;}function a279_0xe5d2(_0x1bd06d,_0x844155){const _0x32d29e=a279_0x6115();return a279_0xe5d2=function(_0x1cab99,_0x418a3d){_0x1cab99=_0x1cab99-0x163;let _0x611521=_0x32d29e[_0x1cab99];return _0x611521;},a279_0xe5d2(_0x1bd06d,_0x844155);}exports[a279_0x5d413(0x17a)]=retrieveAttachments;function fetchAttachmentsDetailsById(_0x4fa8f6,_0x25a44d){return fetchAttachmentsDetails(_0x4fa8f6,FIELD_ID,_0x25a44d);}exports[a279_0x5d413(0x18d)]=fetchAttachmentsDetailsById;function fetchAttachmentsDetailsByParentId(_0x35023b,_0x2dc978){return fetchAttachmentsDetails(_0x35023b,FIELD_PARENT_ID,_0x2dc978);}exports[a279_0x5d413(0x177)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x3b1735,_0x3cad3b,_0x19f8d5){const _0x193e90=a279_0x5d413,_0x5b52a8=[],_0x5a38e2=(0x0,index_1[_0x193e90(0x182)])(_0x19f8d5,CHUNK_QUERY_SIZE);for(const _0x4372ca of _0x5a38e2){const _0x3a4494='\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20'+_0x3cad3b+_0x193e90(0x16b)+('\x27'+_0x4372ca[_0x193e90(0x16e)](_0x193e90(0x163))+'\x27')+')',{data:_0x5d45d0}=await _0x3b1735[_0x193e90(0x174)](_0x193e90(0x165)+constants_1[_0x193e90(0x186)]+_0x193e90(0x178),{'params':{'q':_0x3a4494}});_0x5b52a8[_0x193e90(0x172)](..._0x5d45d0['records']);}return _0x5b52a8;}async function fetchAttachmentBody(_0x5386ae,_0x4e12ee){const _0x572c08=a279_0x5d413,{data:_0x3095b8}=await _0x5386ae[_0x572c08(0x174)]('/services/data/'+constants_1[_0x572c08(0x186)]+_0x572c08(0x175)+_0x4e12ee+_0x572c08(0x166),{'responseType':_0x572c08(0x180)});return _0x3095b8;}exports[a279_0x5d413(0x171)]=fetchAttachmentBody;async function fetchAttachments(_0x37a435,_0x1682db,_0x34328c){const _0x3cdbb0=a279_0x5d413,{data:_0x308785}=await _0x37a435[_0x3cdbb0(0x17c)](_0x3cdbb0(0x188)+salesforce_request_1[_0x3cdbb0(0x17e)]+_0x3cdbb0(0x18a),{'objectName':_0x3cdbb0(0x169),'binaryFields':_0x1682db,'recordIds':_0x34328c});return _0x308785;}exports[a279_0x5d413(0x16a)]=fetchAttachments;