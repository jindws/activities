<template>
	<section :class="{nohead: nohead,container:iscontainer,flower:!iscontainer}">
		<a href="#/huayi" id="detail"></a>
        <dl>
        	<dd v-for='item in list' @click='toXplan(item)'></dd>
        </dl>
        <ul>
        	<li v-for='item in list_s' @click='toXplan(item)'></li>
        </ul>
    </section>
</template>


<script>
	export default {
		name:'container',
		data(){
	        return{
	           list:[435,436,437,438],
	           list_s:[441,440,439],
	           nohead:false,
	           iscontainer:true
	        }
	    },
	    methods:{
	    	toXplan(it){
	    		location.href=`//h5.mizlicai.com/feature/xplan5/#/goods/${it}`;
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
        	type(){
        		const t = this;
	            const hash = location.hash;
	            let title;
	            if(hash.indexOf('huayi')!==-1){
	                t.iscontainer = false;
	            }else{
	                t.iscontainer = true;
	            }
        	}
	    },
	    created(){
	    	this.nohead = this.getAppversion();
	    	this.type();
	    	const t = this;
        	$(window).on('hashchange', ()=> t.type());
	    }
	}
</script>
