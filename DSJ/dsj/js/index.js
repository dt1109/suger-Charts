$(function(){
	//layui 左侧菜单事件
	layui.use(['element'], function() {
		var $ = layui.jquery;
	    var element = layui.element;
	    element.render();
	    $('.site-demo-active').on('click', function() {
			var _this = $(this);
			var url = _this.attr("data-url");
			$("#myIframe").attr("src",url);
		});
	//	默认选中第一个首页
		$('.site-demo-active').eq(0).click();
	
	})
	
})
