function a263_0x21fd(){const _0x53932c=['752rnePhC','205awZcZN','FLOSUM_GIT_NAMESPACE','2674hgRamT','SalesforceError','constructor','logger','get','splice','Log__c','/logger','post','typedi','__importDefault','prefix','createLogger','log','12354030feMssZ','services/apexrest','../../../../constants','messages','toString','5755640DCFMfx','loggerId','setLoggerId','51EfvZFm','12132ywssOc','map','1659726heelzN','apply','search','push','SalesforceRestService','/flosum_git','default','(((.+)+)+)+$','2592240jJSDXW','getLoggerId','__esModule','../errors/salesforce.error','removeLogger','./salesforce-auth.service','../utils/create-request.util','SalesforceLogger2','107128aXQbbY','length','send','Logger','name'];a263_0x21fd=function(){return _0x53932c;};return a263_0x21fd();}const a263_0x1d4226=a263_0x3ffb;(function(_0x318391,_0x2e9695){const _0x1ec42f=a263_0x3ffb,_0x1a7d4b=_0x318391();while(!![]){try{const _0xc6894c=-parseInt(_0x1ec42f(0x101))/0x1*(-parseInt(_0x1ec42f(0x119))/0x2)+-parseInt(_0x1ec42f(0x10c))/0x3+parseInt(_0x1ec42f(0x114))/0x4*(-parseInt(_0x1ec42f(0x11a))/0x5)+-parseInt(_0x1ec42f(0x102))/0x6*(-parseInt(_0x1ec42f(0x11c))/0x7)+parseInt(_0x1ec42f(0xfe))/0x8+-parseInt(_0x1ec42f(0x104))/0x9+parseInt(_0x1ec42f(0x12a))/0xa;if(_0xc6894c===_0x2e9695)break;else _0x1a7d4b['push'](_0x1a7d4b['shift']());}catch(_0x15b7c3){_0x1a7d4b['push'](_0x1a7d4b['shift']());}}}(a263_0x21fd,0x9274a));const a263_0x15dc79=(function(){let _0x2f120f=!![];return function(_0x4b9036,_0x1c9a7d){const _0x508394=_0x2f120f?function(){const _0x508111=a263_0x3ffb;if(_0x1c9a7d){const _0x2d4b0d=_0x1c9a7d[_0x508111(0x105)](_0x4b9036,arguments);return _0x1c9a7d=null,_0x2d4b0d;}}:function(){};return _0x2f120f=![],_0x508394;};}()),a263_0x79e915=a263_0x15dc79(this,function(){const _0x2f441e=a263_0x3ffb;return a263_0x79e915[_0x2f441e(0xfd)]()[_0x2f441e(0x106)](_0x2f441e(0x10b))['toString']()[_0x2f441e(0x11e)](a263_0x79e915)['search']('(((.+)+)+)+$');});a263_0x79e915();'use strict';var __importDefault=this&&this[a263_0x1d4226(0x126)]||function(_0x34bca8){const _0x2f8b02=a263_0x1d4226;return _0x34bca8&&_0x34bca8[_0x2f8b02(0x10e)]?_0x34bca8:{'default':_0x34bca8};};Object['defineProperty'](exports,a263_0x1d4226(0x10e),{'value':!![]}),exports['SalesforceLogger2']=void 0x0;const typedi_1=__importDefault(require(a263_0x1d4226(0x125))),constants_1=require(a263_0x1d4226(0xfb)),core_1=require('../../../../core'),salesforce_error_1=require(a263_0x1d4226(0x10f)),create_request_util_1=require(a263_0x1d4226(0x112)),salesforce_auth_service_1=require(a263_0x1d4226(0x111)),salesforce_rest_service_1=require('./salesforce-rest.service');function a263_0x3ffb(_0x2bbbb3,_0x253d4e){const _0x241e37=a263_0x21fd();return a263_0x3ffb=function(_0x79e915,_0x15dc79){_0x79e915=_0x79e915-0xfb;let _0x21fde4=_0x241e37[_0x79e915];return _0x21fde4;},a263_0x3ffb(_0x2bbbb3,_0x253d4e);}class SalesforceLogger2{constructor(_0x63bb6f,_0x6da75){const _0x4fbcac=a263_0x1d4226;this[_0x4fbcac(0xff)]=_0x63bb6f,this['prefix']=_0x6da75,this['request']=(0x0,create_request_util_1['createSalesforceRequest'])(typedi_1['default']['get'](salesforce_auth_service_1['SalesforceAuthService'])),this[_0x4fbcac(0x11f)]=new core_1[(_0x4fbcac(0x117))](SalesforceLogger2[_0x4fbcac(0x118)]),this[_0x4fbcac(0xfc)]=[];}[a263_0x1d4226(0x100)](_0x273ed1){const _0x5636c6=a263_0x1d4226;this[_0x5636c6(0xff)]=_0x273ed1;}[a263_0x1d4226(0x10d)](){const _0x41639e=a263_0x1d4226;return this[_0x41639e(0xff)]||'';}['getPrefix'](){const _0x104b39=a263_0x1d4226;return this[_0x104b39(0x127)]||'';}async[a263_0x1d4226(0x116)](){const _0xa71eb9=a263_0x1d4226;try{if(!this['loggerId'])return;const _0x2c64cf=this[_0xa71eb9(0xfc)][_0xa71eb9(0x121)](0x0)[_0xa71eb9(0x103)](_0x3785c0=>''+(this[_0xa71eb9(0x127)]||'')+_0x3785c0);this[_0xa71eb9(0xff)]&&_0x2c64cf[_0xa71eb9(0x115)]&&await this['request'][_0xa71eb9(0x124)](_0xa71eb9(0x12b)+(constants_1['IGNORE_FLOSUM_GIT_NAMESPACE']?'':_0xa71eb9(0x109))+_0xa71eb9(0x123),{'messages':_0x2c64cf,'loggerId':this[_0xa71eb9(0xff)]});}catch(_0x508e16){throw new salesforce_error_1[(_0xa71eb9(0x11d))](_0x508e16);}}[a263_0x1d4226(0x129)](_0x1445f1){const _0x413264=a263_0x1d4226;return this['logger'][_0x413264(0x129)]('[message]\x20%s',_0x1445f1),this[_0x413264(0xfc)][_0x413264(0x107)](_0x1445f1),this;}static async[a263_0x1d4226(0x128)](){const _0x557caf=a263_0x1d4226;try{const _0x5ac108=typedi_1[_0x557caf(0x10a)]['get'](salesforce_rest_service_1[_0x557caf(0x108)]),_0x491d77=await _0x5ac108[_0x557caf(0x124)](constants_1[_0x557caf(0x11b)]+_0x557caf(0x122),{});return new SalesforceLogger2(_0x491d77);}catch(_0x23efa5){throw new salesforce_error_1[(_0x557caf(0x11d))](_0x23efa5);}}async[a263_0x1d4226(0x110)](){const _0x19169d=a263_0x1d4226;try{if(!this['loggerId'])return;const _0xe81023=typedi_1[_0x19169d(0x10a)][_0x19169d(0x120)](salesforce_rest_service_1['SalesforceRestService']);await _0xe81023['delete'](constants_1[_0x19169d(0x11b)]+_0x19169d(0x122),this[_0x19169d(0xff)]),this[_0x19169d(0xff)]='',this[_0x19169d(0xfc)]=[];}catch(_0x3d11af){throw new salesforce_error_1[(_0x19169d(0x11d))](_0x3d11af);}}}exports[a263_0x1d4226(0x113)]=SalesforceLogger2;