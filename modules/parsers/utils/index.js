const a100_0x397b62=a100_0x3285;(function(_0x374e5a,_0x54593b){const _0x53e4ff=a100_0x3285,_0x4e5ca7=_0x374e5a();while(!![]){try{const _0x2be786=-parseInt(_0x53e4ff(0x9e))/0x1+parseInt(_0x53e4ff(0x93))/0x2*(parseInt(_0x53e4ff(0xc4))/0x3)+parseInt(_0x53e4ff(0x98))/0x4+parseInt(_0x53e4ff(0xa4))/0x5+parseInt(_0x53e4ff(0xa2))/0x6+parseInt(_0x53e4ff(0xb7))/0x7+-parseInt(_0x53e4ff(0xba))/0x8;if(_0x2be786===_0x54593b)break;else _0x4e5ca7['push'](_0x4e5ca7['shift']());}catch(_0x14b4c5){_0x4e5ca7['push'](_0x4e5ca7['shift']());}}}(a100_0x545a,0xafaec));const a100_0x3506fe=(function(){let _0x13c552=!![];return function(_0x752de3,_0x4eaf69){const _0x1cb000=_0x13c552?function(){const _0x3219b6=a100_0x3285;if(_0x4eaf69){const _0x537cfe=_0x4eaf69[_0x3219b6(0xa5)](_0x752de3,arguments);return _0x4eaf69=null,_0x537cfe;}}:function(){};return _0x13c552=![],_0x1cb000;};}()),a100_0x1f616f=a100_0x3506fe(this,function(){const _0x397a41=a100_0x3285;return a100_0x1f616f[_0x397a41(0xc7)]()['search'](_0x397a41(0xb5))[_0x397a41(0xc7)]()[_0x397a41(0x9a)](a100_0x1f616f)[_0x397a41(0xa7)]('(((.+)+)+)+$');});function a100_0x3285(_0x57cd20,_0x344b89){const _0x4a6794=a100_0x545a();return a100_0x3285=function(_0x1f616f,_0x3506fe){_0x1f616f=_0x1f616f-0x92;let _0x545a67=_0x4a6794[_0x1f616f];return _0x545a67;},a100_0x3285(_0x57cd20,_0x344b89);}a100_0x1f616f();'use strict';var __importDefault=this&&this['__importDefault']||function(_0xb62243){return _0xb62243&&_0xb62243['__esModule']?_0xb62243:{'default':_0xb62243};};Object[a100_0x397b62(0xa8)](exports,a100_0x397b62(0x95),{'value':!![]}),exports['extractComponentTypeFromFiles']=exports[a100_0x397b62(0xac)]=exports[a100_0x397b62(0xc6)]=exports['isParentComponentFile']=exports[a100_0x397b62(0xb9)]=exports['extractFilenameFromPath']=exports['getChildComponentTypeByChildNodeName']=exports['convertToCleanPaths']=void 0x0;const constants_1=require(a100_0x397b62(0xc9)),path_1=__importDefault(require(a100_0x397b62(0xae))),child_types_map_1=__importDefault(require(a100_0x397b62(0xb8))),parent_xml_types_1=__importDefault(require('../data/parent-xml-types')),xml_1=require('./xml'),crc_32_1=__importDefault(require(a100_0x397b62(0xb6))),parent_xml_types_map_1=__importDefault(require(a100_0x397b62(0xbb)));function a100_0x545a(){const _0x163218=['default','round','386926TtJSHr','length','parse','nodeName','3619584wtazqS','META_XML_EXTENSION','4364860glQeBc','apply','endsWith','search','defineProperty','CustomLabels','sort',']\x20index\x20in\x20(','createChildComponentsFromParent','entries','path','includes','Unknown\x20child\x20type\x20for\x20','type','push','filter','getChildComponentTypeByChildNodeName','(((.+)+)+)+$','crc-32','350007YJDEBB','../data/child-types-map','isParentComponent','22393736HqVvEY','../data/parent-xml-types-map','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','utf-8','convertToString','fullName','keys','files','indexOf','dir','2427hGKWys','Xml','calculateCRC32','toString','extname','../../../constants','convertToCleanPaths','3030ntvQhf','nodeData','__esModule','name','some','4615468WuOARq','split','constructor','str'];a100_0x545a=function(){return _0x163218;};return a100_0x545a();}function convertToCleanPaths(_0x319e01){const _0x5c998d=a100_0x397b62,_0x180996=_0x319e01[_0x5c998d(0xb3)](_0x11a4af=>_0x11a4af[_0x5c998d(0xa6)](constants_1[_0x5c998d(0xa3)])),_0x4f5b15=_0x180996['map'](_0x1290fe=>_0x1290fe['replace'](new RegExp(constants_1[_0x5c998d(0xa3)]+'$'),'')),_0x3791a4=_0x319e01[_0x5c998d(0xb3)](_0x539a8e=>!_0x180996['includes'](_0x539a8e));return[...new Set([..._0x3791a4,..._0x4f5b15])];}exports[a100_0x397b62(0x92)]=convertToCleanPaths;function getChildComponentTypeByChildNodeName(_0x2be289){const _0x10bbbe=a100_0x397b62,_0x364f5c=Object[_0x10bbbe(0xad)](child_types_map_1[_0x10bbbe(0x9c)])['find'](([_0xe9136b,_0x53c631])=>_0x53c631===_0x2be289);if(!_0x364f5c)throw new Error(_0x10bbbe(0xb0)+_0x2be289);return _0x364f5c[0x0];}exports[a100_0x397b62(0xb4)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x4056c3){const _0x65b63a=a100_0x397b62,_0x3e6a76=_0x4056c3[_0x65b63a(0x99)]('/'),_0x4e176b=path_1[_0x65b63a(0x9c)]['basename'](_0x4056c3,path_1[_0x65b63a(0x9c)][_0x65b63a(0xc8)](_0x4056c3));if(_0x3e6a76[_0x65b63a(0x9f)]>0x2)return _0x3e6a76[_0x3e6a76['length']-0x2]+'/'+_0x4e176b;return _0x4e176b;}exports['extractFilenameFromPath']=extractFilenameFromPath;function isParentComponent({type:_0x368b0f}){const _0x613324=a100_0x397b62;return parent_xml_types_1[_0x613324(0x9c)][_0x613324(0xaf)](_0x368b0f);}exports[a100_0x397b62(0xb9)]=isParentComponent;function isParentComponentFile(_0x4f089a){const _0xd16e2c=a100_0x397b62,_0x1c6306=path_1[_0xd16e2c(0x9c)][_0xd16e2c(0xa0)](_0x4f089a);return Object['values'](parent_xml_types_map_1['default'])[_0xd16e2c(0x97)](_0x24c857=>_0x1c6306[_0xd16e2c(0xc3)][_0xd16e2c(0xa6)](_0x24c857));}exports['isParentComponentFile']=isParentComponentFile;function calculateCRC32(_0x5503ad){const _0x487673=a100_0x397b62,_0x2c1b53=Object[_0x487673(0xc0)](_0x5503ad[_0x487673(0xc1)])[_0x487673(0xaa)]();switch(_0x2c1b53[_0x487673(0x9f)]){case 0x1:{const [_0x1687b2]=_0x2c1b53,_0x61a0af=_0x5503ad['files'][_0x1687b2];return crc_32_1[_0x487673(0x9c)][_0x487673(0x9b)](_0x61a0af[_0x487673(0xc7)](_0x487673(0xbd)),0x20)[_0x487673(0xc7)]();}case 0x2:{const [_0x1e64f9,_0x436910]=_0x2c1b53,_0x19b772=_0x5503ad[_0x487673(0xc1)][_0x1e64f9],_0xdccee1=_0x5503ad[_0x487673(0xc1)][_0x436910];return crc_32_1['default'][_0x487673(0x9b)](_0x19b772['toString'](_0x487673(0xbd)),0x20)[_0x487673(0xc7)]()+'\x20'+crc_32_1[_0x487673(0x9c)][_0x487673(0x9b)](_0xdccee1[_0x487673(0xc7)](_0x487673(0xbd)),0x20)[_0x487673(0xc7)]();}default:{let _0x292293=0x0;if(_0x2c1b53['length']>0x0)_0x292293=crc_32_1[_0x487673(0x9c)]['str'](_0x5503ad[_0x487673(0xc1)][_0x2c1b53[0x0]]['toString'](_0x487673(0xbd)),0x20);for(let _0x2bb9ae=0x1;_0x2bb9ae<_0x2c1b53[_0x487673(0x9f)];_0x2bb9ae++){const _0x1c3d3e=crc_32_1[_0x487673(0x9c)]['str'](_0x5503ad['files'][_0x2c1b53[_0x2bb9ae]][_0x487673(0xc7)]('utf-8'),0x20);_0x292293=Math[_0x487673(0x9d)]((_0x1c3d3e+_0x292293)/0x2);}return _0x292293['toString']();}}}exports[a100_0x397b62(0xc6)]=calculateCRC32;function createChildComponentsFromParent(_0xc0454c,_0x1a296b,_0x2566ff){const _0x3fd174=a100_0x397b62,_0x5bf499=[];for(const _0x1ef376 of _0x2566ff){const _0x57d9a1=xml_1[_0x3fd174(0xc5)]['addChildNode'](xml_1['Xml']['createEmptyRootNodeFrom'](_0x1a296b),_0x1ef376[_0x3fd174(0xa1)],_0x1ef376['nodeData']),_0x16eac1={};_0x16eac1['filePath']=_0xc0454c['filePath'],_0x16eac1[_0x3fd174(0xb1)]=getChildComponentTypeByChildNodeName(_0x1ef376['nodeName']),_0xc0454c[_0x3fd174(0xb1)]===_0x3fd174(0xa9)?_0x16eac1[_0x3fd174(0x96)]=_0x1ef376[_0x3fd174(0x94)][_0x3fd174(0xbf)][0x0]:_0x16eac1['name']=_0xc0454c['name']+'.'+_0x1ef376[_0x3fd174(0x94)][_0x3fd174(0xbf)][0x0],_0x16eac1[_0x3fd174(0xc1)]={[Object[_0x3fd174(0xc0)](_0xc0454c[_0x3fd174(0xc1)])[0x0]]:Buffer['from'](xml_1[_0x3fd174(0xc5)][_0x3fd174(0xbe)](_0x57d9a1,![]))},_0x16eac1['crc']=calculateCRC32(_0x16eac1),_0x5bf499[_0x3fd174(0xb2)](_0x16eac1);}return _0x5bf499;}exports[a100_0x397b62(0xac)]=createChildComponentsFromParent;async function extractComponentTypeFromFiles({files:_0x2b3790}){const _0x53c6b0=a100_0x397b62,_0x299934=Object[_0x53c6b0(0xc0)](_0x2b3790),_0x34a525=_0x299934['find'](_0xefa8cb=>_0xefa8cb['endsWith'](constants_1[_0x53c6b0(0xa3)]))||_0x299934[0x0];try{const _0x20bd69=await xml_1[_0x53c6b0(0xc5)][_0x53c6b0(0xa0)](_0x2b3790[_0x34a525][_0x53c6b0(0xc7)]('utf-8')),_0x26679f=Object[_0x53c6b0(0xc0)](_0x20bd69)[0x0];if(!_0x26679f)throw new Error();return _0x26679f;}catch(_0x2940ca){throw new Error(_0x53c6b0(0xbc)+_0x299934[_0x53c6b0(0xc2)](_0x34a525)+_0x53c6b0(0xab)+_0x299934['join'](',\x20')+')');}}exports['extractComponentTypeFromFiles']=extractComponentTypeFromFiles;