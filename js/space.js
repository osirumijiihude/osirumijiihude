(function($) {
	
	"use strict";
	
/* ==========================================================================
   exists - Check if an element exists
   ========================================================================== */		
	
	function exists(e) {
		return $(e).length > 0;
	}

/* ==========================================================================
   isTouchDevice - return true if it is a touch device
   ========================================================================== */

	function isTouchDevice() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}

// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider !== 'undefined'){
			
			$('.image-rotator .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 200,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: false,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: false,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.images-slider .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.images-slider-2 .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.testimonial-slider .slides').bxSlider({
				 mode: 'vertical',						// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 200,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.features-slider .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
		}
				


/* ==========================================================================
   setDimensionsPieCharts
   ========================================================================== */
	
	function setDimensionsPieCharts() {

		$('.pie-chart').each(function() {

			var $t = $(this),
				n = $t.parent().width(),
				r = $t.attr("data-barSize");
			
			if (n < r) {
				r = n;
			}
			
			$t.css("height", r);
			$t.css("width", r);
			$t.css("line-height", r + "px");
			
			$t.find("i").css({
				"line-height": r + "px",
				"font-size": r / 3
			});
			
		});

	}

/* ==========================================================================
   animatePieCharts
   ========================================================================== */

	function animatePieCharts() {

		if(typeof $.fn.easyPieChart !== 'undefined'){

			$('.pie-chart:in-viewport').each(function() {
	
				var $t = $(this),
					n = $t.parent().width(),
					r = $t.attr("data-barSize"),
					l = "square";
				
				if ($t.attr("data-lineCap") !== undefined) {
					l = $t.attr("data-lineCap");
				} 
				
				if (n < r) {
					r = n;
				}
				
				$t.easyPieChart({
					animate: 1300,
					lineCap: l,
					lineWidth: $t.attr("data-lineWidth"),
					size: r,
					barColor: $t.attr("data-barColor"),
					trackColor: $t.attr("data-trackColor"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find('.pie-chart-percent span').text(Math.round(percent));
					}
	
				});
				
			});
			
		}

	}

/* ==========================================================================
   animateMilestones
   ========================================================================== */

	function animateMilestones() {

		$('.milestone:in-viewport').each(function() {
			
			var $t = $(this),
				n = $t.find(".milestone-value").attr("data-stop"),
				r = parseInt($t.find(".milestone-value").attr("data-speed"), 10);
				
			if (!$t.hasClass("already-animated")) {
				$t.addClass("already-animated");
				$({
					countNum: $t.find(".milestone-value").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".milestone-value").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".milestone-value").text(this.countNum);
					}
				});
			}
			
		});

	}

/* ==========================================================================
   animateProgressBars
   ========================================================================== */

	function animateProgressBars() {

		$('.progress-bar .progress-bar-outer:in-viewport').each(function() {
			
			var $t = $(this);
			
			if (!$t.hasClass("already-animated")) {
				$t.addClass("already-animated");
				$t.animate({
					width: $t.attr("data-width") + "%"
				}, 2000);
			}
			
		});

	}

/* ==========================================================================
   enableParallax
   ========================================================================== */

	function enableParallax() {

		// vertical parallax
		if(typeof $.fn.parallax !== 'undefined'){
			
			$('.parallax').each(function() {
	
				var $t = $(this);
				$t.addClass("parallax-enabled");
				$t.parallax("49%", 0.3, false);
	
			});
			
		}
		
		// horizontal parallax
		if(typeof $.fn.hparallax !== 'undefined'){
		
			$('.horizontal-parallax').each(function() {
	
				var $t = $(this);
				$t.addClass("horizontal-parallax-enabled");
				$t.hparallax();
	
			});
			
		}
		
		//animated parallax
		if(typeof $.fn.animatedparallax !== 'undefined'){
		
			$('.animated-parallax').each(function() {
	
				var $t = $(this);
				$t.addClass("animated-parallax-enabled");
				$t.animatedparallax();
	
			});
		
		}
		
		//mouse direction parallax
		if(typeof $.fn.parallax_mouse_direction != 'undefined'){
		
			$('.scene').parallax_mouse_direction();
			
		}

	}

