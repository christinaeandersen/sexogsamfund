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

    setTimeout(animationSenarie1, 2000);

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

    //KLIK FOR RESULTAT//
    document.querySelector("#valg1").addEventListener("click", showResult1_1);

    document.querySelector("#valg2").addEventListener("click", showResult1_2);

    document.querySelector("#valg3").addEventListener("click", showResult1_3);
}

/////RESULTAT 1////////

function showResult1_1() {
    console.log("showResult1_1");

    //SKJUL SENARIE 1//
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    //VIS DILEMMA OG MULIGHEDER//
    document.querySelector("#result2").classList.add("show");

    //FREM KNAP//
    document.querySelector("#next").classList.add("show");
    document.querySelector("#next").addEventListener("click", hideResult1_1);
}

////RESULTAT 2////////

function showResult1_2() {
    console.log("showResult1_2");

    //SKJUL SENARIE 1//
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");


    //VIS DILEMMA OG MULIGHEDER//
    document.querySelector("#result1").classList.add("show");

    //FREM KNAP//
    document.querySelector("#next").classList.add("show");
    document.querySelector("#next").addEventListener("click", hideResult1_2);
}

/////RESULTAT 3//////

function showResult1_3() {
    console.log("showResult1_3");

    //SKJUL SENARIE 1//
    document.querySelector("#scenarie1").classList.remove("show");
    document.querySelector("#telefon_tissemand").classList.remove("shake");
    document.querySelector("#telefon_tissemand").classList.remove("show");
    document.querySelector("#dilemma1").classList.remove("show");
    document.querySelector("#valg1").classList.remove("show");
    document.querySelector("#valg2").classList.remove("show");
    document.querySelector("#valg3").classList.remove("show");

    //VIS DILEMMA OG MULIGHEDER//
    document.querySelector("#result3").classList.add("show");

    //FREM KNAP//
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

    //LYD//
    document.querySelector("#bruser_larm").play();
    document.querySelector("#bruser").play();

    setTimeout(animationSenarie2, 2000);

}

function animationSenarie2() {
    console.log("animationSenarie2");

    //document.querySelector("#snapchat").classList.remove("show");
    //document.querySelector("#telefon_tissemand").classList.add("show");
    document.querySelector("#kamera").play();

    setTimeout(showSenarie2_frame2, 2000);

}

function showSenarie2_frame2() {
    console.log("showSenarie2_frame2")

    document.querySelector("#snapchat").classList.remove("show");
    document.querySelector("#snapchat_noegen").classList.add("show");

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

    //LYD//
    document.querySelector("#bruser_larm").pause();
    document.querySelector("#bruser").pause();

}

///RESULTAT 2/////

function showResult2_2() {
    console.log("showResult2_2");

    document.querySelector("#result2_2").classList.add("show");
    document.querySelector("#next2").classList.add("show");
    document.querySelector("#next2").addEventListener("click", hideResult2_2);

    //LYD//
    document.querySelector("#bruser_larm").pause();
    document.querySelector("#bruser").pause();

}

///RESULTAT 3/////

function showResult2_3() {
    console.log("showResult2_3");

    document.querySelector("#result2_3").classList.add("show");
    document.querySelector("#next2").classList.add("show");
    document.querySelector("#next2").addEventListener("click", hideResult2_3);

    //LYD//
    document.querySelector("#bruser_larm").pause();
    document.querySelector("#bruser").pause();

}

///SKJUL RESULTATER/////

function hideResult2_1() {
    console.log("hideResult2_1");
    document.querySelector("#scenarie2").classList.remove("show");
    document.querySelector("#snapchat_noegen").classList.remove("show");
    document.querySelector("#dilemma2").classList.remove("show");
    document.querySelector("#valg1_2").classList.remove("show");
    document.querySelector("#valg2_2").classList.remove("show");
    document.querySelector("#valg3_2").classList.remove("show");

    document.querySelector("#result2_1").classList.remove("show");
    document.querySelector("#next2").classList.remove("show");

    startSenarie3();

}

function hideResult2_2() {
    console.log("hideResult2_2");
    document.querySelector("#scenarie2").classList.remove("show");
    document.querySelector("#snapchat_noegen").classList.remove("show");
    document.querySelector("#dilemma2").classList.remove("show");
    document.querySelector("#valg1_2").classList.remove("show");
    document.querySelector("#valg2_2").classList.remove("show");
    document.querySelector("#valg3_2").classList.remove("show");

    document.querySelector("#result2_2").classList.remove("show");
    document.querySelector("#next2").classList.remove("show");

    startSenarie3();

}

function hideResult2_3() {
    console.log("hideResult2_3");
    document.querySelector("#scenarie2").classList.remove("show");
    document.querySelector("#snapchat_noegen").classList.remove("show");
    document.querySelector("#dilemma2").classList.remove("show");
    document.querySelector("#valg1_2").classList.remove("show");
    document.querySelector("#valg2_2").classList.remove("show");
    document.querySelector("#valg3_2").classList.remove("show");

    document.querySelector("#result2_3").classList.remove("show");
    document.querySelector("#next2").classList.remove("show");

    startSenarie3();
}

///SENARIE 3////

