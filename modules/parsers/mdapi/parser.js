function a95_0x3218(){const _0x7de29a=['readFile','readComponentFiles','package.xml','error\x20occured\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','313784YXoZJw','__importDefault','files','startsWith','values','BUNDLED_FOLDERS_REGEXP','utf-8','parse','search','META_EXPERIENCES_EXTENSION','../../web-hooks/utils/git-commit.utils','(((.+)+)+)+$','map','extractComponentTypeFromFiles','../../internal/fs.internal','../utils','join','extractFilenameFromPath','../../../core','all','isParentComponent','4146kiQxeO','push','.site-meta.xml','hasChildNodes','reduce','logger','extname','waveTemplates','find','init','Component\x20\x22','665820jufXJz','Logger','name','getChildsByName','toString','type','MDApiParser','../../../constants','__esModule','dir','isDir','259917HibWDx','META_EXTENSION','101939UKBFBv','readBundledFiles','28gNGvfD','paths','20SGqDzs','2891145LkGWvm','readChildComponents','catch','default','../utils/xml','11788yQXeeH','isPathsEquals','experiences','error','apply','Xml','filePath','readDir','filter','test','defineProperty','7697390uItZYM','relative','split','crc','isSFDXProject'];a95_0x3218=function(){return _0x7de29a;};return a95_0x3218();}const a95_0x4bbde4=a95_0xd5f4;(function(_0x50a53f,_0x4c6858){const _0x596fdf=a95_0xd5f4,_0x5097f0=_0x50a53f();while(!![]){try{const _0x1c9ea2=-parseInt(_0x596fdf(0xba))/0x1*(-parseInt(_0x596fdf(0xbc))/0x2)+parseInt(_0x596fdf(0xb8))/0x3*(parseInt(_0x596fdf(0xbe))/0x4)+-parseInt(_0x596fdf(0xbf))/0x5+parseInt(_0x596fdf(0xed))/0x6*(-parseInt(_0x596fdf(0xc4))/0x7)+-parseInt(_0x596fdf(0xd8))/0x8+-parseInt(_0x596fdf(0xf8))/0x9+parseInt(_0x596fdf(0xcf))/0xa;if(_0x1c9ea2===_0x4c6858)break;else _0x5097f0['push'](_0x5097f0['shift']());}catch(_0x41deaf){_0x5097f0['push'](_0x5097f0['shift']());}}}(a95_0x3218,0xbd35c));const a95_0x264409=(function(){let _0x282c2a=!![];return function(_0x677e8a,_0x2ef653){const _0x2645fd=_0x282c2a?function(){const _0x50f583=a95_0xd5f4;if(_0x2ef653){const _0x426be7=_0x2ef653[_0x50f583(0xc8)](_0x677e8a,arguments);return _0x2ef653=null,_0x426be7;}}:function(){};return _0x282c2a=![],_0x2645fd;};}()),a95_0x329a72=a95_0x264409(this,function(){const _0x14f973=a95_0xd5f4;return a95_0x329a72['toString']()[_0x14f973(0xe0)](_0x14f973(0xe3))['toString']()['constructor'](a95_0x329a72)['search'](_0x14f973(0xe3));});a95_0x329a72();'use strict';var __importDefault=this&&this[a95_0x4bbde4(0xd9)]||function(_0x41582a){return _0x41582a&&_0x41582a['__esModule']?_0x41582a:{'default':_0x41582a};};function a95_0xd5f4(_0x34755b,_0x750de0){const _0x3dca5b=a95_0x3218();return a95_0xd5f4=function(_0x329a72,_0x264409){_0x329a72=_0x329a72-0xaf;let _0x32185e=_0x3dca5b[_0x329a72];return _0x32185e;},a95_0xd5f4(_0x34755b,_0x750de0);}Object[a95_0x4bbde4(0xce)](exports,a95_0x4bbde4(0xb5),{'value':!![]}),exports['MDApiParser']=void 0x0;const fs_internal_1=require(a95_0x4bbde4(0xe6)),utils_1=require(a95_0x4bbde4(0xe7)),path_1=require('path'),xml_1=require(a95_0x4bbde4(0xc3)),child_types_map_1=__importDefault(require('../data/child-types-map')),constants_1=require(a95_0x4bbde4(0xb4)),core_1=require(a95_0x4bbde4(0xea)),git_commit_utils_1=require(a95_0x4bbde4(0xe2)),CHILD_XML_KEYS=Object['values'](child_types_map_1[a95_0x4bbde4(0xc2)]);class MDApiParser{constructor(_0xd238cf,_0x279226,_0x23e3fd){const _0x1ba105=a95_0x4bbde4;this['dir']=_0xd238cf,this[_0x1ba105(0xd3)]=_0x23e3fd,this[_0x1ba105(0xf2)]=new core_1[(_0x1ba105(0xf9))](MDApiParser[_0x1ba105(0xaf)]),this[_0x1ba105(0xb9)]='-meta.xml',this['META_EXPERIENCES_EXTENSION']=_0x1ba105(0xef),this[_0x1ba105(0xbd)]=utils_1['convertToCleanPaths'](_0x279226);}async['readChildComponents'](_0x1a8f07){const _0x482192=a95_0x4bbde4;try{const _0x57e358=await xml_1['Xml'][_0x482192(0xdf)](Object[_0x482192(0xdc)](_0x1a8f07[_0x482192(0xda)])[0x0][_0x482192(0xb1)](_0x482192(0xde))),_0x1f387a=CHILD_XML_KEYS[_0x482192(0xcc)](_0x26c5f3=>xml_1[_0x482192(0xc9)][_0x482192(0xf0)](_0x57e358,_0x26c5f3))[_0x482192(0xf1)]((_0x3f2fab,_0x298b70)=>[..._0x3f2fab,...xml_1[_0x482192(0xc9)][_0x482192(0xb0)](_0x57e358,_0x298b70)],[]);return utils_1['createChildComponentsFromParent'](_0x1a8f07,_0x57e358,_0x1f387a);}catch(_0x4ac885){throw new Error('Cannot\x20parse\x20childs\x20in\x20'+_0x1a8f07[_0x482192(0xaf)]+'\x20['+_0x1a8f07[_0x482192(0xb2)]+']');}}async[a95_0x4bbde4(0xbb)](_0x11bc54){const _0x1624f7=a95_0x4bbde4,_0x4d5125=path_1[_0x1624f7(0xe8)](this[_0x1624f7(0xb6)],_0x11bc54),_0x590c19=_0x11bc54+(_0x11bc54[_0x1624f7(0xdb)](_0x1624f7(0xc6))?this[_0x1624f7(0xe1)]:this[_0x1624f7(0xb9)]),_0x3d4fa5=await fs_internal_1['FS'][_0x1624f7(0xcb)](_0x4d5125,!![]),_0x3aa406=await fs_internal_1['FS']['readFile'](path_1['join'](this[_0x1624f7(0xb6)],_0x590c19),!![])[_0x1624f7(0xc1)](()=>null),_0x33878f={};for(const _0x324b72 of _0x3d4fa5){_0x33878f[path_1[_0x1624f7(0xd0)](this['dir'],_0x324b72)]=await fs_internal_1['FS'][_0x1624f7(0xd4)](_0x324b72,!![]);}return _0x3aa406&&(_0x33878f[path_1[_0x1624f7(0xd0)](this[_0x1624f7(0xb6)],_0x590c19)]=_0x3aa406),_0x33878f;}async[a95_0x4bbde4(0xd5)](_0x5e1439){const _0x494a1f=a95_0x4bbde4;let _0x55eca0=_0x5e1439+this[_0x494a1f(0xb9)];if(constants_1[_0x494a1f(0xdd)][_0x494a1f(0xcd)](_0x5e1439))return this['readBundledFiles'](_0x5e1439);if(await fs_internal_1['FS'][_0x494a1f(0xb7)](path_1[_0x494a1f(0xe8)](this[_0x494a1f(0xb6)],_0x5e1439)))return{[_0x55eca0]:await fs_internal_1['FS']['readFile'](path_1[_0x494a1f(0xe8)](this[_0x494a1f(0xb6)],_0x55eca0),!![])};if(!path_1[_0x494a1f(0xf3)](_0x5e1439)&&this[_0x494a1f(0xd3)]){const _0x485ea2=_0x5e1439[_0x494a1f(0xd1)]('/')[0x0],_0x3cc66c=(await fs_internal_1['FS'][_0x494a1f(0xcb)](path_1[_0x494a1f(0xe8)](this[_0x494a1f(0xb6)],_0x485ea2)))[_0x494a1f(0xf5)](_0x54a02e=>git_commit_utils_1[_0x494a1f(0xc5)](_0x54a02e,path_1[_0x494a1f(0xe8)](this[_0x494a1f(0xb6)],_0x5e1439)));if(!_0x3cc66c)throw new Error(_0x494a1f(0xf7)+_0x5e1439+'\x22\x20not\x20found\x20in\x20\x22'+_0x485ea2+'\x22');_0x5e1439=path_1[_0x494a1f(0xd0)](this['dir'],_0x3cc66c),_0x55eca0=_0x5e1439+this[_0x494a1f(0xb9)];}const [_0x38b4d4,_0x238e4e]=await Promise[_0x494a1f(0xeb)]([fs_internal_1['FS'][_0x494a1f(0xd4)](path_1[_0x494a1f(0xe8)](this[_0x494a1f(0xb6)],_0x5e1439),!![])[_0x494a1f(0xc1)](()=>null),fs_internal_1['FS'][_0x494a1f(0xd4)](path_1[_0x494a1f(0xe8)](this['dir'],_0x55eca0),!![])['catch'](()=>null)]);return{..._0x38b4d4?{[_0x5e1439]:_0x38b4d4}:{},..._0x238e4e?{[_0x55eca0]:_0x238e4e}:{}};}async[a95_0x4bbde4(0xf6)](){const _0x5dd75a=a95_0x4bbde4,_0x14f60b=[...this[_0x5dd75a(0xbd)]];if(this[_0x5dd75a(0xd3)])for(const _0x1bbe7b of _0x14f60b){if(await fs_internal_1['FS'][_0x5dd75a(0xb7)](path_1[_0x5dd75a(0xe8)](this[_0x5dd75a(0xb6)],_0x1bbe7b))){const _0x3e442a=await fs_internal_1['FS'][_0x5dd75a(0xcb)](path_1[_0x5dd75a(0xe8)](this[_0x5dd75a(0xb6)],_0x1bbe7b),!![]);_0x14f60b[_0x5dd75a(0xee)](..._0x3e442a[_0x5dd75a(0xe4)](_0xaef133=>path_1[_0x5dd75a(0xd0)](this[_0x5dd75a(0xb6)],_0xaef133)));}}this['paths']=utils_1['convertToCleanPaths'](_0x14f60b);}async[a95_0x4bbde4(0xdf)](){const _0x315d58=a95_0x4bbde4,_0x259bc4=[];for(const _0x3fbe51 of this['paths']){if(_0x3fbe51['endsWith'](_0x315d58(0xd6)))continue;const _0x325816={};_0x325816[_0x315d58(0xca)]=_0x3fbe51;try{_0x325816[_0x315d58(0xda)]=await this['readComponentFiles'](_0x3fbe51),_0x3fbe51[_0x315d58(0xdb)](_0x315d58(0xf4))?_0x325816[_0x315d58(0xb2)]='WaveTemplateBundle':_0x325816['type']=await utils_1[_0x315d58(0xe5)]({'files':_0x325816[_0x315d58(0xda)]});}catch(_0xe426a7){this['logger'][_0x315d58(0xc7)](_0x315d58(0xd7),_0x3fbe51,_0xe426a7);continue;}_0x325816[_0x315d58(0xaf)]=utils_1[_0x315d58(0xe9)](_0x3fbe51),_0x325816[_0x315d58(0xd2)]=utils_1['calculateCRC32'](_0x325816);if(utils_1[_0x315d58(0xec)](_0x325816)){const _0x5e68a8=await this[_0x315d58(0xc0)](_0x325816);_0x259bc4[_0x315d58(0xee)](..._0x5e68a8);}_0x259bc4['push'](_0x325816);}return _0x259bc4;}}exports[a95_0x4bbde4(0xb3)]=MDApiParser;