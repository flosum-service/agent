const a194_0x1079f5=a194_0x43ae;(function(_0xd1c01f,_0x54e35f){const _0x25ae25=a194_0x43ae,_0x289d76=_0xd1c01f();while(!![]){try{const _0x1bde92=-parseInt(_0x25ae25(0x175))/0x1+parseInt(_0x25ae25(0x16a))/0x2*(parseInt(_0x25ae25(0x177))/0x3)+-parseInt(_0x25ae25(0x163))/0x4+-parseInt(_0x25ae25(0x162))/0x5*(-parseInt(_0x25ae25(0x158))/0x6)+-parseInt(_0x25ae25(0x14c))/0x7*(-parseInt(_0x25ae25(0x152))/0x8)+parseInt(_0x25ae25(0x160))/0x9*(-parseInt(_0x25ae25(0x174))/0xa)+parseInt(_0x25ae25(0x178))/0xb;if(_0x1bde92===_0x54e35f)break;else _0x289d76['push'](_0x289d76['shift']());}catch(_0x37b002){_0x289d76['push'](_0x289d76['shift']());}}}(a194_0x478b,0xafb6b));function a194_0x478b(){const _0x1c4070=['fromBitbucketServer','ERR_UNKNOWN_GIT_SERVICE','github','default','fromAzure','20uMRlHZ','1007362wnYPEf','toString','3XtwmXa','13852047GUiIFq','GitCommitDto','../../../constants','azure','BUNDLED_FOLDERS_REGEXP','substr','231gADQdQ','fromBitbucket','gitlab','path','__importDefault','prepareGitChangedPaths','62032SxSGjG','posix','search','azure-server','replace','fromGithub','54xFKDTh','bitbucket','isPathsEquals','test','map','split','fromGitlab','relative','1368657vgimnM','gitlab-server','501490COXmlN','5170900HZTqOf','constructor','(((.+)+)+)+$','sep','extname','BadRequestError','../dto/git-commit.dto','1812230ozAneh','join','provider','../../../constants/errors','extractGitCommitDtoFromContext'];a194_0x478b=function(){return _0x1c4070;};return a194_0x478b();}const a194_0x13dcff=(function(){let _0x1c4f71=!![];return function(_0x16e57f,_0x4dfa7c){const _0x538653=_0x1c4f71?function(){if(_0x4dfa7c){const _0x3ff84b=_0x4dfa7c['apply'](_0x16e57f,arguments);return _0x4dfa7c=null,_0x3ff84b;}}:function(){};return _0x1c4f71=![],_0x538653;};}()),a194_0x1cef3b=a194_0x13dcff(this,function(){const _0x5a0757=a194_0x43ae;return a194_0x1cef3b['toString']()[_0x5a0757(0x154)](_0x5a0757(0x165))[_0x5a0757(0x176)]()[_0x5a0757(0x164)](a194_0x1cef3b)[_0x5a0757(0x154)](_0x5a0757(0x165));});a194_0x1cef3b();'use strict';var __importDefault=this&&this[a194_0x1079f5(0x150)]||function(_0x31f413){return _0x31f413&&_0x31f413['__esModule']?_0x31f413:{'default':_0x31f413};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['prepareGitChangedPaths']=exports[a194_0x1079f5(0x15a)]=exports[a194_0x1079f5(0x16e)]=void 0x0;const constants_1=require(a194_0x1079f5(0x17a)),errors_1=require(a194_0x1079f5(0x16d)),bad_request_error_1=require('../../../core/errors/bad-request.error'),git_commit_dto_1=require(a194_0x1079f5(0x169)),path_1=__importDefault(require(a194_0x1079f5(0x14f)));function a194_0x43ae(_0x5dac37,_0x858034){const _0x35cfe7=a194_0x478b();return a194_0x43ae=function(_0x1cef3b,_0x13dcff){_0x1cef3b=_0x1cef3b-0x14b;let _0x478b33=_0x35cfe7[_0x1cef3b];return _0x478b33;},a194_0x43ae(_0x5dac37,_0x858034);}function extractGitCommitDtoFromContext(_0x408fcd,_0x34e0cc){const _0x12c053=a194_0x1079f5;let _0x27f231;switch(_0x34e0cc){case _0x12c053(0x171):case'github-server':_0x27f231=git_commit_dto_1[_0x12c053(0x179)][_0x12c053(0x157)](_0x408fcd);break;case _0x12c053(0x17b):case _0x12c053(0x155):_0x27f231=git_commit_dto_1['GitCommitDto'][_0x12c053(0x173)](_0x408fcd);break;case _0x12c053(0x159):_0x27f231=git_commit_dto_1['GitCommitDto'][_0x12c053(0x14d)](_0x408fcd);break;case'bitbucket-server':_0x27f231=git_commit_dto_1[_0x12c053(0x179)][_0x12c053(0x16f)](_0x408fcd);break;case _0x12c053(0x14e):case _0x12c053(0x161):_0x27f231=git_commit_dto_1[_0x12c053(0x179)][_0x12c053(0x15e)](_0x408fcd);break;default:throw new bad_request_error_1[(_0x12c053(0x168))](errors_1[_0x12c053(0x170)]);}return _0x27f231[_0x12c053(0x16c)]=_0x34e0cc,_0x27f231;}exports[a194_0x1079f5(0x16e)]=extractGitCommitDtoFromContext;function isPathsEquals(_0x313bf4,_0x17adf0){const _0x44afaf=a194_0x1079f5;return _0x313bf4[_0x44afaf(0x156)](path_1[_0x44afaf(0x172)][_0x44afaf(0x167)](_0x313bf4),'')===_0x17adf0[_0x44afaf(0x156)](path_1['default']['extname'](_0x17adf0),'');}exports['isPathsEquals']=isPathsEquals;function prepareGitChangedPaths(_0x547493){const _0x156d69=a194_0x1079f5;return[...new Set(_0x547493['map'](_0x44b925=>{const _0x40cf45=a194_0x43ae;if(_0x44b925['startsWith'](constants_1['FORCE_APP_DEFAULT_DIR'])){const _0x4fc4b6=_0x44b925[_0x40cf45(0x156)](constants_1['FORCE_APP_DEFAULT_DIR'],'')[_0x40cf45(0x14b)](0x1),[_0x23f01f,_0x4fcf70]=_0x4fc4b6[_0x40cf45(0x15d)]('/');let _0x5f3f5f=_0x4fcf70;return path_1[_0x40cf45(0x172)][_0x40cf45(0x167)](_0x5f3f5f)&&(_0x5f3f5f=_0x5f3f5f[_0x40cf45(0x156)](path_1[_0x40cf45(0x172)][_0x40cf45(0x167)](_0x5f3f5f),'')),path_1[_0x40cf45(0x172)][_0x40cf45(0x16b)](_0x23f01f,_0x5f3f5f);}const _0x229f06=path_1[_0x40cf45(0x172)][_0x40cf45(0x15f)]('.',_0x44b925);if(constants_1[_0x40cf45(0x17c)][_0x40cf45(0x15b)](_0x229f06)){const [_0x46429e,_0x8a305a]=_0x229f06[_0x40cf45(0x15d)](path_1['default']['sep']),_0x1830b6=path_1['default'][_0x40cf45(0x16b)](_0x46429e,_0x8a305a);return _0x1830b6;}return _0x229f06;}))][_0x156d69(0x15c)](_0x21d845=>_0x21d845[_0x156d69(0x15d)](path_1[_0x156d69(0x172)][_0x156d69(0x166)])[_0x156d69(0x16b)](path_1[_0x156d69(0x172)][_0x156d69(0x153)][_0x156d69(0x166)]));}exports[a194_0x1079f5(0x151)]=prepareGitChangedPaths;