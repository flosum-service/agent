const a129_0x12390d=a129_0xdd06;(function(_0x2f583a,_0x3c6fbc){const _0x45f178=a129_0xdd06,_0x29fd03=_0x2f583a();while(!![]){try{const _0x197f72=-parseInt(_0x45f178(0xbc))/0x1+-parseInt(_0x45f178(0xbd))/0x2+parseInt(_0x45f178(0xa1))/0x3*(parseInt(_0x45f178(0xa5))/0x4)+parseInt(_0x45f178(0xb4))/0x5+parseInt(_0x45f178(0xa6))/0x6*(parseInt(_0x45f178(0xc8))/0x7)+parseInt(_0x45f178(0xaf))/0x8*(-parseInt(_0x45f178(0xa2))/0x9)+parseInt(_0x45f178(0xb0))/0xa;if(_0x197f72===_0x3c6fbc)break;else _0x29fd03['push'](_0x29fd03['shift']());}catch(_0x2fd03c){_0x29fd03['push'](_0x29fd03['shift']());}}}(a129_0x298d,0xde96b));function a129_0x298d(){const _0x2f5c24=['__metadata','defineProperty','/composite/graph','(((.+)+)+)+$','319071xHyMJx','2439054gaTpQr','metadata','design:paramtypes','getOwnPropertyDescriptor','length','./salesforce-auth.service','../utils/create-request.util','SALESFORCE_MAX_REQUEST_SIZE_BYTES','apply','Unsucsessful\x20composite\x20request','isSuccessful','10439849oTUEOo','graphs','/services/data/','request','CompositeGraphError','843bnlEFq','13002543HoxHIj','constructor','every','24580HuPVZT','6RqMxij','createSalesforceRequest','typedi','executeGraphs','SalesforceCompositeService','decorate','../errors/composite-graph.error','SALESFORCE_API_VERSION','../../../constants','8RncjAW','1019890uvVYvH','toString','SalesforceError','function','2874535peJzLf','SalesforceAuthService','search','object'];a129_0x298d=function(){return _0x2f5c24;};return a129_0x298d();}const a129_0x61d7ef=(function(){let _0x4271fe=!![];return function(_0x268853,_0x20a644){const _0x188e78=_0x4271fe?function(){const _0x1b9dcb=a129_0xdd06;if(_0x20a644){const _0x3c149e=_0x20a644[_0x1b9dcb(0xc5)](_0x268853,arguments);return _0x20a644=null,_0x3c149e;}}:function(){};return _0x4271fe=![],_0x188e78;};}()),a129_0x413579=a129_0x61d7ef(this,function(){const _0x174339=a129_0xdd06;return a129_0x413579[_0x174339(0xb1)]()[_0x174339(0xb6)](_0x174339(0xbb))[_0x174339(0xb1)]()[_0x174339(0xa3)](a129_0x413579)['search']('(((.+)+)+)+$');});a129_0x413579();'use strict';var __decorate=this&&this['__decorate']||function(_0x11154d,_0x57669e,_0x15ab94,_0xcc17ed){const _0x9a1cd7=a129_0xdd06;var _0x3ccab5=arguments[_0x9a1cd7(0xc1)],_0x3f9c77=_0x3ccab5<0x3?_0x57669e:_0xcc17ed===null?_0xcc17ed=Object[_0x9a1cd7(0xc0)](_0x57669e,_0x15ab94):_0xcc17ed,_0xb89e9d;if(typeof Reflect==='object'&&typeof Reflect[_0x9a1cd7(0xab)]===_0x9a1cd7(0xb3))_0x3f9c77=Reflect[_0x9a1cd7(0xab)](_0x11154d,_0x57669e,_0x15ab94,_0xcc17ed);else{for(var _0x5f1e8c=_0x11154d[_0x9a1cd7(0xc1)]-0x1;_0x5f1e8c>=0x0;_0x5f1e8c--)if(_0xb89e9d=_0x11154d[_0x5f1e8c])_0x3f9c77=(_0x3ccab5<0x3?_0xb89e9d(_0x3f9c77):_0x3ccab5>0x3?_0xb89e9d(_0x57669e,_0x15ab94,_0x3f9c77):_0xb89e9d(_0x57669e,_0x15ab94))||_0x3f9c77;}return _0x3ccab5>0x3&&_0x3f9c77&&Object[_0x9a1cd7(0xb9)](_0x57669e,_0x15ab94,_0x3f9c77),_0x3f9c77;},__metadata=this&&this[a129_0x12390d(0xb8)]||function(_0x4d5212,_0x52d259){const _0x5a026e=a129_0x12390d;if(typeof Reflect===_0x5a026e(0xb7)&&typeof Reflect[_0x5a026e(0xbe)]===_0x5a026e(0xb3))return Reflect[_0x5a026e(0xbe)](_0x4d5212,_0x52d259);};Object[a129_0x12390d(0xb9)](exports,'__esModule',{'value':!![]}),exports[a129_0x12390d(0xaa)]=void 0x0;const constants_1=require(a129_0x12390d(0xae)),typedi_1=require(a129_0x12390d(0xa8)),composite_graph_error_1=require(a129_0x12390d(0xac)),salesforce_error_1=require('../errors/salesforce.error'),create_request_util_1=require(a129_0x12390d(0xc3)),salesforce_auth_service_1=require(a129_0x12390d(0xc2));let SalesforceCompositeService=class SalesforceCompositeService{constructor(_0x4c2c22){const _0x5d8f69=a129_0x12390d;this['request']=create_request_util_1[_0x5d8f69(0xa7)](_0x4c2c22);}async[a129_0x12390d(0xa9)](_0x52de4c){const _0x32dce4=a129_0x12390d;try{const {data:_0x1a57df}=await this[_0x32dce4(0xcb)]['post'](_0x32dce4(0xca)+constants_1[_0x32dce4(0xad)]+_0x32dce4(0xba),{'graphs':_0x52de4c},{'maxBodyLength':constants_1[_0x32dce4(0xc4)]});if(!_0x1a57df[_0x32dce4(0xc9)][_0x32dce4(0xa4)](_0x1c19b4=>_0x1c19b4[_0x32dce4(0xc7)]))throw new composite_graph_error_1[(_0x32dce4(0xcc))](_0x32dce4(0xc6),_0x52de4c,_0x1a57df);return _0x1a57df;}catch(_0x237e62){if(_0x237e62 instanceof salesforce_error_1[_0x32dce4(0xb2)])throw _0x237e62;throw new salesforce_error_1[(_0x32dce4(0xb2))](_0x237e62);}}};function a129_0xdd06(_0x373d1c,_0x2ba391){const _0x4e4dde=a129_0x298d();return a129_0xdd06=function(_0x413579,_0x61d7ef){_0x413579=_0x413579-0xa1;let _0x298d55=_0x4e4dde[_0x413579];return _0x298d55;},a129_0xdd06(_0x373d1c,_0x2ba391);}SalesforceCompositeService=__decorate([typedi_1['Service'](),__metadata(a129_0x12390d(0xbf),[salesforce_auth_service_1[a129_0x12390d(0xb5)]])],SalesforceCompositeService),exports['SalesforceCompositeService']=SalesforceCompositeService;