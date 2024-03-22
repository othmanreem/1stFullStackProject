//import {Game} from "./Game.js";

export function Events() {

}



Events.prototype.construct = function (_Game) {


    Events.prototype.handelInputs.call(_Game);

}

Events.prototype.handelInputs = function () {

    var _Game = this;

    _Game.helpBtn.addEventListener("click", function (event) {

        event.preventDefault();
        _Game.checkInputs();

    })

    for (var i = 0; i < this.inputs.length; i++) {

        this.inputs[i].addEventListener("focus", function () {
            var ix = _Game.arr.indexOf(this.value)
            if (ix !== -1) {
                _Game.arr.splice(ix, 1);

            }


            this.value = "";
            this.setAttribute("placeholder", "Type a word")
            _Game.helpBtn.innerHTML = "Get Words";
            _Game.controllInput();
        })


        this.inputs[i].addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                this.blur();
            }
        })

        this.inputs[i].addEventListener("blur", function () {
            if (this.value !== "") {
                _Game.arr.push(this.value);
            }
            if (_Game.arr.length === 5) {
                _Game.helpBtn.innerHTML = "Start Now";
                _Game.controllInput();

            }
        })

    }


}