const a76_0x43c6bf=a76_0x2e1d;(function(_0x1a5fa5,_0x235b5a){const _0x2b8609=a76_0x2e1d,_0x549e45=_0x1a5fa5();while(!![]){try{const _0x4b9e76=-parseInt(_0x2b8609(0x16f))/0x1*(parseInt(_0x2b8609(0x175))/0x2)+parseInt(_0x2b8609(0x17a))/0x3*(parseInt(_0x2b8609(0x164))/0x4)+-parseInt(_0x2b8609(0x17b))/0x5*(-parseInt(_0x2b8609(0x168))/0x6)+parseInt(_0x2b8609(0x16c))/0x7*(-parseInt(_0x2b8609(0x179))/0x8)+parseInt(_0x2b8609(0x17e))/0x9+-parseInt(_0x2b8609(0x172))/0xa+parseInt(_0x2b8609(0x171))/0xb;if(_0x4b9e76===_0x235b5a)break;else _0x549e45['push'](_0x549e45['shift']());}catch(_0x1cc3e2){_0x549e45['push'](_0x549e45['shift']());}}}(a76_0x5e84,0x8200d));const a76_0x226cd0=(function(){let _0x4e6a7e=!![];return function(_0x145276,_0x41fe73){const _0x512fa4=_0x4e6a7e?function(){const _0x7b4a13=a76_0x2e1d;if(_0x41fe73){const _0x1b09d6=_0x41fe73[_0x7b4a13(0x17f)](_0x145276,arguments);return _0x41fe73=null,_0x1b09d6;}}:function(){};return _0x4e6a7e=![],_0x512fa4;};}()),a76_0x19dae0=a76_0x226cd0(this,function(){const _0x367b8a=a76_0x2e1d;return a76_0x19dae0['toString']()['search'](_0x367b8a(0x17c))[_0x367b8a(0x16d)]()[_0x367b8a(0x178)](a76_0x19dae0)[_0x367b8a(0x163)](_0x367b8a(0x17c));});a76_0x19dae0();'use strict';Object['defineProperty'](exports,a76_0x43c6bf(0x16a),{'value':!![]}),exports[a76_0x43c6bf(0x16b)]=void 0x0;const stream_1=require(a76_0x43c6bf(0x167)),salesforce_1=require('@flosum/salesforce'),constants_1=require('../../constants'),FIELD_ID='Id';function a76_0x5e84(){const _0x227729=['Readable','baseRetrievePayload','55494crvhqN','destroy','queryBuilder','constructor','16pGJrWR','3guphYa','35vbfcad','(((.+)+)+)+$','where','454023gAyVxs','apply','fields','search','1749908dtTDEO','request','objectName','stream','302052YDYZcs','from','__esModule','BaseRetrieve','388409yoGyIu','toString','whereClause','20oXqFiS','_read','9996118kpdOjs','5506490ZcRCpx'];a76_0x5e84=function(){return _0x227729;};return a76_0x5e84();}class BaseRetrieve extends stream_1[a76_0x43c6bf(0x173)]{constructor({request:_0x55e9e1,fields:_0x197ebe,whereClause:_0x49b45a,objectName:_0x3348a4,describe:_0x566070}){const _0x4c7e98=a76_0x43c6bf;super({'objectMode':!![]}),this[_0x4c7e98(0x177)]=new salesforce_1['QueryBuilder']()['select'](FIELD_ID,..._0x197ebe)[_0x4c7e98(0x169)](_0x3348a4),_0x49b45a&&this['queryBuilder'][_0x4c7e98(0x17d)](''+_0x49b45a),this[_0x4c7e98(0x165)]=_0x55e9e1,this[_0x4c7e98(0x180)]=_0x197ebe,this[_0x4c7e98(0x16e)]=_0x49b45a,this[_0x4c7e98(0x166)]=_0x3348a4,this['describe']=_0x566070;}get[a76_0x43c6bf(0x174)](){const _0x102a1b=a76_0x43c6bf;return{'queryBuilder':this[_0x102a1b(0x177)],'instance':this[_0x102a1b(0x165)],'api':constants_1['SALESFORCE_API_VERSION']};}async[a76_0x43c6bf(0x170)](){const _0x190dd5=a76_0x43c6bf;try{await this['pull']();}catch(_0x27d316){this[_0x190dd5(0x176)](_0x27d316);}}}function a76_0x2e1d(_0xf145c7,_0x111ba7){const _0x35b57e=a76_0x5e84();return a76_0x2e1d=function(_0x19dae0,_0x226cd0){_0x19dae0=_0x19dae0-0x163;let _0x5e840d=_0x35b57e[_0x19dae0];return _0x5e840d;},a76_0x2e1d(_0xf145c7,_0x111ba7);}exports[a76_0x43c6bf(0x16b)]=BaseRetrieve;