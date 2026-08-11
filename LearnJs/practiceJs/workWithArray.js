let arr1 = new Array(1, 8, 9, 1, 2, 3, 4);
let arr2 = [1, 8, 9, 1, 2, 3, 4]
// arr1.push(5);
// arr2.push(5);
// arr1.pop();
// arr2.unshift(0);
// arr1.unshift(0);
// arr1.splice(1, 0, [8, 9, 1]);
// let sqArr1 = arr1.map(x=> {return x**2;});
// let evenArr = sqArr1.filter((num)=>{
//     return num % 2 === 0 ? true : false;
// })
// console.log(evenArr);
// console.log(sqArr1);


let arr3 = new Array(5, 4, 3, 6, 7, 9, 10);

// console.log(arr3.sort((a, b)=>{
//     return b - a;
// }));
// arr3.forEach((elem, index, array)=>{
//     console.log("Element : "+elem+" Index : "+index+" Array "+array);
// })
for (const [elem, index] of arr3.entries()){
    // console.log("Element : "+elem+" Index : "+index);
}
const getSum = arr=>{
    let sum = 0;
    for (let elem of arr)
        sum += elem;
    return sum;
}
console.log(getSum(arr3));
