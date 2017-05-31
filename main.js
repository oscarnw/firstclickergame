
var dollars = 0;
var farms = 0;

function GetDollar(number){
    dollars = dollars + number;
    document.getElementById("dollars").innerHTML = dollars;
};

function buyFarm(){
    var farmCost = 1000;
    if(dollars >= farmCost){                               
        farms = farms + 1;                                 
    	dollars = dollars - farmCost;                         
        document.getElementById('farms').innerHTML = farms;
        document.getElementById('dollars').innerHTML = dollars;
};
    
    window.setInterval(function(){

}, 1000);
