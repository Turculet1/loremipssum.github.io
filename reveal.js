//  Code based on https://alvarotrigo.com/blog/css-animations-scroll/

let reveals;

function reveal() {  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
  
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded")
    reveals = document.querySelectorAll(".reveal");
})