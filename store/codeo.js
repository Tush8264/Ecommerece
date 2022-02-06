/*sidenab*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("srl").style.top = "0";
    } else {
        document.getElementById("srl").style.top = "-50px";
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


//modelpopup login
var modal1 = document.getElementById("m1");
var btn1 = document.getElementById("b1");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
}

span.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

//modelpopup create
var modal2 = document.getElementById("m2");
var btn2 = document.getElementById("b2");
var span1 = document.getElementsByClassName("close")[1];
btn2.onclick = function() {
    modal2.style.display = "block";
}


span1.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
//slidshow
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}