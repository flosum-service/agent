function a175_0x1024(){const _0x439219=['filePath','27DQqXXD','1Fasern','str','buf','5PkxRyI','constructor','4508382JqMLBl','aura/','search','includes','length','1633420OFXhsn','experiences/','add','toString','forEach','push','(((.+)+)+)+$','../data/vlocity-types','apply','117576CjCjDR','lastIndexOf','__importDefault','type','join','sort','3QtciKM','startsWith','files','3516230vfSgYy','5179748dYawCy','8870983ozUfZV','calculateCRC32','keys','744490zmBKOk','split','round','default','__esModule','ContentAsset','slice'];a175_0x1024=function(){return _0x439219;};return a175_0x1024();}const a175_0x5f477d=a175_0x527d;(function(_0x53be89,_0x49ffaa){const _0x66d0f4=a175_0x527d,_0x2f4086=_0x53be89();while(!![]){try{const _0x590e42=-parseInt(_0x66d0f4(0x119))/0x1*(-parseInt(_0x66d0f4(0x13a))/0x2)+-parseInt(_0x66d0f4(0x132))/0x3*(-parseInt(_0x66d0f4(0x123))/0x4)+-parseInt(_0x66d0f4(0x11c))/0x5*(-parseInt(_0x66d0f4(0x11e))/0x6)+-parseInt(_0x66d0f4(0x136))/0x7+-parseInt(_0x66d0f4(0x12c))/0x8+-parseInt(_0x66d0f4(0x118))/0x9*(parseInt(_0x66d0f4(0x135))/0xa)+parseInt(_0x66d0f4(0x137))/0xb;if(_0x590e42===_0x49ffaa)break;else _0x2f4086['push'](_0x2f4086['shift']());}catch(_0x307c06){_0x2f4086['push'](_0x2f4086['shift']());}}}(a175_0x1024,0x81218));function a175_0x527d(_0x55a0ae,_0x560995){const _0x3f7779=a175_0x1024();return a175_0x527d=function(_0x346c59,_0x3103ec){_0x346c59=_0x346c59-0x116;let _0x102489=_0x3f7779[_0x346c59];return _0x102489;},a175_0x527d(_0x55a0ae,_0x560995);}const a175_0x3103ec=(function(){let _0x4943e5=!![];return function(_0xe966ff,_0x3cdc22){const _0x93a13b=_0x4943e5?function(){const _0x43186f=a175_0x527d;if(_0x3cdc22){const _0x3e4ba6=_0x3cdc22[_0x43186f(0x12b)](_0xe966ff,arguments);return _0x3cdc22=null,_0x3e4ba6;}}:function(){};return _0x4943e5=![],_0x93a13b;};}()),a175_0x346c59=a175_0x3103ec(this,function(){const _0x343bac=a175_0x527d;return a175_0x346c59['toString']()[_0x343bac(0x120)](_0x343bac(0x129))[_0x343bac(0x126)]()[_0x343bac(0x11d)](a175_0x346c59)[_0x343bac(0x120)](_0x343bac(0x129));});a175_0x346c59();'use strict';var __importDefault=this&&this[a175_0x5f477d(0x12e)]||function(_0x447ece){const _0x2ced2b=a175_0x5f477d;return _0x447ece&&_0x447ece[_0x2ced2b(0x13e)]?_0x447ece:{'default':_0x447ece};};Object['defineProperty'](exports,a175_0x5f477d(0x13e),{'value':!![]}),exports[a175_0x5f477d(0x138)]=void 0x0;const crc_32_1=__importDefault(require('crc-32')),vlocity_types_1=require(a175_0x5f477d(0x12a)),componentTypeProcessFunctionMap={'AuraDefinitionBundle':bundleTypesProcessor,'LightningComponentBundle':bundleTypesProcessor,'ExperienceBundle':bundleTypesProcessor,'WaveTemplateBundle':bundleTypesProcessor},BINARY_COMPONENTS=['StaticResource',a175_0x5f477d(0x13f)];function bundleTypesProcessor(_0x3bf1b9){const _0x39b2ff=a175_0x5f477d,_0x516659=[],_0x5db216=new Set();Object[_0x39b2ff(0x139)](_0x3bf1b9['files'])[_0x39b2ff(0x131)]()[_0x39b2ff(0x127)](_0x4961d8=>{const _0x4017df=_0x39b2ff,_0x2e1d42=getAuraName(_0x4961d8);if(_0x2e1d42&&_0x2e1d42===_0x3bf1b9[_0x4017df(0x117)]){const _0x506b74=_0x3bf1b9[_0x4017df(0x134)][_0x4961d8],_0x535c48=getCrcWithData(_0x506b74);_0x535c48&&_0x516659[_0x4017df(0x128)](_0x535c48);}else _0x5db216[_0x4017df(0x125)](_0x4961d8);});const _0x21754a=calculateResultCRC32(_0x516659);return''+_0x21754a;}function calculateCRC32ForEachFile(_0x5cffc0){const _0x24ade2=a175_0x5f477d,_0x425441=[],_0x48979e=BINARY_COMPONENTS['includes'](_0x5cffc0[_0x24ade2(0x12f)]);return Object[_0x24ade2(0x139)](_0x5cffc0[_0x24ade2(0x134)])[_0x24ade2(0x131)]()[_0x24ade2(0x127)](_0x408d0f=>{const _0x1f97e7=_0x24ade2,_0x3f9ce1=_0x5cffc0['files'][_0x408d0f],_0x59fa5c=getCrcWithData(_0x3f9ce1,_0x48979e);_0x59fa5c&&_0x425441[_0x1f97e7(0x128)](_0x59fa5c);}),_0x425441;}function calculateResultCRC32(_0x3baeee){const _0x813296=a175_0x5f477d;let _0x2cd317=0x0;_0x3baeee['length']&&(_0x2cd317=_0x3baeee[0x0]);if(_0x3baeee[_0x813296(0x122)]<0x1a)for(let _0x18392c=0x1;_0x18392c<_0x3baeee['length'];_0x18392c++){_0x2cd317=Math['round']((_0x3baeee[_0x18392c]+_0x2cd317)/0x2);}else{for(let _0x422640=0x1;_0x422640<_0x3baeee['length'];_0x422640++){_0x2cd317=Math['round'](_0x3baeee[_0x422640]+_0x2cd317);}_0x2cd317=Math[_0x813296(0x13c)](_0x2cd317/_0x3baeee[_0x813296(0x122)]);}return _0x2cd317;}function otherComponentsProcessor(_0x166c1e){const _0x18bfbb=a175_0x5f477d;return calculateCRC32ForEachFile(_0x166c1e)[_0x18bfbb(0x130)]('\x20');}function vlocityComponentsProcessor(_0x526ae8){const _0x2a338d=calculateCRC32ForEachFile(_0x526ae8),_0x1b22a3=calculateResultCRC32(_0x2a338d);return''+_0x1b22a3;}function getPosition(_0xef0891,_0x2ba13e,_0x5bad01){const _0x3709a3=a175_0x5f477d;return _0xef0891[_0x3709a3(0x13b)](_0x2ba13e,_0x5bad01)[_0x3709a3(0x130)](_0x2ba13e)[_0x3709a3(0x122)];}function getAuraName(_0xf37d63){const _0xfd4409=a175_0x5f477d;if(!_0xf37d63)return null;if(!_0xf37d63[_0xfd4409(0x133)](_0xfd4409(0x11f))&&!_0xf37d63[_0xfd4409(0x133)]('lwc/')&&!_0xf37d63[_0xfd4409(0x133)](_0xfd4409(0x124))&&!_0xf37d63[_0xfd4409(0x133)]('waveTemplates/'))return null;if(_0xf37d63[_0xfd4409(0x12d)]('/')>0x5&&_0xf37d63[_0xfd4409(0x12d)]('/')!==_0xf37d63[_0xfd4409(0x122)]-0x1){let _0xe31c6c=_0xf37d63[_0xfd4409(0x116)](0x0,getPosition(_0xf37d63,'/',0x2));if(_0xf37d63['startsWith'](_0xfd4409(0x124))||_0xf37d63[_0xfd4409(0x133)]('waveTemplates/'))return _0xe31c6c['lastIndexOf']('/')!==-0x1&&(_0xe31c6c=_0xe31c6c['slice'](0x0,_0xe31c6c['lastIndexOf']('/'))),_0xe31c6c;return _0xe31c6c;}return null;}function getCrcWithData(_0x5ba801,_0x56ebd3=![]){const _0x221cdb=a175_0x5f477d;if(_0x56ebd3)return crc_32_1['default'][_0x221cdb(0x11b)](_0x5ba801,0x20);return crc_32_1[_0x221cdb(0x13d)][_0x221cdb(0x11a)](_0x5ba801[_0x221cdb(0x126)](),0x20);}function calculateCRC32(_0x4a1b44){const _0x569e9c=a175_0x5f477d;if(componentTypeProcessFunctionMap[_0x4a1b44[_0x569e9c(0x12f)]])return componentTypeProcessFunctionMap[_0x4a1b44['type']](_0x4a1b44);if(vlocity_types_1['VLOCITY_COMPONENT_TYPES'][_0x569e9c(0x121)](_0x4a1b44['type']))return vlocityComponentsProcessor(_0x4a1b44);return otherComponentsProcessor(_0x4a1b44);}exports[a175_0x5f477d(0x138)]=calculateCRC32;