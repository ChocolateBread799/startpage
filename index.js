function enterkey() {
    if (window.event.keyCode == 13) {

        move();
    }
}

function move() {
    var value = document.getElementById("move").value;
    window.location.href = ("https://" + value);
}