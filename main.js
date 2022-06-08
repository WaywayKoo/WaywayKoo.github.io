function addition() {
    var x = parseInt(document.getElementById("a01").value);
    var y = parseInt(document.getElementById("a02").value);
    var output = document.getElementById("out-a1");
    output.innerHTML = x+y;
}

function subtraction() {
    var x = parseInt(document.getElementById("b01").value);
    var y = parseInt(document.getElementById("b02").value);
    var output = document.getElementById("out-b1");
    output.innerHTML = x-y;
}

function b() {
    var x = parseInt(document.getElementById("c01").value);
    var y = parseInt(document.getElementById("c02").value);
    var output = document.getElementById("out-c1");
    output.innerHTML = x*y;
}

function b() {
    var x = parseInt(document.getElementById("d01").value);
    var y = parseInt(document.getElementById("d02").value);
    var output = document.getElementById("out-d1");
    output.innerHTML = x/y;
}