(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2e9a":function(t,e,n){},"4e9d":function(t,e,n){"use strict";(function(t){n("80d4"),n("921b");a(n("66fd"));var e=a(n("8f40"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},5064:function(t,e,n){"use strict";var a=n("2e9a"),o=n.n(a);o.a},"8f40":function(t,e,n){"use strict";n.r(e);var a=n("cb94"),o=n("f13c");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("5064");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"9ab5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("b8b3")),o=r(n("7b42")),i=r(n("dbe8")),u=r(n("8de6"));n("1140");function r(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{query:"",result:"",langkeys:Object.keys(a.default.language).map(function(t,e){return{index:e,type:t,value:a.default.language[t]}}),originLang:{type:"auto",value:"自动检测"},targetLang:{type:"en",value:"英语"}}},computed:{},onLoad:function(){},methods:{clearQuery:function(t){this.query=""},changeOrigin:function(t){this.originLang=this.langkeys[t.detail.value]},changeTarget:function(e){"auto"!==this.langkeys[e.detail.value].type?this.targetLang=this.langkeys[e.detail.value]:t.showToast({icon:"none",title:"目标不允许自动检测",position:"bottom"})},translate:function(){var e=this;this.query.trim()?(t.showLoading({title:"翻译中...",mask:!0}),(0,o.default)({url:(0,i.default)({from:this.originLang.type,to:this.targetLang.type,query:this.query.trim()})}).then(function(n){if(200!==n.statusCode||n.data.error_code)t.showToast({title:n.data.error_code+"",icon:"error",success:function(){t.hideLoading()}});else{var o=n.data.trans_result,i=o.reduce(function(t,e){return"".concat(t).concat(e.dst,"\n")},"");e.result=i,t.hideLoading();var r=u.default.get(a.default.hiskey);r.unshift({origin:e.query.trim(),target:i});u.default.set(a.default.hiskey,r)}})):t.showToast({title:"内容为空",icon:"none",position:"bottom"})},copyResult:function(){t.setClipboardData({data:this.result,success:function(){t.showToast({title:"复制成功",icon:"none",position:"bottom"})}})},reverseLang:function(){if("auto"!==this.originLang.type){var e=this.originLang;this.originLang=this.targetLang,this.targetLang=e}else t.showToast({title:"自动检测不允许反转",icon:"none",position:"bottom"})},onShareAppMessage:function(e){return{title:"非常好用的翻译工具",path:"/pages/index/index",success:function(e){t.showToast({title:"分享成功"}),console.log(e)},fail:function(e){t.showToast({title:"分享失败",icon:"error"}),console.log(e)}}}}};e.default=s}).call(this,n("543d")["default"])},cb94:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.query.trim());t.$mp.data=Object.assign({},{$root:{g0:n}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},f13c:function(t,e,n){"use strict";n.r(e);var a=n("9ab5"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["4e9d","common/runtime","common/vendor"]]]);