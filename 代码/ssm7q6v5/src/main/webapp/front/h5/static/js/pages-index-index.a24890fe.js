(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(e,i,r){"use strict";var t=r("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,r("ac4d"),r("8a81"),r("ac6a"),r("96cf");var a=t(r("3b8d")),o=t(r("2971"));r("651d");var d=t(r("b704")),n={components:{uniIcons:d.default},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],shangpinxinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var i,r,t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:r=e.sent,this.user=r.data,this.tableName=i,t=o.default.list(),this.menuList=t,this.menuList.forEach((function(e,i){a.role==e.roleName&&e.frontMenu.forEach((function(e,i){e.child[0].buttons.indexOf("查看")>-1&&a.swiperMenuList.push(e)}))}));case 10:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),onShow:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var i,r,t,a,o,d,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=[],e.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(r=e.sent,t=!0,a=!1,o=void 0,e.prev=7,d=r.data.list[Symbol.iterator]();!(t=(n=d.next()).done);t=!0)l=n.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&i.push({img:l.value,title:l.name});e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](7),a=!0,o=e.t0;case 15:e.prev=15,e.prev=16,t||null==d.return||d.return();case 18:if(e.prev=18,!a){e.next=21;break}throw o;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return i&&(this.swiperList=i),e.next=26,this.$api.list("news",{page:1,limit:6});case 26:return r=e.sent,this.news=r.data.list,e.next=30,this.$api.recommend("shangpinxinxi",{page:1,limit:4});case 30:r=e.sent,this.shangpinxinxilist=r.data.list;case 32:case"end":return e.stop()}}),e,this,[[7,11,15,23],[16,,18,22]])})));function i(){return e.apply(this,arguments)}return i}(),methods:{onSwiperTap:function(e){},onNewsDetailTap:function(e){this.$utils.jump("../news-detail/news-detail?id=".concat(e))},onDetailTap:function(e,i){this.$utils.jump("../".concat(e,"/detail?id=").concat(i))},onPageTap:function(e){uni.navigateTo({url:"../".concat(e,"/list"),fail:function(){uni.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){uni.setStorageSync("useridTag",0),uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};i.default=n},5613:function(e,i,r){"use strict";var t=r("dce8"),a=r.n(t);a.a},80690:function(e,i,r){"use strict";r.r(i);var t=r("0d9b"),a=r.n(t);for(var o in t)"default"!==o&&function(e){r.d(i,e,(function(){return t[e]}))}(o);i["default"]=a.a},dce8:function(e,i,r){var t=r("dee6");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=r("4f06").default;a("3ee3f8a1",t,!0,{sourceMap:!1,shadowMode:!1})},dee6:function(e,i,r){var t=r("24fb");i=t(!1),i.push([e.i,'uni-page-body[data-v-8103870a]{background:#f8f8f8}.uni-padding-wrap[data-v-8103870a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-view[data-v-8103870a]{\n\t\t/* font-family: \'\\5FAE\\8F6F\\96C5\\9ED1\'; */font-size:%?30?%}.header[data-v-8103870a]{background:#eee;padding:0 0 %?300?% 0;margin-bottom:%?20?%;position:relative}.ssbox[data-v-8103870a]{background:hsla(0,0%,100%,.35);width:%?530?%;border-radius:%?60?%;padding:%?10?% %?15?%;box-sizing:border-box}.ss_input[data-v-8103870a]{border:none;width:%?450?%;font-size:%?30?%;color:#fff;background:none;height:%?45?%;line-break:%?45?%}.headerb[data-v-8103870a]{position:absolute;left:0;width:100%;box-sizing:border-box}.headerb uni-image[data-v-8103870a]{width:100%;position:relative;z-index:10}.headerb .swiper[data-v-8103870a]{height:%?300?%}.swiper[data-v-8103870a] .uni-swiper-dot{width:%?16?%;height:%?16?%;broder-radius:50%}.notice[data-v-8103870a]{position:relative;z-index:5;padding:0 %?50?%}.noticem[data-v-8103870a]{background:#fff;padding:%?55?% %?30?% %?15?%;border-radius:%?10?%;margin-top:%?-45?%}.noticer[data-v-8103870a]{width:%?480?%;height:%?50?%}.noticer .swiper-item[data-v-8103870a]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;height:%?50?%;line-height:%?50?%;font-size:%?24?%}.list[data-v-8103870a]{padding:%?20?% %?20?% %?20?%}.listm[data-v-8103870a]{background:#fff;border-radius:%?15?%;box-shadow:0 0 %?2?% rgba(0,0,0,.1);margin-bottom:%?20?%;padding:%?30?%}.listmpic[data-v-8103870a]{border-radius:%?10?%;width:%?166?%;margin-right:%?20?%}.listmr[data-v-8103870a]{\n\t\t/* width: 460upx; */display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n\n\t\n\n\t\n\n\t\n\n\t\n\n\t.uni-product-list[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:0;padding:0 %?14?%;box-sizing:border-box}.uni-product-list.active[data-v-8103870a]{padding:0 %?12?%}.uni-product[data-v-8103870a]{padding:%?10?%;margin:%?10?%;width:%?341?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fff}.uni-product-list.active .uni-product[data-v-8103870a]{width:%?222?%}.image-view[data-v-8103870a]{height:%?321?%;width:%?321?%;\n\t\t/* margin: 12upx 0; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.uni-product-list.active .image-view[data-v-8103870a]{height:%?202?%;width:%?202?%;overflow:hidden}.uni-product-image[data-v-8103870a]{height:100%;width:100%;margin:0 auto;display:block}.uni-product-title[data-v-8103870a]{width:100%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1}.uni-product-price[data-v-8103870a]{width:100%;margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original[data-v-8103870a]{color:#e80080}.uni-product-price-favour[data-v-8103870a]{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip[data-v-8103870a]{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}.header-title[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%}.listBox>.title[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .list-box .box[data-v-8103870a]{position:relative}.listBox .list-box .box .title[data-v-8103870a]{position:absolute;left:0;bottom:0;z-index:1}.listBox .style1[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style2[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style3 .list-item[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex}.listBox .style4 .list-item[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style6 .list-item[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style6 .list-item .list-item-body[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style7 .list-item[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style8 .list-item[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .style9 .list-item[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .idea[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.listBox .idea .box[data-v-8103870a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-repeat:no-repeat;background-size:100% 100%}.listBox .recommendIdea .box1[data-v-8103870a]{margin:0;padding:0;width:100%;height:%?170?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:#fff;background-image:url(http://codegen.caihongy.cn/20220211/48dc2556b6a242c8bb81f0c96e06f951.png);box-shadow:0 0 0 transparent}.listBox .recommendIdea .box2[data-v-8103870a]{margin:0;padding:0;width:0;height:0;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .recommendIdea .box3[data-v-8103870a]{margin:0;padding:0;width:0;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .recommendIdea .box4[data-v-8103870a]{margin:0;padding:0;width:0;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .listIdea .box4[data-v-8103870a]{margin:0 2%;padding:0;width:21%;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .listIdea .box1[data-v-8103870a]{margin:0 2%;padding:0;width:21%;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .listIdea .box2[data-v-8103870a]{margin:0 2%;padding:0;width:21%;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .listIdea .box3[data-v-8103870a]{margin:0 2%;padding:0;width:21%;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .newsIdea .box1[data-v-8103870a]{margin:0;padding:0;width:100%;height:%?120?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:transparent;background-image:url(http://codegen.caihongy.cn/20220211/89871762d8174529b80b00f1f27c4bd4.png);box-shadow:0 0 %?12?% transparent}.listBox .newsIdea .box2[data-v-8103870a]{margin:0;padding:0;width:0;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .newsIdea .box3[data-v-8103870a]{margin:0;padding:0;width:0;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.listBox .newsIdea .box4[data-v-8103870a]{margin:0;padding:0;width:0;height:%?160?%;font-size:%?28?%;color:#fff;border-radius:0;border-width:0;border-style:solid;border-color:#ccc;background-color:rgba(0,0,0,.3);box-shadow:0 0 %?12?% transparent}.iconarr[data-v-8103870a]{text-align:center;line-height:%?80?%}.news-box6 .dian[data-v-8103870a]::before{content:"";display:block;width:%?8?%;height:%?8?%;background-color:red;position:absolute;top:%?-4?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:100%;z-index:1}.hide1[data-v-8103870a]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.hide2[data-v-8103870a]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.hide4[data-v-8103870a]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}body.?%PAGE?%[data-v-8103870a]{background:#f8f8f8}',""]),e.exports=i},f33b:function(e,i,r){"use strict";var t,a=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("v-uni-view",{staticClass:"uni-padding-wrap"},[r("v-uni-view",{staticClass:"header"},[r("v-uni-view",{staticClass:"headerb"},[r("v-uni-swiper",{staticClass:"swiper",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"20rpx 3%",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"94%",borderStyle:"solid",height:"300rpx"},attrs:{"indicator-dots":!0,autoplay:e.autoplaySwiper,circular:!0,"indicator-active-color":"rgba(173, 219, 140, 1)","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:e.intervalSwiper,vertical:!1}},e._l(e.swiperList,(function(i,t){return r("v-uni-swiper-item",{key:t,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSwiperTap(i)}}},[r("v-uni-image",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+i.img}}),e._e()],1)})),1)],1)],1),r("v-uni-view",{staticClass:"menu",staticStyle:{display:"flex","flex-wrap":"wrap"},style:{padding:"0 8rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e._l(e.menuList,(function(i){return[e._l(i.frontMenu,(function(t,a){return e.role==i.roleName?[e._l(t.child,(function(i,t){return[e._l(i.buttons,(function(t,a){return["查看"==t&&"yifahuodingdan"!=i.tableName&&"yituikuandingdan"!=i.tableName&&"yiquxiaodingdan"!=i.tableName&&"weizhifudingdan"!=i.tableName&&"yizhifudingdan"!=i.tableName&&"yiwanchengdingdan"!=i.tableName?r("v-uni-view",{key:a+"_0",staticClass:"menu-list",style:{padding:"10rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 2% 20rpx 2%",borderColor:"rgba(244, 245, 244, 1)",backgroundColor:"rgba(0, 186, 189, 0)",borderRadius:"12rpx",borderWidth:"2rpx",width:"21%",borderStyle:"solid",height:"140rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onPageTap2("../"+i.tableName+"/list")}}},[r("v-uni-view",{staticClass:"iconarr",class:i.appFrontIcon,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0px auto",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",borderRadius:"20rpx",color:"#333",borderWidth:"0",width:"80rpx",fontSize:"64rpx",borderStyle:"solid",height:"80rpx"}}),r("v-uni-view",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"12rpx auto 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"28rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v(e._s(i.menu.split("列表")[0]))])],1):e._e()]}))]}))]:e._e()}))]}))],2),r("v-uni-view",{staticClass:"listBox recommend"},[r("v-uni-view",{staticClass:"idea recommendIdea",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"40rpx 0 0",borderColor:"#ccc",borderRadius:"0",borderWidth:"0",background:"rgba(0,0,0,.0)",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"box box1"}),r("v-uni-view",{staticClass:"box box2"}),r("v-uni-view",{staticClass:"box box3"}),r("v-uni-view",{staticClass:"box box4"})],1),r("v-uni-view",{staticClass:"title",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"-130rpx 0 50rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0, 186, 189, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0)",color:"#FFF",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"100%",fontSize:"32rpx",lineHeight:"80rpx",borderStyle:"solid"}},[e._v("商品信息推荐")])],1),e._e(),r("v-uni-view",{staticClass:"list-box style1",style:{padding:"40rpx 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(173, 219, 140, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},e._l(e.shangpinxinxilist,(function(i,t){return r("v-uni-view",{key:t,staticClass:"list-item",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,.3)",margin:"0 0 20rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"20rpx",borderWidth:"0",width:"48%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onDetailTap("shangpinxinxi",i.id)}}},[r("v-uni-view",{staticClass:"list-item-title hide1",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 auto",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"48rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v(e._s(i.shangpinmingcheng))]),r("v-uni-image",{staticClass:"list-item-image",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 auto",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:i.shangpinfengmian?e.baseUrl+i.shangpinfengmian.split(",")[0]:""}})],1)})),1),e._e()],1),r("v-uni-view",{staticClass:"listBox news"},[r("v-uni-view",{staticClass:"idea newsIdea",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"20rpx auto 0px",borderColor:"#ccc",borderRadius:"0",borderWidth:"0",background:"rgba(0,0,0,.0)",width:"640rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"box box1"}),r("v-uni-view",{staticClass:"box box2"}),r("v-uni-view",{staticClass:"box box3"}),r("v-uni-view",{staticClass:"box box4"})],1),r("v-uni-view",{staticClass:"title",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0, 186, 189, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"-140rpx auto 0",borderColor:"red",backgroundColor:"rgba(0, 0, 0, 0)",color:"#FFF",textAlign:"right",borderRadius:"0",borderWidth:"0",width:"50%",fontSize:"32rpx",lineHeight:"80rpx",borderStyle:"solid"}},[e._v("公告信息")]),r("v-uni-text",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"-140rpx auto 0 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(255, 255, 255, 1)",textAlign:"right",borderRadius:"0",borderWidth:"0",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onPageTap("news")}}},[e._v("查看更多")])],1),e._e(),r("v-uni-view",{staticClass:"news-box3",style:{padding:"20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 20rpx",borderColor:"red",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},e._l(e.news,(function(i,t){return r("v-uni-view",{key:t,staticClass:"list-item",staticStyle:{display:"flex","align-items":"center"},style:{padding:"20rpx",boxShadow:"0 0 12rpx rgba(255,0,0,0)",margin:"0 ",borderColor:"#ccc",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onNewsDetailTap(i.id)}}},[r("v-uni-view",{staticClass:"dian",style:{padding:"0",boxShadow:"8rpx 0 4rpx rgba(153,153,153,1)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(64, 171, 54, 1)",borderRadius:"0",borderWidth:"0",width:"8rpx",borderStyle:"solid",height:"16rpx"}}),r("v-uni-view",{staticClass:"title hide1",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(255,0,0,0)",margin:"0",borderColor:"red",backgroundColor:"rgba(255,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 40rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[e._v(e._s(i.title))]),r("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0",boxShadow:"0 0 12rpx rgba(255,0,0,0)",margin:"0",borderColor:"red",backgroundColor:"rgba(255,0,0,0)",color:"#666",borderRadius:"0",borderWidth:"0",width:"32rpx",lineHeight:"72rpx",fontSize:"32rpx",borderStyle:"solid"}})],1)})),1),e._e()],1)],1)},o=[];r.d(i,"b",(function(){return a})),r.d(i,"c",(function(){return o})),r.d(i,"a",(function(){return t}))},f75a:function(e,i,r){"use strict";r.r(i);var t=r("f33b"),a=r("80690");for(var o in a)"default"!==o&&function(e){r.d(i,e,(function(){return a[e]}))}(o);r("5613");var d,n=r("f0c5"),l=Object(n["a"])(a["default"],t["b"],t["c"],!1,null,"8103870a",null,!1,t["a"],d);i["default"]=l.exports}}]);