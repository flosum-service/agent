const a130_0x166eea=a130_0x3658;function a130_0x4f18(){const _0x5d5715=['splice','IGNORE_FLOSUM_GIT_NAMESPACE','[message]\x20%s','FLOSUM_GIT_NAMESPACE','244oggJDU','SalesforceLogger2','name','default','post','/flosum_git','8471276CAgAxE','__importDefault','./salesforce-rest.service','259608xEjJAL','454025cnMYNB','10mQCKvi','SalesforceAuthService','prefix','createLogger','Log__c','services/apexrest','get','logger','(((.+)+)+)+$','delete','length','../errors/salesforce.error','toString','426954wlpSxc','push','SalesforceError','21RuAoxt','7887qJnutE','getPrefix','apply','messages','request','loggerId','../../../core','search','336hRFujJ','1635858ktznia','SalesforceRestService','../../../constants','1297sdiOlN','getLoggerId','setLoggerId','defineProperty','./salesforce-auth.service','__esModule','log','removeLogger','map'];a130_0x4f18=function(){return _0x5d5715;};return a130_0x4f18();}(function(_0x1acde3,_0x93b047){const _0x54c19d=a130_0x3658,_0x28a9e6=_0x1acde3();while(!![]){try{const _0x2fbde5=-parseInt(_0x54c19d(0x197))/0x1*(-parseInt(_0x54c19d(0x193))/0x2)+parseInt(_0x54c19d(0x18b))/0x3*(parseInt(_0x54c19d(0x1a4))/0x4)+parseInt(_0x54c19d(0x1ae))/0x5+parseInt(_0x54c19d(0x187))/0x6*(parseInt(_0x54c19d(0x18a))/0x7)+parseInt(_0x54c19d(0x1ad))/0x8+parseInt(_0x54c19d(0x194))/0x9+-parseInt(_0x54c19d(0x1af))/0xa*(parseInt(_0x54c19d(0x1aa))/0xb);if(_0x2fbde5===_0x93b047)break;else _0x28a9e6['push'](_0x28a9e6['shift']());}catch(_0x21fba2){_0x28a9e6['push'](_0x28a9e6['shift']());}}}(a130_0x4f18,0x1eeb4));const a130_0x269043=(function(){let _0x5499c7=!![];return function(_0x172ed1,_0x22895c){const _0x463970=_0x5499c7?function(){const _0x107dfe=a130_0x3658;if(_0x22895c){const _0x3c8284=_0x22895c[_0x107dfe(0x18d)](_0x172ed1,arguments);return _0x22895c=null,_0x3c8284;}}:function(){};return _0x5499c7=![],_0x463970;};}()),a130_0x33cf1b=a130_0x269043(this,function(){const _0x5227fc=a130_0x3658;return a130_0x33cf1b[_0x5227fc(0x186)]()[_0x5227fc(0x192)](_0x5227fc(0x182))[_0x5227fc(0x186)]()['constructor'](a130_0x33cf1b)[_0x5227fc(0x192)](_0x5227fc(0x182));});a130_0x33cf1b();'use strict';var __importDefault=this&&this[a130_0x166eea(0x1ab)]||function(_0x3a48da){return _0x3a48da&&_0x3a48da['__esModule']?_0x3a48da:{'default':_0x3a48da};};function a130_0x3658(_0x51e246,_0x3555d6){const _0x588245=a130_0x4f18();return a130_0x3658=function(_0x33cf1b,_0x269043){_0x33cf1b=_0x33cf1b-0x17f;let _0x4f1869=_0x588245[_0x33cf1b];return _0x4f1869;},a130_0x3658(_0x51e246,_0x3555d6);}Object[a130_0x166eea(0x19a)](exports,a130_0x166eea(0x19c),{'value':!![]}),exports[a130_0x166eea(0x1a5)]=void 0x0;const typedi_1=__importDefault(require('typedi')),constants_1=require(a130_0x166eea(0x196)),core_1=require(a130_0x166eea(0x191)),salesforce_error_1=require(a130_0x166eea(0x185)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a130_0x166eea(0x19b)),salesforce_rest_service_1=require(a130_0x166eea(0x1ac));class SalesforceLogger2{constructor(_0xb14fd1,_0x57a186){const _0x216442=a130_0x166eea;this[_0x216442(0x190)]=_0xb14fd1,this[_0x216442(0x1b1)]=_0x57a186,this[_0x216442(0x18f)]=create_request_util_1['createSalesforceRequest'](typedi_1[_0x216442(0x1a7)][_0x216442(0x180)](salesforce_auth_service_1[_0x216442(0x1b0)])),this[_0x216442(0x181)]=new core_1['Logger'](SalesforceLogger2[_0x216442(0x1a6)]),this[_0x216442(0x18e)]=[];}[a130_0x166eea(0x199)](_0x249a70){const _0x252209=a130_0x166eea;this[_0x252209(0x190)]=_0x249a70;}[a130_0x166eea(0x198)](){return this['loggerId']||'';}[a130_0x166eea(0x18c)](){const _0x6eb89=a130_0x166eea;return this[_0x6eb89(0x1b1)]||'';}async['send'](){const _0x55d8ba=a130_0x166eea;try{if(!this['loggerId'])return;const _0x2cbaac=this[_0x55d8ba(0x18e)][_0x55d8ba(0x1a0)](0x0)[_0x55d8ba(0x19f)](_0x2eac2c=>''+(this[_0x55d8ba(0x1b1)]||'')+_0x2eac2c);this[_0x55d8ba(0x190)]&&_0x2cbaac[_0x55d8ba(0x184)]&&await this[_0x55d8ba(0x18f)][_0x55d8ba(0x1a8)](_0x55d8ba(0x17f)+(constants_1[_0x55d8ba(0x1a1)]?'':_0x55d8ba(0x1a9))+'/logger',{'messages':_0x2cbaac,'loggerId':this[_0x55d8ba(0x190)]});}catch(_0x59e9d1){throw new salesforce_error_1['SalesforceError'](_0x59e9d1);}}[a130_0x166eea(0x19d)](_0x36bcfb){const _0x3b2e50=a130_0x166eea;return this['logger'][_0x3b2e50(0x19d)](_0x3b2e50(0x1a2),_0x36bcfb),this[_0x3b2e50(0x18e)][_0x3b2e50(0x188)](_0x36bcfb),this;}static async[a130_0x166eea(0x1b2)](){const _0x53221d=a130_0x166eea;try{const _0x58e7f0=typedi_1['default'][_0x53221d(0x180)](salesforce_rest_service_1[_0x53221d(0x195)]),_0x2bfb00=await _0x58e7f0['post'](constants_1[_0x53221d(0x1a3)]+_0x53221d(0x1b3),{});return new SalesforceLogger2(_0x2bfb00);}catch(_0x46b5fa){throw new salesforce_error_1[(_0x53221d(0x189))](_0x46b5fa);}}async[a130_0x166eea(0x19e)](){const _0x38fe94=a130_0x166eea;try{if(!this[_0x38fe94(0x190)])return;const _0x21513b=typedi_1[_0x38fe94(0x1a7)][_0x38fe94(0x180)](salesforce_rest_service_1['SalesforceRestService']);await _0x21513b[_0x38fe94(0x183)](constants_1[_0x38fe94(0x1a3)]+_0x38fe94(0x1b3),this[_0x38fe94(0x190)]),this['loggerId']='',this[_0x38fe94(0x18e)]=[];}catch(_0x30c50a){throw new salesforce_error_1[(_0x38fe94(0x189))](_0x30c50a);}}}exports[a130_0x166eea(0x1a5)]=SalesforceLogger2;