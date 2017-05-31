
var dollars = 0;
var farms = 0;
var farmCost = 1000;

function getDollar(number){
    dollars = dollars + number;
    document.getElementById("dollars").innerHTML = dollars;
};

function buyFarm(){
        if(dollars >= farmCost){                               
        farms = farms + 1;                                 
    	dollars = dollars - farmCost;                         
        document.getElementById('farms').innerHTML = farms;
        document.getElementById('dollars').innerHTML = dollars;
};

