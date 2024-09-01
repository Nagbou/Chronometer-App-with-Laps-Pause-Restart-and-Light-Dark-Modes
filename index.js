var seconds = document.getElementById("time_seconds");
var minutes = document.getElementById("time_minutes");
var hours = document.getElementById("time_hour");
var start_icons = document.getElementsByClassName("start_icon");
var stop_btn = document.getElementById("stop_btn")
var first_time_zero = true
var intervalId;
var timerStarted = false;
var timerPaused = false;
var count = 0;
var mint = 0;
var hour = 0;
var i = 0
var clicked_counting = 0;
var isClicked = false;
function changeId() {
    isClicked = true
    clicked_counting++;
    if (clicked_counting % 2 != 0) {
        timerPaused = false;
        timerStarted = false;
        startCounting();
    } else {
        pauseCounting();
    }
}

function startCounting() {
    if (!timerStarted && !timerPaused) {
        timerStarted = true;
        intervalId = setInterval(function () {
            if (count < 60) {
                if (count < 10) {
                    seconds.innerText = "0" + count;
                    count++;
                } else {
                    seconds.innerText = count;
                    count++;
                }
            } else {
                minutesCounter();
                count = 0;
            }
        }, 1000);
    }
}

function pauseCounting() {
    if (timerStarted && !timerPaused) {
        clearInterval(intervalId);
        timerPaused = true;
    } else if (timerStarted && timerPaused) {
        intervalId = setInterval(function () {
            if (count < 60) {
                if (count < 10) {
                    seconds.innerText = "0" + count;
                    count++;
                } else {
                    seconds.innerText = count;
                    count++;
                }
            } else {
                minutesCounter();
                count = 0;
            }
        }, 1000);
        timerPaused = false;

    }
}

function minutesCounter() {
    seconds.innerText = "00";
    mint++;
    if (mint < 60) {
        if (mint < 10) {
            minutes.innerText = "0" + mint + " :";
        } else {
            minutes.innerText = mint + " :";
        }
    } else {
        hourCounter();
        mint = 0;
        minutes.innerText = "00 :";
    }
}

function hourCounter() {
    seconds.innerText = "00";
    minutes.innerText = "00 :";
    hour++;
    if (hour < 10) {
        hours.innerText = "0" + hour + " :";
    } else {
        hours.innerText = hour + " :";
    }
}


function unclickButton() {
    if (isClicked) {
        start_icons[0].click();
        isClicked = false;
    }
}

function restartTime() {
    count = 0
    mint = 0
    hour = 0
    seconds.innerText = "00"
    minutes.innerText = "00 :"
    hours.innerText = "00 :"
    if (clicked_counting % 2 != 0) {
        var btn_design = document.getElementById("btn_design")
        btn_design.classList.toggle('active')
        unclickButton()
    }
    var carsouel_item = document.getElementsByClassName("carousel-item")
    var carousel_indicator = document.getElementsByClassName("carousel-indicator")
    for (var k = 0; k < carsouel_item.length; k++) {
        slide_seconds[k].innerText = seconds.innerText
        slide_minutes[k].innerText = minutes.innerText
        slide_hour[k].innerText == hours.innerText
        carsouel_item[k].classList.remove("active")
        carousel_indicator[k].classList.remove("active")
    }
    carousel_indicator[0].classList.add("active")
    carsouel_item[0].classList.add("active")
    first_time_zero = true
    i = 0

}

var slide_seconds = document.getElementsByClassName("slide_seconds")
var slide_minutes = document.getElementsByClassName("slide_minutes")
var slide_hour = document.getElementsByClassName("slide_hour")
var next_btn = document.getElementsByClassName("carousel-control-next")
i = 0
function saveLape() {
    if (i != 0) {
        next_btn[0].click()
    }
    if (i === 0 && !first_time_zero) {
        next_btn[0].click()
    }
    slide_seconds[i].innerText = seconds.innerText
    slide_minutes[i].innerText = minutes.innerText
    slide_hour[i].innerText == hours.innerText
    i++


    if (i === 4) {
        first_time_zero = false
        i = 0
    }
}

var mode_btn = document.getElementById("switch")
mode_btn.addEventListener("click", function () {
    var body = document.body;
    if (body.style.backgroundImage === 'url("BG-02.jpg")') {
        body.style.backgroundImage = 'url("BG-01.jpg")';

        var elements = document.querySelectorAll('.time > *');
        elements.forEach(function (element) {
            element.style.color = "white";
        });

        var elements = document.querySelectorAll('.icons > *');
        elements.forEach(function (element) {
            element.style.color = " rgb(11, 10, 87)";
        });

        var elements = document.querySelectorAll('.stop_icon, .lap_icon');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'white';
        });


        var elements = document.querySelectorAll('.fondo');
        elements.forEach(function (element) {
            element.style.background = '#ffffff';
        });


        var elements = document.querySelectorAll('.parte');
        elements.forEach(function (element) {
            element.style.background = 'rgb(11, 10, 87)';
        });


        var elements = document.querySelectorAll('.laps_slide');
        elements.forEach(function (element) {
            element.style.color = 'white';
        });



    } else {
        body.style.backgroundImage = 'url("BG-02.jpg")';

        var elements = document.querySelectorAll('.time > *');
        elements.forEach(function (element) {
            element.style.color = " rgb(11, 10, 87)";
        });

        var elements = document.querySelectorAll('.icons > *');
        elements.forEach(function (element) {
            element.style.color = "white";
        });


        var elements = document.querySelectorAll('.stop_icon, .lap_icon');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'rgb(11, 10, 87)';
        });

        var elements = document.querySelectorAll('.fondo');
        elements.forEach(function (element) {
            element.style.background = 'rgb(11, 10, 87)';
        });

        var elements = document.querySelectorAll('.parte');
        elements.forEach(function (element) {
            element.style.background = 'white';
        });

        var elements = document.querySelectorAll('.laps_slide');
        elements.forEach(function (element) {
            element.style.color = 'rgb(20, 40, 104)';
        });

    }
})