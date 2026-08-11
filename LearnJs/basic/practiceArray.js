// let array = [5, 1, 3, 9, 7, 10, 11];

// //aesc sorting
// let aescSortedArr = array.toSorted((elem1, elem2)=> elem1 - elem2);
// console.log("Aescending Sorted Array : ", aescSortedArr);

// //desc Sorting
// let descSortedArr = array.toSorted((elem1, elem2) => elem2 - elem1);
// console.log("Descending Sorted Array : ", descSortedArr);

// //Array Slicing
// console.log(array.slice(3, array.length));

// //Array Splicing
// // array.splice(0, array.length);

// console.log(`Original Array : ${array}`);

// //Map Function
// array = array.map((num, index)=>{
//     return (num**num);
// });
// console.log(` Array : ${array}`);

// let filteredArray = array.filter((num, indx) =>{
//     return num % 2 === 0;
// })
// console.log(`Filtered Array : ${filteredArray}`);
// //Reduce Function
// array = array.reduce((acc, curr) =>{
//     return acc + curr;
// }, 0);
// console.log("Reduced Array : ", array)


// function compSum(sumStr, sum){
//     let strSumArr = sumStr.split(',');
//     strSumArr = strSumArr.map((elem) =>{
//         return BigInt(elem);
//     })
//     console.log(strSumArr);
//     strSumArr = strSumArr.reduce((acc, curr) =>{
//         return BigInt(acc) + curr;
//     }, 0);
//     console.log('strSumArr : ', strSumArr);
//     console.log('Actual Expected Sum :', BigInt(sum))
//     return strSumArr === BigInt(sum);
// }








// let numStr = '3125,1,27,387420489,823543,10000000000,285311670611'
// let res = '295699917796'

// console.log(compSum(numStr, res));
// console.log(3125 + 1 + 27 + 387420489 + 823543 + 10000000000 + 285311670611);

//Filter only the string values 
// function strFilter(textArr){
//     let arr =  textArr.filter((elem)=>{
//         return typeof elem === 'string';
//     });
//     return arr;
// }
let arr = ['abc', 12, 'asd', 423, 'asd'];
let obj = {
    name: "Vivekanaand S Naik",
    role: "senior Developer and Manager",
    salary: "30LPA"
};
for (let key in obj){
    console.log(obj[key]);
}

for (let key in arr){
    console.log([key]);
}


var devdas = () =>{
    console.log("hello")
};
devdas();