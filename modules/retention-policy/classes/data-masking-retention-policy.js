const a264_0x3e2905=a264_0x57b0;(function(_0x1a6c59,_0x24ef15){const _0x3ac0c2=a264_0x57b0,_0x321d0c=_0x1a6c59();while(!![]){try{const _0x220976=-parseInt(_0x3ac0c2(0xfa))/0x1+-parseInt(_0x3ac0c2(0xe8))/0x2+parseInt(_0x3ac0c2(0xda))/0x3*(-parseInt(_0x3ac0c2(0xf6))/0x4)+parseInt(_0x3ac0c2(0xf8))/0x5*(-parseInt(_0x3ac0c2(0xd8))/0x6)+parseInt(_0x3ac0c2(0xed))/0x7+parseInt(_0x3ac0c2(0xd9))/0x8+-parseInt(_0x3ac0c2(0xe3))/0x9*(-parseInt(_0x3ac0c2(0xd3))/0xa);if(_0x220976===_0x24ef15)break;else _0x321d0c['push'](_0x321d0c['shift']());}catch(_0x52f9c5){_0x321d0c['push'](_0x321d0c['shift']());}}}(a264_0x5725,0xc852d));function a264_0x57b0(_0x6bc62e,_0x24d14d){const _0x27584c=a264_0x5725();return a264_0x57b0=function(_0x3f1442,_0x293493){_0x3f1442=_0x3f1442-0xcf;let _0x572534=_0x27584c[_0x3f1442];return _0x572534;},a264_0x57b0(_0x6bc62e,_0x24d14d);}const a264_0x293493=(function(){let _0x545337=!![];return function(_0x3c8ba7,_0x406c61){const _0x53e5e9=_0x545337?function(){const _0x1b2266=a264_0x57b0;if(_0x406c61){const _0x3e88ef=_0x406c61[_0x1b2266(0xde)](_0x3c8ba7,arguments);return _0x406c61=null,_0x3e88ef;}}:function(){};return _0x545337=![],_0x53e5e9;};}()),a264_0x3f1442=a264_0x293493(this,function(){const _0x4a5000=a264_0x57b0;return a264_0x3f1442[_0x4a5000(0xdd)]()[_0x4a5000(0xe9)](_0x4a5000(0xd5))[_0x4a5000(0xdd)]()[_0x4a5000(0xeb)](a264_0x3f1442)['search'](_0x4a5000(0xd5));});a264_0x3f1442();'use strict';var __importDefault=this&&this[a264_0x3e2905(0xd2)]||function(_0x37d3fb){const _0x4f139b=a264_0x3e2905;return _0x37d3fb&&_0x37d3fb[_0x4f139b(0xdf)]?_0x37d3fb:{'default':_0x37d3fb};};Object[a264_0x3e2905(0xd4)](exports,a264_0x3e2905(0xdf),{'value':!![]}),exports[a264_0x3e2905(0xe7)]=void 0x0;function a264_0x5725(){const _0x24c4e1=['isExistsPath','constructor','getJobsIds','5856942wPXXGQ','name','MaskingService','../../../core','getTime','@flosum/utils','FsUtils','../../../constants/job','isExpiredDate','68LvPcMK','completedDate','153570gchoci','logger','1098578PjCsKU','readFile','default','join','__importDefault','10AUztPr','defineProperty','(((.+)+)+)+$','Logger','maskingFolderPath','90jPPrGu','492800tuESxm','33903lNYgml','utf-8','../../shared/utils/job.utils','toString','apply','__esModule','execute','filterExpiredJobs','getJobCompletedDate','21945465KJnDvw','deleteJob','../../data-masking/services/masking.service','fs/promises','DataMaskingRetentionPolicy','1529522mwczDg','search'];a264_0x5725=function(){return _0x24c4e1;};return a264_0x5725();}const promises_1=require(a264_0x3e2905(0xe6)),core_1=require(a264_0x3e2905(0xf0)),utils_1=require(a264_0x3e2905(0xf2)),job_1=require(a264_0x3e2905(0xf4)),job_utils_1=__importDefault(require(a264_0x3e2905(0xdc))),masking_service_1=require(a264_0x3e2905(0xe5)),path_1=__importDefault(require('path'));class DataMaskingRetentionPolicy{constructor(){const _0x2ee098=a264_0x3e2905;this['EXPIRED_RANGE_DATE']=0x9a7ec800,this[_0x2ee098(0xf9)]=new core_1[(_0x2ee098(0xd6))](DataMaskingRetentionPolicy[_0x2ee098(0xee)]);}async[a264_0x3e2905(0xe0)](){const _0x3827e4=a264_0x3e2905;try{const _0x3fe9f9=await job_utils_1['default'][_0x3827e4(0xec)](masking_service_1['MaskingService'][_0x3827e4(0xd7)]),_0x5d8fe9=await this[_0x3827e4(0xe1)](_0x3fe9f9);for(const _0x184e45 of _0x5d8fe9){await this['deleteJob'](_0x184e45);}}catch(_0x44af7e){this[_0x3827e4(0xf9)]['error'](_0x44af7e);}}async['filterExpiredJobs'](_0x2ae6cf){const _0x28b0eb=a264_0x3e2905,_0x462623=[];for(const _0x589dd5 of _0x2ae6cf){const _0x3526bf=await this[_0x28b0eb(0xe2)](_0x589dd5),_0x24b992=_0x3526bf&&this[_0x28b0eb(0xf5)](_0x3526bf);_0x24b992&&_0x462623['push'](_0x589dd5);}return _0x462623;}async[a264_0x3e2905(0xe2)](_0x2acefe){const _0x3f47f4=a264_0x3e2905;var _0x58fbca;const _0x1411d=path_1['default'][_0x3f47f4(0xd1)](masking_service_1[_0x3f47f4(0xef)][_0x3f47f4(0xd7)],_0x2acefe,job_1['JOB_LOG_STATE_FILENAME']);if(!await utils_1[_0x3f47f4(0xf3)][_0x3f47f4(0xea)](_0x1411d))return null;const _0x370cbd=await(0x0,promises_1[_0x3f47f4(0xcf)])(_0x1411d,{'encoding':_0x3f47f4(0xdb)});return(_0x58fbca=JSON['parse'](_0x370cbd)[_0x3f47f4(0xf7)])!==null&&_0x58fbca!==void 0x0?_0x58fbca:null;}[a264_0x3e2905(0xf5)](_0x56609a){const _0x362f12=a264_0x3e2905;return new Date()[_0x362f12(0xf1)]()-_0x56609a>this['EXPIRED_RANGE_DATE'];}[a264_0x3e2905(0xe4)](_0x81d5c4){const _0x5ed111=a264_0x3e2905,_0x1006d5=path_1[_0x5ed111(0xd0)][_0x5ed111(0xd1)](masking_service_1['MaskingService'][_0x5ed111(0xd7)],_0x81d5c4);return(0x0,promises_1['rm'])(_0x1006d5,{'recursive':!![],'force':!![]});}}exports[a264_0x3e2905(0xe7)]=DataMaskingRetentionPolicy;