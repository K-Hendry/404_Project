/* ========================
    Pt1 Fadeout Animation
======================== */
const Pt1Timeline = gsap.timeline();
gsap.set(".pt1",{alpha:1});
Pt1Timeline.to(".pt1", {duration:1, alpha:0});
ScrollTrigger.create({
    animation: Pt1Timeline,
    toggleActions: "restart none none none",
   trigger: "#error-page2",
   start: "top 50%",
   end: "top 50%",
   //markers: true,
   id: "error-text",
   scrub: 1
});
