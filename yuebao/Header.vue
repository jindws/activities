<template>
	<header v-if='show'>
		<dl>
		    <dd id='return' @click='returnBack'></dd>
		    <dd>{{title}}</dd>
            <dd id='share' @click='shares'></dd>
		</dl>
	</header>
</template>

<script>
const title =  '1月运营月报';
document.title = title;
export default {
	data(){
        return{
           title,
           show:'',
        }
    },
    methods:{
        returnBack(){
            location.href=`${location.origin}/feature/xplan5`;
        },
        shares() {
            window.MizShare.share();
        },
        userAgent:function(ua) {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            return ua === 'ios' ? isiOS : isAndroid;
        },
    },
    created(){
        const shareObj = {
            sharetext: '米庄理财2017年1月运营报告', // 分享标题
            sharedesc: '米庄1月运营报告】感谢您对米庄理财的信任', // 分享描述
            sharelineLink: location.href,
            shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
    },
    mounted(){
        var t = this;
        this.show = false;
        if(t.userAgent('ios')){
            if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.showTabbar){//ios8+
                window.webkit.messageHandlers.showTabbar.postMessage(false);
            }
        }else{
            t.userAgent()&&window.XplanAndroid&&window.XplanAndroid.showTabbar(false);
        }
    },
    beforeUpdate(){
        // this.show = true;
    }
}

</script>