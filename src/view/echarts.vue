<template>
  <div class="ecahrs_page">
    <el-button @click="drawMain()">main</el-button>
    <el-button @click="drawFlower()">flower</el-button>
    <el-button @click="drawBall()">ball</el-button>
    <div class="chart_box">
      <div v-show="ifShowMain" id="main"></div>
      <div v-show="ifShowFlower" id="flower"></div>
      <div v-show="ifShowBall" id="ball"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { vintage } from "../theme/vintage";

export default {
  data() {
    return {
      // vintage:vintage
      ifShowMain: false,
      ifShowFlower: false, 
      ifShowBall: false,
    }
  },
  mounted() {
  },
  methods: {
    drawMain() {
      this.ifShowMain = true
      this.ifShowFlower = false
      this.ifShowBall = false
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main',"vintage"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          type: 'category',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    drawFlower() {
      this.ifShowFlower = true
      this.ifShowMain = false
      this.ifShowBall = false
      var chartDom = document.getElementById('flower');
      var flowerChart = echarts.init(chartDom);
      var option;
      const data = [];
      for (let i = 0; i <= 360; i++) {
        let t = (i / 180) * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      option = {
        title: {
          text: 'Two Value-Axes in Polar'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      };

      option && flowerChart.setOption(option);
    },
    drawBall() {
      this.ifShowMain = false
      this.ifShowFlower = false
      this.ifShowBall = true
      let ballDom = document.getElementById("ball")
      let ballChart = echarts.init(ballDom)

      var data_2 = [
        [
          [28604, 77, 17096869, 'Australia', 1990],
          [31163, 77.4, 27662440, 'Canada', 1990],
          [1516, 68, 1154605773, 'China', 1990],
          [13670, 74.7, 10582082, 'Cuba', 1990],
          [28599, 75, 4986705, 'Finland', 1990],
          [29476, 77.1, 56943299, 'France', 1990],
          [31476, 75.4, 78958237, 'Germany', 1990],
          [28666, 78.1, 254830, 'Iceland', 1990],
          [1777, 57.7, 870601776, 'India', 1990],
          [29550, 79.1, 122249285, 'Japan', 1990],
          [2076, 67.9, 20194354, 'North Korea', 1990],
          [12087, 72, 42972254, 'South Korea', 1990],
          [24021, 75.4, 3397534, 'New Zealand', 1990],
          [43296, 76.8, 4240375, 'Norway', 1990],
          [10088, 70.8, 38195258, 'Poland', 1990],
          [19349, 69.6, 147568552, 'Russia', 1990],
          [10670, 67.3, 53994605, 'Turkey', 1990],
          [26424, 75.7, 57110117, 'United Kingdom', 1990],
          [37062, 75.4, 252847810, 'United States', 1990]
        ],
        [
          [44056, 81.8, 23968973, 'Australia', 2015],
          [43294, 81.7, 35939927, 'Canada', 2015],
          [13334, 76.9, 1376048943, 'China', 2015],
          [21291, 78.5, 11389562, 'Cuba', 2015],
          [38923, 80.8, 5503457, 'Finland', 2015],
          [37599, 81.9, 64395345, 'France', 2015],
          [44053, 81.1, 80688545, 'Germany', 2015],
          [42182, 82.8, 329425, 'Iceland', 2015],
          [5903, 66.8, 1311050527, 'India', 2015],
          [36162, 83.5, 126573481, 'Japan', 2015],
          [1390, 71.4, 25155317, 'North Korea', 2015],
          [34644, 80.7, 50293439, 'South Korea', 2015],
          [34186, 80.6, 4528526, 'New Zealand', 2015],
          [64304, 81.6, 5210967, 'Norway', 2015],
          [24787, 77.3, 38611794, 'Poland', 2015],
          [23038, 73.13, 143456918, 'Russia', 2015],
          [19360, 76.5, 78665830, 'Turkey', 2015],
          [38225, 81.4, 64715810, 'United Kingdom', 2015],
          [53354, 79.1, 321773631, 'United States', 2015]
        ]
      ];

      let option_2 = {
        backgroundColor: {
          type: 'radial',
          x: 0.3,
          y: 0.3,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: '#f7f8fa'
            },
            {
              offset: 1,
              color: '#cdd0d5'
            }
          ]
        },
        grid: {
          left: 10,
          containLabel: true,
          bottom: 10,
          top: 10,
          right: 30
        },
        xAxis: {
          splitLine: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          scale: true
        },
        series: [
          {
            name: '1990',
            data: data_2[0],
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(120, 36, 50, 0.5)',
              shadowOffsetY: 5,
              color: {
                type: 'radial',
                x: 0.4,
                y: 0.3,
                r: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                  }
                ]
              }
            }
          },
          {
            name: '2015',
            data: data_2[1],
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(25, 100, 150, 0.5)',
              shadowOffsetY: 5,
              color: {
                type: 'radial',
                x: 0.4,
                y: 0.3,
                r: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                  }
                ]
              }
            }
          }
        ]
      };

      option_2 && ballChart.setOption(option_2);
    }
  }
}
</script>

<style lang="scss" scoped>
.ecahrs_page {
  .chart_box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    #main {
      width: 100vw;
      height: 300px;
      // background: #ccc;
    }
    #flower {
      width: 100vw;
      height: 300px;
    }
    #ball {
      width: 100vw;
      height: 300px;
    }
  }
  
}
</style>