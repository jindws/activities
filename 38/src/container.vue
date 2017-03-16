<template>
<section id='container'>
    <a href="javascript:;" id="share" @click='share'></a>
    <div id="top">
        <em class='animated fadeIn'></em>
        <em class='animated fadeIn'></em>
        <i class='animated zoomIn'></i>
    </div>
    <div id="main">
        <i v-for='item in slides' :id='item.id' :class='item.class' class='animated'></i>
        <div id='redbag'>
            <a href="javascript:;" class='btn' v-if='data.bied.status === 1' @click='seeRedBag'>点击查看</a>
            <a href="javascript:;" class='btn' v-else @click='getRedBag'>立即领取</a>
        </div>
        <p>加息特权唯妳尊享</p>
        <div id="biaodi">
            <p>{{data.product.name}}</p>

            <strong v-if='data.product.bonusRate'>
                {{(data.product.interestRate*100).toFixed(1)}}% + {{(data.product.bonusRate*100).toFixed(1)}}%
            </strong>
            <strong v-else-if='data.product.bonusRate===0'>
                {{(data.product.interestRate*100).toFixed(1)}}%
            </strong>
            <strong v-else>
                -
            </strong>
            <a v-if='!data.time.off' @click='queenBuy' href="javascript:;" class='btn'>女王专享</a>
            <a v-if='data.time.off' href="javascript:;" class='btn off'>活动未开始</a>
        </div>
        <div id="rule">
            <dl>
                <dt>【活动规则】</dt>
                <dd>活动时间：2017年3月8日</dd>
                <dd>详细规则：
                    <ul>
                        <li>每个米庄用户可在活动当日领取38元红包，红包仅限3月8日可使用，每个用户限领一次（红包即时发放，请在“我的资产-优惠券”查看；</li>
                        <li>活动当日，女性庄主享有“3.8女王节”三月期加息专享标投资特权（将根据庄主账户的性别区分，男性不可购买）；</li>
                        <li>如有疑问，请联系在线客服或致电<br/>400-699-8883（09:00-21:00）</li>
                    </ul>
                </dd>
                <dd>
                    活动最终解释权归米庄理财所有
                    <div>理财有风险，投资需谨慎！</div>
                </dd>
            </dl>
        </div>
    </div>
    <div v-if='error.show' id="alert" :class='error.outclass' class='animated'>
        <section class='animated' :class='error.inclass'>
            <p v-if='!error.end' @click='hideError'>{{error.title}}</p>
            <div class="">
                <span>{{error.reason}}</span>
                <a v-if='!error.end' href="javascript:;" @click='hideError'>确定</a>
            </div>
        </section>
    </div>
</section>
</template>

