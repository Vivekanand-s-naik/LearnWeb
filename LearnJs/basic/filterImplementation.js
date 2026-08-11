// let arr = [0,10,20,30];

// function applyFilter(arr = [], fn){
//     let resArr = [];
//     for (let elem of arr){
//         if (fn(elem)){
//             resArr.push(elem);
//         }
//     }
//     return resArr;
// }

// // function gtThen10(num){
// //     return num  > 10;
// // }

// // let res1 = arr. filter(gtThen10);
// // console.log(res1);


// let res = applyFilter(arr, (num) => (num >10));


// console.log(res);

let arr = [1,2,3];

function firstIndex(n, i) { 
    return i === 0; 
}

var filter = function(arr, fn, ...args) {
    console.log(args);
    
    let resArr = [];
    for(let elem of arr){
        if (fn(elem, args)) resArr.push(elem);
    }
    return resArr;
};

console.log(filter(arr, firstIndex));


