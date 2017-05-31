

var dollar = 0
var farm = 0
var farmCost = 1000






function getDollar(number){
           dollar = dollar + number;
           document.getElementById("dollar").innerHTML = dollar;
       };

function buyFarm(){
           if(dollar >= farmCost){
                      farms = farms + 1;
                      dollar = dollar - farmCost
                      document.getElementById("dollar").innerHTML = dollar;
                      document.getElementById("farm").innerHTML = farm;
           };
       };
