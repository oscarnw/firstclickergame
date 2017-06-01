

var dollar = 0
var farm = 0
var farmCost = 0
var tractor = 0
var tractorCost = 0
var earnpersec = 0


function getDollar(number){
           dollar = dollar + number;
           document.getElementById("dollar").innerHTML = Math.round(dollar);
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
          var earnpersec = earnpersec = 50 * farm * Math.pow(1.01,tractor)
           document.getElementById("earnpersec").innerHTML = Math.round(earnpersec);
       };

function buyTractor(number){
        
    var tractorCost =  Math.floor(1000 * Math.pow(1.1,tractor));
    
    
           if(dollar >= tractorCost){
                      tractor = tractor + number;
                      dollar = dollar - tractorCost
                               var tractorCost =  Math.floor(1000 * Math.pow(1.1,tractor));             
                      document.getElementById("dollar").innerHTML = dollar;
                      document.getElementById("tractor").innerHTML = tractor;
                      document.getElementById("farmCost").innerHTML = tractorCost;
           };
           var earnpersec = earnpersec = 50 * farm * Math.pow(1.01,tractor)
           document.getElementById("earnpersec").innerHTML = Math.round(earnpersec);
       };



window.setInterval(function(){
	
	getDollar(50 * farm * Math.pow(1.01,tractor) );

	
	
}, 1000);
