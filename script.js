const lovePic = document.getElementById('love');
const treePic = document.getElementById('tree');
const contKedua = document.querySelector(".kedua");
const btnMenu = document.getElementById("menu");
const main = document.getElementById("main");
const contPertama = document.querySelector(".pertama");
const contAwal = document.querySelector(".awal");
const backButton = document.getElementById("back");

window.addEventListener("load", (event) => {
    document.getElementsByTagName("audio")[0].play();
});

lovePic.addEventListener("click", function () {
    lovePic.setAttribute("hidden", "hidden");
    contPertama.removeAttribute("hidden");
    document.getElementById("main").appendChild(contAwal);
    contAwal.setAttribute("hidden", "hidden");
    backButton.removeAttribute("hidden");
    console.log("love");
});

backButton.addEventListener("click", () => {
    lovePic.removeAttribute("hidden");
    treePic.removeAttribute("hidden");
    contKedua.setAttribute("hidden", "hidden");
    contPertama.setAttribute("hidden", "hidden");
    contAwal.removeAttribute("hidden");
    backButton.setAttribute("hidden", "hidden");
    console.log("back");
});

treePic.addEventListener("click", function () {
    treePic.setAttribute("hidden", "hidden");
    contKedua.removeAttribute("hidden");
    contAwal.setAttribute("hidden", "hidden");
    backButton.removeAttribute("hidden");
    console.log("tree");
});

btnMenu.addEventListener("click", function () {
    btnMenu.setAttribute("hidden", "hidden");
    contAwal.removeAttribute("hidden");
    document.getElementsByTagName("section")[0].remove();
});