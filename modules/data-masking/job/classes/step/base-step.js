const a59_0x10e542=a59_0x12e8;function a59_0x48d4(){const _0x23836e=['toString','execute','recordsCount','2ojexPy','1165fXRLeN','COUNT()','8ysdHYp','defineProperty','QueryBuilder','where','DeployFactory','apply','getRecordsCount','../../../constants','whereClause','../../job-detail','fields','create','33yyqIhK','RetrieveFactory','248556NNGNaw','BaseStep','_whereClause','../../retrieve/retrieve-factory','constructor','systemLogger','../../deploy/deploy-factory','type','getDeployStream','_objectRuleType','exception','objectName','SALESFORCE_API_VERSION','log','14188NzaGBX','loggerDetails','totalSize','error','objectDescribe','1601353OkAkrj','271780jIunTK','147dlHhAt','search','126482OvJrEV','54kmHGfq','(((.+)+)+)+$','279564pkzwfo','loggerJobState','request','474CJQcOK','select'];a59_0x48d4=function(){return _0x23836e;};return a59_0x48d4();}function a59_0x12e8(_0x22146f,_0x2ed3ce){const _0x4853a4=a59_0x48d4();return a59_0x12e8=function(_0x361a82,_0x43a490){_0x361a82=_0x361a82-0xaa;let _0x48d491=_0x4853a4[_0x361a82];return _0x48d491;},a59_0x12e8(_0x22146f,_0x2ed3ce);}(function(_0x434128,_0x54df11){const _0x4a15db=a59_0x12e8,_0x2b3caf=_0x434128();while(!![]){try{const _0x22be8d=parseInt(_0x4a15db(0xd1))/0x1*(parseInt(_0x4a15db(0xc6))/0x2)+-parseInt(_0x4a15db(0xc4))/0x3*(-parseInt(_0x4a15db(0xbd))/0x4)+parseInt(_0x4a15db(0xd2))/0x5*(-parseInt(_0x4a15db(0xcc))/0x6)+parseInt(_0x4a15db(0xaf))/0x7*(parseInt(_0x4a15db(0xd4))/0x8)+-parseInt(_0x4a15db(0xc7))/0x9*(parseInt(_0x4a15db(0xc3))/0xa)+-parseInt(_0x4a15db(0xad))/0xb*(-parseInt(_0x4a15db(0xc9))/0xc)+-parseInt(_0x4a15db(0xc2))/0xd;if(_0x22be8d===_0x54df11)break;else _0x2b3caf['push'](_0x2b3caf['shift']());}catch(_0x312b6e){_0x2b3caf['push'](_0x2b3caf['shift']());}}}(a59_0x48d4,0x18aa4));const a59_0x43a490=(function(){let _0x436f34=!![];return function(_0x1a4915,_0xa75e53){const _0x336cfc=_0x436f34?function(){const _0x3f05a8=a59_0x12e8;if(_0xa75e53){const _0x54b2aa=_0xa75e53[_0x3f05a8(0xd9)](_0x1a4915,arguments);return _0xa75e53=null,_0x54b2aa;}}:function(){};return _0x436f34=![],_0x336cfc;};}()),a59_0x361a82=a59_0x43a490(this,function(){const _0x4376dc=a59_0x12e8;return a59_0x361a82[_0x4376dc(0xce)]()['search'](_0x4376dc(0xc8))[_0x4376dc(0xce)]()[_0x4376dc(0xb3)](a59_0x361a82)[_0x4376dc(0xc5)](_0x4376dc(0xc8));});a59_0x361a82();'use strict';Object[a59_0x10e542(0xd5)](exports,'__esModule',{'value':!![]}),exports[a59_0x10e542(0xb0)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),retrieve_factory_1=require(a59_0x10e542(0xb2)),constants_1=require(a59_0x10e542(0xdb)),deploy_factory_1=require(a59_0x10e542(0xb5)),job_detail_1=require(a59_0x10e542(0xaa)),FIELD_ID='Id';class BaseStep{constructor({loggerDetails:_0x5df986,loggerJobState:_0x33b945,objectName:_0x5bf47b,request:_0x1741fd,objectRule:_0xa946d8,objectDescribe:_0x5c375d}){const _0x1f23fc=a59_0x10e542;this[_0x1f23fc(0xab)]=[],this[_0x1f23fc(0xbe)]=_0x5df986,this['loggerJobState']=_0x33b945,this[_0x1f23fc(0xba)]=_0x5bf47b,this[_0x1f23fc(0xcb)]=_0x1741fd,this[_0x1f23fc(0xb1)]=_0xa946d8[_0x1f23fc(0xdc)],this['_objectRuleType']=_0xa946d8[_0x1f23fc(0xb6)],this[_0x1f23fc(0xc1)]=_0x5c375d;}async[a59_0x10e542(0xda)](){const _0x328b8d=a59_0x10e542;try{const _0x18d8e8=new salesforce_1[(_0x328b8d(0xd6))]()[_0x328b8d(0xcd)](_0x328b8d(0xd3))['from'](this[_0x328b8d(0xba)]);this[_0x328b8d(0xb1)]&&_0x18d8e8[_0x328b8d(0xd7)](this[_0x328b8d(0xb1)]);const _0x1de02b=await salesforce_1['QueryService'][_0x328b8d(0xcf)](this[_0x328b8d(0xcb)],{},_0x18d8e8['build'](),![],constants_1[_0x328b8d(0xbb)]);return _0x1de02b[_0x328b8d(0xbf)];}catch(_0x7406d5){return job_detail_1['systemLogger'][_0x328b8d(0xc0)](_0x7406d5),-0x1;}}['getRetrieveStream'](){const _0x5b84bd=a59_0x10e542,_0x12d873={'request':this[_0x5b84bd(0xcb)],'fields':this[_0x5b84bd(0xab)],'whereClause':this[_0x5b84bd(0xb1)],'objectName':this['objectName'],'describe':this[_0x5b84bd(0xc1)]};return retrieve_factory_1[_0x5b84bd(0xae)][_0x5b84bd(0xac)](_0x12d873,this[_0x5b84bd(0xd0)]);}[a59_0x10e542(0xb7)](){const _0x4b9771=a59_0x10e542,_0x385862={'request':this[_0x4b9771(0xcb)],'objectName':this[_0x4b9771(0xba)],'externalIdField':FIELD_ID,'loggerDetails':this['loggerDetails'],'loggerJobState':this[_0x4b9771(0xca)]};return deploy_factory_1[_0x4b9771(0xd8)][_0x4b9771(0xac)](_0x385862,this[_0x4b9771(0xb8)]);}[a59_0x10e542(0xbc)](_0x45d89c){const _0x34c037=a59_0x10e542;job_detail_1['systemLogger'][_0x34c037(0xbc)](_0x45d89c,this[_0x34c037(0xba)]),this[_0x34c037(0xbe)][_0x34c037(0xbc)](_0x45d89c,this['objectName']);}[a59_0x10e542(0xc0)](_0x44e8cb){const _0xd1163=a59_0x10e542;job_detail_1[_0xd1163(0xb4)][_0xd1163(0xc0)](_0x44e8cb,this[_0xd1163(0xba)]),this['loggerDetails'][_0xd1163(0xb9)](_0x44e8cb['message'],this[_0xd1163(0xba)]);}}exports[a59_0x10e542(0xb0)]=BaseStep;