<script>
import './share'
export default {
    data() {
        return {
            slides: [{
                id: 'slide_1',
                class: 'caidai_1 fadeInDown'
            }, {
                id: 'slide_2',
                class: 'caidai_2 rotateInUpRight'
            }, {
                id: 'slide_3',
                class: 'caidai_1'
            }, {
                id: 'slide_4',
                class: 'caidai_3 fadeInUp'
            }, {
                id: 'slide_5',
                class: 'caidai_3'
            }],
            error: {
                show: false,
                outclass: 'fadeIn',
                inclass: 'flipInX',
                title: '',
                reason: '',
                end: false,
            },
            data: {
                product: {
                    bonusRate: '',
                    name: '-'
                },
                bied: {},
                time:{
                  off:false
                },
            }
        }
    },
    methods: {
        share() {
            window.MizShare.share();
        },
        search(item) {
            const start = location.search.indexOf(item);
            if (start === -1) {
                return false;
            }
            const end = location.search.substring(start).indexOf('&');
            return location.search.substring(start + item.length + 1, end !== -1 ? start + end : location.search.length);
        },
        seeRedBag() {
            location.href = `${location.origin}/#/hongbao`
        },
        queenBuy() {
            switch (this.data.sex.status) {
                case 2: //男
                    this.error = _assign({}, {
                        show: true,
                        outclass: 'fadeIn',
                        inclass: 'bounceIn',
                        title: '购买失败',
                        reason: '仅限女王购买'
                    })
                    break;
                default:
                    location.href = `${location.origin}/#/products/${this.data.product.serial}`;
            }
        },
        login() {
            location.href = `${location.origin}/#/login?backTo=${location.origin}${location.pathname}`;
        },
        hideError() {
            this.error = _assign(this.error, {
                outclass: 'fadeOut',
                inclass: 'bounceOut'
            });
            setTimeout(() => this.error.show = false, 900);
        },
        getdata() {
            let userKey = this.search('userKey');
            if (!userKey) {
                userKey = localStorage.auth||'';
            } else {
                localStorage.auth = userKey;
            }
            if (!userKey && arguments[0].needLogin) {
                this.login();
                return;
            }
            const api = __DEV__?'//121.43.148.191:8101/':'//api.mizlicai.com/activities/';

            let canshu = {
                method: arguments[0].method||"POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }
            if(!arguments[0].method){
              canshu = _assign(canshu,{
                body: `os=h5&userKey=${userKey}&${arguments[0].body||''}`
              })
            }

            fetch(api + arguments[0].url, canshu).then(re => {
                re.json().then(data => {
                    if (data.status === arguments[0].err) {
                        this.error = _assign({}, {
                            show: true,
                            outclass: 'fadeIn',
                            inclass: 'bounceIn',
                            title: '操作失败',
                            reason: data.errorMsg
                        })
                    } else if (arguments[0].truestate) {
                        if (data.status === 21000) {
                            this.login();
                            return;
                        }
                        this.error = _assign({}, {
                            show: true,
                            outclass: 'fadeIn',
                            inclass: 'bounceIn',
                            title: '温馨提示',
                            reason: data.errorMsg
                        })
                        if (arguments[0].redBagGet) {
                            this.getdata({
                                url: 'universal/hasBonus',
                                body: 'activity=WOMEN',
                                jiegou: 'bied'
                            });
                        }
                    } else if (arguments[0].jiegou) {
                        this.data = _assign(this.data, {
                            [arguments[0].jiegou]: data
                        })
                        if(arguments[0].jiegou === 'time'){
                          const timaA = data.currentTime.split('-');
                          const timeB = timaA[2].split(' ');
                          const timeC = timeB[1].split(':');

                          const time = new Date(timaA[0],timaA[1]-1,timeB[0],timeC[0],timeC[1],timeC[2]);
                          if(time>=new Date(2017,2,9)){
                                this.error = _assign({}, {
                                    show: true,
                                    outclass: 'fadeIn',
                                    inclass: 'bounceIn',
                                    title: '温馨提示',
                                    reason: '活动已结束!',
                                    end: true,
                                });
                          }else if(time<new Date(2017,2,8)){
                            this.data.time.off = true;
                          }
                        }
                    } else {
                        this.data = _assign(this.data, data)
                    }
                })
            }).catch(() => {
                this.error = _assign({}, {
                    show: true,
                    outclass: 'fadeIn',
                    inclass: 'bounceIn',
                    title: '请求失败',
                    end: true,
                    reason: '服务器出错!',
                })
            })
        },

        getRedBag() {
            this.getdata({
                url: 'universal/getBonus',
                body: 'activity=WOMEN',
                truestate: true,
                redBagGet:true
            })
        },
        googleAnalytics(name) {
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                        (i[r].q = i[r].q || []).push(arguments)
                    },
                    i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-77505833-1', 'auto');
            ga('send', 'pageview');
            ga('send', 'event', '按钮', '点击', name);
        },
    },
    created() {
        const shareObj = {
            sharetext: `3.8女王节,专享妳的特权`, // 分享标题
            sharedesc: `【米庄38女王节】领38元红包,再享1.1%特权加息`, // 分享描述
            sharelineLink: `${location.origin}${location.pathname}`,
            shareimgUrl: 'https://image.mizlicai.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);
        this.googleAnalytics('38妇女节')
        this.getdata({
            url: 'universal/hasBonus',
            body: 'activity=WOMEN',
            jiegou: 'bied'
        });
        if(!__DEV__&&location.protocol === 'http:'){
          location.protocol = 'https:';
        }
    },
    mounted() {
        this.getdata({
          url:'currentTime',
          jiegou:'time',
          method:'GET'
        })

        this.getdata({
            url: 'activity/getProduct',
            body: 'activity=WOMAN&productName=女王节',
        });
        this.getdata({
            url: 'gender',
            jiegou: 'sex',
        })
    },
}
</script>
