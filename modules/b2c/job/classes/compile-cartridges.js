const a57_0x1ce1c0=a57_0x5a86;(function(_0x3453f6,_0x486a1b){const _0x2797e4=a57_0x5a86,_0x19ece1=_0x3453f6();while(!![]){try{const _0x3fd4b7=parseInt(_0x2797e4(0x163))/0x1+-parseInt(_0x2797e4(0x147))/0x2+parseInt(_0x2797e4(0x162))/0x3*(-parseInt(_0x2797e4(0x161))/0x4)+parseInt(_0x2797e4(0x15d))/0x5+-parseInt(_0x2797e4(0x14e))/0x6+-parseInt(_0x2797e4(0x14a))/0x7*(parseInt(_0x2797e4(0x148))/0x8)+parseInt(_0x2797e4(0x150))/0x9*(parseInt(_0x2797e4(0x141))/0xa);if(_0x3fd4b7===_0x486a1b)break;else _0x19ece1['push'](_0x19ece1['shift']());}catch(_0x460bf5){_0x19ece1['push'](_0x19ece1['shift']());}}}(a57_0x5827,0xeaeb9));function a57_0x5827(){const _0x21f066=['795573yYlYTI','log','catch','toString','default','then','writeFile','Installing\x20npm\x20packages.','logger','join','cartridges','SFRA_FOLDER_NAME','Compiling\x20=>\x20\x27','7236620QkJZuH','cd\x20','constructor','search','16NMdAGR','1152015sgNkBx','1809960UEQOMO','replace','jobPath','test','ChildProcessUtils','readFile','name','__esModule','230nUznNX','length','execute','path','(((.+)+)+)+$','@flosum/utils','2497586sQMwmO','8aNKrel','utf-8','5427541yaKXsA','fs/promises','sfraBuilderConfig.js','spawnPromise','4608036UMXYqK','{cartridges}'];a57_0x5827=function(){return _0x21f066;};return a57_0x5827();}const a57_0x537909=(function(){let _0x561664=!![];return function(_0x59929f,_0x45ab9b){const _0x553a36=_0x561664?function(){if(_0x45ab9b){const _0x4b462b=_0x45ab9b['apply'](_0x59929f,arguments);return _0x45ab9b=null,_0x4b462b;}}:function(){};return _0x561664=![],_0x553a36;};}()),a57_0x410a4c=a57_0x537909(this,function(){const _0xe50e93=a57_0x5a86;return a57_0x410a4c[_0xe50e93(0x153)]()['search'](_0xe50e93(0x145))[_0xe50e93(0x153)]()[_0xe50e93(0x15f)](a57_0x410a4c)[_0xe50e93(0x160)]('(((.+)+)+)+$');});a57_0x410a4c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0xa3ef19){const _0x4ea1ef=a57_0x5a86;return _0xa3ef19&&_0xa3ef19[_0x4ea1ef(0x16a)]?_0xa3ef19:{'default':_0xa3ef19};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const utils_1=require(a57_0x1ce1c0(0x146)),constants_1=require('../../constants'),promises_1=require(a57_0x1ce1c0(0x14b)),path_1=__importDefault(require(a57_0x1ce1c0(0x144)));class CompileCartridges{constructor(_0x26b3b4,_0x23749d,_0x25bbb4){const _0x3cea66=a57_0x1ce1c0;this[_0x3cea66(0x165)]=_0x26b3b4,this[_0x3cea66(0x15a)]=_0x23749d,this[_0x3cea66(0x158)]=_0x25bbb4;}async[a57_0x1ce1c0(0x143)](){const _0x34fe03=a57_0x1ce1c0;var _0x19dbf1;if(!((_0x19dbf1=this['cartridges'])===null||_0x19dbf1===void 0x0?void 0x0:_0x19dbf1[_0x34fe03(0x142)]))throw new Error('Cartridges\x20not\x20found.');const _0x521af6=path_1[_0x34fe03(0x154)]['join'](this[_0x34fe03(0x165)],constants_1[_0x34fe03(0x15b)]);await this[_0x34fe03(0x158)][_0x34fe03(0x151)](_0x34fe03(0x157)),await utils_1['ChildProcessUtils']['spawnPromise'](_0x34fe03(0x15e)+_0x521af6+'\x20&&\x20npm\x20i','')[_0x34fe03(0x155)](_0xa3364b=>{const _0x4dc4a0=_0x34fe03;if(/error/i[_0x4dc4a0(0x166)](_0xa3364b))throw new Error(_0xa3364b);})['catch'](({message:_0x34bdb8})=>{throw new Error(_0x34bdb8);});for(const _0x21a5fa of this['cartridges']){const _0x49b668=_0x21a5fa['codeVersion']+'/'+_0x21a5fa[_0x34fe03(0x169)];await this[_0x34fe03(0x158)][_0x34fe03(0x151)](_0x34fe03(0x15c)+_0x49b668+'\x27.');const _0x25f8bd=path_1[_0x34fe03(0x154)][_0x34fe03(0x159)](this[_0x34fe03(0x165)],constants_1[_0x34fe03(0x15b)],_0x34fe03(0x14c)),_0xfff733=await(0x0,promises_1[_0x34fe03(0x168)])(_0x25f8bd,_0x34fe03(0x149)),_0x240c71='\x27./cartridges/'+_0x49b668+'\x27',_0x1ba8c5=_0xfff733[_0x34fe03(0x164)](_0x34fe03(0x14f),_0x240c71);await(0x0,promises_1[_0x34fe03(0x156)])(_0x25f8bd,_0x1ba8c5),await utils_1[_0x34fe03(0x167)][_0x34fe03(0x14d)](_0x34fe03(0x15e)+_0x521af6+'\x20&&\x20npm\x20run\x20build:dev','')['then'](async _0x2f1caa=>{const _0x4819a0=_0x34fe03;await this['logger']['log'](_0x2f1caa);if(/ERROR /[_0x4819a0(0x166)](_0x2f1caa))throw new Error(_0x2f1caa);})[_0x34fe03(0x152)](({message:_0x4140ed})=>{throw new Error(_0x4140ed);});}}}function a57_0x5a86(_0x24f380,_0x1948e8){const _0x2161e0=a57_0x5827();return a57_0x5a86=function(_0x410a4c,_0x537909){_0x410a4c=_0x410a4c-0x141;let _0x582733=_0x2161e0[_0x410a4c];return _0x582733;},a57_0x5a86(_0x24f380,_0x1948e8);}exports[a57_0x1ce1c0(0x154)]=CompileCartridges;