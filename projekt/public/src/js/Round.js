import {Score} from "./Score.js";
export function Round() {

    this.active = false;
    this.score = 0;
    this.time = 60;
    this.body = document.body;
    this.bd = document.getElementById("body");
    this.swipeStart = 0;
    this.swipeEnd = 0;
    this.CountSwipes = 0;
    this.m_construct()
}
Round.prototype.m_construct = function () {
    this.buildOneRound()
    this.countDownOnemin();
}

Round.prototype.buildOneRound = async function () {

    var _Round = this;  
    var urlPram = new URLSearchParams(window.location.search);
    var pramValue = urlPram.get("pram");
    var NumId = Number(pramValue);
    var wordsArray  = await getArr();    
    var swipeStart = 0;
    var swipeEnd = 0;   
  this.wordsArr = JSON.parse(wordsArray);
  
     

    async function getArr (){
        var res = await  fetch ("/getArr", {
                    method: "post",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: NumId})
                })

                var wordsArr = await res.json();
                return wordsArr

    }
    
    this.oneWord = 0;
    this.bd.innerHTML = ""

    // *** TIMER *** //

    this.minDiv = document.createElement("div");
    this.minDiv.style.marginBottom = "25px";
    this.minDiv.setAttribute("id", "min")
    this.minDiv.innerHTML = this.time;
    this.bd.appendChild(this.minDiv);
    this.wordDiv = document.createElement("div");
    this.wordDiv.setAttribute("id", "word")
    this.bd.appendChild(this.wordDiv)


    this.wordDiv.innerHTML = this.wordsArr[this.oneWord];

    this.active = true;

    this.body.addEventListener("touchstart", function (e) {
        if (_Round.active == true) {
            swipeStart = e.changedTouches[0].pageY;
        }
    });


    this.body.addEventListener("touchend", function (e) {



        if (_Round.active == true) {
            _Round.CountSwipes++
            swipeEnd = e.changedTouches[0].pageY;
            _Round.handleSwipe(swipeEnd, swipeStart)

        }

    })


}

Round.prototype.handleSwipe = function (swipeEnd, swipeStart) {
    var _Round = this;
    if (swipeEnd < swipeStart) {
        ++this.score;
        this.changeClass("red", "green")

    }
    if (swipeEnd > swipeStart) {
        this.changeClass("green", "red")
    }
}

Round.prototype.changeClass = function (previousClass, _class) {

    var _Round = this;

    this.body.classList.remove(previousClass)
    this.body.classList.add(_class);


    setTimeout(function () {
        _Round.body.classList.remove(previousClass, _class)

    }, 500)

    if (this.oneWord < 4) {
        ++this.oneWord;
        this.wordDiv.innerHTML = this.wordsArr[this.oneWord];
    } 
}

Round.prototype.countDownOnemin = function () {

    var _Round = this;
    
    var updateCountdown = function () {
        _Round.time--;
        _Round.minDiv.innerHTML = _Round.time;

        if (_Round.score == 5 || _Round.time == 0 || _Round.CountSwipes == 5) {
            
            clearInterval(startTimer);
            _Round.gameOver();
            
    
        }
       
    }
    

    var startTimer = setInterval(updateCountdown, 1000);
}

Round.prototype.gameOver = function () {

    var _Round = this;
    this.active = false;
    this.bd.innerHTML = "";
    var score = new Score(this.score, this.bd);
}





// function Round() {
 
//     var score = 0;
//     this.active = false;
//     this.score = 0;
//     this.time = 30;
//     var _Round = this;
//     this.body = document.body;
//     this.bd = document.getElementById("body");
//     this.swipeStart = 0;
//     this.swipeEnd = 0;
//     this.CountSwipes = 0;
//     this.buildOneRound(_Round, score)
//     this.countDownOnemin();
  
// }

// Round.prototype.buildOneRound = function (_Round, score){

//    console.log(score)
//  //  var self = this; // [change _Round to "self" later]

//     var swipeStart = 0;
//     var swipeEnd = 0;
//     _Round.wordsArr = JSON.parse(localStorage.getItem("words"));
//     _Round.oneWord = 0;
   
//     _Round.bd.innerHTML = ""

    


//     // TIMER ********

//     _Round.minDiv = document.createElement("div");
//     _Round.minDiv.style.marginBottom = "25px";
//     _Round.minDiv.setAttribute("id", "min")
//     _Round.minDiv.innerHTML = _Round.time;
//     _Round.bd.appendChild(_Round.minDiv);

