// your task:
// 1. Declare 4 variables (assign values only to arrays!):
// - userName with type string
// - userId with type number
// - userNames with type array of strings
// - userIds  with type array of numbers
// 2. Assign value "Bob" to userName
// 3. Assign value 412 to userId
// 4. Push value of userName to userNames
// 5. Push value of userId to userIds
// 6. Print variables "userNames" and "userIds" to console

// ❓ Questions:
// ❓ What will happen if You don't assign value to arrays?

// to test your solution in terminal you can run following command:
// npm run ex1-1

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

let userName: string
let userId: number
let userNames: string[] = []
let userIds: number[] = []

userName = "Bob"
userId = 412
userNames.push(userName)
userIds.push(userId)

console.log(userNames)
console.log(userIds)

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// [ 'Bob' ]
// [ 412 ]
