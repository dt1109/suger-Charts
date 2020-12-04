function NEW(es){
		layui.use([ 'tree', 'element', 'util','laydate'], function() {
				var $ = layui.jquery,
				element = layui.element; //tab
				var layer = layui.layer;
				var util = layui.util;
				var laydate = layui.laydate;
				var tree = layui.tree;
			//获取hash来切换选项卡，假设当前地址的hash为lay-id对应的值
			var layid = location.hash.replace(/^#test1=/, '');
			element.tabChange('test1', layid); //假设当前地址为：http://a.com#test1=222，那么选项卡会自动切换到“发送消息”这一项

			//监听Tab切换，以改变地址hash值
			element.on('tab(test1)', function() {
				location.hash = 'test1=' + this.getAttribute('lay-id');
			});
			
			 //模拟数据2
			  var data2 =  [{
	"id": 1,
	"title": "工业源",
	"children": [{
		"id": 11011,
		"title": "G101-1 工业企业基本情况"
	}, {
		"id": 11012,
		"title": "G101-2 工业企业主要产品、生产工艺基本情况"
	}, {
		"id": 11013,
		"title": "G101-3 工业企业主要原辅材料使用、能源消耗基本情况"
	}, {
		"id": 1102,
		"title": "G102 工业企业废水治理与排放情况"
	}, {
		"id": 11031,
		"title": "G103-1 工业企业锅炉/燃气轮机废气治理与排放情况"
	}, {
		"id": 11032,
		"title": "G103-2 工业企业炉窑废气治理与排放情况"
	}, {
		"id": 11033,
		"title": "G103-3 钢铁与炼焦企业炼焦废气治理与排放情况"
	}, {
		"id": 11034,
		"title": "G103-4 钢铁企业烧结/球团废气治理与排放情况"
	}, {
		"id": 11035,
		"title": "G103-5 钢铁企业炼铁生产废气治理与排放情况"
	}, {
		"id": 11036,
		"title": "G103-6 钢铁企业炼钢生产废气治理与排放情况"
	}, {
		"id": 11037,
		"title": "G103-7 水泥企业熟料生产废气治理与排放情况"
	}, {
		"id": 11038,
		"title": "G103-8 石化企业工艺加热炉废气治理与排放情况"
	}, {
		"id": 11039,
		"title": "G103-9 石化企业生产工艺废气治理与排放情况"
	}, {
		"id": 110310,
		"title": "G103-10 工业企业有机液体储罐、装载信息"
	}, {
		"id": 110311,
		"title": "G103-11 工业企业含挥发性有机物原辅材料使用信息"
	}, {
		"id": 110312,
		"title": "G103-12 工业企业固体物料堆存信息"
	}, {
		"id": 110313,
		"title": "G103-13 工业企业其他废气治理与排放情况"
	}, {
		"id": 11041,
		"title": "G104-1 工业企业一般工业固体废物产生与处理利用信息"
	}, {
		"id": 11042,
		"title": "G104-2 工业企业危险废物产生与处理利用信息"
	}, {
		"id": 1105,
		"title": "G105 工业企业突发环境事件风险信息"
	}, {
		"id": 11061,
		"title": "G106-1 工业企业污染物产排污系数核算信息"
	}, {
		"id": 11062,
		"title": "G106-2 工业企业废水监测数据"
	}, {
		"id": 11063,
		"title": "G106-3 工业企业废气监测数据"
	}, {
		"id": 1107,
		"title": "G107 伴生放射性矿产企业含放射性固体物料及废物情况"
	}, {
		"id": 1108,
		"title": "G108 园区环境管理信息"
	}]

}, {
	"id": 2,
	"title": "农业源",
	"children": [{
		"id": 21011,
		"title": "N101-1 规模畜禽养殖场基本情况"
	}, {
		"id": 21012,
		"title": "N101-2 规模畜禽养殖场养殖规模与粪污处理情况"
	}, {
		"id": 22011,
		"title": "N201-1 县（区、市、旗）种植业基本情况"
	}, {
		"id": 22012,
		"title": "N201-2 县（区、市、旗）种植业播种、覆膜与机械收获面积情况"
	}, {
		"id": 22013,
		"title": "N201-3 县（区、市、旗）农作物秸秆利用情况"
	}, {
		"id": 2202,
		"title": "N202 县（区、市、旗）规模以下养殖户养殖量及粪污处理情况"
	}, {
		"id": 2203,
		"title": "N203 县（区、市、旗）水产养殖基本情况"
	}]

}, {
	"id": 3,
	"title": "生活源",
	"children": [{
		"id": 3101,
		"title": "S101 重点区域生活源社区（行政村）燃煤使用情况"
	}, {
		"id": 3102,
		"title": "S102 行政村生活污染基本信息"
	}, {
		"id": 3103,
		"title": "S103 非工业企业单位锅炉污染及防治情况"
	}, {
		"id": 3104,
		"title": "S104 入河（海）排污口情况"
	}, {
		"id": 3105,
		"title": "S105 入河（海）排污口水质监测数据"
	}, {
		"id": 3106,
		"title": "S106 生活源农村居民能源使用情况抽样调查"
	}, {
		"id": 3201,
		"title": "S201 城市生活污染基本信息"
	}, {
		"id": 3202,
		"title": "S202 县域城镇生活污染基本信息"
	}]

}, {
	"id": 4,
	"title": "集中式",
	"children": [{
		"id": 41011,
		"title": "J101-1 集中式污水处理厂基本情况"
	}, {
		"id": 41012,
		"title": "J101-2 集中式污水处理厂运行情况"
	}, {
		"id": 41013,
		"title": "J101-3 集中式污水处理厂污水监测数据"
	}, {
		"id": 41021,
		"title": "J102-1 生活垃圾集中处置场（厂）基本情况"
	}, {
		"id": 41021,
		"title": "J102-2 生活垃圾集中处置场（厂）运行情况"
	}, {
		"id": 41031,
		"title": "J103-1 危险废物集中处置厂基本情况"
	}, {
		"id": 41032,
		"title": "J103-2 危险废物集中处置厂运行情况"
	}, {
		"id": 41041,
		"title": "J104-1 生活垃圾/危险废物集中处置厂（场）废水监测数据"
	}, {
		"id": 41042,
		"title": "J104-2 生活垃圾/危险废物集中处置厂（场）焚烧废气监测数据"
	}, {
		"id": 41043,
		"title": "J104-3 生活垃圾/危险废物集中处置厂（场）污染物排放量"
	}]

}, {
	"id": 5,
	"title": "移动源",
	"children": [{
		"id": 5101,
		"title": "Y101 储油库油气回收情况"
	}, {
		"id": 5102,
		"title": "Y102 加油站油气回收情况"
	}, {
		"id": 5103,
		"title": "Y103 油品运输企业油气回收情况"
	}, {
		"id": 52011,
		"title": "Y201-1 机动车保有量"
	}, {
		"id": 52012,
		"title": "Y201-2 机动车污染物排放情况"
	}, {
		"id": 52021,
		"title": "Y202-1 农业机械拥有量"
	}, {
		"id": 52022,
		"title": "Y202-2 农业生产燃油消耗情况"
	}, {
		"id": 52023,
		"title": "Y202-3 机动渔船拥有量"
	}, {
		"id": 52024,
		"title": "Y202-4 农业机械污染物排放情况"
	}, {
		"id": 5203,
		"title": "Y203 油品储运销污染物排放情况"
	}]

}]
 
 			laydate.render({
				elem: '#time1',
				type: 'date',
		
			});
			//开启复选框
			tree.render({
				elem: '#test1'
				,data: data2
				,id:'demoId'
				,showLine: false  //是否开启连接线
				,showCheckbox: true
			  });
			  checkData = tree.getChecked('demoId');
			  console.log(checkData);
		});
		checkData = checkData;
		console.log(checkData);
	}
	NEW();
checkData1 = checkData;
console.log(checkData1)
function cs(es){
	console.log('checkData');
	NEW(es);
	console.log(es);
}
function tree(){
	
	
}