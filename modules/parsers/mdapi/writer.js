const a98_0x4371f8=a98_0x2bc7;(function(_0x24023c,_0x5768b5){const _0x3c0181=a98_0x2bc7,_0x192f8e=_0x24023c();while(!![]){try{const _0x5e7f32=parseInt(_0x3c0181(0xf5))/0x1+-parseInt(_0x3c0181(0x12d))/0x2*(parseInt(_0x3c0181(0x11a))/0x3)+parseInt(_0x3c0181(0xf3))/0x4*(-parseInt(_0x3c0181(0xf0))/0x5)+parseInt(_0x3c0181(0x106))/0x6+-parseInt(_0x3c0181(0x115))/0x7*(-parseInt(_0x3c0181(0xff))/0x8)+-parseInt(_0x3c0181(0xfb))/0x9*(-parseInt(_0x3c0181(0x112))/0xa)+-parseInt(_0x3c0181(0x11e))/0xb*(parseInt(_0x3c0181(0x101))/0xc);if(_0x5e7f32===_0x5768b5)break;else _0x192f8e['push'](_0x192f8e['shift']());}catch(_0x586297){_0x192f8e['push'](_0x192f8e['shift']());}}}(a98_0xb346,0x81132));const a98_0x887ac7=(function(){let _0x32ca11=!![];return function(_0x1cf30a,_0x3bcebc){const _0x16e8cb=_0x32ca11?function(){const _0x4f4f27=a98_0x2bc7;if(_0x3bcebc){const _0xb9124b=_0x3bcebc[_0x4f4f27(0x103)](_0x1cf30a,arguments);return _0x3bcebc=null,_0xb9124b;}}:function(){};return _0x32ca11=![],_0x16e8cb;};}()),a98_0x4fe516=a98_0x887ac7(this,function(){const _0x35721b=a98_0x2bc7;return a98_0x4fe516[_0x35721b(0x116)]()[_0x35721b(0x122)](_0x35721b(0x113))[_0x35721b(0x116)]()[_0x35721b(0xf9)](a98_0x4fe516)['search'](_0x35721b(0x113));});a98_0x4fe516();function a98_0x2bc7(_0x6356b1,_0x9ddad5){const _0x33856f=a98_0xb346();return a98_0x2bc7=function(_0x4fe516,_0x887ac7){_0x4fe516=_0x4fe516-0xf0;let _0xb3463a=_0x33856f[_0x4fe516];return _0xb3463a;},a98_0x2bc7(_0x6356b1,_0x9ddad5);}'use strict';var __importDefault=this&&this[a98_0x4371f8(0x123)]||function(_0x51d005){const _0x97fc08=a98_0x4371f8;return _0x51d005&&_0x51d005[_0x97fc08(0x125)]?_0x51d005:{'default':_0x51d005};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a98_0x4371f8(0x12c)]=void 0x0;const path_1=__importDefault(require(a98_0x4371f8(0x104))),core_1=require(a98_0x4371f8(0xf6)),fs_internal_1=require(a98_0x4371f8(0x11c)),invalid_xml_error_1=require('../errors/invalid-xml.error'),xml_1=require(a98_0x4371f8(0x130)),zip_1=require(a98_0x4371f8(0xfc)),child_types_1=__importDefault(require('../data/child-types'));class MDApiWriter{constructor({components:_0x47e111,sourceDir:_0x57108e,skipChildErrors:_0x5f4d5d}){const _0x28233e=a98_0x4371f8;this[_0x28233e(0x10e)]=0x64,this[_0x28233e(0x11b)]={},this[_0x28233e(0x10b)]=new core_1[(_0x28233e(0x12f))](MDApiWriter[_0x28233e(0x108)]),this['components']=_0x47e111,this[_0x28233e(0x121)]=_0x57108e,this[_0x28233e(0x134)]=_0x5f4d5d;}async['readZip'](_0x2edd71,_0x137056=![]){const _0x2b5164=a98_0x4371f8,_0x10c5d4=await zip_1[_0x2b5164(0x111)][_0x2b5164(0xf4)](_0x2edd71),_0x131e0d=[];for(const _0x214a63 of Object[_0x2b5164(0x117)](_0x10c5d4[_0x2b5164(0x12a)])){!_0x10c5d4[_0x2b5164(0x12a)][_0x214a63][_0x2b5164(0xfe)]&&_0x131e0d[_0x2b5164(0x136)]({'filename':_0x214a63,'body':await _0x10c5d4['files'][_0x214a63]['async'](_0x137056?_0x2b5164(0x10d):_0x2b5164(0x107))});}return _0x131e0d;}async[a98_0x4371f8(0x109)](_0x946102){const _0x594500=a98_0x4371f8;try{const _0x26d4f2=await this[_0x594500(0xf1)](_0x946102[_0x594500(0x118)],!![]);await Promise[_0x594500(0x131)](_0x26d4f2[_0x594500(0x119)](({filename:_0x31d3ff,body:_0x235a6e})=>fs_internal_1['FS'][_0x594500(0x120)](path_1['default'][_0x594500(0x114)](this['sourceDir'],_0x31d3ff),_0x235a6e)));}catch(_0x53ae3f){throw new Error(_0x594500(0xf8)+_0x946102['fileName']+'\x20['+_0x946102[_0x594500(0x100)]+'].\x20Original\x20error:\x20'+_0x53ae3f);}}[a98_0x4371f8(0x133)](_0x4678ea,_0x188880){const _0x4c4f6b=a98_0x4371f8;throw new invalid_xml_error_1[(_0x4c4f6b(0x10f))](_0x4c4f6b(0x127)+_0x188880[_0x4c4f6b(0xfd)]+'\x20['+_0x188880[_0x4c4f6b(0x100)]+'].\x20Original\x20error:\x20'+_0x4678ea);}async['writeChild'](_0x20c7e5){const _0x16fd43=a98_0x4371f8,{filename:_0x10e917,body:_0x109065}=(await this[_0x16fd43(0xf1)](_0x20c7e5['body']))[0x0];try{if(!this[_0x16fd43(0x11b)][_0x10e917]){const _0x52e9a6=path_1[_0x16fd43(0xfa)][_0x16fd43(0x114)](this[_0x16fd43(0x121)],_0x10e917);if(await fs_internal_1['FS'][_0x16fd43(0x126)](_0x52e9a6)){const _0x5ed286=await fs_internal_1['FS'][_0x16fd43(0xf7)](_0x52e9a6);this[_0x16fd43(0x11b)][_0x10e917]=await xml_1[_0x16fd43(0x135)][_0x16fd43(0x12b)](_0x5ed286)[_0x16fd43(0x132)](_0x1f3ff1=>this[_0x16fd43(0x133)](_0x1f3ff1,_0x20c7e5));}else{this['parentComponents'][_0x10e917]=await xml_1[_0x16fd43(0x135)][_0x16fd43(0x12b)](_0x109065)[_0x16fd43(0x132)](_0x33ffca=>this[_0x16fd43(0x133)](_0x33ffca,_0x20c7e5));return;}}const _0x5460ec=this[_0x16fd43(0x11b)][_0x10e917],_0x4c6d77=await xml_1['Xml']['parse'](_0x109065)['catch'](_0x410050=>this['handleXmlParsingError'](_0x410050,_0x20c7e5));xml_1[_0x16fd43(0x135)][_0x16fd43(0x11f)](_0x5460ec,_0x4c6d77);}catch(_0x3b7066){if(_0x3b7066 instanceof invalid_xml_error_1['InvalidXmlError']){if(this[_0x16fd43(0x134)])return;else throw _0x3b7066;}throw new Error(_0x16fd43(0x102)+_0x20c7e5[_0x16fd43(0xfd)]+'\x20['+_0x20c7e5[_0x16fd43(0x100)]+_0x16fd43(0x11d)+_0x3b7066);}}async[a98_0x4371f8(0x10a)](){const _0x15bfa0=a98_0x4371f8;!await fs_internal_1['FS'][_0x15bfa0(0x126)](this[_0x15bfa0(0x121)])&&await fs_internal_1['FS'][_0x15bfa0(0xf2)](this[_0x15bfa0(0x121)]);for(const _0x6876df of this[_0x15bfa0(0x128)]){!child_types_1['default'][_0x15bfa0(0x110)](_0x6876df[_0x15bfa0(0x100)])?await this[_0x15bfa0(0x109)](_0x6876df):await this[_0x15bfa0(0x10c)](_0x6876df);}const _0x13c6a4=Object[_0x15bfa0(0x117)](this[_0x15bfa0(0x11b)]);this['internalLogger'][_0x15bfa0(0x129)](_0x15bfa0(0x124),this['components'][_0x15bfa0(0x105)]);while(_0x13c6a4[_0x15bfa0(0x105)]){const _0x4c6b21=_0x13c6a4[_0x15bfa0(0x12e)](0x0,this[_0x15bfa0(0x10e)]);for(const _0x5de1a9 of _0x4c6b21){await fs_internal_1['FS'][_0x15bfa0(0x120)](path_1[_0x15bfa0(0xfa)]['join'](this['sourceDir'],_0x5de1a9),xml_1[_0x15bfa0(0x135)]['convertToString'](this[_0x15bfa0(0x11b)][_0x5de1a9]));}}this['parentComponents']={};}}function a98_0xb346(){const _0x9f417c=['default','7119gWPmgT','../utils/zip','fileName','dir','2568ljShhT','fileType','12CVAHZD','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','apply','path','length','5698332Edmsrf','text','name','writeParent','start','internalLogger','writeChild','nodebuffer','MAX_WRITES_PER_TICK','InvalidXmlError','includes','Zip','6940sZNuIW','(((.+)+)+)+$','join','9093sopzQo','toString','keys','body','map','372381CxdUfs','parentComponents','../../internal/fs.internal','].\x20Original\x20error:\x20','6069481rjEPlf','replaceOrAppend','writeFile','sourceDir','search','__importDefault','have\x20to\x20write\x20%d\x20files','__esModule','exists','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','components','log','files','parse','MDApiWriter','14WqCOVF','splice','Logger','../utils/xml','all','catch','handleXmlParsingError','skipChildErrors','Xml','push','802540sQKdkq','readZip','makeDir','8ngZIQS','unzip','354711btJYqC','../../../core','readFile','[WriteParent]\x20An\x20error\x20occured\x20while\x20proceeding\x20component\x20','constructor'];a98_0xb346=function(){return _0x9f417c;};return a98_0xb346();}exports[a98_0x4371f8(0x12c)]=MDApiWriter;