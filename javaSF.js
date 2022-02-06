alert("Witaj");

function settime() {

var today= new Date();

var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

var hour = today.getHours();
if (hour < 10) hour = "0" + hour;

var minutes = today.getMinutes();
if (minutes < 10) minutes = "0" + minutes;

var seconds = today.getSeconds();
if (seconds < 10) seconds = "0" + seconds;

var mili1 = today.getTime();


/*`````````````````````````````````````````````````````````````````````` */

var may = new Date("06/25/2022");

var mayday = may.getDate();
var maymonth = may.getMonth()+1;
var mayyear = may.getFullYear();
var mili2 = may.getTime();

var sub1 = mili2 - mili1;

var dsub = Math.floor(sub1/86400000);
var hsub = Math.floor(sub1/3600000);
var msub = Math.floor(sub1/60000);
var ssub = Math.floor(sub1/1000);

document.getElementById("time").innerHTML = day + " / "  + month + " / " + year + " --- " + hour + " : " + minutes + " : " + seconds;
document.getElementById("dejt").innerHTML = mayday+" / "+maymonth+" / "+mayyear;
document.getElementById("time2").innerHTML = dsub + " dni";
document.getElementById("time3").innerHTML = hsub + " godzin";
document.getElementById("time4").innerHTML = msub + " minut";
document.getElementById("time5").innerHTML = ssub + " sekund";

if (dsub == 0) {
document.getElementById("time2").innerHTML = "0" + " dni";
}

if (hsub == 0) {
    document.getElementById("time3").innerHTML = "0" + " godzin";
}

if (msub == 0) {
    document.getElementById("time4").innerHTML = "0" + " minut";
}

if (ssub == 0) {
    document.getElementById("time5").innerHTML = "0" + " sekund";
}



setTimeout("settime()", 1000);

}