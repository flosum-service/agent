const a61_0x5048a8=a61_0x2655;(function(_0x297b20,_0x673321){const _0x1ba783=a61_0x2655,_0x53f11b=_0x297b20();while(!![]){try{const _0x45ae6e=-parseInt(_0x1ba783(0x160))/0x1+parseInt(_0x1ba783(0x15d))/0x2*(parseInt(_0x1ba783(0x15e))/0x3)+parseInt(_0x1ba783(0x162))/0x4*(parseInt(_0x1ba783(0x164))/0x5)+-parseInt(_0x1ba783(0x16d))/0x6*(-parseInt(_0x1ba783(0x172))/0x7)+parseInt(_0x1ba783(0x158))/0x8*(-parseInt(_0x1ba783(0x175))/0x9)+-parseInt(_0x1ba783(0x16f))/0xa*(-parseInt(_0x1ba783(0x165))/0xb)+-parseInt(_0x1ba783(0x174))/0xc;if(_0x45ae6e===_0x673321)break;else _0x53f11b['push'](_0x53f11b['shift']());}catch(_0x4beb87){_0x53f11b['push'](_0x53f11b['shift']());}}}(a61_0x45dc,0xd1300));const a61_0x1a0cbf=(function(){let _0x413760=!![];return function(_0x1949ad,_0x20d51b){const _0x3e81af=_0x413760?function(){const _0x386271=a61_0x2655;if(_0x20d51b){const _0x44971b=_0x20d51b[_0x386271(0x170)](_0x1949ad,arguments);return _0x20d51b=null,_0x44971b;}}:function(){};return _0x413760=![],_0x3e81af;};}()),a61_0x187b4b=a61_0x1a0cbf(this,function(){const _0x3983ea=a61_0x2655;return a61_0x187b4b['toString']()[_0x3983ea(0x15c)]('(((.+)+)+)+$')[_0x3983ea(0x17a)]()[_0x3983ea(0x173)](a61_0x187b4b)['search'](_0x3983ea(0x178));});a61_0x187b4b();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x374939){const _0x90ad55=a61_0x2655;return _0x374939&&_0x374939[_0x90ad55(0x166)]?_0x374939:{'default':_0x374939};};Object[a61_0x5048a8(0x16a)](exports,a61_0x5048a8(0x166),{'value':!![]});const fs_1=require('fs');require(a61_0x5048a8(0x17d));const typedi_1=__importDefault(require(a61_0x5048a8(0x15b)));function a61_0x45dc(){const _0xb2b196=['catch','(((.+)+)+)+$','parse','toString','provider','../shared/services/app-settings.service','reflect-metadata','utf-8','232qBhuun','SettingsConfigService','update','typedi','search','533674tzwsmn','9xFkfpp','../shared/services/settings-config.service','240241yVDUaP','../config','452PihGdu','default','24275uzMSHd','11pNXCOX','__esModule','run','AppSettingsService','FlosumCommitJob','defineProperty','exit','get','107112EOmLNu','loadSettings','8549530EAVKUM','apply','./childs.utils','224yoCzQt','constructor','16980444hNMdGM','81693PvgRFm','getSocketPath'];a61_0x45dc=function(){return _0xb2b196;};return a61_0x45dc();}require(a61_0x5048a8(0x161));function a61_0x2655(_0x3981d4,_0x325ddc){const _0x2ddff8=a61_0x45dc();return a61_0x2655=function(_0x187b4b,_0x1a0cbf){_0x187b4b=_0x187b4b-0x158;let _0x45dcdd=_0x2ddff8[_0x187b4b];return _0x45dcdd;},a61_0x2655(_0x3981d4,_0x325ddc);}const salesforce_logger_v2_service_1=require('../salesforce/services/salesforce-logger-v2.service'),app_settings_service_1=require(a61_0x5048a8(0x17c)),settings_config_service_1=require(a61_0x5048a8(0x15f)),flosum_commit_job_1=require('../web-hooks/jobs/flosum-commit.job'),childs_utils_1=require(a61_0x5048a8(0x171)),appSettings=typedi_1[a61_0x5048a8(0x163)]['get'](app_settings_service_1[a61_0x5048a8(0x168)]),socketPath=childs_utils_1[a61_0x5048a8(0x176)]();if(!socketPath)throw new Error('Unresolved\x20socket\x20path');const message=fs_1['readFileSync'](socketPath,{'encoding':a61_0x5048a8(0x17e)}),{data}=JSON[a61_0x5048a8(0x179)](message),execute=async _0x8f7561=>{const _0x1da852=a61_0x5048a8;await settings_config_service_1[_0x1da852(0x159)][_0x1da852(0x16e)](),appSettings[_0x1da852(0x15a)]({'provider':_0x8f7561[_0x1da852(0x17b)]});const _0x33d584=typedi_1[_0x1da852(0x163)][_0x1da852(0x16c)](flosum_commit_job_1[_0x1da852(0x169)]);await _0x33d584[_0x1da852(0x167)](_0x8f7561['commit'],new salesforce_logger_v2_service_1['SalesforceLogger2'](_0x8f7561['loggerId']),_0x8f7561[_0x1da852(0x17b)]);};execute(data)['then'](()=>process['exit'](0x0))[a61_0x5048a8(0x177)](()=>process[a61_0x5048a8(0x16b)](0x0));