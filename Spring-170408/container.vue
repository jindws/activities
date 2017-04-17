<template>
<section class="container">
    <a :class={end:end} href="javascript:;" @click='getNow'>{{end?'查看红包':'立即领取'}}</a>
    <dl id='myproduct'>
        <dd v-for='m in productsList'>
            <strong v-if='m.bonusRate'>
              {{m.interestRate}}<span>%+</span>{{m.bonusRate}}<span>%</span>
          </strong>
            <strong v-else-if='m.bonusRate===0'>
              {{m.interestRate}}<span>%</span>
          </strong>
            <strong v-else>
              -
          </strong>
        </dd>
    </dl>
    <a href="javascript:;" @click='start'></a>

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
import './css.scss'
export default {
    data() {
        return {
            // end: new Date() > new Date(2017, 3, 21),
            userKey: '',
            end: false,
            error: {
                show: false,
                outclass: 'fadeIn',
                inclass: 'flipInX',
                title: '',
                reason: '',
                end: false,
            },
            productsList: [],
        }
    },
    methods: {
        hideError() {
            this.error = Object.assign({}, this.error, {
                outclass: 'fadeOut',
                inclass: 'bounceOut'
            });
            setTimeout(() => this.error.show = false, 600);
        },
        search(key) {
            const re = eval("/" + key + "\=([^&]*)/;");
            const forsearch = location.search + '&' + location.hash.substring(2);
            return re.exec(forsearch) ? decodeURI(re.exec(forsearch)[1]) : ''
        },
        start() {
            location.href = location.origin + '/?payNumber=#/products';
        },
        gets(from) {
            const head = __DEV__ ? '//121.43.148.191:8101/' : '//api.mizlicai.com/activities/'
            return new Promise((resolve, reject) => {
                fetch(head + from.url, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: from.body
                }).then(data => data.json()).then(re => {
                    if (!re.status) {
                        resolve(re)
                    } else {
                        reject(re);
                    }
                }).catch(() => {
                    this.error = Object.assign({}, {
                        show: true,
                        outclass: 'fadeIn',
                        inclass: 'bounceIn',
                        title: '温馨提示',
                        reason: '请求失败!'
                    })
                })
            })
        },
        getNow() {
            if (this.end) {
                location.href = `${location.origin}/#/hongbao`;
            } else if (!this.userKey) {
                location.href = `${location.origin}/#/login?backTo=${location.origin}${location.pathname}`;
            } else {
                this.gets({
                    url: 'universal/getBonus.json',
                    body: `activity=GET_BONUS&userKey=${this.userKey}`
                }).then(data => {
                    this.end = true;
                    this.error = Object.assign({}, {
                        show: true,
                        outclass: 'fadeIn',
                        inclass: 'bounceIn',
                        title: '温馨提示',
                        reason: '红包领取成功'
                    })
                }, data => {
                    this.error = Object.assign({}, {
                        show: true,
                        outclass: 'fadeIn',
                        inclass: 'bounceIn',
                        title: '温馨提示',
                        reason: data.errorMsg
                    })
                })
            }
        },
        getThreeProducts(i = 0) {
            const products = ['三月', '半年', '一年'];
            this.gets({
                url: 'activity/getProduct',
                body: `productName=春季专享${products[i]}期`
            }).then(data => {
                this.productsList.push({
                    interestRate: (data.product.interestRate * 100).toFixed(1),
                    bonusRate: (data.product.bonusRate * 100).toFixed(1)
                })
            }).then(() => {
                if (++i < 3) {
                    this.getThreeProducts(i)
                }
            })
        }
    },
    created() {
        if (!__DEV__) {
            location.protocol = 'https:';
        }
    },
    mounted() {
        if (this.search('os')) {
            this.userKey = this.search('userKey');
        } else {
            this.userKey = localStorage.auth
        }
        this.getThreeProducts();
        this.gets({
            url: 'universal/hasBonus.json',
            body: `activity=GET_BONUS&userKey=${this.userKey}`
        }).then((re) => {
            this.end = false;
        }, (data) => {
            if (data.status === 1) {
                this.end = true;
            } else if (data.status !== 21000) {
                this.userKey = localStorage.auth;
            } else {
                this.userKey = '';
            }
        })
    },
}
</script>
