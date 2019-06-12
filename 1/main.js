
for (x=1; x<=5; x++) {
    document.write (x + "</br>");
}

document.write ("</br>");

for (y=5; y>=1; y--) {
    document.write (y + "</br>");
}

document.write ("</br>");
const i=3;
for (z=1; z<=10; z++) {
    document.write (i +"*"+ z + "=" + (i*z) + "</br>");
}



if (num<0) {
    alert("invalid value!")
}


 function sum() {
    var num = document.getElementById('number').value;
    var result = function calc() {
        var sum = 0;
        for (var n = 1; n <= num; n++) {
            sum += n;
        }
        return sum;
    };
    document.getElementById('sum_result').innerHTML = result;
}


function weight() {
    var height = document.getElementById('weight').value;
    var male= document.getElementById('male');
    var option = document.getElementById('options');
    if (option==male) {
        var w_result=(height-100)*1.15;
    }  
    else {
        var w_result=(height-110)*1.15;
    }

    document.getElementById('weight_result').innerHTML = w_result + " кг.";
}
 
