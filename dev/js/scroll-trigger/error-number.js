/* ========================
    404 Animation
======================== */
const FourTimeline = gsap.timeline();
gsap.set(".four",{alpha:0});
FourTimeline.to(".four", {duration:7, alpha:1, stagger:10});
ScrollTrigger.create({
    animation: FourTimeline,
    toggleActions: "restart none none none",
   trigger: "#Number1",
   start: "top 50%",
   //end: "bottom 30%",
   markers: true,
   id: "error-text",
   scrub: 1
});