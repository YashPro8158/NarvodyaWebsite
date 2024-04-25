let hamburger = document.getElementById("hamburger");
let middlelist= document.getElementById("middlelist");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("activeburger");
    middlelist.classList.toggle("activemiddlelist");
})
