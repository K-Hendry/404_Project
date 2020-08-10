/* =============
    Dog1 Fade
============= */
const DogTimeline = gsap.timeline();

gsap.set(".dogfaces",{alpha:0});

DogTimeline.to(".dogfaces", {duration:5, alpha:1, stagger:1});

ScrollTrigger.create({
    animation: DogTimeline,
    toggleActions: "restart none none none",
    trigger: "scroll-text",
    start: "top 20%",
    end: "bottom 50%",
    markers: true,
    id: "dog-img"
});

