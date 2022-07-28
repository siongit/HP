
t = 0;
var elem = document.getElementById("myid");

function myfunc(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    elem.innerHTML = hours+"時"+minutes+"分";
}

t = setInterval("myfunc()", 500);

