function a264_0xa193(){const _0x4e61dc=['(((.+)+)+)+$','474220PxzUoD','default','stringify','../../../../constants/job','getManifestPath','join','credentials','4020588RLRGZf','845FdNVxs','manifest','123804WnzFnh','1118690tQiRXJ','maxChunkItems','__esModule','7848oamUZi','readFile','init','../../constants','search','176MZCAgT','jobStorePath','constructor','78StnvdG','utf-8','declarativeFilter','toString','fs/promises','path','4123dWSXYk','__importDefault','then','maxChunkSize','841260iRNQdN','writeFile','create','MAX_METADATA_CHUNK_SIZE','20766tfbMyF'];a264_0xa193=function(){return _0x4e61dc;};return a264_0xa193();}const a264_0x4d37ef=a264_0x6efa;function a264_0x6efa(_0x181b51,_0xe38f2e){const _0x161cce=a264_0xa193();return a264_0x6efa=function(_0x58d5d4,_0x3e9707){_0x58d5d4=_0x58d5d4-0x9b;let _0xa19352=_0x161cce[_0x58d5d4];return _0xa19352;},a264_0x6efa(_0x181b51,_0xe38f2e);}(function(_0x29d9cc,_0x34a571){const _0x5f49d2=a264_0x6efa,_0x33df40=_0x29d9cc();while(!![]){try{const _0x227084=parseInt(_0x5f49d2(0xba))/0x1+-parseInt(_0x5f49d2(0xaf))/0x2+parseInt(_0x5f49d2(0x9f))/0x3*(-parseInt(_0x5f49d2(0xb9))/0x4)+parseInt(_0x5f49d2(0xb7))/0x5*(-parseInt(_0x5f49d2(0xad))/0x6)+-parseInt(_0x5f49d2(0xa5))/0x7*(parseInt(_0x5f49d2(0xbd))/0x8)+parseInt(_0x5f49d2(0xb6))/0x9+-parseInt(_0x5f49d2(0xa9))/0xa*(-parseInt(_0x5f49d2(0x9c))/0xb);if(_0x227084===_0x34a571)break;else _0x33df40['push'](_0x33df40['shift']());}catch(_0x5b626f){_0x33df40['push'](_0x33df40['shift']());}}}(a264_0xa193,0xac944));const a264_0x3e9707=(function(){let _0xd7dae0=!![];return function(_0x58758b,_0x1fefa6){const _0x448185=_0xd7dae0?function(){if(_0x1fefa6){const _0xa8214d=_0x1fefa6['apply'](_0x58758b,arguments);return _0x1fefa6=null,_0xa8214d;}}:function(){};return _0xd7dae0=![],_0x448185;};}()),a264_0x58d5d4=a264_0x3e9707(this,function(){const _0x55ff36=a264_0x6efa;return a264_0x58d5d4[_0x55ff36(0xa2)]()[_0x55ff36(0x9b)](_0x55ff36(0xae))[_0x55ff36(0xa2)]()[_0x55ff36(0x9e)](a264_0x58d5d4)['search'](_0x55ff36(0xae));});a264_0x58d5d4();'use strict';var __importDefault=this&&this[a264_0x4d37ef(0xa6)]||function(_0x48341f){const _0x5d5506=a264_0x4d37ef;return _0x48341f&&_0x48341f[_0x5d5506(0xbc)]?_0x48341f:{'default':_0x48341f};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const promises_1=require(a264_0x4d37ef(0xa3)),path_1=__importDefault(require(a264_0x4d37ef(0xa4))),job_1=require(a264_0x4d37ef(0xb2)),constants_1=require(a264_0x4d37ef(0xc0));class ManifestManager{constructor(_0x19c7b4){const _0x2065d1=a264_0x4d37ef;this[_0x2065d1(0x9d)]=_0x19c7b4;}get[a264_0x4d37ef(0xb5)](){return this['manifest']['credentials'];}get[a264_0x4d37ef(0xa1)](){const _0x392002=a264_0x4d37ef;return this[_0x392002(0xb8)][_0x392002(0xa1)];}get[a264_0x4d37ef(0xa8)](){const _0x192e67=a264_0x4d37ef;return this[_0x192e67(0xb8)][_0x192e67(0xa8)]||constants_1[_0x192e67(0xac)];}get[a264_0x4d37ef(0xbb)](){const _0x475fda=a264_0x4d37ef;return this[_0x475fda(0xb8)][_0x475fda(0xbb)]||constants_1['MAX_METADATA_ITEMS'];}static[a264_0x4d37ef(0xb3)](_0x2f3091){const _0x41d257=a264_0x4d37ef;return path_1[_0x41d257(0xb0)][_0x41d257(0xb4)](_0x2f3091,job_1['MANIFEST_FILENAME']);}static[a264_0x4d37ef(0xab)](_0x2a11fa,_0x3bde8c){const _0x44618a=a264_0x4d37ef,_0x54a250=ManifestManager[_0x44618a(0xb3)](_0x2a11fa);return(0x0,promises_1[_0x44618a(0xaa)])(_0x54a250,JSON[_0x44618a(0xb1)]({'details':_0x3bde8c}));}async[a264_0x4d37ef(0xbf)](){const _0x540779=a264_0x4d37ef,_0x2c4bea=ManifestManager[_0x540779(0xb3)](this[_0x540779(0x9d)]);return this[_0x540779(0xb8)]=await(0x0,promises_1[_0x540779(0xbe)])(_0x2c4bea,{'encoding':_0x540779(0xa0)})[_0x540779(0xa7)](JSON['parse'])[_0x540779(0xa7)](({details:_0x154919})=>_0x154919),await(0x0,promises_1['rm'])(_0x2c4bea,{'recursive':!![],'force':!![]}),this;}}exports[a264_0x4d37ef(0xb0)]=ManifestManager;