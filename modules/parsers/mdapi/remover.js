const a97_0x920e8b=a97_0x248a;(function(_0x18fdca,_0x430121){const _0x175583=a97_0x248a,_0x3bc80f=_0x18fdca();while(!![]){try{const _0x166c97=-parseInt(_0x175583(0xbe))/0x1+-parseInt(_0x175583(0xcc))/0x2+parseInt(_0x175583(0xe0))/0x3*(-parseInt(_0x175583(0xdc))/0x4)+-parseInt(_0x175583(0xfa))/0x5+parseInt(_0x175583(0xcd))/0x6+parseInt(_0x175583(0xe7))/0x7*(-parseInt(_0x175583(0xd5))/0x8)+parseInt(_0x175583(0xe6))/0x9;if(_0x166c97===_0x430121)break;else _0x3bc80f['push'](_0x3bc80f['shift']());}catch(_0x38a9b6){_0x3bc80f['push'](_0x3bc80f['shift']());}}}(a97_0x38f9,0x3e8b7));const a97_0x136f8c=(function(){let _0x29194b=!![];return function(_0x49c131,_0x27d7da){const _0x337018=_0x29194b?function(){const _0x325e8d=a97_0x248a;if(_0x27d7da){const _0x29f889=_0x27d7da[_0x325e8d(0xd4)](_0x49c131,arguments);return _0x27d7da=null,_0x29f889;}}:function(){};return _0x29194b=![],_0x337018;};}()),a97_0x524fbb=a97_0x136f8c(this,function(){const _0x180aff=a97_0x248a;return a97_0x524fbb['toString']()[_0x180aff(0xde)](_0x180aff(0xc7))[_0x180aff(0xf0)]()[_0x180aff(0xfc)](a97_0x524fbb)[_0x180aff(0xde)]('(((.+)+)+)+$');});a97_0x524fbb();'use strict';var __importDefault=this&&this[a97_0x920e8b(0xd8)]||function(_0x2379ae){return _0x2379ae&&_0x2379ae['__esModule']?_0x2379ae:{'default':_0x2379ae};};Object[a97_0x920e8b(0xea)](exports,a97_0x920e8b(0xe2),{'value':!![]}),exports[a97_0x920e8b(0xee)]=void 0x0;const fs_internal_1=require(a97_0x920e8b(0xda)),core_1=require(a97_0x920e8b(0xc1)),xml_1=require(a97_0x920e8b(0xbf)),child_types_1=__importDefault(require(a97_0x920e8b(0xd2))),child_types_map_1=__importDefault(require(a97_0x920e8b(0xc5))),path_1=__importDefault(require(a97_0x920e8b(0xf1)));class MDApiRemover{constructor(_0x4b05e4,_0x352f9f){const _0x55c156=a97_0x920e8b;this[_0x55c156(0xd7)]=_0x4b05e4,this[_0x55c156(0xfb)]=_0x352f9f,this[_0x55c156(0xdf)]=_0x55c156(0xc4),this['META_EXPERIENCE_BUNDLE']=_0x55c156(0xd0),this[_0x55c156(0xc0)]=0x64,this[_0x55c156(0xf2)]=new core_1[(_0x55c156(0xe5))](MDApiRemover[_0x55c156(0xe9)]),this[_0x55c156(0xd9)]={};}async[a97_0x920e8b(0xf5)](_0x58a118){const _0x21069f=a97_0x920e8b,_0x483fa2=path_1[_0x21069f(0xce)][_0x21069f(0xd1)](this['sourceDir'],_0x58a118[_0x21069f(0xf1)]),_0x5aa378=path_1['default'][_0x21069f(0xd1)](this[_0x21069f(0xfb)],''+_0x58a118[_0x21069f(0xf1)]+this['META_EXTENSION']);this[_0x21069f(0xd9)][_0x58a118[_0x21069f(0xf1)]]&&delete this['parentComponents'][_0x58a118[_0x21069f(0xf1)]];const _0x49ef4b=await fs_internal_1['FS'][_0x21069f(0xcb)](_0x483fa2)[_0x21069f(0xec)](()=>![]);if(_0x49ef4b){this[_0x21069f(0xf2)][_0x21069f(0xf9)](_0x21069f(0xd6),_0x483fa2,_0x58a118[_0x21069f(0xcf)]),await fs_internal_1['FS'][_0x21069f(0xe1)](_0x483fa2);_0x58a118[_0x21069f(0xcf)]==='ExperienceBundle'&&await fs_internal_1['FS'][_0x21069f(0xc8)](''+_0x483fa2+this[_0x21069f(0xc3)])[_0x21069f(0xec)](()=>void 0x0);return;}this[_0x21069f(0xf2)][_0x21069f(0xf9)](_0x21069f(0xf3),_0x483fa2,_0x58a118[_0x21069f(0xcf)]),await Promise[_0x21069f(0xf7)]([fs_internal_1['FS'][_0x21069f(0xc8)](_0x483fa2),fs_internal_1['FS'][_0x21069f(0xc8)](_0x5aa378)]);}async[a97_0x920e8b(0xef)](_0x4679ba){const _0x175f44=a97_0x920e8b,{fileName:_0xdb4661,type:_0x1fe928,path:_0x4a1f0d}=_0x4679ba,_0x5bfec8=child_types_map_1[_0x175f44(0xce)][_0x1fe928];if(!_0x5bfec8)throw new Error(_0x175f44(0xe4)+_0x1fe928);if(!this['parentComponents'][_0x4a1f0d]){const _0x3a3ec4=path_1[_0x175f44(0xce)][_0x175f44(0xd1)](this[_0x175f44(0xfb)],_0x4a1f0d),_0x512e43=await fs_internal_1['FS']['exists'](_0x3a3ec4);if(!_0x512e43)return;const _0x955bc1=await fs_internal_1['FS']['readFile'](_0x3a3ec4);this[_0x175f44(0xd9)][_0x4a1f0d]=await xml_1[_0x175f44(0xf6)]['parse'](_0x955bc1);}const _0x162504=this['parentComponents'][_0x4a1f0d],_0x361f34=_0xdb4661[_0x175f44(0xdb)]('.')['pop']();xml_1[_0x175f44(0xf6)][_0x175f44(0xca)](_0x162504,_0x5bfec8,_0x361f34||_0xdb4661),xml_1[_0x175f44(0xf6)]['isEmptyXml'](_0x162504)?(this[_0x175f44(0xf2)][_0x175f44(0xf9)](_0x175f44(0xeb),_0x4679ba[_0x175f44(0xf1)],_0x4679ba['fileName']),await this[_0x175f44(0xf5)](_0x4679ba),delete this[_0x175f44(0xd9)][_0x4a1f0d]):this[_0x175f44(0xd9)][_0x4a1f0d]=_0x162504;}async[a97_0x920e8b(0xf8)](){const _0x3c0c86=a97_0x920e8b;!await fs_internal_1['FS'][_0x3c0c86(0xbd)](this['sourceDir'])&&await fs_internal_1['FS'][_0x3c0c86(0xc9)](this[_0x3c0c86(0xfb)]);for(const _0x287bae of this[_0x3c0c86(0xd7)]){!child_types_1[_0x3c0c86(0xce)]['includes'](_0x287bae[_0x3c0c86(0xcf)])?(this['logger']['log'](_0x3c0c86(0xc2),_0x287bae['fileName'],_0x287bae[_0x3c0c86(0xcf)]),await this[_0x3c0c86(0xf5)](_0x287bae)):(this[_0x3c0c86(0xf2)]['log']('remove\x20child\x20component\x20%s\x20[%s]',_0x287bae[_0x3c0c86(0xf4)],_0x287bae['type']),await this[_0x3c0c86(0xef)](_0x287bae));}const _0x4ff93b=Object[_0x3c0c86(0xe3)](this[_0x3c0c86(0xd9)]);this[_0x3c0c86(0xf2)][_0x3c0c86(0xf9)](_0x3c0c86(0xd3),this[_0x3c0c86(0xd7)][_0x3c0c86(0xe8)]);while(_0x4ff93b[_0x3c0c86(0xe8)]){const _0x19c45e=_0x4ff93b[_0x3c0c86(0xc6)](0x0,this[_0x3c0c86(0xc0)]);for(const _0x2fe916 of _0x19c45e){await fs_internal_1['FS'][_0x3c0c86(0xdd)](path_1[_0x3c0c86(0xce)][_0x3c0c86(0xd1)](this['sourceDir'],_0x2fe916),xml_1[_0x3c0c86(0xf6)][_0x3c0c86(0xed)](this[_0x3c0c86(0xd9)][_0x2fe916]));}}this[_0x3c0c86(0xd9)]={};}}function a97_0x248a(_0x5a772a,_0x229298){const _0x17d115=a97_0x38f9();return a97_0x248a=function(_0x524fbb,_0x136f8c){_0x524fbb=_0x524fbb-0xbd;let _0x38f95a=_0x17d115[_0x524fbb];return _0x38f95a;},a97_0x248a(_0x5a772a,_0x229298);}function a97_0x38f9(){const _0x2f1d85=['Xml','all','start','log','489110lpeMPv','sourceDir','constructor','exists','366724kJvxbj','../utils/xml','MAX_WRITES_PER_TICK','../../../core','remove\x20parent\x20component\x20%s\x20[%s]','META_EXPERIENCE_BUNDLE','-meta.xml','../data/child-types-map','splice','(((.+)+)+)+$','removeFile','makeDir','removeAt','isDir','317750MqeNTv','2910768fXzfyP','default','type','site-meta.xml','join','../data/child-types','have\x20to\x20update\x20%d\x20files','apply','8NvdlIn','remove\x20component\x20directory\x20%s\x20[%s]','components','__importDefault','parentComponents','../../internal/fs.internal','split','184yCfApg','writeFile','search','META_EXTENSION','933dMBVlb','removeDir','__esModule','keys','Unknown\x20child\x20type\x20','Logger','6063039WITFrV','1854223JEOvHR','length','name','defineProperty','remote\x20empty\x20parent\x20component\x20file\x20%s\x20[%s]','catch','convertToString','MDApiRemover','removeChild','toString','path','logger','remove\x20component\x20\x20%s\x20[%s]','fileName','removeParent'];a97_0x38f9=function(){return _0x2f1d85;};return a97_0x38f9();}exports[a97_0x920e8b(0xee)]=MDApiRemover;