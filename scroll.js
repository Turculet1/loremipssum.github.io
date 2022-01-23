window.addEventListener('wheel', changeSlide)

let currentSlide = 0;
let maxSlides;
function changeSlide (e) {
    // Know if already finished scrolling
    // Small imprecisions arise from scrollTo
    if (Math.abs(window.scrollY - window.innerHeight * currentSlide) > 200) return;
    let change = e.deltaY > 0? 1 : -1;
    let max = Math.max(0, currentSlide + change);
    let min = Math.min(maxSlides, max)
    currentSlide = min;
    window.scrollTo(0, window.innerHeight * min);
}
document.addEventListener('DOMContentLoaded', () => {
    maxSlides = document.querySelectorAll('.slide').length - 1;
    currentSlide = window.scrollY / window.innerHeight;
})




// Code from https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
disableScroll();