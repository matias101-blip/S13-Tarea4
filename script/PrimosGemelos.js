function esPrimo(num) {
    if (num === 1) {
      return false;
    }
    else if (num > 1) {
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  function sonPrimosGemelos() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    if (esPrimo(num1) && esPrimo(num2) && Math.abs(num1 - num2) == 2) {
      document.getElementById("resultado").innerHTML = num1 + " y " + num2 + " son números primos gemelos.";
    } else {
      document.getElementById("resultado").innerHTML = num1 + " y " + num2 + " no son números primos gemelos.";
    }
  }