// console.log("page loads");
var dogFacesAnimation = gsap.timeline();
var stateTwo = 0.5;
var stateThree = 1;

dogFacesAnimation.to("#left-eye-pupil-bot", {duration: stateTwo, alpha: 1}, "start")
                 .to("#left-eye-pupil-top", {duration: stateTwo, alpha: 1}, "start")
                 .to("#right-pupil-top", {duration: stateTwo, alpha: 1}, "start")
                 .to("#right-pupil-bot", {duration: stateTwo, alpha: 1}, "start")
                 .to("#left-tear", {duration: stateThree, alpha: 1}, "start")
                 .to("#right-tear", {duration: stateThree, alpha: 1}, "start")
                 .to("#mouth-state-2", {duration: stateThree, alpha: 1}, "start")
                 .to("#mouth-state-1", {duration: 0.25, alpha: 0}, "start")


ScrollTrigger.create({
    trigger: "#scroll-div",
    start: "bottom 100%",
    //end: "bottom 30%",
    animation: dogFacesAnimation,
    toggleActions: "play none none none",
    // markers: true,
    // scrub: 1,
    id: "dog face"
    
});


// state 2 to 3

var dogFacesAnimationStateThree = gsap.timeline();

dogFacesAnimationStateThree.to("#left-eye-pupil-bot", {duration: stateTwo, alpha: 0}, "startstate2")
                           .to("#left-eye-pupil-top", {duration: stateTwo, alpha: 0}, "startstate2")
                           .to("#right-pupil-top", {duration: stateTwo, alpha: 0}, "startstate2")
                           .to("#right-pupil-bot", {duration: stateTwo, alpha: 0}, "startstate2")
                           .to("#left-tear", {duration: stateThree, alpha: 0}, "startstate2")
                           .to("#right-tear", {duration: stateThree, alpha: 0}, "startstate2")
                           .to("#mouth-state-2", {duration: stateThree, alpha: 0}, "startstate2")
                           .to("#mouth-state-3", {duration: stateThree, alpha: 1}, "startstate2")
                           .to("#left-long-tear", {duration: stateThree, alpha: 1}, "startstate2")
                           .to("#right-long-tear", {duration: stateThree, alpha: 1}, "startstate2")
                           .to("#right-eye-3", {duration: stateThree, alpha: 1}, "startstate2")
                           .to("#left-eye-3", {duration: stateThree, alpha: 1}, "startstate2")
                           .to("#right-eye", {duration: 0.25, alpha: 0}, "startstate2")
                           .to("#left-eye", {duration: 0.25, alpha: 0}, "startstate2")

ScrollTrigger.create({
    trigger: "#scroll-div",
    start: "bottom 35%",
    // end: "bottom 30%",
    animation: dogFacesAnimationStateThree,
    toggleActions: "play none none none",
    // markers: true,
    // scrub: 1,
    id: "dog face 2"
    
});