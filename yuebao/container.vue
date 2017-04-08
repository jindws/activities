<template>
<section id='container'>
    <a href="javascript:;" id="share" :class='{hashead:!nohead}' @click='shares'></a>
    <div class="swiper-container" :style='{height:height}'>
        <div class="swiper-wrapper" :style='{height:height}'>
            <!-- 1 -->
            <div class="swiper-slide" id='page_1' :style='{height:height,paddingBottom:paddingBottom}'>
                <label id="time" class='animated lightSpeedIn' :style='{top:bili*0.2+"px"}'>{{year}}年{{month}}月</label>
                <section id="date" class='animated zoomIn' :style='{top:bili*0.59+"px"}'>数据截止至<br/>{{year}}/{{month}}/{{day}} 24:00:00</section>
            </div>
            <!-- 2 -->
            <div class="swiper-slide" id='page_2' :style='{height:height,paddingBottom:paddingBottom}'>
                <section class="all" :style='{top:bili*0.2+"px"}'>
                    <div>
                        {{month}}月累计成交额(元)
                    </div>
                    <em>
											<i></i>
											{{data_2.chengjiao}}
										</em>
                </section>
                <section id='up' :style='{top:bili*0.25+"px"}'>
                    同比{{monthlyReport.year-1}}年{{monthlyReport.month}}月增长<label>{{(monthlyReport.accumulatedAmountYearOnYearUp||0).toFixed(2)}}%</label>
                </section>
                <div id="main_2" :style='{maxHeight:bili*0.9+"px"}'></div>
            </div>
            <!-- 3 -->
            <div class="swiper-slide" id='page_3' :style='{height:height,paddingBottom:paddingBottom}'>
                <section class="all" :style='{top:bili*0.2+"px"}'>
                    <div>
                        {{month}}月累计为投资人赚取收益(元)
                    </div>
                    <em>
										<i></i>
										{{data_3.profit}}
									</em>
                </section>

                <section id='up' :style='{top:bili*0.25+"px"}'>
                    同比{{year-1}}年{{month}}月增长<label>{{(+monthlyReport.accumulatedInterestYearOnYearUp||0).toFixed(2)}}%</label>
                </section>
                <div id="main_3" :style='{maxHeight:bili*0.9+"px"}'></div>
            </div>
            <!-- 4 -->
            <div class="swiper-slide" id='page_4' :style='{height:height,paddingBottom:paddingBottom}'>
                <section class="all" :style='{top:bili*0.2+"px"}'>
                    <div>
                        {{month}}月累计新增用户数(人)
                    </div>
                    <em>
									<i id='user'></i>
									{{data_4.sum_add}}
								</em>
                </section>

                <section id='add' :style='{top:bili*0.25+"px"}'>
                    {{month}}月新增用户活跃地区排名
                    <dl>
                        <dd v-for='(value,key,index) in data_4.place'><i></i><label>NO.{{index+1}}</label><span>{{value}}</span></dd>
                    </dl>
                </section>
                <div v-if='slideNum === 3' id="main_4" :style='{maxHeight:bili*0.85+"px"}' class='animated bounceIn'></div>
            </div>
            <!-- 5 -->
            <div class="swiper-slide" id='page_5' :style='{height:height,paddingBottom:paddingBottom}' v-if='!productList'>
                <p class='intitle'>{{month}}月产品更新{{json.productList&&json.productList[0].updateProductNames}}</p>
                <div class="swiper-5">
                    <div class="swiper-wrapper">
                          <div v-if='year==2017&&month==2' class="swiper-slide">
                              <img src="https://image.mizlicai.com/activities/yunying-17/5_01.png" alt="">
                              <p>新增特色理财专栏</p>
                              <div>月月升、月月返产品优先推荐</div>
                          </div>
                          <div v-if='year==2017&&month==2' class="swiper-slide">
                              <img src="https://image.mizlicai.com/activities/yunying-17/5_02.png" alt="">
                              <p>优惠智选</p>
                              <div>智能选优惠 收益享最佳</div>
                          </div>
                        <div v-else v-for='item in json.productList' class="swiper-slide">
                            <img :src="item.updateProductImage" alt="">
                            <p>{{item.updateProductName}}</p>
                            <div>{{item.updateProductInfo}}</div>
                        </div>

                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <!-- 6 -->
            <div class="swiper-slide" id='page_6' :style='{height:height,paddingBottom:paddingBottom}'>
                <p class='intitle'>{{month}}月热门资产</p>
                <dl v-if='slideNum === (5 -productList)'>
                    <dd class='animated fadeInUp' id='page_6_1'>
                        <label>最畅销资产</label>
                        <p>{{monthlyReport.bestSellingProduct}}</p>
                        <span>销售占比{{(monthlyReport.bestSellingProductPercent).toFixed(1)}}%</span>
                        <div id="main_6"></div>
                    </dd>
                    <dd class='animated fadeInUp' id='page_6_2'>
                        <label>活动加息最高资产</label>
                        <p>{{monthlyReport.bestInterestRateName}}</p>
                        <span>最高加息{{monthlyReport.bestInterestRate}}%</span>
                        <em class='animated zoomInUp'></em>
                    </dd>
                    <dd class='animated fadeInUp' id='page_6_3'>
                        <label>特色理财畅销产品</label>
                        <p>{{monthlyReport.specialProductName}}</p>
                    </dd>
                </dl>
            </div>
            <!-- 7 -->
            <div class="swiper-slide" id='page_7' :style='{height:height,paddingBottom:paddingBottom}'>
                <p class='intitle'>{{month}}月龙虎榜</p>
                <dl v-if='slideNum === (6 -productList)'>
                    <dd class='animated fadeInUp' id='page_7_1'>
                        <div class="title">累计投资最多</div>
                        <p class='name'>{{monthlyReport.mostInvestmentUserName}}{{monthlyReport.mostInvestmentUserGender === '男'?'先生':'女士'}}</p>
                        <span><label>共计:</label>{{monthlyReport.mostInvestmentPurchaseAmount.toFixed(2)}}元</span>
                        <i :class='{touzi_MEN:monthlyReport.mostInvestmentUserGender ==="男"}' class='touzi animated zoomIn'></i>
                    </dd>
                    <dd class='animated fadeInUp' id='page_7_2'>
                        <div class="title">累计收益最高</div>
                        <p class='name'>{{monthlyReport.mostRateRname}}{{monthlyReport.mostRateGender === '男'?'先生':'女士'}}</p>
                        <span><label>共计:</label>{{monthlyReport.mostRateIncome.toFixed(2)}}元</span>
                        <i :class='{shouyi_MEN:monthlyReport.mostRateGender ==="男"}' class='shouyi animated zoomIn'></i>
                    </dd>
                    <dd class='animated fadeInUp' id='page_7_3'>
                        <div class="title">累计佣金最多</div>
                        <p class='name'>{{monthlyReport.mostCommissionTotalUserName}}{{monthlyReport.mostCommissionTotalUserGender === '男'?'先生':'女士'}}</p>
                        <span><label>共计:</label>{{monthlyReport.mostCommissionTotalCommissionTotal.toFixed(2)}}元</span>
                        <label>(累计邀请好友{{monthlyReport.mostCommissionTotalInvitationNum}}人)</label>
                        <i :class='{yongjin_MEN:monthlyReport.mostCommissionTotalUserGender ==="男"}' class='yongjin animated zoomIn'></i>
                    </dd>
                </dl>
            </div>
            <div class="swiper-slide" id='page_8' :style='{height:height,paddingBottom:paddingBottom}'>
                <p class='intitle'>{{monthlyReport.month}}月活动</p>
                <div class="swiper-8">
                    <div class="swiper-wrapper">
                        <div v-for='item in json.activityList' class="swiper-slide">
                            <a href="javascript:;" class="bg"></a>
                            <section>
                                <img :src="item.activityImage" alt="">
                                <p>{{item.activityName}}</p>
                                <dl>
                                    <dt>
                                    活动时间：{{item.activityDate}} <br/>活动热点：{{item.activityHotspot}}
                                  </dt>
                                    <dd v-if='item.activityParameter1'>
                                        {{item.activityParameter1}}
                                    </dd>
                                    <dd v-if='item.activityParameter2'>
                                        {{item.activityParameter2}}
                                    </dd>
                                    <dd v-if='item.activityParameter3'>
                                        {{item.activityParameter3}}
                                    </dd>
                                </dl>
                            </section>
                        </div>
                    </div>
                </div>
                <i id="down" class='animated pulse' @click='swiper_8_next'></i>
                <em @click='moreActivity'>查看更多活动<i></i></em>
            </div>
            <div class="swiper-slide" id='page_9' :style='{height:height,paddingBottom:paddingBottom}'>
                <section>
                    <img :src="json.customerService.customerServiceImage" alt="">
                    <p>本月明星客服:{{json.customerService.customerServiceName}}</p>
                    <label>
                        满意度：{{json.customerService.satisfaction}}%  解决率：{{json.customerService.resolutionRate}}%<br/>客户评语：{{json.customerService.remark}}
                    </label>
                    <dl>
                        <dt>米庄客服中心成绩单</dt>
                        <dd>客户满意度：{{json.customerService.customerSatisfaction}}%</dd>
                        <dd>解决问题数量：{{json.customerService.resolutionNum}}件</dd>
                        <dd>处理问题平均时长：{{json.customerService.resolutionTime}}s</dd>
                    </dl>
                </section>
            </div>
            <div class="swiper-slide" id='page_10' :style='{height:height,paddingBottom:paddingBottom}'>
                <img v-if='slideNum === (9-productList)' class='animated zoomIn' src="//image.mizlicai.com/activities/yunying17y1m/10-1.png" alt="">
                <a v-if='weixin' href="//h5.mizlicai.com/#/products" id="detail"></a>
                <!-- <a href="//h5.mizlicai.com/activity/yuebao/2016" id="before">查看2016运营年报<i></i></a> -->
                <a :href="lasthref" id="before">查看上月运营报告<i></i></a>
            </div>
        </div>
    </div>
    <section id="yema" v-if='slideNum<9' @click='swiper_next'>
        {{'0'+(slideNum+1)}}<label> / {{10-productList}}</label><i></i>
    </section>