/* ==========================================================================
   handleMobileMenu 
   ========================================================================== */		

	var MOBILEBREAKPOINT = 979;

	function handleMobileMenu() {

		if ($(window).width() > MOBILEBREAKPOINT) {
			
			$("#mobile-menu").hide();
			$("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
		
		} else {
			
			if (!exists("#mobile-menu")) {
				
				$("#menu").clone().attr({
					id: "mobile-menu",
					"class": "fixed"
				}).insertAfter("#header");
				
				$("#mobile-menu > li > a, #mobile-menu > li > ul > li > a").each(function() {
					var $t = $(this);
					if ($t.next().hasClass('sub-menu') || $t.next().is('ul') || $t.next().is('.sf-mega')) {
						$t.append('<span class="ifc-down4 mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');
					}
				});
			
				$(".mobile-menu-submenu-arrow").click(function(event) {
					var $t = $(this);
					if ($t.hasClass("mobile-menu-submenu-closed")) {
						$t.parent().siblings("ul").slideDown(300);
						$t.parent().siblings(".sf-mega").slideDown(300);
						$t.removeClass("mobile-menu-submenu-closed ifc-down4").addClass("mobile-menu-submenu-opened ifc-up4");
					} else {
						$t.parent().siblings("ul").slideUp(300);
						$t.parent().siblings(".sf-mega").slideUp(300);
						$t.removeClass("mobile-menu-submenu-opened ifc-up4").addClass("mobile-menu-submenu-closed ifc-down4");
					}
					event.preventDefault();
				});
				
				$("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");
				
			}
			
		}

	}

/* ==========================================================================
   showHideMobileMenu
   ========================================================================== */

	function showHideMobileMenu() {
		
		$("#mobile-menu-trigger").click(function(event) {
			
			var $t = $(this),
				$n = $("#mobile-menu");
			
			if ($t.hasClass("mobile-menu-opened")) {
				$t.removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
				$n.slideUp(300);
			} else {
				$t.removeClass("mobile-menu-closed").addClass("mobile-menu-opened");
				$n.slideDown(300);
			}
			event.preventDefault();
			
		});
		
	}
	
/* ==========================================================================
   handleAccordionsAndToogles
   ========================================================================== */
   
   function handleAccordionsAndToogles() {
	   
		// accordion
		
		$(".accordion .accordion-item").click(function(e) {
			e.preventDefault();
			if($(this).next("div").is(":visible")){
				$(this).removeClass('active').next("div").slideUp("slow");
			} else {
				$('.accordion .accordion-item').removeClass('active');
				$(".accordion .accordion-item-content").slideUp("slow");
				$(this).addClass('active').next("div").slideToggle("slow");
			}
		});
		
		// toggle
		
		$(".toggle .toggle-item").click(function(e) {
			e.preventDefault();
			$(this).toggleClass('active').next("div").slideToggle("slow");
		});
   
   }   
   
/* ==========================================================================
   handleBackToTop
   ========================================================================== */
   
   function handleBackToTop() {
	   
		$('#back-to-top').click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});
   
   }
   	
/* ==========================================================================
   showHidebackToTop
   ========================================================================== */	
	
	function showHidebackToTop() {
	
		if ($(window).scrollTop() > $(window).height() / 2 ) {
			$("#back-to-top").removeClass('gone');
			$("#back-to-top").addClass('visible');
		} else {
			$("#back-to-top").removeClass('visible');
			$("#back-to-top").addClass('gone');
		}
	
	}

/* ==========================================================================
   handleVideoBackground
   ========================================================================== */
   
	var min_w = 0, 					
		video_width_original = 1920,
		video_height_original = 1080,
		vid_ratio = 1920/1080;
   
	function handleVideoBackground() {
	   
		$('.fullwidth-section .fullwidth-section-video').each(function(i){

			var $sectionWidth = $(this).closest('.fullwidth-section').outerWidth(),
				$sectionHeight = $(this).closest('.fullwidth-section').outerHeight();
			
			$(this).width($sectionWidth);
			$(this).height($sectionHeight);

			// calculate scale ratio
			var scale_h = $sectionWidth / video_width_original,
				scale_v = $sectionHeight / video_height_original, 
				scale = scale_h > scale_v ? scale_h : scale_v;

			// limit minimum width
			min_w = vid_ratio * ($sectionHeight+20);
			
			if (scale * video_width_original < min_w) {scale = min_w / video_width_original;}
					
			$(this).find('video').width(Math.ceil(scale * video_width_original +2));
			$(this).find('video').height(Math.ceil(scale * video_height_original +2));
			
		});

	}
   	
/* ==========================================================================
   handleSearch
   ========================================================================== */
   
	function handleSearch() {	
		
		$('#custom-search-button').click(function(e) { 
		
			e.preventDefault();
			
			if(!$("#custom-search-button").hasClass('open')) {
			
				$("#custom-search-form").fadeIn();
				$("#custom-search-button").addClass('open');
				
			} else {
				
				$("#custom-search-form").fadeOut();
				$("#custom-search-button").removeClass('open');
				
			}
			
		});
		
	 }
	 
// -------------------------------------------------------------------------------------------------------
//  handleSmoothScrolling
// -------------------------------------------------------------------------------------------------------
	
	function handleSmoothScrolling() {
	
		$('.sf-menu a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			  }
			}
		});
	}
	
