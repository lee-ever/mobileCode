$(function(){function e(t,e){this.time=e&&e.time?e.time:60,this.class=e&&e.class?e.class:" color_9",this.flag=!0,this.ele=t;var a=this.flag,i=document.getElementById(this.ele);return i.className=i.className+this.class,a}window,e.prototype.waitfor=function(t){var e=this,a=e.ele,i=document.getElementById(a);if(i.setAttribute("data-flag","false"),!i)return alert("【倒计时组件】ID错误，请检查代码！"),console.log("【倒计时组件】ID错误，请检查代码！"),!1;i.innerText=e.time+"s",e.time--;var s=setTimeout(function(){0==e.time?(e.time=60,clearInterval(s),i.setAttribute("data-flag","true"),i.innerText="验证码",i.className=i.className.replace(/color_9/g,"")):e.waitfor(a)},1e3)},$("#getCode").click(function(t){(t.stopPropagation(),t.preventDefault(),"true"==$(this).attr("data-flag"))&&new e($(this).attr("id"),{time:60}).waitfor()})});