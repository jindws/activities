<template>
	<section>
		<header v-if='show'>
			<dl v-if='!nohead'>
			    <dd id='return' @click='returnBack'></dd>
			    <dd>{{title}}</dd>
	        <dd id='share'></dd>
			</dl>
		  <i class="share" @click='shares'></i>
		</header>
	</section>
</template>

<script>
export default {
	name: 'header',
	data(){
        return{
           title:'',
           show:'',
           nohead:false,
        }
    },
    methods:{
        returnBack(){
            const hash = location.hash;
            if(hash.indexOf('huayi')!==-1){
                location.hash='';
            }else{
                location.href=`https://h5.mizlicai.com/feature/xplan5`;
            }
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
        mytitle(){
            const t = this;
            const hash = location.hash;
            let title;
            if(hash.indexOf('huayi')!==-1){
                title = '花艺沙龙';
            }else{
                title = '情人节';
            }
            t.title = title;
            document.title = title;
        },
        getAppversion(){
            const app = navigator.appVersion;
            const ios = 'mizlicai_iOS';
            const and = 'mizlicai_Android';
            const ios_start = app.indexOf(ios);
            const and_start = app.indexOf(and);
            if(ios_start!==-1){//ios
                return gets(ios,ios_start);
            }else if(and_start!==-1){
                return gets(and,and_start);
            }else{
                return false;
            }

            function gets(version,start) {
                const iphone = app.indexOf('iPhone')!==-1;
                const end = app.substring(start).indexOf(')');
                const vers = app.substring(start+version.length+1,start+end);
                return iphone?vers>=2.8:vers>282
            }
        },
    },
    created(){
        const shareObj = {
            sharetext: '情人节活动', // 分享标题
            sharedesc: '你理财，我送花，更有免费花艺课等你！', // 分享描述
            sharelineLink: location.href,
            shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
        this.mytitle();
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
        $(window).on('hashchange', ()=> t.mytitle());
        this.nohead = this.getAppversion();
    },
    beforeUpdate(){
        this.show = true;
    }
}

</script>
