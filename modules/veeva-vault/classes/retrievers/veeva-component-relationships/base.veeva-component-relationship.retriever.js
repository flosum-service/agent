function a323_0xe26f(){const _0x3fd2a1=['formQuery','targetComponentId','9323037nCzdmc','toString','1871200edrMRB','4CddmmL','constructor','getQueries','__esModule','map','apply','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component_name__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_date__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component_relationship__sys\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20','16286468RyyeZH','5026347dHWLOH','value','defineProperty','deleteDuplicates','2412460EUnVzZ','BaseVeevaComponentRelationshipRetriever','../../../dtos/veeva-component-relationship.dto','215180JkNYVu','formComponents','8aXjLwC','8MsQfnW','96mxDVpC','values','VeevaComponentRelationshipDto','veevaService','retrieve','646046MygdnC','(((.+)+)+)+$','search'];a323_0xe26f=function(){return _0x3fd2a1;};return a323_0xe26f();}const a323_0x13ee33=a323_0xd116;(function(_0x44388b,_0x450043){const _0x383935=a323_0xd116,_0x4349d5=_0x44388b();while(!![]){try{const _0xa59e2f=parseInt(_0x383935(0xb9))/0x1*(parseInt(_0x383935(0xb1))/0x2)+parseInt(_0x383935(0xc1))/0x3+parseInt(_0x383935(0xab))/0x4*(-parseInt(_0x383935(0xc5))/0x5)+-parseInt(_0x383935(0xac))/0x6*(parseInt(_0x383935(0xa8))/0x7)+-parseInt(_0x383935(0xaa))/0x8*(-parseInt(_0x383935(0xb6))/0x9)+-parseInt(_0x383935(0xb8))/0xa+-parseInt(_0x383935(0xc0))/0xb;if(_0xa59e2f===_0x450043)break;else _0x4349d5['push'](_0x4349d5['shift']());}catch(_0x33b587){_0x4349d5['push'](_0x4349d5['shift']());}}}(a323_0xe26f,0xd6936));const a323_0x5def35=(function(){let _0x191593=!![];return function(_0x27a473,_0x342823){const _0x1dcb40=_0x191593?function(){const _0x15e665=a323_0xd116;if(_0x342823){const _0x4a8395=_0x342823[_0x15e665(0xbe)](_0x27a473,arguments);return _0x342823=null,_0x4a8395;}}:function(){};return _0x191593=![],_0x1dcb40;};}()),a323_0x218b39=a323_0x5def35(this,function(){const _0x20a355=a323_0xd116;return a323_0x218b39['toString']()['search'](_0x20a355(0xb2))[_0x20a355(0xb7)]()[_0x20a355(0xba)](a323_0x218b39)[_0x20a355(0xb3)](_0x20a355(0xb2));});a323_0x218b39();'use strict';Object[a323_0x13ee33(0xc3)](exports,a323_0x13ee33(0xbc),{'value':!![]}),exports['BaseVeevaComponentRelationshipRetriever']=void 0x0;function a323_0xd116(_0x24c395,_0x525ff5){const _0x27910e=a323_0xe26f();return a323_0xd116=function(_0x218b39,_0x5def35){_0x218b39=_0x218b39-0xa7;let _0xe26f30=_0x27910e[_0x218b39];return _0xe26f30;},a323_0xd116(_0x24c395,_0x525ff5);}const veeva_component_relationship_dto_1=require(a323_0x13ee33(0xa7));class BaseVeevaComponentRelationshipRetriever{constructor({value:_0x44816c,veevaService:_0x435d86}){const _0x1cc8bd=a323_0x13ee33;this[_0x1cc8bd(0xc2)]=_0x44816c,this[_0x1cc8bd(0xaf)]=_0x435d86;}[a323_0x13ee33(0xb4)](_0x3a7aa9){const _0x50ecb6=a323_0x13ee33;return _0x50ecb6(0xbf)+_0x3a7aa9;}[a323_0x13ee33(0xc4)](_0xed5b3e){const _0x4c48dc=a323_0x13ee33,_0x4d95dc=_0xed5b3e['reduce']((_0x3dedf6,_0x5a69bb)=>_0x3dedf6['set'](_0x5a69bb['sourceComponentId']+'.'+_0x5a69bb[_0x4c48dc(0xb5)],_0x5a69bb),new Map());return[..._0x4d95dc[_0x4c48dc(0xad)]()];}[a323_0x13ee33(0xa9)](_0x2251cc){const _0x560499=a323_0x13ee33;return _0x2251cc[_0x560499(0xbd)](_0x483ce2=>new veeva_component_relationship_dto_1[(_0x560499(0xae))](_0x483ce2));}async[a323_0x13ee33(0xb0)](){const _0x3fae7b=a323_0x13ee33,_0xd87573=this[_0x3fae7b(0xbb)](),_0x25eed7=await this[_0x3fae7b(0xaf)]['executeManyVQL'](_0xd87573),_0x401c78=this['formComponents'](_0x25eed7);return this['deleteDuplicates'](_0x401c78);}}exports[a323_0x13ee33(0xc6)]=BaseVeevaComponentRelationshipRetriever;