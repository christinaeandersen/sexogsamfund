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
    document.querySelector("#telefon").classList.add("shake");
    document.querySelector("#telefon").classList.remove("show");
    document.querySelector("#")
    document.querySelector("#besked_tone").play();
    document.querySelector("#vibration_mobil").play();

}
