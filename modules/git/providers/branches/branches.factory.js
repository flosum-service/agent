const a118_0x4faad4=a118_0x5a18;function a118_0x2685(){const _0x26419d=['BitbucketServerBranchService','search','Gitlab','645894smyboI','__esModule','constructor','toString','183694VSbKZu','1297470uArCKd','get','Bitbucket','./services/bitbucket-branch.service','GitProvider','84826tlADXi','./services/gitlab-branch.service','createFromContext','BitbucketServer','GitlabServer','Github','AzureBranchService','../providers.tokens','2778876RuyeoO','../types/git-provider','2237392Wbkkub','(((.+)+)+)+$','provider','16552KdHbDO','apply','AzureServer','4iwfSKq','GitlabBranchService','BranchesFactory','GithubBranchService','BitbucketBranchService','container','./services/azure-branch.service','108RJLBbp'];a118_0x2685=function(){return _0x26419d;};return a118_0x2685();}(function(_0x2504bf,_0x43dbbd){const _0x410aa6=a118_0x5a18,_0x33e0e0=_0x2504bf();while(!![]){try{const _0x2f5c16=parseInt(_0x410aa6(0x10c))/0x1*(-parseInt(_0x410aa6(0xfd))/0x2)+-parseInt(_0x410aa6(0x104))/0x3*(-parseInt(_0x410aa6(0xfa))/0x4)+parseInt(_0x410aa6(0x10d))/0x5+parseInt(_0x410aa6(0x108))/0x6+parseInt(_0x410aa6(0x112))/0x7+-parseInt(_0x410aa6(0xf7))/0x8+parseInt(_0x410aa6(0xf5))/0x9;if(_0x2f5c16===_0x43dbbd)break;else _0x33e0e0['push'](_0x33e0e0['shift']());}catch(_0x3a78c2){_0x33e0e0['push'](_0x33e0e0['shift']());}}}(a118_0x2685,0x2e5eb));const a118_0x1bd2b9=(function(){let _0x2a94f6=!![];return function(_0xf0b931,_0x27acbb){const _0x4d2cdb=_0x2a94f6?function(){const _0x2a1f31=a118_0x5a18;if(_0x27acbb){const _0x49a1a3=_0x27acbb[_0x2a1f31(0xfb)](_0xf0b931,arguments);return _0x27acbb=null,_0x49a1a3;}}:function(){};return _0x2a94f6=![],_0x4d2cdb;};}()),a118_0x3dae10=a118_0x1bd2b9(this,function(){const _0x567ea4=a118_0x5a18;return a118_0x3dae10[_0x567ea4(0x10b)]()[_0x567ea4(0x106)](_0x567ea4(0xf8))[_0x567ea4(0x10b)]()[_0x567ea4(0x10a)](a118_0x3dae10)[_0x567ea4(0x106)](_0x567ea4(0xf8));});function a118_0x5a18(_0x244169,_0x3a2645){const _0x1ed9c4=a118_0x2685();return a118_0x5a18=function(_0x3dae10,_0x1bd2b9){_0x3dae10=_0x3dae10-0xf4;let _0x2685a5=_0x1ed9c4[_0x3dae10];return _0x2685a5;},a118_0x5a18(_0x244169,_0x3a2645);}a118_0x3dae10();'use strict';Object['defineProperty'](exports,a118_0x4faad4(0x109),{'value':!![]}),exports[a118_0x4faad4(0xff)]=void 0x0;const git_provider_1=require(a118_0x4faad4(0xf6)),azure_branch_service_1=require(a118_0x4faad4(0x103)),bitbucket_branch_service_1=require(a118_0x4faad4(0x110)),bitbucket_server_branch_service_1=require('./services/bitbucket-server-branch.service'),github_branch_service_1=require('./services/github-branch.service'),gitlab_branch_service_1=require(a118_0x4faad4(0x113)),providers_tokens_1=require(a118_0x4faad4(0xf4)),PROVIDER_BRANCHES_MAP={[git_provider_1[a118_0x4faad4(0x111)]['Azure']]:azure_branch_service_1['AzureBranchService'],[git_provider_1[a118_0x4faad4(0x111)][a118_0x4faad4(0xfc)]]:azure_branch_service_1[a118_0x4faad4(0x118)],[git_provider_1[a118_0x4faad4(0x111)][a118_0x4faad4(0x10f)]]:bitbucket_branch_service_1[a118_0x4faad4(0x101)],[git_provider_1[a118_0x4faad4(0x111)][a118_0x4faad4(0x115)]]:bitbucket_server_branch_service_1[a118_0x4faad4(0x105)],[git_provider_1[a118_0x4faad4(0x111)][a118_0x4faad4(0x117)]]:github_branch_service_1[a118_0x4faad4(0x100)],[git_provider_1[a118_0x4faad4(0x111)]['GithubServer']]:github_branch_service_1['GithubBranchService'],[git_provider_1['GitProvider'][a118_0x4faad4(0x107)]]:gitlab_branch_service_1[a118_0x4faad4(0xfe)],[git_provider_1[a118_0x4faad4(0x111)][a118_0x4faad4(0x116)]]:gitlab_branch_service_1[a118_0x4faad4(0xfe)]};class BranchesFactory{static async[a118_0x4faad4(0x114)](_0x43f706){const _0x13db6f=a118_0x4faad4;return _0x43f706[_0x13db6f(0x102)][_0x13db6f(0x10e)](PROVIDER_BRANCHES_MAP[_0x43f706['container'][_0x13db6f(0x10e)](providers_tokens_1['Tokens'][_0x13db6f(0xf9)])]);}}exports[a118_0x4faad4(0xff)]=BranchesFactory;