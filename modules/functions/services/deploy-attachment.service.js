const a84_0x565381=a84_0x1d40;(function(_0x4ce865,_0x138c83){const _0x3b2439=a84_0x1d40,_0xb2729b=_0x4ce865();while(!![]){try{const _0x42ad1d=-parseInt(_0x3b2439(0x190))/0x1*(-parseInt(_0x3b2439(0x1b1))/0x2)+parseInt(_0x3b2439(0x1b3))/0x3*(-parseInt(_0x3b2439(0x189))/0x4)+parseInt(_0x3b2439(0x1ba))/0x5*(parseInt(_0x3b2439(0x1a8))/0x6)+parseInt(_0x3b2439(0x19d))/0x7*(parseInt(_0x3b2439(0x1ac))/0x8)+-parseInt(_0x3b2439(0x1c2))/0x9+-parseInt(_0x3b2439(0x196))/0xa+parseInt(_0x3b2439(0x191))/0xb*(parseInt(_0x3b2439(0x18a))/0xc);if(_0x42ad1d===_0x138c83)break;else _0xb2729b['push'](_0xb2729b['shift']());}catch(_0x58611d){_0xb2729b['push'](_0xb2729b['shift']());}}}(a84_0x56db,0x5679c));const a84_0x117d51=(function(){let _0x17c23d=!![];return function(_0x578642,_0xe519b6){const _0x2885d3=_0x17c23d?function(){const _0xb8d73e=a84_0x1d40;if(_0xe519b6){const _0x1299e9=_0xe519b6[_0xb8d73e(0x1a6)](_0x578642,arguments);return _0xe519b6=null,_0x1299e9;}}:function(){};return _0x17c23d=![],_0x2885d3;};}()),a84_0x300dc0=a84_0x117d51(this,function(){const _0xdfc879=a84_0x1d40;return a84_0x300dc0[_0xdfc879(0x192)]()[_0xdfc879(0x1a1)](_0xdfc879(0x1b0))[_0xdfc879(0x192)]()['constructor'](a84_0x300dc0)[_0xdfc879(0x1a1)](_0xdfc879(0x1b0));});a84_0x300dc0();'use strict';var __importDefault=this&&this[a84_0x565381(0x18d)]||function(_0x43b471){return _0x43b471&&_0x43b471['__esModule']?_0x43b471:{'default':_0x43b471};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a84_0x565381(0x1c5)]=void 0x0;const promises_1=require('fs/promises'),sfdx_utils_1=require(a84_0x565381(0x1c4)),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require(a84_0x565381(0x1bd)),path_1=__importDefault(require('path')),fs_internal_1=require(a84_0x565381(0x1c7)),uuid_1=require(a84_0x565381(0x1a5)),adm_zip_1=__importDefault(require(a84_0x565381(0x1af))),fetch_attachments_1=require('../../shared/utils/fetch-attachments'),DESTRUCTIVE_CHANGES_POST_NAME=a84_0x565381(0x1a4),DEPLOY_ZIP_NAME=a84_0x565381(0x1a7);async function deployComponents({attachmentId:_0x531ef1,credentials:_0x3c399c,postDestructiveAttachmentId:_0x33119c,deployOptions:_0x3c6cec},_0x524dc0){const _0x3a3047=a84_0x565381,_0x21529b=(0x0,uuid_1['v4'])();try{const _0xd86881=_0x531ef1[_0x3a3047(0x1b5)](','),_0x45bf64=new adm_zip_1[(_0x3a3047(0x194))]();for(const _0x1c4ff of _0xd86881){await(0x0,fetch_attachments_1[_0x3a3047(0x1ca)])(_0x524dc0,_0x1c4ff)[_0x3a3047(0x1a9)](_0x66f56e=>{const _0x4819f6=_0x3a3047;var _0x5a3b2e;const _0x192052=new adm_zip_1['default'](_0x66f56e);for(const _0x18b93a of _0x192052[_0x4819f6(0x198)]()){_0x45bf64[_0x4819f6(0x1bb)](_0x18b93a[_0x4819f6(0x19f)],(_0x5a3b2e=_0x192052[_0x4819f6(0x1c0)](_0x18b93a['entryName']))===null||_0x5a3b2e===void 0x0?void 0x0:_0x5a3b2e[_0x4819f6(0x1ad)]());}});}!await fs_internal_1['FS'][_0x3a3047(0x193)](_0x3a3047(0x18f)+_0x21529b)&&await(0x0,promises_1[_0x3a3047(0x1bf)])(_0x3a3047(0x18f)+_0x21529b,{'recursive':!![]});await sfdx_utils_2[_0x3a3047(0x18c)]['createSFDXProject'](_0x531ef1,_0x21529b),await sfdx_utils_2[_0x3a3047(0x18c)][_0x3a3047(0x18e)](_0x3c399c['instanceUrl'],_0x531ef1,_0x21529b);if(_0x33119c){const _0x3b5533=await(0x0,fetch_attachments_1['fetchAttachmentBody'])(_0x524dc0,_0x33119c);_0x45bf64['addFile'](DESTRUCTIVE_CHANGES_POST_NAME,_0x3b5533),await(0x0,promises_1['writeFile'])(process[_0x3a3047(0x197)]()+_0x3a3047(0x1c1)+_0x21529b+'/'+DEPLOY_ZIP_NAME,_0x45bf64[_0x3a3047(0x199)]());}else await(0x0,promises_1[_0x3a3047(0x1ab)])(process[_0x3a3047(0x197)]()+_0x3a3047(0x1c1)+_0x21529b+'/'+DEPLOY_ZIP_NAME,_0x45bf64[_0x3a3047(0x199)]());const _0x3f2951=await deploy(_0x3c399c,_0x3c6cec,_0x21529b);return JSON[_0x3a3047(0x19c)](_0x3f2951)[_0x3a3047(0x1b2)]['id'];}catch(_0x13de31){throw _0x13de31;}finally{await(0x0,promises_1['rm'])(path_1[_0x3a3047(0x194)][_0x3a3047(0x19b)](process[_0x3a3047(0x197)](),'.temp',_0x21529b),{'recursive':!![]});}}function a84_0x56db(){const _0x13a4eb=['refreshToken','../../git/internal/fs.internal','catch','testLevel','fetchAttachmentBody','128Vgiuhr','7812972JFZKxX','AuthUtils','SFDXUtils','__importDefault','setInstanceUrl','.temp/','147835KAMBjf','11NGZlji','toString','exists','default','\x20-u\x20','6637100rUYWeU','cwd','getEntries','toBuffer','\x20-purgeondelete','join','parse','17493OAvMak','SFDX','entryName','clientSecret','search','runTests','spawn','destructiveChangesPost.xml','uuid','apply','deploy.zip','108vfuBxm','then','clientId','writeFile','1904cQWphc','getData','\x20-c','adm-zip','(((.+)+)+)+$','4Yjtxna','result','41571SihvHG','.temp','split','accessToken','updateAccessToken','force:mdapi:deploy\x20--json\x20','ignoreWarnings','161450dMqDmZ','addFile','\x20-g','../utils/auth.utils','\x20-l\x20','mkdir','getEntry','/.temp/','5952555ApBCuG','-f\x20','../../git/salesforce/utils/sfdx.utils','deployComponents'];a84_0x56db=function(){return _0x13a4eb;};return a84_0x56db();}function a84_0x1d40(_0x2d19d3,_0x40b314){const _0x1755ff=a84_0x56db();return a84_0x1d40=function(_0x300dc0,_0x117d51){_0x300dc0=_0x300dc0-0x189;let _0x56db03=_0x1755ff[_0x300dc0];return _0x56db03;},a84_0x1d40(_0x2d19d3,_0x40b314);}exports[a84_0x565381(0x1c5)]=deployComponents;function deploy(_0x544c41,_0xde02a2,_0x1b23cb){const _0x448d0e=a84_0x565381,_0x1f752c=path_1[_0x448d0e(0x194)][_0x448d0e(0x19b)](process[_0x448d0e(0x197)](),_0x448d0e(0x1b4),_0x1b23cb,DEPLOY_ZIP_NAME);let _0x5842ae=_0x448d0e(0x1c3)+_0x1f752c+_0x448d0e(0x195)+_0x544c41[_0x448d0e(0x1b6)];return _0x5842ae+=_0xde02a2['checkOnly']?_0x448d0e(0x1ae):'',_0x5842ae+=_0xde02a2[_0x448d0e(0x1c9)]?_0x448d0e(0x1be)+_0xde02a2[_0x448d0e(0x1c9)]:'',_0x5842ae+=_0xde02a2[_0x448d0e(0x1a2)]?'\x20-r\x20'+_0xde02a2['runTests']:'',_0x5842ae+=_0xde02a2[_0x448d0e(0x1b9)]?_0x448d0e(0x1bc):'',_0x5842ae+=_0xde02a2['purgeOnDelete']?_0x448d0e(0x19a):'',sfdx_utils_1[_0x448d0e(0x19e)][_0x448d0e(0x1a3)](_0x448d0e(0x1b8)+_0x5842ae)[_0x448d0e(0x1c8)](async _0x41fd13=>{const _0x5d7050=_0x448d0e;if(sfdx_utils_2['SFDXUtils']['isAuthorizationError'](_0x41fd13))return _0x544c41['accessToken']=await auth_utils_1[_0x5d7050(0x18b)][_0x5d7050(0x1b7)](_0x544c41['instanceUrl'],_0x544c41[_0x5d7050(0x1c6)],_0x544c41[_0x5d7050(0x1aa)],_0x544c41[_0x5d7050(0x1a0)]),deploy(_0x544c41,_0xde02a2,_0x1b23cb);throw _0x41fd13;});}