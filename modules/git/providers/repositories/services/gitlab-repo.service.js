const a204_0x51e1d9=a204_0x493f;function a204_0x493f(_0x3e9b88,_0x4eb6fc){const _0x131636=a204_0x21fe();return a204_0x493f=function(_0x5abbda,_0x3bd73b){_0x5abbda=_0x5abbda-0xf1;let _0x21fe08=_0x131636[_0x5abbda];return _0x21fe08;},a204_0x493f(_0x3e9b88,_0x4eb6fc);}(function(_0x586f87,_0x2f30cd){const _0x519773=a204_0x493f,_0x4067f0=_0x586f87();while(!![]){try{const _0x536154=-parseInt(_0x519773(0x135))/0x1+parseInt(_0x519773(0x11b))/0x2*(-parseInt(_0x519773(0x11d))/0x3)+parseInt(_0x519773(0xf1))/0x4+-parseInt(_0x519773(0x125))/0x5*(parseInt(_0x519773(0x12e))/0x6)+-parseInt(_0x519773(0xf3))/0x7+-parseInt(_0x519773(0xf9))/0x8+-parseInt(_0x519773(0x130))/0x9*(-parseInt(_0x519773(0x109))/0xa);if(_0x536154===_0x2f30cd)break;else _0x4067f0['push'](_0x4067f0['shift']());}catch(_0x244db5){_0x4067f0['push'](_0x4067f0['shift']());}}}(a204_0x21fe,0x4f87b));const a204_0x3bd73b=(function(){let _0x74fb94=!![];return function(_0x5c58ce,_0x1c709d){const _0x56786c=_0x74fb94?function(){const _0x16b9cb=a204_0x493f;if(_0x1c709d){const _0x337322=_0x1c709d[_0x16b9cb(0x11e)](_0x5c58ce,arguments);return _0x1c709d=null,_0x337322;}}:function(){};return _0x74fb94=![],_0x56786c;};}()),a204_0x5abbda=a204_0x3bd73b(this,function(){const _0x12ae43=a204_0x493f;return a204_0x5abbda[_0x12ae43(0x101)]()['search']('(((.+)+)+)+$')['toString']()['constructor'](a204_0x5abbda)[_0x12ae43(0x131)](_0x12ae43(0x121));});function a204_0x21fe(){const _0x20aefe=['createRequest','create','GitlabCredentialsDto','name','projects','getAll','credentials','defaults','getGroupPath','30664wLYgZB','get','12BzWEeE','apply','decorate','master','(((.+)+)+)+$','groups/','getOwnPropertyDescriptor','push','195WTaxxO','Git','__esModule','getGroup','fromGitlab','__param','GitRepoService','../../../../../core/errors/bad-request.error','GitlabRepoService','77694jjiFYm','Inject','9LHNflK','search','public','../repo.class','groupPath','173485EvnCWl','../../credentials/dto/gitlab-credentials.dto','createEmptyBranch','../../../../../core/errors/api.error','/projects/','getCurrentUser','object','delete','1616160IneBwX','users/','1390956zrVXNh','full_path','__decorate','autoInit','username','Tokens','1807248Ngtgdo','groupId','/projects','ApiError','length','BadRequestError','baseURL','__metadata','toString','defaultBranch','Service','createRequestToRepo','put','getOne','private','Repo','10861530vFqvYV','function','api','GitlabApiService','request','NotFoundError','metadata','../../../internal/git.internal','design:paramtypes'];a204_0x21fe=function(){return _0x20aefe;};return a204_0x21fe();}a204_0x5abbda();'use strict';var __decorate=this&&this[a204_0x51e1d9(0xf5)]||function(_0x15d097,_0x5c737f,_0x5aa5ea,_0x8e5170){const _0x58acb4=a204_0x51e1d9;var _0x31a8fb=arguments['length'],_0x212bea=_0x31a8fb<0x3?_0x5c737f:_0x8e5170===null?_0x8e5170=Object[_0x58acb4(0x123)](_0x5c737f,_0x5aa5ea):_0x8e5170,_0x51ed6c;if(typeof Reflect===_0x58acb4(0x13b)&&typeof Reflect[_0x58acb4(0x11f)]==='function')_0x212bea=Reflect[_0x58acb4(0x11f)](_0x15d097,_0x5c737f,_0x5aa5ea,_0x8e5170);else{for(var _0x44ed0b=_0x15d097[_0x58acb4(0xfd)]-0x1;_0x44ed0b>=0x0;_0x44ed0b--)if(_0x51ed6c=_0x15d097[_0x44ed0b])_0x212bea=(_0x31a8fb<0x3?_0x51ed6c(_0x212bea):_0x31a8fb>0x3?_0x51ed6c(_0x5c737f,_0x5aa5ea,_0x212bea):_0x51ed6c(_0x5c737f,_0x5aa5ea))||_0x212bea;}return _0x31a8fb>0x3&&_0x212bea&&Object['defineProperty'](_0x5c737f,_0x5aa5ea,_0x212bea),_0x212bea;},__metadata=this&&this[a204_0x51e1d9(0x100)]||function(_0x61965c,_0x55ef2b){const _0x32c741=a204_0x51e1d9;if(typeof Reflect==='object'&&typeof Reflect[_0x32c741(0x10f)]===_0x32c741(0x10a))return Reflect['metadata'](_0x61965c,_0x55ef2b);},__param=this&&this[a204_0x51e1d9(0x12a)]||function(_0x58c49b,_0x12218e){return function(_0x8b7a25,_0x483e87){_0x12218e(_0x8b7a25,_0x483e87,_0x58c49b);};};Object['defineProperty'](exports,a204_0x51e1d9(0x127),{'value':!![]}),exports['GitlabRepoService']=void 0x0;const bad_request_error_1=require(a204_0x51e1d9(0x12c)),not_found_error_1=require('../../../../../core/errors/not-found.error'),gitlab_api_service_1=require('../../api/gitlab-api.service'),typedi_1=require('typedi'),api_error_1=require(a204_0x51e1d9(0x138)),git_internal_1=require(a204_0x51e1d9(0x110)),repo_class_1=require(a204_0x51e1d9(0x133)),git_repo_service_1=require('./git-repo.service'),gitlab_credentials_dto_1=require(a204_0x51e1d9(0x136)),providers_tokens_1=require('../../providers.tokens');let GitlabRepoService=class GitlabRepoService extends git_repo_service_1[a204_0x51e1d9(0x12b)]{constructor(_0x23c817,_0xff4609){const _0x2555c1=a204_0x51e1d9;super(_0x23c817),this[_0x2555c1(0x10b)]=_0x23c817,this['groupId']=_0xff4609['groupId'],this[_0x2555c1(0x118)]=_0xff4609;}async[a204_0x51e1d9(0x11a)](){const _0x2cdc37=a204_0x51e1d9;if(!this[_0x2cdc37(0x134)]){const _0x1604cf=await this[_0x2cdc37(0x10b)][_0x2cdc37(0x128)](this[_0x2cdc37(0xfa)]);this[_0x2cdc37(0x134)]=_0x1604cf[_0x2cdc37(0xf4)];}return this['groupPath'];}async['getUsername'](){const _0xd56146=a204_0x51e1d9;if(!this['username']){const _0x489386=await this[_0xd56146(0x10b)][_0xd56146(0x13a)]();this[_0xd56146(0xf7)]=_0x489386['username'];}return this[_0xd56146(0xf7)];}async['createRequestToRepo'](_0x51ad02){const _0x94c2cc=a204_0x51e1d9,_0x40d88e=await(this[_0x94c2cc(0xfa)]?this['getGroupPath']():this['getUsername']()),_0x126787=this[_0x94c2cc(0x10b)][_0x94c2cc(0x112)](this[_0x94c2cc(0x10d)][_0x94c2cc(0x119)][_0x94c2cc(0xff)]+_0x94c2cc(0x139)+encodeURIComponent(_0x40d88e+'/'+_0x51ad02));return _0x126787;}async[a204_0x51e1d9(0x113)](_0x29dfdb){const _0x5fb025=a204_0x51e1d9;try{const _0x143c98={'name':_0x29dfdb[_0x5fb025(0x115)],'visibility':_0x29dfdb[_0x5fb025(0x107)]?_0x5fb025(0x107):_0x5fb025(0x132),'namespace_id':this[_0x5fb025(0xfa)],..._0x29dfdb['apiBody']||{}},_0x43f705=await this['request']['post'](_0x5fb025(0x116),_0x143c98),_0x3636c2=repo_class_1['Repo'][_0x5fb025(0x129)](_0x43f705,this['api'],this[_0x5fb025(0x118)]);return _0x29dfdb[_0x5fb025(0xf6)]&&await git_internal_1[_0x5fb025(0x126)][_0x5fb025(0x137)](_0x3636c2,_0x29dfdb[_0x5fb025(0x102)]||_0x5fb025(0x120),'',this['credentials']),this[_0x5fb025(0x106)](_0x3636c2[_0x5fb025(0x115)]);}catch(_0x28b353){if(_0x28b353 instanceof api_error_1[_0x5fb025(0xfc)])throw _0x28b353;throw new bad_request_error_1[(_0x5fb025(0xfe))](_0x28b353);}}async[a204_0x51e1d9(0x106)](_0x4e999d){const _0x6fc376=a204_0x51e1d9;try{const _0x3d2b52=await this['createRequestToRepo'](_0x4e999d),_0xf913e1=await _0x3d2b52[_0x6fc376(0x11c)]('');return repo_class_1[_0x6fc376(0x108)][_0x6fc376(0x129)](_0xf913e1,this[_0x6fc376(0x10b)],this[_0x6fc376(0x118)]);}catch(_0x181797){if(_0x181797 instanceof api_error_1[_0x6fc376(0xfc)])throw _0x181797;throw new not_found_error_1[(_0x6fc376(0x10e))](_0x181797);}}async[a204_0x51e1d9(0x117)](){const _0x5c2c71=a204_0x51e1d9;try{let _0x45874a='';if(this[_0x5c2c71(0xfa)])_0x45874a=_0x5c2c71(0x122)+this[_0x5c2c71(0xfa)]+_0x5c2c71(0xfb);else{const _0x7d9336=await this['getUsername']();_0x45874a=_0x5c2c71(0xf2)+_0x7d9336+'/projects';}let _0x322996=!![],_0x2b5776=0x1;const _0x140cab=[];do{const _0x133948=await this[_0x5c2c71(0x10d)]['get'](_0x45874a,{'params':{'page':_0x2b5776,'per_page':0x64}});_0x140cab[_0x5c2c71(0x124)](..._0x133948),_0x322996=_0x133948[_0x5c2c71(0xfd)]>0x0,_0x2b5776+=0x1;}while(_0x322996);return _0x140cab['map'](_0x1691d6=>repo_class_1[_0x5c2c71(0x108)]['fromGitlab'](_0x1691d6,this['api'],this[_0x5c2c71(0x118)]));}catch(_0x3a5f15){if(_0x3a5f15 instanceof api_error_1['ApiError'])throw _0x3a5f15;throw new not_found_error_1[(_0x5c2c71(0x10e))](_0x3a5f15);}}async['update'](_0x91c730,_0x1300c5){const _0x3b077c=a204_0x51e1d9;try{const _0x245fd6=await this[_0x3b077c(0x104)](_0x91c730),_0x3752ab=await _0x245fd6[_0x3b077c(0x105)]('',{..._0x1300c5,'path':_0x1300c5[_0x3b077c(0x115)]});return repo_class_1[_0x3b077c(0x108)][_0x3b077c(0x129)](_0x3752ab,this[_0x3b077c(0x10b)],this[_0x3b077c(0x118)]);}catch(_0x5b69cb){if(_0x5b69cb instanceof api_error_1['ApiError'])throw _0x5b69cb;throw new not_found_error_1[(_0x3b077c(0x10e))](_0x5b69cb);}}async[a204_0x51e1d9(0x13c)](_0x4af114){const _0xfafe06=a204_0x51e1d9;try{const _0xce2778=await this[_0xfafe06(0x104)](_0x4af114);await _0xce2778[_0xfafe06(0x13c)]('');}catch(_0x696ba7){if(_0x696ba7 instanceof api_error_1['ApiError'])throw _0x696ba7;throw new bad_request_error_1[(_0xfafe06(0xfe))](_0x696ba7);}}};GitlabRepoService=__decorate([(0x0,typedi_1[a204_0x51e1d9(0x103)])(),__param(0x1,(0x0,typedi_1[a204_0x51e1d9(0x12f)])(providers_tokens_1[a204_0x51e1d9(0xf8)]['credentials'])),__metadata(a204_0x51e1d9(0x111),[gitlab_api_service_1[a204_0x51e1d9(0x10c)],gitlab_credentials_dto_1[a204_0x51e1d9(0x114)]])],GitlabRepoService),exports[a204_0x51e1d9(0x12d)]=GitlabRepoService;