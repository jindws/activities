import './css.scss'

new Vue({
    el: 'header',
    data: {
        title: '米享活动',
    },
    methods: {
        back: function() {
            location.href = location.origin+'/feature/xplan5';
        },
        share: function() {
            window.MizShare.share();
        },
        userAgent:function(ua) {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            return ua === 'ios' ? isiOS : isAndroid;
        },
    },
    mounted:function(){
        var t = this;
        if(t.userAgent('ios')){
            if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.showTabbar){//ios8+
                window.webkit.messageHandlers.showTabbar.postMessage(false);
            }
        }else{
            t.userAgent()&&window.XplanAndroid&&window.XplanAndroid.showTabbar(false);
        }
    }
});

new Vue({
    el: '#main',
    data: {
        items: [379, 381, 383, 386, 384, 382, 385],
    },
    methods:{
        toGoods:function(item) {
            if(item!==385){
                location.href = 'http://h5.mizlicai.com/feature/xplan5/#/goods/'+item;
            }
        }
    }
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

var shareObj = {
    sharetext: '钜惠专享', // 分享标题
    sharedesc: '双旦钜惠，一年期折合年化高达9.5%+2.01%', // 分享描述
    sharelineLink: location.origin + '/feature/xplan5/xmas', // 分享链接
    shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
};
window.MizShare.config(shareObj);