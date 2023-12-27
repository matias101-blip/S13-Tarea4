function conver1() {
    let num = document.getElementById("num").value;
    let Base2 = parseInt(num, 10).toString(2);
    alert(`El número ${num} en base 2 es ${Base2}`);
}

function conver2() {
    let num2 = document.getElementById("num2").value;
    let Base8 = parseInt(num2, 10).toString(8);
    alert(`El número ${num2} en base 8 es ${Base8}`);
}

function conver3() {
    let num3 = document.getElementById("num3").value;
    let Base16 = parseInt(num3, 10).toString(16);
    alert(`El número ${num3} en base 16 es ${Base16}`);
}

function conver4() {
    let num4 = document.getElementById("num4").value;
    let Base10 = parseInt(num4, 2).toString(10);
    alert(`El número ${num4} en base 10 es ${Base10}`);
}

function conver5() {
    let num5 = document.getElementById("num5").value;
    let Base8_2 = parseInt(num5, 2).toString(8);
    alert(`El número ${num5} en base 8 es ${Base8_2}`);
}

function conver6() {
    let num6 = document.getElementById("num6").value;
    let Base16_2 = parseInt(num6, 2).toString(16);
    alert(`El número ${num6} en base 16 es ${Base16_2}`);
}