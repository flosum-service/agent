function a275_0x5b11(_0x1f353b,_0x521fee){const _0x428cec=a275_0x1571();return a275_0x5b11=function(_0x3947cc,_0x4b8344){_0x3947cc=_0x3947cc-0x1bb;let _0x157181=_0x428cec[_0x3947cc];return _0x157181;},a275_0x5b11(_0x1f353b,_0x521fee);}const a275_0x2c2b8a=a275_0x5b11;(function(_0x50486e,_0x433d49){const _0x62cd69=a275_0x5b11,_0x111847=_0x50486e();while(!![]){try{const _0xd2999f=-parseInt(_0x62cd69(0x1d1))/0x1+parseInt(_0x62cd69(0x1d6))/0x2+parseInt(_0x62cd69(0x1bf))/0x3+parseInt(_0x62cd69(0x1ce))/0x4*(parseInt(_0x62cd69(0x1cc))/0x5)+-parseInt(_0x62cd69(0x1c5))/0x6*(parseInt(_0x62cd69(0x1c0))/0x7)+parseInt(_0x62cd69(0x1ca))/0x8+-parseInt(_0x62cd69(0x1cb))/0x9;if(_0xd2999f===_0x433d49)break;else _0x111847['push'](_0x111847['shift']());}catch(_0x4872bc){_0x111847['push'](_0x111847['shift']());}}}(a275_0x1571,0xb9634));const a275_0x4b8344=(function(){let _0x58d3bd=!![];return function(_0x24a3d0,_0x372a64){const _0x5d768e=_0x58d3bd?function(){if(_0x372a64){const _0x24e292=_0x372a64['apply'](_0x24a3d0,arguments);return _0x372a64=null,_0x24e292;}}:function(){};return _0x58d3bd=![],_0x5d768e;};}()),a275_0x3947cc=a275_0x4b8344(this,function(){const _0x5671f1=a275_0x5b11;return a275_0x3947cc[_0x5671f1(0x1be)]()[_0x5671f1(0x1c9)](_0x5671f1(0x1d8))[_0x5671f1(0x1be)]()[_0x5671f1(0x1e0)](a275_0x3947cc)[_0x5671f1(0x1c9)](_0x5671f1(0x1d8));});a275_0x3947cc();function a275_0x1571(){const _0x28a586=['../../../core','setError','default','Retrieve\x20metadata\x20job\x20has\x20been\x20failed','2562228JXOpSW','../../shared/managers/state-manger','(((.+)+)+)+$','Job','log','./classes/retrieve-metadata','jobStorePath','setInProgress','minimist','slice','constructor','jobId','__esModule','error','toString','4059426xcohgz','24500mZbvrm','execute','__importDefault','message','./classes/logger','1320ktkdZt','Retrieve\x20metadata\x20job\x20has\x20been\x20completed','defineProperty','setCompleted','search','1521088EQCqii','18864873geHfNt','905jpaZOU','Retrieve\x20metadata\x20job\x20has\x20been\x20started','26768nFbuJp','then','Logger','410199zwemrE'];a275_0x1571=function(){return _0x28a586;};return a275_0x1571();}'use strict';var __importDefault=this&&this[a275_0x2c2b8a(0x1c2)]||function(_0x19cdfd){const _0x3503d5=a275_0x2c2b8a;return _0x19cdfd&&_0x19cdfd[_0x3503d5(0x1bc)]?_0x19cdfd:{'default':_0x19cdfd};};Object[a275_0x2c2b8a(0x1c7)](exports,a275_0x2c2b8a(0x1bc),{'value':!![]}),exports[a275_0x2c2b8a(0x1d9)]=void 0x0;const minimist_1=__importDefault(require(a275_0x2c2b8a(0x1de))),state_manger_1=__importDefault(require(a275_0x2c2b8a(0x1d7))),core_1=require(a275_0x2c2b8a(0x1d2)),logger_1=__importDefault(require(a275_0x2c2b8a(0x1c4))),retrieve_metadata_1=__importDefault(require(a275_0x2c2b8a(0x1db)));class Job{constructor(){const _0xa0ff64=a275_0x2c2b8a,{jobId:_0x42fa9b,jobStorePath:_0x17570c}=(0x0,minimist_1[_0xa0ff64(0x1d4)])(process['argv'][_0xa0ff64(0x1df)](0x2));this[_0xa0ff64(0x1dc)]=_0x17570c,this['jobId']=_0x42fa9b;}async[a275_0x2c2b8a(0x1c1)](){const _0x42e59c=a275_0x2c2b8a,_0x142663=new core_1[(_0x42e59c(0x1d0))](this[_0x42e59c(0x1bb)]),_0x5c17a0=new logger_1[(_0x42e59c(0x1d4))](this[_0x42e59c(0x1bb)],_0x142663),_0x2d7b6f=await new state_manger_1[(_0x42e59c(0x1d4))](this[_0x42e59c(0x1dc)])['init']();await _0x5c17a0[_0x42e59c(0x1da)](_0x42e59c(0x1cd));try{await _0x2d7b6f[_0x42e59c(0x1dd)](),await new retrieve_metadata_1['default'](this[_0x42e59c(0x1dc)],_0x5c17a0,_0x2d7b6f)['execute'](),await _0x2d7b6f[_0x42e59c(0x1c8)](),await _0x5c17a0['log'](_0x42e59c(0x1c6));}catch(_0x3af179){await _0x2d7b6f[_0x42e59c(0x1d3)](_0x3af179),await _0x5c17a0[_0x42e59c(0x1bd)](_0x42e59c(0x1d5)),await _0x5c17a0[_0x42e59c(0x1bd)](_0x3af179[_0x42e59c(0x1c3)]);}}}exports[a275_0x2c2b8a(0x1d9)]=Job,new Job()[a275_0x2c2b8a(0x1c1)]()[a275_0x2c2b8a(0x1cf)](()=>process['exit'](0x0))['catch'](()=>process['exit'](0x1));