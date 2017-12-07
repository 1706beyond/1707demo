var oSearchForm    = document.forms['search-form'];
var oSearchContent = oSearchForm.elements['search-content'];
var oSearchList = document.getElementById('search-list');

		// 缓存输入框默认的内容
		var sDefaultVal   = oSearchContent.value;


		// 输入框获得焦点，清空内容
		oSearchContent.onfocus = function () {
			if(this.value === sDefaultVal) {
				this.value = '';
			}
		};
		// 输入框失去焦点，恢复内容
		oSearchContent.onblur = function () {
			if(this.value === '') {
				this.value = sDefaultVal;
			}
		};
		
 oSearchContent.oninput = oSearchContent.onpropertychange = function () {
            var sVal = this.value;
            oSearchList.innerHTML = '';
            if(sVal !== '') {
                var oScript = document.createElement('script');
                oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+sVal+'&_ksTS=1511667667645_642&callback=callback&k=1&area=c2c&bucketid=4';
                document.body.appendChild(oScript);
            }
        };

        // 声明回调函数
        function callback(data) {
            data.result.forEach((v) => {
                var oLi = document.createElement('li');
                oLi.innerHTML = v;
                oSearchList.appendChild(oLi);
            });
        }
        



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
//ceiling吸顶-----------------------End-------------




//---------pictureSlider轮播图

var num3=0;
	document.getElementById("content1-2").onclick=function(){
		num3++;
		if(num3>document.getElementById("ulId3").children.length-1){
			num3=1;
			document.getElementById("ulId3").style.top="0px"
		}
    	document.getElementById("ulId3").style.top=-num3*120+'px';
	}
	
	
document.getElementById("content1-3").onclick=function(){
		num3--
		if(num3<0){
			num3=document.getElementById("ulId3").children.length-1;
			document.getElementById("ulId3").style.top=-(document.getElementById("ulId3").children.length-1)*94+"px"
		}
		document.getElementById("ulId3").style.top=-num3*120+'px';
	}



//--------------------选项卡内容显示隐藏
$(function(){
   $("#content1-1 ul li").click(function(){
   $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
   var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
   $("#content2-1 > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
   });
});



var oContent21=document.getElementById('content2-1')
var oShadow=document.getElementById('shadow');
var oLargeImg=document.getElementById('large-img');
var oLargeBox=document.getElementById('large-box');
var oContent2=document.getElementById('content2');


 var iMaxL =oContent21.offsetWidth  - oShadow.offsetWidth;
 var iMaxT =oContent21.offsetHeight - oShadow.offsetHeight;
     oContent21.addEventListener('mousemove', (ev) => {
        var e = ev || window.event;

        var
            iL = e.clientX - oContent2.offsetLeft - oShadow.offsetWidth/2 ;
            iT = e.clientY - oContent2.offsetTop  - oShadow.offsetHeight/2;


        iL = Math.max(iL , 0);
        iT = Math.max(iT , 0);
        iL = Math.min(iL , iMaxL);
        iT = Math.min(iT, iMaxT);
      
        var iBigImgL = iL * (oLargeImg.offsetWidth - oLargeBox.offsetWidth) / iMaxL;
        var iBigImgT = iT * (oLargeImg.offsetHeight - oLargeBox.offsetHeight) / iMaxT;

          
        oShadow.style.left = iL + 'px';
        oShadow.style.top  = iT + 'px';
           
        oLargeImg.style.left = -iBigImgL + 'px';
        oLargeImg.style.top  = -iBigImgT + 'px';
    });
    
     $('#content2-1').bind('mouseenter',function(){
     	$('#large-box').stop(true).animate({width:490,height:560},300,'linear');
     	$('#shadow').stop(true).show(100,'linear');
     	 oLargeBox.style.display = 'block';
    });
    
    $('#content2-1').bind('mouseleave',function(){
    		$('#shadow').stop(true).hide(100,'linear');
    		$('#large-box').stop(true).animate({width:0,height:0},300,'linear');
    });
    



//------------------------bottom4的图片轮换
	
	var num=0;
	document.getElementById("right1").onclick=function(){
		num++;
		if(num>document.getElementById("bottom4-1").children.length-1){
			num=1;
			document.getElementById("bottom4-1").style.left="0px"
		}
		document.getElementById("bottom4-1").style.left=-num*252+'px';
		}

	
	document.getElementById("left1").onclick=function(){
		num--;
		if(num<0){
			num=document.getElementById("bottom4-1").children.length-2;
			document.getElementById("bottom4-1").style.left=-(document.getElementById("bottom4-1").children.length-1)*250+"px"
		}
		document.getElementById("bottom4-1").style.left=-num*252+'px';
		}




//--------------------------footer---start--------
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

//--------------------------------------------footer---End--------