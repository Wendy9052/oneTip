<template>
  <div class="ecahrs_page">
    <div id="main"></div>
    <div id="flower"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {

    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 示例'
      },
      tooltip: {},
      xAxis: {
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
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.ecahrs_page{
  #main{
    width: 80%;
    height: 300px;
    // background: #ccc;
  }
  #flower{
    width: 80%;
    height: 300px;
  }
}
</style>