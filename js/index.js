
	let lilen=$("#ulId2").children;
	for(let i=0;i<lilen.length;i++){
		lilen[i].innerHTML="<img src='img/"+(i+8)+".jpg'/>"
	}
	var num=0;//公用的下标
	var imgs=$("#img").children;//获取全部的li
	//右按钮点击
	$("#right").onclick=function(){
		num++;
		//num临界值的判断
		if(num>imgs.length-1){
			num=0;
		}
		//重置图片以及底部小圆圈的样式
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.opacity = 0;
			btns[i].className="";
		}
		//对应位置的图片以及小圆圈
		imgs[num].style.opacity = 1;
		btns[num].className="black";
	}
	//左边按钮点击
	$("#left").onclick=function(){
		num--;
		//num临界值的判断
		if(num<0){
			num=imgs.length-1;
		}
		//重置图片以及底部小圆圈的样式
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.opacity = 0;
			btns[i].className="";

		}
		//对应位置的图片以及小圆圈
		imgs[num].style.opacity = 1;
		btns[num].className="black";


	}
	var btns =$("#btn").children;//获取全部的底部小圆圈
	for (var i = 0; i < imgs.length; i++) {
		btns[i].index=i;//保存下标
		//底部小圆圈的鼠标over事件
		btns[i].onmouseover=function(){
		    //重置图片以及底部小圆圈的样式
			for (var j = 0; j< imgs.length; j++) {
			   imgs[j].style.opacity = 0;
			   btns[j].className="";
		    }
              //num=this.index;
		    //console.log(this.index)
		    //对应位置的图片以及小圆圈
	     	imgs[this.index].style.opacity = 1;
			btns[this.index].className="black";

		}
	}
	//自动播放
	var timer=null;
	clearInterval(timer);//开启定时器前先清空定时器；
	timer=setInterval($("#right").onclick,2000);
	//鼠标移上停止自动播放
	$("#wrap").onmouseover=function(){
		clearInterval(timer)
	}
	//鼠标移出开启自动播放
	$("#wrap").onmouseout=function(){
		clearInterval(timer);
		timer=setInterval($("#right").onclick,2000);
	}
	
	
//	let lis=$("#ulId3").children;
//	for(let i=0;i<lis.length;i++){
//		lis[i].innerHTML="<img src='img/ban"+(i+1)+".jpg'/>"
//	}
	
//下拉框
	$("#mId1").onmouseover=function(){

		$("#option1").style="display:block;"
	};
	$("#mId1").onmouseout=function(){
		$("#option1").style="display:none;"
	};
	$("#option1").onmouseover=function(){
		$("#option1").style="display:block;"
	};
	$("#option1").onmouseout=function(){
		$("#option1").style="display:none;"
	};
	
	
	
	
	
	$("#mId2").onmouseover=function(){

		$("#option2").style="display:block;"
	};
	$("#mId2").onmouseout=function(){
		$("#option2").style="display:none;"
	};
	$("#option2").onmouseover=function(){

		$("#option2").style="display:block;"
	};
	
	$("#option2").onmouseout=function(){
		$("#option2").style="display:none;"
	};
	
	
	
	$("#mId3").onmouseover=function(){

		$("#option4").style="display:block;"
	};
	$("#mId3").onmouseout=function(){
		$("#option4").style="display:none;"
	};
	$("#option4").onmouseover=function(){

		$("#option4").style="display:block;"
	};
	
	$("#option4").onmouseout=function(){
		$("#option4").style="display:none;"
	};

	
	
$("#mId4").onmouseover=function(){

		$("#option5").style="display:block;"
	};
	$("#mId4").onmouseout=function(){
		$("#option5").style="display:none;"
	};
	$("#option5").onmouseover=function(){

		$("#option5").style="display:block;"
	};
	
	$("#option5").onmouseout=function(){
		$("#option5").style="display:none;"
	};
	
	
