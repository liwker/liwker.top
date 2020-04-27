$(function () {
    
    var li = $('.img-li');
    var leng = li.length;
    var i=0;
	
    function feiru() {
        if ((leng - 1) > i) {
            setTimeout(function () {
                var a=new animateFct(i);
                console.log(i);
                feiru();
                i++;
            }, 4000);
        } else {
			$('.begin').text("豆豆 生日快乐 Happy Birthday!");
			$('.begin').fadeIn();
            return;
        }
    };
	
    function animateFct(i) {
        var randTBArr = new Array('top', 'bottom');
        var randLRArr = new Array('right', 'left');
        var data={};
        var c = Math.floor((Math.random() * 2)+1);
        li.eq(i).css(randTBArr[c-1],'-100%');
        var d = Math.floor((Math.random() * 2)+1);
        li.eq(i).css(randLRArr[d-1],'-100%');
        li.eq(i).css('z-index',i)
        var n= Math.floor((Math.random() * 30)+(-30));
        li.eq(i).css({transform:"rotate("+n+"deg)"})
        li.eq(i).find('img').css({width:'250px',height:'350px'})
        li.eq(i).show();
        if (parseInt(li.eq(i).css('top'))