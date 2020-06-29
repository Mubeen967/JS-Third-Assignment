function getNumber(num) {

    var result = document.getElementById("result")
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value=" ";
}
function onButton(){
    var result = document.getElementById("result");
    result.value="0";
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);

}
function del(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0 , -1);
}
function power2(){
    var result = document.getElementById("result");
    result.value = Math.pow(result.value , 2);
   
}
function power3(){
    var result = document.getElementById("result");
    result.value = Math.pow(result.value , 3);
   
}

function squareRoot(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);


}
function log(){
    var result = document.getElementById("result");
    result.value = Math.log(result.value);


}
function pi(){
    var result = document.getElementById("result");
    result.value = Math.PI;

}
function euler(){
    var result = document.getElementById("result");
    result.value = Math.E;

}
function sin(){
    var result = document.getElementById("result");
    result.value = Math.sin(result.value);

}
function cos(){
    var result = document.getElementById("result");
    result.value = Math.cos(resut.value);


}
function tan(){
    var result = document.getElementById("result");
    result.value = Math.tan(result.value);

}