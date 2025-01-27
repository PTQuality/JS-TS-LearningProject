// your task:
// 1. Declare an Enum:
// - with name HeroActions
// - with following values: Attack, Defend, Move, Rest
// 2. Declare a function:
// - with name invokeAction
// - with one parameter action of type HeroActions
// - with return type string
// 3. Function depends on enum should return following strings:
// - for Attack - "Hero Attacks!"
// - for Defend - "Hero Defends!"
// - for Move - "Hero got the Moves!"
// - for Rest - "Hero Rests!"
// - for unknown action - "Unknown action"
// - You can use "switch" for that
// 4. Test your solution with all values from enum HeroActions

// ❓ Questions:
// ❓ Is it possible to get "Unknown action" as an output?

// to test your solution in terminal you can run following command:
// npm run ex1-3

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

enum HeroActions {
    Attack,
    Defend,
    Move,
    Rest
}
function invokeAction(heroAction: HeroActions): string {
    switch (heroAction) {
        case HeroActions.Attack:
            return "Hero Attacks!"
        case HeroActions.Defend:
            return "Hero Defends!"
        case HeroActions.Move:
            return "Hero got the Moves!"
        case HeroActions.Rest:
            return "Hero Rests!"
        default:
            return "Unknown action"
    }
}

console.log(invokeAction(HeroActions.Attack))
console.log(invokeAction(HeroActions.Defend))
console.log(invokeAction(HeroActions.Move))
console.log(invokeAction(HeroActions.Rest))

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// Hero Attacks!
// Hero Defends!
// Hero got the Moves!
// Hero Rests!
