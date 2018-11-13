//返回上一页
$(".goback").on("click",function(){
	window.history.go(-1)
})
//发布提问
$("#release").on("click",function(){
	var	str = "";
		str+='<div class="release_content">';
		str+='<p>选择提问方式后继续操作</p>';
		str+='<a href="designatedTutor.html">指定导师</a>';
		str+='<a href="rewardProblem.html">悬赏问题</a>';
		str+='<a href="freeQuestion.html">免费问题</a>';
		str+='<i class="close iconfont icon-quxiao"></a>';
		str+='</div>';
		str+='<div class="markbg">';
	$("body").append(str).css("overflow","hidden");
	$(".close").on("click",function(){
		$(".markbg,.release_content").remove()
	})
})
//弹出二维码
$("#ermcode").on("click",function(){
	var	str = "";
		str+='<div class="ermcode_content">';
		str+='<img src="../../img/img.jpg" class="img"/>';
		str+='<p>导师姓名</p>';
		str+='<p class="color_9 padb_10">擅长领域心理咨询</p>';
		str+='<img src="../../img/ewm.jpg" class="ewm"/>';
		str+='<p class="text">赶紧把二维码分享给身边的小伙伴，让小伙伴们一起来咨询导师吧~</p>';
		str+='<i class="close iconfont icon-quxiao"></a>';
		str+='</div>';
		str+='<div class="markbg">';
	$("body").append(str).css("overflow","hidden");
	$(".close").on("click",function(){
		$(".markbg,.ermcode_content").remove()
	})
})
//导师列表下拉选择
function markshow(){
	$(".markbg").show()
}
function markhide(){
	$(".markbg").hide()
}
$(".select_box").on("click", "div", function() {
	$(this).siblings().removeClass('on');
	$(this).toggleClass("on");
	if ($(this).hasClass('on')) {
		$("body").css("height", "100%").css("overflow", "hidden");
		markshow();
	} else {
		$("body").css("height", "auto").css("overflow", "auto");
		markhide();
	}
})
$(".select").on("click", "li", function(e) {
	e.stopPropagation();
	e.preventDefault();
	var val = $(this).parents(".double_select").siblings(".val");
	var id = $(this).attr("data-id");
	var text = $(this).text();
	if(val.length > 0) {
		val.text(text).attr("data-id", id);
		markhide();
		$(this).parents(".select_box div").toggleClass("on");
		$("body").css("height", "auto").css("overflow", "auto");
	} else {
		$(this).addClass('on').siblings().removeClass('on');
		val = $(this).parent().siblings('.val');
		val.text(text).attr("data-id", id);
		markhide();
		$(this).parents(".select_box div").toggleClass("on");
		$("body").css("height", "auto").css("overflow", "auto");
	}
})

//添加回答
$("#addanswer,#pl").on("click",function(){
	$(".addanswer").show()
	$(".addhd").on("click",function(){
		$(".addanswer").hide()
	})
})

