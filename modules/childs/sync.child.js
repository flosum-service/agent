function a63_0x24da(_0xdca870,_0x5ad635){const _0x4bf6e3=a63_0x2e57();return a63_0x24da=function(_0x34d1d5,_0x4804ba){_0x34d1d5=_0x34d1d5-0xf8;let _0x2e57e5=_0x4bf6e3[_0x34d1d5];return _0x2e57e5;},a63_0x24da(_0xdca870,_0x5ad635);}const a63_0x51a308=a63_0x24da;(function(_0x4056b8,_0x40fa55){const _0x2abdca=a63_0x24da,_0x503de7=_0x4056b8();while(!![]){try{const _0x387bca=parseInt(_0x2abdca(0x104))/0x1+-parseInt(_0x2abdca(0x101))/0x2*(parseInt(_0x2abdca(0xf9))/0x3)+-parseInt(_0x2abdca(0x112))/0x4*(parseInt(_0x2abdca(0x106))/0x5)+-parseInt(_0x2abdca(0xf8))/0x6+parseInt(_0x2abdca(0x111))/0x7+-parseInt(_0x2abdca(0x11e))/0x8*(-parseInt(_0x2abdca(0x107))/0x9)+-parseInt(_0x2abdca(0x117))/0xa*(-parseInt(_0x2abdca(0xfd))/0xb);if(_0x387bca===_0x40fa55)break;else _0x503de7['push'](_0x503de7['shift']());}catch(_0x1c4502){_0x503de7['push'](_0x503de7['shift']());}}}(a63_0x2e57,0xd2855));const a63_0x4804ba=(function(){let _0x33a459=!![];return function(_0x50b089,_0x4a9ade){const _0x549027=_0x33a459?function(){const _0xac4e5b=a63_0x24da;if(_0x4a9ade){const _0x2a3c2c=_0x4a9ade[_0xac4e5b(0xfa)](_0x50b089,arguments);return _0x4a9ade=null,_0x2a3c2c;}}:function(){};return _0x33a459=![],_0x549027;};}()),a63_0x34d1d5=a63_0x4804ba(this,function(){const _0x26c187=a63_0x24da;return a63_0x34d1d5[_0x26c187(0x10c)]()[_0x26c187(0x10a)](_0x26c187(0x109))[_0x26c187(0x10c)]()[_0x26c187(0x102)](a63_0x34d1d5)[_0x26c187(0x10a)](_0x26c187(0x109));});a63_0x34d1d5();'use strict';function a63_0x2e57(){const _0x4ebb60=['140255LFuDNw','9tXjylt','provider','(((.+)+)+)+$','search','default','toString','loggerId','AppSettingsService','reflect-metadata','SettingsConfigService','9565227bAoddN','100nVXMpD','__importDefault','getSocketPath','loadSettings','update','50QgKFxg','catch','exit','then','get','run','instanceUrl','3480152yanQjR','5619552QisxkB','3108KvwNpY','apply','defineProperty','readFileSync','3345397vxdNSU','utf-8','../web-hooks/services/sync.service','SyncService','2396KneVLr','constructor','../config','419173bccKUy','../shared/services/settings-config.service'];a63_0x2e57=function(){return _0x4ebb60;};return a63_0x2e57();}var __importDefault=this&&this[a63_0x51a308(0x113)]||function(_0x40e94c){return _0x40e94c&&_0x40e94c['__esModule']?_0x40e94c:{'default':_0x40e94c};};Object[a63_0x51a308(0xfb)](exports,'__esModule',{'value':!![]});const fs_1=require('fs');require(a63_0x51a308(0x10f));const typedi_1=__importDefault(require('typedi'));require(a63_0x51a308(0x103));const app_settings_service_1=require('../shared/services/app-settings.service'),settings_config_service_1=require(a63_0x51a308(0x105)),sync_service_1=require(a63_0x51a308(0xff)),childs_utils_1=require('./childs.utils'),appSettings=typedi_1[a63_0x51a308(0x10b)][a63_0x51a308(0x11b)](app_settings_service_1[a63_0x51a308(0x10e)]),socketPath=childs_utils_1[a63_0x51a308(0x114)]();if(!socketPath)throw new Error('Unresolved\x20socket\x20path');const message=fs_1[a63_0x51a308(0xfc)](socketPath,{'encoding':a63_0x51a308(0xfe)}),{data}=JSON['parse'](message),execute=async _0x2ebd5a=>{const _0x15ba99=a63_0x51a308;await settings_config_service_1[_0x15ba99(0x110)][_0x15ba99(0x115)](),appSettings[_0x15ba99(0x116)]({'provider':_0x2ebd5a[_0x15ba99(0x108)]});const _0x41e8f3=typedi_1[_0x15ba99(0x10b)]['get'](sync_service_1[_0x15ba99(0x100)]);await _0x41e8f3[_0x15ba99(0x11c)](_0x2ebd5a['sync'],_0x2ebd5a[_0x15ba99(0x10d)],_0x2ebd5a[_0x15ba99(0x108)],_0x2ebd5a[_0x15ba99(0x11d)]);};execute(data)[a63_0x51a308(0x11a)](()=>process[a63_0x51a308(0x119)](0x0))[a63_0x51a308(0x118)](()=>process[a63_0x51a308(0x119)](0x0));