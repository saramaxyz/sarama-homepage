function changeAtiveTab(event, tabID) {
	let element = event.target;
	while (element.nodeName !== "A") {
		element = element.parentNode;
	}
	ulElement = element.parentNode.parentNode;
	aElements = ulElement.querySelectorAll("li > a");
	tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
	for (let i = 0; i < aElements.length; i++) {
		// aElements[i].classList.remove("bg-white");
		// aElements[i].classList.add("bg-sky");
		aElements[i].classList.remove("shadow-sm");
		aElements[i].classList.add("shadow-none");
		aElements[i].classList.remove("border-gray200");
		aElements[i].classList.add("border-white");
		tabContents[i].classList.add("hidden");
		tabContents[i].classList.remove("block");
	}
	// element.classList.remove("bg-sky");
	// element.classList.add("bg-white");
	element.classList.remove("shadow-none");
	element.classList.add("shadow-sm");
	element.classList.remove("border-white");
	element.classList.add("border-gray200");
	document.getElementById(tabID).classList.remove("hidden");
	document.getElementById(tabID).classList.add("block");
}

$(document).ready(function () {

	$(".notification_close").click(function(e){
		$('.notification').css({
			display: 'none'
		})
	});

	$('#mobile-menu').click(function (e) {
		$(".mobile-toogle").slideToggle();
	});
	$(".menu-open").on('click', function () {
		$('.menu-open').css({
			display: 'none'
		})
		$('.menu-close').css({
			display: 'block'
		})
	})
	$(".menu-close").on('click', function () {
		$('.menu-open').css({
			display: 'block'
		})
		$('.menu-close').css({
			display: 'none'
		})
	})
	$(function(){
		$(".typed").typed({
			strings: ["Developers.", "Designers.", "People."],
			stringsElement: null,
			typeSpeed: 150,
			startDelay: 2000,
			backSpeed: 50,
			backDelay: 500,
			loop: true,
			loopCount: 5,
			showCursor: false,
			cursorChar: "|",
			attr: null,
			contentType: 'html',
			callback: function() {},
			preStringTyped: function() {},
			onStringTyped: function() {},
			resetCallback: function() {}
		});
	});
	
	$(function () {
        if ($('.review-slider').length) {
            $('.review-slider').owlCarousel({
                loop: true,
                margin: 14,
                autoPlay: true,
                dots: false,
                nav: true,
				navText : ["<i class='fa fa-arrow-left text-blue hover:text-white h-10 w-10 bg-lihghtPrm rounded-full hover:bg-blue p-3'></i>","<i class='rounded-full hover:bg-blue h-10 w-10 bg-lihghtPrm text-blue fa fa-arrow-right hover:text-white p-3'></i>"],
                items: 12,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,

                    },
                    600: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    }
                }
            })
        }
    })
	$(function () {
        if ($('.primium-slider').length) {
            $('.primium-slider').owlCarousel({
                loop: true,
                margin: 15,
                nav: false,
                autoPlay: true,
                dots: false,
                nav: true,
				navText : ["<i class='fa fa-arrow-left text-blue hover:text-white h-10 w-10 bg-lihghtPrm rounded-full hover:bg-blue p-3'></i>","<i class='rounded-full hover:bg-blue h-10 w-10 bg-lihghtPrm text-blue fa fa-arrow-right hover:text-white p-3'></i>"],
                items: 12,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,

                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    }
                }
            })
        }
    })
});