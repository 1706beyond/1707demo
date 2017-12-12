
//$('.nBallTeamId').bind('click',function(){
//	$('.nBallTeam1-1').css('display','block');
//})



$(".nNongniu3-3").bind('click',function(){
	$('#hidebg').css('display','block');
	hidebg.style.height=document.body.clientHeight+"px";
		$(".nbaShadow").show(100,"linear");
	
})

$("#nbaShadow1-1").bind('click',function(){
	$(".nbaShadow").hide();
	$('#hidebg').css('display','none');
})

$("#nbaShadowButton").bind('click',function(){
	$(".nbaShadow").hide();
	$('#hidebg').css('display','none');
})
