const a236_0x25f2d7=a236_0x40f4;function a236_0x40f4(_0x197c3a,_0x493e1c){const _0x228358=a236_0x1d92();return a236_0x40f4=function(_0x103009,_0x2b677b){_0x103009=_0x103009-0xd5;let _0x1d922a=_0x228358[_0x103009];return _0x1d922a;},a236_0x40f4(_0x197c3a,_0x493e1c);}(function(_0x5ae594,_0x9e477a){const _0x217916=a236_0x40f4,_0x5c3f69=_0x5ae594();while(!![]){try{const _0x1eba4f=parseInt(_0x217916(0x103))/0x1+parseInt(_0x217916(0xe0))/0x2+-parseInt(_0x217916(0x10c))/0x3+parseInt(_0x217916(0xf8))/0x4+-parseInt(_0x217916(0xeb))/0x5*(-parseInt(_0x217916(0xe5))/0x6)+parseInt(_0x217916(0xe8))/0x7*(-parseInt(_0x217916(0xe1))/0x8)+-parseInt(_0x217916(0x106))/0x9;if(_0x1eba4f===_0x9e477a)break;else _0x5c3f69['push'](_0x5c3f69['shift']());}catch(_0x18e5ce){_0x5c3f69['push'](_0x5c3f69['shift']());}}}(a236_0x1d92,0xa90b7));const a236_0x2b677b=(function(){let _0xf253d4=!![];return function(_0x41331b,_0x4321da){const _0x355151=_0xf253d4?function(){const _0x5c67c6=a236_0x40f4;if(_0x4321da){const _0x22fb5d=_0x4321da[_0x5c67c6(0x102)](_0x41331b,arguments);return _0x4321da=null,_0x22fb5d;}}:function(){};return _0xf253d4=![],_0x355151;};}()),a236_0x103009=a236_0x2b677b(this,function(){const _0x154d8a=a236_0x40f4;return a236_0x103009[_0x154d8a(0x10a)]()[_0x154d8a(0xfc)](_0x154d8a(0xdb))['toString']()['constructor'](a236_0x103009)[_0x154d8a(0xfc)]('(((.+)+)+)+$');});a236_0x103009();'use strict';function a236_0x1d92(){const _0x26a1d3=['GET_COMPONENT_HISTORIES_BY_IDS','query','1297852VOKkeA','info','__importDefault','SalesforceRetrieverService','search','retrieveComponentIdsFromHistoryIds','push','__esModule','salesforceService','fromSalesforce','apply','19808zDpYVw','SalesforceQueryService','length','10184535OXWVQg','splice','join','retrieveLastComponents','toString','map','1792476qWtqIo','logger','log','all','components','then','ids','run','(((.+)+)+)+$','ParentId','get','manually\x20retrieved\x20%d/%d\x20components','../dto/flosum-component-history.dto','2017942kdZqsR','408tiQAlV','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','attachmentId','replace','3300HUbwiK','retrieveComponents','fileType','22246KzafHi','%parent_ids%','filename','11185OTNxWV','typedi','name','Name','fileName','%ids%','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','../../../../core','COMPONENTS_PER_REQUEST','COMPONENTS_PER_QUERY','find'];a236_0x1d92=function(){return _0x26a1d3;};return a236_0x1d92();}var __importDefault=this&&this[a236_0x25f2d7(0xfa)]||function(_0xbb7df){const _0x5403c6=a236_0x25f2d7;return _0xbb7df&&_0xbb7df[_0x5403c6(0xff)]?_0xbb7df:{'default':_0xbb7df};};Object['defineProperty'](exports,a236_0x25f2d7(0xff),{'value':!![]}),exports[a236_0x25f2d7(0xfb)]=void 0x0;const core_1=require(a236_0x25f2d7(0xf2)),typedi_1=__importDefault(require(a236_0x25f2d7(0xec))),salesforce_query_service_1=require('./salesforce-query.service'),queries_1=require('../queries'),flosum_component_history_dto_1=require(a236_0x25f2d7(0xdf));class SalesforceRetrieverService{constructor(_0x294fcc){const _0x11d20c=a236_0x25f2d7;this[_0x11d20c(0x100)]=_0x294fcc,this[_0x11d20c(0x10d)]=new core_1['Logger'](SalesforceRetrieverService[_0x11d20c(0xed)]),this[_0x11d20c(0xf3)]=0xbb8,this['COMPONENTS_PER_QUERY']=0x1f4;}async[a236_0x25f2d7(0xfd)](_0x48e49d){const _0x1791dc=a236_0x25f2d7;this[_0x1791dc(0x10d)][_0x1791dc(0xf9)]('manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)',_0x48e49d[_0x1791dc(0x105)]);const _0x4abd05=typedi_1['default'][_0x1791dc(0xdd)](salesforce_query_service_1[_0x1791dc(0x104)]),_0x8469d7=_0x48e49d[_0x1791dc(0x10b)](_0x46741b=>'\x27'+_0x46741b+'\x27'),_0x50bc99=[];while(_0x8469d7[_0x1791dc(0x105)]){const _0x2b807a=_0x8469d7['splice'](0x0,this[_0x1791dc(0xf4)]),_0x354ae8=_0x4abd05[_0x1791dc(0xf7)](queries_1[_0x1791dc(0xe2)][_0x1791dc(0xe4)](_0x1791dc(0xe9),_0x2b807a[_0x1791dc(0x108)]())),_0x52b3f1=_0x4abd05[_0x1791dc(0xf7)](queries_1[_0x1791dc(0xf6)]['replace'](_0x1791dc(0xf0),_0x2b807a[_0x1791dc(0x108)]()))[_0x1791dc(0xd8)](_0x18507b=>_0x18507b[_0x1791dc(0x10b)](_0x9e2831=>flosum_component_history_dto_1['FlosumComponentHistoryDto'][_0x1791dc(0x101)](_0x9e2831))),[_0x1f8e75,_0x6a1565]=await Promise[_0x1791dc(0xd6)]([_0x354ae8,_0x52b3f1]);for(const _0x6f7a63 of _0x6a1565){const _0x18dc22=_0x1f8e75[_0x1791dc(0xf5)](_0x1d78af=>_0x1d78af[_0x1791dc(0xdc)]===_0x6f7a63['id']);_0x18dc22&&_0x50bc99[_0x1791dc(0xfe)]({'fileType':_0x18dc22[_0x1791dc(0xee)],'fileName':_0x6f7a63[_0x1791dc(0xea)],'attachmentId':_0x18dc22['Id']});}}return _0x50bc99;}async[a236_0x25f2d7(0x109)](_0x407e5d){const _0x138ca5=a236_0x25f2d7,_0x1b025f=await this[_0x138ca5(0xfd)](_0x407e5d);this[_0x138ca5(0x10d)]['info']('manually\x20retrieving\x20components\x20from\x20salesforce');const _0x170859=[];for(const _0x56e00e of _0x1b025f){const _0x3d1ce1=await this['salesforceService']['retrieveAttachment'](_0x56e00e[_0x138ca5(0xe3)],!![]);_0x170859[_0x138ca5(0xfe)]({'body':_0x3d1ce1['toString']('base64'),'fileName':_0x56e00e[_0x138ca5(0xef)],'fileType':_0x56e00e[_0x138ca5(0xe7)]}),this[_0x138ca5(0x10d)][_0x138ca5(0xf9)](_0x138ca5(0xde),_0x170859[_0x138ca5(0x105)],_0x407e5d[_0x138ca5(0x105)]);}return _0x170859;}async[a236_0x25f2d7(0xda)](_0x5c2b9a){const _0x459eab=a236_0x25f2d7,_0x599778=[..._0x5c2b9a],_0x3e200e=[],_0x106bfa=[];while(_0x599778[_0x459eab(0x105)]){const _0x2d7d36=_0x599778[_0x459eab(0x107)](0x0,this[_0x459eab(0xf3)]),_0xb4a11c=await this[_0x459eab(0x100)][_0x459eab(0xe6)](_0x2d7d36);_0x2d7d36['length']!==_0xb4a11c[_0x459eab(0xd9)]['length']?(_0x599778[_0x459eab(0xfe)](..._0xb4a11c[_0x459eab(0xd9)]),_0x3e200e[_0x459eab(0xfe)](..._0xb4a11c[_0x459eab(0xd7)])):_0x106bfa[_0x459eab(0xfe)](..._0x2d7d36),this[_0x459eab(0x10d)][_0x459eab(0xd5)](_0x459eab(0xf1),_0x5c2b9a[_0x459eab(0x105)]-_0x599778['length'],_0x5c2b9a[_0x459eab(0x105)]);}if(_0x106bfa[_0x459eab(0x105)]){const _0x13f4ef=await this['retrieveLastComponents'](_0x106bfa);_0x3e200e[_0x459eab(0xfe)](..._0x13f4ef);}return _0x3e200e;}}exports[a236_0x25f2d7(0xfb)]=SalesforceRetrieverService;