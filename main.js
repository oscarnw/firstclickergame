apple = 0
watermelon = 0
magicBean = 0
appleGrowing = 0
watermelonGrowing = 0
magicBeanGrowing = 0
appleTree = 0
watermelonPlant = 0
magicBeanStalk = 0
appleTimer = 0
watermelonTimer = 0
magicBeanTimer = 0

 function getAppleSeed(number) {

apple = apple + number

 document.getElementById("apple").innerHTML = apple;

}

 function getWatermelonSeed(number) {

watermelon = watermelon + number

 document.getElementById("watermelon").innerHTML = watermelon;

}

 function getMagicBean(number) {

magicBean = magicBean + number

 document.getElementById("magicBean").innerHTML = magicBean;

}

function plantAppleSeed(number) { 

	if(apple>0) {
	appleGrowing = appleGrowing + number
	apple = apple - number

	document.getElementById("apple").innerHTML = apple;
	document.getElementById("appleGrowing").innerHTML = appleGrowing;
	}
}

function plantWatermelon(number) { 

	if(watermelon>0) {
	watermelonGrowing = watermelonGrowing + number
	watermelon = watermelon - number

	document.getElementById("watermelon").innerHTML = watermelon;
	document.getElementById("watermelonGrowing").innerHTML = watermelonGrowing;
	}
}

function plantMagicBean(number) {

    if(magicBean>0) {
        magicBeanGrowing = magicBeanGrowing + number
        magicBean = magicBean - number

        document.getElementById("magicBean").innerHTML = magicBean;
        document.getElementById("magicBeanGrowing").innerHTML = magicBeanGrowing;
    }
}

function growAppleTree(){
    if(appleGrowing>0) {
        appleGrowing -= 1
        appleTree += 1
        document.getElementById("appleGrowing").innerHTML = appleGrowing;
        document.getElementById("appleTree").innerHTML = appleTree;
    }
}


function growWatermelonPlant(){
    if(watermelonGrowing>0) {
        watermelonGrowing -= 1
        watermelonPlant += 1
        document.getElementById("watermelonGrowing").innerHTML = watermelonGrowing;
        document.getElementById("watermelonPlant").innerHTML = watermelonPlant;
    }
}

function growMagicBeanStalk(){
    if(magicBeanGrowing>0) {
        magicBeanGrowing -= 1
        magicBeanStalk += 1
        document.getElementById("magicBeanGrowing").innerHTML = magicBeanGrowing;
        document.getElementById("magicBeanStalk").innerHTML = magicBeanStalk;
    }
}

window.setInterval(function(){
    growAppleTree()
    growWatermelonPlant()
    growMagicBeanStalk()
}, 1000);