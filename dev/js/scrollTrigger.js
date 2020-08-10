/* =============
    Dog1 Fade
============= */
const DogTimeline = gsap.timeline();
DogTimeline.to(".dogfaces", {
    duration: 10,
    alpha: 0
});
ScrollTrigger.create({
    animation: DogTimeline,
    toggleActions: "restart none none none",
    trigger: "#state-1",
<<<<<<< Updated upstream
    start: "bottom",
=======
    endtrigger: "#end-trigger",
    start: "bottom 80%",
>>>>>>> Stashed changes
    // end: "bottom 50%",
    markers: true,
    id: "dog-img",
    scrub: 3
});