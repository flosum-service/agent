const a297_0xf726e3=a297_0x4295;(function(_0x56e1fc,_0x131542){const _0x749e30=a297_0x4295,_0x46506e=_0x56e1fc();while(!![]){try{const _0x158a4e=parseInt(_0x749e30(0x115))/0x1+parseInt(_0x749e30(0x101))/0x2*(parseInt(_0x749e30(0x116))/0x3)+-parseInt(_0x749e30(0xf2))/0x4*(-parseInt(_0x749e30(0x107))/0x5)+-parseInt(_0x749e30(0xec))/0x6*(-parseInt(_0x749e30(0x100))/0x7)+-parseInt(_0x749e30(0xf6))/0x8+-parseInt(_0x749e30(0xf3))/0x9*(-parseInt(_0x749e30(0xfe))/0xa)+-parseInt(_0x749e30(0x114))/0xb*(parseInt(_0x749e30(0x109))/0xc);if(_0x158a4e===_0x131542)break;else _0x46506e['push'](_0x46506e['shift']());}catch(_0x425693){_0x46506e['push'](_0x46506e['shift']());}}}(a297_0x3052,0x25ea4));const a297_0x7d4f43=(function(){let _0x33012d=!![];return function(_0x595d99,_0x27ed44){const _0x26272b=_0x33012d?function(){const _0x5d33f1=a297_0x4295;if(_0x27ed44){const _0x2e8436=_0x27ed44[_0x5d33f1(0x119)](_0x595d99,arguments);return _0x27ed44=null,_0x2e8436;}}:function(){};return _0x33012d=![],_0x26272b;};}()),a297_0x4b3d70=a297_0x7d4f43(this,function(){const _0x464a0b=a297_0x4295;return a297_0x4b3d70[_0x464a0b(0x112)]()[_0x464a0b(0x104)](_0x464a0b(0x111))[_0x464a0b(0x112)]()[_0x464a0b(0x108)](a297_0x4b3d70)[_0x464a0b(0x104)](_0x464a0b(0x111));});a297_0x4b3d70();'use strict';function a297_0x4295(_0x2142a8,_0x577646){const _0x2cebde=a297_0x3052();return a297_0x4295=function(_0x4b3d70,_0x7d4f43){_0x4b3d70=_0x4b3d70-0xe9;let _0x3052ce=_0x2cebde[_0x4b3d70];return _0x3052ce;},a297_0x4295(_0x2142a8,_0x577646);}Object[a297_0xf726e3(0xef)](exports,'__esModule',{'value':!![]}),exports[a297_0xf726e3(0xf9)]=void 0x0;const constants_1=require(a297_0xf726e3(0x113)),salesforce_1=require(a297_0xf726e3(0x106)),stream_1=require(a297_0xf726e3(0xf5)),EXTERNAL_ID_FIELD='Id',CONTENT_TYPE=a297_0xf726e3(0xed),TRACKING_ORGANIZATION_LOG_NAME=a297_0xf726e3(0xf0);class Logger{constructor({systemLogger:_0x5be723,apiVersion:_0x1526f6,instance:_0x36f873,metadataLogId:_0x596e26}){const _0x5607de=a297_0xf726e3;this[_0x5607de(0xff)]=[],this[_0x5607de(0xf8)]=_0x5be723,this[_0x5607de(0x105)]=_0x1526f6,this[_0x5607de(0x110)]=_0x36f873,this[_0x5607de(0xfb)]=_0x596e26;}async[a297_0xf726e3(0x11a)](){const _0x10afe8=a297_0xf726e3,_0x5c5a00={'attributes':{'type':constants_1['ATTACHMENT_OBJECT_NAME'],'binaryPartName':TRACKING_ORGANIZATION_LOG_NAME,'binaryPartNameAlias':constants_1['BINARY_FIELD_NAME']},'Id':this[_0x10afe8(0x10f)]||null,'Name':TRACKING_ORGANIZATION_LOG_NAME,'ContentType':CONTENT_TYPE,'ParentId':this[_0x10afe8(0xfb)],'Body':TRACKING_ORGANIZATION_LOG_NAME},_0x354595={'binaryFieldName':constants_1['BINARY_FIELD_NAME'],'name':TRACKING_ORGANIZATION_LOG_NAME,'value':stream_1['Readable']['from'](this[_0x10afe8(0xff)])};return{'records':[_0x5c5a00],'binary':[_0x354595]};}async[a297_0xf726e3(0xf7)](_0x1bd2b1){const _0x5711be=a297_0xf726e3,_0x29ab21=new salesforce_1[(_0x5711be(0xfd))]({'instance':this[_0x5711be(0x110)],'objectName':constants_1[_0x5711be(0xfc)],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0x5711be(0x105)]});return _0x29ab21['execute'](_0x1bd2b1);}[a297_0xf726e3(0xe9)](){const _0x5f210a=a297_0xf726e3,_0x5f54e1=new Date(new Date()[_0x5f210a(0xf1)]('en-US',{'timeZone':this[_0x5f210a(0xee)]})),_0x402906={'year':_0x5f54e1['getFullYear'](),'month':_0x5f54e1['getMonth'](),'day':_0x5f54e1[_0x5f210a(0x10a)](),'hours':_0x5f54e1[_0x5f210a(0x117)](),'minutes':_0x5f54e1[_0x5f210a(0x118)](),'seconds':_0x5f54e1[_0x5f210a(0x102)]()};for(const [_0x20cf8d,_0x1ba410]of Object[_0x5f210a(0x10e)](_0x402906)){_0x402906[_0x20cf8d]=_0x1ba410<0xa?'0'+_0x1ba410:''+_0x1ba410;}const {year:_0x280096,month:_0x3732c6,day:_0x5693cf,hours:_0x59ba05,minutes:_0x4814d5,seconds:_0x427ab9}=_0x402906;return _0x280096+'-'+_0x3732c6+'-'+_0x5693cf+'\x20'+_0x59ba05+':'+_0x4814d5+':'+_0x427ab9;}async[a297_0xf726e3(0xeb)](){const _0x45c78f=a297_0xf726e3;if(this[_0x45c78f(0xff)][_0x45c78f(0x11b)]){const _0x823360=await this['createAttachment'](),_0x4ba073=await this['deployAttachment'](_0x823360),_0x811b4b=_0x4ba073['at'](0x0);if(_0x811b4b===null||_0x811b4b===void 0x0?void 0x0:_0x811b4b['success'])this[_0x45c78f(0x10f)]=_0x811b4b['id'];else throw new Error(_0x45c78f(0xfa)+(_0x811b4b===null||_0x811b4b===void 0x0?void 0x0:_0x811b4b[_0x45c78f(0xf4)]));}}[a297_0xf726e3(0xea)](_0x67b55f){const _0x3dd5f8=a297_0xf726e3;this['systemLogger'][_0x3dd5f8(0xea)](_0x67b55f),this[_0x3dd5f8(0xff)]['push'](this['getTimeString']()+'\x20[INFO]\x20'+_0x67b55f+'\x20\x0a');}[a297_0xf726e3(0xf4)](_0x1df1aa){const _0x57189c=a297_0xf726e3;this['systemLogger'][_0x57189c(0xf4)](_0x1df1aa),this[_0x57189c(0xff)][_0x57189c(0x10c)](this[_0x57189c(0xe9)]()+_0x57189c(0x10d)+_0x1df1aa+'\x20\x0a');}[a297_0xf726e3(0x103)](_0x22cf04){const _0x328235=a297_0xf726e3;this[_0x328235(0xf8)][_0x328235(0xf4)](_0x22cf04),this[_0x328235(0xff)]['push'](this['getTimeString']()+_0x328235(0x10b)+_0x22cf04+'\x20\x0a');}}exports[a297_0xf726e3(0xf9)]=Logger;function a297_0x3052(){const _0xe94758=['toString','../../../constants','14674aVOPaH','201935ivrDDJ','99555CqRwdi','getHours','getMinutes','apply','createAttachment','length','getTimeString','log','update','31722FlZvNz','text/plain','timeZone','defineProperty','Tracking\x20Organization\x20Log','toLocaleString','4ouXMRI','252ZAKjwj','error','stream','903944fLJNUb','deployAttachment','systemLogger','Logger','Update\x20metadata\x20log\x20attachment\x20error\x20\x0a','metadataLogId','ATTACHMENT_OBJECT_NAME','CompositeBinaryDeployData','89310adnRiy','messages','77Lnbyph','10qTtPuS','getSeconds','warning','search','apiVersion','@flosum/salesforce','135460wXvNXK','constructor','3912guUBcf','getDate','\x20[WARNING]\x20','push','\x20[ERROR]\x20','entries','attachmentId','instance','(((.+)+)+)+$'];a297_0x3052=function(){return _0xe94758;};return a297_0x3052();}