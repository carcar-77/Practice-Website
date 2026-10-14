function clicked() {
    document.title = document.getElementById("InputTitle").value;
}

function B2() {
    let val = JSON.parse(document.getElementById("button2").innerText) + 1;

    document.getElementById("button2").innerText = val;

    localStorage.setItem("button2", JSON.stringify(val));
}

function B3() {
    let val = JSON.parse(document.getElementById("button3").innerText) + 1;

    document.getElementById("button3").innerText = val;

    sessionStorage.setItem("button3", JSON.stringify(val));
}

function loading() {
    if (localStorage.getItem("button2") !== null) {
        document.getElementById("button2").innerText =
            JSON.parse(localStorage.getItem("button2"));
    } else {
        localStorage.setItem("button2", JSON.stringify(0));
    }

    if (sessionStorage.getItem("button3") !== null) {
        document.getElementById("button3").innerText =
            JSON.parse(sessionStorage.getItem("button3"));
    } else {
        sessionStorage.setItem("button3", JSON.stringify(0));
    }
}

window.onload = loading;