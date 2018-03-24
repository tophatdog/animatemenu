

// // dots is an array of Dot objects,
// // mouse is an object used to track the X and Y position
//    // of the mouse, set with a mousemove event listener below
// var dots = [],
//     mouse = {
//       x: 0,
//       y: 0
//     };
//
// // The Dot object used to scaffold the dots
// var Dot = function() {
//   this.x = 0;
//   this.y = 0;
//   this.node = (function(){
//     var n = document.createElement("div");
//     n.className = "trail";
//     document.body.appendChild(n);
//     return n;
//   }());
// };
// // The Dot.prototype.draw() method sets the position of
//   // the object's <div> node
// Dot.prototype.draw = function() {
//   this.node.style.left = this.x + "px";
//   this.node.style.top = this.y + "px";
// };
//
// // Creates the Dot objects, populates the dots array
// for (var i = 0; i < 12; i++) {
//   var d = new Dot();
//   dots.push(d);
// }
//
// // This is the screen redraw function
// function draw() {
//   // Make sure the mouse position is set everytime
//     // draw() is called.
//   var x = mouse.x,
//       y = mouse.y;
//
//   // This loop is where all the 90s magic happens
//   dots.forEach(function(dot, index, dots) {
//     var nextDot = dots[index + 1] || dots[0];
//
//     dot.x = x;
//     dot.y = y;
//     dot.draw();
//     x += (nextDot.x - dot.x) * .6;
//     y += (nextDot.y - dot.y) * .6;
//
//   });
// }
//
// addEventListener("mousemove", function(event) {
//   //event.preventDefault();
//   mouse.x = event.pageX;
//   mouse.y = event.pageY;
// });
//
// // animate() calls draw() then recursively calls itself
//   // everytime the screen repaints via requestAnimationFrame().
// function animate() {
//   draw();
//   requestAnimationFrame(animate);
// }
//
// // And get it started by calling animate().
// animate();





$("#menu-button").click(function() {
	$("#menu-button").toggleClass("menu-open");
	$("#menu").toggleClass("menu-collapsed");
	$("#menu ul li").toggleClass("hidden animated fadeInLeft");
});





$(function() {

				var $container	= $('#ib-container'),
					$articles	= $container.children('article'),
					timeout;

				$articles.on( 'mouseenter', function( event ) {

					var $article	= $(this);
					clearTimeout( timeout );
					timeout = setTimeout( function() {

						if( $article.hasClass('active') ) return false;

						$articles.not( $article.removeClass('blur').addClass('active') )
								 .removeClass('active')
								 .addClass('blur');

					}, 65 );

				});

				$container.on( 'mouseleave', function( event ) {

					clearTimeout( timeout );
					$articles.removeClass('active blur');

				});

			});



// clock


			function showTime(){
				var date = new Date();
				var h = date.getHours(); // 0 - 23
				var m = date.getMinutes(); // 0 - 59
				var s = date.getSeconds(); // 0 - 59
				var session = "AM";

				if(h >= 12){
					h = h - 12;
					session = "PM";
				}

				if(h == 0){
					h = 12;
				}

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				var time = h + ":" + m + ":" + s + " " + session;
				document.getElementById("MyClockDisplay").innerText = time;
				document.getElementById("MyClockDisplay").textContent = time;

				setTimeout(showTime, 1000);
			}

			showTime();
