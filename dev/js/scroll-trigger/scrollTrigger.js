/* ========================
    Dog Animation
======================== */
// const DogTimeline = gsap.timeline();
// DogTimeline.to(".dogfaces", {duration:7, alpha:0, stagger:4});
// ScrollTrigger.create({
//     animation: DogTimeline,
//     toggleActions: "restart none none none",
//     trigger: "#state-1",
//     start: "bottom 90%",
//    // markers: true,
//     id: "dog-img",
//     scrub: 1
// });
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
    start: "top 70%",
    end: "bottom 30%",
    markers: true,
    id: "error-text",
    scrub: 1
});
/* ========================
    Logo Animation
======================== */
gsap.to("#running-text", {
    duration: 30,
    xPercent: 600,
    repeat: -1
    //repeatDelay: -3
});