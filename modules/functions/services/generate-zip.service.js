function a86_0x7ca5(){const _0x2841b5=['/services/data/','replace','unzip','src','file','fetchAttachmentsDetailsById','keys','generateAndDeployZip','Zip','fetchAttachmentBody','Body','Profile','4542710CoZTVa','../../git/parsers/mdapi','createZip','log','map','Name','destructiveChangesPre.xml','removeNamespacePrefix','default','Component__r','type','generateAsync','types','5997nRwnzl','688AdTsBq','async','base64','filter','dir','PermissionSet','543512LYGxTo','(((.+)+)+)+$','6ndqbgE','length','2368458JadaZC','SALESFORCE_API_VERSION','.temp','defineProperty','MDApiWriter','start','orgId','9104274VwuqnT','then','../../shared/utils/fetch-attachments','13241540piOcit','__esModule','../utils/components-api','exists','values','6665694UqrDgp','body','push','indexOf','1.0','text','uuid','buildObject','ComponentsApi','destructiveChangesPost.xml','fileType','reduce','after\x20create\x20second\x20zip','addLocalFolder','xml2js','cwd','UTF-8','http://soap.sforce.com/2006/04/metadata','adm-zip','DEFLATE','extractComponentPermissions','../utils/extract-component-permissions','files','../../git/parsers/utils/zip','../../../constants','Builder','find','every','ParentId','apply','BUILD','post','writeFile','8izxuJR','retrieveAttachments','toString','toBuffer','splitZip','join','Component_Name__c','Package'];a86_0x7ca5=function(){return _0x2841b5;};return a86_0x7ca5();}const a86_0x47166d=a86_0x28d8;(function(_0x569358,_0x3990cb){const _0x33a9dd=a86_0x28d8,_0x1c36bc=_0x569358();while(!![]){try{const _0x367898=parseInt(_0x33a9dd(0x126))/0x1*(parseInt(_0x33a9dd(0x128))/0x2)+-parseInt(_0x33a9dd(0x11f))/0x3*(parseInt(_0x33a9dd(0x120))/0x4)+-parseInt(_0x33a9dd(0x112))/0x5+-parseInt(_0x33a9dd(0xd5))/0x6+parseInt(_0x33a9dd(0xdd))/0x7+parseInt(_0x33a9dd(0xfe))/0x8*(-parseInt(_0x33a9dd(0xce))/0x9)+parseInt(_0x33a9dd(0xd8))/0xa;if(_0x367898===_0x3990cb)break;else _0x1c36bc['push'](_0x1c36bc['shift']());}catch(_0x5ad51a){_0x1c36bc['push'](_0x1c36bc['shift']());}}}(a86_0x7ca5,0xd5625));const a86_0x3f8b82=(function(){let _0x3df3d2=!![];return function(_0x508e69,_0xb02c2a){const _0x26366c=_0x3df3d2?function(){const _0x520f3f=a86_0x28d8;if(_0xb02c2a){const _0x1ca137=_0xb02c2a[_0x520f3f(0xfa)](_0x508e69,arguments);return _0xb02c2a=null,_0x1ca137;}}:function(){};return _0x3df3d2=![],_0x26366c;};}()),a86_0x461c2d=a86_0x3f8b82(this,function(){const _0x5cad9f=a86_0x28d8;return a86_0x461c2d[_0x5cad9f(0x100)]()['search'](_0x5cad9f(0x127))['toString']()['constructor'](a86_0x461c2d)['search'](_0x5cad9f(0x127));});a86_0x461c2d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x12f7b3){const _0x491ed9=a86_0x28d8;return _0x12f7b3&&_0x12f7b3[_0x491ed9(0xd9)]?_0x12f7b3:{'default':_0x12f7b3};};Object[a86_0x47166d(0xd1)](exports,'__esModule',{'value':!![]}),exports[a86_0x47166d(0x10d)]=void 0x0;const constants_1=require(a86_0x47166d(0xf5)),path_1=__importDefault(require('path')),extract_component_permissions_1=require(a86_0x47166d(0xf2)),xml2js_1=require(a86_0x47166d(0xeb)),zip_1=require(a86_0x47166d(0xf4)),mdapi_1=require(a86_0x47166d(0x113)),fs_internal_1=require('../../git/internal/fs.internal'),promises_1=require('fs/promises'),components_api_1=require(a86_0x47166d(0xda)),adm_zip_1=__importDefault(require(a86_0x47166d(0xef))),uuid_1=require(a86_0x47166d(0xe3)),fetch_attachments_1=require(a86_0x47166d(0xd7)),DESTRUCTIVE_CHANGES_PER_NAME=a86_0x47166d(0x118),DESTRUCTIVE_CHANGES_POST_NAME=a86_0x47166d(0xe6),DEPLOY_DIR_NAME='DEPLOYZIP';async function generateAndDeployZip({attachmentsId:_0x5255ba,isExtractComponentsPermissions:_0x58eeea,preDestructiveAttachmentId:_0x1edc01,postDestructiveAttachmentId:_0x187eff,branchId:_0x5c7332,credentials:_0x531b23,metadataLogId:_0xa169a6,environments:_0x1cb231,metaTypes:_0xa10625},_0x562232){const _0x15a286=a86_0x47166d,_0x15f623=(0x0,uuid_1['v4'])();try{const _0x34fff3=await(0x0,fetch_attachments_1[_0x15a286(0x10b)])(_0x562232,_0x5255ba),_0x43a196=_0x34fff3[_0x15a286(0xe8)]((_0xc46f19,_0x352447)=>({..._0xc46f19,[_0x352447['Id']]:_0x352447[_0x15a286(0x117)]}),{}),_0x13f4b6=await getComponents(_0x34fff3,_0x562232,_0x43a196),_0x39cf52=await components_api_1[_0x15a286(0xe5)]['fetchComponentsDetailsByComponentsHistory'](_0x562232,_0x34fff3[_0x15a286(0x116)](({ParentId:_0x42c2c4})=>_0x42c2c4))['then'](_0x2ea693=>components_api_1[_0x15a286(0xe5)][_0x15a286(0x119)](_0x2ea693));if(_0x58eeea){const _0x4a8bb0=_0x13f4b6[_0x15a286(0x123)](({fileType:_0x2e2504})=>_0x2e2504===_0x15a286(0x111)||_0x2e2504===_0x15a286(0x125));await removePermission(_0x4a8bb0,_0x39cf52);}await replaceEnvironments(_0xa10625,_0x1cb231,_0x13f4b6),await writeZip(_0x13f4b6,_0x15f623),await generateAndWritePackageXML(_0x34fff3,_0x39cf52,_0x15f623);_0x1edc01&&await saveDestructiveChanges(_0x562232,_0x1edc01,DESTRUCTIVE_CHANGES_PER_NAME,_0x15f623);_0x187eff&&await saveDestructiveChanges(_0x562232,_0x187eff,DESTRUCTIVE_CHANGES_POST_NAME,_0x15f623);const _0x3d2aac=(await createDeployZip(_0x15f623)[_0x15a286(0xd6)](_0x3f0a17=>{return _0x3f0a17;}))[_0x15a286(0x101)]()[_0x15a286(0x100)](_0x15a286(0x122));console[_0x15a286(0x115)]('after\x20create\x20zip');const _0x42e7b9=_0x3d2aac[_0x15a286(0xcd)];if(_0x42e7b9>=components_api_1['MAX_ZIP_SIZE']){const _0x193084=await createDeployZip(_0x15f623);console[_0x15a286(0x115)](_0x15a286(0xe9));const [_0x103446,_0x98b8f4]=await components_api_1[_0x15a286(0xe5)][_0x15a286(0x102)](_0x193084,_0x42e7b9),_0x4577e1=await insertZip(_0x562232,_0x5c7332,_0x531b23[_0x15a286(0xd4)],_0xa169a6,_0x103446[_0x15a286(0x101)]()[_0x15a286(0x100)](_0x15a286(0x122))),_0x1cde92=await insertZip(_0x562232,_0x5c7332,_0x531b23[_0x15a286(0xd4)],_0xa169a6,_0x98b8f4['toBuffer']()[_0x15a286(0x100)]('base64'));return _0x4577e1+','+_0x1cde92;}else return await insertZip(_0x562232,_0x5c7332,_0x531b23[_0x15a286(0xd4)],_0xa169a6,_0x3d2aac);}catch(_0x5d1371){throw _0x5d1371;}finally{if(await fs_internal_1['FS'][_0x15a286(0xdb)](path_1['default'][_0x15a286(0x103)](process[_0x15a286(0xec)](),_0x15a286(0xd0),_0x15f623)))await(0x0,promises_1['rm'])(path_1[_0x15a286(0x11a)]['join'](process[_0x15a286(0xec)](),'.temp',_0x15f623),{'recursive':!![]});}}exports[a86_0x47166d(0x10d)]=generateAndDeployZip;async function getComponents(_0x2f1c67,_0x257c2e,_0x26fafa){const _0x2e2e3e=a86_0x47166d,_0x4f6ec0=[],_0x1fe997=await(0x0,fetch_attachments_1[_0x2e2e3e(0xff)])(_0x2f1c67,_0x257c2e);return await getComponentFromZip(_0x1fe997,_0x26fafa)[_0x2e2e3e(0xd6)](_0x123cc5=>{const _0x53371f=_0x2e2e3e;_0x4f6ec0[_0x53371f(0xdf)](..._0x123cc5);}),_0x4f6ec0;}async function getComponentFromZip(_0x4a4832,_0x5d1a26){const _0x350d10=a86_0x47166d,_0x4ad3f8=[];for(const _0x31d87b of _0x4a4832){const _0x190a30=await zip_1[_0x350d10(0x10e)][_0x350d10(0x108)](_0x31d87b[_0x350d10(0xdc)][_0x350d10(0x110)]);for(const _0x1dee92 in _0x190a30[_0x350d10(0xf3)]){!_0x190a30[_0x350d10(0xf3)][_0x1dee92][_0x350d10(0x124)]&&_0x4ad3f8['push']({'fileName':_0x1dee92['substring'](_0x1dee92[_0x350d10(0xe0)]('/')+0x1),'fileType':_0x5d1a26[_0x31d87b['id']],'body':_0x31d87b[_0x350d10(0xdc)]['Body']});}}return _0x4ad3f8;}async function removePermission(_0x3b9123,_0x4a166c){const _0x218a23=a86_0x47166d;for(const _0x364d07 of _0x3b9123){const _0x15de71=await zip_1[_0x218a23(0x10e)]['unzip'](_0x364d07[_0x218a23(0xde)]),_0x3af65b=[];for(const _0x19b7b3 in _0x15de71['files']){!_0x15de71[_0x218a23(0xf3)][_0x19b7b3][_0x218a23(0x124)]&&_0x3af65b[_0x218a23(0xdf)]({'fileName':_0x19b7b3,'body':await _0x15de71[_0x218a23(0xf3)][_0x19b7b3][_0x218a23(0x121)](_0x218a23(0xe2))});}const _0x470f64=await(0x0,extract_component_permissions_1[_0x218a23(0xf1)])(_0x3af65b[0x0][_0x218a23(0xde)][_0x218a23(0x100)](),_0x4a166c,_0x364d07[_0x218a23(0xe7)]),_0xfeaebe=new xml2js_1[(_0x218a23(0xf6))]({'xmldec':{'version':_0x218a23(0xe1),'encoding':_0x218a23(0xed)}}),_0x554db2=_0xfeaebe['buildObject'](_0x470f64),_0x4d8bd6=zip_1[_0x218a23(0x10e)][_0x218a23(0x114)]();_0x4d8bd6[_0x218a23(0x10a)](_0x3af65b[0x0]['fileName'],_0x554db2),_0x364d07[_0x218a23(0xde)]=await _0x4d8bd6['generateAsync']({'type':_0x218a23(0x122),'compression':_0x218a23(0xf0),'compressionOptions':{'level':0x6}});}}function a86_0x28d8(_0x175b67,_0x819a39){const _0x21bdc8=a86_0x7ca5();return a86_0x28d8=function(_0x461c2d,_0x3f8b82){_0x461c2d=_0x461c2d-0xcd;let _0x7ca5a4=_0x21bdc8[_0x461c2d];return _0x7ca5a4;},a86_0x28d8(_0x175b67,_0x819a39);}async function replaceEnvironments(_0xbbef84,_0x5219f0,_0x47d6ca){const _0x118448=a86_0x47166d;for(const _0x537188 of _0x47d6ca){if(_0xbbef84[_0x118448(0xf8)](_0x50d64f=>_0x50d64f!==_0x537188[_0x118448(0xe7)]))continue;const _0x5c9a51=await zip_1[_0x118448(0x10e)][_0x118448(0x108)](_0x537188[_0x118448(0xde)]);for(const _0x139a5a in _0x5c9a51[_0x118448(0xf3)]){if(!_0x5c9a51[_0x118448(0xf3)][_0x139a5a][_0x118448(0x124)]){let _0x52afec=await _0x5c9a51[_0x118448(0xf3)][_0x139a5a][_0x118448(0x121)]('text');for(const _0x232fda of Object[_0x118448(0x10c)](_0x5219f0)){const _0x383c4d=new RegExp('%%'+_0x232fda+'%%','g');_0x52afec=_0x52afec[_0x118448(0x107)](_0x383c4d,_0x5219f0[_0x232fda]);}_0x5c9a51[_0x118448(0x10a)](_0x139a5a,_0x52afec);}}_0x537188[_0x118448(0xde)]=await _0x5c9a51[_0x118448(0x11d)]({'type':_0x118448(0x122),'compression':_0x118448(0xf0),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x1de211,_0x31f99f){const _0x5caaf0=a86_0x47166d,_0x40f070=new mdapi_1[(_0x5caaf0(0xd2))]({'components':_0x1de211,'sourceDir':path_1[_0x5caaf0(0x11a)][_0x5caaf0(0x103)](process[_0x5caaf0(0xec)](),_0x5caaf0(0xd0),_0x31f99f,DEPLOY_DIR_NAME,_0x5caaf0(0x109)),'skipChildErrors':![]});await _0x40f070[_0x5caaf0(0xd3)]();}async function generateAndWritePackageXML(_0x2ec994,_0x1955b8,_0x395366){const _0x184d66=a86_0x47166d,_0x2452a1=getComponentsTypeAndName(_0x2ec994,_0x1955b8),_0x25953d=[...new Set(_0x2452a1['map'](_0x50958e=>_0x50958e[_0x184d66(0x11c)]))],_0x27d0e9={'Package':{'$':{'xmlns':_0x184d66(0xee)},'types':[],'version':''+constants_1[_0x184d66(0xcf)]['substring'](0x1)}};for(const _0x213f80 of _0x25953d){const _0x50e162=_0x2452a1[_0x184d66(0x123)](_0x5a88fd=>_0x5a88fd[_0x184d66(0x11c)]===_0x213f80)[_0x184d66(0x116)](_0xaa2f76=>_0xaa2f76['name']),_0x15683e={'members':_0x50e162,'name':_0x213f80};_0x27d0e9[_0x184d66(0x105)][_0x184d66(0x11e)][_0x184d66(0xdf)](_0x15683e);}const _0x5a1ad6=new xml2js_1[(_0x184d66(0xf6))]({'xmldec':{'version':_0x184d66(0xe1),'encoding':'UTF-8'}}),_0x316f06=_0x5a1ad6[_0x184d66(0xe4)](_0x27d0e9);await fs_internal_1['FS'][_0x184d66(0xfd)](path_1[_0x184d66(0x11a)][_0x184d66(0x103)](process[_0x184d66(0xec)](),_0x184d66(0xd0),_0x395366,DEPLOY_DIR_NAME,_0x184d66(0x109),'package.xml'),_0x316f06);}function getComponentsTypeAndName(_0x3edd8e,_0x158f87){const _0x3c8155=a86_0x47166d;return _0x3edd8e[_0x3c8155(0xe8)]((_0x4232a5,_0x22b439)=>{const _0x39d344=_0x3c8155,_0x3066d2=_0x158f87[_0x39d344(0xf7)](_0x520b08=>_0x520b08['Id']===_0x22b439[_0x39d344(0xf9)]);return _0x3066d2&&_0x4232a5[_0x39d344(0xdf)]({'name':_0x3066d2[_0x39d344(0x11b)][_0x39d344(0x104)],'type':_0x22b439[_0x39d344(0x117)]}),_0x4232a5;},[]);}async function saveDestructiveChanges(_0x2d4ee4,_0xc1a5bd,_0x5a8caa,_0x376667){const _0x978034=a86_0x47166d,_0x2a706f=(await(0x0,fetch_attachments_1[_0x978034(0x10f)])(_0x2d4ee4,_0xc1a5bd))['toString']();await fs_internal_1['FS']['writeFile'](path_1['default'][_0x978034(0x103)](process['cwd'](),_0x978034(0xd0),_0x376667,DEPLOY_DIR_NAME,_0x978034(0x109),_0x5a8caa),_0x2a706f);}async function createDeployZip(_0x5995b2){const _0x124932=a86_0x47166d,_0x48f218=new adm_zip_1['default']();return await _0x48f218[_0x124932(0xea)](path_1[_0x124932(0x11a)][_0x124932(0x103)](process['cwd'](),_0x124932(0xd0),_0x5995b2,DEPLOY_DIR_NAME)),_0x48f218;}async function insertZip(_0x41f7dd,_0x55356d,_0x2295ee,_0xa9c1c2,_0x2e791c){const _0x559981=a86_0x47166d,_0x58ae41={'ParentId':_0x55356d,'Name':'BUILD'+_0x2295ee,'Description':_0x559981(0xfb)+_0xa9c1c2,'Body':_0x2e791c},{data:_0x43873b}=await _0x41f7dd[_0x559981(0xfc)](_0x559981(0x106)+constants_1[_0x559981(0xcf)]+'/sobjects/Attachment',_0x58ae41);return _0x43873b['id'];}