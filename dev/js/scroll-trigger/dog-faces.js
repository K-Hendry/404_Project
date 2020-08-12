// console.log("page loads");
var dogFacesAnimation = gsap.timeline();

dogFacesAnimation.from("#left-long-tear", {duration:5, alpha: 0, repeat: -1}, "start")
                 .from("#right-long-tear", {duration:5, alpha: 0, repeat: -1}, "start");


ScrollTrigger.create({
    trigger: "#shiba",
    start: "bottom 90%",
    animation: dogFacesAnimation,
    toggleActions: "restart none none none",
    markers: true,
    id: "dog face"
});