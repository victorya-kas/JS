let stepCount = 0;
let cross = document.getElementById('cross');
let toe = document.getElementById('toe');
let x = 0;
let o = 0;


document.getElementById('game-block').addEventListener('click', function() {
   let el = event.target;
   let cell = document.querySelectorAll('td');
    
   if (stepCount % 2 == 0) {
    el.innerHTML = "x";
    el.style.color = "red";
    el.style.border = "1px solid green";
    } 
  else {
    el.innerHTML = "0";
    el.style.color = "green";
    el.style.border = "1px solid red";
 }
 stepCount++;

 if (cell[0].innerHTML =="x" && cell[1].innerHTML == "x" && cell[2].innerHTML == "x" || 
     cell[3].innerHTML =="x" && cell[4].innerHTML == "x" && cell[5].innerHTML == "x" || 
     cell[6].innerHTML =="x" && cell[7].innerHTML == "x" && cell[8].innerHTML == "x" || 
     cell[0].innerHTML =="x" && cell[3].innerHTML == "x" && cell[6].innerHTML == "x" || 
     cell[1].innerHTML =="x" && cell[4].innerHTML == "x" && cell[7].innerHTML == "x" || 
     cell[2].innerHTML =="x" && cell[5].innerHTML == "x" && cell[8].innerHTML == "x" ||
     cell[0].innerHTML =="x" && cell[4].innerHTML == "x" && cell[8].innerHTML == "x" ||
     cell[2].innerHTML =="x" && cell[4].innerHTML == "x" && cell[6].innerHTML == "x") {
        alert("Crosses won!");
        x++;  
 }

 if (cell[0].innerHTML =="0" && cell[1].innerHTML == "0" && cell[2].innerHTML == "0" || 
     cell[3].innerHTML =="0" && cell[4].innerHTML == "0" && cell[5].innerHTML == "0" ||
     cell[6].innerHTML =="0" && cell[7].innerHTML == "0" && cell[8].innerHTML == "0" ||
     cell[0].innerHTML =="0" && cell[3].innerHTML == "0" && cell[6].innerHTML == "0" ||
     cell[1].innerHTML =="0" && cell[4].innerHTML == "0" && cell[7].innerHTML == "0" ||
     cell[2].innerHTML =="0" && cell[5].innerHTML == "0" && cell[8].innerHTML == "0" ||
     cell[0].innerHTML =="0" && cell[4].innerHTML == "0" && cell[8].innerHTML == "0" ||
     cell[2].innerHTML =="0" && cell[4].innerHTML == "0" && cell[6].innerHTML == "0") {
        alert("Toes won!");
        o++;
 }

cross.innerHTML = x;
toe.innerHTML = o;
})

document.getElementById('restart').addEventListener('click', function() {
    let clean_td = document.getElementsByTagName('td');

    for(i=0;i<=clean_td.length;i++) {
        clean_td[i].innerHTML = " ";
        clean_td[i].style.border = "1px solid black";
    }
})

document.getElementById('reset').addEventListener('click', function() {
    x = 0;
    o = 0;

    cross.innerHTML = x;
    toe.innerHTML = o;
})





