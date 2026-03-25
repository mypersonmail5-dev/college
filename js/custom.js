/*================ NAVBAR TRANSPARENT TO SOLID ================*/

$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 50){
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid') ;
		}
	});
});

/*============ Close Mobile Nav On Click ================*/
$(document).ready(function () {
	$(document).click(function (event){
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if(_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});
/*========== SMOOTH SCROLLING TO LINKS ==========*/
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

/*==========Top Scroll Button=======*/
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			$('.top-scroll').fadeIn();
		}else{
			$('.top-scroll').fadeOut();
		}
	});
});


/*====Notification PopUp===*/
  $(document).ready(function(){
    function showWindow(){
		$("#notificOver").fadeIn();
		document.querySelector("#notificOver").style.display="flex";
    }
    setTimeout(function(){
        showWindow();
    },5000) 

    function hideWindow(){
        $("#notificOver").fadeOut();
    }
    $("#notificOver .closeBtn").click(function(){
        hideWindow();
    })
})

/*========== Show yt video on play button click ==========*/
document.getElementById('vid').play();


$('#video_play').click(function(){
  $('#video_play, .gptTeaser').css("display","none").fadeOut()
  $('.ytVideo .fa-times-circle').css("display","block")
  $('.ytVideo iframe').attr("src","https://www.youtube.com/embed/mCTaEqMoHlE").fadeIn()
})

$('.ytVideo .fa-times-circle').click(function(){
  $('#video_play, .gptTeaser').css("display","none").fadeIn()
  $('.ytVideo .fa-times-circle').css("display","none").fadeOut()
  $('.ytVideo iframe').attr("src","")

})




// <!--Disable Left Click-->
  window.oncontextmenu = function () {
        return false;
      }
      $(document).keydown(function (event) {
        // if (event.keyCode == 123) {
        //   return false;
        // }
        // else 
        if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
          return false;
        }
      });