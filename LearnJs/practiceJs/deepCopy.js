const lodash = require('lodash');
console.log("Working...");
let original = {
    name: "Alice",
    age: 25,
    greet:()=> {
        console.log("Hello");
    },
    date: new Date()
};

let clone = JSON.parse(JSON.stringify(original));
let cloneLikeOriginal = lodash.cloneDeep(original);
cloneLikeOriginal.greet();
console.log(original);
console.log(cloneLikeOriginal);
console.log(clone);
