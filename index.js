var x = document.getElementById("startScreen")
var y = document.getElementById("answerbuttons1")
var a = document.getElementById("answerbuttons2")
var b = document.getElementById("answerbuttons3")
var c = document.getElementById("answerbuttons4")
var d = document.getElementById("answerbuttons5")
var e = document.getElementById("answerbuttons6")
var f = document.getElementById("resultspage")
var totalScore = [];



function startGame() {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function selectAnswer1() {
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
        a.style.display = "block";
    }
}

function selectAnswer2() {
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
        b.style.display = "block";
    }
}

function selectAnswer3() {
    if (b.style.display === "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
        c.style.display = "block";
    }
}

function selectAnswer4() {
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none";
        d.style.display = "block";
    }
}

function selectAnswer5() {
    if (d.style.display === "none") {
        d.style.display = "block";
    } else {
        d.style.display = "none";
        e.style.display = "block";
    }
}

function selectAnswer6() {
    if (e.style.display === "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
        f.style.display = "block";
    }
}

