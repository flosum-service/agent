const a193_0xcd0235=a193_0x5464;function a193_0x4626(){const _0x32e0c4=['130786xZLRcj','logger','606699cBaRKi','defineProperty','3tIKCYI','search','__esModule','queue','3114jTDIEC','38859BqUzZk','../../childs/child','apply','childName','shift','32evOApx','currentJobs','log','445UMKKgZ','CommitsQueue','run','617764TpCdgB','2957600qAIAmH','311521ZMANNH','toString'];a193_0x4626=function(){return _0x32e0c4;};return a193_0x4626();}(function(_0x32f0c3,_0xbb00cd){const _0x4991b7=a193_0x5464,_0x6a8c7d=_0x32f0c3();while(!![]){try{const _0x8e57f=parseInt(_0x4991b7(0x99))/0x1+-parseInt(_0x4991b7(0xa8))/0x2*(-parseInt(_0x4991b7(0xac))/0x3)+parseInt(_0x4991b7(0xa4))/0x4+parseInt(_0x4991b7(0xa1))/0x5*(-parseInt(_0x4991b7(0xb0))/0x6)+-parseInt(_0x4991b7(0xa6))/0x7+-parseInt(_0x4991b7(0x9e))/0x8*(-parseInt(_0x4991b7(0xaa))/0x9)+-parseInt(_0x4991b7(0xa5))/0xa;if(_0x8e57f===_0xbb00cd)break;else _0x6a8c7d['push'](_0x6a8c7d['shift']());}catch(_0x2f6d1b){_0x6a8c7d['push'](_0x6a8c7d['shift']());}}}(a193_0x4626,0x22a3b));const a193_0x2be11b=(function(){let _0x43cfcc=!![];return function(_0x2d8a37,_0x12fafb){const _0x10dc52=_0x43cfcc?function(){const _0xe00151=a193_0x5464;if(_0x12fafb){const _0x398785=_0x12fafb[_0xe00151(0x9b)](_0x2d8a37,arguments);return _0x12fafb=null,_0x398785;}}:function(){};return _0x43cfcc=![],_0x10dc52;};}()),a193_0x1e5d41=a193_0x2be11b(this,function(){const _0x3aff1e=a193_0x5464;return a193_0x1e5d41[_0x3aff1e(0xa7)]()[_0x3aff1e(0xad)]('(((.+)+)+)+$')[_0x3aff1e(0xa7)]()['constructor'](a193_0x1e5d41)[_0x3aff1e(0xad)]('(((.+)+)+)+$');});a193_0x1e5d41();function a193_0x5464(_0x3838b4,_0x230414){const _0x504b10=a193_0x4626();return a193_0x5464=function(_0x1e5d41,_0x2be11b){_0x1e5d41=_0x1e5d41-0x99;let _0x4626ef=_0x504b10[_0x1e5d41];return _0x4626ef;},a193_0x5464(_0x3838b4,_0x230414);}'use strict';Object[a193_0xcd0235(0xab)](exports,a193_0xcd0235(0xae),{'value':!![]}),exports[a193_0xcd0235(0xa2)]=void 0x0;const child_1=require(a193_0xcd0235(0x9a));class CommitsQueue{constructor(_0x438644){const _0x28f502=a193_0xcd0235;this[_0x28f502(0x9c)]=_0x438644,this[_0x28f502(0xaf)]={},this[_0x28f502(0x9f)]={};}async[a193_0xcd0235(0xa3)](_0x270dfd){const _0x376c66=a193_0xcd0235;if(this[_0x376c66(0x9f)][_0x270dfd]||!this[_0x376c66(0xaf)][_0x270dfd])return;this[_0x376c66(0xa9)][_0x376c66(0xa0)]('run\x20commit\x20job\x20\x22%s\x22',_0x270dfd);const _0x2401a0=this[_0x376c66(0xaf)][_0x270dfd][_0x376c66(0x9d)]();if(_0x2401a0){try{const _0x5d4bdc=new child_1['Child'](this[_0x376c66(0x9c)]);this[_0x376c66(0x9f)][_0x270dfd]=_0x5d4bdc,await _0x5d4bdc['execute']({'data':_0x2401a0},!![]),delete this[_0x376c66(0x9f)][_0x270dfd],this[_0x376c66(0xa9)]['log']('commit\x20job\x20done\x20for\x20%s',_0x270dfd);}catch(_0x5e434a){this[_0x376c66(0xaf)][_0x270dfd]=[],delete this[_0x376c66(0x9f)][_0x270dfd];}this[_0x376c66(0xa3)](_0x270dfd);}}}exports[a193_0xcd0235(0xa2)]=CommitsQueue;