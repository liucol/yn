(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-193bae8c"],{"37f7":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAqBAMAAABb64ZtAAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMABgeHtuZjvYn+AAAAVUlEQVQoz2NggAHhUEM4m8ktLRnOUUlLS0WSQHCAEnBlIIk0RySJFAUkCafBICGCJMFghiTBEIYkgcpBUYZiAIrRKJYOKilHbJGFGo0oEYwa9aBEAQCJUUUV4oakUwAAAABJRU5ErkJggg=="},"3a1d":function(t,s,a){"use strict";var i=a("6f63"),e=a.n(i);e.a},4184:function(t,s,a){"use strict";var i=a("c74f"),e=a.n(i);e.a},"56fd":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAA8FBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////l1cLhAAAAUHRSTlMAAQMEBQYHCA8QEhQWFyImJygrLi8yNjo+QkRGSVJUVlhZW2Zob3B3fYGEiImPlJWWl5ibnJ+jpKWrrK6vtLW3u7y9vsHCw8TFxsfIycrLzKwQkHUAAAFpSURBVDjLhdPXWsJAEIDRQYqgglipQVABGyUoSBERMBIU+d//bbxIISH7yVzNbk42s7NZESdOblrv5mr+elfYF2Xk+rjxWU0EwUEbX8zy2yI9BmA97uqDhZXehvziC2B0lRQRiWQefgHqvq+MgWU57E4c9wBKHtIGPs68L8UegZ/0Zi/A8sxf3J4OPLvDPlDe3kB8Clw4HQNG4UAbKsC9nd8AV8FORQ2Y2xtvwTqpaPcTkLLSdxirTuQayFmpCV0VKQCala5AV5HspntzGKiIBtiH+QqLiILUgHMrvQMyCjKEZXRT1kNQnAIdO9//hN/jANGBojOoAr2YotiJW2JiBjzu+cTlt3cRkfwa0OPeNb4B88gzcwswrUSdSnXrH3/zmFAdAOPpupDVakP3HniNlH78lwQzaNIvXjApHr0FjVzcz63ny04xIqI0EkrltFL+3K5abfzhmMPdpiE7jSE7TfNfIocNo5n8A92daRWakz6/AAAAAElFTkSuQmCC"},6968:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"title-wrap"},[i("div",{staticClass:"back-wrap",on:{click:t.goBack}},[i("img",{attrs:{src:a("37f7")}})]),t._v(" "),i("div",{staticClass:"title-name"},[t._v(t._s(t.name))])])},e=[],o={name:"title",props:{name:{type:String,required:!0}},methods:{goBack:function(){this.$router.go(-1)}}},r=o,n=(a("4184"),a("2877")),A=Object(n["a"])(r,i,e,!1,null,"748458b9",null);s["a"]=A.exports},"6f63":function(t,s,a){},"7b63":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMBAMAAACU11D1AAAAIVBMVEUAAACVlZWbm5uYmJiYmJiXl5eWlpaWlpaXl5eXl5eXl5cbiecIAAAACnRSTlMADCGpqrGyw9jhXSU/1AAAAEtJREFUCNdj8FBggACmZoasSVC25lIG8ZUQCaZZhQyMVRAJzeUCDFAJkDADVAIsDJGACEMkoMIgCSWoMEhiJkwYKLEKJgyUKAcLAwDHphO4K187XQAAAABJRU5ErkJggg=="},"85c5":function(t,s,a){"use strict";var i=a("ebc2"),e=a.n(i);e.a},"89a3":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box-wrap"},[i("div",{staticClass:"top-bg"}),t._v(" "),i("div",{staticClass:"top-box fixed-top-box"},[i("TopTitle",{attrs:{name:t.titleName}}),t._v(" "),i("div",{staticClass:"common-margin search-wrap"},[i("div",{staticClass:"search-box",on:{click:t.goSearch}},[i("img",{attrs:{src:a("56fd")}}),t._v(" "),i("span",{staticClass:"search-name"},[t._v("商品名称/类别...")])]),t._v(" "),i("div",{staticClass:"user-wrap"},[i("div",{staticClass:"no-login-box",on:{click:t.login}},[t._v("\n                    登录/注册\n                ")])])])],1),t._v(" "),i("div",{attrs:{id:"box-content"}},[i("div",{staticClass:"common-margin swiper-wrap"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.bannerList,(function(t){return i("swiper-slide",[i("img",{staticClass:"slide-img",attrs:{src:t.img_address}})])})),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),i("div",{staticClass:"tag-wrap"},[i("swiper",{ref:"tagSwiper",attrs:{options:t.tagSwiperOptions}},t._l(t.tagname,(function(s,a){return i("swiper-slide",[i("span",{staticClass:"tag-name",class:{activeTag:t.tagindex===a},on:{click:function(i){return t.choseTag(a,s.fpcId)}}},[t._v(t._s(s.fpcName))])])})),1)],1),t._v(" "),i("div",{staticClass:"common-margin sort-wrap"},[i("div",{staticClass:"sort-box price",on:{click:t.changePriceSort}},[i("span",{staticClass:"sort-name"},[t._v("价格")]),t._v(" "),t.priceSort?i("img",{attrs:{src:a("7b63")}}):t._e(),t._v(" "),t.priceSort?t._e():i("img",{attrs:{src:a("e87c")}})]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"sort-box rebate",on:{click:t.changeRebateSort}},[i("span",{staticClass:"sort-name"},[t._v("返利")]),t._v(" "),t.rebateSort?i("img",{attrs:{src:a("7b63")}}):t._e(),t._v(" "),t.rebateSort?t._e():i("img",{attrs:{src:a("e87c")}})])]),t._v(" "),i("div",{staticClass:"goods-list-wrap"},[i("div",{staticClass:"common-margin"},t._l(t.listdata,(function(s){return i("div",{staticClass:"list-box"},[i("div",{staticClass:"list-left"},[i("img",{attrs:{src:s.trriPictUrl}})]),t._v(" "),i("div",{staticClass:"list-right"},[i("div",{staticClass:"goods-describe"},[t._v(t._s(s.trriTitle))]),t._v(" "),i("div",{staticClass:"goods-price-wrap"},[i("div",[i("div",{staticClass:"goods-price"},[i("span",{staticClass:"price-unit"},[t._v("￥")]),t._v(" "),i("span",{staticClass:"price-num"},[t._v(t._s(s.trriWlPrice))])]),t._v(" "),i("div",{staticClass:"rebate-wrap"},[i("div",{staticClass:"rebate-name"},[t._v("返")]),t._v(" "),i("div",{staticClass:"rebate-price"},[i("span",{staticClass:"price-unit"},[t._v("￥")]),t._v(" "),i("span",{staticClass:"price-num"},[t._v(t._s(s.trriAppRebate))])])])]),t._v(" "),i("div",{staticClass:"share-wrap",on:{click:function(a){return t.share(s)}}},[t._v("\n                                立即分享\n                            ")])])])])})),0)])]),t._v(" "),i("shareDialog",{ref:"sharedialog"})],1)},e=[],o=a("6968"),r=a("dad8"),n=a("bc3a"),A=a.n(n),c={name:"index",data:function(){return{titleName:"电商集市活动",swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},speed:1e3},tagSwiperOptions:{spaceBetween:10,slidesPerView:3.8},tagname:"",tagindex:0,priceSort:!0,rebateSort:!0,bannerList:[],fpcId:"",pagenum:"",pagesize:10,sort:-1,listdata:[]}},computed:{},components:{TopTitle:o["a"],shareDialog:r["a"]},created:function(){console.log(A.a,"axios"),this.getbanner(),this.getGoodsType(),this.getGoodsList(1)},methods:{getGoodsList:function(t){var s=this;t&&(this.pagenum=t);var a={fpcId:this.fpcId,pagenum:this.pagenum,pagesize:this.pagesize,sort:this.sort};this.$api.system.commodityList(a).then((function(t){var a=t.code,i=t.msg;0===a?s.listdata=t.data.list:s.$message.error(i)}))},getGoodsType:function(){var t=this;this.$api.system.commodityClass().then((function(s){var a=s.code,i=s.msg;if(0===a){var e={fpcId:"",fpcName:"全部"},o=s.data;o.unshift(e),t.tagname=o}else t.$message.error(i)}))},getbanner:function(){var t=this,s={type:2};this.$api.system.banner(s).then((function(s){var a=s.code,i=s.msg;0===a?t.bannerList=s.data:t.$message.error(i)}))},login:function(){this.$router.push({path:"/login"})},choseTag:function(t,s){this.tagindex=t,this.fpcId=s,this.getGoodsList(1)},changePriceSort:function(){this.priceSort=!this.priceSort,this.priceSort?this.sort=1:this.sort=2,this.getGoodsList(1)},changeRebateSort:function(){this.rebateSort=!this.rebateSort,this.rebateSort?this.sort=3:this.sort=4,this.getGoodsList(1)},share:function(t){this.$refs.sharedialog.openShare(t)},handleScroll:function(){document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body&&document.body.scrollTop},goSearch:function(){this.$router.push({path:"/searchGoods"})}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},l=c,g=(a("3a1d"),a("2877")),d=Object(g["a"])(l,i,e,!1,null,"5a31bbfd",null);s["default"]=d.exports},add1:function(t,s){t.exports="data:image/png;base64,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"},c74f:function(t,s,a){},c788:function(t,s){t.exports="data:image/png;base64,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"},c7ff:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABoCAMAAACeyLOcAAABR1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////86aXtaAAAAbHRSTlMAAwUGBwgJCgsMDQ4PEBESExQVFxgZGhscHR4jJCsxOD5JTVBZWmBjbHFze4CBkpiipaiwsbKztLa3uLm6u7y9vr/AwcLDxMXHyMnKy8zNzs/R0tPU1tja29ze3+Dm6+7v8PH09ff4+fv8/f5J1TgaAAADUUlEQVRYw+2X218SQRiGP91FEBGxLCuPGGoeILQstYNSFgoFlcdUiFAk4fn/r7ugFnZ3lkN712/nCnbm2YGZ9/0OIuoRmltJZs6LNzfF80xyZS4kPYyJ1ewtpnGbXZ3oju2bT9cNrFo1PtbT832d4cUzACq78dj0qC6ij07H4rsVAM4WO7xgJg9wvRb1mZ/7omvXAPmZNrCeqAGF5aBqMrhcAGoJ3YmezAHlJZ/TvG+pDOQm1bOzJWD9Xrv/dm8dKM2qph5X4Gqh09EuXEHlsYL+BZdTne916hJ+2fjZChyOd6OL8UOoWH7/ZAkOw93pKnwIJdP56Tm4HO9W0+OXkGu9vwRcTXXviakrSLRorQYLvXhqAWqG/vrysC49jXXI/9X/IpQNtcROnvarkcGN8hNDP2VY/LP5GSwZi37AM01J78FP49sSnDW2n4dCU+f7wIamptlp6r8A8yIikobl5rJH34EXmpLOR5oPliEtIjJR57rVoQ9OgZcWWwbeA7mRVv9eU58QkVVYMy29fwJs6jb6s1mVa7AqIlmImrcaOwa2fBb6k0XTUciKhG6pWAPE3SNg23gaeAdkh63Bo8JtSOZg13bMd74CrwZa6MywbdEuzMkKxO3XFPkCvBkw6ANFnojDiiQhphDJSA546xcJpID9IcWSGCQlA9NKV2eBHX8gBaRVtExDRi5gVJ3lDoBUCvioDNwyChdSBE1tkaF0Izt9UNOiQVFuqDq5MvgBYG/Qab7KTTt8cK/d5g28CHq7zZ0OTkSHovPRBT/+PbqDkNPRnTte3FAaSPn9O0A27HhxDrIZ2gdSARH/W6tVTbJRizZ0ALwLiIgMvAG+RBxEq7RMKGPQIgOvga931JZRGXY420KL+LaBo7tKwyrCRfiTiRbxbQHHY6pwYQ9W4c/A+4DpijeBk/uqYGUNlSM5Gy2ivwROHyhCpSVQR/IKWkR7AXx/aA/UljSx4+ASbQPYV6QJc5L66eQx7Tn8UCQpc4p8Un7u4ND+pycxRYp0m6BdlgduixO3pZHLwqxRFn7757LQbVHqtiR2W5C7bQfcNiNuWyFbI6aJaL00Ym7bQNdNaEsLfFGE4kXPLXBzgLgZHu7hHu7hHu7hHu7hHv5/4J3Gb4iUbFEcvrRXAAAAAElFTkSuQmCC"},dad8:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.shareDialog,expression:"shareDialog"}],staticClass:"dialog-wrap"},[i("div",{staticClass:"dialog-box"},[i("div",{staticClass:"close-wrap",on:{click:t.closeShare}},[i("img",{attrs:{src:a("c7ff")}})]),t._v(" "),i("div",{staticClass:"goods-detail-wrap"},[i("div",{staticClass:"share-goods-img"},[i("img",{attrs:{src:t.goodsData.trriPictUrl}})]),t._v(" "),i("div",{staticClass:"share-goods-detail"},[i("p",{staticClass:"share-goods-price"},[i("span",{staticClass:"share-unit"},[t._v("￥")]),i("span",{staticClass:"share-price"},[t._v(t._s(t.goodsData.trriWlPrice))]),t._v(" "),i("span",{staticClass:"goods-num"},[t._v("商品编号："+t._s(t.goodsData.trriItemid))])]),t._v(" "),i("p",{staticClass:"share-success-price"},[t._v("购买成功，蒋获返利："),i("span",[t._v("￥")]),t._v(t._s(t.goodsData.trriAppRebate))])])]),t._v(" "),i("div",{staticClass:"tweet-wrap clearfix"},[i("div",{staticClass:"tweet-detail"},[i("p",[t._v("\n                    "+t._s(t.goodsData.trriTitle)+"\n                ")])]),t._v(" "),i("div",{staticClass:"tweet-detail-button",on:{click:t.doCopy}},[i("p",[t._v("点击")]),t._v(" "),i("p",[t._v("复制推文")])])]),t._v(" "),i("div",{staticClass:"share-way"},[t._v("\n            分享至\n        ")]),t._v(" "),t._m(0)])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wixi-wrap"},[i("div",{staticClass:"wchart-wrap"},[i("img",{staticClass:"share-icon1",attrs:{src:a("c788")}}),t._v(" "),i("p",[t._v("微信好友")])]),t._v(" "),i("div",{staticClass:"wfriends-wrap"},[i("img",{staticClass:"share-icon2",attrs:{src:a("add1")}}),t._v(" "),i("p",[t._v("微信朋友圈")])])])}],o={name:"shareDialog",data:function(){return{shareDialog:!1,copyMessage:"来来来",goodsData:{}}},created:function(){},methods:{openShare:function(t){this.goodsData=t,this.copyMessage=t.trriTitle,this.shareDialog=!0},closeShare:function(){this.shareDialog=!1},doCopy:function(){var t=this;this.$copyText(this.copyMessage).then((function(s){t.$message({message:"复制成功",type:"success"})}),(function(s){t.$message.error("复制失败，请手动复制")}))}},mounted:function(){}},r=o,n=(a("85c5"),a("2877")),A=Object(n["a"])(r,i,e,!1,null,"323e9874",null);s["a"]=A.exports},e87c:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMBAMAAACU11D1AAAAJFBMVEUAAACVlZWbm5uYmJiYmJiXl5eWlpaWlpaXl5eWlpaXl5eXl5ehmH04AAAAC3RSTlMADCGpqrGyw9jZ4ZNzsmoAAABNSURBVAjXY2AAAsZyAQYYEN9dCGMyVq/aDpMQ36W0uhAmvIhBCyohvkuBgQkiARJmgEqAhBkgEhBhiAREGCKRvQhqstZWBg8FKJtpMgCfURULOtRO6AAAAABJRU5ErkJggg=="},ebc2:function(t,s,a){}}]);