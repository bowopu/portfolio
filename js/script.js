$(document).ready(function () {
 $("#icon, .page").click(function () {
  $(".navbar-nav").toggleClass("active");
  $("#icon").toggleClass("fa-bars fa-xmark");
 });

 $("main").snapScroll({
  arrowKeys: true,
  duration: 900,
  easing: "swing",
  scrollBar: false,
  onLeave: function (currentPoint, nextPoint) {
   console.log("Leaving point " + currentPoint + ", going to point " + nextPoint + "."), $(".content").css({ left: "-50%" }), $("h2").css({ left: "-50%" });
  },
  onArrive: function (prevPoint, currentPoint) {
   console.log("I've arrived!"), $(".content").animate({ left: "8%" }, 1300), $("h2").animate({ left: "50%" }, 1000);
  },
 });

 $("section").on("mousemove", function (event) {
  var xPos = event.pageX / 1000;
  var yPos = event.pageY / 1000;
  var width = $(window).width();

  /* 		if(width < 630){
			$(".img").css({
			'left' : (50 + xPos) + '%',
			'top' : (35 + yPos) + '%'
		});
		} else{
			$(".img").css({
			'left' : (80 + xPos) + '%',
			'top' : (50 + yPos) + '%'
		});
		} */

  $(".cloud1").css({
   top: 20 + yPos + "%",
   left: 45 + xPos + "%",
  });
  $(".cloud2").css({
   top: 65 + yPos + "%",
   left: 55 + xPos + "%",
  });
  $(".cloud3").css({
   top: 80 + yPos + "%",
   left: 20 + xPos + "%",
  });
 });
});
