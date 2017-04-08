<template>
<section class="container">
    <i id="share" @click='share'></i>
		<a href="javascript:;" @click='start'></a>
</section>
</template>

<script>
export default {
    methods: {
        share() {
            window.MizShare.share();
        },
				start(){
					location.href = location.origin+'/?payNumber=#/products';
				}
    },
    mounted() {
        var shareObj = {
            sharetext: '春季福利第一波,投资送超值红包!', // 分享标题
            sharedesc: '【米庄理财】投资送30元超值红包,多投多得,上不封顶!', // 分享描述
            sharelineLink: location.origin + '/activity/17-04/spring', // 分享链接
            shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
    }
}
</script>
