const a62_0x4e1bfa=a62_0x1b57;function a62_0x1b57(_0x4c8ff9,_0x3024f5){const _0x889e3e=a62_0x1fb0();return a62_0x1b57=function(_0x55de0e,_0x33cd27){_0x55de0e=_0x55de0e-0x118;let _0x1fb010=_0x889e3e[_0x55de0e];return _0x1fb010;},a62_0x1b57(_0x4c8ff9,_0x3024f5);}(function(_0x4515ec,_0x569336){const _0x428984=a62_0x1b57,_0x1fb094=_0x4515ec();while(!![]){try{const _0x5cdd2f=-parseInt(_0x428984(0x137))/0x1+-parseInt(_0x428984(0x12b))/0x2*(-parseInt(_0x428984(0x125))/0x3)+parseInt(_0x428984(0x132))/0x4*(parseInt(_0x428984(0x139))/0x5)+-parseInt(_0x428984(0x12a))/0x6+parseInt(_0x428984(0x121))/0x7*(-parseInt(_0x428984(0x12e))/0x8)+-parseInt(_0x428984(0x11f))/0x9+parseInt(_0x428984(0x13b))/0xa;if(_0x5cdd2f===_0x569336)break;else _0x1fb094['push'](_0x1fb094['shift']());}catch(_0x915ac7){_0x1fb094['push'](_0x1fb094['shift']());}}}(a62_0x1fb0,0xd0871));function a62_0x1fb0(){const _0x583a2b=['constructor','../web-hooks/jobs/git-commit.job','4rfrdyC','parse','__importDefault','../config','search','916167wxDZgG','./childs.utils','589405BzfpGe','default','21990950xkbhqD','typedi','update','toString','GitCommitJob','defineProperty','loadSettings','../shared/services/app-settings.service','../shared/services/settings-config.service','5571873qvmvvo','utf-8','14TYnJKB','readFileSync','get','SettingsConfigService','3lBZvhl','(((.+)+)+)+$','__esModule','reflect-metadata','catch','6119268Qyfmal','2916946ijkDak','exit','provider','1464712LyLAGM','commit'];a62_0x1fb0=function(){return _0x583a2b;};return a62_0x1fb0();}const a62_0x33cd27=(function(){let _0xfe90ed=!![];return function(_0x7a139c,_0x3c3c85){const _0x36b4f=_0xfe90ed?function(){if(_0x3c3c85){const _0x73cbdd=_0x3c3c85['apply'](_0x7a139c,arguments);return _0x3c3c85=null,_0x73cbdd;}}:function(){};return _0xfe90ed=![],_0x36b4f;};}()),a62_0x55de0e=a62_0x33cd27(this,function(){const _0x483619=a62_0x1b57;return a62_0x55de0e['toString']()[_0x483619(0x136)](_0x483619(0x126))[_0x483619(0x119)]()[_0x483619(0x130)](a62_0x55de0e)[_0x483619(0x136)](_0x483619(0x126));});a62_0x55de0e();'use strict';var __importDefault=this&&this[a62_0x4e1bfa(0x134)]||function(_0x1a5892){const _0x330854=a62_0x4e1bfa;return _0x1a5892&&_0x1a5892[_0x330854(0x127)]?_0x1a5892:{'default':_0x1a5892};};Object[a62_0x4e1bfa(0x11b)](exports,'__esModule',{'value':!![]}),require(a62_0x4e1bfa(0x128)),require(a62_0x4e1bfa(0x135));const typedi_1=__importDefault(require(a62_0x4e1bfa(0x13c))),app_settings_service_1=require(a62_0x4e1bfa(0x11d)),git_commit_job_1=require(a62_0x4e1bfa(0x131)),settings_config_service_1=require(a62_0x4e1bfa(0x11e)),fs_1=require('fs'),childs_utils_1=require(a62_0x4e1bfa(0x138)),appSettings=typedi_1[a62_0x4e1bfa(0x13a)][a62_0x4e1bfa(0x123)](app_settings_service_1['AppSettingsService']),socketPath=childs_utils_1['getSocketPath']();if(!socketPath)throw new Error('Unresolved\x20socket\x20path');const message=fs_1[a62_0x4e1bfa(0x122)](socketPath,{'encoding':a62_0x4e1bfa(0x120)}),{data}=JSON[a62_0x4e1bfa(0x133)](message),execute=async _0x572f26=>{const _0x52a345=a62_0x4e1bfa;await settings_config_service_1[_0x52a345(0x124)][_0x52a345(0x11c)](),appSettings[_0x52a345(0x118)]({'provider':_0x572f26[_0x52a345(0x12d)]||_0x572f26[_0x52a345(0x12f)][_0x52a345(0x12d)]});const _0x1b7022=typedi_1['default'][_0x52a345(0x123)](git_commit_job_1[_0x52a345(0x11a)]);await _0x1b7022['run'](_0x572f26[_0x52a345(0x12f)],undefined);};execute(data)['then'](()=>process[a62_0x4e1bfa(0x12c)](0x0))[a62_0x4e1bfa(0x129)](()=>process['exit'](0x0));