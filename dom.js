let box1 = document.getElementById("box1");

function b1() {
    box1.style.color ="Green" ;
    //box1.style.backgroundColor = "blue" ;
    box1.style.fontSize ="20px";
    box1.innerHTML = "BLUE";
    box1.onclick = function() {
        toggleBoxColor(box1, "black", "lightgray");
    };   
}

let box2 = document.getElementById("box2");
function b2() {
    box2.style.color ="Green" ;
    box2.style.backgroundColor = "RED" ;
    box2.style.fontSize ="20px";
    box2.innerHTML = "RED";
    box2.onclick = function() {
        toggleBoxColor(box2, "black", "lightgray");
    };   

}

let box3 = document.getElementById("box3");
function b3() {
    box3.style.color ="Green" ;
    box3.style.backgroundColor = "GREEN" ;
    box3.style.fontSize ="20px";
    box3.innerHTML = "GREEN";
    box3.onclick = function() {
        toggleBoxColor(box3, "black", "lightgray");
    };   
}

let box4 = document.getElementById("box4");
function b4() {
    box4.style.color ="Green" ;
    box4.style.backgroundColor = "YELLOW" ;
    box4.style.fontSize ="20px";
    box4.innerHTML = "YELLOW";
    box4.onclick = function() {
        toggleBoxColor(box4, "black", "yellow");
    };   
}

let box5 = document.getElementById("box5");
function b5() {
    box5.style.color ="Green" ;
    box5.style.backgroundColor = "AQUA" ;
    box5.style.fontSize ="20px";
    box5.innerHTML = "AQUA";
    box5.onclick = function() {
        toggleBoxColor(box5, "yellow", "blue");
    };   
}

let box6 = document.getElementById("box6");
 function b6() {
     box6.style.color ="Green" ;
     //box6.style.backgroundColor = "BLACK" ;
     box6.style.fontSize ="20px";
     box6.innerHTML = "BLACK";
     box6.onclick = function() {
        toggleBoxColor(box6, "green", "lightgray");
    };   
 }
// box6.onclick = function() {
//     toggleBoxColor(box6, "black", "lightgray");
// };



function toggleBoxColor(box, color1, color2) {
    if (box.style.backgroundColor === color1) {
        box.style.backgroundColor = color2;
    } else {
        box.style.backgroundColor = color1;
    }
}
// box1.addEventListener("click", function() {
//     toggleBoxColor(box1, "yellow", "lightgray");
// });



 