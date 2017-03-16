<template>
	<section id="container">
    <!-- <span class="num" data-from="0" data-to="30">0</span> -->
    <!-- <span class="num" data-from="0" data-to="100">0</span> -->
        <i id='share' @click='share'></i>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <!-- <div id='' class="swiper-slide" :style='{backgroundImage:"url("+images+"1.jpg)"}'></div> -->

                <!-- <div id='the_2' class="swiper-slide" :style='{backgroundImage:"url("+images+"2.jpg)"}'>
                    <span class="num the_101" data-from="0" data-to="101.8" data-snd='1'>0</span>
                </div> -->
                <div @click='toNext' v-for='index in allIndex' class="swiper-slide" 
                    :style='{backgroundImage:"url("+images+index+".jpg)"}'>
                </div>
            </div>
            <span v-if='index!==allIndex' id='pageNum'>{{index<10?'0'+index:index}} /<label>{{allIndex-1}}<label></span>
        </div>
        <em v-if='index !==allIndex' id="next"></em>
    </section>
</template>
<script>
import Swiper from 'swiper'
import './node_modules/swiper/dist/css/swiper.css'

export default {
	data(){
        return{
	        images: '//miz-image.b0.upaiyun.com/activities/2016/nianbao_',
            index:1,
            allIndex:12,
            swipers:null,
	    }
    },
    methods: {
        swiper(){
            var t = this;
            this.swipers = new Swiper('.swiper-container', {
                // loop:true,
                allowSwipeToPrev : false,
                iOSEdgeSwipeDetection : true,
                iOSEdgeSwipeThreshold : 50,
                // preventLinksPropagation : false,
                onInit(){
                    t.index = 1;
                    document.body.addEventListener('touchmove',function(e){e.preventDefault()});
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-77505833-1', 'auto');
                    ga('send', 'pageview');
                    ga('send', 'event', '按钮', '点击', `年报页码---1`);
                },
                onSlideChangeEnd(swiper){
                    t.index = swiper.activeIndex+1;
                    if(swiper.activeIndex === 0){
                        t.swipers.lockSwipeToPrev();
                    }else if(swiper.activeIndex === 11){
                        t.swipers.lockSwipeToNext();
                    }else{
                        t.swipers.unlockSwipeToPrev();
                        t.swipers.unlockSwipeToNext();
                    }

                    // if (location.host === "h5.mizlicai.com") {
                        // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        //     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        // ga('create', 'UA-77505833-1', 'auto');
                        // ga('send', 'pageview');
                        ga('send', 'event', '按钮', '点击', `年报页码---${swiper.activeIndex}`);
                    // }

                },
                onLock(){
                    t.swipers.lockSwipeToPrev();
                }
            })
        },
        share(){
            window.MizShare.share();
        },
        toNext(){
            const t = this;

            switch(this.swipers.activeIndex){
                case 0:
                    t.swipers.slideNext();
                    break;
                case 11:
                    location.href = location.origin;
                    break;
            }
        },
    },
    mounted() {
         this.swiper();
    },
    created(){
        const shareObj = {
            sharetext: '米庄理财2016运营年报重磅来袭！', // 分享标题
            sharedesc: '【米庄年报】我们一路成长，一路收获，只因有你！', // 分享描述
            sharelineLink: location.href,
            shareimgUrl: 'https://miz-image.b0.upaiyun.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
    }
}
</script>