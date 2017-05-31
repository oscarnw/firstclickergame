

var dollar = 0
var farm = 0
var farmCost = 1000
var save = {
           dollar: dollar,
           farm: farm,
           farmCost: farmCost:
}

function save(){
           localStorage.setItem("save",JSON.stringify(save));
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

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
