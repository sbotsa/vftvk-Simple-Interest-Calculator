function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var si=(p*t*r)/100;
    alert(si);
    document.getElementById("result").innerHTML=" "+si;
}
        
