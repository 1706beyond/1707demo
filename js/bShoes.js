$('.bContent1-1-2 li').click(function (ev) {
        ev.stopPropagation();
       $('.bContent1-1-2 li ul li').css('display','block');
    }).has('ul').addClass('combine').click(function () {
    	
        $(this).toggleClass('expand').children('ul').stop(true).toggle('normal');
        
    });
    

$("#bsloggle1").click(function(){
	$(".bContent2-3").hide();
	$(".bContent2-4").hide();
	$(".bContent2-5").hide();
if($(".bContent2-2").css("display")=="none"){
$(".bContent2-2").show();

}else{
$(".bContent2-2").hide();

}
});

$("#bsloggle2").click(function(){
	$(".bContent2-2").hide();
	$(".bContent2-4").hide();
	$(".bContent2-5").hide();
if($(".bContent2-3").css("display")=="none"){
$(".bContent2-3").show();

}else{
$(".bContent2-3").hide();

}
});

$("#bsloggle3").click(function(){
	$(".bContent2-2").hide();
	$(".bContent2-3").hide();
	$(".bContent2-5").hide();
if($(".bContent2-4").css("display")=="none"){
$(".bContent2-4").show();

}else{
$(".bContent2-4").hide();

}
});

$("#bsloggle4").click(function(){
	$(".bContent2-2").hide();
	$(".bContent2-3").hide();
	$(".bContent2-4").hide();
if($(".bContent2-5").css("display")=="none"){
$(".bContent2-5").show();

}else{
$(".bContent2-5").hide();

}
});



$("#bsloggle5").click(function(){
	$(".bContent2-3").hide();
	$(".bContent2-4").hide();
	$(".bContent2-5").hide();
if($(".bContent2-2").css("display")=="none"){
$(".bContent2-2").show();

}else{
$(".bContent2-2").hide();

}
});


$("#bsloggle6").click(function(){
	$(".bContent2-2").hide();
	$(".bContent2-4").hide();
	$(".bContent2-5").hide();
if($(".bContent2-3").css("display")=="none"){
$(".bContent2-3").show();

}else{
$(".bContent2-3").hide();

}
});


$("#bsloggle7").click(function(){
	$(".bContent2-2").hide();
	$(".bContent2-3").hide();
	$(".bContent2-5").hide();
if($(".bContent2-4").css("display")=="none"){
$(".bContent2-4").show();

}else{
$(".bContent2-4").hide();

}
});


$("#bsloggle8").click(function(){
	$(".bContent2-2").hide();
	$(".bContent2-4").hide();
	$(".bContent2-3").hide();
if($(".bContent2-5").css("display")=="none"){
$(".bContent2-5").show();

}else{
$(".bContent2-5").hide();

}
});
