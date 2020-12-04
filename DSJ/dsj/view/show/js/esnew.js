var colors = ['#5793f3', '#d14a61', '#675bba'];


var option6 = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['第一次普查', '第二次普查']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2017-1", "2017-2", "2017-3", "2017-4", "2017-5", "2017-6", "2017-7", "2017-8", "2017-9", "2017-10", "2017-11", "2017-12"]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name:'第一次普查',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'第二次普查',
            type:'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    ]
};

var option4 = {
    title : {
        text: '',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','间接访问','实地勘测','上门调查','调查取证']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'间接访问'},
                {value:234, name:'实地勘测'},
                {value:135, name:'上门调查'},
                {value:1548, name:'调查取证'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var option1 = {
    title: {
        text: '折线图堆叠',
        left:5,
        textStyle:{
            fontSize:12
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['河北污普办','黄河污普办','天津污普办','东北污普办','广东污普办'],
        show:false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'河北污普办',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'黄河污普办',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'天津污普办',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'东北污普办',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'广东污普办',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
var option2 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
var geoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [119.1803, 31.2891],
    '台湾': [121.4648, 25.5630]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 100
    }],
    [{
        name: '内蒙古',
        value: 300
    }],
    [{
        name: '吉林',
        value: 300
    }],
    [{
        name: '辽宁',
        value: 300
    }],
    [{
        name: '河北',
        value: 300
    }],
    [{
        name: '天津',
        value: 300
    }],
    [{
        name: '山西',
        value: 300
    }],
    [{
        name: '陕西',
        value: 300
    }],
    [{
        name: '甘肃',
        value: 300
    }],
    [{
        name: '宁夏',
        value: 300
    }],
    [{
        name: '青海',
        value: 300
    }],
    [{
        name: '新疆',
        value: 300
    }],
    [{
        name: '西藏',
        value: 300
    }],
    [{
        name: '四川',
        value: 300
    }],
    [{
        name: '重庆',
        value: 300
    }],
    [{
        name: '山东',
        value: 300
    }],
    [{
        name: '河南',
        value: 300
    }],
    [{
        name: '江苏',
        value: 300
    }],
    [{
        name: '安徽',
        value: 300
    }],
    [{
        name: '湖北',
        value: 300
    }],
    [{
        name: '浙江',
        value: 300
    }],
    [{
        name: '福建',
        value: 300
    }],
    [{
        name: '江西',
        value: 300
    }],
    [{
        name: '湖南',
        value: 300
    }],
    [{
        name: '贵州',
        value: 300
    }],
    [{
        name: '广西',
        value: 300
    }],
    [{
        name: '海南',
        value: 300
    }],
    [{
        name: '上海',
        value: 1300
    }],
    [{
        name: '广东',
        value: 1300
    }],
    [{
        name: '云南',
        value: 1300
    }],
    [{
        name: '北京',
        value: 1300
    }],
    [{
        name: '台湾',
        value: 1300
    }]
];
var defaultP = [
    [{
        name: '四川',
        value: 300,
        selected: true
    }]
]
var convertData = function(data) {
    // console.log(data)
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i][0].name];
        // console.log(geoCoord, 'geoCoord')
        if (geoCoord) {
            res.push({
                name: data[i][0].name,
                value: geoCoord.concat(data[i][0].value)
            });
        }
    }
    // console.log(res, '///')
    return res;
};

 var option3 = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        backgroundColor: 'transparent',
        alwaysShowContent: true,
        formatter(params, p, a) {
            console.log(params.data.name)
            return params.data.name + params.data.value
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                color: 'white',
                show: false
            }
        },
        zoom: 1.2,
        itemStyle: {
            normal: {
                borderWidth: 1, // 区域边框宽度
                borderColor: 'rgba(37, 88, 184, 0.8)', // 区域边框颜色
                areaColor: '#0183C3' // 区域颜色
            },
            emphasis: {
                areaColor: '#3889FF'
            }
        },
        regions: defaultP[0],
        tooltip: {
            show: false
        }
    },
    series: [
        {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        z:1,
       
        data: convertData(defaultP),
       
        symbolSize: 14,
        itemStyle: {              
               color:'#fff',       
        },
        tooltip: {
            show: true
        }
    }, {
        type: 'map',
        mapType: 'china',
        geoIndex: 0,
        z: 0,
        data: convertData(chinaDatas)
    }]
};
$(function(){
    select();
    // 饼图
    // czzf();
    $('.page').on('click','.list',function(){
        $(this).addClass('listfocus').siblings().removeClass('listfocus');
        $(this).children('.shanchu').show().parent().siblings().children('.shanchu').hide();
    })
    $('.fabu').on('click',function(){
        alert('筛选成功请稍后至我的成果图查看');
    })
    // 删除div
    $('.page').on('click','.shanchu',function(){
        $(this).parent().remove();
    })
    //右侧工具切换
    $(".tabs:has([data-toggle=tab])")
      .on("click","[data-toggle=tab]",e=>{
      var $tar=$(e.target);
      if($tar.text() == '基础'){
        $('.sliderDot').show();
    }else if($tar.text() != '基础'){
        $('.sliderDot').hide();
    }
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
    })
    kaiguan();
    // 添加图表
    addecharts();
    //工具栏切换
    gjtab();
    // 默认加载地图
    ditu();
    // 数据源绑定弹窗
    layertabsjy();
})
// 数据源绑定弹窗
function layertabsjy(){
    layui.use('layer', function(){
        var layer = layui.layer;
        $('.bd1layer').on('click',function(){
            layer.open({
                title:'数据源',
                type: 2, 
                closeBtn:2,
                btn:['确定'],
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                    layer.close(index);
                    var obj = $(layero).find("iframe")[0].contentWindow;
                    $('.bd1layer').text('G102 工业企业废水治理与排放情况');
                },
                anim: 3,
                area:['500px','400px'],
                content: 'tree.html' //不让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
            });
        })
        $('.bd2layer').on('click',function(){
            layer.open({
                type: 2, 
                area:['500px','400px'],
                content: '../DQL/select.html' //不让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
            });
        })
    }); 
}
//添加图表
function addecharts(){
    $('.list1').on('click',function(){
            if($(this)[0].id == 'zhexiantu'){
                var length = $('.page').children('.list').length + 1;
                $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
                var len = 'e'+length
                myChart = echarts.init(document.getElementById(len));
                var option = option1;
                myChart.setOption(option);
            }
            if($(this)[0].id == 'zhuzhuangtu'){
                var length = $('.page').children('.list').length + 1;
                $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
                var len = 'e'+length
                myChart = echarts.init(document.getElementById(len));
                var option = option2;
                myChart.setOption(option);
            }
            if($(this)[0].id == 'bingzhaungtu'){
                var length = $('.page').children('.list').length + 1;
                $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
                var len = 'e'+length
                myChart = echarts.init(document.getElementById(len));
                var option = option4;
                myChart.setOption(option);
            }
            if($(this)[0].id == 'quxiantu'){
                var length = $('.page').children('.list').length + 1;
                $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
                var len = 'e'+length
                myChart = echarts.init(document.getElementById(len));
                var option = option6;
                myChart.setOption(option);
            }
            if($(this)[0].id == 'zhongguomap'){
                var length = $('.page').children('.list').length + 1;
                $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
                var len = 'e'+length
                myChart = echarts.init(document.getElementById(len));
                var option = option3;
                                        setTimeout(() => {
                            myChart.dispatchAction({
                                type: 'showTip',
                                seriesIndex: 0,
                                dataIndex: 0
                            })

                        }, 0)
                        // var mymap = echarts.init(document.getElementById('main'));
                        // mymap.setOption(options);
                        myChart.on('click', params => {
                            if (params.seriesType === 'map') {
                                // 如果不存在，则不能选中
                                console.log(params)
                                const selectData = convertData([
                                    [{
                                        name: params.name,
                                        value: params.data.value[2]
                                    }]
                                ])
                                option.geo.regions = [{
                                    name: params.name,
                                    selected: true
                                }]

                                // 显示光圈
                                option.series[0].data = selectData
                                myChart.setOption(option)
                                setTimeout(() => {
                                    myChart.dispatchAction({
                                        type: 'showTip',
                                        // seriesIndex: 0,
                                        // dataIndex: 0
                                    })

                                }, 0)

                            }
                        })
                myChart.setOption(option);
            }
    })
}
// 工具栏切换
function gjtab(){
    // 控制面板切换
    $(".cl-title span").on('click',function(){
        //给li添加下横线
        $(this).addClass('activespan').siblings('span').removeClass('activespan');
        var index = $(this).index();
        console.log($('.cl-tab').eq(index))
        //显示对应的div
        $('.cl-tab').eq(index).addClass('selected').siblings('div').removeClass('selected');
        
    })
    // 数据源绑定切换
    $(".sptabi span").on('click',function(){
        //给li添加下横线
        var index1 = $(this).index();
        console.log(index1)
        //显示对应的div
        console.log($('.tabshujuyuan').eq(index1))
        $('.cl-tab2').eq(index1).addClass('selected').siblings('div').removeClass('selected');
        
    })
    //图片切换
    $('.imgtab').click(function() {
		$(".imgtab img").each(function(){
			dUrl = $(this).attr('rel');
			$(this)[0].src = dUrl;
		})
         dataUrl1 = $(this).find('img').attr('del');
         var imgsrc = $(this).find('img');
         imgsrc[0].src = dataUrl1;
         
    });
    $('.imgtab1').click(function() {
		$(".imgtab1 img").each(function(){
			dUrl = $(this).attr('rel');
			$(this)[0].src = dUrl;
		})
         dataUrl1 = $(this).find('img').attr('del');
         var imgsrc = $(this).find('img');
         imgsrc[0].src = dataUrl1;
         
    });
    $('.imgtab2').hover(function() {
		$(".imgtab2 img").each(function(){
			dUrl = $(this).attr('rel');
			$(this)[0].src = dUrl;
		})
         dataUrl1 = $(this).find('img').attr('del');
         var imgsrc = $(this).find('img');
         imgsrc[0].src = dataUrl1;
         
	});
}



