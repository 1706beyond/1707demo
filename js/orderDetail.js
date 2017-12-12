
$("#matterCheck").click(function(){
if($(".vote").css("display")=="none"){
$(".vote").show();

}else{
$(".vote").hide();

}
});



//vote6----------------
$("#gonsi").click(function(){
if($(".vote-1").css("display")=="none"){
$(".vote-1").show(100,);

}else{
$(".vote-1").hide(100);

}
});






$("#mButton").bind('click',function(){
	$('#hidebg').css('display','block');
	hidebg.style.height=document.body.clientHeight+"px";
	$(".dAddress").show(300,"linear");
})

$(".spaTime").bind('click',function(){
	$(".dAddress").hide();
	$('#hidebg').css('display','none');
})

$(".userAddres").bind('click',function(){
	$(".dAddress").hide();
	$('#hidebg').css('display','none');
})



//表单验证
	var oAdcheck1=document.getElementById('adcheck1');
	var oPopup1=document.getElementById('Popup1');
	oAdcheck1.onfocus=function(){
		
	oPopup1.style.display='none';
		
	}
	oAdcheck1.onblur=function(){
	var aAdcheck1=oAdcheck1.value;
		oPopup1.style.display='block';
		if(aAdcheck1 == ''){
			oPopup1.innerHTML='请输入您的姓名';
		}else{
			oPopup1.style.display='none';
		}
	}
	

   var oAdcheck2=document.getElementById('adcheck2');
	var oPopup2=document.getElementById('Popup2');
	oAdcheck2.onfocus=function(){
		
	oPopup2.style.display='none';
		
	}
	oAdcheck2.onblur=function(){
	var aAdcheck2=oAdcheck2.value;
		oPopup2.style.display='block';
		if(aAdcheck2 == ''){
			oPopup2.innerHTML='请输入您的手机号';
		}else{
			oPopup2.style.display='none';
		}
	}
	

  var oAdcheck3=document.getElementById('adcheck3');
	var oPopup3=document.getElementById('Popup3');
	oAdcheck3.onfocus=function(){
		
	oPopup3.style.display='none';
		
	}
	oAdcheck3.onblur=function(){
	var aAdcheck3=oAdcheck3.value;
		oPopup3.style.display='block';
		if(aAdcheck3 == ''){
			oPopup3.innerHTML='请输入您的电话号码';
		}else{
			oPopup3.style.display='none';
		}
	}
	

 var oAdcheck4=document.getElementById('adcheck4');
	var oPopup4=document.getElementById('Popup4');
	oAdcheck4.onfocus=function(){
		
	oPopup4.style.display='none';
		
	}
	oAdcheck4.onblur=function(){
	var aAdcheck4=oAdcheck4.value;
		oPopup4.style.display='block';
		if(aAdcheck4 == ''){
			oPopup4.innerHTML='请输入您的邮箱';
		}else{
			oPopup4.style.display='none';
		}
	}
	


var oAdcheck5=document.getElementById('adcheck5');
	var oPopup5=document.getElementById('Popup5');
	oAdcheck5.onfocus=function(){
		
	oPopup5.style.display='none';
		
	}
	oAdcheck5.onblur=function(){
	var aAdcheck5=oAdcheck5.value;
		oPopup5.style.display='block';
		if(aAdcheck5 == ''){
			oPopup5.innerHTML='请输入您的地址';
		}else{
			oPopup5.style.display='none';
		}
	}