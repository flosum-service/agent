const a75_0x4cb25c=a75_0x3135;(function(_0x4a6375,_0x2c66ea){const _0x2c04ab=a75_0x3135,_0x158355=_0x4a6375();while(!![]){try{const _0x11756c=parseInt(_0x2c04ab(0x170))/0x1*(-parseInt(_0x2c04ab(0x13c))/0x2)+parseInt(_0x2c04ab(0x149))/0x3+-parseInt(_0x2c04ab(0x13f))/0x4+-parseInt(_0x2c04ab(0x16c))/0x5*(parseInt(_0x2c04ab(0x16b))/0x6)+-parseInt(_0x2c04ab(0x160))/0x7+-parseInt(_0x2c04ab(0x17c))/0x8*(parseInt(_0x2c04ab(0x17b))/0x9)+parseInt(_0x2c04ab(0x176))/0xa*(parseInt(_0x2c04ab(0x163))/0xb);if(_0x11756c===_0x2c66ea)break;else _0x158355['push'](_0x158355['shift']());}catch(_0x6d8e7e){_0x158355['push'](_0x158355['shift']());}}}(a75_0xdecb,0x4f55f));const a75_0x588f69=(function(){let _0x1ca949=!![];return function(_0x3a1b05,_0x81c08d){const _0x245cda=_0x1ca949?function(){const _0x39789f=a75_0x3135;if(_0x81c08d){const _0x4c1f0d=_0x81c08d[_0x39789f(0x14a)](_0x3a1b05,arguments);return _0x81c08d=null,_0x4c1f0d;}}:function(){};return _0x1ca949=![],_0x245cda;};}()),a75_0x23441c=a75_0x588f69(this,function(){const _0x528cdf=a75_0x3135;return a75_0x23441c[_0x528cdf(0x162)]()[_0x528cdf(0x142)](_0x528cdf(0x17a))['toString']()[_0x528cdf(0x174)](a75_0x23441c)['search'](_0x528cdf(0x17a));});function a75_0xdecb(){const _0x2ac61b=['262380RtPjWT','5kzdvuj','parse','set','createEncryptPipe','4436BsPdgh','currency','then','_fieldsTypes','constructor','queryBuilder','35630klHlyb','getIsDone','isExistsPath','boolean','(((.+)+)+)+$','134901xMRkEF','8cRQvBM','fields','resume','./base-retrieve','bind','writeEncryptedTempFile','csv-parse','BaseBulkRetrieve','stream','pipeline','FsUtils','isPaused','jobStorePath','percent','createReadStream','114vpHUMv','pipelineCallback','error','89436aSiKtY','createDecryptPipe','default','search','join','randomUUID','retrieve','reduce','castCsvValue','double','1726962eccdyS','apply','execute','pause','readEncryptedTempFile','POLL_INTERVAL','@flosum/salesforce','.000+0000','csvParser','get','../job-detail','once','path','readEncryptionVector','pull','../../constants','stream/promises','push','SALESFORCE_API_VERSION','catch','__esModule','baseRetrievePayload','describe','1736868iVzyUR','datetime','toString','1023OSIrkz','systemLogger','request','TEXT_CSV','handleError','createReader','destroy','true'];a75_0xdecb=function(){return _0x2ac61b;};return a75_0xdecb();}a75_0x23441c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x47b896){const _0x869071=a75_0x3135;return _0x47b896&&_0x47b896[_0x869071(0x15d)]?_0x47b896:{'default':_0x47b896};};function a75_0x3135(_0x263979,_0x32b7c1){const _0xe23cbc=a75_0xdecb();return a75_0x3135=function(_0x23441c,_0x588f69){_0x23441c=_0x23441c-0x134;let _0xdecbc7=_0xe23cbc[_0x23441c];return _0xdecbc7;},a75_0x3135(_0x263979,_0x32b7c1);}Object['defineProperty'](exports,a75_0x4cb25c(0x15d),{'value':!![]}),exports[a75_0x4cb25c(0x134)]=void 0x0;const base_retrieve_1=require(a75_0x4cb25c(0x17f)),stream_1=require(a75_0x4cb25c(0x135)),path_1=__importDefault(require(a75_0x4cb25c(0x155))),utils_1=require('@flosum/utils'),promises_1=require('fs/promises'),fs_1=__importDefault(require('fs')),promises_2=require(a75_0x4cb25c(0x159)),crypto_1=require('crypto'),csv_parse_1=require(a75_0x4cb25c(0x182)),salesforce_1=require(a75_0x4cb25c(0x14f)),job_detail_1=require(a75_0x4cb25c(0x153)),constants_1=require(a75_0x4cb25c(0x158));class BaseBulkRetrieve extends base_retrieve_1['BaseRetrieve']{get[a75_0x4cb25c(0x15e)](){const _0x1ec81f=a75_0x4cb25c;return{'queryBuilder':this[_0x1ec81f(0x175)],'instance':this[_0x1ec81f(0x165)],'api':constants_1[_0x1ec81f(0x15b)],'contentType':salesforce_1['BulkV1QueryContentType'][_0x1ec81f(0x166)]};}async[a75_0x4cb25c(0x157)](){const _0x28918e=a75_0x4cb25c;var _0x490058,_0x55288c;if(this['retrieve'][_0x28918e(0x177)]()&&!((_0x490058=this[_0x28918e(0x151)])===null||_0x490058===void 0x0?void 0x0:_0x490058[_0x28918e(0x138)]())){this[_0x28918e(0x15a)](null);return;}if((_0x55288c=this[_0x28918e(0x151)])===null||_0x55288c===void 0x0?void 0x0:_0x55288c[_0x28918e(0x138)]()){this['csvParser'][_0x28918e(0x17e)]();return;}const _0x4de3d1=await this[_0x28918e(0x145)][_0x28918e(0x14b)]();if(!_0x4de3d1)return this['pull']();await this[_0x28918e(0x168)](_0x4de3d1);}async[a75_0x4cb25c(0x168)](_0x22aca8){const _0x297d46=a75_0x4cb25c,_0x294b71=path_1[_0x297d46(0x141)][_0x297d46(0x143)](job_detail_1[_0x297d46(0x139)],(0x0,crypto_1['randomUUID'])()),_0x12c0e2=(0x0,crypto_1[_0x297d46(0x144)])(),_0x4e6a65=await this[_0x297d46(0x181)](_0x22aca8,_0x294b71,_0x12c0e2)[_0x297d46(0x172)](()=>this['readEncryptedTempFile'](_0x294b71,_0x12c0e2)),_0x61d0b1={'columns':!![],'cast':this[_0x297d46(0x147)][_0x297d46(0x180)](this)};this[_0x297d46(0x151)]=(0x0,stream_1[_0x297d46(0x136)])(_0x4e6a65,(0x0,csv_parse_1[_0x297d46(0x16d)])(_0x61d0b1),this[_0x297d46(0x13d)][_0x297d46(0x180)](this,_0x294b71)),this['csvParser']['on']('data',_0x217d93=>{const _0x2d7ee7=_0x297d46;this[_0x2d7ee7(0x151)][_0x2d7ee7(0x14c)](),this['push'](_0x217d93);}),this['csvParser']['on']('end',async()=>{const _0x135c31=_0x297d46;return await utils_1['FsUtils']['isExistsPath'](_0x294b71)&&await(0x0,promises_1['rm'])(_0x294b71)[_0x135c31(0x15c)](this[_0x135c31(0x167)]['bind'](this,null)),this['_read']();}),this[_0x297d46(0x151)]['on'](_0x297d46(0x13e),this['pipelineCallback']['bind'](this,_0x294b71));}async[a75_0x4cb25c(0x181)](_0x45b72f,_0x247211,_0x40d8dc){const _0x274f11=a75_0x4cb25c,_0x2f04be=fs_1['default']['createWriteStream'](_0x247211);await(0x0,promises_2[_0x274f11(0x136)])(_0x45b72f,utils_1['CryptoUtils'][_0x274f11(0x16f)](_0x40d8dc),_0x2f04be);}async[a75_0x4cb25c(0x14d)](_0x47b5b8,_0x5e7d04){const _0x1f8565=a75_0x4cb25c,_0x5ceed3=fs_1[_0x1f8565(0x141)][_0x1f8565(0x13b)](_0x47b5b8),_0x3d1d6e=await this['readEncryptionVector'](_0x5ceed3),_0xa2cc34=utils_1['CryptoUtils'][_0x1f8565(0x140)](_0x5e7d04,_0x3d1d6e);return(0x0,stream_1['pipeline'])(_0x5ceed3,_0xa2cc34,this[_0x1f8565(0x13d)][_0x1f8565(0x180)](this,_0x47b5b8));}async[a75_0x4cb25c(0x13d)](_0x332826,_0xe62792){_0xe62792&&await this['handleError'](_0x332826,_0xe62792);}async[a75_0x4cb25c(0x167)](_0x50ce82,_0x11af8e){const _0x3d0a66=a75_0x4cb25c;_0x50ce82&&await utils_1[_0x3d0a66(0x137)][_0x3d0a66(0x178)](_0x50ce82)&&await(0x0,promises_1['rm'])(_0x50ce82)[_0x3d0a66(0x15c)](_0x46bb9f=>job_detail_1[_0x3d0a66(0x164)][_0x3d0a66(0x13e)](_0x46bb9f)),this[_0x3d0a66(0x169)](_0x11af8e);}async[a75_0x4cb25c(0x156)](_0x10dfca){return new Promise((_0x1527a5,_0x4b2c30)=>{const _0x513cb5=a75_0x3135;_0x10dfca['once'](_0x513cb5(0x13e),_0x4b2c30),_0x10dfca[_0x513cb5(0x154)]('readable',()=>{const _0x39c760=_0x10dfca['read'](0x10);_0x1527a5(_0x39c760);});});}[a75_0x4cb25c(0x147)](_0x3a4d74,{header:_0x1fb20e,column:_0x1454c5}){const _0x456232=a75_0x4cb25c;!this['_fieldsTypes']&&(this[_0x456232(0x173)]=this[_0x456232(0x15f)][_0x456232(0x17d)][_0x456232(0x146)]((_0x7ce70b,{name:_0x2b57ff,type:_0x59d30d})=>_0x7ce70b[_0x456232(0x16e)](_0x2b57ff,_0x59d30d),new Map()));if(_0x1fb20e)return _0x3a4d74;if(!_0x3a4d74)return null;switch(this[_0x456232(0x173)][_0x456232(0x152)](_0x1454c5)){case _0x456232(0x161):return _0x3a4d74['replace'](/\.\d{3}Z$/,_0x456232(0x150));case _0x456232(0x179):return _0x3a4d74===_0x456232(0x16a);case _0x456232(0x171):case _0x456232(0x148):case'int':case _0x456232(0x13a):return+_0x3a4d74;default:return _0x3a4d74;}}}exports['BaseBulkRetrieve']=BaseBulkRetrieve,BaseBulkRetrieve[a75_0x4cb25c(0x14e)]=0x1388;