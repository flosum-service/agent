function a89_0x4a46(_0x5d103f,_0x2d7eae){const _0x57608f=a89_0x505f();return a89_0x4a46=function(_0x433794,_0x1d7b01){_0x433794=_0x433794-0x9a;let _0x505f3e=_0x57608f[_0x433794];return _0x505f3e;},a89_0x4a46(_0x5d103f,_0x2d7eae);}const a89_0x46ffb3=a89_0x4a46;function a89_0x505f(){const _0x375830=['1237252RaaPew','extractFieldsFromRecord','length','Component__r.','6EPdniS','map','../../git/salesforce/utils/flosum-naming.utils','constructor','Component_Type__c','splitZip','removeNamespacePrefix','ComponentsApi','4101570Xbzfvc','filter','9868030KkHSNq','1677620dHDAiY','../../shared/utils','76XUhlze','FLOSUM_NAMESPACE','getEntry','1612302bJmZPp','chunkArray','38211gTfhvV','search','defineProperty','get','toBuffer','Component_Name__c','getEntries','push','toString','deleteFile','97452wWKOAt','__esModule','Component_Type__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','(((.+)+)+)+$','40RmIBAM','isDirectory','MAX_ZIP_SIZE','Component_History__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20IN\x20(','default','fetchComponentsDetailsByComponentsHistory','adm-zip','/query/','sort','\x27,\x27','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20','addFile','Component__r','join','getData','11rIkloh','apply'];a89_0x505f=function(){return _0x375830;};return a89_0x505f();}(function(_0x27df33,_0x3aa7ff){const _0x197b7b=a89_0x4a46,_0x3bb736=_0x27df33();while(!![]){try{const _0x23d0b1=parseInt(_0x197b7b(0xae))/0x1+-parseInt(_0x197b7b(0xc2))/0x2+parseInt(_0x197b7b(0xc4))/0x3*(parseInt(_0x197b7b(0xbf))/0x4)+parseInt(_0x197b7b(0xba))/0x5*(-parseInt(_0x197b7b(0xb2))/0x6)+-parseInt(_0x197b7b(0xbd))/0x7+-parseInt(_0x197b7b(0x9d))/0x8*(-parseInt(_0x197b7b(0xce))/0x9)+-parseInt(_0x197b7b(0xbc))/0xa*(-parseInt(_0x197b7b(0xac))/0xb);if(_0x23d0b1===_0x3aa7ff)break;else _0x3bb736['push'](_0x3bb736['shift']());}catch(_0x5c3e87){_0x3bb736['push'](_0x3bb736['shift']());}}}(a89_0x505f,0x9faf9));const a89_0x1d7b01=(function(){let _0x266eb9=!![];return function(_0x36190f,_0x113ace){const _0x1d6ad5=_0x266eb9?function(){const _0xe64f71=a89_0x4a46;if(_0x113ace){const _0x4f38ff=_0x113ace[_0xe64f71(0xad)](_0x36190f,arguments);return _0x113ace=null,_0x4f38ff;}}:function(){};return _0x266eb9=![],_0x1d6ad5;};}()),a89_0x433794=a89_0x1d7b01(this,function(){const _0x1c70e5=a89_0x4a46;return a89_0x433794['toString']()[_0x1c70e5(0xc5)](_0x1c70e5(0x9c))['toString']()[_0x1c70e5(0xb5)](a89_0x433794)[_0x1c70e5(0xc5)]('(((.+)+)+)+$');});a89_0x433794();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x198496){const _0xcf0d38=a89_0x4a46;return _0x198496&&_0x198496[_0xcf0d38(0x9a)]?_0x198496:{'default':_0x198496};};Object[a89_0x46ffb3(0xc6)](exports,a89_0x46ffb3(0x9a),{'value':!![]}),exports[a89_0x46ffb3(0xb9)]=exports[a89_0x46ffb3(0x9f)]=void 0x0;const utils_1=require(a89_0x46ffb3(0xbe)),constants_1=require('../../../constants'),flosum_naming_utils_1=require(a89_0x46ffb3(0xb4)),adm_zip_1=__importDefault(require(a89_0x46ffb3(0xa3))),CHUNK_QUERY_SIZE=0x1f4;exports['MAX_ZIP_SIZE']=0x2100000;class ComponentsApi{static async[a89_0x46ffb3(0xa2)](_0x466b88,_0x43da02){const _0x4e864c=a89_0x46ffb3,_0xe52b7=[],_0x2b602a=(0x0,utils_1[_0x4e864c(0xc3)])(_0x43da02,CHUNK_QUERY_SIZE);for(const _0x190038 of _0x2b602a){const _0x357dd7=_0x4e864c(0xa7)+constants_1[_0x4e864c(0xc0)]+_0x4e864c(0xb1)+constants_1['FLOSUM_NAMESPACE']+'Component_Name__c,\x20'+constants_1[_0x4e864c(0xc0)]+_0x4e864c(0xb1)+constants_1['FLOSUM_NAMESPACE']+_0x4e864c(0x9b)+constants_1[_0x4e864c(0xc0)]+_0x4e864c(0xa0)+('\x27'+_0x190038[_0x4e864c(0xaa)](_0x4e864c(0xa6))+'\x27')+')',{data:_0x3cc3ea}=await _0x466b88[_0x4e864c(0xc7)]('/services/data/'+constants_1['SALESFORCE_API_VERSION']+_0x4e864c(0xa4),{'params':{'q':_0x357dd7}});_0xe52b7[_0x4e864c(0xcb)](..._0x3cc3ea['records']);}return _0xe52b7;}static[a89_0x46ffb3(0xb8)](_0x2a0d50){const _0x5496be=a89_0x46ffb3,_0xcde89e=_0x2a0d50[_0x5496be(0xb3)](_0x5b4b31=>{const _0x517f9c=_0x5496be,_0xb1a323=(0x0,flosum_naming_utils_1[_0x517f9c(0xaf)])(_0x5b4b31,['Id',_0x517f9c(0xa9)]);return _0xb1a323[_0x517f9c(0xa9)]=(0x0,flosum_naming_utils_1['extractFieldsFromRecord'])(_0xb1a323['Component__r'],[_0x517f9c(0xc9),_0x517f9c(0xb6)]),_0xb1a323;});return _0xcde89e;}static async[a89_0x46ffb3(0xb7)](_0xdb0aef,_0x11f520){const _0x5473ba=a89_0x46ffb3;var _0x241fe7;const _0x43300b=_0xdb0aef[_0x5473ba(0xca)]()[_0x5473ba(0xbb)](_0x4b3afd=>!_0x4b3afd[_0x5473ba(0x9e)])[_0x5473ba(0xa5)]((_0x4411b4,_0x366582)=>_0x4411b4[_0x5473ba(0xab)]()[_0x5473ba(0xb0)]>_0x366582[_0x5473ba(0xab)]()[_0x5473ba(0xb0)]?-0x1:0x1),_0xdb4ea0=new adm_zip_1[(_0x5473ba(0xa1))]();for(const {entryName:_0x15dacb}of _0x43300b){const _0x372e3d=(_0x241fe7=_0xdb0aef[_0x5473ba(0xc1)](_0x15dacb))===null||_0x241fe7===void 0x0?void 0x0:_0x241fe7['getData']();_0xdb4ea0[_0x5473ba(0xa8)](_0x15dacb,_0x372e3d),_0xdb0aef[_0x5473ba(0xcd)](_0x15dacb);if(_0x11f520-_0xdb4ea0[_0x5473ba(0xc8)]()[_0x5473ba(0xcc)]('base64')['length']<exports[_0x5473ba(0x9f)])break;}return[_0xdb0aef,_0xdb4ea0];}}exports[a89_0x46ffb3(0xb9)]=ComponentsApi;