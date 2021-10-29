let lovePic = document.getElementById('love');
let contKedua = document.getElementsByClassName("kedua");
let btnMenu = document.getElementById("menu");

lovePic.addEventListener("click", function () {
    lovePic.style.display = "none";
    // document.getElementsByTagName("div")[0].setAttribute("hidden", "hidden");
    document.getElementsByTagName("div")[1].removeAttribute("hidden")
});

btnMenu.addEventListener("click", function() {
    btnMenu.setAttribute("hidden", "hidden");
    document.getElementsByTagName("div")[0].removeAttribute("hidden");
})