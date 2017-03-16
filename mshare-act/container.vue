<template>
	<section id=container>
	    <section id=top>
	        <img v-if='topbg' class='animated':class='slides' :src="'//miz-image.b0.upaiyun.com/xplan/nianhuo/'+topbg+'.png'" alt="">
	        <em></em>
	        <dl id="tab">
	            <dd v-cloak v-for='(item,index) in tabs' :class='{on:selected===index}' @click='select(index)'>{{item}}</dd>
	        </dl>
	    </section>
	    <section id=products v-cloak>
	        <p>{{intabTxt[selected]}}</p>
	        <dl>
	            <dd v-if='productClass' class='animated' :class='productClass' v-for='item in subjects' @click='toXplan(item.product.id)'>
                    <em :style='{backgroundImage:"url("+item.product.listImage+")"}'>
                        <label>市场价:¥<del>{{item.product.defaultPrice}}</del></label>
                    </em>
	                <ul>
	                    <li>{{item.product.productName}}</li>
	                    <li>投资金额:
	                        <span>{{item.product.saleDesc.substring(0,item.product.saleDesc.indexOf('元'))}}元</span>起
	                    </li>
	                    <li>年化收益
	                        <span>{{item.product.saleDesc.substring(item.product.saleDesc.indexOf('年化')+2)}}</span>
	                    </li>
	                    <li><a href="javascript:;">查看详情</a></li>
	                </ul>
	                <i></i>
	            </dd>
	        </dl>
	    </section>
	    <footer v-cloak>
	        {{footer[0]}}
	        <span>{{footer[1]}}</span>
	    </footer>
	</section>
</template>
<script>
// const requestHeader = '//121.43.148.191:8308';
const requestHeader = '//api.mizlicai.com';
// import wx from 'jweixin'

export default {
	data(){
        return{
	        selected: '',
	        tabs:['乐享礼包','百草味坚果','订制礼盒'],
	        intabTxt:['乐 享 一 家 人 · 吃 出 幸 福 年', '延 年 益 寿 果 · 过 节 人 人 有','定 制 中 华 礼 · 恭 贺 团 圆 节'],
	        subjects:[],
	        footer:['活动最终解释权归米庄理财所有','理财有风险，投资需谨慎！'],
	        ids:[21,15,22],
	        topbgs:['lexiang','baicao','lihe'],
	        slides:'fadeInUp',
	        topbg:'',
	        productClass:'',
	        time:null,
	    }
    },
    methods: {
        select(tab){
            if(this.selected===+tab)return;
        	this.selected = +tab;
            const t = this;
        	$.ajax({
        		url: `${requestHeader}/xplan/subject/${this.ids[tab]}.json`,
        		dataType: 'json',
        		data: {os: 'h5'},
                beforeSend(){
                    t.slides = 'fadeOutDown';
                    t.productClass='fadeOut';
                    t.time = Date.now();
                }
        	})
        	.done(data=> {
                setTimeout(()=>{
                    this.subjects = data.subjectModules||{};
                    this.slides = 'fadeInUp';
                    this.topbg = this.topbgs[this.selected];
                    this.productClass='fadeIn';
                },this.time+200-Date.now())
        	})
        	.fail(()=> {
        		console.error("error");
        	});
        },
        toXplan(id){
            // location.href = `${location.origin}/feature/xplan5/#/goods/${id}`
            location.href = `//h5.mizlicai.com/feature/xplan5/#/goods/${id}`
        },
        userAgent(ua) {
            const u = navigator.userAgent;
            const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            return ua === 'ios' ? isiOS : isAndroid;
        },
        getUrlParam(key) {
            const search = location.search;
            const arr = !search ? [] : location.search.substr(1).split('&');
            const param = {};
            for (let i = 0, l = arr.length; i < l; i++) {
                const kv = arr[i].split('=');
                param[kv[0]] = kv[1];
            }
            return key ? (param[key] || '') : param;
        }
    },
    mounted() {
    	const type=this.getUrlParam('type');
        this.select(type?type-1:0);
    },
    created(){
        const t = this;
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