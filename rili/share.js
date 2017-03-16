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
                async: false,
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
                //朋友圈
                wx.onMenuShareTimeline({
                    title: obj.sharedesc, // 分享标题
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
        },
        shareConfigshow: function(obj) {
            var t = this;
            var _slink = obj.sharelineLink;
            wx.ready(function(data) {
                //朋友圈
                wx.showMenuItems({
                    menuList: [
                        "menuItem:share:appMessage",
                        "menuItem:share:timeline",
                        "menuItem:share:qq"
                        ]
                    });
                wx.onMenuShareTimeline({
                    title: obj.sharedesc, // 分享标题
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

        configshow: function(obj) {
            this.shareObj = obj;
            WeixinShareUtil.setWxConfig(obj);
            WeixinShareUtil.shareConfigshow(this.shareObj);
        },

        share: function() {
            var t = this;
            WeixinShareUtil.shareConfigshow(this.shareObj);
            //如果是mizApp分享
            // var isApp = getUrlParam('os').toString();
            var isApp =sessionStorage.getItem("osKey");
            var ua = navigator.userAgent.toLowerCase();
            if (isApp == 'iOS' || isApp == 'Android') {
                var shareObj = {
                    desc: t.shareObj.sharedesc,
                    text: t.shareObj.sharetext,
                    lineLink: t.shareObj.sharelineLink,
                    imgUrl: t.shareObj.shareimgUrl
                };
                // console.log("share:test?x=" + encodeURIComponent(JSON.stringify(shareObj)))
                // alert('share:test?x=" + encodeURIComponent(JSON.stringify(shareObj))')
                location.href = "share:test?x=" + encodeURIComponent(JSON.stringify(shareObj));
            } else if (ua.match(/MicroMessenger/i) == "micromessenger") {
                var _h_ = document.body.clientHeight + 'px';
                var fuceng = $('<div class=\"share-fuceng\" style=\"position:fixed;opacity:0.7;background-color:#000;z-index:100;left:0;top:0;height:' + _h_ + '\"><img src=\"https://miz-image.b0.upaiyun.com/zuimifen/wx-share.png\" width=\"100%\"/></div>');
                $(document.body).append(fuceng);
                $('.share-fuceng').on('click', function() {
                    $('.share-fuceng').remove();
                    $(document).unbind('click');
                });
            } else {
                alert('啊哦，我在别人的地盘，请庄主移步至“米庄理财”公众号内');
            }
        }
    };
})(window, jQuery)
