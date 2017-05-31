
var dollars = 0;
var farms = 0;

function GetDollar(number){
    dollars = dollars + number;
    document.getElementById("GetDollar").innerHTML = dollars;
};

function buyFarm(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,farms));     //works out the cost of this cursor
    if(dollars >= cursorCost){                                   //checks that the player can afford the cursor
        farms = farms + 1;                                   //increases number of cursors
    	dollars = dollars - farmCost;                          //removes the cookies spent
        document.getElementById('farms').innerHTML = farms;  //updates the number of cursors for the user
        document.getElementById('dollars').innerHTML = GetDollar;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
