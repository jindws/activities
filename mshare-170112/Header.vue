<template>
	<header>
		<dl>
		    <dd id='return' @click='returnBack'></dd>
		    <dd>{{title}}</dd>
		    <dd id='share'></dd>
		</dl>
	</header>
</template>


<script>
const title =  '米享计划';
document.title = title;
export default {
	data(){
        return{
           title
        }
    },
    methods:{
        returnBack(){
            location.href=`${location.origin}/feature/xplan5`;
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
}

</script>