window.onload = function () {
	//一般直接写在一个js文件中
	layui.use(['layer', 'form','carousel'], function(){
		var layer = layui.layer;
		var form = layui.form;
		var carousel = layui.carousel;
		carousel.render({
			elem: '#banner-text'
			,width: '600px' //设置容器宽度
			,height:'40px'//设置容器高度
			,arrow: 'none' //始终显示箭头
			,anim: 'updown' //切换动画方式
			,indicator:'none'
		});
	});
	layer.msg('您好！ 欢迎光临景悦地产');

}