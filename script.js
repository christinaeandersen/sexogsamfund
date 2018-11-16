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

    showSenarie1();

}

function showScenarie1() {
    console.log("show scenarie1");
    document.querySelector("#scenarie1").classList.add("show");

    document.querySelector("#scenarie1_animation").classList.add("show");


}
