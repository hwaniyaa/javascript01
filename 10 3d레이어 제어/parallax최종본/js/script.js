let scrollTop = 0;
let imageAll;
let totalNum = 0;
let _documentHNum = 0;
let _windowHNum = 0;

window.onload = function () {
    progressBar = document.querySelector(".progressBar");
    //getElementsByClassName -> querySelector, querySelectorAll 로 바꿔도 동일합니다.
    //document.querySelector(".progressBar");
    //document.querySelectorAll(".progressBar")[0];

    imageAll = document.querySelectorAll(".parallax_image");
    totalNum = imageAll.length;

    stageResize();
    window.addEventListener("resize", stageResize);
    window.addEventListener("scroll", scrollFunc);
};

function scrollFunc(e) {
    scrollTop = this.scrollY;

    let per = Math.ceil((scrollTop / (_documentHNum - _windowHNum)) * 100);
    progressBar.style.width = per + "%";

    for (var i = 0; i < totalNum; i++) {
        imageAll[i].style.transform =
            "perspective(400px) translateZ(" +
            scrollTop / (5 * (totalNum - i)) +
            "px)";
        // imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)";
        // console.log(scrollTop, scrollTop / (5 * (totalNum - i)));
    }
    console.log(scrollTop, _documentHNum - _windowHNum, per + "%");
}

function stageResize() {
    _documentHNum = document.body.offsetHeight;
    _windowHNum = window.innerHeight;
    //outerHeight -> innerHeight 로 해야 정확하게 0~100이 나옵니다
}
