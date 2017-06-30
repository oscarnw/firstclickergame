var money = 0;

var appleSeed = 0; var mangoSeed = 0; var poisonRootSeed = 0; var magicBeanSeed = 0;

var mangoSeedUnlocked = false; var poisonRootSeedUnlocked = false; var magicBeanSeedUnlocked = false;

var soundGetCoin = document.getElementById("soundGetCoin");
var soundPickingSeed = document.getElementByID("soundPickingSeed");

function getCoin(){
    money ++
    document.getElementById("goblinBankAccount").innerHTML = money;
    soundGetCoin.play()
}

function getAppleSeed(){
    appleSeed ++
    document.getElementById("appleSeed").innerHTML = appleSeed;
    soundGetCoin.play()
}

function getMangoSeed() {
    if (mangoSeedUnlocked == true) {
        mangoSeed++
        document.getElementById("mangoSeed").innerHTML = mangoSeed;;
        soundPickingSeed.play()
    }
}

function getPoisonRootSeed() {
    if (poisonRootSeedUnlocked == true) {
        poisonRootSeed++
        document.getElementById("poisonRootSeed").innerHTML = poisonRootSeed;
        soundPickingSeed.play()
    }
}

function getMagicBeanSeed() {
    if (magicBeanSeedUnlocked == true) {
        magicBeanSeed++
        document.getElementById("magicBeanSeed").innerHTML = magicBeanSeed;
        soundPickingSeed.play()
    }
}


