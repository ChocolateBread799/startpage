var clock = document.querySelector('.clock_js');

function time() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var hour = ('0' + today.getHours()).slice(-2); 
    var minute = ('0' + today.getMinutes()).slice(-2);

    clock.innerHTML = year + "/" + month  + "/" + day + " " + hour + ":" + minute;
}

time()