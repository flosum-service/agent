const a23_0x37c73b=a23_0xe79f;(function(_0x2f096d,_0x40ef9f){const _0x1c5faa=a23_0xe79f,_0x82158f=_0x2f096d();while(!![]){try{const _0x414543=parseInt(_0x1c5faa(0xff))/0x1*(-parseInt(_0x1c5faa(0x103))/0x2)+parseInt(_0x1c5faa(0x137))/0x3*(parseInt(_0x1c5faa(0x112))/0x4)+parseInt(_0x1c5faa(0x134))/0x5+parseInt(_0x1c5faa(0x12f))/0x6+-parseInt(_0x1c5faa(0x128))/0x7+-parseInt(_0x1c5faa(0x116))/0x8+-parseInt(_0x1c5faa(0x10c))/0x9*(parseInt(_0x1c5faa(0x131))/0xa);if(_0x414543===_0x40ef9f)break;else _0x82158f['push'](_0x82158f['shift']());}catch(_0x134d6a){_0x82158f['push'](_0x82158f['shift']());}}}(a23_0x8c2a,0x55e60));const a23_0x421a04=(function(){let _0x45d2ed=!![];return function(_0x91bcaf,_0x163450){const _0x2bbc60=_0x45d2ed?function(){const _0x221263=a23_0xe79f;if(_0x163450){const _0x37666b=_0x163450[_0x221263(0x10b)](_0x91bcaf,arguments);return _0x163450=null,_0x37666b;}}:function(){};return _0x45d2ed=![],_0x2bbc60;};}()),a23_0x13c185=a23_0x421a04(this,function(){const _0x470bf4=a23_0xe79f;return a23_0x13c185['toString']()['search'](_0x470bf4(0x10a))[_0x470bf4(0x111)]()[_0x470bf4(0x12e)](a23_0x13c185)['search'](_0x470bf4(0x10a));});a23_0x13c185();'use strict';var __importDefault=this&&this[a23_0x37c73b(0x126)]||function(_0x47b90b){const _0x3cca22=a23_0x37c73b;return _0x47b90b&&_0x47b90b[_0x3cca22(0x121)]?_0x47b90b:{'default':_0x47b90b};};Object[a23_0x37c73b(0xfe)](exports,'__esModule',{'value':!![]}),exports['ControllerInjector']=void 0x0;function a23_0xe79f(_0x3737c5,_0x3907c8){const _0x6197eb=a23_0x8c2a();return a23_0xe79f=function(_0x13c185,_0x421a04){_0x13c185=_0x13c185-0xfe;let _0x8c2a1c=_0x6197eb[_0x13c185];return _0x8c2a1c;},a23_0xe79f(_0x3737c5,_0x3907c8);}function a23_0x8c2a(){const _0xbc8b6=['instance','controllerType','META_CONTROLLER_PREFIX','__importDefault','inject','3159793kSJYUt','META_CONTROLLER_MIDDLEWARES','../wrappers/handler.wrapper','normalizePaths','default','META_CONTROLLER_VERSION','constructor','2165040zclxCZ','get','40790dbiisB','root','injectHandlers','2211230HgPDeI','Router','injectMiddlewares','923892MWBgft','express','middlewares','log','defineProperty','824XdKpJl','typedi','ControllerInjector','filter','464unbhjc','method','nestedPath','\x20at\x20','META_HANDLER','getPrototypeOf','getOwnPropertyNames','(((.+)+)+)+$','apply','171ycLCrb','controller-injector','\x20is\x20not\x20a\x20Controller','use','nested','toString','8sNlsRg','../classes/logger.class','router','name','2776848uWRoDT','handlers','getOwnMetadata','injecting\x20nested\x20','META_CONTROLLER','handlerWrapper','injectNestedController','path','prefix','./middleware.injector','toLowerCase','__esModule','CONTROLLER_DEFAULT_PREFIX'];a23_0x8c2a=function(){return _0xbc8b6;};return a23_0x8c2a();}const express_1=require(a23_0x37c73b(0x138)),typedi_1=__importDefault(require(a23_0x37c73b(0x100))),logger_class_1=require(a23_0x37c73b(0x113)),constants_1=require('../constants'),utils_1=require('../utils'),handler_wrapper_1=require(a23_0x37c73b(0x12a)),middleware_injector_1=require(a23_0x37c73b(0x11f)),logger=new logger_class_1['Logger'](a23_0x37c73b(0x10d));class ControllerInjector{constructor(_0x5d38e1,_0x3e9fa3){const _0x16cfef=a23_0x37c73b;this[_0x16cfef(0x124)]=_0x5d38e1,this[_0x16cfef(0x132)]=_0x3e9fa3,this[_0x16cfef(0x114)]=express_1[_0x16cfef(0x135)]({'mergeParams':!![]}),this['nestedPath']='';if(!Reflect['getOwnMetadata'](constants_1[_0x16cfef(0x11a)],_0x5d38e1))throw TypeError(_0x5d38e1['name']+_0x16cfef(0x10e));}get[a23_0x37c73b(0x117)](){const _0x242d13=a23_0x37c73b,_0x50450a=Object[_0x242d13(0x108)](this[_0x242d13(0x123)]);return Object[_0x242d13(0x109)](_0x50450a)['map'](_0x42adf7=>_0x50450a[_0x42adf7])[_0x242d13(0x102)](_0x292440=>!!Reflect[_0x242d13(0x118)](constants_1[_0x242d13(0x107)],_0x292440));}get[a23_0x37c73b(0x139)](){const _0x25185b=a23_0x37c73b;return Reflect['getOwnMetadata'](constants_1[_0x25185b(0x129)],this['instance'])||[];}get['prefix'](){const _0x8591f7=a23_0x37c73b;var _0x4d77b5;const _0x14a3e1=(_0x4d77b5=Reflect[_0x8591f7(0x118)](constants_1[_0x8591f7(0x125)],this[_0x8591f7(0x124)]))!==null&&_0x4d77b5!==void 0x0?_0x4d77b5:constants_1[_0x8591f7(0x122)],_0x362fdf=Reflect[_0x8591f7(0x118)](constants_1[_0x8591f7(0x12d)],this[_0x8591f7(0x124)])||'';return this[_0x8591f7(0x105)]?'':utils_1['normalizePaths'](_0x14a3e1,_0x362fdf);}get[a23_0x37c73b(0x11d)](){const _0x10fb93=a23_0x37c73b;if(this[_0x10fb93(0x105)])return this[_0x10fb93(0x105)];const _0x4bee25=Reflect[_0x10fb93(0x118)](constants_1['META_CONTROLLER_PATH'],this[_0x10fb93(0x124)])||'';return utils_1[_0x10fb93(0x12b)](_0x4bee25);}get[a23_0x37c73b(0x123)](){const _0x3225cf=a23_0x37c73b;return typedi_1[_0x3225cf(0x12c)][_0x3225cf(0x130)](this[_0x3225cf(0x124)]);}async[a23_0x37c73b(0x136)](){const _0x5b0f16=a23_0x37c73b;for(const _0x2657ec of this[_0x5b0f16(0x139)]){const _0x569dff=await middleware_injector_1['middlewareInjector'](_0x2657ec);this[_0x5b0f16(0x114)][_0x5b0f16(0x10f)](_0x569dff);}}async['injectNestedController'](_0x4ccb3d){const _0x303903=a23_0x37c73b,_0xf0b800=_0x4ccb3d['nested'];logger[_0x303903(0x13a)](_0x303903(0x119)+_0xf0b800[_0x303903(0x115)]+_0x303903(0x106)+this[_0x303903(0x11d)]+_0x4ccb3d['path']);const _0x30b128=new ControllerInjector(_0xf0b800,this);_0x30b128[_0x303903(0x105)]=_0x4ccb3d[_0x303903(0x11d)],await _0x30b128[_0x303903(0x127)](this[_0x303903(0x114)]);}async[a23_0x37c73b(0x133)](){const _0x5b1327=a23_0x37c73b;var _0x532b59;for(const _0x5a09cc of this[_0x5b1327(0x117)]){const _0x315b11=utils_1['getHandlerMeta'](_0x5a09cc);if(_0x315b11[_0x5b1327(0x110)])await this[_0x5b1327(0x11c)](_0x315b11);else{const _0x2c445c=_0x315b11['method']['toString']()[_0x5b1327(0x120)]();logger['log']('injecting\x20'+this['controllerType']['name']+'#'+_0x5a09cc[_0x5b1327(0x115)]+'\x20at\x20['+_0x315b11[_0x5b1327(0x104)]+']\x20'+utils_1['normalizePaths'](((_0x532b59=this[_0x5b1327(0x132)])===null||_0x532b59===void 0x0?void 0x0:_0x532b59[_0x5b1327(0x11d)])||'',this[_0x5b1327(0x11d)],_0x315b11[_0x5b1327(0x11d)])),this[_0x5b1327(0x114)][_0x2c445c](_0x315b11['path'],handler_wrapper_1[_0x5b1327(0x11b)](_0x5a09cc,this['instance']));}}}async['inject'](_0x252b7f){const _0x13a6fa=a23_0x37c73b;!this[_0x13a6fa(0x105)]&&logger[_0x13a6fa(0x13a)]('injecting\x20'+this['controllerType']['name']+'\x20{'+this['prefix']+'}'),await this[_0x13a6fa(0x136)](),await this[_0x13a6fa(0x133)](),_0x252b7f[_0x13a6fa(0x10f)](''+this[_0x13a6fa(0x11e)]+this['path'],this[_0x13a6fa(0x114)]);}}exports[a23_0x37c73b(0x101)]=ControllerInjector;