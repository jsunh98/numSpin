let x = 0;
let output = document.getElementById('output');
let meter = document.getElementById('meter');
output.innerHTML = x;

function plus(){
    output.innerHTML = ++x;
}

function minus(){
    output.innerHTML = --x;
}