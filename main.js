

var dollar = 0
var farm = 0



function getDollar(number){
           dollar = dollar + number;
           document.getElementById("dollar").innerHTML = dollar;
       };

function buyFarm(number){
        
    var farmCost =  Math.floor(1000 * Math.pow(1.1,farm));
    
    
           if(dollar >= farmCost){
                      farm = farm + number;
                      dollar = dollar - farmCost
                               var farmCost =  Math.floor(1000 * Math.pow(1.1,farm));             
                      document.getElementById("dollar").innerHTML = dollar;
                      document.getElementById("farm").innerHTML = farm;
                      document.getElementById("farmCost").innerHTML = farmCost;
           };
       };


window.setInterval(function(){
	
	getDollar(50 * farm);
	
}, 1000);
