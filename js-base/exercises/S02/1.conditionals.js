// Your task:
// 1. Create if statement in function that will print player status depends on health value:
// - For 100 or more health we expect to get 'Player is alive and at full health!'
// - For health between 10 and 99 we expect to get 'Player is alive and at ok health.'
// - For health between 1 and 10 health we expect to get 'Player is alive and at very poor health!'
// - For less than 1 health we expect to get 'Player is dead.'

// TIP: to check if value is greater or equal 100:
// health >= 100
// TIP: to check if value is greater than 100:
// health > 100
// TIP: to check if value is between 100 and 200:
// health >= 100 && health < 200

// to test your solution in terminal You can run following command:
// npm run es2e1

//// TODO:
// here place your solution:

function printPlayersStateSwitch(health) {
switch (true){
    case(health >= 100):
    console.log("Player is alive and at full health!");
    break;
    case(health >= 10 && health <= 99):
    console.log("Player is alive and at ok health.");
    break;
    case(health >= 1 && health <= 10):
    console.log("Player is alive and at very poor health!");
    break;
    case(health < 1):
    console.log("Player is dead.");
    break;
    default:
    console.log("Invalid health value.");
    break;
}
//or
}


function printPlayerStateIfElse(health) {
    if (health >= 100) {
        console.log("Player is alive and at full health!");
    } else if (health >= 10 && health <= 99) {
        console.log("Player is alive and at ok health.");
    } else if (health >= 1 && health <= 10) {
        console.log("Player is alive and at very poor health!");
    } else if (health < 1) {
        console.log("Player is dead.");
    } else {
        console.log("Invalid health value.");
    }
}





//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!

printPlayersStateSwitch(100)
printPlayersStateSwitch(60)
printPlayersStateSwitch(0)
printPlayersStateSwitch(5)
printPlayersStateSwitch(-1)

console.log("==========================SECOND SOLUTION SEPARATOR:=================================")

printPlayerStateIfElse(100)
printPlayerStateIfElse(60)
printPlayerStateIfElse(0)
printPlayerStateIfElse(5)
printPlayerStateIfElse(-1)

// Expected output:
// After running this script on console You should receive:
// Player is alive and at full health!
// Player is alive and at ok health.
// Player is dead.
// Player is alive and at very poor health!
// Player is dead.