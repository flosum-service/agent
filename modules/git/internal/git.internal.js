function a126_0x55ad(){const _0x5789ac=['\x20&&\x20git\x20rev-parse\x20HEAD','cd\x20','121124OEkSkg','\x20&&\x20git\x20init','apply','baseDir','Logger','443140DNjlXi','\x22\x20--allow-empty','Git','\x20&&\x20git\x20status','spawnPromise','://','log','removeDir','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','default','filter','gitUrl','4028712gjLtZA','toString','add','\x20&&\x20git\x20checkout\x20--orphan\x20','_repoPath','DEFAULT_GIT_USER_EMAIL','16734NQDUqT','then','git','__esModule','extractAuthorFromCommitDescribe','77vnYwdH','makeDir','\x20&&\x20git\x20checkout\x20','git\x20ls-remote\x20','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','12crsdKW','logger','extractEmailFromCommitDescribe','getCurrentHash','getProtocol','\x20--quiet','extractChangesFromCommitDescribe','getGitShellAuthorizationString','__importDefault','search','describeCommit','963216uvBVdX','@flosum/utils','./internal.utils','getRepositoryBranches','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','.temp','name','path','checkout','commit\x20message\x20\x22%s\x22','git\x20clone\x20-b\x20','clone\x20repository\x20branch\x20%s\x20to\x20%s','commit','replace','\x20&&\x20git\x20add\x20','323512sQZGKD','match','status','302Ccoaod','split','ChildProcessUtils','describe\x20commit\x20%s','join','push\x20changes\x20to\x20%s','test','sha','setCredentials','\x20&&\x20git\x20remote\x20add\x20origin\x20','DEFAULT_CLONE_PATH','\x20&&\x20git\x20push\x20origin\x20','./fs.internal','\x20--refs','DEFAULT_GIT_USER_NAME','createEmptyBranch','INITIAL_COMMIT','../../../core','19998300thuoWd'];a126_0x55ad=function(){return _0x5789ac;};return a126_0x55ad();}const a126_0x525f5d=a126_0x367e;(function(_0x4a2e36,_0x1d3949){const _0x21ad88=a126_0x367e,_0x16f85c=_0x4a2e36();while(!![]){try{const _0x2a3d20=-parseInt(_0x21ad88(0xed))/0x1+parseInt(_0x21ad88(0x12b))/0x2*(-parseInt(_0x21ad88(0x104))/0x3)+parseInt(_0x21ad88(0x10e))/0x4*(-parseInt(_0x21ad88(0xf2))/0x5)+-parseInt(_0x21ad88(0xfe))/0x6+parseInt(_0x21ad88(0x109))/0x7*(parseInt(_0x21ad88(0x128))/0x8)+-parseInt(_0x21ad88(0x119))/0x9+parseInt(_0x21ad88(0xea))/0xa;if(_0x2a3d20===_0x1d3949)break;else _0x16f85c['push'](_0x16f85c['shift']());}catch(_0x20c7c8){_0x16f85c['push'](_0x16f85c['shift']());}}}(a126_0x55ad,0x6aaa1));function a126_0x367e(_0x51face,_0x28ee5e){const _0x1e8e3e=a126_0x55ad();return a126_0x367e=function(_0x1921da,_0x55b252){_0x1921da=_0x1921da-0xe3;let _0x55ad5c=_0x1e8e3e[_0x1921da];return _0x55ad5c;},a126_0x367e(_0x51face,_0x28ee5e);}const a126_0x55b252=(function(){let _0x48ea01=!![];return function(_0x25f323,_0x475ab0){const _0x2803f6=_0x48ea01?function(){const _0x357b3c=a126_0x367e;if(_0x475ab0){const _0x2585ad=_0x475ab0[_0x357b3c(0xef)](_0x25f323,arguments);return _0x475ab0=null,_0x2585ad;}}:function(){};return _0x48ea01=![],_0x2803f6;};}()),a126_0x1921da=a126_0x55b252(this,function(){const _0x669ccc=a126_0x367e;return a126_0x1921da[_0x669ccc(0xff)]()[_0x669ccc(0x117)]('(((.+)+)+)+$')[_0x669ccc(0xff)]()['constructor'](a126_0x1921da)[_0x669ccc(0x117)]('(((.+)+)+)+$');});a126_0x1921da();'use strict';var __importDefault=this&&this[a126_0x525f5d(0x116)]||function(_0x23fe32){return _0x23fe32&&_0x23fe32['__esModule']?_0x23fe32:{'default':_0x23fe32};};Object['defineProperty'](exports,a126_0x525f5d(0x107),{'value':!![]}),exports[a126_0x525f5d(0xf4)]=void 0x0;const constants_1=require('../../../constants'),core_1=require(a126_0x525f5d(0xe9)),path_1=__importDefault(require(a126_0x525f5d(0x120))),branch_dto_1=require('../providers/branches/dto/branch.dto'),utils_1=require('../../shared/utils'),fs_internal_1=require(a126_0x525f5d(0xe4)),internal_utils_1=require(a126_0x525f5d(0x11b)),utils_2=require(a126_0x525f5d(0x11a));class Git{constructor(_0x561b26){const _0x3e9475=a126_0x525f5d;this[_0x3e9475(0x102)]=_0x561b26;}get[a126_0x525f5d(0xf0)](){const _0x75afd3=a126_0x525f5d;return this[_0x75afd3(0x102)];}async[a126_0x525f5d(0x133)](_0x38859c,_0x1ecba5){const _0x4f485c=a126_0x525f5d;await utils_2['ChildProcessUtils']['spawnPromise'](_0x4f485c(0xec)+this['_repoPath']+_0x4f485c(0x11d)+_0x38859c+_0x4f485c(0xfa)+_0x1ecba5+'\x22','');}async[a126_0x525f5d(0x100)](..._0x242d43){const _0x3de666=a126_0x525f5d;await utils_2[_0x3de666(0x12d)]['spawnPromise'](_0x3de666(0xec)+this[_0x3de666(0x102)]+_0x3de666(0x127)+_0x242d43[_0x3de666(0x12f)]('\x20'),'');}async[a126_0x525f5d(0x12a)](){const _0x5e5518=a126_0x525f5d;return utils_2[_0x5e5518(0x12d)][_0x5e5518(0xf6)](_0x5e5518(0xec)+this[_0x5e5518(0x102)]+_0x5e5518(0xf5),'');}async[a126_0x525f5d(0x125)](_0x430eb5){const _0x2c97de=a126_0x525f5d;Git[_0x2c97de(0x10f)]['log'](_0x2c97de(0x122),_0x430eb5),await utils_2[_0x2c97de(0x12d)][_0x2c97de(0xf6)](_0x2c97de(0xec)+this['_repoPath']+'\x20&&\x20git\x20commit\x20-m\x20\x22'+_0x430eb5+'\x22','');}async['push'](_0x158de4){const _0x2a18a9=a126_0x525f5d;Git[_0x2a18a9(0x10f)][_0x2a18a9(0xf8)](_0x2a18a9(0x130),_0x158de4),await utils_2[_0x2a18a9(0x12d)][_0x2a18a9(0xf6)](_0x2a18a9(0xec)+this['_repoPath']+_0x2a18a9(0xe3)+_0x158de4+_0x2a18a9(0x113),'');}async[a126_0x525f5d(0x121)](_0x228f31){const _0xa599c1=a126_0x525f5d;Git['logger'][_0xa599c1(0xf8)]('checkout\x20to\x20%s',_0x228f31),await utils_2['ChildProcessUtils'][_0xa599c1(0xf6)](_0xa599c1(0xec)+this[_0xa599c1(0x102)]+_0xa599c1(0x10b)+_0x228f31,'');}async[a126_0x525f5d(0x111)](){const _0x57b656=a126_0x525f5d,_0x26c313=await utils_2['ChildProcessUtils'][_0x57b656(0xf6)](_0x57b656(0xec)+this[_0x57b656(0x102)]+_0x57b656(0xeb),'');return _0x26c313['replace']('\x0a','');}async[a126_0x525f5d(0x118)](_0x4c403c){const _0x27f200=a126_0x525f5d;Git[_0x27f200(0x10f)][_0x27f200(0xf8)](_0x27f200(0x12e),_0x4c403c);const _0x221ac1=await utils_2['ChildProcessUtils'][_0x27f200(0xf6)]('cd\x20'+this[_0x27f200(0x102)]+_0x27f200(0x10d)+_0x4c403c,'');return{'author':(0x0,internal_utils_1[_0x27f200(0x108)])(_0x221ac1),'email':(0x0,internal_utils_1[_0x27f200(0x110)])(_0x221ac1),'message':(0x0,internal_utils_1['extractMessageFromCommitDescribe'])(_0x221ac1),'changes':(0x0,internal_utils_1[_0x27f200(0x114)])(_0x221ac1)};}static async['getRemoteHash'](_0x38bd5e,_0x4178af){const _0x30812c=a126_0x525f5d,[_0x448f59]=await utils_2[_0x30812c(0x12d)]['spawnPromise']('git\x20ls-remote\x20'+_0x38bd5e+'\x20'+_0x4178af+_0x30812c(0xe5),'')[_0x30812c(0x105)](_0x2adabf=>_0x2adabf[_0x30812c(0x126)](/\s/g,'\x20')['split']('\x20'));return _0x448f59;}static async['clone'](_0x4de15b,_0x30c92b,_0xff548f){const _0x5c6ea5=a126_0x525f5d,_0x324278=path_1['default'][_0x5c6ea5(0x12f)](this[_0x5c6ea5(0x135)],_0x30c92b),_0x481e5c=new Git(_0x324278);return Git['logger'][_0x5c6ea5(0xf8)](_0x5c6ea5(0x124),_0xff548f,_0x324278),await fs_internal_1['FS'][_0x5c6ea5(0xf9)](_0x324278),await utils_2[_0x5c6ea5(0x12d)]['spawnPromise'](_0x5c6ea5(0x123)+_0xff548f+'\x20--single-branch\x20'+_0x4de15b+'\x20'+_0x324278,''),_0x481e5c;}static async[a126_0x525f5d(0x11c)](_0x7e34bd,_0x3747c0){const _0x21d9f2=a126_0x525f5d,_0x128c56=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x38b71d=_0x7e34bd['gitUrl'][_0x21d9f2(0x126)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x21d9f2(0x112)])(_0x7e34bd[_0x21d9f2(0xfd)])+_0x21d9f2(0xf7)+_0x3747c0[_0x21d9f2(0x115)]()+'@'),_0x34a52d=await utils_2[_0x21d9f2(0x12d)][_0x21d9f2(0xf6)](_0x21d9f2(0x10c)+_0x38b71d,'');return _0x34a52d[_0x21d9f2(0x12c)]('\x0a')[_0x21d9f2(0xfc)](_0x4c41a1=>_0x128c56[_0x21d9f2(0x131)](_0x4c41a1))['map'](_0x285d23=>{const _0x2f3bf3=_0x21d9f2,[,_0x4cf795,_0x3050d2]=_0x285d23[_0x2f3bf3(0x129)](_0x128c56),_0x180be5=new branch_dto_1['BranchDto']();return _0x180be5[_0x2f3bf3(0x132)]=_0x4cf795,_0x180be5['name']=_0x3050d2[_0x2f3bf3(0x126)]('refs/heads/',''),_0x180be5;});}static async[a126_0x525f5d(0xe7)](_0x349353,_0x212ed7,_0x72b8c9,_0x3e3be4){const _0x2f1963=a126_0x525f5d,_0x265d48=_0x349353[_0x2f1963(0xfd)][_0x2f1963(0x126)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x2f1963(0x112)])(_0x349353[_0x2f1963(0xfd)])+_0x2f1963(0xf7)+_0x3e3be4[_0x2f1963(0x115)]()+'@'),_0x35f0f6=path_1[_0x2f1963(0xfb)][_0x2f1963(0x12f)](this[_0x2f1963(0x135)],_0x349353[_0x2f1963(0x11f)]);Git[_0x2f1963(0x10f)][_0x2f1963(0xf8)]('create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]',_0x349353['name'],_0x212ed7,_0x35f0f6),await fs_internal_1['FS']['removeDir'](_0x35f0f6),await fs_internal_1['FS'][_0x2f1963(0x10a)](_0x35f0f6);const _0x24d257=new Git(_0x35f0f6);await utils_2[_0x2f1963(0x12d)]['spawnPromise'](_0x2f1963(0xec)+_0x24d257[_0x2f1963(0xf0)]+_0x2f1963(0xee),''),await utils_2['ChildProcessUtils'][_0x2f1963(0xf6)](_0x2f1963(0xec)+_0x24d257['baseDir']+_0x2f1963(0x134)+_0x265d48,''),await _0x24d257['setCredentials'](constants_1[_0x2f1963(0xe6)],constants_1[_0x2f1963(0x103)]),await utils_2['ChildProcessUtils'][_0x2f1963(0xf6)](_0x2f1963(0xec)+_0x24d257[_0x2f1963(0xf0)]+_0x2f1963(0x101)+_0x212ed7,''),await utils_2[_0x2f1963(0x12d)][_0x2f1963(0xf6)](_0x2f1963(0xec)+_0x24d257[_0x2f1963(0xf0)]+'\x20&&\x20git\x20commit\x20-m\x20\x22'+(_0x72b8c9||constants_1[_0x2f1963(0xe8)])+_0x2f1963(0xf3),''),await _0x24d257['push'](_0x212ed7),Git[_0x2f1963(0x10f)][_0x2f1963(0xf8)]('clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch'),await fs_internal_1['FS'][_0x2f1963(0xf9)](_0x24d257['baseDir']);}}exports['Git']=Git,Git[a126_0x525f5d(0x135)]=path_1[a126_0x525f5d(0xfb)][a126_0x525f5d(0x12f)](process['cwd'](),a126_0x525f5d(0x11e),a126_0x525f5d(0x106)),Git[a126_0x525f5d(0x10f)]=new core_1[(a126_0x525f5d(0xf1))](Git[a126_0x525f5d(0x11f)]);