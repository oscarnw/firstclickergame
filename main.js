

var dollar = 0
var farm = 0
var farmCost = 0
var tractor = 0
var tractorCost = 0
var detector = 0
var detectorCost = 0
var earnpersec = 0
var gold = 0


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
                      document.getElementById("dollar").innerHTML = Math.round(dollar);
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
                      document.getElementById("tractorCost").innerHTML = tractorCost;
           };
          var earnpersec = earnpersec = 50 * farm * Math.pow(1.01,tractor)
           document.getElementById("earnpersec").innerHTML = Math.round(earnpersec);
       };
        
   
   function buyDetector(number){
        
    var detectorCost =  Math.floor(1000 * Math.pow(1.1,detector));
    
    if(detector < 5){
           if(dollar >= detectorCost){
                      detector = detector + number;
                      dollar = dollar - detectorCost
                               var detectorCost =  Math.floor(1000 * Math.pow(1.1,detector));             
                      document.getElementById("dollar").innerHTML = dollar;
                      document.getElementById("detector").innerHTML = detector;
                      document.getElementById("detectorCost").innerHTML = detectorCost;
           };
    };
          var earnpersec = earnpersec = 50 * farm * Math.pow(1.01,tractor)
           document.getElementById("earnpersec").innerHTML = Math.round(earnpersec);
       };
   
   
   function sellGold(number){
       if(gold >= 1){
	dollar = dollar + 1000*number;
	gold = gold - number
	document.getElementById("dollar").innerHTML = dollar;
	document.getElementById("gold").innerHTML = gold;
       }
   }
   
   
window.setInterval(function(){
	
	getDollar(50 * farm * Math.pow(1.01,tractor) );

	if(Math.random()<=detector*0.01){
    gold = gold + 1
	  document.getElementById("gold").innerHTML = gold
	};
}, 1000);
