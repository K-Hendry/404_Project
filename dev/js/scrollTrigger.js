/* =============
    Dog1 Fade
============= */
const DogTimeline = gsap.timeline();
DogTimeline.from(".dogfaces", {duration:3, alpha:0, stagger:1});
ScrollTrigger.create({
    animation: DogTimeline,
    toggleActions: "restart none none none",
    trigger: "dog-img",
    start: "top 50%",
    end: "bottom 50%",
    markers: true,
    id: "dog-img"
    // scrub: 1
});