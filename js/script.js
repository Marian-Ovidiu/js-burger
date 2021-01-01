
var costi = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');
var totale = document.getElementById('price');
var inputNomeburger = document.getElementById('nameYourBurger');
var totalePrezzo = 50;
var contatore = 0;
var cupons = ['12345abcde', '21lk4jnkwq', 'askdlfn23jk4l2', 'adsafnlqwo232d3fdls', 'dsafliwe23'];
var discountText = document.getElementById('discountText');
var sconto;

document.getElementById('button-submit').addEventListener('click', function(){
  contatore = 0;
  sconto = discountText.value;
  console.log(sconto);

  for (var j = 0; j < costi.length; j++){
    if (costi[j].checked){
      contatore += 1;
    }
  }
  if(inputNomeburger.value.length === 0){
    alert('Devi dare un nome al tuo burger');
  } else if (contatore === 0) {
    alert('Devi selezionare almeno un ingrediente')
  } else {
      totalePrezzo = 50;

      for(var i = 0; i < costi.length; i++){
        if (costi[i].checked){
          totalePrezzo += parseInt(costi[i].value);
        }
      }

      for(var j = 0; j <= cupons.length; j++){
        if(cupons[j] === sconto){
          totalePrezzo *= 0.8;
        }
      }
      totale.innerText = totalePrezzo + '$';
    }

})
