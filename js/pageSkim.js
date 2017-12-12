
 $('.pContent1-1-2 li').click(function (ev) {
        ev.stopPropagation();
       $('.pContent1-1-2 li ul li').css('display','block');
    }).has('ul').addClass('combine').click(function () {
    	
        $(this).toggleClass('expand').children('ul').stop(true).toggle('normal');
        
    });
    
$("#psloggle1").click(function(){
	$(".pContent2-3").hide();
	$(".pContent2-4").hide();
	$(".pContent2-5").hide();
if($(".pContent2-2").css("display")=="none"){
$(".pContent2-2").show();

}else{
$(".pContent2-2").hide();

}
});


$("#psloggle3").click(function(){
	$(".pContent2-2").hide();
	$(".pContent2-4").hide();
	$(".pContent2-5").hide();
if($(".pContent2-3").css("display")=="none"){
$(".pContent2-3").show();

}else{
$(".pContent2-3").hide();

}
});


$("#psloggle2").click(function(){
	$(".pContent2-2").hide();
	$(".pContent2-3").hide();
	$(".pContent2-5").hide();
if($(".pContent2-4").css("display")=="none"){
$(".pContent2-4").show();

}else{
$(".pContent2-4").hide();

}
});


$("#psloggle4").click(function(){
	$(".pContent2-2").hide();
	$(".pContent2-4").hide();
	$(".pContent2-3").hide();
if($(".pContent2-5").css("display")=="none"){
$(".pContent2-5").show();

}else{
$(".pContent2-5").hide();

}
});




$("#psloggle5").click(function(){
	$(".pContent2-3").hide();
	$(".pContent2-4").hide();
	$(".pContent2-5").hide();
if($(".pContent2-2").css("display")=="none"){
$(".pContent2-2").show();

}else{
$(".pContent2-2").hide();

}
});


$("#psloggle6").click(function(){
	$(".pContent2-2").hide();
	$(".pContent2-4").hide();
	$(".pContent2-5").hide();
if($(".pContent2-3").css("display")=="none"){
$(".pContent2-3").show();

}else{
$(".pContent2-3").hide();

}
});


$("#psloggle7").click(function(){
	$(".pContent2-2").hide();
	$(".pContent2-3").hide();
	$(".pContent2-5").hide();
if($(".pContent2-4").css("display")=="none"){
$(".pContent2-4").show();

}else{
$(".pContent2-4").hide();

}
});


$("#psloggle8").click(function(){
	$(".pContent2-2").hide();
	$(".pContent2-4").hide();
	$(".pContent2-3").hide();
if($(".pContent2-5").css("display")=="none"){
$(".pContent2-5").show();

}else{
$(".pContent2-5").hide();

}
});
