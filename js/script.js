
var costi = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');
var totalePrezzo = 50;

document.getElementById('button-submit').addEventListener('click', function(){
  totalePrezzo = 50;
  for(var i = 0; i < costi.length; i++){
    if (costi[i].checked){
      totalePrezzo += parseInt(costi[i].value);
    }
  }
  alert('totale ' + totalePrezzo);
})
