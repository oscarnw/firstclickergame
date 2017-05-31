
var dollars = 0;
var farms = 0;

function GetDollar(number){
    dollars = dollars + number;
    document.getElementById("dollars").innerHTML = dollars;
};

function buyFarm(){
    var farmCost = Math.floor(10 * Math.pow(1.1,farms));     //works out the cost of this cursor
    if(dollars >= farmCost){                                   //checks that the player can afford the cursor
        farms = farms + 1;                                   //increases number of cursors
    	dollars = dollars - farmCost;                          //removes the cookies spent
        document.getElementById('farms').innerHTML = farms;  //updates the number of cursors for the user
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,farms));       //works out the cost of the next cursor
    document.getElementById('farmCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
