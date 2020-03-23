var rangeslider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value + "%";
}

var billamt = document.getElementById('bill');
var split = document.getElementById('split');
// tipperc output.value

var button = document.getElementById('press');
var tpp = document.getElementById('tpp');
var ttp = document.getElementById('ttp');
var form=document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var hey=billamt.value.substring(0,billamt.value.length-1);
  hey=parseInt(hey,10);
  var temp2 = (( rangeslider.value * hey) / 100); //ttp
  var temp3 = (temp2 / split.value); //tpp
  var temp1 = ((temp2 + hey) / split.value); //total
  document.getElementById('total').innerHTML=temp1.toPrecision(2)+"$";
  document.getElementById('ttp').innerHTML=temp2.toPrecision(2)+"$";
  document.getElementById('tpp').innerHTML=temp3.toPrecision(2)+"$";
});
