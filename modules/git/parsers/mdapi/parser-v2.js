const a146_0x52d963=a146_0x33fa;(function(_0x255986,_0x4d7648){const _0x5c4848=a146_0x33fa,_0x5d340f=_0x255986();while(!![]){try{const _0x4aaa95=parseInt(_0x5c4848(0x1c9))/0x1*(-parseInt(_0x5c4848(0x1fd))/0x2)+-parseInt(_0x5c4848(0x1f8))/0x3*(-parseInt(_0x5c4848(0x1cf))/0x4)+parseInt(_0x5c4848(0x1f1))/0x5+-parseInt(_0x5c4848(0x1e5))/0x6+-parseInt(_0x5c4848(0x20f))/0x7+parseInt(_0x5c4848(0x1db))/0x8+parseInt(_0x5c4848(0x1e2))/0x9;if(_0x4aaa95===_0x4d7648)break;else _0x5d340f['push'](_0x5d340f['shift']());}catch(_0x2df5d7){_0x5d340f['push'](_0x5d340f['shift']());}}}(a146_0x137d,0xd202c));const a146_0x1c074e=(function(){let _0x498bbd=!![];return function(_0x5240c6,_0x524df5){const _0x5890b8=_0x498bbd?function(){const _0xf5c6d0=a146_0x33fa;if(_0x524df5){const _0x5dd1c9=_0x524df5[_0xf5c6d0(0x1d1)](_0x5240c6,arguments);return _0x524df5=null,_0x5dd1c9;}}:function(){};return _0x498bbd=![],_0x5890b8;};}()),a146_0x28e96b=a146_0x1c074e(this,function(){const _0x269939=a146_0x33fa;return a146_0x28e96b['toString']()[_0x269939(0x1ff)]('(((.+)+)+)+$')[_0x269939(0x1fe)]()[_0x269939(0x1de)](a146_0x28e96b)[_0x269939(0x1ff)](_0x269939(0x1e7));});a146_0x28e96b();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1e95de){const _0x18ddfa=a146_0x33fa;return _0x1e95de&&_0x1e95de[_0x18ddfa(0x1c6)]?_0x1e95de:{'default':_0x1e95de};};function a146_0x137d(){const _0x847e7f=['../../../../constants','readDir','5822088ZQobSb','slice','utf-8','constructor','relative','files','createChildComponentsFromParent','10607796LVXdSw','XmlV2','parse','7813086HNpRYe','includes','(((.+)+)+)+$','type','extractFilenameFromPath','logger','map','default','endsWith','readComponent','../utils/crc32','MDApiParserV2','657160dRzUcY','BUNDLED_FOLDERS_REGEXP','extractFileNameFromFiles','filter','META_EXTENSION','../../../../core','CustomLabels','3oXeecc','path','filePath','push','package.xml','49982KtPqjf','toString','search','reduce','../utils','-meta.xml','replace','../utils/xml-v2','crc','values','foldBundledComponentsPaths','Settings','.site-meta.xml','split','name','Cannot\x20parse\x20children\x20in\x20','test','readFile','9154838qQbiGH','paths','dir','__esModule','defineProperty','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','5oAzruZ','../data/settings-types-list','readChildComponents','startsWith','readBundledComponent','getChildsByName','6229348fQLViQ','META_EXPERIENCES_EXTENSION','apply','exists','isParentComponent','Logger','extractComponentTypeFromFiles','join','experiences','calculateCRC32'];a146_0x137d=function(){return _0x847e7f;};return a146_0x137d();}Object[a146_0x52d963(0x1c7)](exports,a146_0x52d963(0x1c6),{'value':!![]}),exports[a146_0x52d963(0x1f0)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),utils_1=require(a146_0x52d963(0x201)),path_1=require(a146_0x52d963(0x1f9)),xml_v2_1=require(a146_0x52d963(0x204)),child_types_map_1=__importDefault(require('../data/child-types-map')),constants_1=require(a146_0x52d963(0x1d9)),core_1=require(a146_0x52d963(0x1f6)),crc32_1=require(a146_0x52d963(0x1ef)),folder_types_1=__importDefault(require('../data/folder-types')),settings_types_list_1=__importDefault(require(a146_0x52d963(0x1ca))),CHILD_XML_KEYS=Object[a146_0x52d963(0x206)](child_types_map_1[a146_0x52d963(0x1ec)]);class MDApiParserV2{constructor(_0x46fb04,_0x21e2a7){const _0x59b75a=a146_0x52d963;this[_0x59b75a(0x1c5)]=_0x46fb04,this['paths']=_0x21e2a7,this[_0x59b75a(0x1ea)]=new core_1[(_0x59b75a(0x1d4))](MDApiParserV2[_0x59b75a(0x20b)]),this[_0x59b75a(0x1f5)]=_0x59b75a(0x202),this[_0x59b75a(0x1d0)]=_0x59b75a(0x209);}async[a146_0x52d963(0x1cb)](_0x53369e){const _0x3f8a37=a146_0x52d963;try{const _0x535cfc=await xml_v2_1['XmlV2'][_0x3f8a37(0x1e4)](Object[_0x3f8a37(0x206)](_0x53369e[_0x3f8a37(0x1e0)])[0x0][_0x3f8a37(0x1fe)](_0x3f8a37(0x1dd))),_0x34dd22=CHILD_XML_KEYS[_0x3f8a37(0x1f4)](_0xc72f49=>xml_v2_1['XmlV2']['hasChildNodes'](_0x535cfc,_0xc72f49))[_0x3f8a37(0x200)]((_0x3a8c19,_0x49575e)=>[..._0x3a8c19,...xml_v2_1[_0x3f8a37(0x1e3)][_0x3f8a37(0x1ce)](_0x535cfc,_0x49575e)],[]);return(0x0,utils_1[_0x3f8a37(0x1e1)])(_0x53369e,_0x535cfc,_0x34dd22);}catch(_0x3f7ca2){throw new Error(_0x3f8a37(0x20c)+_0x53369e[_0x3f8a37(0x20b)]+'\x20['+_0x53369e[_0x3f8a37(0x1e8)]+']');}}async['readBundledComponent'](_0x32b311){const _0x4c57f2=a146_0x52d963,_0x45244b=(0x0,path_1[_0x4c57f2(0x1d6)])(this['dir'],_0x32b311),_0x2a5214=_0x32b311+(_0x32b311[_0x4c57f2(0x1cc)](_0x4c57f2(0x1d7))?this[_0x4c57f2(0x1d0)]:this[_0x4c57f2(0x1f5)]),_0x1cbd57=await fs_internal_1['FS'][_0x4c57f2(0x1da)](_0x45244b,!![]),_0x51a248=await fs_internal_1['FS']['readFile']((0x0,path_1[_0x4c57f2(0x1d6)])(this[_0x4c57f2(0x1c5)],_0x2a5214),!![])['catch'](()=>null),_0x3f8bde={};for(const _0x30a366 of _0x1cbd57){_0x3f8bde[(0x0,path_1[_0x4c57f2(0x1df)])(this[_0x4c57f2(0x1c5)],_0x30a366)[_0x4c57f2(0x203)](/\\/g,'/')]=await fs_internal_1['FS'][_0x4c57f2(0x20e)](_0x30a366,!![]);}return _0x51a248&&(_0x3f8bde[(0x0,path_1[_0x4c57f2(0x1df)])(this[_0x4c57f2(0x1c5)],_0x2a5214)['replace'](/\\/g,'/')]=_0x51a248),_0x3f8bde;}async[a146_0x52d963(0x1ee)](_0x1dbf4a){const _0x25d575=a146_0x52d963,_0x3f7fa7=_0x1dbf4a+this['META_EXTENSION'];if(constants_1[_0x25d575(0x1f2)]['test'](_0x1dbf4a))return this[_0x25d575(0x1cd)](_0x1dbf4a);if(await fs_internal_1['FS'][_0x25d575(0x1d2)]((0x0,path_1[_0x25d575(0x1d6)])(this[_0x25d575(0x1c5)],_0x3f7fa7))){const _0x476fed=await fs_internal_1['FS'][_0x25d575(0x20e)]((0x0,path_1[_0x25d575(0x1d6)])(this[_0x25d575(0x1c5)],_0x3f7fa7),!![]),_0x4a02d5=await(0x0,utils_1[_0x25d575(0x1d5)])({'files':{[_0x3f7fa7]:_0x476fed}})['catch'](()=>null);if(_0x4a02d5&&folder_types_1[_0x25d575(0x1ec)][_0x25d575(0x1e6)](_0x4a02d5))return{[_0x3f7fa7]:_0x476fed};return{[_0x3f7fa7]:_0x476fed,[_0x1dbf4a]:await fs_internal_1['FS'][_0x25d575(0x20e)]((0x0,path_1['join'])(this['dir'],_0x1dbf4a),!![])};}return{[_0x1dbf4a]:await fs_internal_1['FS'][_0x25d575(0x20e)]((0x0,path_1['join'])(this['dir'],_0x1dbf4a),!![])};}[a146_0x52d963(0x207)](){const _0x49c314=a146_0x52d963;this[_0x49c314(0x210)]=this[_0x49c314(0x210)][_0x49c314(0x1eb)](_0x3d489b=>constants_1[_0x49c314(0x1f2)][_0x49c314(0x20d)](_0x3d489b)?_0x3d489b[_0x49c314(0x20a)]('/')[_0x49c314(0x1dc)](0x0,0x2)['join']('/'):_0x3d489b),this[_0x49c314(0x210)]=[...new Set(this[_0x49c314(0x210)])];}async[a146_0x52d963(0x1e4)](){const _0x4dddb0=a146_0x52d963,_0x32e9e4=[];this['foldBundledComponentsPaths']();for(const _0x1b576d of this['paths']){if(_0x1b576d[_0x4dddb0(0x1ed)](_0x4dddb0(0x1fc)))continue;const _0x453e54={};try{_0x453e54['files']=await this['readComponent'](_0x1b576d),_0x453e54[_0x4dddb0(0x1fa)]=constants_1[_0x4dddb0(0x1f2)]['test'](_0x1b576d)?_0x1b576d:(0x0,utils_1[_0x4dddb0(0x1f3)])({'files':_0x453e54[_0x4dddb0(0x1e0)]}),_0x1b576d[_0x4dddb0(0x1cc)]('waveTemplates')?_0x453e54['type']='WaveTemplateBundle':_0x453e54[_0x4dddb0(0x1e8)]=await(0x0,utils_1[_0x4dddb0(0x1d5)])({'files':_0x453e54['files']});}catch(_0x9ae47f){this[_0x4dddb0(0x1ea)]['error'](_0x4dddb0(0x1c8),_0x1b576d,_0x9ae47f);continue;}_0x453e54[_0x4dddb0(0x20b)]=(0x0,utils_1[_0x4dddb0(0x1e9)])(_0x1b576d),_0x453e54[_0x4dddb0(0x205)]=(0x0,crc32_1[_0x4dddb0(0x1d8)])(_0x453e54);if((0x0,utils_1[_0x4dddb0(0x1d3)])(_0x453e54)){const _0x14b134=await this[_0x4dddb0(0x1cb)](_0x453e54);_0x32e9e4['push'](..._0x14b134);}if(_0x453e54[_0x4dddb0(0x1e8)]===_0x4dddb0(0x1f7))continue;settings_types_list_1[_0x4dddb0(0x1ec)][_0x4dddb0(0x1e6)](_0x453e54['type'])&&(_0x453e54[_0x4dddb0(0x1e8)]=_0x4dddb0(0x208)),_0x32e9e4[_0x4dddb0(0x1fb)](_0x453e54);}return _0x32e9e4;}}function a146_0x33fa(_0x3d3e88,_0x37e1aa){const _0x23ed1b=a146_0x137d();return a146_0x33fa=function(_0x28e96b,_0x1c074e){_0x28e96b=_0x28e96b-0x1c5;let _0x137de5=_0x23ed1b[_0x28e96b];return _0x137de5;},a146_0x33fa(_0x3d3e88,_0x37e1aa);}exports['MDApiParserV2']=MDApiParserV2;