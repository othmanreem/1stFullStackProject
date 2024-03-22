import {Round} from "./Round.js";
function CountDown(secs) {
    this.body = document.body;
    this.secs = secs;
    this.address()

}

window.addEventListener("load", function () {
    var id = this.localStorage.getItem("userId");
    if (id) {
        var countDown = new CountDown(3);
    } else {
        this.location.assign("login.html");
    }
})

CountDown.prototype.m_construct = function () {
}

CountDown.prototype.address = function () {

    var _Counter = this;
    var shareBtn = document.createElement("button");
    var shareTxt = document.createTextNode("Share This Round");
    shareBtn.appendChild(shareTxt);
    this.body.appendChild(shareBtn);

    var runBtn = document.createElement("button");
    var runTxt = document.createTextNode("Start This Round");
    runBtn.appendChild(runTxt);
    this.body.appendChild(runBtn);

    shareBtn.addEventListener("click", function (event) {
        var urlPram = new URLSearchParams(window.location.search);
        var pramValue = urlPram.get("pram");
        navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
                var linkToCopy = window.location.origin+"/shared.html?pram=" + pramValue;
                navigator.clipboard.writeText(linkToCopy);
            }
        });

    })

    runBtn.addEventListener("click", function () {
        var clockDiv = document.createElement("div");
        clockDiv.setAttribute("id", "secs")
        _Counter.body.appendChild(clockDiv);
        clockDiv.innerHTML = _Counter.secs;
        var soundEffect = new Audio("countdown.mp3");
        soundEffect.play();
        _Counter.countDownSec(_Counter.secs, clockDiv);
    })
}

CountDown.prototype.countDownSec = function (secs, clockDiv) {
    var buttons = document.querySelectorAll("button");
    buttons.forEach( function (btn)  {
        btn.remove();
    });

    var startCountDown = function () {
        var soundEffect = new Audio("sec.mp3");
        soundEffect.play();
        --secs;
        clockDiv.innerHTML = secs;
        if (secs === -1) {
            clockDiv.innerHTML = "";
            clearInterval(setTime);
          var round = new Round();
        }
    }
    var setTime = setInterval(startCountDown, 1000);
}