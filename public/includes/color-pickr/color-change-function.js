(function ($) {
	"use strict";

		
	$(document).ready(function(){
	
		$(".setting_panel").delay(2000).animate({left:"-226px"});
	
		var BackgroundChange = '.hero-title i, .btn-filled, .features-bg, .portfolio-overlay:before, .popular .price-title, .popular .plan-link a.btn-bordered, .address-info ul li a, #preloader, .portfolio-overlay, .setting_panel i#panel_open, .setting_panel i#panel_close, #call-to-action, .parallax-overlay';
		
		var BorderChange = '.btn-filled, .btn-bordered, .form-group input[type=text], .form-group input[type=email], .form-group textarea, .popular .plan-link,.popular .plan-features li, .popular .price-title, .popular .plan-features, .popular .plan-price, .single-partner img, .owl-buttons div';
		
		var ColorChange = '.btn-bordered, .single-testimonial h2, .team-item h4, .company-name span, .owl-buttons div, .footer-copyright a, .navbar-default a.navbar-brand';
	
		$('#picker').colpick({
			flat:true,
			layout:'hex',
			color:'#57BDDB',
			submit:0,
			onChange: function(hsb, hex, rgb){
				$(BackgroundChange).css("background-color", '#' + hex);
				$("#ascrail2000 > div").css("background", '#' + hex);
			
				$(BorderChange).css("border-color", '#' + hex);
			
				$(ColorChange).css("color", '#' + hex);
		  }	
		});	
		
		
		$("#cyan_color").click(function(){
			$(BackgroundChange).css("background-color", '#57BDDB');
			$(BorderChange).css("border-color", '#57BDDB');
			$(ColorChange).css("color", '#57BDDB');
			$("#ascrail2000 > div").css("background", '#57BDDB');
			
		});		


		$("#blue_color").click(function(){
			$(BackgroundChange).css("background-color", '#2980B9');
			$(BorderChange).css("border-color", '#2980B9');
			$(ColorChange).css("color", '#2980B9');
			$("#ascrail2000 > div").css("background", '#2980B9');
		});		


		$("#m_blue_color").click(function(){
			$(BackgroundChange).css("background-color", '#2C3E50');
			$(BorderChange).css("border-color", '#2C3E50');
			$(ColorChange).css("color", '#2C3E50');
			$("#ascrail2000 > div").css("background", '#2C3E50');
		});		


		$("#green_color").click(function(){
			$(BackgroundChange).css("background-color", '#3BB971');
			$(BorderChange).css("border-color", '#3BB971');
			$(ColorChange).css("color", '#3BB971');	
			$("#ascrail2000 > div").css("background", '#3BB971');
		});		


		$("#red_color").click(function(){
			$(BackgroundChange).css("background-color", '#EA4848');
			$(BorderChange).css("border-color", '#EA4848');
			$(ColorChange).css("color", '#EA4848');	
			$("#ascrail2000 > div").css("background", '#EA4848');
		});		


		$("#orange_color").click(function(){
			$(BackgroundChange).css("background-color", '#F39C12');
			$(BorderChange).css("border-color", '#F39C12');
			$(ColorChange).css("color", '#F39C12');	
			$("#ascrail2000 > div").css("background", '#F39C12');
		});		
		
		
	});	

}(jQuery));	