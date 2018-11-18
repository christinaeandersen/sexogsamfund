window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    showStart();
}


///////START///////////

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

////SENARIE 1///////

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

////VALG MULIGHEDER///////

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

/////RESULTAT 1////////

function showResult1_1() {
    console.log("showResult1_1");
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    document.querySelector("#result2").classList.add("show");
    document.querySelector("#next").classList.add("show");
    document.querySelector("#next").addEventListener("click", hideResult1_1);
}

////RESULTAT 2////////

function showResult1_2() {
    console.log("showResult1_2");
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    document.querySelector("#result1").classList.add("show");
    document.querySelector("#next").classList.add("show");
    document.querySelector("#next").addEventListener("click", hideResult1_2);
}

/////RESULTAT 3//////

function showResult1_3() {
    console.log("showResult1_3");
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    document.querySelector("#result3").classList.add("show");
    document.querySelector("#next").classList.add("show");
    document.querySelector("#next").addEventListener("click", hideResult1_3);
}

////SKJUL RESULTATER/////

function hideResult1_1() {
    console.log("hideResult1_1");
    document.querySelector("#result2").classList.remove("show");
    document.querySelector("#next").classList.remove("show");

    showSenarie2();
}

function hideResult1_2() {
    console.log("hideResult1_2");
    document.querySelector("#result1").classList.remove("show");
    document.querySelector("#next").classList.remove("show");
    showSenarie2();
}

function hideResult1_3() {
    console.log("hideResult1_3");
    document.querySelector("#result3").classList.remove("show");
    document.querySelector("#next").classList.remove("show");
    showSenarie2();
}

////SENARIE 2/////

function showSenarie2() {
    console.log("showSenarie2");

    document.querySelector("#scenarie2").classList.add("show");
    document.querySelector("#snapchat").classList.add("show");

    setTimeout(animationSenarie2, 1000);

}

function animationSenarie2() {
    console.log("animationSenarie2");

    //document.querySelector("#snapchat").classList.remove("show");
    //document.querySelector("#telefon_tissemand").classList.add("show");
    document.querySelector("#kamera").play();

    setTimeout(showSenarie2_frame2, 1000);

}

function showSenarie2_frame2() {
    console.log("showSenarie2_frame2")

    document.querySelector("#snapchat").classList.remove("show");
    document.querySelector("#snapchat_nøgen").classList.add("show");

    showOptions2();
}

///VALG MULIGHEDER////

function showOptions2() {
    console.log("showOptions2");

    document.querySelector("#dilemma2").classList.add("show");
    document.querySelector("#valg1_2").classList.add("show");
    document.querySelector("#valg2_2").classList.add("show");
    document.querySelector("#valg3_2").classList.add("show");

    document.querySelector("#valg1_2").addEventListener("click", showResult2_1);

    document.querySelector("#valg2_2").addEventListener("click", showResult2_2);

    document.querySelector("#valg3_2").addEventListener("click", showResult2_3);
}

///RESULTAT 1/////

function showResult2_1() {
    console.log("showResult2_1");

    document.querySelector("#result2_1").classList.add("show");
    document.querySelector("#next2").classList.add("show");
    document.querySelector("#next2").addEventListener("click", hideResult2_1);

}

///RESULTAT 2/////

function showResult2_2() {
    console.log("showResult2_2");

    document.querySelector("#result2_2").classList.add("show");
    document.querySelector("#next2").classList.add("show");
    document.querySelector("#next2").addEventListener("click", hideResult2_2);


}

///RESULTAT 3/////

function showResult2_3() {
    console.log("showResult2_3");

    document.querySelector("#result2_3").classList.add("show");
    document.querySelector("#next2").classList.add("show");
    document.querySelector("#next2").addEventListener("click", hideResult2_3);

}

///SKJUL RESULTATER/////

function hideResult2_1() {
    console.log("hideResult2_1");
    document.querySelector("#scenarie2").classList.remove("show");
    document.querySelector("#snapchat_nøgen").classList.remove("show");
    document.querySelector("#dilemma2").classList.remove("show");
    document.querySelector("#valg1_2").classList.remove("show");
    document.querySelector("#valg2_2").classList.remove("show");
    document.querySelector("#valg3_2").classList.remove("show");

    document.querySelector("#result2_1").classList.remove("show");
    document.querySelector("#next2").classList.remove("show");


}

function hideResult2_2() {
    console.log("hideResult2_2");
    document.querySelector("#scenarie2").classList.remove("show");
    document.querySelector("#snapchat_nøgen").classList.remove("show");
    document.querySelector("#dilemma2").classList.remove("show");
    document.querySelector("#valg1_2").classList.remove("show");
    document.querySelector("#valg2_2").classList.remove("show");
    document.querySelector("#valg3_2").classList.remove("show");

    document.querySelector("#result2_2").classList.remove("show");
    document.querySelector("#next2").classList.remove("show");



}

function hideResult2_3() {
    console.log("hideResult2_3");
    document.querySelector("#scenarie2").classList.remove("show");
    document.querySelector("#snapchat_nøgen").classList.remove("show");
    document.querySelector("#dilemma2").classList.remove("show");
    document.querySelector("#valg1_2").classList.remove("show");
    document.querySelector("#valg2_2").classList.remove("show");
    document.querySelector("#valg3_2").classList.remove("show");

    document.querySelector("#result2_3").classList.remove("show");
    document.querySelector("#next2").classList.remove("show");

}
