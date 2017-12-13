$('.pContent1-1-2 li').click(function (ev) {
        ev.stopPropagation();
       $('.pContent1-1-2 li ul li').css('display','block');
    }).has('ul').addClass('combine').click(function () {
    	
        $(this).toggleClass('expand').children('ul').stop(true).toggle('normal');
        
    });