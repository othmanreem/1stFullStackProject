export function Score(score, body) {

    var userId = localStorage.getItem("userId");
    this.score = score;
    this.body = body;

    var res = fetch("/score", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ score: this.score, usrId: userId })
    }).then(response => {
        console.log("status ", response.status);
        if (response.status === 200) {
            console.log('score inserted :)')
        } else {
            console.log('failed inserting .-.')
        }
    }).catch(error => {
        console.error("Error:", error);
    })
    this.getScore();

}

Score.prototype.m_construct = function () {

}


Score.prototype.getScore = function () {
    var _Score = this;
    var res = fetch("/getscore", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            _Score.handelInfo(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

Score.prototype.handelInfo = function (data) {
    var body = this.body;
    for (var i = 0; i < data.length; i++) {
        var userName = data[i].user_full_name;
        var score = data[i].points;
        var date = new Date(data[i].date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        var infoDiv = document.createElement("div");
        var infoTxt = document.createTextNode(userName + " / " + score + " / " + formattedDate)
        infoDiv.appendChild(infoTxt);
        body.appendChild(infoDiv);
        var line = document.createElement("hr");
        body.appendChild(line);

    }
}