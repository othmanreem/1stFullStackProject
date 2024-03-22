import { Game } from "./Game.js";
function Main() {

    var _Main = this;
    this.init = function () {
        var startBtn = document.getElementById("run_game_btn");
        startBtn.addEventListener("click", function () {

            var game = new Game();
        })
    }
}

window.addEventListener("load", function () {
    var id = this.localStorage.getItem("userId")
    if (id) {

        var main = new Main();
        main.init();
    } else {
        this.location.assign("login.html");
    }
});
/**
 * Refresha sidan med ord så att användaren inte kan köra samma spelomgång mer än en gång
 */
window.addEventListener('pageshow', function (event) {
    var history = event.persisted ||
        (typeof window.performance != 'undefined' &&

            window.performance.navigation.type === 2
        );
    if (history) {
        window.location.reload();
    }
});

