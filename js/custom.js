$(function(){


	$('#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: false,
		navbar 		: {
			title		:'Menu'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});
	
	






	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="fa fa-angle-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-right fa-2x"></i>'
		
	});
	
	  var OwlProject = $('#OwlProject');
	 
	  OwlProject.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  
	  
	  
	  var OwlClients = $('#OwlClients');
	 
	  OwlClients.owlCarousel({
	      
	      items : 6, //10 items above 1000px browser width
	      itemsDesktop : [1200,5], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,3], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:false,
	      autoPlay:true,
	  });
	  
	$(".goTop").click(function () {
		$("html,body").animate({scrollTop : 0}, 800);
	});
	  
		  
	 $(".DonateBox i").click(function () {
	 	
	 	$(this).parent().toggleClass("active")
	 	
	 });
	  
	/****** Start Tabs ******/
	
	$(".tabs button").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	  
	  
	  var OwlPost = $('#OwlPost');
	 
	  OwlPost.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
  	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  
	  
    // Payment Methods Select Options
    $(".paymentSide .checkCurcle input").on('change', function() {

	    $('.paymentSide .checkCurcle input').not(this).prop('checked', false);  

	});
	  
	  
	  
	  var OwlSays = $('#OwlSays');
	 
	  OwlSays.owlCarousel({
	      
	      items : 6, //10 items above 1000px browser width
	      itemsDesktop : [1200,5], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:false,
	      autoPlay:true
	  });
	  
	  $(".opencard .sideCategory ul.cateMenu li a").click(function () {
	  	
	  	$(this).siblings().slideToggle();
	  	
	  });
	  
	  
	$(".tabs li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});

	  

    $('#calendar').fullCalendar({
    	schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      header: {
        left: 'prev,next today',
        center: 'title'
      },
      defaultDate: '2018-02-22',
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      eventLimit: true // allow "more" link when too many events

     
    });

$(".rangeSlider").rangeSlider({
        bounds: {min: 1, max: 5000},
        arrows: false,
        defaultValues: {min: $("#MinPrice").text(), max: $("#MaxPrice").text()},
        symmetricPositionning: true,
        range: {min: 0}
    });
    $("#PriceSlider").bind("valuesChanging", function (e, data) {
        $("#MinPrice").text(parseInt(data.values.min));
        $("#MaxPrice").text(parseInt(data.values.max));

        $.get(SITENAME + "Ajax/Filter.php?MinPrice=" + parseInt(data.values.min) + "&MaxPrice=" + parseInt(data.values.max), function (data) {
            $("#ProductsContainer").html(data);
        });
//        console.log("Something moved. min: " + data.values.min + " max: " + data.values.max);
    });
	
	


	  
	  
	
	
});
