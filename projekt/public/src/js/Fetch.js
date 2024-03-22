export function Fetch() {

    this.m_construct()


}



Fetch.prototype.m_construct = function () {

}

Fetch.prototype.fetch = function (helpBtn, array, input, _Game) {

    var _Fetch = this;

    (function () {
        helpBtn.setAttribute("disabled", "true")
        input.setAttribute("placeholder", "Loading..")
        fetch('https://api.api-ninjas.com/v1/randomword',
            {
                method: "GET",
                headers: {
                    "X-Api-Key": "ucXLCy2iy2Zm20z8aem6qg==7IP4UrGTsRw5aoKP"
                }
            })
            .then(function (response) {

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();


            })
            .then(function (data) {

                var ranWord = data.word;
                input.value = ranWord;
                array.push(ranWord);



            }).then(function () {

                _Fetch.m_address(array, helpBtn, _Game);
            }
            )
            .catch(function (error) {
                console.error('Error:', error);
            });
    })();


}


Fetch.prototype.m_address = function (array, helpBtn, _Game) {

    if (array.length === 5) {
        helpBtn.removeAttribute("disabled")
        helpBtn.innerHTML = "Start Now";
        _Game.controllInput();
    }

}