//     _Round.wordDiv = document.createElement("div");
//     _Round.wordDiv.setAttribute("id", "word")
//     _Round.bd.appendChild(_Round.wordDiv)


//     //var bd = document.getElementById("swp");

   
//     _Round.wordDiv.innerHTML = _Round.wordsArr[_Round.oneWord];
//     console.log(_Round.wordsArr[_Round.oneWord]);

//     this.active = true;

//     _Round.body.addEventListener("touchstart", function (e) {
//         if(self.active == true){
//             console.log("start")
//         swipeStart = e.changedTouches[0].pageY;
//         }
//         // console.log(swipeStart)
//         // someOtherFunc()
        


//     });
    
//     console.log(self);
//     console.log(_Round);

//     _Round.body.addEventListener("touchend", function (e) {
       
//        if(_Round.active == true){
//         console.log("end")
//         _Round.CountSwipes++
//         swipeEnd = e.changedTouches[0].pageY;
//         _Round.handleSwipe.call(self, swipeEnd, swipeStart)
//      //  _Round.handleSwipe(swipeEnd, swipeStart)

//        }
//         // console.log(oneWord)
        
//     })
//     // _Round.body.addEventListener("touchstart",
//     //     _Round.touchStartListener


//     // );
    
//     // console.log(self);
//     // console.log(_Round);

//     // _Round.body.addEventListener("touchend",
//     //     _Round.touchEndListener
        
//     // )

//     this.active = true;

// }
// Round.prototype.touchStartListener = function (e){
//     this.swipeStart = e.changedTouches[0].pageY;
//      console.log(this);
//      console.log('....-...--')

// }

// Round.prototype.touchEndListener = function (e){
//     this.swipeEnd = e.changedTouches[0].pageY;
// }


// Round.prototype.handleSwipe = function (swipeEnd, swipeStart, _Round) {

//  console.log(this.score)
        


//     if (swipeEnd < swipeStart) {
//         this.score++;
//         console.log(this.score)
//           //console.log(_Round)
//         //  bd.classList.remove("red");
//         //  bd.classList.add("green");

//         this.changeClass("red", "green", this)

//         console.log('left');
//         // swipeStart = 0;
//         //  swipeEnd = 0;
//     }
//     if (swipeEnd > swipeStart) {
        
//         // bd.classList.remove("green");
//         // bd.classList.add("red");

//         this.changeClass("green", "red", this)

//         console.log('right');
//         // swipeStart = 0;
//         // swipeEnd = 0;
//     }
// }

// Round.prototype.changeClass = function (previousClass, _class, _Round /** oneWord */) {
   


//     //  console.log(oneWord)
//     console.log(_Round.wordsArr[_Round.oneWord]),
//         // console.log(oneWord)

//         _Round.body.classList.remove(previousClass)
//         _Round.body.classList.add(_class);


//     setTimeout(function () {


//         //bd.className = '';
//         _Round.body.classList.remove(previousClass, _class)

//     }, 1000)

//     if (_Round.oneWord < 4) {
//         ++_Round.oneWord;
//         _Round.wordDiv.innerHTML = _Round.wordsArr[_Round.oneWord];
//     } else if (_Round.oneWord === 4) {
//         _Round.gameOver(_Round)
//     }


// }

// Round.prototype.countDownOnemin = function () {

//     var _Round = this;
//     console.log(_Round)
//     var updateCountdown = function () {
      
//         _Round.time--;
//         _Round.minDiv.innerHTML = _Round.time;
      

//        // console.log(_Round.time)

//        // if (_Round.time === 0 || _Round.score === 5 ) 
//        if (_Round.score == 5 || _Round.time == 0 || _Round.CountSwipes == 5) {
//             clearInterval(startTimer);
            
//             console.log('SLUT')
//             _Round.gameOver(_Round);
           


//         }
//     }

//     var startTimer = setInterval(updateCountdown, 1000);
// }

// Round.prototype.gameOver = function (_Round) {
//     this.active = false;
//     console.log('gameover')
//     console.log(_Round)
//     console.log(this)
//     _Round.bd.innerHTML = "";
//     // document.body.removeEventListener("touchstart", function (e) {
//     //     swipeStart = e.changedTouches[0].pageY;
        
//     // });
//     // document.body.removeEventListener("touchend", function (e) {
//     //     swipeEnd = e.changedTouches[0].pageY;
//     //     _Round.handleSwipe.call(_Round, swipeEnd, swipeStart)
//     // })

//     var score = new Score (this.score, this.bd); 
// }


