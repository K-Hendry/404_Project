/* =============
    Dog1 Fade
============= */
const DogTimeline = gsap.timeline();
DogTimeline.from(".dogfaces", {duration:5, alpha:0, stagger:1});
ScrollTrigger.create({
    animation: DogTimeline,
    toggleActions: "restart none none none",
    trigger: "error-container",
    start: "top 10%",
    end: "bottom 50%",
    markers: true,
    id: "dog-img"
});

