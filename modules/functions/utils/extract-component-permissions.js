'use strict';const a60_0x5757db=a60_0x17cd;(function(_0x18c97b,_0x25bb48){const _0x2d55fc=a60_0x17cd,_0x4a7a91=_0x18c97b();while(!![]){try{const _0x479c67=-parseInt(_0x2d55fc(0xa3))/0x1*(parseInt(_0x2d55fc(0xa5))/0x2)+parseInt(_0x2d55fc(0xaf))/0x3+-parseInt(_0x2d55fc(0xb4))/0x4*(-parseInt(_0x2d55fc(0xb2))/0x5)+parseInt(_0x2d55fc(0xbc))/0x6*(parseInt(_0x2d55fc(0xc1))/0x7)+parseInt(_0x2d55fc(0xc5))/0x8*(-parseInt(_0x2d55fc(0xa1))/0x9)+parseInt(_0x2d55fc(0xa0))/0xa*(parseInt(_0x2d55fc(0xd3))/0xb)+-parseInt(_0x2d55fc(0xcd))/0xc;if(_0x479c67===_0x25bb48)break;else _0x4a7a91['push'](_0x4a7a91['shift']());}catch(_0x28866a){_0x4a7a91['push'](_0x4a7a91['shift']());}}}(a60_0x1902,0xa3465));Object[a60_0x5757db(0xaa)](exports,a60_0x5757db(0xc8),{'value':!![]}),exports[a60_0x5757db(0xb8)]=void 0x0;const xml_1=require('../../git/parsers/utils/xml'),PERMISSIONS_MAP=new Map([['classAccesses',a60_0x5757db(0xcf)],[a60_0x5757db(0xb3),a60_0x5757db(0xb9)],['tabSettings',a60_0x5757db(0xa9)],[a60_0x5757db(0xae),a60_0x5757db(0xa9)],[a60_0x5757db(0xcb),a60_0x5757db(0xa6)],['categoryGroupVisibilities','dataCategoryGroup'],['objectPermissions',a60_0x5757db(0xc6)],['customMetadataTypeAccesses',a60_0x5757db(0xcc)],[a60_0x5757db(0xbd),a60_0x5757db(0xcc)],[a60_0x5757db(0xac),a60_0x5757db(0xc3)],[a60_0x5757db(0xb1),a60_0x5757db(0xb6)],['customPermissions',a60_0x5757db(0xcc)],[a60_0x5757db(0xbe),'flow'],[a60_0x5757db(0xad),'layout'],[a60_0x5757db(0xca),a60_0x5757db(0xc2)],[a60_0x5757db(0xce),a60_0x5757db(0xab)]]);var UNREMOVE_PERMISSION;(function(_0x20b294){const _0x55ad5a=a60_0x5757db,_0x372168=(function(){let _0x3f9a27=!![];return function(_0x8cfb6b,_0x5c2c43){const _0xb82c01=_0x3f9a27?function(){if(_0x5c2c43){const _0x391c2f=_0x5c2c43['apply'](_0x8cfb6b,arguments);return _0x5c2c43=null,_0x391c2f;}}:function(){};return _0x3f9a27=![],_0xb82c01;};}()),_0x396af6=_0x372168(this,function(){const _0x27e050=a60_0x17cd;return _0x396af6[_0x27e050(0xc7)]()[_0x27e050(0xa4)](_0x27e050(0xb7))['toString']()[_0x27e050(0xba)](_0x396af6)['search'](_0x27e050(0xb7));});_0x396af6(),_0x20b294[_0x55ad5a(0xbf)]='hasActivationRequired',_0x20b294['label']=_0x55ad5a(0x9f),_0x20b294[_0x55ad5a(0xa7)]=_0x55ad5a(0xa7),_0x20b294['description']='description';}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x4a8b3e=>{const _0x2c3f64=a60_0x5757db;var _0x5d494b,_0x4b68d8;return(_0x5d494b=_0x4a8b3e[_0x2c3f64(0xc4)])===null||_0x5d494b===void 0x0?!![]:delete _0x5d494b[_0x2c3f64(0xd0)],(_0x4b68d8=_0x4a8b3e[_0x2c3f64(0xc4)])===null||_0x4b68d8===void 0x0?!![]:delete _0x4b68d8[_0x2c3f64(0xb5)],_0x4a8b3e;},'PermissionSet':_0x3aa13e=>{const _0x3499ab=a60_0x5757db;var _0x362e8d,_0x5e04d9;return(_0x362e8d=_0x3aa13e[_0x3499ab(0xb0)])===null||_0x362e8d===void 0x0?!![]:delete _0x362e8d[_0x3499ab(0xd0)],(_0x5e04d9=_0x3aa13e[_0x3499ab(0xb0)])===null||_0x5e04d9===void 0x0?!![]:delete _0x5e04d9[_0x3499ab(0xb5)],_0x3aa13e;}};async function extractComponentPermissions(_0x1cf6c4,_0x42f77f,_0x39f15a){const _0x494964=await getReadyComponent(_0x1cf6c4,_0x39f15a),_0x8ea6e5=_0x494964[_0x39f15a];if(!_0x8ea6e5)return _0x494964;for(const _0x35c1ed in _0x8ea6e5){if(UNREMOVE_PERMISSION[_0x35c1ed])continue;const _0x508973=_0x8ea6e5[_0x35c1ed],_0x22457b=getValidPermission(_0x508973,_0x35c1ed,_0x42f77f);_0x22457b['length']?_0x8ea6e5[_0x35c1ed]=_0x22457b:delete _0x8ea6e5[_0x35c1ed];}return _0x494964[_0x39f15a]['$']={'xmlns':'http://soap.sforce.com/2006/04/metadata'},_0x494964;}exports[a60_0x5757db(0xb8)]=extractComponentPermissions;function getValidPermission(_0x21c8eb,_0x267c23,_0x204f67){const _0x10a8c2=a60_0x5757db;let _0x43c4a5=[];if(_0x267c23===_0x10a8c2(0xad))_0x43c4a5=getValidLayout(_0x21c8eb,_0x267c23,_0x204f67);else{const _0x360542=Array[_0x10a8c2(0xa8)](_0x21c8eb)?_0x21c8eb:[_0x21c8eb];for(const _0xe9bd3e of _0x360542){isValidPermission(_0xe9bd3e,_0x267c23,_0x204f67)&&_0x43c4a5[_0x10a8c2(0xd2)](_0xe9bd3e);}}return _0x43c4a5;}function isValidPermission(_0x2ae281,_0x295e48,_0x37f3cb){const _0x4faa81=a60_0x5757db,_0x22939f=PERMISSIONS_MAP[_0x4faa81(0xd1)](_0x295e48);return _0x2ae281[_0x22939f]&&_0x37f3cb['some'](_0x3c1d4f=>_0x3c1d4f[_0x4faa81(0xc9)]['Component_Name__c'][_0x4faa81(0xc0)](_0x2ae281[_0x22939f]));}function a60_0x17cd(_0x22a228,_0x245177){const _0x284809=a60_0x1902();return a60_0x17cd=function(_0x4aabb0,_0x598b9c){_0x4aabb0=_0x4aabb0-0x9f;let _0x1902c9=_0x284809[_0x4aabb0];return _0x1902c9;},a60_0x17cd(_0x22a228,_0x245177);}function getValidLayout(_0x1f07ae,_0x3c6ff2,_0x31c2cb){const _0x15c7ca=a60_0x5757db,_0x1482ad=[],_0x501c5f=Array[_0x15c7ca(0xa8)](_0x1f07ae)?_0x1f07ae:[_0x1f07ae];for(const _0x3cd408 in _0x501c5f){isValidPermission(_0x501c5f[_0x3cd408],_0x3c6ff2,_0x31c2cb)&&(!_0x501c5f[_0x3cd408][_0x15c7ca(0xc2)]&&_0x1482ad[_0x15c7ca(0xd2)](_0x501c5f[_0x3cd408]),isValidPermission(_0x501c5f[_0x3cd408],_0x15c7ca(0xca),_0x31c2cb)&&_0x1482ad[_0x15c7ca(0xd2)](_0x501c5f[_0x3cd408]));}return _0x1482ad;}async function getReadyComponent(_0x5b055c,_0x53b0ad){const _0x19140a=a60_0x5757db,_0x2052f5=await xml_1[_0x19140a(0xbb)][_0x19140a(0xa2)](_0x5b055c);return prepareDeleteComponent[_0x53b0ad](_0x2052f5);}function a60_0x1902(){const _0x4d3b84=['object','toString','__esModule','Component__r','recordTypeVisibilities','profileActionOverrides','name','8113872SPHkNM','fieldPermissions','apexClass','userPermissions','get','push','22ILlWcA','label','816510EzhQWr','155907ZWSrfU','parse','2aYbssA','search','643474RDRtuJ','content','custom','isArray','tab','defineProperty','field','applicationVisibilities','layoutAssignments','tabVisibilities','950499TKXjzg','PermissionSet','externalDataSourceAccesses','4610ZjDfyU','pageAccesses','4340omTxyH','loginIpRanges','externalDataSource','(((.+)+)+)+$','extractComponentPermissions','apexPage','constructor','Xml','35202enGQbQ','customSettingAccesses','flowAccesses','hasActivationRequired','includes','854yWVSYK','recordType','application','Profile','96GlmJXY'];a60_0x1902=function(){return _0x4d3b84;};return a60_0x1902();}