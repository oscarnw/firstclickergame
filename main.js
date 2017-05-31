

var dollar = 0
var farm = 0

function getDollar(number){
           dollar = dollar + number;
           document.getElementById("dollar").innerHTML = dollar;
       };

function buyFarm(number){
           farm = farm + number;
           document.getElementById("farm").innerHTML = farm;
       };
