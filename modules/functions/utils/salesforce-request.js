function a91_0x1c4d(_0x411eb5,_0xb74601){const _0x5d6f4a=a91_0x44b6();return a91_0x1c4d=function(_0x53b5ed,_0x1fcf19){_0x53b5ed=_0x53b5ed-0x125;let _0x44b637=_0x5d6f4a[_0x53b5ed];return _0x44b637;},a91_0x1c4d(_0x411eb5,_0xb74601);}const a91_0x5a5e51=a91_0x1c4d;(function(_0x427070,_0x2d0f45){const _0x3117de=a91_0x1c4d,_0x357631=_0x427070();while(!![]){try{const _0x45833e=-parseInt(_0x3117de(0x14f))/0x1+-parseInt(_0x3117de(0x149))/0x2+parseInt(_0x3117de(0x144))/0x3*(parseInt(_0x3117de(0x139))/0x4)+parseInt(_0x3117de(0x14c))/0x5*(-parseInt(_0x3117de(0x145))/0x6)+parseInt(_0x3117de(0x12a))/0x7*(-parseInt(_0x3117de(0x14e))/0x8)+-parseInt(_0x3117de(0x132))/0x9+parseInt(_0x3117de(0x127))/0xa*(parseInt(_0x3117de(0x138))/0xb);if(_0x45833e===_0x2d0f45)break;else _0x357631['push'](_0x357631['shift']());}catch(_0x23e6cd){_0x357631['push'](_0x357631['shift']());}}}(a91_0x44b6,0x4e560));const a91_0x1fcf19=(function(){let _0x2f94d9=!![];return function(_0x27622e,_0xb579dd){const _0x4c217d=_0x2f94d9?function(){const _0x36f4c2=a91_0x1c4d;if(_0xb579dd){const _0x8ea25b=_0xb579dd[_0x36f4c2(0x12c)](_0x27622e,arguments);return _0xb579dd=null,_0x8ea25b;}}:function(){};return _0x2f94d9=![],_0x4c217d;};}()),a91_0x53b5ed=a91_0x1fcf19(this,function(){const _0x171933=a91_0x1c4d;return a91_0x53b5ed[_0x171933(0x146)]()['search'](_0x171933(0x13b))[_0x171933(0x146)]()[_0x171933(0x128)](a91_0x53b5ed)['search'](_0x171933(0x13b));});a91_0x53b5ed();'use strict';function a91_0x44b6(){const _0x4222ba=['message','updateAccessToken','data','clientSecret','createRequest','8958HvOqyq','6admrkT','toString','instanceUrl','headers','225980YFCUbx','application/json','maxBodyLength','849145dLSTVl','default','208NruqRk','506884PEFBxU','accessToken','response','20DPFtGH','constructor','use','145012CmVIvj','defineProperty','apply','FLOSUM_NAMESPACE','Bearer\x20','baseURL','axios','error','137385dOBQyd','../../shared/errors/request.error','config','refreshToken','string','namespace','7397203GMqHsQ','428mHvrVu','__esModule','(((.+)+)+)+$','./auth.utils','interceptors','__importDefault'];a91_0x44b6=function(){return _0x4222ba;};return a91_0x44b6();}var __importDefault=this&&this[a91_0x5a5e51(0x13e)]||function(_0x2c7249){const _0x19d513=a91_0x5a5e51;return _0x2c7249&&_0x2c7249[_0x19d513(0x13a)]?_0x2c7249:{'default':_0x2c7249};};Object[a91_0x5a5e51(0x12b)](exports,a91_0x5a5e51(0x13a),{'value':!![]}),exports[a91_0x5a5e51(0x143)]=exports['namespace']=void 0x0;const axios_1=__importDefault(require(a91_0x5a5e51(0x130))),axios_retry_1=__importDefault(require('axios-retry')),request_error_1=require(a91_0x5a5e51(0x133)),auth_utils_1=require(a91_0x5a5e51(0x13c)),constants_1=require('../../../constants'),DELAY=0x9c4;exports[a91_0x5a5e51(0x137)]=constants_1[a91_0x5a5e51(0x12d)]?'/Flosum':'';function createRequest(_0x3e66e2){const _0xf669e3=a91_0x5a5e51,_0x3ebb55=axios_1[_0xf669e3(0x14d)]['create']();return(0x0,axios_retry_1[_0xf669e3(0x14d)])(_0x3ebb55,{'retries':0x3,'retryDelay'(_0x32fadf){return _0x32fadf*DELAY;}}),_0x3ebb55[_0xf669e3(0x13d)]['request'][_0xf669e3(0x129)](_0x6e9d15=>{const _0x7982c5=_0xf669e3;return _0x6e9d15['headers']['accept']=_0x7982c5(0x14a),_0x6e9d15[_0x7982c5(0x148)]['authorization']=_0x7982c5(0x12e)+_0x3e66e2[_0x7982c5(0x125)],_0x6e9d15[_0x7982c5(0x12f)]=_0x3e66e2[_0x7982c5(0x147)],_0x6e9d15[_0x7982c5(0x14b)]=0x6400000,_0x6e9d15['maxContentLength']=0x6400000,_0x6e9d15;}),_0x3ebb55[_0xf669e3(0x13d)][_0xf669e3(0x126)][_0xf669e3(0x129)](undefined,async _0x3d9bfd=>{const _0x438dab=_0xf669e3;var _0x4805db,_0x19d85c,_0x546640;if(_0x3d9bfd['isAxiosError']&&_0x3d9bfd['config']){if(((_0x4805db=_0x3d9bfd[_0x438dab(0x126)])===null||_0x4805db===void 0x0?void 0x0:_0x4805db['status'])===0x191)return _0x3e66e2['accessToken']=await auth_utils_1['AuthUtils'][_0x438dab(0x140)](_0x3e66e2['instanceUrl'],_0x3e66e2[_0x438dab(0x135)],_0x3e66e2['clientId'],_0x3e66e2[_0x438dab(0x142)]),_0x3d9bfd[_0x438dab(0x134)][_0x438dab(0x148)]['authorization']='Bearer\x20'+_0x3e66e2[_0x438dab(0x125)],_0x3d9bfd[_0x438dab(0x134)][_0x438dab(0x12f)]=_0x3e66e2[_0x438dab(0x147)],_0x3ebb55(_0x3d9bfd['config']);}let _0x54740f=((_0x19d85c=_0x3d9bfd===null||_0x3d9bfd===void 0x0?void 0x0:_0x3d9bfd[_0x438dab(0x126)])===null||_0x19d85c===void 0x0?void 0x0:_0x19d85c[_0x438dab(0x141)])||{};Array['isArray'](_0x54740f)&&(_0x54740f=_0x54740f[0x0]);const _0x5d5265=_0x54740f[_0x438dab(0x13f)]||typeof _0x54740f['error']===_0x438dab(0x136)?_0x54740f[_0x438dab(0x131)]:((_0x546640=_0x54740f[_0x438dab(0x131)])===null||_0x546640===void 0x0?void 0x0:_0x546640['message'])||_0x3d9bfd[_0x438dab(0x13f)];throw new request_error_1['RequestError'](_0x5d5265,_0x54740f);}),_0x3ebb55;}exports[a91_0x5a5e51(0x143)]=createRequest;