$("#mId5").onmouseover=function(){

		$("#option6").style="display:block;"
	};
	$("#mId5").onmouseout=function(){
		$("#option6").style="display:none;"
	};
	$("#option6").onmouseover=function(){

		$("#option6").style="display:block;"
	};
	
	$("#option6").onmouseout=function(){
		$("#option6").style="display:none;"
	};
	
	
$("#mId6").onmouseover=function(){

		$("#option7").style="display:block;"
	};
	$("#mId6").onmouseout=function(){
		$("#option7").style="display:none;"
	};
	$("#option7").onmouseover=function(){

		$("#option7").style="display:block;"
	};
	
	$("#option7").onmouseout=function(){
		$("#option7").style="display:none;"
	};
	
$("#mId7").onmouseover=function(){

		$("#option8").style="display:block;"
	};
	$("#mId7").onmouseout=function(){
		$("#option8").style="display:none;"
	};
	$("#option8").onmouseover=function(){

		$("#option8").style="display:block;"
	};
	
	$("#option8").onmouseout=function(){
		$("#option8").style="display:none;"
	};
	
$("#mId8").onmouseover=function(){

		$("#option9").style="display:block;"
	};
	$("#mId8").onmouseout=function(){
		$("#option9").style="display:none;"
	};
	$("#option9").onmouseover=function(){

		$("#option9").style="display:block;"
	};
	
	$("#option9").onmouseout=function(){
		$("#option9").style="display:none;"
	};
	
$("#mId9").onmouseover=function(){

		$("#option10").style="display:block;"
	};
	$("#mId9").onmouseout=function(){
		$("#option10").style="display:none;"
	};
	$("#option10").onmouseover=function(){

		$("#option10").style="display:block;"
	};
	
	$("#option10").onmouseout=function(){
		$("#option10").style="display:none;"
	};
	//选择球队<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	$("#menu1").onmouseover=function(){

		$("#option3").style="display:block;"
	};
	$("#menu1").onmouseout=function(){
		$("#option3").style="display:none;"
	};
	$("#option3").onmouseover=function(){
		$("#option3").style="display:block;"
	};
	
	$("#option3").onmouseout=function(){
		$("#option3").style="display:none;"
	};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
	
	
	
	$("#erweiId1").onmouseover=function(){

		$("#erweiId3").style="display:block;"
	};
	
	$("#erweiId1").onmouseout=function(){
		$("#erweiId3").style="display:none;"
	};
	
	
	$("#erweiId2").onmouseover=function(){

		$("#erweiId4").style="display:block;"
	};
	$("#erweiId2").onmouseout=function(){
		$("#erweiId4").style="display:none;"
	};
	
//-------------------------------bottom4的图片轮换
	
	var num=0;
	$("#right1").onclick=function(){
		num++;
		if(num>$("#bottom4-1").children.length-1){
			num=1;
			$("#bottom4-1").style.left="0px"
		}
		$("#bottom4-1").style.left=-num*252+'px';
		}

	
	$("#left1").onclick=function(){
		num--;
		if(num<0){
			num=$("#bottom4-1").children.length-2;
			$("#bottom4-1").style.left=-($("#bottom4-1").children.length-1)*250+"px"
		}
		$("#bottom4-1").style.left=-num*252+'px';
		}
	
	


//搜索框
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
//              https://dd-search.jd.com/?terminal=pc&ver=2&zip=1&key='+sVal+'&pvid=db10b2bfffb347ea9f1233ef6a2c67a4&t=1511667148626&curr_url=www.jd.com%2F&callback=callback
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
        
//ceiling吸顶------------start---------
 window.onscroll = function () {
   var box_h=document.documentElement.scrollTop || document.body.scrollTop;
   if(box_h>100){
   	document.getElementById('ceiling-wrap').style.top=0 + 'px';
   }else{
   	document.getElementById('ceiling-wrap').style.top=-100+'px';
   	
   }
   };
   
