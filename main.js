

var dollar = 0
var farm = 0

function getDollar(number){
           dollar = dollar + number;
           document.getElementById("dollar").innerHTML = dollar;
       };

function BuyFarm(){
           farm = farm + 1;
           document.getElementById("farm").innerHTML = farm;
       };
