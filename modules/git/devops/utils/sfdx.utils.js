function a142_0x3a8e(){const _0x110ab8=['NO_RESULTS_TO_FORMAT','constructor','exec','defineProperty','message','../../salesforce/utils/sfdx.utils','default','removeDir','705ipkhfj','filter','../../internal/shell.internal','/*\x20','uniqueId','30012ZpLGiT','../../../../constants/sfdx','mdapiToSource','../errors/messages','.temp','search','SFDXUtils','exists','createEmptyPackageXml','apply','767152zsEqzw','makeDir','COMMERCE_CLOUD','cp\x20-r\x20','SFDX','7iAkwbJ','dir','fs/promises','shortid','join','100WOhqmH','829863XlWONe','../../internal/fs.internal','cwd','4559226gnbntD','copyProjectTo','copySFDXIgnoredComponents','RecordTypes','7800872cgsGyu','toString','PROJECTS_PATH','5bITGMX','match','7218doHijO','Shell','(((.+)+)+)+$','isVlocityComponent','__importDefault','createEmptyProject','DEFAULT','readdir','18051zhQwRN','fullProjectName','3455756PGflvv'];a142_0x3a8e=function(){return _0x110ab8;};return a142_0x3a8e();}const a142_0x4d3867=a142_0x4ec2;(function(_0x32230e,_0x1ce9c3){const _0xa3b7d3=a142_0x4ec2,_0x21adde=_0x32230e();while(!![]){try{const _0x8c9c3b=parseInt(_0xa3b7d3(0xfb))/0x1+parseInt(_0xa3b7d3(0x112))/0x2*(-parseInt(_0xa3b7d3(0xec))/0x3)+parseInt(_0xa3b7d3(0xe3))/0x4*(-parseInt(_0xa3b7d3(0x110))/0x5)+parseInt(_0xa3b7d3(0x109))/0x6*(-parseInt(_0xa3b7d3(0x100))/0x7)+-parseInt(_0xa3b7d3(0x10d))/0x8+-parseInt(_0xa3b7d3(0x106))/0x9*(parseInt(_0xa3b7d3(0x105))/0xa)+parseInt(_0xa3b7d3(0xe1))/0xb*(parseInt(_0xa3b7d3(0xf1))/0xc);if(_0x8c9c3b===_0x1ce9c3)break;else _0x21adde['push'](_0x21adde['shift']());}catch(_0x174b3e){_0x21adde['push'](_0x21adde['shift']());}}}(a142_0x3a8e,0x7a9ad));const a142_0x2391c5=(function(){let _0x29d19c=!![];return function(_0x29173d,_0x55dbb3){const _0x1f3d8e=_0x29d19c?function(){const _0x1c2baf=a142_0x4ec2;if(_0x55dbb3){const _0x4475dc=_0x55dbb3[_0x1c2baf(0xfa)](_0x29173d,arguments);return _0x55dbb3=null,_0x4475dc;}}:function(){};return _0x29d19c=![],_0x1f3d8e;};}()),a142_0xce675=a142_0x2391c5(this,function(){const _0x506ebf=a142_0x4ec2;return a142_0xce675[_0x506ebf(0x10e)]()[_0x506ebf(0xf6)](_0x506ebf(0xdb))[_0x506ebf(0x10e)]()[_0x506ebf(0xe5)](a142_0xce675)[_0x506ebf(0xf6)](_0x506ebf(0xdb));});a142_0xce675();'use strict';var __importDefault=this&&this[a142_0x4d3867(0xdd)]||function(_0x394c03){return _0x394c03&&_0x394c03['__esModule']?_0x394c03:{'default':_0x394c03};};Object[a142_0x4d3867(0xe7)](exports,'__esModule',{'value':!![]}),exports[a142_0x4d3867(0xf7)]=void 0x0;const path_1=__importDefault(require('path')),fs_internal_1=require(a142_0x4d3867(0x107)),shell_internal_1=require(a142_0x4d3867(0xee)),sfdx_utils_1=require(a142_0x4d3867(0xe9)),shortid_1=__importDefault(require(a142_0x4d3867(0x103))),sfdx_1=require(a142_0x4d3867(0xf2)),promises_1=require(a142_0x4d3867(0x102)),vlocity_1=require('../../parsers/utils/vlocity'),constants_1=require('../constants/constants'),messages_1=require(a142_0x4d3867(0xf4));function a142_0x4ec2(_0x1d4784,_0x214183){const _0x3380e7=a142_0x3a8e();return a142_0x4ec2=function(_0xce675,_0x2391c5){_0xce675=_0xce675-0xdb;let _0x3a8ee3=_0x3380e7[_0xce675];return _0x3a8ee3;},a142_0x4ec2(_0x1d4784,_0x214183);}class SFDXUtils{constructor(){const _0x462cec=a142_0x4d3867;this['PROJECTS_PATH']=path_1[_0x462cec(0xea)][_0x462cec(0x104)](process[_0x462cec(0x108)](),_0x462cec(0xf5),'sfdx'),this[_0x462cec(0xf0)]=(0x0,shortid_1['default'])();}get[a142_0x4d3867(0xe2)](){const _0x1be6cb=a142_0x4d3867;return''+this[_0x1be6cb(0xf0)];}get[a142_0x4d3867(0x101)](){const _0x48ec8c=a142_0x4d3867;return path_1[_0x48ec8c(0xea)]['join'](this['PROJECTS_PATH'],this[_0x48ec8c(0xe2)]);}async['createProjectFrom'](_0x32e97f){const _0x2e37a0=a142_0x4d3867;!await fs_internal_1['FS'][_0x2e37a0(0xf8)](this[_0x2e37a0(0x10f)])&&await fs_internal_1['FS'][_0x2e37a0(0xfc)](this[_0x2e37a0(0x10f)]);await sfdx_utils_1['SFDX'][_0x2e37a0(0xde)](this[_0x2e37a0(0x10f)],this[_0x2e37a0(0xe2)]),await sfdx_utils_1[_0x2e37a0(0xff)][_0x2e37a0(0xf9)](_0x32e97f);try{await sfdx_utils_1['SFDX'][_0x2e37a0(0xf3)](_0x32e97f,this['dir']);}catch(_0x37e50c){if(!_0x37e50c[_0x2e37a0(0xe8)][_0x2e37a0(0x111)](sfdx_1[_0x2e37a0(0xe4)]))throw _0x37e50c;}}async[a142_0x4d3867(0x10a)](_0x1a7fe2,_0x2040d7=!![]){const _0x1b3f65=a142_0x4d3867;_0x2040d7&&(!await fs_internal_1['FS']['exists'](_0x1a7fe2+'/sfdx-project.json')&&(_0x2040d7=![])),_0x2040d7?await shell_internal_1[_0x1b3f65(0x113)][_0x1b3f65(0xe6)](_0x1b3f65(0xfe)+this['dir']+'/force-app\x20'+_0x1a7fe2):await shell_internal_1[_0x1b3f65(0x113)][_0x1b3f65(0xe6)](_0x1b3f65(0xfe)+this[_0x1b3f65(0x101)]+_0x1b3f65(0xef)+_0x1a7fe2);}async[a142_0x4d3867(0xeb)](){const _0x5deea2=a142_0x4d3867;await fs_internal_1['FS'][_0x5deea2(0xeb)](this[_0x5deea2(0x101)]);}async[a142_0x4d3867(0x10b)](_0x484918,_0x243250){const _0x10c3b2=a142_0x4d3867,_0x5326e4=await(0x0,promises_1[_0x10c3b2(0xe0)])(_0x484918),_0xa89eea=_0x5326e4[_0x10c3b2(0xed)](_0x2f1a41=>(0x0,vlocity_1[_0x10c3b2(0xdc)])(_0x2f1a41));for(const _0x2962e6 of _0xa89eea){const _0x5035f0=path_1[_0x10c3b2(0xea)][_0x10c3b2(0x104)](_0x484918,_0x2962e6),_0x4d7659=path_1[_0x10c3b2(0xea)][_0x10c3b2(0x104)](_0x243250,_0x2962e6);await(0x0,promises_1['cp'])(_0x5035f0,_0x4d7659,{'recursive':!![]});}}['isConvertToSfdx'](_0x5f5d60){const _0x1b5202=a142_0x4d3867;switch(_0x5f5d60){case constants_1[_0x1b5202(0x10c)][_0x1b5202(0xfd)]:case constants_1['RecordTypes']['MARKETING_CLOUD']:{return![];}case constants_1[_0x1b5202(0x10c)][_0x1b5202(0xdf)]:{return!![];}default:{throw new Error(messages_1['WRONG_RECORD_TYPE_ERROR_MESSAGE']+_0x5f5d60);}}}}exports[a142_0x4d3867(0xf7)]=SFDXUtils;