// -------------------------------------------------------------------------------------------------------
//  handlePageLoader
// -------------------------------------------------------------------------------------------------------	
	
	function handlePageLoader() {	
		
		if ($('#page-loader').length > 0) {
			
			var hash = window.location.hash;
			
			$(".loader-img").delay(500).fadeOut();
			$("#page-loader").delay(1500).fadeOut("slow");
			
			if(!hash) { 
				// Do nothing //
			} else {
				$(document).scrollTop( $(hash).offset().top -56); 
			}
			
		}
	}
	
// -------------------------------------------------------------------------------------------------------
//  handleFullScreen
// -------------------------------------------------------------------------------------------------------	
	
	function handleFullScreen() {
	
		if ($(window).width() > 767) {
		
			var x = $(window).height();
			
			$('.fullscreen').css("height", x + "px");
		
		}
		
	}	
	 
/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function() {			   
		
		setDimensionsPieCharts();
		
		animatePieCharts();
		animateMilestones();
		animateProgressBars();

		if (!isTouchDevice()) {
			enableParallax();
		}

		handleMobileMenu();
		showHideMobileMenu();
		
		handleAccordionsAndToogles();
		
		handleBackToTop();
		showHidebackToTop();
		
		handleVideoBackground();
		
		handleSearch();
		
		handleSmoothScrolling();
		
		handleFullScreen();
		
		// Youtube video background
		// https://github.com/pupunzi/jquery.mb.YTPlayer
		
		if(typeof $.fn.mb_YTPlayer !== 'undefined'){
		
			$('.player').mb_YTPlayer();
		
		}
	
		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md
		
		if(typeof $.fn.simplePlaceholder !== 'undefined'){
			
			$('input[placeholder], textarea[placeholder]').simplePlaceholder();
		
		}
		
		// Fitvids - fluid width video embeds
		// https://github.com/davatron5000/FitVids.js/blob/master/README.md
		
		if(typeof $.fn.fitVids !== 'undefined'){
			
			$('.fitvids').fitVids();
		
		}
		
		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/
		
		if(typeof $.fn.superfish !== 'undefined'){
			
			$('#menu').superfish({
				delay: 500,
				animation: {opacity:'show',height:'show'},
				speed: 100,
				cssArrows: true
			});
			
		}
		
		// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider !== 'undefined'){
			
			$('.portfolio-slider .slides').bxSlider({
				 mode: 'fade',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 1000,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false  						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.blog-post-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: false,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false, 						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
				 slideWidth: "370",
				 minSlides: 1,
				 maxSlides: 5,
				 moveSlides: 1,
				 slideMargin: 30
			});
			
			$('.testimonial-slider .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 800,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false  						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.carousel .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.vertical-carousel .slides').bxSlider({
				 mode: 'vertical',						// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
		}
				
		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html
		
		if(typeof $.fn.magnificPopup !== 'undefined'){
		
			$('.magnificPopup').magnificPopup({
				disableOn: 400,
				closeOnContentClick: true,
				type: 'image'
			});
			
			$('.magnificPopup-gallery').magnificPopup({
				disableOn: 400,
				type: 'image',
				gallery: {
					enabled: true
				}
			});
			
			$('.magnificPopup-project').magnificPopup({
				type: 'ajax',
				closeOnContentClick: true,
				gallery: {
					enabled: true
				}
			})
		
		}


		
		if(typeof $.fn.easytabs !== 'undefined'){
			
			$('.tabs-container').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
			
			$('.vertical-tabs-container').easytabs({
				animationSpeed: 300,
				updateHash: false
			});
		
		}
		

		// http://labs.mario.ec/jquery-gmap/
		
		if(typeof $.fn.gMap !== 'undefined'){
		
			$('.google-map').each(function() {
				
				var $t = $(this),
					mapZoom = parseInt($t.attr("data-zoom"),10),
					mapAddress = $t.attr("data-address"),
					mapCaption = $t.attr("data-caption"),
					mapType = "ROADMAP",
					popUp = false;
				
				if ($t.attr("data-maptype") !== undefined) {
					mapType = $t.attr("data-maptype");
				} 
				
				if ($t.attr("data-popup") !== undefined) {
					popUp = $t.attr("data-popup");
				} 
				
				$t.gMap({
					maptype: mapType,
					scrollwheel: false,
					zoom: mapZoom,
					markers: [{
						address: mapAddress,
						html: mapCaption,
						popup: popUp
					}],
					controls: {
						panControl: true,
						zoomControl: true,
						mapTypeControl: true,
						scaleControl: false,
						streetViewControl: false,
						overviewMapControl: false
					}
				});
		
			});
			
		}
		
		// Isotope - portfolio filtering
		// http://isotope.metafizzy.co/beta/
		
		if ((typeof $.fn.isotope !== 'undefined') && (typeof $.fn.imagesLoaded !== 'undefined') && ($('.portfolio-isotope').length > 0)) {
			
			// initialize isotope after images are loaded
			
			$('.portfolio-isotope').imagesLoaded( function() {
			
				var container = $('.portfolio-isotope');
					
				container.isotope({
					itemSelector: '.item',
					layoutMode: 'masonry',
					transitionDuration: '0.5s'
				});
		
				$('.portfolio-filter li a').click(function () {
					$('.portfolio-filter li a').removeClass('active');
					$(this).addClass('active');
		
					var selector = $(this).attr('data-filter');
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function () {
		
					container.isotope({ });
				
				});
				
			});
			
			// Load More
			
			var portfolio_track_click = 0,
				portfolio_offset = 0,
				portfolio_items_loaded = 3;
		
			$('.load-more').click(function(event) {
				
				event.preventDefault();
				
				$.ajax({					
					type: "POST",
					url: "portfolio-load-more.html",
					dataType: "html",
					cache: false,
					msg : '',
					success: function(data){
						var items  = $(data).filter('.item'),
							length = items.length,
							html   = '';
						if( length > 0 ){

							if( portfolio_offset !== length ){

								for( var i = 0; portfolio_offset < length && i < portfolio_items_loaded; portfolio_offset++, i++ ){
									html += items.eq( portfolio_offset ).prop('outerHTML');
								}

								$('.portfolio-isotope').append(html);

								$('.portfolio-isotope').imagesLoaded( function() {

									$(window).trigger( 'resize' );
									$('.portfolio-isotope').isotope('reloadItems').isotope();

								});
								if( length <= portfolio_items_loaded || portfolio_offset == length ){
									$('.load-more').text('No more Posts to show').css({"cursor":"default"});
								}

								$('.magnificPopup-gallery').magnificPopup({
									disableOn: 400,
									type: 'image',
									gallery: {
										enabled: true
									}
								});

								$('.magnificPopup-project').magnificPopup({
									type: 'ajax',
									closeOnContentClick: true,
									gallery: {
										enabled: true
									}
								})
								
							} else {
								$('.load-more').text('No more Posts to show').css({"cursor":"default"});
							}

						} else {
							$('.load-more').text('No more Posts to show').css({"cursor":"default"});
						}

					}					
				});
				
			});
			
			//
			
			
		}
		
		// slickSlider - responsive slider
		// http://kenwheeler.github.io/slick
		
		if (typeof $.fn.slick !== 'undefined') {

			$('.main-slider').each(function() {
				
				var $t = $(this);
				
				var $slider = $t.find('.main-slider__slides');

				var $slider_config = {
						fade: true,
						speed: 500,
						autoplay: true,
						infinite: true,
						pager: true,
						controls: true	
					};

				$slider.slick({
					
					adaptiveHeight: true,
					
					fade: $slider_config.fade,
					cssEase: 'linear',
					
					speed: $slider_config.speed,
					
					autoplay: $slider_config.autoplay,
					
					infinite: $slider_config.infinite,

					arrows: $slider_config.controls,
					appendArrows: $t.find('.main-slider__arrows'),
					prevArrow: '<a class="slick-prev" href="#"><i class="ifc-left"></i></a>',
					nextArrow: '<a class="slick-next" href="#"><i class="ifc-right"></i></a>',
					
					dots: $slider_config.pager,
					appendDots: $t.find('.main-slider__pager')
					
				});
		
			});

		}
	
		//
		
	});

/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   
	$(window).scroll(function() {				   
		
		animateMilestones();
		animatePieCharts();
		animateProgressBars();
		
		showHidebackToTop();
		

	});

/* ==========================================================================
   Contact form
   ========================================================================== */

	$("#contactForm").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
			submitMSG(false, "Did you fill in the form properly?");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});
	
	
	function submitForm(){
		// Initiate Variables With Form Content
		var name = $("#name").val();
		var email = $("#email").val();
		var msg_subject = $("#msg_subject").val();
		var message = $("#message").val();
	
	
		$.ajax({
			type: "POST",
			url: "assets/php/form-process.php",
			data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}
	
	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Message Submitted!")
	}
	
	function formError(){
		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}
	
	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center tada animated text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
   
	$(window).resize(function() {
		
		handleMobileMenu();
		handleVideoBackground();
		handleFullScreen();
	});
	
/* ==========================================================================
   When the window is loading, do
   ========================================================================== */	
	
	$(window).load(function() {
		
		handlePageLoader();
		
	});
	

})(window.jQuery);

// non jQuery scripts below