var money = 0;
var appleSeed = 0;
var mangoSeed = 0;
var poisonRootSeed = 0;
var magicBeanSeed = 0;

function getCoin(){
    money ++
    document.getElementById("goblinBankAccount").innerHTML = money;
};

function getAppleSeed(){
    appleSeed ++
    document.getElementById("appleSeed").innerHTML = appleSeed;
}

function getMangoSeed(){
    mangoSeed ++
    document.getElementById("mangoSeed").innerHTML = mangoSeed;
}

function getPoisonRootSeed(){
    poisonRootSeed ++
    document.getElementById("poisonRootSeed").innerHTML = poisonRootSeed;
}


