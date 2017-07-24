$(document).ready(function () {

	$('.btn-mode-easy').click(function (e) {
    e.preventDefault();

	    var  $this = $(this),
	    	 content = $('.block-mode-easy');

	    if   (!$this.hasClass('active')) {
	         $this.siblings().removeClass('active');
	         $this.addClass('active');
	         content.siblings().removeClass('active');
	         content.addClass('active');
	    }
	});

	$('.btn-mode-full').click(function (e) {
    e.preventDefault();

	    var  $this = $(this),
	    	 content = $('.block-mode-full');

	    if   (!$this.hasClass('active')) {
	         $this.siblings().removeClass('active');
	         $this.addClass('active');
	         content.siblings().removeClass('active');
	         content.addClass('active');
	    }

	});

	$('.mode-switch-full').click(function (e) {
    e.preventDefault();

	    var  item = $('.btn-mode-full'),
	    	 content = $('.block-mode-full');

	    
         item.siblings().removeClass('active');
         item.addClass('active');
         content.siblings().removeClass('active');
         content.addClass('active');
	    
	});

	$('.mode-switch-easy').click(function (e) {
    e.preventDefault();

	    var  item = $('.btn-mode-easy'),
	    	 content = $('.block-mode-easy');

	    
         item.siblings().removeClass('active');
         item.addClass('active');
         content.siblings().removeClass('active');
         content.addClass('active');
	    
	});

	//скролл до якоря
	$("a[href*=#]").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 700);
		e.preventDefault();
		return false;
	});

})