import './css.scss';
import './mizshare.js'
let request_header = 'http://121.43.148.191:8101';
let request_Xplan = 'http://121.43.148.191:8308';

if(location.host === 'h5.mizlicai.com'){
    if(location.protocol === 'http:'){
        location.protocol ='https:';
    }
    request_header = '//api.mizlicai.com/activities';
    request_Xplan = '//api.mizlicai.com';
}

new Vue({
    el: 'section',
    data: {
        share: '分享',
        rule: '领取条件',
        showRule: false,
        showOver: false,
        showAddress: false,
        needLogin: localStorage ? localStorage.auth : '',
        errorMsg: '',
        showSuccess: false,
        showTooMore: false,
        hasDefault: false,
        addressConfirmShow: false,
        interv: null,
    },
    methods: {
        myRule: function() {
            this.showRule = true;
        },
        shares: function() {
            window.MizShare.share();
        },
        closeRule: function() {
            this.showRule = false;
        },
        closeOver: function() {
            this.showOver = false;
        },
        closeAddress: function() {
            this.showAddress = false;
        },
        closeError: function() {
            this.errorMsg = '';
        },
        closeSuccess: function() {
            this.showSuccess = false;
        },
        closeTooMore: function() {
            this.showTooMore = false;
        },
        closeAddressConfirm: function() {
            sessionStorage.addressId = '';
            this.addressConfirmShow = false;
        },
        getNow: function() {
            var t = this;
            $.ajax({
                    url: request_header + '/fragment/2016/calendar/check',
                    dataType: 'json',
                    data: {
                        userKey: localStorage.auth
                    },
                })
                .done(function(re) {
                    switch (re.status) {
                        case 0:
                            sessionStorage.back = location.origin + location.pathname;
                            t.interv = setInterval(function() {
                                t.defaultAddress();
                            }, 1000);
                            if (!t.hasDefault) {
                                location.href = location.origin + '/feature/miz-address/#/operate?from=rili';
                            } else {
                                location.href = location.origin + '/feature/miz-address/#/?from=rili';
                            }
                            break;
                        case 1006: //不符合
                            t.showRule = true;
                            break;
                        case 1005: //台历被领完
                            t.showOver = true;
                            break;
                        case 1007:
                            t.showTooMore = true;
                            break;
                        case 21000: //去登录
                            location.href = location.origin + '/#/login?backTo=' + location.origin + location.pathname;
                            break;
                        default:
                            t.errorMsg = re.errorMsg||'后台报错'+re.status;
                    }
                })
                .fail(function() {
                    t.errorMsg = '请求失败';
                });
        },
        toLogin: function() {
            location.href = location.origin + '/#/login?backTo=' + location.origin + location.pathname;
        },
        // haveIdToGet: function() {
        //     var t = this;
        //     t.addressConfirmShow = true;

        // },
        getConfirm: function() {
            var t = this;
            $.ajax({
                    url: request_header + '/fragment/2016/calendar',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        addressId: sessionStorage.addressId,
                        userKey: localStorage.auth
                    },
                })
                .done(function(re) {
                    switch (re.status) {
                        case 0:
                            t.showSuccess = true;
                            break;
                        case 1006: //不符合
                            t.showRule = true;
                            break;
                        case 1005: //台历被领完
                            t.showOver = true;
                            break;
                        case 1007:
                            t.showTooMore = true;
                            break;
                        case 21000: //去登录
                            location.href = location.origin + '/#/login?backTo=' + location.origin + location.pathname;
                            break;
                        default:
                            t.errorMsg = re.errorMsg||`请求失败（${re.status}）`;
                    }
                })
                .fail(function() {
                    t.errorMsg = '请求失败';
                }).always(function() {
                    t.addressConfirmShow = false;
                    sessionStorage.addressId = '';
                });
        },
        defaultAddress: function() {
            var t = this;
            $.ajax({
                    url: request_Xplan + '/xplan/address/default.json',
                    dataType: 'JSON',
                    data: {
                        userKey: localStorage.auth,
                        os: 'h5',
                    },
                    cache: false,
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    }
                })
                .done(function(re) {
                    if (re && re.data && re.data.id) {
                        t.hasDefault = true;
                        if (sessionStorage.firstOperate) {
                            sessionStorage.addressId = re.data.id;
                            sessionStorage.firstOperate = '';
                            t.addressConfirmShow = true;
                        }
                    }
                })
                .fail(function() {
                    t.errorMsg = '请求失败';
                })
                .always(function() {
                    clearInterval(t.interv);
                });
        },
        ifShowConfirm: function() {
            if (sessionStorage.addressId) {
                this.addressConfirmShow = true;
            }
        }
    },
    mounted: function() {
        this.ifShowConfirm();
    },
    created: function() {
        var shareObj = {
            sharetext: '2017米庄台历免费领啦！', // 分享标题
            sharedesc: '新年好运就靠他了，赶紧去抢', // 分享描述
            sharelineLink: location.origin + '/activity/rili', // 分享链接
            shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
        this.defaultAddress();
    },
});

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

var osKey = /os=([^&]+)/.exec(location.search);
if (osKey) {
    osKey = osKey[1];
} else {
    osKey = sessionStorage.getItem("osKey") || "H5";
}
sessionStorage.setItem("osKey", osKey);