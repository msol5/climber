// Click button, total steps increases. 
// Use total steps to buy things to take more steps.
// Each thing gives an increase to the total steps over a particular time period (steps per second)
// Right before the player has gotten far enough into it, (1250) stop production. (going down steps)
// Require player to sell everything before they can continue.

let steps = 0
let stepsPerSecond = 0
let shoeCount = 0
let friendCount = 0
let botCount = 0
let stiltsCount = 0
let rocketCount = 0
let shipCount = 0
let prompted = false

let soldAll = false

const newUpgrades = document.getElementById("newUpgrades")

document.getElementById("shoeCount").innerHTML = shoeCount
document.getElementById("friendCount").innerHTML = friendCount
document.getElementById("botCount").innerHTML = botCount
document.getElementById("stiltsCount").innerHTML = stiltsCount
document.getElementById("rocketCount").innerHTML = rocketCount
document.getElementById("shipCount").innerHTML = shipCount

document.getElementById("sps").innerHTML = stepsPerSecond
document.getElementById("counter").innerHTML = steps
document.getElementById('btn').addEventListener("click", step)

document.getElementById('buyShoe').addEventListener("click", buyShoe)
document.getElementById('sellShoe').addEventListener("click", sellShoe)

document.getElementById('buyFriend').addEventListener("click", buyFriend)
document.getElementById('sellFriend').addEventListener("click", sellFriend)

document.getElementById('buyBot').addEventListener("click", buyBot)
document.getElementById('sellBot').addEventListener("click", sellBot)

document.getElementById('buyStilts').addEventListener("click", buyStilts)
document.getElementById('sellStilts').addEventListener("click", sellStilts)

document.getElementById('buyRocket').addEventListener("click", buyRocket)
document.getElementById('sellRocket').addEventListener("click", sellRocket)

document.getElementById('buyShip').addEventListener("click", buyShip)
document.getElementById('sellShip').addEventListener("click", sellShip)

//document.getElementById('sellAll').addEventListener("click", sellAll)

function step(){
    steps += 1
    console.log(steps)
    document.getElementById("counter").innerHTML = steps.toFixed(1)
}

window.setInterval(autoStep,100)

function autoStep() {
    if (steps<1250 || soldAll == true) {
        steps += (stepsPerSecond/10);
        document.getElementById("counter").innerHTML = steps.toFixed(1)
    }
    else {
            if (prompted == false) {
            answer = confirm("You can't ascend any further right now. Do you want to give up?");
            if (answer == true) {
                close()
            }
            else {
                prompted = true;
            }
        }
        frugalCheck()
}}

function frugalCheck() {
    if ((steps>1240) && (shoeCount==0) && (friendCount==0) && (botCount==0)) {
        newUpgrades.style.display = "block";
        soldAll=true
}
    else;
}

function buyShoe() {
    if (steps > 49) {
    stepsPerSecond += 1;
    steps -= 50;
    shoeCount += 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("shoeCount").innerHTML = shoeCount
    }
    else;
}
function sellShoe() {
    if (shoeCount > 0) {
    stepsPerSecond -= 1;
    steps += 25;
    shoeCount -= 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("shoeCount").innerHTML = shoeCount
    }
    else;
}

function buyFriend() {
    if (steps > 249) {
    stepsPerSecond += 10;
    steps -= 250;
    friendCount += 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("friendCount").innerHTML = friendCount
    }
    else;
}
function sellFriend() {
    if (friendCount > 0) {
    stepsPerSecond -= 10;
    steps += 125;
    friendCount -= 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("friendCount").innerHTML = friendCount
    }
    else;
}

function buyBot() {
    if (steps > 1249) {
    stepsPerSecond += 50;
    steps -= 1250;
    botCount += 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("botCount").innerHTML = botCount
    }
    else;
}
function sellBot() {
    if (botCount > 0) {
    stepsPerSecond -= 50;
    steps += 625;
    botCount -= 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("botCount").innerHTML = botCount

    }
    else;
}

function buyStilts() {
    if (steps > 2499) {
    stepsPerSecond += 100;
    steps -= 2500;
    stiltsCount += 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("stiltsCount").innerHTML = stiltsCount
    }
    else;
}
function sellStilts() {
    if (stiltsCount > 0) {
    stepsPerSecond -= 100;
    steps += 1250;
    stiltsCount -= 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("stiltsCount").innerHTML = stiltsCount

    }
    else;
}
function buyRocket() {
    if (steps > 9999) {
    stepsPerSecond += 400;
    steps -= 10000;
    rocketCount += 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("rocketCount").innerHTML = rocketCount
    }
    else;
}
function sellRocket() {
    if (rocketCount > 0) {
    stepsPerSecond -= 400;
    steps += 5000;
    rocketCount -= 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("rocketCount").innerHTML = rocketCount

    }
    else;
}

function buyShip() {
    if (steps > 49999) {
    stepsPerSecond += 2000;
    steps -= 50000;
    shipCount += 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("shipCount").innerHTML = shipCount
    }
    else;
}
function sellShip() {
    if (shipCount > 0) {
    stepsPerSecond -= 2000;
    steps += 50000;
    shipCount -= 1;
    document.getElementById("sps").innerHTML = stepsPerSecond;
    document.getElementById("counter").innerHTML = steps.toFixed(1);
    document.getElementById("shipCount").innerHTML = shipCount

    }
    else;
}
