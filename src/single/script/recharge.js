$(function(){
	$("#pay").picker({
	  title: "选择支付方式",
	  cols: [
	    {
	      textAlign: 'center',
	      values: ['微信余额', '银行卡']
	    }
	  ]
    });
})
