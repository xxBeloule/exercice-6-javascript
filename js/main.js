function resultat() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var resultat = firstNumber % secondNumber;
  if (isNaN(resultat)) {
    alert(" Ce n'est pas un nombre");
  } else  {
alert('Le reste est :' + resultat);
}}
