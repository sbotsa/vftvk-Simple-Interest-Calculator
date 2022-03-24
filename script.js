function cal()
{
  var p = document.getElementById("pri").value;
  var r = document.getElementById("rate").value;
  var t = document.getElementById("years").value;
  var si=(p*t*r)/100;
  document.getElementById("result").innerHTML=""+si;

}
function getval()
{
 document.getElementById("r").innerHTML=document.getElementById("rate").value+"%";
}
function check()
{
  var val = document.getElementById("pri").value;
var x= parseInt(val);
if(val==0 || val<0)
{
  alert("Please Enter proper value Value"); 
}

}