//下拉框
	$("#ceimId1").onmouseover=function(){

		$("#ceioption1").style="display:block;"
	};
	$("#ceimId1").onmouseout=function(){
		$("#ceioption1").style="display:none;"
	};
	$("#ceioption1").onmouseover=function(){
		$("#ceioption1").style="display:block;"
	};
	$("#ceioption1").onmouseout=function(){
		$("#ceioption1").style="display:none;"
	};
	
	
	
	
	
	$("#ceimId2").onmouseover=function(){

		$("#ceioption2").style="display:block;"
	};
	$("#ceimId2").onmouseout=function(){
		$("#ceioption2").style="display:none;"
	};
	$("#ceioption2").onmouseover=function(){

		$("#ceioption2").style="display:block;"
	};
	
	$("#ceioption2").onmouseout=function(){
		$("#ceioption2").style="display:none;"
	};
	
	
	
	$("#ceimId3").onmouseover=function(){

		$("#ceioption4").style="display:block;"
	};
	$("#ceimId3").onmouseout=function(){
		$("#ceioption4").style="display:none;"
	};
	$("#ceioption4").onmouseover=function(){

		$("#ceioption4").style="display:block;"
	};
	
	$("#ceioption4").onmouseout=function(){
		$("#ceioption4").style="display:none;"
	};

	
	
$("#ceimId4").onmouseover=function(){

		$("#ceioption5").style="display:block;"
	};
	$("#ceimId4").onmouseout=function(){
		$("#ceioption5").style="display:none;"
	};
	$("#ceioption5").onmouseover=function(){

		$("#ceioption5").style="display:block;"
	};
	
	$("#ceioption5").onmouseout=function(){
		$("#ceioption5").style="display:none;"
	};
	
	
$("#ceimId5").onmouseover=function(){

		$("#ceioption6").style="display:block;"
	};
	$("#ceimId5").onmouseout=function(){
		$("#ceioption6").style="display:none;"
	};
	$("#ceioption6").onmouseover=function(){

		$("#ceioption6").style="display:block;"
	};
	
	$("#ceioption6").onmouseout=function(){
		$("#ceioption6").style="display:none;"
	};
	
	
$("#ceimId6").onmouseover=function(){

		$("#ceioption7").style="display:block;"
	};
	$("#ceimId6").onmouseout=function(){
		$("#ceioption7").style="display:none;"
	};
	$("#ceioption7").onmouseover=function(){

		$("#ceioption7").style="display:block;"
	};
	
	$("#ceioption7").onmouseout=function(){
		$("#ceioption7").style="display:none;"
	};
	
$("#ceimId7").onmouseover=function(){

		$("#ceioption8").style="display:block;"
	};
	$("#ceimId7").onmouseout=function(){
		$("#ceioption8").style="display:none;"
	};
	$("#ceioption8").onmouseover=function(){

		$("#ceioption8").style="display:block;"
	};
	
	$("#ceioption8").onmouseout=function(){
		$("#ceioption8").style="display:none;"
	};
	
$("#ceimId8").onmouseover=function(){

		$("#ceioption9").style="display:block;"
	};
	$("#ceimId8").onmouseout=function(){
		$("#ceioption9").style="display:none;"
	};
	$("#ceioption9").onmouseover=function(){

		$("#ceioption9").style="display:block;"
	};
	
	$("#ceioption9").onmouseout=function(){
		$("#ceioption9").style="display:none;"
	};
	
$("#ceimId9").onmouseover=function(){

		$("#ceioption10").style="display:block;"
	};
	$("#ceimId9").onmouseout=function(){
		$("#ceioption10").style="display:none;"
	};
	$("#ceioption10").onmouseover=function(){

		$("#ceioption10").style="display:block;"
	};
	
	$("#ceioption10").onmouseout=function(){
		$("#ceioption10").style="display:none;"
	};
	//选择球队<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	$("#ceiling1").onmouseover=function(){

		$("#ceioption3").style="display:block;"
	};
	$("#ceiling1").onmouseout=function(){
		$("#ceioption3").style="display:none;"
	};
	$("#ceioption3").onmouseover=function(){
		$("#ceioption3").style="display:block;"
	};
	
	$("#ceioption3").onmouseout=function(){
		$("#ceioption3").style="display:none;"
	};