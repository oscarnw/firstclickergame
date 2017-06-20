let dollar = 0

document.getElementById("buttonGetDollar").addEventListener("click", thing);

function thing() {
    dollar ++
    document.getElementById("spanGoblinBankAccount").innerHTML = dollar
}