</section>
</template>


<script>
import Swiper from 'swiper'
import './node_modules/swiper/dist/css/swiper.css'
import './node_modules/animate.css/animate.css'
import _includes from 'lodash/includes'
import _times from 'lodash/times'


// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china'
export default {
    data() {
        return {
            mheight: '',
            bili: 1,
            swiper: null,
            swiper_5: null,
            swiper_8: null,
            weixin: navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger",
            nohead: true,
            slideNum: 0,
            height: $(window).height() + 'px',
            // height:document.body.scrollHeight,
            year: '-',
            month: '-',
            day: '-',
            monthlyReport: {},
            json: {
                customerService: {},
            },
            data_2: {
                chengjiao: '-',
                up: '-',
            },
            data_3: {
                profit: '-',
            },
            data_4: {
                sum_add: '-',
                place: {}
            },
            // data_7: {
            //     mostCommissionTotalCommissionTotal: '-',
            //     mostInvestmentPurchaseAmount: '-',
            //     mostRateIncome: '-',
            // },
            data_9: {
                resolutionNum: '-',
            },
            lasthref: '',
            lastmonth: '',
            lastyear: '',
            paddingBottom: 0,
            productList:0,
            notStart:true,
            //{{json.productList&&json.productList[0].updateProductNames}}
        }
    },
    methods: {
        swiper_next() {
            this.swiper.slideNext();
        },
        swiper_8_next() {
            this.swiper_8.slideNext();
        },
        moreActivity() {
            location.href = 'https://h5.mizlicai.com/#/activity';
        },
        shares() {
            window.MizShare.share();
        },
        format_number(n) {
            const b = parseInt(n).toString();
            const len = b.length;
            if (len <= 3) {
                return b;
            }
            const r = len % 3;
            return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
        },
        num_animate(num, data_num, data_type, dot = 0, duration = 1000) {
            $(this).attr({
                num: num / 10,
            }).animate({
                num
            }, {
                duration,
                easing: 'swing',
                // step: now => t[data_num][data_type] = (+(now).toFixed(dot)).toLocaleString()
                step: now => this[data_num][data_type] = this.format_number(now),
            });
        },
        echarts_2() {
            const myChart = echarts.init(document.getElementById('main_2'));
            const lastyear = (this.monthlyReport.accumulatedAmountLastYear / 100000000).toFixed(1);
            const thisyear = (this.monthlyReport.accumulatedAmount / 100000000).toFixed(1);
            let min = Math.min(Math.floor(thisyear - lastyear * 2), lastyear);
            min = min < 0 ? 0 : min;
            const imax = Math.ceil(thisyear / 2 + 1) * 2;
            const interval = Math.ceil((imax - min) / 5);
            const max = interval * 5 + min;
            const option = {
                color: ['#1c9bfd'],
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}<br />{a}:{c}亿',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '5%',
                    right: '6%',
                    bottom: '14%',
                    containLabel: true,
                    borderWidth: '20px',
                    show: true,
                    z: 0
                },
                xAxis: [{
                    type: 'category',
                    data: [`${this.monthlyReport.year-1}年${this.monthlyReport.month}月`, `${this.monthlyReport.year}年${this.monthlyReport.month}月`],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#52b7ff',
                        }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    position: 'right',
                    min,
                    max,
                    interval,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)',
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)',

                        }
                    }
                }],
                series: [{
                    name: '成交额',
                    type: 'bar',
                    barWidth: '25%',
                    // silent:true,
                    // legendHoverLink:false,
                    label: {
                        color: '#fff',
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}亿',
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    data: [lastyear, thisyear]
                }],
            };
            myChart.setOption(option)
            // setTimeout(()=>myChart.setOption(option),5000)
        },
        echarts_3() {
            const main = document.getElementById('main_3');
            if (!main) return;
            const myChart = echarts.init(main);

            const lastyear = (this.monthlyReport.accumulatedInterestLastYear / 10000).toFixed(1);
            const thisyear = (this.monthlyReport.accumulatedInterest / 10000).toFixed(1);
            let min = Math.min(Math.floor(thisyear - lastyear * 2), lastyear);
            min = min < 0 ? 0 : min;
            const imax = Math.ceil(thisyear / 2 + 1) * 2;
            const interval = Math.ceil((imax - min) / 5);
            const max = interval * 5 + min;
            const option = {
                color: ['#1c9bfd'],
                tooltip: {
                    trigger: 'axis',
                    // formatter:'{c}万',
                    formatter: '{b}<br />{a}:{c}万',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '5%',
                    right: '6%',
                    bottom: '14%',
                    containLabel: true,
                    borderWidth: '20px',
                    show: true,
                    z: 0
                },
                xAxis: [{
                    type: 'category',
                    data: [`${this.monthlyReport.year-1}年${this.monthlyReport.month}月`, `${this.monthlyReport.year}年${this.monthlyReport.month}月`],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#52b7ff',
                        }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    position: 'right',
                    min,
                    max,
                    interval,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)',
                        }
                    },
                    splitLine: {
                        // show:false
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)',

                        }
                    }
                }],
                series: [{
                    name: '成交额',
                    type: 'bar',
                    barWidth: '25%',
                    label: {
                        color: '#fff',
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}万',
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    data: [lastyear, thisyear],
                }]
            };
            myChart.setOption(option);
        },
        echarts_4() {
            const myChart = echarts.init(document.getElementById('main_4'));
            _times(3, index => {
                const name = `top${index+1}AreaProvince`;
                let pro = this.monthlyReport[name];
                let re = _includes(['北京', '上海', '天津', '重庆', '武汉', '成都'], pro) ? '市' : '省';
                this.data_4.place[name] = `${pro}${re}`;
            })

            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}'
                },
                visualMap: {
                    min: 1,
                    max: 3,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['#ffc310', '#ff5410', '#00d2ff']
                    },
                    show: false,
                },
                series: [{
                        name: '中国',
                        type: 'map',
                        mapType: 'china',
                        silent: true,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [{
                                name: this.monthlyReport.top1AreaProvince,
                                value: 1,
                            },
                            {
                                name: this.monthlyReport.top2AreaProvince,
                                value: 2,
                            },
                            {
                                name: this.monthlyReport.top3AreaProvince,
                                value: 3,
                            }
                        ],
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#3caafe',
                                areaColor: '#1c9bfd',
                            }
                        }
                    },

                ]
            };

            myChart.setOption(option);
        },
        echarts_6() {
            const main = document.getElementById('main_6');
            if (!main) return;
            var myChart = echarts.init(main);
            // 绘制图表

            const option = {
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    selectedOffset: 10,
                    data: [{
                            value: this.monthlyReport.bestSellingProductPercent,
                            selected: true
                        },
                        {
                            value: 100 - this.monthlyReport.bestSellingProductPercent
                        }
                    ],
                    itemStyle: {
                        normal: {
                            color: '#fae2ab',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: () => Math.random() * 200
                }]
            };
            myChart.setOption(option);
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
        search(item) {
            const start = location.search.indexOf(item);
            const theStart = location.search.substring(start);
            let end = theStart.indexOf('&');
            if (theStart.indexOf('?') !== -1) {
                if (end === -1) {
                    end = theStart.indexOf('?');
                } else {
                    end = Math.min(end, theStart.indexOf('?'));
                }
            }
            return location.search.substring(start + item.length + 1, end !== -1 ? start + end : location.search.length);
        },
        start(){
          this.notStart=false;
          this.swiper = new Swiper('.swiper-container', {
              iOSEdgeSwipeDetection: true,
              height: 500,
              autoHeight: true,
              onTransitionEnd: swiper => {
                  this.slideNum = swiper.activeIndex;
                  switch (swiper.activeIndex) {
                      case 1:
                          this.echarts_2();
                          this.num_animate(this.monthlyReport.accumulatedAmount, 'data_2', 'chengjiao');
                          break;
                      case 2:
                          this.echarts_3();
                          this.num_animate(this.monthlyReport.accumulatedInterest, 'data_3', 'profit');
                          break;
                      case 3:
                          setTimeout(() => this.echarts_4(), 200);
                          this.num_animate(this.monthlyReport.sumNewUser, 'data_4', 'sum_add');
                          break;
                      case (5 - this.productList):
                          setTimeout(() => this.echarts_6(), 200);
                          break;
                  }
              },
          })
        }
    },
    created() {
        this.year = this.search('year') || '';
        this.month = this.search('month');
        const shareObj = {
            sharetext: `米庄理财${this.year}年${this.month}月运营报告`, // 分享标题
            sharedesc: `[米庄${this.month}月运营报告]感谢您对米庄理财的信任`, // 分享描述
            sharelineLink: location.href,
            shareimgUrl: 'https://image.mizlicai.com/activities/mother/logo.png' // 分享图标
        };
        window.MizShare.config(shareObj);

        const API = __DEV__ ? 'http://121.43.148.191:8113' : 'https://api.mizlicai.com';
        const date = new Date();
        const nowpage = `year=${date.getFullYear()}&month=${date.getMonth()+1}`;
        fetch(`${API}/monthlyReport`, {
            method: "POST",
            // mode: 'no-cors',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `year=${this.year}&month=${this.month}`
        }).then(res => {
            if (res.status !== 200 && location.search.substring(1).indexOf(nowpage) === -1) {
                location.search = nowpage;
                return;
            }
            res.json().then(data => {
                const re = data.monthlyReport;
                const month = +this.month !== 1 ? this.month - 1 : 12;
                const year = +this.month !== 1 ? this.year : this.year - 1;
                const search = `year=${year}&month=${month}`;
                this.lasthref = `${location.origin}${location.pathname}?${search}`;
                if (new Date(year, month) >= new Date(2017, 2)) {
                    this.lasthref = `${location.origin}${location.pathname}?${search}`;
                } else {
                    this.lasthref = 'https://h5.mizlicai.com/activity/yuebao/17-1m.html';
                }
                this.lastmonth = month;
                this.lastyear = year;
                if (!re) {
                    location.href = this.lasthref;
                    return;
                }
                this.day = (new Date((new Date(re.year, re.month)) - 1)).getDate();
                this.monthlyReport = re;
                this.json = JSON.parse(re.json);
                setTimeout(() => {
                    this.swiper_8 = new Swiper('.swiper-8', {
                        iOSEdgeSwipeDetection: true,
                        height: $(window).height() * 0.85,
                        direction: 'vertical',
                        loop: true,
                        effect: 'flip',
                        flip: {
                            slideShadows: true,
                            limitRotation: true,
                        }
                    });
                    // if (t.json.productList.length <= 1) return;
                    this.swiper_5 = new Swiper('.swiper-5', {
                        iOSEdgeSwipeDetection: true,
                        pagination: '.swiper-pagination',
                        paginationClickable: false,
                        effect: 'cube',
                        cube: {
                            slideShadows: true,
                            shadow: false,
                            shadowOffset: 100,
                            shadowScale: 0.6
                        },
                        onTouchEnd: swiper => {
                            // if (-swiper.translate === $(window).width() * (t.json.productList.length - 1)) {
                            //     t.swiper_next();
                            // } else if (swiper.translate === 0) {
                            //     t.swiper.slidePrev();
                            // }
                            if (-swiper.translate === $(window).width() * (2 - 1)) {
                                this.swiper_next();
                            } else if (swiper.translate === 0) {
                                this.swiper.slidePrev();
                            }
                        }
                    })
                }, 500);
            })
        }).catch(function(error) {
            if (location.search.substring(1).indexOf(nowpage) !== -1) {
                location.search = nowpage;
                return;
            }
            alert('服务器出错!')
        })
        this.googleAnalytics(`${document.title}-1`); //埋点分享
    },
    mounted() {
        $('body').on('touchmove', e => e.preventDefault());
        // this.swiper = new Swiper('.swiper-container', {
        //     iOSEdgeSwipeDetection: true,
        //     height: 500,
        //     autoHeight: true,
        //     onTransitionEnd: swiper => {
        //         this.slideNum = swiper.activeIndex;
        //         switch (swiper.activeIndex) {
        //             case 1:
        //                 this.echarts_2();
        //                 this.num_animate(this.monthlyReport.accumulatedAmount, 'data_2', 'chengjiao');
        //                 break;
        //             case 2:
        //                 this.echarts_3();
        //                 this.num_animate(this.monthlyReport.accumulatedInterest, 'data_3', 'profit');
        //                 break;
        //             case 3:
        //                 setTimeout(() => this.echarts_4(), 200);
        //                 this.num_animate(this.monthlyReport.sumNewUser, 'data_4', 'sum_add');
        //                 break;
        //             case 5:
        //                 setTimeout(() => this.echarts_6(), 200);
        //                 break;
        //         }
        //     },
        // })
        this.paddingBottom = $(window).height() - $('#page_1').height() + 'px';
        this.mheight = $(window).height() - $(window).width() * 0.12 + 'px';
        const sc = ($(window).height() - $(window).width() * 0.12) / $(window).width() / 1.6;
        this.bili = sc * $(window).width();
    },
    watch: {
        slideNum(val) {
            this.googleAnalytics(`${document.title}-${val+1}`); //埋点分享
            this.paddingBottom = $(window).height() - $(`#page_${val+1}`).height() + 'px';
        },
        json(val){
            this.productList = ((val.productList&&val.productList[0].updateProductNames)||(this.year==2017&&this.month==2))?0:1;
            this.notStart = false;
        },
        notStart(){
          setTimeout(()=>{
            this.start();
          },1000)
        }
    }
}
</script>
