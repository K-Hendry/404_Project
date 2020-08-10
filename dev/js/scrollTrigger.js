/* =============
    Dog1 Fade
============= */
const DogTimeline = gsap.timeline();
DogTimeline.to(".dogfaces", {duration:3, alpha:0, stagger:2});
ScrollTrigger.create({
    animation: DogTimeline,
    toggleActions: "restart none none none",
    trigger: "#state-1",
    start: "bottom 60%",
    // end: "bottom 50%",
    markers: true,
    id: "dog-img",
    scrub: 1
});

