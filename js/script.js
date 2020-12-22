
var costi = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');
var totale = document.getElementById('price');
var inputNomeburger = document.getElementById('nameYourBurger');
var totalePrezzo = 50;
var nomeBurger;



  
inputNomeburger = '';




document.getElementById('button-submit').addEventListener('click', function(){
  nomeBurger.innerText = inputNomeburger;
  if(nomeBurger === ''){
    alert('Devi dare un nome al tuo burger');
  } else {
    totalePrezzo = 50;
    for(var i = 0; i < costi.length; i++){
      if (costi[i].checked){
        totalePrezzo += parseInt(costi[i].value);
      }
    }
    totale.innerText = totalePrezzo + '$';
  }

})
