window.onload=function () {
	var body = document.getElementsByTagName("body")[0]
	var footer='<footer class="footer-bottom"><div class="wrapper"><div class="f-title"><div class="fl"><ul><li><a href="" rel="nofollow" >关于链家</a></li><li><a href="" rel="nofollow" >联系我们</a></li><li><a href="" rel="nofollow" >加入我们</a></li><li><a href="" rel="nofollow" >隐私声明</a></li><li><a href="" rel="nofollow" >网站地图</a></li><li><a href="" rel="nofollow" >友情链接</a></li></ul></div></div><div class="f-footer"><div class="fl"><div>客服电话：</div><div class="text">8888 8888</div></div><div class="fl"><div>公司地址：</div><div class="text">北京朝阳区XXX科技园XXX大厦XX号楼</div></div></div></div></footer>';
	body.innerHTML=body.innerHTML+footer;
}