// var i =20;
// var sym1 = Symbol("ObjectKey");
// var sym2 = Symbol("ObejctKey");
// {
//     let i = 10;
//     console.log(i);
// }
// console.log(i);
// console.log(sym1 == sym2);

const uniqueId = Symbol('id');
let user = {
    name: 'Bob',
    [uniqueId] : 123
     
}
console.log(user.name);
console.log(user[uniqueId])
user[uniqueId] = 101;
console.log(user[uniqueId])
