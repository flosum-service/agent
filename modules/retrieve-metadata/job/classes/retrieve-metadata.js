const a266_0xc728c5=a266_0xed64;(function(_0x597a64,_0x4a7104){const _0x557460=a266_0xed64,_0x543a98=_0x597a64();while(!![]){try{const _0x444f92=-parseInt(_0x557460(0x1f3))/0x1+-parseInt(_0x557460(0x1fe))/0x2*(-parseInt(_0x557460(0x1f7))/0x3)+parseInt(_0x557460(0x1f4))/0x4+parseInt(_0x557460(0x1e4))/0x5+parseInt(_0x557460(0x1ce))/0x6*(-parseInt(_0x557460(0x1da))/0x7)+parseInt(_0x557460(0x1e6))/0x8+-parseInt(_0x557460(0x1e0))/0x9;if(_0x444f92===_0x4a7104)break;else _0x543a98['push'](_0x543a98['shift']());}catch(_0x2e54f1){_0x543a98['push'](_0x543a98['shift']());}}}(a266_0xa134,0xec537));const a266_0x106882=(function(){let _0x45e450=!![];return function(_0x1e1b06,_0x41c1b7){const _0x31627c=_0x45e450?function(){const _0x3de59f=a266_0xed64;if(_0x41c1b7){const _0x38ab85=_0x41c1b7[_0x3de59f(0x1d1)](_0x1e1b06,arguments);return _0x41c1b7=null,_0x38ab85;}}:function(){};return _0x45e450=![],_0x31627c;};}()),a266_0x2cd0f1=a266_0x106882(this,function(){const _0x4ae310=a266_0xed64;return a266_0x2cd0f1[_0x4ae310(0x1fb)]()[_0x4ae310(0x1ee)](_0x4ae310(0x1ec))[_0x4ae310(0x1fb)]()[_0x4ae310(0x1e3)](a266_0x2cd0f1)['search'](_0x4ae310(0x1ec));});a266_0x2cd0f1();function a266_0xed64(_0x39867d,_0x300de3){const _0x263531=a266_0xa134();return a266_0xed64=function(_0x2cd0f1,_0x106882){_0x2cd0f1=_0x2cd0f1-0x1cc;let _0xa13496=_0x263531[_0x2cd0f1];return _0xa13496;},a266_0xed64(_0x39867d,_0x300de3);}'use strict';var __importDefault=this&&this[a266_0xc728c5(0x1f1)]||function(_0x2ce560){const _0x5e7ea8=a266_0xc728c5;return _0x2ce560&&_0x2ce560[_0x5e7ea8(0x1e7)]?_0x2ce560:{'default':_0x2ce560};};Object[a266_0xc728c5(0x1f6)](exports,a266_0xc728c5(0x1e7),{'value':!![]});const salesforce_1=require('@flosum/salesforce'),manifest_manger_1=__importDefault(require('./manifest-manger')),path_1=__importDefault(require(a266_0xc728c5(0x1d7))),promises_1=require(a266_0xc728c5(0x1d2)),fs_utils_1=require('../../../shared/utils/fs.utils'),object_sizeof_1=__importDefault(require(a266_0xc728c5(0x1eb))),retrieve_factory_1=__importDefault(require('./retrieve-factory')),auth_manager_1=require(a266_0xc728c5(0x1dc)),constants_1=require(a266_0xc728c5(0x1fa)),shortid_1=__importDefault(require(a266_0xc728c5(0x1f8))),jszip_1=__importDefault(require(a266_0xc728c5(0x1ea)));function a266_0xa134(){const _0x4b48c3=['writeChunk','620012DksKSc','6790948DgFVfD','base64','defineProperty','147cMcHdS','shortid','\x27\x20size\x20\x27','../../constants','toString','RETRIEVE_RESULT_FOLDER_NAME','stringify','11074poAWAE','metadataFolder','DEFLATE','1235178qiImxV','items','.json','apply','fs/promises','create','default','logger','retrieveResultsPath','path','join','components','42sKrgli','file','../../../shared/managers/auth.manager','stateManager','writeFile','execute','10494990YiDPVH','length','fileName','constructor','3876385joCSfx','jobStorePath','9959712NnGnYc','__esModule','\x27\x20exceed\x20limit\x20\x27','makeDir','jszip','object-sizeof','(((.+)+)+)+$','push','search','init','AuthManager','__importDefault'];a266_0xa134=function(){return _0x4b48c3;};return a266_0xa134();}class RetrieveMetadata{constructor(_0x312aec,_0x3bada5,_0x2c7910){const _0x18de62=a266_0xc728c5;this[_0x18de62(0x1e5)]=_0x312aec,this[_0x18de62(0x1d5)]=_0x3bada5,this[_0x18de62(0x1dd)]=_0x2c7910,this['metadataFolder']=path_1[_0x18de62(0x1d4)][_0x18de62(0x1d8)](this[_0x18de62(0x1e5)],constants_1[_0x18de62(0x1fc)]),this[_0x18de62(0x1d6)]=path_1['default'][_0x18de62(0x1d8)](this[_0x18de62(0x1e5)],constants_1['RETRIEVE_RESULTS_IDS_FILENAME']);}async[a266_0xc728c5(0x1f2)](_0x3a6e12){const _0x46db69=a266_0xc728c5,_0x4abcf3=(0x0,shortid_1[_0x46db69(0x1d4)])();return await(0x0,promises_1[_0x46db69(0x1de)])(path_1[_0x46db69(0x1d4)]['join'](this[_0x46db69(0x1cc)],_0x4abcf3+_0x46db69(0x1d0)),JSON[_0x46db69(0x1fd)](_0x3a6e12)),_0x4abcf3;}async[a266_0xc728c5(0x1df)](){const _0x397372=a266_0xc728c5,{credentials:_0x37a3a3,declarativeFilter:_0x1d25fa,maxChunkSize:_0x4b7233,maxChunkItems:_0x4234a1}=await new manifest_manger_1['default'](this['jobStorePath'])[_0x397372(0x1ef)](),_0xe33b88=await salesforce_1['AxiosInstanceUtils'][_0x397372(0x1d3)](new auth_manager_1[(_0x397372(0x1f0))](_0x37a3a3),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),_0x265e7d=await retrieve_factory_1[_0x397372(0x1d4)]['create'](_0xe33b88,this[_0x397372(0x1d5)],_0x1d25fa)['execute']();await(0x0,fs_utils_1[_0x397372(0x1e9)])(this['metadataFolder']);let _0x4a0da7=[];const _0x5af515=[];let _0xbbb2b=0x0;for(const _0x515cfa in _0x265e7d[_0x397372(0x1cf)]){for(const {listMetadataItem:_0x30cac0,files:_0x162211}of _0x265e7d[_0x397372(0x1cf)][_0x515cfa][_0x397372(0x1d9)]){const _0x5e7f80=new jszip_1[(_0x397372(0x1d4))]();for(const _0x30d89b in _0x162211){await _0x5e7f80[_0x397372(0x1db)](_0x30d89b,_0x162211[_0x30d89b]);}const _0x476bda=await _0x5e7f80['generateAsync']({'type':_0x397372(0x1f5),'compression':_0x397372(0x1cd),'compressionOptions':{'level':0x9}}),_0x187cf3={..._0x30cac0,'zip':_0x476bda},_0x181ac7=(0x0,object_sizeof_1[_0x397372(0x1d4)])(_0x187cf3);if(_0x181ac7>_0x4b7233){await this[_0x397372(0x1dd)]['addWarning']('Item\x20\x27'+_0x30cac0[_0x397372(0x1e2)]+_0x397372(0x1f9)+_0x181ac7+_0x397372(0x1e8)+_0x4b7233+'\x27');continue;}if(_0xbbb2b+_0x181ac7>_0x4b7233||_0x4a0da7[_0x397372(0x1e1)]>=_0x4234a1){const _0x3dd7a0=await this[_0x397372(0x1f2)](_0x4a0da7);_0x5af515[_0x397372(0x1ed)](_0x3dd7a0),_0xbbb2b=0x0,_0x4a0da7=[];}_0x4a0da7['push'](_0x187cf3),_0xbbb2b+=_0x181ac7;}}if(_0x4a0da7['length']){const _0x544a0f=await this['writeChunk'](_0x4a0da7);_0x5af515[_0x397372(0x1ed)](_0x544a0f);}await(0x0,promises_1[_0x397372(0x1de)])(this[_0x397372(0x1d6)],JSON[_0x397372(0x1fd)](_0x5af515));}}exports[a266_0xc728c5(0x1d4)]=RetrieveMetadata;