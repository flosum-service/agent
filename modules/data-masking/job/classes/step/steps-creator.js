const a62_0x4d3375=a62_0x2603;(function(_0x359618,_0x4d41b9){const _0x45cade=a62_0x2603,_0x2d48c5=_0x359618();while(!![]){try{const _0x526824=parseInt(_0x45cade(0x98))/0x1*(-parseInt(_0x45cade(0xa4))/0x2)+-parseInt(_0x45cade(0x9d))/0x3+-parseInt(_0x45cade(0xa3))/0x4+parseInt(_0x45cade(0xb0))/0x5+parseInt(_0x45cade(0x94))/0x6+-parseInt(_0x45cade(0xa0))/0x7+parseInt(_0x45cade(0xa5))/0x8*(parseInt(_0x45cade(0x91))/0x9);if(_0x526824===_0x4d41b9)break;else _0x2d48c5['push'](_0x2d48c5['shift']());}catch(_0x3a01e5){_0x2d48c5['push'](_0x2d48c5['shift']());}}}(a62_0x36a7,0x5b0cc));const a62_0x1afaa6=(function(){let _0xbdc123=!![];return function(_0x1d189d,_0x286cfe){const _0x5b3aa1=_0xbdc123?function(){const _0x341f3e=a62_0x2603;if(_0x286cfe){const _0x57478e=_0x286cfe[_0x341f3e(0xb6)](_0x1d189d,arguments);return _0x286cfe=null,_0x57478e;}}:function(){};return _0xbdc123=![],_0x5b3aa1;};}()),a62_0x1560dd=a62_0x1afaa6(this,function(){const _0xe4dc54=a62_0x2603;return a62_0x1560dd[_0xe4dc54(0xa6)]()['search'](_0xe4dc54(0xa2))['toString']()[_0xe4dc54(0x9b)](a62_0x1560dd)[_0xe4dc54(0xae)]('(((.+)+)+)+$');});function a62_0x36a7(){const _0x17f141=['339432PVYOtz','ObjectRuleType','_request','StepsCreator','59XIGHeZ','getMaskingStep','./delete-step','constructor','DeleteStep','1964046gCqdjQ','../../../../../constants','../../enums/job.enums','23471oPHyRB','getDeleteStep','(((.+)+)+)+$','1461612uSdIzD','9964XVlJJP','1248jHsYOV','toString','fetchDescribes','_objectsDescribes','reduce','keys','DescribeService','defineProperty','_loggerDetails','search','MASKING','1657280FnpqMm','_libraries','_objectRules','@flosum/salesforce','name','map','apply','75132WJESeI','\x27\x20for\x20ObjectRule\x20\x27','DELETE'];a62_0x36a7=function(){return _0x17f141;};return a62_0x36a7();}a62_0x1560dd();'use strict';Object[a62_0x4d3375(0xac)](exports,'__esModule',{'value':!![]}),exports[a62_0x4d3375(0x97)]=void 0x0;function a62_0x2603(_0x4b80c8,_0x2a5d78){const _0x313c18=a62_0x36a7();return a62_0x2603=function(_0x1560dd,_0x1afaa6){_0x1560dd=_0x1560dd-0x91;let _0x36a71f=_0x313c18[_0x1560dd];return _0x36a71f;},a62_0x2603(_0x4b80c8,_0x2a5d78);}const salesforce_1=require(a62_0x4d3375(0xb3)),masking_step_1=require('./masking-step'),constants_1=require(a62_0x4d3375(0x9e)),job_enums_1=require(a62_0x4d3375(0x9f)),delete_step_1=require(a62_0x4d3375(0x9a));class StepsCreator{constructor({loggerDetails:_0x23c46d,loggerJobState:_0x39cef5,objectRules:_0x460ac3,request:_0x534139,libraries:_0x30c81f}){const _0x3c87f7=a62_0x4d3375;this['_loggerDetails']=_0x23c46d,this['_loggerJobState']=_0x39cef5,this[_0x3c87f7(0xb2)]=_0x460ac3,this[_0x3c87f7(0x96)]=_0x534139,this[_0x3c87f7(0xb1)]=_0x30c81f;}async['create'](){const _0x1587d6=a62_0x4d3375;return this[_0x1587d6(0xa8)]=await this[_0x1587d6(0xa7)](),Object[_0x1587d6(0xaa)](this[_0x1587d6(0xb2)])[_0x1587d6(0xb5)](_0x32bbcc=>{const _0x56b4c8=_0x1587d6,{type:_0x2b31db}=this[_0x56b4c8(0xb2)][_0x32bbcc];switch(_0x2b31db){case job_enums_1[_0x56b4c8(0x95)][_0x56b4c8(0xaf)]:return this[_0x56b4c8(0x99)](_0x32bbcc);case job_enums_1['ObjectRuleType'][_0x56b4c8(0x93)]:return this['getDeleteStep'](_0x32bbcc);default:throw new Error('Unknown\x20type\x20\x27'+_0x2b31db+_0x56b4c8(0x92)+_0x32bbcc+'\x27');}});}async['fetchDescribes'](){const _0x25dd93=a62_0x4d3375,_0x279973=await salesforce_1[_0x25dd93(0xab)]['objects'](this[_0x25dd93(0x96)],{},Object[_0x25dd93(0xaa)](this['_objectRules']),constants_1['SALESFORCE_API_VERSION_RAW']);return _0x279973[_0x25dd93(0xa9)]((_0x2b1079,_0x1ccffd)=>{const _0x1252c8=_0x25dd93;return{[_0x1ccffd[_0x1252c8(0xb4)]]:_0x1ccffd,..._0x2b1079};},{});}[a62_0x4d3375(0x99)](_0x34abc0){const _0x1f71f7=a62_0x4d3375;return new masking_step_1['MaskingStep']({'loggerDetails':this[_0x1f71f7(0xad)],'loggerJobState':this['_loggerJobState'],'objectName':_0x34abc0,'request':this[_0x1f71f7(0x96)],'objectRule':this['_objectRules'][_0x34abc0],'objectDescribe':this[_0x1f71f7(0xa8)][_0x34abc0],'libraries':this[_0x1f71f7(0xb1)]});}[a62_0x4d3375(0xa1)](_0x4e5005){const _0x4d234c=a62_0x4d3375;return new delete_step_1[(_0x4d234c(0x9c))]({'loggerDetails':this[_0x4d234c(0xad)],'loggerJobState':this['_loggerJobState'],'objectName':_0x4e5005,'request':this[_0x4d234c(0x96)],'objectRule':this[_0x4d234c(0xb2)][_0x4e5005],'objectDescribe':this['_objectsDescribes'][_0x4e5005]});}}exports[a62_0x4d3375(0x97)]=StepsCreator;