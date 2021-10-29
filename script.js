let lovePic = document.getElementById('love');
let contKedua = document.getElementsByClassName("kedua");

lovePic.addEventListener("click", function () {
    lovePic.style.display = "none";
    // document.getElementsByTagName("div")[0].setAttribute("hidden", "hidden");
    document.getElementById("p-1st").removeAttribute("hidden")
});