$(function(){
	/**
 * 倒计时插件
 * @param {IDString} ele 目标元素ID
 * @param {Object} option 配置Json对象
 */
function Countdown(ele, Option) {
	this.time = Option && Option.time ? Option.time : 60;
	this.class = Option && Option.class ? Option.class : " color_9";
	this.flag = true;
	this.ele = ele;
	var flag = this.flag;
	var _this = document.getElementById(this.ele);
	_this.className = _this.className + this.class;
	return flag;
}
(function(window, Countdown) {
	Countdown.prototype.waitfor = function(callback) {
		var than = this;
		var t = than.ele;
		var _this = document.getElementById(t);
		_this.setAttribute("data-flag", "false");
		if(!_this) {
			alert("【倒计时组件】ID错误，请检查代码！");
			console.log("【倒计时组件】ID错误，请检查代码！");
			return false;
		}
		_this.innerText = than.time + "s";
		than.time--;
		var codeTimes = setTimeout(function() {
			if(than.time == 0) {
				than.time = 60;
				clearInterval(codeTimes);
				_this.setAttribute("data-flag", "true");
				_this.innerText = "验证码";
				_this.className = _this.className.replace( /color_9/g,"");
			} else {
				than.waitfor(t);
			}
		}, 1000);
	}
})(window, Countdown);

	
	
   // 倒计时
	$("#getCode").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		//此处应该有更多的数据操作
		var flag = $(this).attr("data-flag");
		if(flag == "true") {
			var id = $(this).attr("id");
			//默认事件为60秒，如需修改需要传一个json对象进去；
			var countdown = new Countdown(id, {
				time: 60
			});
			countdown.waitfor();
			//后端数据操作
		}
	});
})