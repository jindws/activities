/*! Copyright Jindw inc. */
webpackJsonp([0],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(135)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/lib/loader.js!./css.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/lib/loader.js!./css.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(360)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(361),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/moia/Desktop/xiangmu/新建文件夹/38/src/container.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] container.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a3c097a", Component.options)
  } else {
    hotAPI.reload("data-v-2a3c097a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_assign) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__share__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            slides: [{
                id: 'slide_1',
                class: 'caidai_1 fadeInDown'
            }, {
                id: 'slide_2',
                class: 'caidai_2 rotateInUpRight'
            }, {
                id: 'slide_3',
                class: 'caidai_1'
            }, {
                id: 'slide_4',
                class: 'caidai_3 fadeInUp'
            }, {
                id: 'slide_5',
                class: 'caidai_3'
            }],
            error: {
                show: false,
                outclass: 'fadeIn',
                inclass: 'flipInX',
                title: '',
                reason: '',
                end: false
            },
            data: {
                product: {
                    bonusRate: '',
                    name: '-'
                },
                bied: {},
                time: {
                    off: false
                }
            }
        };
    },

    methods: {
        share: function share() {
            window.MizShare.share();
        },
        search: function search(item) {
            var start = location.search.indexOf(item);
            if (start === -1) {
                return false;
            }
            var end = location.search.substring(start).indexOf('&');
            return location.search.substring(start + item.length + 1, end !== -1 ? start + end : location.search.length);
        },
        seeRedBag: function seeRedBag() {
            location.href = location.origin + '/#/hongbao';
        },
        queenBuy: function queenBuy() {
            switch (this.data.sex.status) {
                case 2:
                    //男
                    this.error = _assign({}, {
                        show: true,
                        outclass: 'fadeIn',
                        inclass: 'bounceIn',
                        title: '购买失败',
                        reason: '仅限女王购买'
                    });
                    break;
                default:
                    location.href = location.origin + '/#/products/' + this.data.product.serial;
            }
        },
        login: function login() {
            location.href = location.origin + '/#/login?backTo=' + location.origin + location.pathname;
        },
        hideError: function hideError() {
            var _this = this;

            this.error = _assign(this.error, {
                outclass: 'fadeOut',
                inclass: 'bounceOut'
            });
            setTimeout(function () {
                return _this.error.show = false;
            }, 900);
        },
        getdata: function getdata() {
            var _arguments = arguments,
                _this2 = this;

            var userKey = this.search('userKey');
            if (!userKey) {
                userKey = localStorage.auth;
            } else {
                localStorage.auth = userKey;
            }
            if (!userKey && arguments[0].needLogin) {
                this.login();
                return;
            }
            var api = __DEV__ ? '//121.43.148.191:8101/' : '//api.mizlicai.com/';
            var canshu = {
                method: arguments[0].method || "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
            if (!arguments[0].method) {
                canshu = _assign(canshu, {
                    body: 'os=h5&userKey=' + userKey + '&' + (arguments[0].body || '')
                });
            }

            fetch(api + arguments[0].url, canshu).then(function (re) {
                re.json().then(function (data) {
                    if (data.status === _arguments[0].err) {
                        _this2.error = _assign({}, {
                            show: true,
                            outclass: 'fadeIn',
                            inclass: 'bounceIn',
                            title: '操作失败',
                            reason: data.errorMsg
                        });
                    } else if (_arguments[0].truestate) {
                        if (data.status === 21000) {
                            _this2.login();
                            return;
                        }
                        _this2.error = _assign({}, {
                            show: true,
                            outclass: 'fadeIn',
                            inclass: 'bounceIn',
                            title: '温馨提示',
                            reason: data.errorMsg
                        });
                        if (_arguments[0].redBagGet) {
                            _this2.getdata('universal/hasBonus', 'activity=WOMEN', false, false, 'bied');
                        }
                    } else if (_arguments[0].jiegou) {
                        _this2.data = _assign(_this2.data, _defineProperty({}, _arguments[0].jiegou, data));
                        if (_arguments[0].jiegou === 'time') {
                            var timaA = data.currentTime.split('-');
                            var timeB = timaA[2].split(' ');
                            var timeC = timeB[1].split(':');

                            var time = new Date(timaA[0], timaA[1] - 1, timeB[0], timeC[0], timeC[1], timeC[2]);
                            if (time >= new Date(2017, 2, 9)) {
                                _this2.error = _assign({}, {
                                    show: true,
                                    outclass: 'fadeIn',
                                    inclass: 'bounceIn',
                                    title: '温馨提示',
                                    reason: '活动已结束!',
                                    end: true
                                });
                            } else if (time < new Date(2017, 2, 8)) {
                                _this2.data.time.off = true;
                            }
                        }
                    } else {
                        _this2.data = _assign(_this2.data, data);
                    }
                });
            }).catch(function () {
                _this2.error = _assign({}, {
                    show: true,
                    outclass: 'fadeIn',
                    inclass: 'bounceIn',
                    title: '请求失败',
                    reason: '服务器出错!'
                });
            });
        },
        getRedBag: function getRedBag() {
            this.getdata({
                url: 'universal/getBonus',
                body: 'activity=WOMEN',
                truestate: true
            });
        },
        googleAnalytics: function googleAnalytics(name) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-77505833-1', 'auto');
            ga('send', 'pageview');
            ga('send', 'event', '按钮', '点击', name);
        }
    },
    created: function created() {
        var shareObj = {
            sharetext: '3.8\u5973\u738B\u8282,\u4E13\u4EAB\u59B3\u7684\u7279\u6743', // 分享标题
            sharedesc: '\u3010\u7C73\u5E84\u7406\u8D22\u3011\u988638\u5143\u7EA2\u5305,\u518D\u4EAB1.2%\u7279\u6743\u52A0\u606F\u6807', // 分享描述
            sharelineLink: '' + location.origin + location.pathname,
            shareimgUrl: 'https://image.mizlicai.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
        this.googleAnalytics('38妇女节');
        this.getdata({
            url: 'universal/hasBonus',
            body: 'activity=WOMEN',
            jiegou: 'bied'
        });
    },
    mounted: function mounted() {
        this.getdata({
            url: 'currentTime',
            jiegou: 'time',
            method: 'GET'
        });

        this.getdata({
            url: 'activity/getProduct',
            body: 'activity=WOMAN&productName=女王节'
        });
        this.getdata({
            url: 'gender',
            jiegou: 'sex'
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(93)))

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(122)();
// imports


// module
exports.push([module.i, "body{margin:0;font-family:PINGFANG SC,MICROSOFT YAHEI;-webkit-tap-highlight-color:transparent}dl{-webkit-margin-before:0;-webkit-margin-after:0}dd{-webkit-margin-start:0}ul{list-style-type:none;-webkit-padding-start:0}p,ul{-webkit-margin-before:0;-webkit-margin-after:0}#share{position:fixed;z-index:4;right:10px;top:8px;width:52px;height:31px;background-size:cover;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAA+CAMAAADwFa55AAACuFBMVEUAAAD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgH/VgD/VwH/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VwH/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VwH/VwH/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD/VgD+Yw//VgD/VgD/VgD/WAP/VgD/VgD/VgDzkTz/ZBD+ahf2gSv+YQzzkDv2gy7yjDX/ZRH/VgD/Yw/xlUD8dCf0lUL+cyH3iDX/bBrzijX+aBT7dB//YAz0hS/+ZBD/ZBDzhzD+ZA/0gizxjTXwlD7xjDT+cB//ZRP/VgD/VgDyijP/Yw79ZBDyhy/zhCz/bBr5fSrxjzj5diL5dCD/XQn5diH4dSD3eSP19PXxgSnwhSz9XAb3bhf8XgjxhCv9WwX7Ygv2cRrwhy7/WALyfiX6ZA79YAnviTDygCf/WQP5ZxH1dh7/VwH0fCT5aRL/WgX4ahT1eSH4cBj1dyD5bRb7ZxD7Zg/5bBX3cxv2dB30eyP1cxzzeiL1tYn1llTwjDT2klH20r30nFr0mVf/Xgr11cD0uY31t4v30Lzxjzf17Oj249r8bRv228z1kj/8cR3+Yg75i0rxijLxhi75eSX7ahX/XAf11sHylkH3jjv3iTn5hzX2gy7+bBr/aBX8ZRD3vpz3t5L3sIT5mWPzkTzxkjv6gzH8fy75dyv9fCr6dCH2yq72w6P4o3P6h0b0iDP2gCv4fSj/ZRH3rYL3qXj3nmb4jk3zjDfzhjDzgyv9cyD2dh/5bhj+XQf0qnP3oWvyjkD4gz37fDb7diP2iULwiDD118L018L3l1z4ezC5fZqbAAAAdnRSTlMAAwkNGQUHEyQQmYRDzFczIr2tbCsoTzYxfzkgHmpWFZyQPhwaF6tKRGOoZl4ueHRgR8eVinBaQjy8uKNRL9i1iIJ7TT8m9/fZdPTp3MbCs3L+/v3z8OTY0c/FurerlpZd/fz07+jCvqqjWffv7efcuKupoEg70+qeMwAAB4hJREFUWMPNmfVfU1EYxo0pU5RN3O5YwsZwycYcoSApdnd3d1+7UazZLdZUGAZ2gq3Y3d36b/iec+92ZTvDTfHz8flNP4d9eZ695z3vOVQqT5WDVKVghQnVqlWrzqjKb8UuhB8Jhoch+NOrBinMBFhALExBjBo1QkIiI2NieAEpJiYyMiSkRg2gMazfYlhKiHxkv95pLZudX79+3boVK44fP75hw9rXr1ev3jh348ZNm169WrNm1apVmzcvX758wYLFixdPfTFtdOteffsrQhgWoH6LAUrMyN4ti3JyZubk5MwBLVy4cP26JUtWrFi5csPaGTNmrJ47d+7GLZuWLl2KcFs3I9gCgE2ddXRUr/4xwOJQfjmA4RnScmZOnz595syZQYIQal63/jxAlUNi7ITwZD2d06fP/lPQrGlHv7SZwgvBpogkxk6ktn3LN7NBfwoC0rR5g1poIxlTZA7YUfRzznY4/g4EpCN9FWAKk8gc+Yg3DkfuX4OANFzOkogcYT+nY35uRYAWbe8rJJAqV2Y47YFTMSAgtWBIuPY4Q5hja+nIrSAQkAZNxiSwVCa4Gjy5qOeJ+aCgQPfP+QVtbyOS82qUCQ8FF6kQt3fmLiOBSh9h0OGdH7xBt1z0Pr+gRQUtxIpIFF6Z4LT8iDTHfCLoFl1Yun7dB5q+7QZ93gHKy8u7QNOu3Ui7QO+9QdvHRfC1XHgAQsEJRe2d85eRQHfh0/aDo0Ka/sGC9tAE7fUGgSWREIVX+RdD0WJJ2xPLSKD9ALiDontC0zuDAsG3JBFHc5YABIZS9c0cRFA+TeczxQDES57oHm9D2oe0F/QWovMFNdWngiUPqDo2ZHHmkkDoayhlQIfh137nLoY9XnagGHxBBS2wJciOTS5GGKvp45xPAAGHvusu70uIFDAIVDBcEyuMQdmxyWmbCPTdTyzzAXU8AJ9xmdtHt+GfFz2gPCRcdP5AA9roBU20KDs2OYVIphviC/rogtwu/7phEelA4I62t9LJRAo2u8qwWSE5qpnD11E+7crH2ukWWHwcBKgpBdnBpkUgVHP8iFoqEuhj/vF8uowufWeje1e26naRQQNVtSL4qO4YkFYssSWWQHSEqrsIfgohL9bOJbbq9rh1Euvrt7dkUKJNIta6QVDcMp25GRk0B/cguhR9R08hNxbku12JxdDUrJNBgTMgXAuN44ZAeZNB+8EQLgboDU9ZEMTmjq4QMK5b74nl3SquMa6GakzRyUUNKENzZ64f0GWoafc+eup1TJy54IJf4+3zBeQN281ANRDJUdlxoLZF5BaEm11pGdCxHUh5SOCm8BF0byRf0NVeBNCIhyfIoIuo2WHQTprGvW4HTRQBNIkAkhaTjwkIjv7IgAppV1Cggg5SD4grBkvzIsLBh5vdHU9T3bnBJ7oDu0Gk6MBQN4unGLjytvYp8T3K76Jmd2Hh3UeP7jy56ILq9poZoCWd9H+Ud5hg9ZQ3t2ETQscUeQ8nHV3Iz5yFd2hGrpu/gmis235AYKhVaIJnw3ItSJnZu8TpPW5dpgvvQlMtpbEKP5QZTm7h/9ztD1Rwanym0tOCuKZqylJ3LfEZIC8z49ZhpJte41YebNgnZ8hTEDakzjJ5mip3TJitGRMPPay4kfhqpz4ZVrPnmOAOvjCl1N62+GFFDfkFp3rYpcowz8HHHeWUwRIf1bz4YcVcWwo6tI6Ktxgoz1HODSc2sKRO6Vr8MOfvL2Lgp3WKGgzZPMMJN25pqDhraE1j80MlRX97tdx+5VRrY81Qaxyl4cYtboDUq0wQXr3uL4tLiv7isgx2rnTqUQ+CM6n03ADJjcRQeIl1peqoej0HI1TRn13/jwLmVJe29aLU0rqJOhk7EnsN+dmUOQGRktM6v9xffPw8UuAPGi9eHH1+5BlgmvZIRpwEM5XNDfllri2CpEZxiGRs1zBtcMdPLw/tRzqEdRP06dMxrAdI90HnsJ4/v4f07NmzK1dOderSvWE7I+LENUoSsNcWn4uYRI9I8TVTwtPr1E/r2rnzDazrWNewzjI6g3Sa0UG3mnYZ27x+nfTwlJrxiKOXcBcxr6slIpnrWkLBVHh68rCh9UG1AxRaO3RYcno42Am11DUjDnu19L0sAymJSjRZpfH2qBRjeLv05OSGDRvWCUCwLDk5vV24MSXKHi+1mhKpJOD4XpbBEksSZOtUcUqLNENtjwKY0VgPKbxc4SVGI0Ci7OoMqUUZp9JlC4BTzkODXBwh01NhBqU1KzMjXq2222sGKLtdrY7PyMyyKg1hlF4WIZaX/3Si4IskGhsVZjYpE6yWLKk0MzQgZUqlWRZrgtJkDqNsGomIr2A5/h+dhOJUiUavo1SJZoPJZFKC6v5GaA0sNZgTVZROr5GkioXco5P/Z7RooThWINPUsukaU41USGG/EV7UiGqss9XSyASxYmE04RmN8DAIqCaiWIFE1kCTnZSUVCsAwbJsTQOZRBAragIY0sMg+alTqxDyxWJRbGoEI0E5YpekxorEYr5QoSU/dZJRiMWLVsjlQiE/QAmFcrkimocoLOb/eI6uqAf2/+tPBv/mjyA/AeUUsYRFYfgLAAAAAElFTkSuQmCC\")}#top{padding-bottom:61%;position:relative;background-image:url(https://image.mizlicai.com/activities/a201703/38/top.png);background-size:329px 201px;background-repeat:no-repeat;background-position:90%}@media screen and (max-width:320px){#top{background-size:90%}}#top em{width:76px;height:215px;display:block;position:absolute;right:0;top:0;background-image:url(https://image.mizlicai.com/activities/a201703/38/window.png);background-size:cover}#top em:first-child{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}#top i{display:block;width:100%;height:166px;position:absolute;bottom:0;background-image:url(https://image.mizlicai.com/activities/a201703/38/girl.png);background-size:contain;background-repeat:no-repeat;background-position:50%}#alert{position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:15px;color:#333;z-index:4}#alert section{background-color:#fff;border-radius:5px;margin:0 30px;width:100%}#alert p{font-size:18px;color:#0af;line-height:50px;position:relative}#alert p:before{content:\"\"!important;position:absolute;left:0;top:0;border:1px solid #ddd;border-width:0 0 1px;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0}#alert p:after{content:\"\";width:15px;height:15px;display:inline-block;position:absolute;right:10px;top:15px;background-image:url(\"data: image/png; base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdBAMAAACkvXo8AAAALVBMVEUAAADIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8zIx8yBvex2AAAADnRSTlMA6Am6uCooMvN6YT9REj2+7MIAAACOSURBVBjTTc+xCYNQGEXhSyCELGAZAimyQqoU2SBluozgBI7gDE4glrbO4ASCtTOI9wrH1z2+U9xf1794P6kt+J5vjR4TwXe+6/Qu4I/kAJYDOAFMYCYIE5gJwgRhgsFMsGzMq5ZSOh5WewOHjd7AYRnJYd4AZyS8j4QTwARmgjBBmCBM0IcTvDpdYOmpFaYkMSnmoEODAAAAAElFTkSuQmCC\");background-size:cover}#alert div{padding-top:20px}#alert div span{display:inline-block;padding-bottom:20px}#alert div a{display:block;text-decoration:none;color:#fff;background-color:#ff5601;margin:0 15px 15px;line-height:45px;border-radius:5px;font-size:18px}#main{background-color:#26232c;border-radius:10px 10px 0 0;padding:30px 15px 15px;margin:0 12px;position:relative}#main i{background-size:cover;display:block;position:absolute}#main .caidai_1{background-image:url(https://image.mizlicai.com/activities/a201703/38/caidai1.png)}#main .caidai_2{background-image:url(https://image.mizlicai.com/activities/a201703/38/caidai2.png)}#main .caidai_3{background-image:url(https://image.mizlicai.com/activities/a201703/38/caidai3.png)}#main #slide_1,#main #slide_3{top:-4px;right:0;width:92px;height:26px;right:50px}#main #slide_2{width:38px;height:103px;right:0;top:-4px}#main #slide_3{left:-37px;top:118px;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}#main #slide_4,#main #slide_5{width:37px;height:85px;right:-5px;top:350px}#main #slide_5{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);left:-5px;top:540px;z-index:2}#main .btn{text-decoration:none;color:#fff;width:100%;height:42px;text-align:center;position:absolute;bottom:16px;font-size:18px;line-height:42px;font-weight:700;background-image:url(https://image.mizlicai.com/activities/a201703/38/btn.png);background-size:contain;background-position:50%;background-repeat:no-repeat}@media screen and (max-width:320px){#main .btn{height:35px;line-height:35px}}#main .btn.off{background-image:url(https://image.mizlicai.com/activities/a201703/38/btn_off.png)}#main #redbag{width:276px;height:0;padding-bottom:41%;margin:0 auto;position:relative;background-image:url(https://image.mizlicai.com/activities/a201703/38/redbag.png);background-size:contain;background-repeat:no-repeat;background-position:50%}#main #redbag+p{color:#fff;text-align:center;padding:20px 0 5px}#main #biaodi{padding-bottom:30%;position:relative;background-image:url(https://image.mizlicai.com/activities/a201703/38/biaodi.png);background-size:276px 97px;background-repeat:no-repeat;background-position:top}#main #biaodi div,#main #biaodi p{text-align:center}#main #biaodi p{font-size:13px;color:#666;padding-top:12px}#main #biaodi strong{font-size:30px;display:block;text-align:center;color:#f33562}@media screen and (max-width:320px){#main #biaodi{background-size:90%}}#main #rule{color:#fff;font-size:13px;position:relative;z-index:3}#main #rule dt{text-align:center;padding:10px 0}#main #rule li:before{content:\"*\";padding-right:2px;position:relative;top:-1px}#main #rule li:last-child{padding-top:25px}#main #rule dd:last-child{text-align:center;font-size:12px;padding:20px 0 0}#main #rule dd:last-child div{font-size:11px}@supports (font-size:1vw){#share{right:2.66667vw;top:2.13333vw;width:13.86667vw;height:8.26667vw}#top{background-size:87.73333vw 53.6vw}#top em{width:20.26667vw;height:57.33333vw}#top i{height:44.26667vw}#alert{font-size:4vw}#alert section{border-radius:1.33333vw;margin:0 8vw}#alert p{font-size:4.8vw;line-height:13.33333vw}#alert p:after{width:4vw;height:4vw;right:2.66667vw;top:4vw}#alert div{padding-top:5.33333vw}#alert div span{padding-bottom:5.33333vw}#alert div a{margin:0 4vw 4vw;line-height:12vw;border-radius:1.33333vw;font-size:4.8vw}#main{border-radius:2.66667vw 2.66667vw 0 0;padding:8vw 4vw 4vw;margin:0 3.2vw}#main #slide_1,#main #slide_3{top:-1.06667vw;width:24.53333vw;height:6.93333vw;right:13.33333vw}#main #slide_2{width:10.13333vw;height:27.46667vw;top:-1.06667vw}#main #slide_3{left:-9.86667vw;top:31.46667vw}#main #slide_4,#main #slide_5{width:9.86667vw;height:22.66667vw;right:-1.33333vw;top:93.33333vw}#main #slide_5{left:-1.33333vw;top:144vw}#main .btn{height:11.2vw;bottom:4.26667vw;font-size:4.8vw;line-height:11.2vw}#main #redbag{width:73.6vw}#main #redbag+p{padding:5.33333vw 0 1.33333vw}#main #biaodi{background-size:73.6vw 25.86667vw}#main #biaodi p{font-size:3.46667vw;padding-top:3.2vw}#main #biaodi strong{font-size:8vw}#main #rule{font-size:3.46667vw}#main #rule dt{padding:2.66667vw 0}#main #rule li:before{padding-right:.53333vw;top:-.26667vw}#main #rule li:last-child{padding-top:6.66667vw}#main #rule dd:last-child{font-size:3.2vw;padding:5.33333vw 0 0}#main #rule dd:last-child div{font-size:2.93333vw}}", ""]);

// exports


/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    attrs: {
      "id": "container"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;",
      "id": "share"
    },
    on: {
      "click": _vm.share
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "main"
    }
  }, [_vm._l((_vm.slides), function(item) {
    return _c('i', {
      staticClass: "animated",
      class: item.class,
      attrs: {
        "id": item.id
      }
    })
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "redbag"
    }
  }, [(_vm.data.bied.status === 1) ? _c('a', {
    staticClass: "btn off",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.seeRedBag
    }
  }, [_vm._v("点击查看")]) : _c('a', {
    staticClass: "btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.getRedBag
    }
  }, [_vm._v("立即领取")])]), _vm._v(" "), _c('p', [_vm._v("加息特权唯妳尊享")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "biaodi"
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.data.product.name))]), _vm._v(" "), (_vm.data.product.bonusRate) ? _c('strong', [_vm._v("\n                " + _vm._s((_vm.data.product.interestRate * 100).toFixed(1)) + "% + " + _vm._s((_vm.data.product.bonusRate * 100).toFixed(1)) + "%\n            ")]) : (_vm.data.product.bonusRate === 0) ? _c('strong', [_vm._v("\n                " + _vm._s((_vm.data.product.interestRate * 100).toFixed(1)) + "%\n            ")]) : _c('strong', [_vm._v("\n                -\n            ")]), _vm._v(" "), (!_vm.data.time.off) ? _c('a', {
    staticClass: "btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.queenBuy
    }
  }, [_vm._v("女王专享")]) : _vm._e(), _vm._v(" "), (_vm.data.time.off) ? _c('a', {
    staticClass: "btn off",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("活动未开始")]) : _vm._e()]), _vm._v(" "), _vm._m(1)], 2), _vm._v(" "), (_vm.error.show) ? _c('div', {
    staticClass: "animated",
    class: _vm.error.outclass,
    attrs: {
      "id": "alert"
    }
  }, [_c('section', {
    staticClass: "animated",
    class: _vm.error.inclass
  }, [(!_vm.error.end) ? _c('p', {
    on: {
      "click": _vm.hideError
    }
  }, [_vm._v(_vm._s(_vm.error.title))]) : _vm._e(), _vm._v(" "), _c('div', {}, [_c('span', [_vm._v(_vm._s(_vm.error.reason))]), _vm._v(" "), (!_vm.error.end) ? _c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.hideError
    }
  }, [_vm._v("确定")]) : _vm._e()])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "top"
    }
  }, [_c('em', {
    staticClass: "animated fadeIn"
  }), _vm._v(" "), _c('em', {
    staticClass: "animated fadeIn"
  }), _vm._v(" "), _c('i', {
    staticClass: "animated zoomIn"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "rule"
    }
  }, [_c('dl', [_c('dt', [_vm._v("【活动规则】")]), _vm._v(" "), _c('dd', [_vm._v("活动时间：2017年3月8日")]), _vm._v(" "), _c('dd', [_vm._v("详细规则：\n                    "), _c('ul', [_c('li', [_vm._v("每个米庄用户可在活动当日领取38元红包，红包仅限3月8日可使用，每个用户限领一次（红包即时发放，请在“我的资产-优惠券”查看；")]), _vm._v(" "), _c('li', [_vm._v("活动当日，女性庄主享有“3.8女王节”三月期加息专享标投资特权（将根据庄主账户的性别区分，男性不可购买）；")]), _vm._v(" "), _c('li', [_vm._v("如有疑问，请联系在线客服或致电"), _c('br'), _vm._v("400-699-8883（09:00-21:00）")])])]), _vm._v(" "), _c('dd', [_vm._v("\n                    活动最终解释权归米庄理财所有\n                    "), _c('div', [_vm._v("理财有风险，投资需谨慎！")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a3c097a", module.exports)
  }
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// import 'jweixin'
(function(window, $) {
    //微信分享功能函数
    //1. 获取mzlc微信分享配置信息
    //2. 设置微信分享配置信息
    //3. 设置微信分享的标题内容等
    var WeixinShareUtil = {
        wxConfig: {
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: '', // 必填，公众号的唯一标识
            timestamp: 0, // 必填，生成签名的时间戳
            nonceStr: '', // 必填，生成签名的随机串
            signature: '', // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    'hideMenuItems',
                    'showMenuItems'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        },

        setWxConfig: function(obj) {
            var t = this;
            $.ajax({
                url: '//api.mizlicai.com/system/wxconfig.json',
                type: 'GET',
                success: function(data) {
                    t.wxConfig.appId = data.appid;
                    t.wxConfig.timestamp = data.timestamp;
                    t.wxConfig.nonceStr = data.noncestr;
                    t.wxConfig.signature = data.signature;
                    wx.config(t.wxConfig);
                    t.shareConfig(obj);
                }
            });
        },

        shareConfig: function(obj) {
            var t = this;
            var _slink = obj.sharelineLink;
            wx.ready(function(data) {
                 wx.showMenuItems({
                    menuList: [
                        "menuItem:share:appMessage",
                        "menuItem:share:timeline",
                        "menuItem:share:qq"
                        ]
                    });
                //朋友圈
                wx.onMenuShareTimeline({
                    title: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数

                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //微信朋友
                wx.onMenuShareAppMessage({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: _slink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function(resp) {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //qq
                wx.onMenuShareQQ({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //腾讯微博
                wx.onMenuShareWeibo({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        //用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //qq空间
                wx.onMenuShareQZone({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的 回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
        },
        shareConfighide: function(obj) {
            var t = this;
            var _slink = obj.sharelineLink;
            wx.ready(function(data) {
                //朋友圈
                wx.onMenuShareTimeline({
                    title: obj.sharetext, // 分享标题
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数

                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //微信朋友
                wx.onMenuShareAppMessage({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: _slink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function(resp) {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //qq
                wx.onMenuShareQQ({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //腾讯微博
                wx.onMenuShareWeibo({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        //用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //qq空间
                wx.onMenuShareQZone({
                    title: obj.sharetext, // 分享标题
                    desc: obj.sharedesc, // 分享描述
                    link: obj.sharelineLink, // 分享链接
                    imgUrl: obj.shareimgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的 回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.hideMenuItems({
                    menuList:[
                        "menuItem:share:appMessage",
                        "menuItem:share:timeline",
                        "menuItem:share:qq"
                    ]
                 });
            });
        }
    };

    function getUrlParam(key) {
        var search = location.search;
        var arr = !search ? [] : location.search.substr(1).split('&');
        var param = {};
        for (var i = 0, l = arr.length; i < l; i++) {
            var kv = arr[i].split('=');
            param[kv[0]] = kv[1];
        }
        return key ? (param[key] || '') : param;
    }

    window.MizShare = {

        shareObj: {},

        config: function(obj) {
            this.shareObj = obj;
            WeixinShareUtil.setWxConfig(obj);
        },

        confighide: function(obj) {
            this.shareObj = obj;
            WeixinShareUtil.setWxConfig(obj);
            WeixinShareUtil.shareConfighide(obj);
        },

        share: function() {
            var t = this;
            //如果是mizApp分享
            var isApp = getUrlParam('os').toString() || '';
            var ua = navigator.userAgent.toLowerCase();
            if (isApp.toLowerCase().indexOf('ios') != -1 || isApp.toLowerCase().indexOf('android') != -1) {
                var shareObj = {
                    desc: t.shareObj.sharedesc,
                    text: t.shareObj.sharetext,
                    lineLink: t.shareObj.sharelineLink,
                    imgUrl: t.shareObj.shareimgUrl
                };
                location.href = "share:test?x=" + encodeURIComponent(JSON.stringify(shareObj));
            } else if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    var fuceng = $('<div class=\"share-fuceng\" style=\"position:fixed;opacity:0.7;background-color:#000;z-index:99999;left:0;top:0;bottom:0;right:0;width:100%;height:100%\"><img src=\"http://miz-image.b0.upaiyun.com/zuimifen/wx-share.png\" width=\"100%\"/></div>');
                    $(document.body).append(fuceng);
                    $('.share-fuceng').on('click', function() {
                        $('.share-fuceng').remove();
                        $(document).unbind('click');
                    });
                }else {
                    alert('啊哦，我在别人的地盘，请庄主移步至“米庄理财”公众号内');
                }
        }
    };
})(window, jQuery)

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92)))

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__container_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_scss__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_scss__);
console.log(__DEV__)


new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
    el: '#container',
    render: function(h) {
        return h(__WEBPACK_IMPORTED_MODULE_0__container_vue___default.a)
    }
})



// (function(i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function() {
//         (i[r].q = i[r].q || []).push(arguments)
//     },
//     i[r].l = 1 * new Date();
//     a = s.createElement(o),
//     m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
// ga('create', 'UA-77505833-1', 'auto');
// ga('send', 'pageview');


/***/ })

},[363]);