import { Events } from "./Events.js";
import { Fetch } from "./Fetch.js";

export function Game() {

    this.body = document.getElementById("body");
    this.form = document.createElement("form");
    this.helpBtn = document.createElement("button");
    this.arr = [];
    this.tmp = null;
    this.m_construct();

}


Game.prototype.m_construct = function () {

    this.buildGame()

}

Game.prototype.buildGame = function () {
    var _Game = this;
    this.body.innerHTML = "";
    this.body.appendChild(this.form);

    this.form.setAttribute("id", "input_form");

    for (var i = 0; i < 5; i++) {
        var inputElem = document.createElement("input");
        inputElem.setAttribute("placeholder", "Type a word");
        inputElem.setAttribute("type", "text");
        inputElem.setAttribute("class", "input");
        this.form.appendChild(inputElem)
    }


    this.inputs = document.getElementsByClassName("input");

    var BtnTxt = document.createTextNode("Get Words")
    this.helpBtn.appendChild(BtnTxt);
    this.helpBtn.setAttribute("id", "help");
    this.helpBtn.setAttribute("type", "button");
    this.form.appendChild(this.helpBtn);
    var events = new Events();
    events.construct(this)


}


Game.prototype.checkInputs = function () {
    var _Game = this
    for (var i = 0; i < this.inputs.length; i++) {
        var value = this.inputs[i].value;
        if (value === "") {
            Fetch.prototype.fetch(this.helpBtn, this.arr, this.inputs[i], _Game);
        }
    }
}


Game.prototype.controllInput = function (helpBtn, array) {
    var _Game = this;

    var words = localStorage.setItem("words", JSON.stringify(this.arr));
    var userId = localStorage.getItem("userId");

    if (this.helpBtn.innerHTML === "Start Now") {

        this.helpBtn.addEventListener("click", _Game.address);


    } else {
        this.helpBtn.removeEventListener("click", _Game.address);
    }

}

Game.prototype.address = async function (event) {
    var array = localStorage.getItem("words");
    var userId = localStorage.getItem("userId");

/**
 * kommunicerar med "send" endpointen för att spara arrayen med användarens Id i data basen
 */
    var res = await fetch("/send", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ wordsArray: array, usrId: userId })
    })
    var id = await res.json();
    var arrId = localStorage.setItem("arrId", id);
    window.location.assign(`round.html?pram=${id}`);

}
