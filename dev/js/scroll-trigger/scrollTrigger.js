/* ========================
    Click on Dog
======================== */

var canYouSeeTheButton = false;

var clickOnDog = gsap.timeline({paused: true});

clickOnDog.from("#back-button", {duration: 1.5, alpha: 0, yPercent:200});

function showHomeButton(){

    if (canYouSeeTheButton === false){
        // console.log("click on the dog");
        clickOnDog.play();
    } else {
        clickOnDog.reverse();
    }
    // clickOnDog.play();

}

$("#teary-eyes").on("click", showHomeButton);