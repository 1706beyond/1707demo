$('#menu1').bind('mouseenter',function(){
	$('#option3').stop(true).slideDown(300,'linear');
})
$('#menu1').bind('mouseleave',function(){
	$('#option3').stop(true).slideUp(100,'linear');
})


$('#mId1').bind('mouseenter',function(){
	$('#option1').stop(true).slideDown(200,'linear');
})
$('#mId1').bind('mouseleave',function(){
	$('#option1').stop(true).slideUp(100,'linear');
})

$('#mId2').bind('mouseenter',function(){
	$('#option2').stop(true).slideDown(200,'linear');
})
$('#mId2').bind('mouseleave',function(){
	$('#option2').stop(true).slideUp(100,'linear');
})

$('#mId3').bind('mouseenter',function(){
	$('#option4').stop(true).slideDown(200,'linear');
})
$('#mId3').bind('mouseleave',function(){
	$('#option4').stop(true).slideUp(100,'linear');
})

$('#mId4').bind('mouseenter',function(){
	$('#option5').stop(true).slideDown(200,'linear');
})
$('#mId4').bind('mouseleave',function(){
	$('#option5').stop(true).slideUp(100,'linear');
})

$('#mId5').bind('mouseenter',function(){
	$('#option6').stop(true).slideDown(200,'linear');
})
$('#mId5').bind('mouseleave',function(){
	$('#option6').stop(true).slideUp(100,'linear');
})

$('#mId6').bind('mouseenter',function(){
	$('#option7').stop(true).slideDown(200,'linear');
})
$('#mId6').bind('mouseleave',function(){
	$('#option7').stop(true).slideUp(100,'linear');
})

$('#mId7').bind('mouseenter',function(){
	$('#option8').stop(true).slideDown(200,'linear');
})
$('#mId7').bind('mouseleave',function(){
	$('#option8').stop(true).slideUp(100,'linear');
})

$('#mId8').bind('mouseenter',function(){
	$('#option9').stop(true).slideDown(200,'linear');
})
$('#mId8').bind('mouseleave',function(){
	$('#option9').stop(true).slideUp(100,'linear');
})

$('#mId9').bind('mouseenter',function(){
	$('#option10').stop(true).slideDown(200,'linear');
})
$('#mId9').bind('mouseleave',function(){
	$('#option10').stop(true).slideUp(100,'linear');
})


 document.getElementById("erweiId1").onmouseover=function(){

		document.getElementById("erweiId3").style="display:block;"
	};
	
	document.getElementById("erweiId1").onmouseout=function(){
		document.getElementById("erweiId3").style="display:none;"
	};
	
	
	document.getElementById("erweiId2").onmouseover=function(){

		document.getElementById("erweiId4").style="display:block;"
	};
	document.getElementById("erweiId2").onmouseout=function(){
		document.getElementById("erweiId4").style="display:none;"
	};
	



    var oCheck1=document.check1;
	var oPhoneNum=oCheck1.phone_num;
	var oRegTip1=document.getElementById('reg_tip1');
	oPhoneNum.onfocus=function(){
		
	oRegTip1.style.display='none';
		
	}
	oPhoneNum.onblur=function(){
	var aPhoneNum=oPhoneNum.value;
		oRegTip1.style.display='block';
	oReg=/^1\d{10}$/g;
	
	if(oReg.test(aPhoneNum)){
		oRegTip1.innerHTML='√';
	}else{
		
		oRegTip1.innerHTML='必须为数字,必须以1开头,长度11位';
	}
	}
	

    var oCheck2=document.check2;
	var oVerificationCode=oCheck2.verification_code;
	var oRegTip2=document.getElementById('reg_tip2');
	oVerificationCode.onfocus=function(){
		
	oRegTip2.style.display='none';
		
	}
	oVerificationCode.onblur=function(){
	var aVerificationCode=oVerificationCode.value;
		oRegTip2.style.display='block';
	oReg=/^\d{4}$/gi;
	
	if(oReg.test(aVerificationCode)){
		oRegTip2.innerHTML='√';
	}else{
		
		oRegTip2.innerHTML='验证码必须为四位';
	}
	}
	
   var oCheck3=document.check3;
	var oMessageVerificationCode=oCheck3.message_verification_code;
	var oRegTip3=document.getElementById('reg_tip3');
	oMessageVerificationCode.onfocus=function(){
		
	oRegTip3.style.display='none';
		
	}
	oMessageVerificationCode.onblur=function(){
	var aMessageVerificationCode=oMessageVerificationCode.value;
		oRegTip3.style.display='block';
	oReg=/^\d{4}$/gi;
	
	if(oReg.test(aMessageVerificationCode)){
		oRegTip3.innerHTML='√';
	}else{
		
		oRegTip3.innerHTML='请输入正确的验证码';
	}
	}
	

   var oCheck4=document.check4;
	var oPassword=oCheck4.password;
	var oRegTip4=document.getElementById('reg_tip4');
	oPassword.onfocus=function(){
		
	oRegTip4.style.display='none';
		
	}
	oPassword.onblur=function(){
	var aPassword=oPassword.value;
		oRegTip4.style.display='block';
	oReg=/^[a-zA-Z0-9]{6,16}$/g;
	
	if(oReg.test(aPassword)){
		oRegTip4.innerHTML='√';
	}else{
		
		oRegTip4.innerHTML='密码必须由数字和字母组成，不能少于6位';
	}
	}
	
 var oCheck5=document.check5;
	var oPasswordRepeat=oCheck5.password_repeat;
	var oRegTip5=document.getElementById('reg_tip5');
	oPasswordRepeat.onfocus=function(){
		
	oRegTip5.style.display='none';
		
	}
	oPasswordRepeat.onblur=function(){
	var aPasswordRepeat=oPasswordRepeat.value;
		oRegTip5.style.display='block';
		
	oReg=/^[a-zA-Z0-9]{6,16}$/g;
	
  if ($(".password").val() != $(".password_repeat").val()){
      oRegTip5.innerHTML='请保持前后输入密码的一致性';
  }else{
  	oRegTip5.innerHTML='√';
  }
}

	
//ceiling吸顶------------start---------
 window.onscroll = function () {
   var box_h=document.documentElement.scrollTop || document.body.scrollTop;
   if(box_h>100){
   	document.getElementById('ceiling-wrap').style.top=0 + 'px';
   }else{
   	document.getElementById('ceiling-wrap').style.top=-100+'px';
   	
   }
   };
