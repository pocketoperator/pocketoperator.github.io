var initTeletext = function() {
    window.setInterval(updateClock, 1000);
    window.setTimeout(updateCounter, 100);
}

var addleadingspace = function(number) {
    return (number < 10 ? " " : "") + number;
}

var addleadingzero = function(number) {
    return (number < 10 ? "0" : "") + number;
}

var dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var updateClock = function() {
    var d = new Date();
    document.getElementById("TTdate").innerHTML = dayofweek[d.getDay()] + " " + addleadingspace(d.getDate()) + " " + monthname[d.getMonth()];
    document.getElementById("TTtime").innerHTML = addleadingzero(d.getHours()) + ":" + addleadingzero(d.getMinutes()) + "/" + addleadingzero(d.getSeconds());
}

var counter=100;

var updateCounter = function() {
    if (counter > 110)
    {
      var cv = document.getElementById("tv");
      cv.classList.add('hide');
    }
    document.getElementById("TTcounter").innerHTML = counter;
    counter +=1;
    if (counter > 999) {
        counter = 100;
    }
    if (Math.random() < 0.1){
        window.setTimeout(updateCounter, Math.random()*1000);
    } else {
        window.setTimeout(updateCounter, 150);
    }
}
initTeletext();

