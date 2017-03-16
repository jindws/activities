<template>
	<header>
		<dl>
		    <dd id='return' @click='returnBack'></dd>
		    <dd>{{title}}</dd>
		    <dd id='share' @click='shares'></dd>
		</dl>
	</header>
</template>


<script>
export default {
	data(){
        return{
           title:'米庄年货节',
        }
    },
    methods:{
        returnBack(){
            // history.back(-1);
            location.href=`${location.origin}/feature/xplan5`;
        },
        shares() {
            window.MizShare.share();
        },
      
    },
    created(){
        const shareObj = {
            sharetext: '美食专场', // 分享标题
            sharedesc: '[米庄年货节]相聚时刻就是和最爱的人一起分享！', // 分享描述
            sharelineLink: location.href,
            shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);

        console.log()
    }
}

</script>