$('#ceiling1').bind('mouseenter',function(){
	$('#ceioption3').stop(true).slideDown(300,'linear');
})
$('#ceiling1').bind('mouseleave',function(){
	$('#ceioption3').stop(true).slideUp(100,'linear');
})


$('#ceimId1').bind('mouseenter',function(){
	$('#ceioption1').stop(true).slideDown(200,'linear');
})
$('#ceimId1').bind('mouseleave',function(){
	$('#ceioption1').stop(true).slideUp(100,'linear');
})

$('#ceimId2').bind('mouseenter',function(){
	$('#ceioption2').stop(true).slideDown(200,'linear');
})
$('#ceimId2').bind('mouseleave',function(){
	$('#ceioption2').stop(true).slideUp(100,'linear');
})

$('#ceimId3').bind('mouseenter',function(){
	$('#ceioption4').stop(true).slideDown(200,'linear');
})
$('#ceimId3').bind('mouseleave',function(){
	$('#ceioption4').stop(true).slideUp(100,'linear');
})

$('#ceimId4').bind('mouseenter',function(){
	$('#ceioption5').stop(true).slideDown(200,'linear');
})
$('#ceimId4').bind('mouseleave',function(){
	$('#ceioption5').stop(true).slideUp(100,'linear');
})

$('#ceimId5').bind('mouseenter',function(){
	$('#ceioption6').stop(true).slideDown(200,'linear');
})
$('#ceimId5').bind('mouseleave',function(){
	$('#ceioption6').stop(true).slideUp(100,'linear');
})

$('#ceimId6').bind('mouseenter',function(){
	$('#ceioption7').stop(true).slideDown(200,'linear');
})
$('#ceimId6').bind('mouseleave',function(){
	$('#ceioption7').stop(true).slideUp(100,'linear');
})

$('#ceimId7').bind('mouseenter',function(){
	$('#ceioption8').stop(true).slideDown(200,'linear');
})
$('#ceimId7').bind('mouseleave',function(){
	$('#ceioption8').stop(true).slideUp(100,'linear');
})

$('#ceimId8').bind('mouseenter',function(){
	$('#ceioption9').stop(true).slideDown(200,'linear');
})
$('#ceimId8').bind('mouseleave',function(){
	$('#ceioption9').stop(true).slideUp(100,'linear');
})

$('#ceimId9').bind('mouseenter',function(){
	$('#ceioption10').stop(true).slideDown(200,'linear');
})
$('#ceimId9').bind('mouseleave',function(){
	$('#ceioption10').stop(true).slideUp(100,'linear');
})
//-----------------End-------------