(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chushouxinxi/detail"],{"0f0b":function(t,e,n){"use strict";n.r(e);var a=n("919c"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=r.a},3678:function(t,e,n){"use strict";n.r(e);var a=n("cde7"),r=n("0f0b");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("6758");var i,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},6758:function(t,e,n){"use strict";var a=n("fc47"),r=n.n(a);r.a},"898d":function(t,e,n){"use strict";(function(t){n("9944");a(n("66fd"));var e=a(n("3678"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"919c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,r,s,i){try{var u=t[s](i),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(a,r)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function u(t){s(i,a,r,u,o,"next",t)}function o(t){s(i,a,r,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id,t.userid&&(e.userid=t.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return i(a.default.mark((function e(){var r,s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),r=t.getStorageSync("nowTable"),e.next=4,n.$api.session(r);case 4:s=e.sent,n.user=s.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),n.getStoreup();case 8:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","chushouxinxi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=this;return i(a.default.mark((function e(){var n,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,limit:1,refid:t.id,tablename:"chushouxinxi",userid:t.user.id,type:1},e.next=3,t.$api.list("storeup",n);case 3:r=e.sent,t.storeupFlag=r.data.list.length;case 5:case"end":return e.stop()}}),e)})))()},shoucang:function(){var e=this;return i(a.default.mark((function n(){var r,s,u,o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e,s={page:1,limit:1,refid:r.detail.id,tablename:"chushouxinxi",userid:r.user.id,type:1},n.next=4,r.$api.list("storeup",s);case 4:if(u=n.sent,1!=u.data.list.length){n.next=9;break}return o=u.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=i(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,r.$api.del("storeup",JSON.stringify([o]));case 3:r.$utils.msg("取消成功"),r.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),n.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=i(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.shangpinmingcheng,picture:r.swiperList[0],refid:r.detail.id,tablename:"chushouxinxi",type:1});case 3:r.$utils.msg("收藏成功"),r.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return n.stop()}}),n)})))()},onAcrossTap:function(e,n,a,r,s){if("是"!=n||"是"==this.detail.sfsh){if(t.setStorageSync("crossTable","chushouxinxi"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",s),t.setStorageSync("tips",r),""!=a&&!a.startsWith("[")){var i=t.getStorageSync("crossObj");for(var u in i)if(u==a&&i[u]==s)return void this.$utils.msg(r)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=this;return i(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("chushouxinxi",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.shangpinfengmian?t.detail.shangpinfengmian.split(","):[],t.detail.shangpinxiangqing=t.detail.shangpinxiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.endSuccess(t.size,e.hasNext);case 1:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../discusschushouxinxi/add-or-update?refid=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("chushouxinxi",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},cde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"0161"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"e60f"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("chushouxinxi","审核")),a=t.isAuthFront("chushouxinxi","审核");t.$mp.data=Object.assign({},{$root:{m0:n,m1:a}})},s=[]},fc47:function(t,e,n){}},[["898d","common/runtime","common/vendor"]]]);