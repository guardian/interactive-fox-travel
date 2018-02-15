var el = document.createElement('script');

el.src = process.env.PATH + '/app.js';
document.body.appendChild(el);

//var charts = [].slice.apply(document.querySelectorAll('.gv-trip-chart'));

// function wobble(c) {
//     c.setAttribute("style", "transform:rotate(" + c.getAttribute("data-angle") + ")");
// }

// function unwobble(c) {
//     c.setAttribute("style", "transform:rotate(0deg)")
// }

// function checkIsInView(el){
//     var bbox = el.getBoundingClientRect();
//     var viewh = window.innerHeight;
//     if (bbox.top > 0 && bbox.top < (viewh - (viewh/2))) {
//         wobble(el);
//     } else if (bbox.bottom < 0) {
//         unwobble(el);
//     }

// } 

// charts.forEach(function(c){
//     window.addEventListener("scroll",function(){
//         checkIsInView(c);
//     })
// })