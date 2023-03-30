
/*************************************
* 공통 변수 
**************************************/
var horizontalMultiBarSeries = [
  {
    type: 'bar',
    name: '홍길동',
    stack: 'MultiChart', // 이름이 모두 동일해야 함.
    data: [4],
    showBackground: true,
    backgroundStyle: {
      borderRadius: [6, 6, 6, 6],
    },
    itemStyle: {
      borderRadius: [6, 0, 0, 6],
    },
  },
  {
    type: 'bar',
    name: '김윤정',
    stack: 'MultiChart', // 이름이 모두 동일해야 함.
    data: [4],
  },
  {
    type: 'bar',
    name: '권나연',
    stack: 'MultiChart', // 이름이 모두 동일해야 함.
    data: [10],
  },
  {
    type: 'bar',
    name: '박은희',
    stack: 'MultiChart', // 이름이 모두 동일해야 함.
    data: [1],
    itemStyle: {
      borderRadius: [0, 6, 6, 0],
    },
  },
]

// 멀티차트 툴팁 커스텀. value 에 % 추가
let multiChartTooltip = {
  trigger: 'axis', // item, axis 유형이 있음. 개별 툴팁일지, 바 전체 툴팁일지 결정 
  borderColor: 'transparent',
  textStyle: {
    fontSize: 11,
    fontFamily: 'Noto Sans KR',
  },
  appendToBody: true,
  formatter: function(params) {
    var obj = `<div class="tooltip-title">${params[0].axisValue}</div>`

    // sum 구하기
    var sum = 0;
    for(var i=0; i<params.length; i++) {
      sum += params[i].value;

      // 1000단위 콤마(,) 추가, 
      var addCommaValue = params[i].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // 비율구하기
      var percent = (params[i].value / sum * 100).toFixed(1);

      obj += `<div class="tooltip-remark" style="--color:${params[i].color}">${params[i].seriesName} <span class="values">${addCommaValue}명 (${percent}%)</span></div>`
    }

    return obj;
  },
}

