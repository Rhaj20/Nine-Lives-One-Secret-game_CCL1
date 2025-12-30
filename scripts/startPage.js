document.querySelector(".button-class").onclick = function () {
    window.location.href = "index2.html";
};

document.querySelector(".button-class2").onclick = function () {
    document.querySelector("#instructions").style.display = "block";
};

document.querySelector("#close").onclick = function () {
    document.querySelector("#instructions").style.display = "none";
};