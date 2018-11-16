window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#settings_knap").addEventListener("click", showSettings);
    document.querySelector("#quit_knap").addEventListener("click", quitSettings);
    showStart();

}


function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}


function hideStart() {
    console.log("hide start");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

}


function showScenarie1 {
    console.log("show scenarie1");
    document.querySelector("#scenarie1").classList.add("show");
}

function startAnimation1 {
    console.log("show animation1");
    document.querySelector("#animation1");
}
