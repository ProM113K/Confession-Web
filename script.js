let lovePic = document.getElementById('love');
let treePic = document.getElementById('tree');
let contKedua = document.querySelector(".kedua");
let btnMenu = document.getElementById("menu");
let main = document.getElementById("main");
let contPertama = document.querySelector(".pertama");
let contAwal = document.querySelector(".awal");

lovePic.addEventListener("click", function () {
    lovePic.style.display = "none";
    document.getElementsByTagName("div")[1].removeAttribute("hidden");
    document.getElementById("main").appendChild(contAwal);
    contAwal.setAttribute("hidden", "hidden");
});

treePic.addEventListener("click", function () {
    treePic.style.display = "none";
    document.getElementsByTagName("div")[2].removeAttribute("hidden");
    document.getElementById("main").appendChild(contKedua);
    contAwal.setAttribute("hidden", "hidden");
});

btnMenu.addEventListener("click", function () {
    btnMenu.setAttribute("hidden", "hidden");
    document.getElementsByTagName("div")[0].removeAttribute("hidden");
    document.getElementsByTagName("section")[0].remove();
})