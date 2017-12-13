$('.pContent1-1-2 li').click(function (ev) {
        ev.stopPropagation();
       $('.pContent1-1-2 li ul li').css('display','block');
    }).has('ul').addClass('combine').click(function () {
    	
        $(this).toggleClass('expand').children('ul').stop(true).toggle('normal');
        
    });
    

$(".NBApContent2-2-1 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-2").attr('src',img);
});

$(".NBApContent2-2-3 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-4").attr('src',img);
});

$(".NBApContent2-2-5 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-6").attr('src',img);
});

$(".NBApContent2-2-7 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-8").attr('src',img);
});

$(".NBApContent2-2-9 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-10").attr('src',img);
});

$(".NBApContent2-2-11 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-12").attr('src',img);
});

$(".NBApContent2-2-13 span").bind('mouseover',function(){
let img=$(this).children('img').attr('src');
$("#NBApContent2-2-14").attr('src',img);
});

$('.NBAbox2').bind('mouseenter',function(){
	$('.NBAbox1').stop(true).show(200);
})
$('.NBAbox2').bind('mouseleave',function(){
	$('.NBAbox1').stop(true).hide(200);
})

//window.onscroll=function(){
//   滚动条移动到一定距离让侧边栏显示 暂不能使用，和同步的其他代码冲突
//	 var box_h=document.documentElement.scrollTop || document.body.scrollTop;
//	  if(box_h>300){
//     $('.NBAbox').show(200);
// }else{
// 	     $('.NBAbox').hide(200);
// }
//}

   $('.NBAbox3').on('click',function(){
      	$('html').animate({scrollTop:'0'},200);
   
     });

  