/**************************
* Bar1 - 기본유형
***************************/
const barChart1 = () => {
  var chartDom = document.getElementById('barV-1');
  var myChart = echarts.init(chartDom);

  option = {
    grid: {
      show: false,
      width: 240,
      left: 'center', // 숫자 가능
      bottom: 25,
    },
    color: ['#2d99ff'],
    barWidth: 24,
    xAxis: {
      type: 'category',
      data: ['02.08', '02.09', '02.10', '02.11', '02.12'],
      axisLabel: {
        color: '#888',
        fontSize: 12,
        fontFamily: 'Noto Sans KR',
      },
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    tooltip: {
      trigger: 'axis', // item 기본값. axis 일경우 xAxis value 값 위치가 변경됨.
    },
    label: {
      show: true,
      position: 'top',
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'Noto Sans KR',
    },
    series: [
      {
        type: 'bar',
        itemStyle: {
          borderRadius: [6,6,0,0],
        },
        label: {
          formatter: function(params) {
            var addCommaValue = params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return addCommaValue + '건';
          }
        },
        data: [5, 6, 2, 1, 3], 
        // data: [{value: 5},{value: 4}, {value: 2}, {value: 1}, {value: 3}], 두가지 형태 모두 가능
      }
    ],
  }

  option && myChart.setOption(option);
};



/**************************
* Bar2 - Lable 데이터 커스텀 
***************************/
const barChart2 = () => {
  var chartDom = document.getElementById('barV-2');
  var myChart = echarts.init(chartDom);

  option = {
    grid: {
      show: false,
      width: 240,
      left: 'center', // 숫자 가능
      bottom: 25,
    },
    barWidth: 45,
    xAxis: {
      type: 'category',
      data: ['02.02', '02.03'],
      axisLabel: {
        color: '#555',
        fontSize: 12,
        fontFamily: 'Noto Sans KR',
      },
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    tooltip: {
      trigger: 'axis', // 바 전체 데이터 나옴
      borderColor: 'transparent',
      textStyle: {
        fontSize: 11,
        fontFamily: 'Noto Sans KR',
      },
      appendToBody: true,
    },
    label: {
      show: true,
      position: 'top',
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'Noto Sans KR',
    },
    series: [
      {
        type: 'bar',
        itemStyle: {
          borderRadius: [6,6,0,0],
        },
        label: {
          formatter: function(params) {
            return params.data.tooltip;
          }
        },
        data: [
          {
            value: 3000,
            tooltip: '10% 증가',  
            itemStyle: {
              color: '#ddd',
            }
          },
          {
            value: 2200,
            tooltip: '20% 증가',
            itemStyle: {
              color: '#feb23a',
            }
          },
        ],
      }
    ],
  }

  option && myChart.setOption(option);
};

/*********************
* Multi Bar
**********************/
const MultiBar1 = () => {
  var chartDom = document.getElementById('multiBarV-1');
  var myChart = echarts.init(chartDom);

  option = {
    grid: {
      show: false,
      width: 240,
      left: 'center', // 숫자 가능
      bottom: 25,
    },
    barWidth: 45,
    xAxis: {
      type: 'category',
      data: ['02.02', '02.03'],
      axisLabel: {
        color: '#555',
        fontSize: 12,
        fontFamily: 'Noto Sans KR',
      },
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    tooltip: multiChartTooltip,
    label: {
      show: true,
      position: 'top',
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'Noto Sans KR',
    },
    series: [
      {
        name:'범례 A',
        type: 'bar',
        stack: 'MultiChart', // 이름이 모두 동일해야 함.
        data: [120, 132],
        label: {
          show: false,
        }
      },
      {
        name:'범례 B',
        type: 'bar',
        stack: 'MultiChart', // 이름이 모두 동일해야 함.
        data: [220, 80],
        label: {
          show: false,
        }
      },
      {
        name:'범례 C',
        type: 'bar',
        stack: 'MultiChart', // 이름이 모두 동일해야 함.
        data: [150, 120],
        label: {
          formatter: function(params) {
            return '10%증가'
          }
        },
        itemStyle: {
          borderRadius: [6,6,0,0],
        }
      }
    ],
  }

  option && myChart.setOption(option);
};

/****************************
* Horizontal BarChart 기본유형 
*****************************/
const horizontalBarChart1 = () => {
  var chartDom = document.getElementById('barH-1');
  var myChart = echarts.init(chartDom);

  option = {
    grid: {
      left: 20,
      right: 20, 
      top: 'center',
    },
    barWidth: 12,
    xAxis: {
      type: 'value',
      
      max: 100, // data 합계를 넣어야 bar의 가로 너비가 100%로 참
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ['범례'],
    },
    tooltip: {},
    series: [
      {
        type: 'bar',
        name: '차트이름',
        data: [78],
        showBackground: true,
        backgroundStyle: {
          borderRadius: [6, 6, 6, 6],
          borderWidth: 1,
          borderColor: '#e8e8e8',
          color: '#eaeaea',
        },
        itemStyle: {
          borderRadius: [6, 6, 6, 6],
          color: '#2d99ff',
        }
      }
    ],
  }

  option && myChart.setOption(option);
};




/*************************************
* Horizontal Multi BarChart 기본형 
**************************************/
const horizontalMultiBar1 = () => {
  var chartDom = document.getElementById('multiBarH-1');
  var myChart = echarts.init(chartDom);

  var total = 0;
  horizontalMultiBarSeries.forEach(function(item) {
    total += item.data[0];
  }); 

  option = {
    grid: {
      show: false,
      left: 4,
      right: 4,
    },
    barWidth: 12,
    xAxis: {
      type: 'value',
      max: total, // data 합계를 넣어야 bar의 가로 너비가 100%로 참
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ['접속횟수'],
    },
    tooltip: {},
    series: horizontalMultiBarSeries,
  }

  option && myChart.setOption(option);
};

/*************************************************
* Horizontal Multi BarChart 커스텀 툴팁. value
**************************************************/
const horizontalMultiBar2 = () => {
  var chartDom = document.getElementById('multiBarH-2');
  var myChart = echarts.init(chartDom);

  var total = 0;
  horizontalMultiBarSeries.forEach(function(item) {
    total += item.data[0];
  }); 

  option = {
    grid: {
      show: false,
      left: 4,
      right: 4,
    },
    barWidth: 12,
    color: ['#bc6eff', '#826af9', '#2d99ff', '#5066f7', 'powderblue'],
    xAxis: {
      type: 'value',
      max: total, // data 합계를 넣어야 bar의 가로 너비가 100%로 참
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ['접속횟수'],
    },
    tooltip: {
      className: 'tooltip-custom-black',
      borderColor: 'transparent',
      appendToBody: true,
      formatter: function(item) {
        // 1000단위 콤마(,) 추가, 
        var addCommaValue = item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `<div><span class="label">${item.seriesName}</span><span class="value">${addCommaValue}회</span></div>`
      }
    },
    series: horizontalMultiBarSeries,
  }

  option && myChart.setOption(option);
};

/*************************************************
* Horizontal Multi BarChart 커스텀 툴팁. %
**************************************************/
const horizontalMultiBar3 = () => {
  var chartDom = document.getElementById('multiBarH-3');
  var myChart = echarts.init(chartDom);

  var total = 0;
  horizontalMultiBarSeries.forEach(function(item) {
    total += item.data[0];
  }); 

  option = {
    grid: {
      show: false,
      left: 4,
      right: 4,
    },
    barWidth: 12,
    xAxis: {
      type: 'value',
      max: total, // data 합계를 넣어야 bar의 가로 너비가 100%로 참
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
      data: ['접속횟수'],
    },
    tooltip: {
      className: 'tooltip-custom-black',
      borderColor: 'transparent',
      appendToBody: true,
      formatter: function(item) {
        // percent
        var percent = (item.data / total * 100).toFixed(2);
        return `<div><span class="label">${item.seriesName}</span><span class="value">${percent}%</span></div>`
      }
    },
    series: horizontalMultiBarSeries,
  }

  option && myChart.setOption(option);
};


/*************************************************
* Pie Chart
**************************************************/
const pieChart1 = () => {
  var chartDom = document.getElementById('pie-1');
  var myChart = echarts.init(chartDom);

  var seriesData = [
    {
      name: '범례A',
      value: 2,
    },
    {
      name: '범례B',
      value: 5,
    },
    {
      name: '범례C',
      value: 3,
    },
    {
      name: '범례D',
      value: 0,
    },
    {
      name: '범례E',
      value: 1,
    },
  ];

  option = {
    grid: {
      width: 280
    },
    height: 260,
    legend: {
      bottom: 0,
      itemGap: 15,
      itemWidth: 12,
      icon: 'circle', 
      //selectedMode: false, //범례 별 끄고 켜기
      formatter: function(name) {
        // 인자 name은 범례명 
        // 데이터에서 name과 동일한 데이터의 value 값을 찾아와 legend에 같이 출력
        let itemValue = seriesData.filter(item => item.name === name);
        return name + ' (' + itemValue[0].value + ')';
      }
    },
    tooltip: {},
    series: [
      {
        type: 'pie',
        radius: ['67%', '77%'],
        empasis: {
          disabled: true,
          scale: false,
        },
        clockwise: true, // 애니메이션 시 차트 생성 방향. true 시계방향
       // animation: false, // 범례 값이 0이면 깜빡이는 현상 있음. 
        label: {
          show: false
        },
        color: ['#bc6eff', '#826af9', '#2d99ff', '#5066f7', '#2cd9c5', '#30bc86', '#ffc400', '#fe943a', '#bbbbbb'],
        data: seriesData,
        // top: 0
      }
    ],
  }

  option && myChart.setOption(option);
};


/*************************************************
* SVG 커스텀 Chart
**************************************************/
const svgChart1 = () => {
  const gradientBar = document.getElementById('graBar');
  let chartValue = 30; // 차트에 적용될 데이터
  let maxValue = 40; // 최대값
  const calcValue = chartValue / maxValue * 100 //퍼센트 변환
  gradientBar.style.setProperty('--v', calcValue);
  gradientBar.classList.add('ani');
};

window.addEventListener('load', () => {
 barChart1();
 barChart2();
 MultiBar1();
 horizontalBarChart1();
 horizontalMultiBar1();
 horizontalMultiBar2();
 horizontalMultiBar3();
 pieChart1();
 svgChart1();
})

