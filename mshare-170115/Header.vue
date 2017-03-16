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
const title =  '理财购业务调整公告';
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
						// location.href=`https://h5.mizlicai.com/feature/xplan5`;
						location.href = 'mzlicai://close';
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
            sharetext: '米庄理财', // 分享标题
            sharedesc: '理财购业务调整公告', // 分享描述
            sharelineLink: location.href,
            shareimgUrl: 'https://image.mizlicai.com/activities/mother/logo.png' // 分享图标
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
        this.show = true;
    }
}

</script>
