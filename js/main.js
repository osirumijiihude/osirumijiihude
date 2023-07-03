(function($) {
	
	"use strict";
	
/* ==========================================================================
   ieViewportFix - fixes viewport problem in IE 10 SnapMode and IE Mobile 10
   ========================================================================== */
   
	function ieViewportFix() {
	
		var msViewportStyle = document.createElement("style");
		
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport { width: device-width; }"
			)
		);

		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			
			msViewportStyle.appendChild(
				document.createTextNode(
					"@-ms-viewport { width: auto !important; }"
				)
			);
		}
		
		document.getElementsByTagName("head")[0].
				appendChild(msViewportStyle);

	}

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
			
			$t.css({
				"height": r,
				"width": r,
				"line-height": r + "px"
			});
			
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
		
		$(".progress .progress-bar:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).animate({
					width: $(this).attr("data-width") + "%"
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
				$t.addClass("parallax-enabled").parallax("49%", 0.3, false);
	
			});
			
		}
		
		// horizontal parallax
		if(typeof $.fn.hparallax !== 'undefined'){
		
			$('.horizontal-parallax').each(function() {
	
				var $t = $(this);
				$t.addClass("horizontal-parallax-enabled").hparallax();
	
			});
			
		}
		
		//animated parallax
		if(typeof $.fn.animatedparallax !== 'undefined'){
		
			$('.animated-parallax').each(function() {
	
				var $t = $(this);
				$t.addClass("animated-parallax-enabled").animatedparallax();
	
			});
		
		}

	}

/* ==========================================================================
   handleMobileMenu 
   ========================================================================== */		

	var MOBILEBREAKPOINT = 991;

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
						$t.append('<span class="fa fa-angle-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');
					}
				});
			
				$(".mobile-menu-submenu-arrow").on("click", function(event) {
					var $t = $(this);
					if ($t.hasClass("mobile-menu-submenu-closed")) {
						$t.removeClass("mobile-menu-submenu-closed fa-angle-down").addClass("mobile-menu-submenu-opened fa-angle-up").parent().siblings("ul, .sf-mega").slideDown(300);
					} else {
						$t.removeClass("mobile-menu-submenu-opened fa-angle-up").addClass("mobile-menu-submenu-closed fa-angle-down").parent().siblings("ul, .sf-mega").slideUp(300);
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
		
		$("#mobile-menu-trigger").on("click", function(event) {
			
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
   handleBackToTop
   ========================================================================== */
   
   function handleBackToTop() {
	   
		$('#back-to-top').on("click", function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});
   
   }
   	
/* ==========================================================================
   showHidebackToTop
   ========================================================================== */	
	
	function showHidebackToTop() {
	
		if ($(window).scrollTop() > $(window).height() / 2 ) {
			$("#back-to-top").removeClass('gone').addClass('visible');
		} else {
			$("#back-to-top").removeClass('visible').addClass('gone');
		}
	
	}

/* ==========================================================================
   Tooltips
   ========================================================================== */
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	})
	 
/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function() {			   
		
		ieViewportFix();
		
		setDimensionsPieCharts();
		
		animatePieCharts();
		animateMilestones();
		animateProgressBars();

		if (!isTouchDevice()) {
			enableParallax();
		}
		
		handleMobileMenu();
		showHideMobileMenu();
		
		handleBackToTop();
		showHidebackToTop();
	
		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md
		
		if(typeof $.fn.simplePlaceholder !== 'undefined'){
			
			$('input[placeholder], textarea[placeholder]').simplePlaceholder();
		
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
		
		// OWL Carousel //
		if (typeof $.fn.owlCarousel !== 'undefined') {
			
			 $('.owl-carousel.images').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
				nav: false,
				dots: true,
				navText: []
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
			
			$('.magnificPopup-modal').magnificPopup({
				type: 'inline',
				preloader: false,
				modal: true
			});
			
			$(document).on('click', '.magnificPopup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});
		
		}
		
		// gMap -  embed Google Maps into your website; uses Google Maps v3
		// http://labs.mario.ec/jquery-gmap/
		
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".map").each(function(){
				
				var data_zoom = 17;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				$(this).gmap3({
					marker: {
						values: [{
							address: $(this).attr("data-address"),
							data: $(this).attr("data-address-details")
						}],
						options:{
							draggable: false
						},
						events:{
							mouseover: function(marker, event, context){
								var map = $(this).gmap3("get"),
								infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.open(map, marker);
									infowindow.setContent(context.data);
								} else {
									$(this).gmap3({
										infowindow:{
											anchor:marker, 
											options:{content: context.data}
										}
									});
								}
							},
							mouseout: function(){
								var infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.close();
								}
							}
						}
					},
					map: {
						options: {
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							zoom: data_zoom,
							scrollwheel: false
						}
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
		
				$('.portfolio-filter li a').on("click", function () {
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
				portfolio_items_loaded = 4;
		
			$('.load-more').on("click", function(event) {
				
				event.preventDefault();
				
				$.ajax({					
					type: "POST",
					url: $(this).attr("data-file"),
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
								
							} else {
								$('.load-more').text('No more Posts to show').css({"cursor":"default"});
							}

						} else {
							$('.load-more').text('No more Posts to show').css({"cursor":"default"});
						}

					}					
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
   When the window is resized, do
   ========================================================================== */
   
	$(window).resize(function() {
		
		handleMobileMenu();
	
	});
	

})(jQuery);

// non jQuery scripts below



