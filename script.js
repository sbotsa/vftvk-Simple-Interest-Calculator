function cal()
{
  var p = document.getElementById("pri").value;
  var r = document.getElementById("rate").value;
  var t = document.getElementById("years").value;
  var si=(p*t*12*r)/100;
  document.getElementById("result").innerHTML=""+si;

}
        
