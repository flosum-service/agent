const a272_0x170bd0=a272_0x298b;(function(_0xeb28c4,_0x167718){const _0x14e09f=a272_0x298b,_0xc7e42=_0xeb28c4();while(!![]){try{const _0xafb2ab=parseInt(_0x14e09f(0x1f6))/0x1*(parseInt(_0x14e09f(0x1f3))/0x2)+parseInt(_0x14e09f(0x1f5))/0x3*(parseInt(_0x14e09f(0x1ef))/0x4)+parseInt(_0x14e09f(0x210))/0x5+parseInt(_0x14e09f(0x1ff))/0x6*(-parseInt(_0x14e09f(0x206))/0x7)+parseInt(_0x14e09f(0x1fd))/0x8*(-parseInt(_0x14e09f(0x208))/0x9)+-parseInt(_0x14e09f(0x204))/0xa*(parseInt(_0x14e09f(0x20e))/0xb)+parseInt(_0x14e09f(0x205))/0xc;if(_0xafb2ab===_0x167718)break;else _0xc7e42['push'](_0xc7e42['shift']());}catch(_0x21a12d){_0xc7e42['push'](_0xc7e42['shift']());}}}(a272_0x16d8,0xb48da));const a272_0x335c52=(function(){let _0x325eb0=!![];return function(_0x178bf5,_0x1fad5c){const _0x1ff97e=_0x325eb0?function(){const _0x5ad37b=a272_0x298b;if(_0x1fad5c){const _0x4ac4e7=_0x1fad5c[_0x5ad37b(0x1f9)](_0x178bf5,arguments);return _0x1fad5c=null,_0x4ac4e7;}}:function(){};return _0x325eb0=![],_0x1ff97e;};}()),a272_0xa66167=a272_0x335c52(this,function(){const _0x249a20=a272_0x298b;return a272_0xa66167[_0x249a20(0x203)]()[_0x249a20(0x20a)](_0x249a20(0x201))[_0x249a20(0x203)]()[_0x249a20(0x200)](a272_0xa66167)[_0x249a20(0x20a)](_0x249a20(0x201));});a272_0xa66167();'use strict';function a272_0x298b(_0x43cf8d,_0x54dbc9){const _0x5615d5=a272_0x16d8();return a272_0x298b=function(_0xa66167,_0x335c52){_0xa66167=_0xa66167-0x1ef;let _0x16d887=_0x5615d5[_0xa66167];return _0x16d887;},a272_0x298b(_0x43cf8d,_0x54dbc9);}var __importDefault=this&&this[a272_0x170bd0(0x212)]||function(_0x975f70){const _0x3f217b=a272_0x170bd0;return _0x975f70&&_0x975f70[_0x3f217b(0x20f)]?_0x975f70:{'default':_0x975f70};};Object[a272_0x170bd0(0x1fa)](exports,'__esModule',{'value':!![]}),exports[a272_0x170bd0(0x214)]=void 0x0;function a272_0x16d8(){const _0x16771e=['search','jobId','then','execute','8206trzrRQ','__esModule','3337365blROeB','message','__importDefault','argv','Job','init','Logger','setError','281828uFnbfk','Retrieve\x20metadata\x20job\x20has\x20been\x20started','./classes/logger','slice','6vyUpcN','catch','3uqVSWi','258467TqTDVy','setInProgress','minimist','apply','defineProperty','Retrieve\x20metadata\x20job\x20has\x20been\x20completed','setCompleted','24uMJRXf','error','254946XWMiXt','constructor','(((.+)+)+)+$','default','toString','13170hYQjqq','19124040xTeZlz','7LwjKfx','./classes/retrieve-metadata','4027446rMjmXZ','jobStorePath'];a272_0x16d8=function(){return _0x16771e;};return a272_0x16d8();}const minimist_1=__importDefault(require(a272_0x170bd0(0x1f8))),state_manger_1=__importDefault(require('./classes/state-manger')),core_1=require('../../../core'),logger_1=__importDefault(require(a272_0x170bd0(0x1f1))),retrieve_metadata_1=__importDefault(require(a272_0x170bd0(0x207)));class Job{constructor(){const _0x4e7e9e=a272_0x170bd0,{jobId:_0x340933,jobStorePath:_0x4004d2}=(0x0,minimist_1[_0x4e7e9e(0x202)])(process[_0x4e7e9e(0x213)][_0x4e7e9e(0x1f2)](0x2));this[_0x4e7e9e(0x209)]=_0x4004d2,this[_0x4e7e9e(0x20b)]=_0x340933;}async[a272_0x170bd0(0x20d)](){const _0x254717=a272_0x170bd0,_0x4725dd=new core_1[(_0x254717(0x216))](this['jobId']),_0x484845=new logger_1[(_0x254717(0x202))](this[_0x254717(0x20b)],_0x4725dd),_0x5084d5=await new state_manger_1['default'](this[_0x254717(0x209)])[_0x254717(0x215)]();await _0x484845['log'](_0x254717(0x1f0));try{await _0x5084d5[_0x254717(0x1f7)](),await new retrieve_metadata_1[(_0x254717(0x202))](this[_0x254717(0x209)],_0x484845,_0x5084d5)[_0x254717(0x20d)](),await _0x5084d5[_0x254717(0x1fc)](),await _0x484845['log'](_0x254717(0x1fb));}catch(_0x53c395){await _0x5084d5[_0x254717(0x217)](_0x53c395),await _0x484845['error']('Retrieve\x20metadata\x20job\x20has\x20been\x20failed'),await _0x484845[_0x254717(0x1fe)](_0x53c395[_0x254717(0x211)]);}}}exports[a272_0x170bd0(0x214)]=Job,new Job()['execute']()[a272_0x170bd0(0x20c)](()=>process['exit'](0x0))[a272_0x170bd0(0x1f4)](()=>process['exit'](0x1));