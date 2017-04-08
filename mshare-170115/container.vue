<template>
	<section class="container" :class='nohead?"nohead":""'>
				<a href="https://h5.mizlicai.com/feature/xplan5/#/order"></a>
    </section>
</template>


<script>
	export default {
	    methods:{
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
	    	this.nohead = this.getAppversion();
	    }
	}
</script>
