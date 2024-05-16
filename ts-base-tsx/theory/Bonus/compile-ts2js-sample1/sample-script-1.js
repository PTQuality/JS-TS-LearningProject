console.log("> Running TypeScript...");
var status;
(function (status) {
    status[status["resting"] = 0] = "resting";
    status[status["working"] = 1] = "working";
})(status || (status = {}));
const names = ["Dale", "Harry S. Truman", "Hawk"];
const daleCooper = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70,
    currentStatus: status.resting
};
function printList(list) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        console.log(`${index}: ${element}`);
    }
}
function printHuman(human) {
    console.log(`${human.name}, age: ${human.age}`);
}
printList(names);
printHuman(daleCooper);
export {};
//# sourceMappingURL=sample-script-1.js.map