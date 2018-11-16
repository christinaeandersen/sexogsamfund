window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    showStart();
}

function showStart() {

    console.log("showstart");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#play").classList.add("show");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");

    document.querySelector("#start").classList.remove("show");
    document.querySelector("#play").classList.remove("show");
    document.querySelector("#play").classList.remove("pulse");

    showScenarie1();

}

function showScenarie1() {
    console.log("show scenarie1");
    document.querySelector("#scenarie1").classList.add("show");

    document.querySelector("#telefon").classList.add("show");

    setTimeout(animationSenarie1, 4000);

}

function animationSenarie1() {
    document.querySelector("#telefon_tissemand").classList.add("shake");
    document.querySelector("#telefon").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.add("show");
    document.querySelector("#besked_tone").play();
    document.querySelector("#vibration_mobil").play();

    showOptions1();

}

function showOptions1() {
    console.log("showOptions1");
    document.querySelector("#dilemma1").classList.add("show");
    document.querySelector("#valg1").classList.add("show");
    document.querySelector("#valg2").classList.add("show");
    document.querySelector("#valg3").classList.add("show");

    document.querySelector("#valg1").addEventListener("click", showResult1_1);

    document.querySelector("#valg2").addEventListener("click", showResult1_2);

    document.querySelector("#valg3").addEventListener("click", showResult1_3);
}

function showResult1_1() {
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    document.querySelector("#result2").classList.add("show");
}

function showResult1_2() {
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    document.querySelector("#result1").classList.add("show");
}

function showResult1_3() {
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    document.querySelector("#result3").classList.add("show");
}
