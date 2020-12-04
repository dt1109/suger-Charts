var option4 = {
    title : {
        text: '第二次全国污染源普查',
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
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
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
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
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
// setTimeout(() => {
//     myChart.dispatchAction({
//         type: 'showTip',
//         seriesIndex: 0,
//         dataIndex: 0
//     })

// }, 0)
// var mymap = echarts.init(document.getElementById('main'));
// mymap.setOption(options);
// myChart.on('click', params => {
//     if (params.seriesType === 'map') {
//         // 如果不存在，则不能选中
//         console.log(params)
//         const selectData = convertData([
//             [{
//                 name: params.name,
//                 value: params.data.value[2]
//             }]
//         ])
//         option.geo.regions = [{
//             name: params.name,
//             selected: true
//         }]

//         // 显示光圈
//         option.series[0].data = selectData
//         myChart.setOption(option)
//         setTimeout(() => {
//             myChart.dispatchAction({
//                 type: 'showTip',
//                 // seriesIndex: 0,
//                 // dataIndex: 0
//             })

//         }, 0)

//     }
// })
$(function(){
    select();
    // 饼图
    czzf();
    $('.page').on('click','.list',function(){
        $(this).addClass('listfocus').siblings().removeClass('listfocus');
        $(this).children('.shanchu').show().parent().siblings().children('.shanchu').hide();
    })
    $('.fabu').on('click',function(){
        alert('发布成功请至个人中心查看');
    })
    //添加div
    // adde();
    // 删除div
    $('.page').on('click','.shanchu',function(){
        $(this).parent().remove();
    })
    //右侧工具切换
    $(".tabs:has([data-toggle=tab])")
      .on("click","[data-toggle=tab]",e=>{
      var $tar=$(e.target);
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
})
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
            if($(this)[0].id == 'zhongguomap'){
                var length = $('.page').children('.list').length + 1;
                $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
                var len = 'e'+length
                myChart = echarts.init(document.getElementById(len));
                var option = option3;
                myChart.setOption(option);
            }
    })
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
}
function bltongbu(){
    
}
function kaiguan(){
    $('.container img').click(function(){
   		// 箭头图片切换
     if($(this).attr('src')=='img/guan.png'){
         $(this).attr('src','img/kai.png');
     }else{
         $(this).attr('src','img/guan.png');
     }
   })
}
function adde(){
    $('#zhexiantu').on('click',function(){
        
        var length = $('.page').children('.list').length + 1;
        $('.page').append('<div class="list" data-index="1"><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc1">第二次全国污染源普查统计</div><div id="e'+length+'" class="list-child"></div></div>');
        zhexian();
    })
    $('#zhuzhuangtu').on('click',function(){
        
        var length = $('.page').children('.list').length + 1;
        $('.page').append('<div class="list" data-index="1" ><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc2">第二次全国污染源普查统计</div><div id="d'+length+'" class="list-child"></div></div>');
        zhu1();
    })
    $('#bingzhaungtu').on('click',function(){
       
        var length = $('.page').children('.list').length + 1;
        $('.page').append('<div class="list" data-index="1" ><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc3">第二次全国污染源普查统计</div><div id="f'+length+'" class="list-child"></div></div>');
        czzf1();
    })
    $('#zhongguomap').on('click',function(){
       
        var length = $('.page').children('.list').length + 1;
        $('.page').append('<div class="list" data-index="1" ><span class="shanchu" title="删除"><img src="img/shanchu.png" alt=""></span><div style="text-align: center" id="pc3">第二次全国污染源普查统计</div><div id="g'+length+'" class="list-child"></div></div>');
        ditu();
    })
   
}
function czzf(){
    for(var i=1;i<10;i++){

    }
    var allnum = '581';
    // console.log(mc)
	var dataAxis = ["污水处理设施建设", "园区内污水收集", "污水处理设施建设", "污泥安全处置", "管网定期排查维护", "出水水质达标排放", "污水设施联网", "园区内管网覆盖"];	 
	    	 var dataValue =[{name: "污水处理设施建设", value: 45},
	    	 {name: "园区内污水收集", value: 35},
	    	 {name: "污水处理设施建设", value: 33},
	    	 {name: "污泥安全处置", value: 27},
	    	 {name: "管网定期排查维护", value: 17},
	    	 {name: "出水水质达标排放", value: 17},
	    	 {name: "污水设施联网", value: 11},
             {name: "园区内管网覆盖", value: 6}];
            myChart = echarts.init(document.getElementById('e1'));
	    	var option = {
	    		title: {
	                text: '581次',
	                x: '22%',
	                y: '48%',
	                itemGap: 20,
	                textStyle : {
	                    color : '#333333',
	                    fontSize : 16,
	                    fontWeight : '600'
	                },
	                subtextStyle : {
	                    // color : '#de4751',
	                    // fontSize : 12
                    },
                    
	            },
	    			//color: ['#447be8', '#6d95f0', '#4358e8',  '#15a2dc',   '#1cc5e9', '#32ace9','#2295dd', '#248be7', '#5197ea', '#8fbbf4'],
	            color: ['#348DB5', '#34A7A4', '#E78465',  '#8D9F63',   '#EBAB01', '#EA6101','#B9568F', '#7C5198', '#fba35c','#F07879'],
	    		  
	    			tooltip: {
	    				show:true,
	    				trigger: 'item',
	    				formatter: "存在问题分析\n{a} <br/>{b}: {c} ({d}%)"
	    			},
	    			grid: {
	    				left: '10%',
	    				right: '35%',
	    				top: '30%',
	    				bottom: '10%',
	    				containLabel: true
	    			},
	    			 legend: {
	    				show:true,
	    				orient: 'vertical',
	    				align: 'left',
	    				icon: 'arrow',
	    				// x: 'right',
                        right:'5%',
                        itemGap:10,
	    				top:'10%',	    	     
	    				itemWidth:10,
	    				itemHeight:7,
	    				data:dataAxis
	    			},
	    			series: [
	    			   {
	    					type: 'pie',
	    					name:'',
	    					center: ['30%', '55%'],
	    					radius: ['35%', '75%'],
	    						 label: {
	    							
	    							 normal: {
	    								formatter: '{b}{d}%}\n\n',
	    								 position: '',
	    								 textStyle:{
	    									 fontSize:12 // 让字体变大
	    								 },
	    								show:false,
	    							 },
	    							 emphasis: {
	    				                    show: false
	    				                }
	    							 
	    						 },
	    							 labelLine: {
	    								 normal: {
	    									 show: false
	    								 },
	    								 emphasis: {
	    					                    show:false
	    					                }
	    						 },
	    						 
	    					data: dataValue
	    				},
	    				 // 边框的设置
	    		        {
	    		            radius: ['75%', '80%'],
	    		            center: ['30%', '55%'],
	    		            type: 'pie',
	    		            label: {
	    		                normal: {
	    		                    show: false
	    		                },
	    		                emphasis: {
	    		                    show: false
	    		                }
	    		            },
	    		            labelLine: {
	    		                normal: {
	    		                    show: false
	    		                },
	    		                emphasis: {
	    		                    show: false
	    		                }
	    		            },
	    		            animation: false,
	    		            tooltip: {
	    		                show: false
	    		            },
	    		            itemStyle: {
	    		                normal: {
	    		                    color:'#e4eae6'
	    		                }
	    		            },
	    		            data: [{
	    		                value: 1,
	    		            }],
	    		        }
	    			]
	    		};
	    	myChart.setOption(option);
}
function czzf1(){
    var allnum = '581';
	var dataAxis = ["污水处理设施建设", "园区内污水收集", "污水处理设施建设", "污泥安全处置", "管网定期排查维护", "出水水质达标排放", "污水设施联网", "园区内管网覆盖"];	 
	    	 var dataValue =[{name: "污水处理设施建设", value: 45},
	    	 {name: "园区内污水收集", value: 35},
	    	 {name: "污水处理设施建设", value: 33},
	    	 {name: "污泥安全处置", value: 27},
	    	 {name: "管网定期排查维护", value: 17},
	    	 {name: "出水水质达标排放", value: 17},
	    	 {name: "污水设施联网", value: 11},
             {name: "园区内管网覆盖", value: 6}];
             myChart1 = echarts.init(document.getElementById('f4'));
	    	var option = {
	    		title: {
	                text: allnum+'次\n总数',
	                x: '27%',
	                y: '48%',
	                itemGap: 20,
	                textStyle : {
	                    color : '#333333',
	                    fontSize : 16,
	                    fontWeight : '600'
	                },
	                subtextStyle : {
	                    // color : '#de4751',
	                    // fontSize : 12
                    },
                    
	            },
	    			//color: ['#447be8', '#6d95f0', '#4358e8',  '#15a2dc',   '#1cc5e9', '#32ace9','#2295dd', '#248be7', '#5197ea', '#8fbbf4'],
	            color: ['#348DB5', '#34A7A4', '#E78465',  '#8D9F63',   '#EBAB01', '#EA6101','#B9568F', '#7C5198', '#fba35c','#F07879'],
	    		  
	    			tooltip: {
	    				show:true,
	    				trigger: 'item',
	    				formatter: "存在问题分析\n{a} <br/>{b}: {c} ({d}%)"
	    			},
	    			grid: {
	    				left: '10%',
	    				right: '35%',
	    				top: '30%',
	    				bottom: '10%',
	    				containLabel: true
	    			},
	    			 legend: {
	    				show:true,
	    				orient: 'vertical',
	    				align: 'left',
	    				icon: 'arrow',
	    				// x: 'right',
                        right:'20%',
                        itemGap:10,
	    				top:'10%',	    	     
	    				itemWidth:12,
	    				itemHeight:7,
	    				data:dataAxis
	    			},
	    			series: [
	    			   {
	    					type: 'pie',
	    					name:'',
	    					center: ['30%', '55%'],
	    					radius: ['35%', '75%'],
	    						 label: {
	    							
	    							 normal: {
	    								formatter: '{b}{d}%}\n\n',
	    								 position: '',
	    								 textStyle:{
	    									 fontSize:12 // 让字体变大
	    								 },
	    								show:false,
	    							 },
	    							 emphasis: {
	    				                    show: false
	    				                }
	    							 
	    						 },
	    							 labelLine: {
	    								 normal: {
	    									 show: false
	    								 },
	    								 emphasis: {
	    					                    show:false
	    					                }
	    						 },
	    						 
	    					data: dataValue
	    				},
	    				 // 边框的设置
	    		        {
	    		            radius: ['75%', '80%'],
	    		            center: ['30%', '55%'],
	    		            type: 'pie',
	    		            label: {
	    		                normal: {
	    		                    show: false
	    		                },
	    		                emphasis: {
	    		                    show: false
	    		                }
	    		            },
	    		            labelLine: {
	    		                normal: {
	    		                    show: false
	    		                },
	    		                emphasis: {
	    		                    show: false
	    		                }
	    		            },
	    		            animation: false,
	    		            tooltip: {
	    		                show: false
	    		            },
	    		            itemStyle: {
	    		                normal: {
	    		                    color:'#e4eae6'
	    		                }
	    		            },
	    		            data: [{
	    		                value: 1,
	    		            }],
	    		        }
	    			]
	    		};
	    	myChart1.setOption(option);
}
function zhexian(){
    myChart2 = echarts.init(document.getElementById('e2'));
    option = {
        title: {
            text: '折线图堆叠处理数据',
            textStyle:{
                fontSize:12
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show:false,
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
            textStyle:{
                fontSize:12
            }
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart2.setOption(option);
}
function zhexian1(){
    myChart3 = echarts.init(document.getElementById('e3'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart3.setOption(option);
}
function zhexian2(){
    myChart4 = echarts.init(document.getElementById('e4'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart4.setOption(option);
}
function zhexian3(){
    myChart5 = echarts.init(document.getElementById('e5'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart5.setOption(option);
}
function zhexian4(){
    myChart6 = echarts.init(document.getElementById('e5'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart6.setOption(option);
}
function zhexian5(){
    myChart = echarts.init(document.getElementById('e6'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
}
function zhexian6(){
    myChart = echarts.init(document.getElementById('e7'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
}
function zhexian7(){
    myChart = echarts.init(document.getElementById('e8'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
}
function zhexian8(){
    myChart = echarts.init(document.getElementById('e9'));
    option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
}
function zhu1(){
    myChartz = echarts.init(document.getElementById('d3'));
    var option = {
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
    
    myChartz.setOption(option);
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