function startSenarie3() {
    console.log("startSenarie3");
    document.querySelector("#scenarie3").classList.add("show");
    document.querySelector("#person1").classList.add("show");
    document.querySelector("#person2").classList.add("show");
    document.querySelector("#person3").classList.add("show");

    //LYD///
    document.querySelector("#fest_larm").play();

    setTimeout(hideSenarie3, 2000);

}

function hideSenarie3() {
    console.log("hideSenarie3");

    document.querySelector("#person1").classList.remove("show");
    document.querySelector("#person2").classList.remove("show");
    document.querySelector("#person3").classList.remove("show");

    startSenarie3_frame2();

}

function startSenarie3_frame2() {
    console.log("startSenarie3_frame2");
    document.querySelector("#senarie3_frame2").classList.add("show");
    document.querySelector("#senarie3_frame2").classList.add("show");
    document.querySelector("#person_oppe_1").classList.add("show");
    document.querySelector("#person_oppe_2").classList.add("show");
    document.querySelector("#person_oppe_3").classList.add("show");
    document.querySelector("#bryster").classList.add("show");

    setTimeout(hideSenarie3_frame2, 4000);

}

function hideSenarie3_frame2() {
   document.querySelector("#senarie3_frame2").classList.remove("show");
    document.querySelector("#person_oppe_1").classList.remove("show");
    document.querySelector("#person_oppe_2").classList.remove("show");
    document.querySelector("#person_oppe_3").classList.remove("show");
    document.querySelector("#bryster").classList.remove("show");

    startSenarie3_frame3();

}

function startSenarie3_frame3() {
    console.log("startSenarie3_frame3");

    document.querySelector("#bryster_stor").classList.add("show");
    document.querySelector("#dilemma3").classList.add("show");

    document.querySelector("#valg3_3_1").classList.add("show");

    document.querySelector("#valg3_3_2").classList.add("show");

    document.querySelector("#valg3_3_3").classList.add("show");

    ///klik for resultat/////

    document.querySelector("#valg3_3_1").addEventListener("click", showResult3_1);
    document.querySelector("#valg3_3_2").addEventListener("click", showResult3_2);
    document.querySelector("#valg3_3_3").addEventListener("click", showResult3_3);

}

function showResult3_1() {
    console.log("showResult3_1");

    //LYD//
    document.querySelector("#fest_larm").pause();

    //SKJUL SENARIE 3///
    document.querySelector("#scenarie3").classList.remove("show");
    document.querySelector("#bryster_stor").classList.remove("show");
    document.querySelector("#dilemma3").classList.remove("show");
    document.querySelector("#valg3_3_1").classList.remove("show");
    document.querySelector("#valg3_3_2").classList.remove("show");
    document.querySelector("#valg3_3_3").classList.remove("show");

    document.querySelector("#result3_1").classList.add("show");

    document.querySelector("#next3").classList.add("show");
    document.querySelector("#next3").addEventListener("click", hideResult3_1);
}

function showResult3_2() {
    console.log("showResult3_2");

    //LYD///
    document.querySelector("#fest_larm").pause();

    //SKJUL SENARIE 3///
    document.querySelector("#scenarie3").classList.remove("show");
    document.querySelector("#bryster_stor").classList.remove("show");
    document.querySelector("#dilemma3").classList.remove("show");
    document.querySelector("#valg3_3_1").classList.remove("show");
    document.querySelector("#valg3_3_2").classList.remove("show");
    document.querySelector("#valg3_3_3").classList.remove("show");

    document.querySelector("#result3_2").classList.add("show");

    document.querySelector("#next3").classList.add("show");
    document.querySelector("#next3").addEventListener("click", hideResult3_2);

}

function showResult3_3() {
    console.log("showResult3_3");

    //LYD///
    document.querySelector("#fest_larm").pause();

    //SKJUL SENARIE 3///
    document.querySelector("#scenarie3").classList.remove("show");
    document.querySelector("#bryster_stor").classList.remove("show");
    document.querySelector("#dilemma3").classList.remove("show");
    document.querySelector("#valg3_3_1").classList.remove("show");
    document.querySelector("#valg3_3_2").classList.remove("show");
    document.querySelector("#valg3_3_3").classList.remove("show");

    document.querySelector("#result3_3").classList.add("show");

    document.querySelector("#next3").classList.add("show");
    document.querySelector("#next3").addEventListener("click", hideResult3_3);
}


function hideResult3_1() {
    console.log("hideResult3_1");

    document.querySelector("#result3_1").classList.remove("show");

    document.querySelector("#next3").classList.remove("show");

    endGame();
}

function hideResult3_2() {
    console.log("hideResult3_2");

    document.querySelector("#result3_2").classList.remove("show");

    document.querySelector("#next3").classList.remove("show");

    endGame();
}


function hideResult3_3() {
    console.log("hideResult3_3");

    document.querySelector("#result3_3").classList.remove("show");

    document.querySelector("#next3").classList.remove("show");

    endGame();
}

function endGame() {
    console.log("endGame")

    document.querySelector("#end").classList.add("show");
    document.querySelector("#play_again").classList.add("show");
    document.querySelector("#play_again").classList.add("pulse");
    document.querySelector("#play_again").addEventListener("click", hideendGame);

    showStart();
}
