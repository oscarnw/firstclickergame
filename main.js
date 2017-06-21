let dollar =0

document.getElementById("buttonGetDollar").addEventListener("click", function(){
    dollar ++
    document.getElementById("spanGoblinBankAccount").innerHTML = dollar
});