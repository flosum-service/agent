const a209_0x5f2bd2=a209_0x56e5;(function(_0x3abc9d,_0x4864fc){const _0x5a30c9=a209_0x56e5,_0x8ff9cd=_0x3abc9d();while(!![]){try{const _0x6c8276=-parseInt(_0x5a30c9(0xe0))/0x1*(-parseInt(_0x5a30c9(0xe3))/0x2)+parseInt(_0x5a30c9(0xf5))/0x3+-parseInt(_0x5a30c9(0xfa))/0x4+-parseInt(_0x5a30c9(0xce))/0x5+-parseInt(_0x5a30c9(0xe1))/0x6+parseInt(_0x5a30c9(0xf4))/0x7+-parseInt(_0x5a30c9(0xdb))/0x8*(parseInt(_0x5a30c9(0xd1))/0x9);if(_0x6c8276===_0x4864fc)break;else _0x8ff9cd['push'](_0x8ff9cd['shift']());}catch(_0x419eac){_0x8ff9cd['push'](_0x8ff9cd['shift']());}}}(a209_0x3a73,0x5e2b5));const a209_0x3ed986=(function(){let _0x3168e8=!![];return function(_0x427f77,_0x583593){const _0x4e8b39=_0x3168e8?function(){const _0x1e1943=a209_0x56e5;if(_0x583593){const _0x28a3df=_0x583593[_0x1e1943(0xee)](_0x427f77,arguments);return _0x583593=null,_0x28a3df;}}:function(){};return _0x3168e8=![],_0x4e8b39;};}()),a209_0x59a670=a209_0x3ed986(this,function(){const _0x2cebb0=a209_0x56e5;return a209_0x59a670['toString']()[_0x2cebb0(0xf8)](_0x2cebb0(0xef))[_0x2cebb0(0xd5)]()['constructor'](a209_0x59a670)['search'](_0x2cebb0(0xef));});a209_0x59a670();'use strict';var __importDefault=this&&this[a209_0x5f2bd2(0xf9)]||function(_0xedd693){const _0x31aef8=a209_0x5f2bd2;return _0xedd693&&_0xedd693[_0x31aef8(0xd6)]?_0xedd693:{'default':_0xedd693};};Object[a209_0x5f2bd2(0xe8)](exports,a209_0x5f2bd2(0xd6),{'value':!![]}),exports[a209_0x5f2bd2(0xdd)]=void 0x0;const fs_1=require('fs'),path_1=__importDefault(require(a209_0x5f2bd2(0xe7))),core_1=require(a209_0x5f2bd2(0xdf)),fs_internal_1=require('../../internal/fs.internal'),cross_spawn_1=__importDefault(require(a209_0x5f2bd2(0xf2))),logger=new core_1[(a209_0x5f2bd2(0xd2))](a209_0x5f2bd2(0xea));class SFDX{static[a209_0x5f2bd2(0xe5)](_0xb5be99,_0x1c3442,_0x5b7326={}){return new Promise((_0x302f34,_0x2e249e)=>{const _0x410163=a209_0x56e5;var _0x4ce8ac,_0x15fbf9;let _0x103b2c='',_0x549a9e='';logger[_0x410163(0xda)](_0x410163(0xd3),_0xb5be99,_0x1c3442);const _0x41fdec=cross_spawn_1['default'](_0xb5be99,_0x1c3442['split']('\x20'),_0x5b7326);_0x41fdec['on']('error',_0x585e3d=>{_0x2e249e(_0x585e3d);}),(_0x4ce8ac=_0x41fdec[_0x410163(0xed)])===null||_0x4ce8ac===void 0x0?void 0x0:_0x4ce8ac['on'](_0x410163(0xec),_0x9e9dab=>{_0x103b2c+=_0x9e9dab;}),(_0x15fbf9=_0x41fdec[_0x410163(0xcc)])===null||_0x15fbf9===void 0x0?void 0x0:_0x15fbf9['on']('data',_0x3ba246=>{const _0x570f1a=_0x410163;if(_0x3ba246[_0x570f1a(0xd9)](_0x570f1a(0xdc)))return;_0x549a9e+=_0x3ba246;}),_0x41fdec['on'](_0x410163(0xf6),(_0x5be20b,_0x2aa6e4)=>{_0x5be20b||_0x2aa6e4?_0x2e249e(new Error(_0x549a9e||_0x103b2c)):_0x302f34('');});});}static async[a209_0x5f2bd2(0xe4)](_0x453aff,_0x2c7f0e){const _0x1b5213=a209_0x5f2bd2;logger[_0x1b5213(0xcf)](_0x1b5213(0xcd),_0x2c7f0e,_0x453aff),await this['spawnPromise']('sfdx',_0x1b5213(0xd8)+_0x453aff,{'cwd':_0x2c7f0e});}static async[a209_0x5f2bd2(0xe2)](_0x1ca8c4,_0x5826bd){const _0x18faa7=a209_0x5f2bd2;logger[_0x18faa7(0xcf)]('goto\x20%s\x20folder\x20and\x20convert\x20source\x20to\x20%s',_0x1ca8c4,_0x5826bd),await this[_0x18faa7(0xe5)](_0x18faa7(0xea),_0x18faa7(0xeb)+_0x5826bd,{'cwd':_0x1ca8c4});}static async[a209_0x5f2bd2(0xd0)](_0x42dae1,_0x4c68c9){const _0x28a8b6=a209_0x5f2bd2;await this[_0x28a8b6(0xe5)](_0x28a8b6(0xea),_0x28a8b6(0xe9)+_0x4c68c9,{'cwd':_0x42dae1});}static async[a209_0x5f2bd2(0xd7)](_0x4a9722){const _0x1f84cc=a209_0x5f2bd2,_0x365cb3=path_1[_0x1f84cc(0xd4)]['join'](_0x4a9722,_0x1f84cc(0xf0));logger[_0x1f84cc(0xcf)](_0x1f84cc(0xfb),_0x365cb3),await fs_internal_1['FS'][_0x1f84cc(0xf7)](_0x365cb3,_0x1f84cc(0xde));}static async[a209_0x5f2bd2(0xf1)](_0x5acacb){return new Promise(_0x3f2166=>{fs_1['readdir'](_0x5acacb,(_0x447639,_0x1e2ae2)=>{const _0x189953=a209_0x56e5;_0x3f2166(!_0x447639&&(_0x1e2ae2[_0x189953(0xd9)]('force-app')||_0x1e2ae2[_0x189953(0xd9)](_0x189953(0xf3))||_0x1e2ae2['includes'](_0x189953(0xe6))));});});}}function a209_0x3a73(){const _0x2070fe=['24WUOQMQ','Warning:\x20','SFDX','<Package\x20xmlns=\x22http://soap.sforce.com/2006/04/metadata\x22><version>54.0</version></Package>','../../../../core','63192PqYlUt','3675030zQrCyq','sourceToMdapi','22QSuTiq','mdapiToSource','spawnPromise','sfdx-project.json','path','defineProperty','force:project:create\x20-t\x20empty\x20-n\x20','sfdx','force:source:convert\x20-d\x20','data','stdout','apply','(((.+)+)+)+$','package.xml','isSFDXProject','cross-spawn','config','4888548XTmzGN','487380UsJKCo','close','writeFile','search','__importDefault','355840ewsBKc','create\x20empty\x20package.xml\x20at\x20%s','stderr','goto\x20%s\x20folder\x20and\x20convert\x20mdapi\x20from\x20%s','2095745gRUnNM','log','createEmptyProject','148815SQMIia','Logger','spawn\x20%s\x20[%s]','default','toString','__esModule','createEmptyPackageXml','force:mdapi:convert\x20-r\x20','includes','info'];a209_0x3a73=function(){return _0x2070fe;};return a209_0x3a73();}function a209_0x56e5(_0x9ad8dc,_0xd7c82d){const _0x2caa06=a209_0x3a73();return a209_0x56e5=function(_0x59a670,_0x3ed986){_0x59a670=_0x59a670-0xcc;let _0x3a7376=_0x2caa06[_0x59a670];return _0x3a7376;},a209_0x56e5(_0x9ad8dc,_0xd7c82d);}exports[a209_0x5f2bd2(0xdd)]=SFDX;