/*
There are two types of object clonning 
1. Shallow copy oor shallow Clone
2. Deep Clone
*/
const lodash = require('lodash')
let object1 = {
    dbName : 'visionDb',
    id1 : 101,
    dbPass : 2005
};
let object2 = {};

for (let [key, value] of Object.entries(object1)){
    object2[key] = value;
}
console.log(object2);
// let deepObject1Clone = lodash.cloneDeep(object1)
// console.log(deepObject1Clone);
// console.log(object1);
// console.log(object1 === deepObject1Clone);

// for ( let [key, value] of Object.entries(object1)){
//     console.log(key + ' : ' + value);
// }
// console.log(object1 == object2);