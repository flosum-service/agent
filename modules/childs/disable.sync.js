const a60_0x1c15c0=a60_0x32ea;(function(_0x312063,_0x30fdbf){const _0x5207f0=a60_0x32ea,_0xb03295=_0x312063();while(!![]){try{const _0x2fcef1=-parseInt(_0x5207f0(0xa9))/0x1*(parseInt(_0x5207f0(0xb5))/0x2)+parseInt(_0x5207f0(0xb8))/0x3*(-parseInt(_0x5207f0(0xb3))/0x4)+parseInt(_0x5207f0(0xae))/0x5+parseInt(_0x5207f0(0xc1))/0x6*(parseInt(_0x5207f0(0xbf))/0x7)+-parseInt(_0x5207f0(0xb7))/0x8+parseInt(_0x5207f0(0xb0))/0x9*(-parseInt(_0x5207f0(0xad))/0xa)+parseInt(_0x5207f0(0xb1))/0xb;if(_0x2fcef1===_0x30fdbf)break;else _0xb03295['push'](_0xb03295['shift']());}catch(_0x579c70){_0xb03295['push'](_0xb03295['shift']());}}}(a60_0x1d50,0x3f23e));const a60_0x302fbc=(function(){let _0x3435d9=!![];return function(_0x15927f,_0x559fbf){const _0x2d96c6=_0x3435d9?function(){const _0x340a1e=a60_0x32ea;if(_0x559fbf){const _0x5c447b=_0x559fbf[_0x340a1e(0xbd)](_0x15927f,arguments);return _0x559fbf=null,_0x5c447b;}}:function(){};return _0x3435d9=![],_0x2d96c6;};}()),a60_0x31b63e=a60_0x302fbc(this,function(){const _0x57465f=a60_0x32ea;return a60_0x31b63e[_0x57465f(0xab)]()[_0x57465f(0xac)](_0x57465f(0xaf))[_0x57465f(0xab)]()['constructor'](a60_0x31b63e)[_0x57465f(0xac)](_0x57465f(0xaf));});a60_0x31b63e();'use strict';var __importDefault=this&&this[a60_0x1c15c0(0xc2)]||function(_0x189c88){const _0x39cd5b=a60_0x1c15c0;return _0x189c88&&_0x189c88[_0x39cd5b(0xb4)]?_0x189c88:{'default':_0x189c88};};Object['defineProperty'](exports,a60_0x1c15c0(0xb4),{'value':!![]});const fs_1=require('fs');require(a60_0x1c15c0(0xb9));function a60_0x32ea(_0x11f8c6,_0x27d2ea){const _0x3d62e0=a60_0x1d50();return a60_0x32ea=function(_0x31b63e,_0x302fbc){_0x31b63e=_0x31b63e-0xa9;let _0x1d50d0=_0x3d62e0[_0x31b63e];return _0x1d50d0;},a60_0x32ea(_0x11f8c6,_0x27d2ea);}const typedi_1=__importDefault(require('typedi'));require('../config');const app_settings_service_1=require('../shared/services/app-settings.service'),settings_config_service_1=require('../shared/services/settings-config.service'),disable_sync_service_1=require(a60_0x1c15c0(0xba)),childs_utils_1=require(a60_0x1c15c0(0xbb)),appSettings=typedi_1[a60_0x1c15c0(0xaa)]['get'](app_settings_service_1[a60_0x1c15c0(0xc0)]),socketPath=childs_utils_1[a60_0x1c15c0(0xc7)]();if(!socketPath)throw new Error(a60_0x1c15c0(0xb6));const message=fs_1['readFileSync'](socketPath,{'encoding':a60_0x1c15c0(0xc3)}),{data}=JSON['parse'](message),execute=async _0x51af79=>{const _0x258799=a60_0x1c15c0;await settings_config_service_1['SettingsConfigService']['loadSettings'](),appSettings[_0x258799(0xc8)]({'provider':_0x51af79[_0x258799(0xbc)]});const _0x398d51=typedi_1[_0x258799(0xaa)]['get'](disable_sync_service_1[_0x258799(0xc4)]);await _0x398d51[_0x258799(0xc5)](_0x51af79[_0x258799(0xc6)],_0x51af79[_0x258799(0xbc)],_0x51af79[_0x258799(0xb2)]);};execute(data)['then'](()=>process[a60_0x1c15c0(0xbe)](0x0))['catch'](()=>process[a60_0x1c15c0(0xbe)](0x0));function a60_0x1d50(){const _0xb08da1=['270044sNvhMW','__esModule','106IZzude','Unresolved\x20socket\x20path','1885080aXsoaJ','15GhSUJH','reflect-metadata','../web-hooks/services/disable-sync.service','./childs.utils','provider','apply','exit','8435szspjP','AppSettingsService','2460ZpjQBM','__importDefault','utf-8','DisableSyncService','run','loggerId','getSocketPath','update','3062XhMzQM','default','toString','search','120480JREBBU','759640JDHJyJ','(((.+)+)+)+$','54jmOpyN','4624488AFwEIg','instanceUrl'];a60_0x1d50=function(){return _0xb08da1;};return a60_0x1d50();}