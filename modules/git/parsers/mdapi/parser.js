const a102_0x1f7112=a102_0x36dc;function a102_0x3b74(){const _0x1c7ef0=['Cannot\x20parse\x20childs\x20in\x20','type','parse','default','init','Xml','52QiwIsp','all','100955aOVUxg','logger','values','43911cCjTha','files','hasChildNodes','readFile','readBundledFiles','../../../../constants','6iOiYsY','3468726WObSJE','paths','experiences','MDApiParser','name','extname','1487637lKnPqR','isPathsEquals','error','apply','package.xml','478039oXCsKj','../../devops/utils/git-commit.utils','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','Logger','constructor','join','map','isSFDXProject','readDir','BUNDLED_FOLDERS_REGEXP','push','26994748QRLnIc','META_EXPERIENCES_EXTENSION','path','3850Bfgxet','exists','../utils/crc32','META_EXTENSION','startsWith','20224OKUhHf','catch','readComponentFiles','toString','../../internal/fs.internal','extractComponentTypeFromFiles','includes','relative','defineProperty','../data/folder-types','readChildComponents','utf-8','endsWith','isDir','dir','test','crc','split','10KdRLpC','filePath','__importDefault','createChildComponentsFromParent','getChildsByName','(((.+)+)+)+$','__esModule','../data/child-types-map','find','search'];a102_0x3b74=function(){return _0x1c7ef0;};return a102_0x3b74();}(function(_0x2a9c58,_0x38319c){const _0x20fa6d=a102_0x36dc,_0x2d6b38=_0x2a9c58();while(!![]){try{const _0x4071d0=parseInt(_0x20fa6d(0x196))/0x1*(parseInt(_0x20fa6d(0x18a))/0x2)+-parseInt(_0x20fa6d(0x191))/0x3+-parseInt(_0x20fa6d(0x17f))/0x4*(-parseInt(_0x20fa6d(0x181))/0x5)+parseInt(_0x20fa6d(0x18b))/0x6+-parseInt(_0x20fa6d(0x1a4))/0x7*(-parseInt(_0x20fa6d(0x1a9))/0x8)+parseInt(_0x20fa6d(0x184))/0x9*(parseInt(_0x20fa6d(0x1bb))/0xa)+-parseInt(_0x20fa6d(0x1a1))/0xb;if(_0x4071d0===_0x38319c)break;else _0x2d6b38['push'](_0x2d6b38['shift']());}catch(_0x3ff199){_0x2d6b38['push'](_0x2d6b38['shift']());}}}(a102_0x3b74,0xafcb5));const a102_0x368a6d=(function(){let _0x233b24=!![];return function(_0x1bc69e,_0x1baf36){const _0x351fc7=_0x233b24?function(){const _0x3c33a2=a102_0x36dc;if(_0x1baf36){const _0x26ff2f=_0x1baf36[_0x3c33a2(0x194)](_0x1bc69e,arguments);return _0x1baf36=null,_0x26ff2f;}}:function(){};return _0x233b24=![],_0x351fc7;};}()),a102_0x1f4461=a102_0x368a6d(this,function(){const _0x31ab3b=a102_0x36dc;return a102_0x1f4461[_0x31ab3b(0x1ac)]()[_0x31ab3b(0x178)](_0x31ab3b(0x1c0))[_0x31ab3b(0x1ac)]()[_0x31ab3b(0x19a)](a102_0x1f4461)[_0x31ab3b(0x178)](_0x31ab3b(0x1c0));});a102_0x1f4461();function a102_0x36dc(_0xbb2b89,_0x17c65c){const _0x498e10=a102_0x3b74();return a102_0x36dc=function(_0x1f4461,_0x368a6d){_0x1f4461=_0x1f4461-0x176;let _0x3b7483=_0x498e10[_0x1f4461];return _0x3b7483;},a102_0x36dc(_0xbb2b89,_0x17c65c);}'use strict';var __importDefault=this&&this[a102_0x1f7112(0x1bd)]||function(_0x203cf0){const _0x5b24d8=a102_0x1f7112;return _0x203cf0&&_0x203cf0[_0x5b24d8(0x1c1)]?_0x203cf0:{'default':_0x203cf0};};Object[a102_0x1f7112(0x1b1)](exports,a102_0x1f7112(0x1c1),{'value':!![]}),exports[a102_0x1f7112(0x18e)]=void 0x0;const fs_internal_1=require(a102_0x1f7112(0x1ad)),utils_1=require('../utils'),path_1=require(a102_0x1f7112(0x1a3)),xml_1=require('../utils/xml'),child_types_map_1=__importDefault(require(a102_0x1f7112(0x176))),constants_1=require(a102_0x1f7112(0x189)),core_1=require('../../../../core'),git_commit_utils_1=require(a102_0x1f7112(0x197)),crc32_1=require(a102_0x1f7112(0x1a6)),folder_types_1=__importDefault(require(a102_0x1f7112(0x1b2))),CHILD_XML_KEYS=Object[a102_0x1f7112(0x183)](child_types_map_1['default']);class MDApiParser{constructor(_0x2c92d9,_0x3c0a76,_0x5a0a66){const _0x4d9981=a102_0x1f7112;this['dir']=_0x2c92d9,this[_0x4d9981(0x19d)]=_0x5a0a66,this[_0x4d9981(0x182)]=new core_1[(_0x4d9981(0x199))](MDApiParser[_0x4d9981(0x18f)]),this[_0x4d9981(0x1a7)]='-meta.xml',this[_0x4d9981(0x1a2)]='.site-meta.xml',this['paths']=_0x3c0a76;}async[a102_0x1f7112(0x1b3)](_0x4557a5){const _0x4f0a3d=a102_0x1f7112;try{const _0x4cc2bf=await xml_1[_0x4f0a3d(0x17e)][_0x4f0a3d(0x17b)](Object['values'](_0x4557a5['files'])[0x0][_0x4f0a3d(0x1ac)](_0x4f0a3d(0x1b4))),_0x16e7bb=CHILD_XML_KEYS['filter'](_0x530674=>xml_1[_0x4f0a3d(0x17e)][_0x4f0a3d(0x186)](_0x4cc2bf,_0x530674))['reduce']((_0x4bf364,_0x560d03)=>[..._0x4bf364,...xml_1[_0x4f0a3d(0x17e)][_0x4f0a3d(0x1bf)](_0x4cc2bf,_0x560d03)],[]);return utils_1[_0x4f0a3d(0x1be)](_0x4557a5,_0x4cc2bf,_0x16e7bb);}catch(_0x26e378){throw new Error(_0x4f0a3d(0x179)+_0x4557a5[_0x4f0a3d(0x18f)]+'\x20['+_0x4557a5['type']+']');}}async[a102_0x1f7112(0x188)](_0x5b2ced){const _0x2a0c5e=a102_0x1f7112,_0x5a9c4e=path_1['join'](this[_0x2a0c5e(0x1b7)],_0x5b2ced),_0x5697b6=_0x5b2ced+(_0x5b2ced['startsWith'](_0x2a0c5e(0x18d))?this['META_EXPERIENCES_EXTENSION']:this[_0x2a0c5e(0x1a7)]),_0x2a2273=await fs_internal_1['FS'][_0x2a0c5e(0x19e)](_0x5a9c4e,!![]),_0x55d255=await fs_internal_1['FS']['readFile'](path_1[_0x2a0c5e(0x19b)](this[_0x2a0c5e(0x1b7)],_0x5697b6),!![])[_0x2a0c5e(0x1aa)](()=>null),_0xef48a={};for(const _0x19fb20 of _0x2a2273){_0xef48a[path_1[_0x2a0c5e(0x1b0)](this[_0x2a0c5e(0x1b7)],_0x19fb20)]=await fs_internal_1['FS']['readFile'](_0x19fb20,!![]);}return _0x55d255&&(_0xef48a[path_1[_0x2a0c5e(0x1b0)](this[_0x2a0c5e(0x1b7)],_0x5697b6)]=_0x55d255),_0xef48a;}async[a102_0x1f7112(0x1ab)](_0x11e516){const _0x199d21=a102_0x1f7112;let _0x39b6a7=_0x11e516+this[_0x199d21(0x1a7)];if(constants_1[_0x199d21(0x19f)]['test'](_0x11e516))return this['readBundledFiles'](_0x11e516);if(await fs_internal_1['FS'][_0x199d21(0x1b6)](path_1[_0x199d21(0x19b)](this[_0x199d21(0x1b7)],_0x11e516))||await fs_internal_1['FS'][_0x199d21(0x1a5)](path_1[_0x199d21(0x19b)](this[_0x199d21(0x1b7)],_0x39b6a7))){const _0x31eab8=await fs_internal_1['FS']['readFile'](path_1[_0x199d21(0x19b)](this[_0x199d21(0x1b7)],_0x39b6a7),!![]),_0x2b2c81=await utils_1[_0x199d21(0x1ae)]({'files':{[_0x39b6a7]:_0x31eab8}})[_0x199d21(0x1aa)](()=>null);if(_0x2b2c81&&folder_types_1[_0x199d21(0x17c)][_0x199d21(0x1af)](_0x2b2c81))return{[_0x39b6a7]:await fs_internal_1['FS'][_0x199d21(0x187)](path_1[_0x199d21(0x19b)](this['dir'],_0x39b6a7),!![])};}if(!path_1[_0x199d21(0x190)](_0x11e516)&&this[_0x199d21(0x19d)]){const _0xf5d244=_0x11e516[_0x199d21(0x1ba)]('/')[0x0],_0x5e6d3b=(await fs_internal_1['FS']['readDir'](path_1['join'](this[_0x199d21(0x1b7)],_0xf5d244)))[_0x199d21(0x177)](_0x3e318f=>git_commit_utils_1[_0x199d21(0x192)](_0x3e318f,path_1['join'](this[_0x199d21(0x1b7)],_0x11e516)));if(!_0x5e6d3b)throw new Error('Component\x20\x22'+_0x11e516+'\x22\x20not\x20found\x20in\x20\x22'+_0xf5d244+'\x22');_0x11e516=path_1['relative'](this[_0x199d21(0x1b7)],_0x5e6d3b),_0x39b6a7=_0x11e516+this[_0x199d21(0x1a7)];}const [_0x32152f,_0x121aec]=await Promise[_0x199d21(0x180)]([fs_internal_1['FS'][_0x199d21(0x187)](path_1['join'](this['dir'],_0x11e516),!![])[_0x199d21(0x1aa)](()=>null),fs_internal_1['FS']['readFile'](path_1[_0x199d21(0x19b)](this[_0x199d21(0x1b7)],_0x39b6a7),!![])[_0x199d21(0x1aa)](()=>null)]);return{..._0x32152f?{[_0x11e516]:_0x32152f}:{},..._0x121aec?{[_0x39b6a7]:_0x121aec}:{}};}async[a102_0x1f7112(0x17d)](){const _0x5ac69e=a102_0x1f7112,_0x916385=[...this[_0x5ac69e(0x18c)]];if(this[_0x5ac69e(0x19d)])for(const _0x2e23ff of _0x916385){if(constants_1[_0x5ac69e(0x19f)][_0x5ac69e(0x1b8)](_0x2e23ff))continue;if(await fs_internal_1['FS'][_0x5ac69e(0x1b6)](path_1['join'](this[_0x5ac69e(0x1b7)],_0x2e23ff))){const _0x110be2=await fs_internal_1['FS'][_0x5ac69e(0x19e)](path_1[_0x5ac69e(0x19b)](this[_0x5ac69e(0x1b7)],_0x2e23ff),!![]);_0x916385[_0x5ac69e(0x1a0)](..._0x110be2[_0x5ac69e(0x19c)](_0x307451=>path_1[_0x5ac69e(0x1b0)](this[_0x5ac69e(0x1b7)],_0x307451)));}}this[_0x5ac69e(0x18c)]=utils_1['convertToCleanPaths'](_0x916385);}async[a102_0x1f7112(0x17b)](){const _0x59fb8b=a102_0x1f7112;await this[_0x59fb8b(0x17d)]();const _0x4cc90e=[];for(const _0x5a12ba of this[_0x59fb8b(0x18c)]){if(_0x5a12ba[_0x59fb8b(0x1b5)](_0x59fb8b(0x195)))continue;const _0x4312af={};try{_0x4312af[_0x59fb8b(0x185)]=await this[_0x59fb8b(0x1ab)](_0x5a12ba),_0x4312af[_0x59fb8b(0x1bc)]=constants_1[_0x59fb8b(0x19f)][_0x59fb8b(0x1b8)](_0x5a12ba)?_0x5a12ba:utils_1['extractFileNameFromFiles']({'files':_0x4312af[_0x59fb8b(0x185)]}),_0x5a12ba[_0x59fb8b(0x1a8)]('waveTemplates')?_0x4312af['type']='WaveTemplateBundle':_0x4312af[_0x59fb8b(0x17a)]=await utils_1[_0x59fb8b(0x1ae)]({'files':_0x4312af['files']});}catch(_0x57df2a){this[_0x59fb8b(0x182)][_0x59fb8b(0x193)](_0x59fb8b(0x198),_0x5a12ba,_0x57df2a);continue;}_0x4312af[_0x59fb8b(0x18f)]=utils_1['extractFilenameFromPath'](_0x5a12ba),_0x4312af[_0x59fb8b(0x1b9)]=crc32_1['calculateCRC32'](_0x4312af);if(utils_1['isParentComponent'](_0x4312af)){const _0x4e2e38=await this[_0x59fb8b(0x1b3)](_0x4312af);_0x4cc90e[_0x59fb8b(0x1a0)](..._0x4e2e38);}if(_0x4312af[_0x59fb8b(0x17a)]==='CustomLabels')continue;_0x4cc90e[_0x59fb8b(0x1a0)](_0x4312af);}return _0x4cc90e;}}exports['MDApiParser']=MDApiParser;