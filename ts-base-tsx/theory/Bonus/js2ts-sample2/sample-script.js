console.log("> Running TypeScript...");
const names = ["Dale", "Harry S. Truman", "Hawk"];
const human = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70
};
// 📝change: added type string[]
function printList(list) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        console.log(`${index}: ${element}`);
    }
}
// // 📝change: added type any - until we don't define interface for this object!
// function printHuman(human: any) {
//     console.log(`${human.name}, age: ${human.age}`)
// }
// nad final form:
function printHuman(human) {
    console.log(`${human.name}, age: ${human.age}`);
}
printList(names);
printHuman(human);
export {};
//# sourceMappingURL=sample-script.js.map