function a275_0x4435(){const _0x4291d5=['message','./classes/retrieve-metadata','2362824TZQHLg','constructor','258498yvodme','Job','609213TpfrKP','184550hQzSGi','108720wkNCnr','Logger','error','setError','execute','toString','../../../core','slice','Retrieve\x20metadata\x20job\x20has\x20been\x20failed','(((.+)+)+)+$','1aIXnlx','minimist','24wXBDcg','jobId','apply','setInProgress','306DyCHKb','catch','1856050myOquM','42EbIMPH','51702uKSXjx','setCompleted','jobStorePath','88HKwITG','search','__esModule','exit','log','default','./classes/logger','argv'];a275_0x4435=function(){return _0x4291d5;};return a275_0x4435();}const a275_0x9a9722=a275_0x3407;(function(_0x580496,_0x1417f9){const _0xe95013=a275_0x3407,_0x132318=_0x580496();while(!![]){try{const _0x1eaea5=-parseInt(_0xe95013(0x13f))/0x1*(parseInt(_0xe95013(0x15b))/0x2)+parseInt(_0xe95013(0x149))/0x3*(parseInt(_0xe95013(0x14c))/0x4)+parseInt(_0xe95013(0x147))/0x5+-parseInt(_0xe95013(0x158))/0x6*(parseInt(_0xe95013(0x148))/0x7)+parseInt(_0xe95013(0x156))/0x8+-parseInt(_0xe95013(0x145))/0x9*(parseInt(_0xe95013(0x15c))/0xa)+parseInt(_0xe95013(0x15a))/0xb*(-parseInt(_0xe95013(0x141))/0xc);if(_0x1eaea5===_0x1417f9)break;else _0x132318['push'](_0x132318['shift']());}catch(_0x3210b5){_0x132318['push'](_0x132318['shift']());}}}(a275_0x4435,0x345fc));const a275_0x3cab15=(function(){let _0x54eda0=!![];return function(_0x1b51c7,_0x1d2d92){const _0xbf4c63=_0x54eda0?function(){const _0x364aa6=a275_0x3407;if(_0x1d2d92){const _0x253754=_0x1d2d92[_0x364aa6(0x143)](_0x1b51c7,arguments);return _0x1d2d92=null,_0x253754;}}:function(){};return _0x54eda0=![],_0xbf4c63;};}()),a275_0x57f899=a275_0x3cab15(this,function(){const _0x3e0dcc=a275_0x3407;return a275_0x57f899[_0x3e0dcc(0x161)]()[_0x3e0dcc(0x14d)](_0x3e0dcc(0x13e))[_0x3e0dcc(0x161)]()[_0x3e0dcc(0x157)](a275_0x57f899)[_0x3e0dcc(0x14d)](_0x3e0dcc(0x13e));});function a275_0x3407(_0x21933f,_0x3a5127){const _0x50a426=a275_0x4435();return a275_0x3407=function(_0x57f899,_0x3cab15){_0x57f899=_0x57f899-0x13c;let _0x443557=_0x50a426[_0x57f899];return _0x443557;},a275_0x3407(_0x21933f,_0x3a5127);}a275_0x57f899();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x9b7cc6){const _0x595650=a275_0x3407;return _0x9b7cc6&&_0x9b7cc6[_0x595650(0x14e)]?_0x9b7cc6:{'default':_0x9b7cc6};};Object['defineProperty'](exports,a275_0x9a9722(0x14e),{'value':!![]}),exports[a275_0x9a9722(0x159)]=void 0x0;const minimist_1=__importDefault(require(a275_0x9a9722(0x140))),state_manger_1=__importDefault(require('../../shared/managers/state-manger')),core_1=require(a275_0x9a9722(0x162)),logger_1=__importDefault(require(a275_0x9a9722(0x152))),retrieve_metadata_1=__importDefault(require(a275_0x9a9722(0x155)));class Job{constructor(){const _0x31f6c6=a275_0x9a9722,{jobId:_0x52b397,jobStorePath:_0x3e4f88}=(0x0,minimist_1[_0x31f6c6(0x151)])(process[_0x31f6c6(0x153)][_0x31f6c6(0x13c)](0x2));this[_0x31f6c6(0x14b)]=_0x3e4f88,this['jobId']=_0x52b397;}async[a275_0x9a9722(0x160)](){const _0x438fea=a275_0x9a9722,_0x410f0c=new core_1[(_0x438fea(0x15d))](this[_0x438fea(0x142)]),_0x4ee093=new logger_1[(_0x438fea(0x151))](this[_0x438fea(0x142)],_0x410f0c),_0x3286c3=await new state_manger_1[(_0x438fea(0x151))](this[_0x438fea(0x14b)])['init']();await _0x4ee093[_0x438fea(0x150)]('Retrieve\x20metadata\x20job\x20has\x20been\x20started');try{await _0x3286c3[_0x438fea(0x144)](),await new retrieve_metadata_1['default'](this[_0x438fea(0x14b)],_0x4ee093,_0x3286c3)[_0x438fea(0x160)](),await _0x3286c3[_0x438fea(0x14a)](),await _0x4ee093[_0x438fea(0x150)]('Retrieve\x20metadata\x20job\x20has\x20been\x20completed');}catch(_0x80e775){await _0x3286c3[_0x438fea(0x15f)](_0x80e775),await _0x4ee093['error'](_0x438fea(0x13d)),await _0x4ee093[_0x438fea(0x15e)](_0x80e775[_0x438fea(0x154)]);}}}exports[a275_0x9a9722(0x159)]=Job,new Job()[a275_0x9a9722(0x160)]()['then'](()=>process[a275_0x9a9722(0x14f)](0x0))[a275_0x9a9722(0x146)](()=>process[a275_0x9a9722(0x14f)](0x1));