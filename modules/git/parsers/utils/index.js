const a157_0x3d75a2=a157_0x38e4;(function(_0x24d6dd,_0x5ed1f1){const _0x573f6c=a157_0x38e4,_0x5da115=_0x24d6dd();while(!![]){try{const _0x23bd9c=-parseInt(_0x573f6c(0x1c6))/0x1*(-parseInt(_0x573f6c(0x1ae))/0x2)+parseInt(_0x573f6c(0x1c3))/0x3+-parseInt(_0x573f6c(0x1c9))/0x4*(parseInt(_0x573f6c(0x186))/0x5)+-parseInt(_0x573f6c(0x1b8))/0x6*(-parseInt(_0x573f6c(0x185))/0x7)+parseInt(_0x573f6c(0x1a2))/0x8*(-parseInt(_0x573f6c(0x18f))/0x9)+parseInt(_0x573f6c(0x18d))/0xa+parseInt(_0x573f6c(0x182))/0xb*(-parseInt(_0x573f6c(0x1a5))/0xc);if(_0x23bd9c===_0x5ed1f1)break;else _0x5da115['push'](_0x5da115['shift']());}catch(_0x6dedaa){_0x5da115['push'](_0x5da115['shift']());}}}(a157_0x24a4,0x51046));const a157_0x2701f8=(function(){let _0x179ecd=!![];return function(_0x4003e2,_0x394f81){const _0x4ddce6=_0x179ecd?function(){const _0x1c276a=a157_0x38e4;if(_0x394f81){const _0x54da13=_0x394f81[_0x1c276a(0x190)](_0x4003e2,arguments);return _0x394f81=null,_0x54da13;}}:function(){};return _0x179ecd=![],_0x4ddce6;};}()),a157_0x147df6=a157_0x2701f8(this,function(){const _0x10b8fa=a157_0x38e4;return a157_0x147df6[_0x10b8fa(0x183)]()[_0x10b8fa(0x1b7)]('(((.+)+)+)+$')[_0x10b8fa(0x183)]()[_0x10b8fa(0x187)](a157_0x147df6)[_0x10b8fa(0x1b7)]('(((.+)+)+)+$');});a157_0x147df6();'use strict';var __importDefault=this&&this[a157_0x3d75a2(0x1b5)]||function(_0x4d29f2){const _0x2c951e=a157_0x3d75a2;return _0x4d29f2&&_0x4d29f2[_0x2c951e(0x195)]?_0x4d29f2:{'default':_0x4d29f2};};Object[a157_0x3d75a2(0x199)](exports,a157_0x3d75a2(0x195),{'value':!![]}),exports['readFilesByFilename']=exports['extractComponentTypeFromFiles']=exports['extractFileNameFromFiles']=exports[a157_0x3d75a2(0x1c4)]=exports[a157_0x3d75a2(0x1bf)]=exports['isParentComponentFile']=exports['isParentComponent']=exports[a157_0x3d75a2(0x1bb)]=exports[a157_0x3d75a2(0x189)]=exports[a157_0x3d75a2(0x1a4)]=exports[a157_0x3d75a2(0x19f)]=void 0x0;const constants_1=require(a157_0x3d75a2(0x1a7)),path_1=__importDefault(require(a157_0x3d75a2(0x1ca))),child_types_map_1=__importDefault(require('../data/child-types-map')),parent_xml_types_1=__importDefault(require('../data/parent-xml-types')),xml_v2_1=require('./xml-v2'),crc_32_1=__importDefault(require(a157_0x3d75a2(0x1ad))),parent_xml_types_map_1=__importDefault(require(a157_0x3d75a2(0x1af))),fs_internal_1=require(a157_0x3d75a2(0x19a));function convertToCleanPaths(_0x10daa3){const _0x1c8d2b=a157_0x3d75a2,_0x112ab2=_0x10daa3['filter'](_0x3099da=>_0x3099da['endsWith'](constants_1['META_XML_EXTENSION'])),_0x4a84f0=_0x112ab2['map'](_0x315434=>_0x315434['replace'](new RegExp(constants_1['META_XML_EXTENSION']+'$'),'')),_0x148ef5=_0x10daa3[_0x1c8d2b(0x1a9)](_0x57e05b=>!_0x112ab2[_0x1c8d2b(0x19d)](_0x57e05b));return[...new Set([..._0x148ef5,..._0x4a84f0])];}exports[a157_0x3d75a2(0x19f)]=convertToCleanPaths;function filterParserPaths(_0x2412bd){const _0x21265f=a157_0x3d75a2,_0x2b0289=[...new Set(_0x2412bd[_0x21265f(0x1a9)](_0x35a91a=>!_0x35a91a['endsWith'](constants_1[_0x21265f(0x192)])))],_0x168299=_0x2412bd[_0x21265f(0x1a9)](_0x53279e=>_0x53279e['endsWith'](constants_1['META_XML_EXTENSION']))[_0x21265f(0x1a9)](_0x324c8a=>!_0x2b0289['includes'](_0x324c8a[_0x21265f(0x18c)](constants_1['META_XML_EXTENSION'],'')));return[..._0x168299,..._0x2b0289];}exports['filterParserPaths']=filterParserPaths;function getChildComponentTypeByChildNodeName(_0xde93a7){const _0x345e3e=a157_0x3d75a2,_0x42857e=Object[_0x345e3e(0x1aa)](child_types_map_1[_0x345e3e(0x1be)])[_0x345e3e(0x19c)](([_0x12179b,_0x1f2ced])=>_0x1f2ced===_0xde93a7);if(!_0x42857e)throw new Error(_0x345e3e(0x1b1)+_0xde93a7);return _0x42857e[0x0];}exports[a157_0x3d75a2(0x189)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x539bb8){const _0x169ca7=a157_0x3d75a2,_0x48047a=_0x539bb8[_0x169ca7(0x1c7)](path_1[_0x169ca7(0x1be)][_0x169ca7(0x1a8)]),_0x1a91a9=path_1[_0x169ca7(0x1be)]['basename'](_0x539bb8[_0x169ca7(0x18c)](constants_1[_0x169ca7(0x192)],''),path_1['default'][_0x169ca7(0x19b)](_0x539bb8));if(_0x48047a['length']>0x2)return _0x48047a[_0x48047a[_0x169ca7(0x1ab)]-0x2]+'/'+_0x1a91a9;return _0x1a91a9;}exports[a157_0x3d75a2(0x1bb)]=extractFilenameFromPath;function isParentComponent({type:_0x3a96c6}){const _0x436edd=a157_0x3d75a2;return parent_xml_types_1[_0x436edd(0x1be)][_0x436edd(0x19d)](_0x3a96c6);}exports[a157_0x3d75a2(0x193)]=isParentComponent;function a157_0x24a4(){const _0x579181=['isParentComponentFile','files','relative','356571mmngvp','createChildComponentsFromParent','some','1XAGuZQ','split','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','1733516yEraLR','path','4906Voaqcz','toString','CustomLabels','14UVgxLW','5QtTWfj','constructor','fullName','getChildComponentTypeByChildNodeName','dirname','name','replace','4241310VHUsNT','endsWith','440091gcLILn','apply','filePath','META_XML_EXTENSION','isParentComponent','type','__esModule','join',']\x20index\x20in\x20(','sort','defineProperty','../../internal/fs.internal','extname','find','includes','crc','convertToCleanPaths','dir','nodeData','56ZzqavP','utf-8','filterParserPaths','1848heHTmK','str','../../../../constants','sep','filter','entries','length','XmlV2','crc-32','1058104BciPOH','../data/parent-xml-types-map','map','Unknown\x20child\x20type\x20for\x20','addChildNode','extractFileNameFromFiles','keys','__importDefault','parse','search','312486yKKGTA','indexOf','push','extractFilenameFromPath','nodeName','values','default','calculateCRC32'];a157_0x24a4=function(){return _0x579181;};return a157_0x24a4();}function isParentComponentFile(_0x74706a){const _0x51eb2d=a157_0x3d75a2,_0x278f4f=path_1[_0x51eb2d(0x1be)][_0x51eb2d(0x1b6)](_0x74706a);return Object[_0x51eb2d(0x1bd)](parent_xml_types_map_1[_0x51eb2d(0x1be)])[_0x51eb2d(0x1c5)](_0x21443b=>_0x278f4f[_0x51eb2d(0x1a0)][_0x51eb2d(0x18e)](_0x21443b));}exports[a157_0x3d75a2(0x1c0)]=isParentComponentFile;function calculateCRC32(_0x264cba){const _0x23f5b1=a157_0x3d75a2,_0x25a7fc=Object['keys'](_0x264cba[_0x23f5b1(0x1c1)])[_0x23f5b1(0x198)]();switch(_0x25a7fc[_0x23f5b1(0x1ab)]){case 0x1:{const [_0x4c7b77]=_0x25a7fc,_0x1a6186=_0x264cba[_0x23f5b1(0x1c1)][_0x4c7b77];return crc_32_1[_0x23f5b1(0x1be)][_0x23f5b1(0x1a6)](_0x1a6186[_0x23f5b1(0x183)](_0x23f5b1(0x1a3)),0x20)['toString']();}case 0x2:{const [_0x61937d,_0x248895]=_0x25a7fc,_0x8b0302=_0x264cba[_0x23f5b1(0x1c1)][_0x61937d],_0x117325=_0x264cba[_0x23f5b1(0x1c1)][_0x248895];return crc_32_1[_0x23f5b1(0x1be)][_0x23f5b1(0x1a6)](_0x8b0302['toString'](_0x23f5b1(0x1a3)),0x20)[_0x23f5b1(0x183)]()+'\x20'+crc_32_1[_0x23f5b1(0x1be)]['str'](_0x117325[_0x23f5b1(0x183)](_0x23f5b1(0x1a3)),0x20)[_0x23f5b1(0x183)]();}default:{let _0x20f2b8=0x0;if(_0x25a7fc[_0x23f5b1(0x1ab)]>0x0)_0x20f2b8=crc_32_1['default']['str'](_0x264cba[_0x23f5b1(0x1c1)][_0x25a7fc[0x0]][_0x23f5b1(0x183)](_0x23f5b1(0x1a3)),0x20);for(let _0x25ef7e=0x1;_0x25ef7e<_0x25a7fc['length'];_0x25ef7e++){const _0x208cbb=crc_32_1[_0x23f5b1(0x1be)][_0x23f5b1(0x1a6)](_0x264cba[_0x23f5b1(0x1c1)][_0x25a7fc[_0x25ef7e]][_0x23f5b1(0x183)](_0x23f5b1(0x1a3)),0x20);_0x20f2b8=Math['round']((_0x208cbb+_0x20f2b8)/0x2);}return _0x20f2b8[_0x23f5b1(0x183)]();}}}exports['calculateCRC32']=calculateCRC32;function createChildComponentsFromParent(_0x3454eb,_0x201b56,_0x10e6f0){const _0x4bb22e=a157_0x3d75a2,_0xc79605=[];for(const _0xecf099 of _0x10e6f0){const _0x3ac683=xml_v2_1['XmlV2'][_0x4bb22e(0x1b2)](xml_v2_1[_0x4bb22e(0x1ac)]['createEmptyRootNodeFrom'](_0x201b56),_0xecf099[_0x4bb22e(0x1bc)],_0xecf099[_0x4bb22e(0x1a1)]),_0x2b3e16={};_0x2b3e16[_0x4bb22e(0x191)]=_0x3454eb[_0x4bb22e(0x191)],_0x2b3e16[_0x4bb22e(0x194)]=getChildComponentTypeByChildNodeName(_0xecf099['nodeName']),_0x3454eb['type']===_0x4bb22e(0x184)?_0x2b3e16[_0x4bb22e(0x18b)]=_0xecf099['nodeData'][_0x4bb22e(0x188)]:_0x2b3e16[_0x4bb22e(0x18b)]=_0x3454eb[_0x4bb22e(0x18b)]+'.'+_0xecf099[_0x4bb22e(0x1a1)][_0x4bb22e(0x188)],_0x2b3e16[_0x4bb22e(0x1c1)]={[Object[_0x4bb22e(0x1b4)](_0x3454eb[_0x4bb22e(0x1c1)])[0x0]]:Buffer['from'](xml_v2_1[_0x4bb22e(0x1ac)]['convertToString'](_0x3ac683,![]))},_0x2b3e16[_0x4bb22e(0x19e)]=calculateCRC32(_0x2b3e16),_0xc79605[_0x4bb22e(0x1ba)](_0x2b3e16);}return _0xc79605;}exports[a157_0x3d75a2(0x1c4)]=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x22ea71}){const _0x258c03=a157_0x3d75a2;var _0x245b39;const _0x488598=Object['keys'](_0x22ea71);return((_0x245b39=_0x488598[0x0])===null||_0x245b39===void 0x0?void 0x0:_0x245b39['replace'](constants_1[_0x258c03(0x192)],''))||'';}function a157_0x38e4(_0x55fc42,_0x4c8901){const _0x413610=a157_0x24a4();return a157_0x38e4=function(_0x147df6,_0x2701f8){_0x147df6=_0x147df6-0x182;let _0x24a42a=_0x413610[_0x147df6];return _0x24a42a;},a157_0x38e4(_0x55fc42,_0x4c8901);}exports[a157_0x3d75a2(0x1b3)]=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x33f2e9}){const _0x1795dc=a157_0x3d75a2,_0x531794=Object[_0x1795dc(0x1b4)](_0x33f2e9),_0x5b8262=_0x531794[_0x1795dc(0x19c)](_0x5072f0=>_0x5072f0[_0x1795dc(0x18e)](constants_1['META_XML_EXTENSION']))||_0x531794[0x0];try{const _0x329334=await xml_v2_1['XmlV2']['parse'](_0x33f2e9[_0x5b8262][_0x1795dc(0x183)](_0x1795dc(0x1a3))),_0x27fa2c=Object['keys'](_0x329334)[0x0];if(!_0x27fa2c)throw new Error();return _0x27fa2c;}catch(_0x2af636){throw new Error(_0x1795dc(0x1c8)+_0x531794[_0x1795dc(0x1b9)](_0x5b8262)+_0x1795dc(0x197)+_0x531794[_0x1795dc(0x196)](',\x20')+')');}}exports['extractComponentTypeFromFiles']=extractComponentTypeFromFiles;async function readFilesByFilename(_0x3c03ec,_0x1613fd){const _0x3a97df=a157_0x3d75a2,_0x51bdb8=path_1[_0x3a97df(0x1be)][_0x3a97df(0x18a)](_0x3c03ec),_0x4f8192=path_1['default'][_0x3a97df(0x196)](_0x1613fd,_0x51bdb8),_0x6c5cc4=await fs_internal_1['FS']['readDir'](_0x4f8192,!![]),_0x1e4a73=_0x6c5cc4[_0x3a97df(0x1b0)](_0xc7079a=>path_1[_0x3a97df(0x1be)][_0x3a97df(0x1c2)](_0x1613fd,_0xc7079a)),_0x5c9337=new RegExp('^'+_0x3c03ec+'[./-]{1}');return _0x1e4a73['filter'](_0x2ecbcd=>_0x2ecbcd['match'](_0x5c9337));}exports['readFilesByFilename']=readFilesByFilename;