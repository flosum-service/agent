'use strict';function a91_0x5f4a(){const _0x5e9bea=['flow','custom','push','profileActionOverrides','hasActivationRequired','objectPermissions','isArray','recordTypeVisibilities','290745luWbGy','fieldPermissions','customSettingAccesses','field','flowAccesses','customMetadataTypeAccesses','tabSettings','apexPage','1961904cTkmTj','Xml','recordType','classAccesses','applicationVisibilities','245103TtwYvf','content','431484IYJhga','application','includes','apexClass','http://soap.sforce.com/2006/04/metadata','tabVisibilities','externalDataSource','Component_Name__c','object','PermissionSet','toString','559370xxxaDf','2PYdzER','description','loginIpRanges','parse','Component__r','229952hpwNnW','extractComponentPermissions','913236QWULYq','search','externalDataSourceAccesses','layoutAssignments','apply','__esModule','Profile','tab','label','name','(((.+)+)+)+$','categoryGroupVisibilities','length','constructor'];a91_0x5f4a=function(){return _0x5e9bea;};return a91_0x5f4a();}const a91_0x5d1029=a91_0x4623;(function(_0xfc72dd,_0x19b597){const _0x4df877=a91_0x4623,_0x561031=_0xfc72dd();while(!![]){try{const _0x525c5a=-parseInt(_0x4df877(0x1a4))/0x1*(parseInt(_0x4df877(0x19f))/0x2)+parseInt(_0x4df877(0x191))/0x3+parseInt(_0x4df877(0x1a6))/0x4+-parseInt(_0x4df877(0x1bc))/0x5+-parseInt(_0x4df877(0x193))/0x6+-parseInt(_0x4df877(0x19e))/0x7+parseInt(_0x4df877(0x1c4))/0x8;if(_0x525c5a===_0x19b597)break;else _0x561031['push'](_0x561031['shift']());}catch(_0x3f5afb){_0x561031['push'](_0x561031['shift']());}}}(a91_0x5f4a,0x1c27b));Object['defineProperty'](exports,a91_0x5d1029(0x1ab),{'value':!![]}),exports[a91_0x5d1029(0x1a5)]=void 0x0;const xml_1=require('../../git/parsers/utils/xml'),PERMISSIONS_MAP=new Map([[a91_0x5d1029(0x18f),a91_0x5d1029(0x196)],['pageAccesses',a91_0x5d1029(0x1c3)],[a91_0x5d1029(0x1c2),'tab'],[a91_0x5d1029(0x198),a91_0x5d1029(0x1ad)],[a91_0x5d1029(0x1b7),a91_0x5d1029(0x192)],[a91_0x5d1029(0x1b1),'dataCategoryGroup'],[a91_0x5d1029(0x1b9),a91_0x5d1029(0x19b)],[a91_0x5d1029(0x1c1),a91_0x5d1029(0x1af)],[a91_0x5d1029(0x1be),'name'],[a91_0x5d1029(0x190),a91_0x5d1029(0x194)],[a91_0x5d1029(0x1a8),a91_0x5d1029(0x199)],['customPermissions',a91_0x5d1029(0x1af)],[a91_0x5d1029(0x1c0),a91_0x5d1029(0x1b4)],[a91_0x5d1029(0x1a9),'layout'],[a91_0x5d1029(0x1bb),a91_0x5d1029(0x18e)],[a91_0x5d1029(0x1bd),a91_0x5d1029(0x1bf)]]);var UNREMOVE_PERMISSION;(function(_0x2d0b3a){const _0x50f7ea=a91_0x5d1029,_0xb833cf=(function(){let _0x234c28=!![];return function(_0xa5a9fc,_0x594872){const _0x56ba12=_0x234c28?function(){const _0x4b4d53=a91_0x4623;if(_0x594872){const _0x4fa64b=_0x594872[_0x4b4d53(0x1aa)](_0xa5a9fc,arguments);return _0x594872=null,_0x4fa64b;}}:function(){};return _0x234c28=![],_0x56ba12;};}()),_0x2ee2b9=_0xb833cf(this,function(){const _0x5d8f04=a91_0x4623;return _0x2ee2b9[_0x5d8f04(0x19d)]()[_0x5d8f04(0x1a7)](_0x5d8f04(0x1b0))[_0x5d8f04(0x19d)]()[_0x5d8f04(0x1b3)](_0x2ee2b9)[_0x5d8f04(0x1a7)]('(((.+)+)+)+$');});_0x2ee2b9(),_0x2d0b3a[_0x50f7ea(0x1b8)]=_0x50f7ea(0x1b8),_0x2d0b3a['label']=_0x50f7ea(0x1ae),_0x2d0b3a[_0x50f7ea(0x1b5)]=_0x50f7ea(0x1b5),_0x2d0b3a['description']=_0x50f7ea(0x1a0);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x273c71=>{const _0x522ec4=a91_0x5d1029;var _0x12f388,_0x1b77f5;return(_0x12f388=_0x273c71[_0x522ec4(0x1ac)])===null||_0x12f388===void 0x0?!![]:delete _0x12f388['userPermissions'],(_0x1b77f5=_0x273c71['Profile'])===null||_0x1b77f5===void 0x0?!![]:delete _0x1b77f5[_0x522ec4(0x1a1)],_0x273c71;},'PermissionSet':_0x2dc0b4=>{const _0x3e975c=a91_0x5d1029;var _0x2468b1,_0x2aa3db;return(_0x2468b1=_0x2dc0b4['PermissionSet'])===null||_0x2468b1===void 0x0?!![]:delete _0x2468b1['userPermissions'],(_0x2aa3db=_0x2dc0b4[_0x3e975c(0x19c)])===null||_0x2aa3db===void 0x0?!![]:delete _0x2aa3db[_0x3e975c(0x1a1)],_0x2dc0b4;}};async function extractComponentPermissions(_0x620d85,_0x13aed8,_0x61d88d){const _0x582617=a91_0x5d1029,_0x398432=await getReadyComponent(_0x620d85,_0x61d88d),_0x1aaa61=_0x398432[_0x61d88d];if(!_0x1aaa61)return _0x398432;for(const _0x16a604 in _0x1aaa61){if(UNREMOVE_PERMISSION[_0x16a604])continue;const _0x8926b8=_0x1aaa61[_0x16a604],_0x1f2809=getValidPermission(_0x8926b8,_0x16a604,_0x13aed8);_0x1f2809[_0x582617(0x1b2)]?_0x1aaa61[_0x16a604]=_0x1f2809:delete _0x1aaa61[_0x16a604];}return _0x398432[_0x61d88d]['$']={'xmlns':_0x582617(0x197)},_0x398432;}exports[a91_0x5d1029(0x1a5)]=extractComponentPermissions;function a91_0x4623(_0x137ad3,_0x17a53f){const _0xb9a4e7=a91_0x5f4a();return a91_0x4623=function(_0x101625,_0x35cdaf){_0x101625=_0x101625-0x18e;let _0x5f4a7f=_0xb9a4e7[_0x101625];return _0x5f4a7f;},a91_0x4623(_0x137ad3,_0x17a53f);}function getValidPermission(_0x280f08,_0x154ccc,_0x49babb){const _0x28da91=a91_0x5d1029;let _0x295d1a=[];if(_0x154ccc===_0x28da91(0x1a9))_0x295d1a=getValidLayout(_0x280f08,_0x154ccc,_0x49babb);else{const _0x5990e5=Array[_0x28da91(0x1ba)](_0x280f08)?_0x280f08:[_0x280f08];for(const _0x499c08 of _0x5990e5){isValidPermission(_0x499c08,_0x154ccc,_0x49babb)&&_0x295d1a['push'](_0x499c08);}}return _0x295d1a;}function isValidPermission(_0x35cffa,_0x41913d,_0x133a57){const _0x1d4db3=a91_0x5d1029,_0x18bbaf=PERMISSIONS_MAP['get'](_0x41913d);return _0x35cffa[_0x18bbaf]&&_0x133a57['some'](_0x263b9d=>_0x263b9d[_0x1d4db3(0x1a3)][_0x1d4db3(0x19a)][_0x1d4db3(0x195)](_0x35cffa[_0x18bbaf]));}function getValidLayout(_0x265ab2,_0x776e8e,_0x6f5a90){const _0x38e430=a91_0x5d1029,_0x42a9d6=[],_0x44c7b9=Array[_0x38e430(0x1ba)](_0x265ab2)?_0x265ab2:[_0x265ab2];for(const _0x3ecb9f in _0x44c7b9){isValidPermission(_0x44c7b9[_0x3ecb9f],_0x776e8e,_0x6f5a90)&&(!_0x44c7b9[_0x3ecb9f][_0x38e430(0x18e)]&&_0x42a9d6[_0x38e430(0x1b6)](_0x44c7b9[_0x3ecb9f]),isValidPermission(_0x44c7b9[_0x3ecb9f],_0x38e430(0x1bb),_0x6f5a90)&&_0x42a9d6[_0x38e430(0x1b6)](_0x44c7b9[_0x3ecb9f]));}return _0x42a9d6;}async function getReadyComponent(_0x1e9551,_0x24cff2){const _0x43ddf7=a91_0x5d1029,_0x57bb6d=await xml_1[_0x43ddf7(0x1c5)][_0x43ddf7(0x1a2)](_0x1e9551);return prepareDeleteComponent[_0x24cff2](_0x57bb6d);}