

(function($) { 
	 // gird portfolio video popup
	 $('.watch-video').magnificPopup({
		type:'iframe',
		iframe: {
			  markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				  '</div>', 
	
			  patterns: {
			youtube: {
				index: 'youtube.com/',
	
				  id: 'v=', 
	
				  src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
			},
			vimeo: {
				  index: 'vimeo.com/',
				  id: '/',
				  src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				  index: '//maps.google.',
				  src: '%id%&output=embed'
			}
	
		  },
	
		  srcAction: 'iframe_src',
		}
	});
	 
	 
	 // checkout Accorodion
	$(document).ready(function(){
		 
		var acc = document.getElementsByClassName("al-accordion");
			console.log(acc.length);
			var i;
	
			for (i = 0; i < acc.length; i++) {
				console.log(i);
			  acc[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
				  panel.style.maxHeight = null;
				} else {
				  panel.style.maxHeight = panel.scrollHeight + "px";
				} 
			  });
			}
	});
	 
	// Mobile-menu
	$('.al-menu-icon a').on('click',function(){
		$('.al-menu-area').slideToggle(1000);
		return false;
	});
	
	// fixedMenu js
	$(window).scroll(function(){
		var value = $(this).scrollTop();
		console.log(value);
	
		if(value > 100){
			$('.al-header-menu-section').addClass('fixedMenu');
		}else{
			$('.al-header-menu-section').removeClass('fixedMenu');
		}
	});
	
	AOS.init();
	  
})(jQuery);