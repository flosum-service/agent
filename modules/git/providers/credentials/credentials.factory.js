const a175_0x20327c=a175_0x4e7f;(function(_0x4c2526,_0x23bc5b){const _0x22e27e=a175_0x4e7f,_0x532196=_0x4c2526();while(!![]){try{const _0x4acfb0=-parseInt(_0x22e27e(0x90))/0x1+-parseInt(_0x22e27e(0x94))/0x2*(-parseInt(_0x22e27e(0x7e))/0x3)+parseInt(_0x22e27e(0x88))/0x4*(-parseInt(_0x22e27e(0x8a))/0x5)+parseInt(_0x22e27e(0x71))/0x6+parseInt(_0x22e27e(0x80))/0x7*(parseInt(_0x22e27e(0x92))/0x8)+parseInt(_0x22e27e(0x85))/0x9*(parseInt(_0x22e27e(0x87))/0xa)+parseInt(_0x22e27e(0x84))/0xb*(parseInt(_0x22e27e(0x77))/0xc);if(_0x4acfb0===_0x23bc5b)break;else _0x532196['push'](_0x532196['shift']());}catch(_0x42d4e1){_0x532196['push'](_0x532196['shift']());}}}(a175_0x1089,0x1ea6b));const a175_0x53b735=(function(){let _0x52c0bd=!![];return function(_0x5b61a3,_0xf0ccf0){const _0x11ef76=_0x52c0bd?function(){const _0x236ef6=a175_0x4e7f;if(_0xf0ccf0){const _0x41758b=_0xf0ccf0[_0x236ef6(0x70)](_0x5b61a3,arguments);return _0xf0ccf0=null,_0x41758b;}}:function(){};return _0x52c0bd=![],_0x11ef76;};}()),a175_0xfa55bc=a175_0x53b735(this,function(){const _0x521469=a175_0x4e7f;return a175_0xfa55bc[_0x521469(0x83)]()[_0x521469(0x97)](_0x521469(0x6f))['toString']()[_0x521469(0x96)](a175_0xfa55bc)[_0x521469(0x97)](_0x521469(0x6f));});a175_0xfa55bc();function a175_0x4e7f(_0x5968a9,_0x38b15a){const _0x2b8c33=a175_0x1089();return a175_0x4e7f=function(_0xfa55bc,_0x53b735){_0xfa55bc=_0xfa55bc-0x6d;let _0x1089c8=_0x2b8c33[_0xfa55bc];return _0x1089c8;},a175_0x4e7f(_0x5968a9,_0x38b15a);}'use strict';Object[a175_0x20327c(0x72)](exports,a175_0x20327c(0x7c),{'value':!![]}),exports[a175_0x20327c(0x7f)]=void 0x0;const git_provider_1=require(a175_0x20327c(0x6d)),azure_credentials_dto_1=require('./dto/azure-credentials.dto'),azure_server_credentials_dto_1=require(a175_0x20327c(0x74)),bitbucket_credentials_dto_1=require(a175_0x20327c(0x8f)),bitbucket_server_credentials_dto_1=require('./dto/bitbucket-server-credentials.dto'),github_credentials_dto_1=require(a175_0x20327c(0x73)),github_server_credentials_dto_1=require(a175_0x20327c(0x7a)),gitlab_credentials_dto_1=require(a175_0x20327c(0x8d)),gitlab_server_credentials_dto_1=require(a175_0x20327c(0x79)),class_validator_1=require('class-validator'),unprocessable_entity_error_1=require('../../../../core/errors/unprocessable-entity.error'),PROVIDER_CREDENTIALS_MAP={[git_provider_1['GitProvider'][a175_0x20327c(0x93)]]:azure_credentials_dto_1[a175_0x20327c(0x8c)],[git_provider_1[a175_0x20327c(0x89)]['AzureServer']]:azure_server_credentials_dto_1[a175_0x20327c(0x82)],[git_provider_1[a175_0x20327c(0x89)][a175_0x20327c(0x6e)]]:bitbucket_credentials_dto_1[a175_0x20327c(0x8e)],[git_provider_1['GitProvider']['BitbucketServer']]:bitbucket_server_credentials_dto_1[a175_0x20327c(0x7b)],[git_provider_1[a175_0x20327c(0x89)][a175_0x20327c(0x8b)]]:github_credentials_dto_1[a175_0x20327c(0x7d)],[git_provider_1[a175_0x20327c(0x89)]['GithubServer']]:github_server_credentials_dto_1[a175_0x20327c(0x76)],[git_provider_1[a175_0x20327c(0x89)][a175_0x20327c(0x78)]]:gitlab_credentials_dto_1[a175_0x20327c(0x86)],[git_provider_1['GitProvider']['GitlabServer']]:gitlab_server_credentials_dto_1[a175_0x20327c(0x75)]};class CredentialsFactory{static async[a175_0x20327c(0x95)](_0x354305){const _0x47124f=a175_0x20327c;if(!(_0x354305[_0x47124f(0x81)]in PROVIDER_CREDENTIALS_MAP))throw new Error('Unknown\x20git\x20provider\x20\x27'+_0x354305['gitProvider']+'\x27');const _0x53f37e=PROVIDER_CREDENTIALS_MAP[_0x354305['gitProvider']],_0x26c28d=_0x53f37e[_0x47124f(0x91)](_0x354305['envVariables']),_0x4e2b90=await(0x0,class_validator_1['validate'])(_0x26c28d);if(_0x4e2b90['length'])throw new unprocessable_entity_error_1['UnprocessableEntityError'](_0x4e2b90);return _0x26c28d;}}exports['CredentialsFactory']=CredentialsFactory;function a175_0x1089(){const _0x98fe9f=['constructor','search','../types/git-provider','Bitbucket','(((.+)+)+)+$','apply','592506QseAav','defineProperty','./dto/github-credentials.dto','./dto/azure-server-credentials.dto','GitlabServerCredentialsDto','GithubServerCredentialsDto','30036byfNpP','Gitlab','./dto/gitlab-server-credentials.dto','./dto/github-server-credentials.dto','BitbucketServerCredentialsDto','__esModule','GithubCredentialsDto','1569oUfFrj','CredentialsFactory','7ySpVxQ','gitProvider','AzureServerCredentialsDto','toString','396MKBapd','776367YKBjfw','GitlabCredentialsDto','10UsvfCs','79652EHyIlC','GitProvider','45ltUOFN','Github','AzureCredentialsDto','./dto/gitlab-credentials.dto','BitbucketCredentialsDto','./dto/bitbucket-credentials.dto','145732dQGZnA','fromConnectionEnvVariables','1323496LiyxwK','Azure','38myTClr','createFromConnection'];a175_0x1089=function(){return _0x98fe9f;};return a175_0x1089();}