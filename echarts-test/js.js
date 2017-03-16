// var echarts = require('echarts');
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/map');
require('echarts/map/js/china');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    visualMap:{
      min: 800,
      max: 50000,
      text:['High','Low'],
      realtime: false,
      calculable: true,
        inRange: {
            color: ['lightskyblue','yellow', 'orangered']
        }
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',

          //  selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name:'广东', value:1000},
                {name:'浙江',value:20000}
            ]
        }
    ]
};

myChart.setOption(option);