// 下拉选择图表
function select(){
    $('.tubiao').mouseover(function () { 
        $('.page1').show();
    }).mouseleave(function(){
        $('.page1').hide();
    })
    $('.qita').mouseover(function () { 
        $('.page2').show();
    }).mouseleave(function(){
        $('.page2').hide();
    })
    $('.qita1').mouseover(function () { 
        $('.page3').show();
    }).mouseleave(function(){
        $('.page3').hide();
    })
    $('.qita2').mouseover(function () { 
        $('.page4').show();
    }).mouseleave(function(){
        $('.page4').hide();
    })
}
function gdt(){
    
    $(".sliderInput").eq(0).slider({
        width:400,
        isShowMark:true,
        sliderDotSize:22,
        barHeight:6
    });
    $(".sliderInput").eq(1).slider({
        width:200,
        isShowMark:true,
        sliderDotSize:20,
        barHeight:4,
        step:100
    });

}
function kaiguan(){
    $('#content3 img').click(function(){
   		// 箭头图片切换
     if($(this).attr('src')=='img/guan.png'){
         $(this).attr('src','img/kai.png');
     }else{
         $(this).attr('src','img/guan.png');
     }
   })
}
function ditu(){
    myChartd = echarts.init(document.getElementById('g5'));
    var geoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [119.1803, 31.2891],
        '台湾': [121.4648, 25.5630]
    };
    var chinaDatas = [
        [{
            name: '黑龙江',
            value: 100
        }],
        [{
            name: '内蒙古',
            value: 300
        }],
        [{
            name: '吉林',
            value: 300
        }],
        [{
            name: '辽宁',
            value: 300
        }],
        [{
            name: '河北',
            value: 300
        }],
        [{
            name: '天津',
            value: 300
        }],
        [{
            name: '山西',
            value: 300
        }],
        [{
            name: '陕西',
            value: 300
        }],
        [{
            name: '甘肃',
            value: 300
        }],
        [{
            name: '宁夏',
            value: 300
        }],
        [{
            name: '青海',
            value: 300
        }],
        [{
            name: '新疆',
            value: 300
        }],
        [{
            name: '西藏',
            value: 300
        }],
        [{
            name: '四川',
            value: 300
        }],
        [{
            name: '重庆',
            value: 300
        }],
        [{
            name: '山东',
            value: 300
        }],
        [{
            name: '河南',
            value: 300
        }],
        [{
            name: '江苏',
            value: 300
        }],
        [{
            name: '安徽',
            value: 300
        }],
        [{
            name: '湖北',
            value: 300
        }],
        [{
            name: '浙江',
            value: 300
        }],
        [{
            name: '福建',
            value: 300
        }],
        [{
            name: '江西',
            value: 300
        }],
        [{
            name: '湖南',
            value: 300
        }],
        [{
            name: '贵州',
            value: 300
        }],
        [{
            name: '广西',
            value: 300
        }],
        [{
            name: '海南',
            value: 300
        }],
        [{
            name: '上海',
            value: 1300
        }],
        [{
            name: '广东',
            value: 1300
        }],
        [{
            name: '云南',
            value: 1300
        }],
        [{
            name: '北京',
            value: 1300
        }],
        [{
            name: '台湾',
            value: 1300
        }]
    ];
    var defaultP = [
        [{
            name: '四川',
            value: 300,
            selected: true
        }]
    ]
    var convertData = function(data) {
        console.log(data)
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i][0].name];
            console.log(geoCoord, 'geoCoord')
            if (geoCoord) {
                res.push({
                    name: data[i][0].name,
                    value: geoCoord.concat(data[i][0].value)
                });
            }
        }
        console.log(res, '///')
        return res;
    };

     option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            triggerOn: 'click',
            backgroundColor: 'transparent',
            alwaysShowContent: true,
            formatter(params, p, a) {
                console.log(params.data.name)
                return params.data.name + params.data.value
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    color: 'white',
                    show: false
                }
            },
            zoom: 1.2,
            itemStyle: {
                normal: {
                    borderWidth: 1, // 区域边框宽度
                    borderColor: 'rgba(37, 88, 184, 0.8)', // 区域边框颜色
                    areaColor: '#0183C3' // 区域颜色
                },
                emphasis: {
                    areaColor: '#3889FF'
                }
            },
            regions: defaultP[0],
            tooltip: {
                show: false
            }
        },
        series: [
            {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            z:1,
           
            data: convertData(defaultP),
           
            symbolSize: 14,
            itemStyle: {              
                   color:'#fff',       
            },
            tooltip: {
                show: true
            }
        }, {
            type: 'map',
            mapType: 'china',
            geoIndex: 0,
            z: 0,
            data: convertData(chinaDatas)
        }]
    };
    setTimeout(() => {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: 0
        })

    }, 0)
    var mymap = echarts.init(document.getElementById('main'));
    mymap.setOption(options);
    myChartd.on('click', params => {
        if (params.seriesType === 'map') {
            // 如果不存在，则不能选中
            console.log(params)
            const selectData = convertData([
                [{
                    name: params.name,
                    value: params.data.value[2]
                }]
            ])
            option.geo.regions = [{
                name: params.name,
                selected: true
            }]

            // 显示光圈
            option.series[0].data = selectData
            myChart.setOption(option)
            setTimeout(() => {
                myChart.dispatchAction({
                    type: 'showTip',
                    // seriesIndex: 0,
                    // dataIndex: 0
                })

            }, 0)

        }
    })
    myChartd.setOption(option);
}
function ditu(){
    myChartd = echarts.init(document.getElementById('e1'));

    var geoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [119.1803, 31.2891],
        '台湾': [121.4648, 25.5630]
    };
    var chinaDatas = [
        [{
            name: '黑龙江',
            value: 100
        }],
        [{
            name: '内蒙古',
            value: 300
        }],
        [{
            name: '吉林',
            value: 300
        }],
        [{
            name: '辽宁',
            value: 300
        }],
        [{
            name: '河北',
            value: 300
        }],
        [{
            name: '天津',
            value: 300
        }],
        [{
            name: '山西',
            value: 300
        }],
        [{
            name: '陕西',
            value: 300
        }],
        [{
            name: '甘肃',
            value: 300
        }],
        [{
            name: '宁夏',
            value: 300
        }],
        [{
            name: '青海',
            value: 300
        }],
        [{
            name: '新疆',
            value: 300
        }],
        [{
            name: '西藏',
            value: 300
        }],
        [{
            name: '四川',
            value: 300
        }],
        [{
            name: '重庆',
            value: 300
        }],
        [{
            name: '山东',
            value: 300
        }],
        [{
            name: '河南',
            value: 300
        }],
        [{
            name: '江苏',
            value: 300
        }],
        [{
            name: '安徽',
            value: 300
        }],
        [{
            name: '湖北',
            value: 300
        }],
        [{
            name: '浙江',
            value: 300
        }],
        [{
            name: '福建',
            value: 300
        }],
        [{
            name: '江西',
            value: 300
        }],
        [{
            name: '湖南',
            value: 300
        }],
        [{
            name: '贵州',
            value: 300
        }],
        [{
            name: '广西',
            value: 300
        }],
        [{
            name: '海南',
            value: 300
        }],
        [{
            name: '上海',
            value: 1300
        }],
        [{
            name: '广东',
            value: 1300
        }],
        [{
            name: '云南',
            value: 1300
        }],
        [{
            name: '北京',
            value: 1300
        }],
        [{
            name: '台湾',
            value: 1300
        }]
    ];
    var defaultP = [
        [{
            name: '四川',
            value: 300,
            selected: true
        }]
    ]
    var convertData = function(data) {
        // console.log(data)
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i][0].name];
            // console.log(geoCoord, 'geoCoord')
            if (geoCoord) {
                res.push({
                    name: data[i][0].name,
                    value: geoCoord.concat(data[i][0].value)
                });
            }
        }
        // console.log(res, '///')
        return res;
    };

     option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            triggerOn: 'click',
            backgroundColor: 'transparent',
            alwaysShowContent: true,
            formatter(params, p, a) {
                console.log(params.data.name)
                return params.data.name + params.data.value
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    color: 'white',
                    show: false
                }
            },
            zoom: 1.2,
            itemStyle: {
                normal: {
                    borderWidth: 1, // 区域边框宽度
                    borderColor: 'rgba(37, 88, 184, 0.8)', // 区域边框颜色
                    areaColor: '#0183C3' // 区域颜色
                },
                emphasis: {
                    areaColor: '#3889FF'
                }
            },
            regions: defaultP[0],
            tooltip: {
                show: false
            }
        },
        series: [
            {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            z:1,
           
            data: convertData(defaultP),
           
            symbolSize: 14,
            itemStyle: {              
                   color:'#fff',       
            },
            tooltip: {
                show: true
            }
        }, {
            type: 'map',
            mapType: 'china',
            geoIndex: 0,
            z: 0,
            data: convertData(chinaDatas)
        }]
    };
    setTimeout(() => {
        myChartd.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: 0
        })

    }, 0)
    // var mymap = echarts.init(document.getElementById('main'));
    // mymap.setOption(options);
    myChartd.on('click', params => {
        if (params.seriesType === 'map') {
            // 如果不存在，则不能选中
            console.log(params)
            const selectData = convertData([
                [{
                    name: params.name,
                    value: params.data.value[2]
                }]
            ])
            option.geo.regions = [{
                name: params.name,
                selected: true
            }]

            // 显示光圈
            option.series[0].data = selectData
            myChartd.setOption(option)
            setTimeout(() => {
                myChartd.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: 0
                })

            }, 0)

        }
    })
    myChartd.setOption(option);
}
window.addEventListener("resize",function(){
    myChart.resize();
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    myChartz.resize();
    myChartd.resize();
});