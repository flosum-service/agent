const a215_0x3e0e23=a215_0x526c;(function(_0x5ce9a7,_0x3c7a16){const _0x482c2f=a215_0x526c,_0x259639=_0x5ce9a7();while(!![]){try{const _0x426233=parseInt(_0x482c2f(0x99))/0x1*(parseInt(_0x482c2f(0x93))/0x2)+-parseInt(_0x482c2f(0x9d))/0x3*(parseInt(_0x482c2f(0x9c))/0x4)+parseInt(_0x482c2f(0xab))/0x5+parseInt(_0x482c2f(0xa5))/0x6+parseInt(_0x482c2f(0xa7))/0x7+parseInt(_0x482c2f(0xaa))/0x8+parseInt(_0x482c2f(0x89))/0x9*(-parseInt(_0x482c2f(0x83))/0xa);if(_0x426233===_0x3c7a16)break;else _0x259639['push'](_0x259639['shift']());}catch(_0x26cc21){_0x259639['push'](_0x259639['shift']());}}}(a215_0x2368,0x3dee5));const a215_0x40f749=(function(){let _0x3d288c=!![];return function(_0x294d9e,_0x3af3a7){const _0x155ebf=_0x3d288c?function(){const _0x2576a2=a215_0x526c;if(_0x3af3a7){const _0x5e4795=_0x3af3a7[_0x2576a2(0x91)](_0x294d9e,arguments);return _0x3af3a7=null,_0x5e4795;}}:function(){};return _0x3d288c=![],_0x155ebf;};}()),a215_0x372260=a215_0x40f749(this,function(){const _0x2f7d58=a215_0x526c;return a215_0x372260[_0x2f7d58(0x8a)]()['search'](_0x2f7d58(0x8e))['toString']()[_0x2f7d58(0x95)](a215_0x372260)['search']('(((.+)+)+)+$');});function a215_0x526c(_0x44bc5d,_0x1726ba){const _0x2a54e8=a215_0x2368();return a215_0x526c=function(_0x372260,_0x40f749){_0x372260=_0x372260-0x83;let _0x2368c3=_0x2a54e8[_0x372260];return _0x2368c3;},a215_0x526c(_0x44bc5d,_0x1726ba);}a215_0x372260();'use strict';Object[a215_0x3e0e23(0x94)](exports,a215_0x3e0e23(0x9a),{'value':!![]}),exports[a215_0x3e0e23(0xa3)]=void 0x0;function a215_0x2368(){const _0x3e05c5=['13037XLscLr','__esModule','publisherInputs','164LRUElp','5835vQGgyJ','BadRequestError','request','delete','projectId','fromAzure','AzureHookService','/_apis/hooks/subscriptions','1939818rHCswD','getProjectId','2467297BGOHiH','getAll','NotFoundError','4005800LExuHJ','1670235bzyjKz','value','/_apis/hooks/subscriptions/','60HTCtfg','../../../../../core/errors/bad-request.error','map','createRequest','getOne','GitHookService','2195919QeRuur','toString','api','organization','patch','(((.+)+)+)+$','post','./git-hook.service','apply','credentials','44xlpDUR','defineProperty','constructor','get','update','HookDto'];a215_0x2368=function(){return _0x3e05c5;};return a215_0x2368();}const bad_request_error_1=require(a215_0x3e0e23(0x84)),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a215_0x3e0e23(0x90));class AzureHookService extends git_hook_service_1[a215_0x3e0e23(0x88)]{constructor(_0x19ae7c,_0x1f4493,_0x4044e9,_0x30710e){const _0x48671d=a215_0x3e0e23;super(_0x19ae7c),this[_0x48671d(0xa1)]=_0x1f4493,this[_0x48671d(0x8b)]=_0x4044e9,this[_0x48671d(0x92)]=_0x30710e,this['request']=this['createRequest']();}get[a215_0x3e0e23(0x8c)](){const _0x5dabfa=a215_0x3e0e23;return this[_0x5dabfa(0x92)]['organization'];}['createRequest'](){const _0x3e418b=a215_0x3e0e23;return this[_0x3e418b(0x8b)][_0x3e418b(0x86)]();}[a215_0x3e0e23(0xa6)](){return this['projectId'];}async['create'](_0x10ebf6){const _0x2e6684=a215_0x3e0e23;try{const _0x4dc5bf=await this['request'][_0x2e6684(0x8f)](this[_0x2e6684(0x8c)]+_0x2e6684(0xa4),_0x10ebf6);return hook_dto_1[_0x2e6684(0x98)]['fromAzure'](_0x4dc5bf);}catch(_0x5e8956){throw new bad_request_error_1[(_0x2e6684(0x9e))](_0x5e8956);}}async[a215_0x3e0e23(0x87)](_0x1eee02){const _0x512b96=a215_0x3e0e23;try{const _0x24a764=await this[_0x512b96(0x9f)][_0x512b96(0x96)](this['organization']+'/_apis/hooks/subscriptions/'+_0x1eee02);return hook_dto_1[_0x512b96(0x98)][_0x512b96(0xa2)](_0x24a764);}catch(_0x520dd7){throw new not_found_error_1[(_0x512b96(0xa9))](_0x520dd7);}}async[a215_0x3e0e23(0xa8)](){const _0x86521e=a215_0x3e0e23;try{const _0x5e085d=await this[_0x86521e(0x9f)][_0x86521e(0x96)](this['organization']+_0x86521e(0xa4));return _0x5e085d[_0x86521e(0xac)]['filter'](_0x4e9b94=>{const _0x17bb64=_0x86521e;var _0x5909a2;return((_0x5909a2=_0x4e9b94===null||_0x4e9b94===void 0x0?void 0x0:_0x4e9b94[_0x17bb64(0x9b)])===null||_0x5909a2===void 0x0?void 0x0:_0x5909a2[_0x17bb64(0xa1)])===this['projectId'];})[_0x86521e(0x85)](_0x139e42=>hook_dto_1[_0x86521e(0x98)][_0x86521e(0xa2)](_0x139e42));}catch(_0x5a03f6){throw new not_found_error_1[(_0x86521e(0xa9))](_0x5a03f6);}}async[a215_0x3e0e23(0x97)](_0x5a4cba,_0x5df365){const _0x8de051=a215_0x3e0e23;try{const _0x1f3e20=await this['request'][_0x8de051(0x8d)](this[_0x8de051(0x8c)]+_0x8de051(0xad)+_0x5a4cba,_0x5df365);return hook_dto_1[_0x8de051(0x98)]['fromGithub'](_0x1f3e20);}catch(_0x4c10d1){throw new bad_request_error_1[(_0x8de051(0x9e))](_0x4c10d1);}}async[a215_0x3e0e23(0xa0)](_0xadd3fc){const _0x3db7c5=a215_0x3e0e23;try{await this['request']['delete'](this[_0x3db7c5(0x8c)]+_0x3db7c5(0xad)+_0xadd3fc);}catch(_0x3e5db4){throw new bad_request_error_1[(_0x3db7c5(0x9e))](_0x3e5db4);}}}exports[a215_0x3e0e23(0xa3)]=AzureHookService;