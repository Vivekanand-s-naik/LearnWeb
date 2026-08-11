/* 
There are 5 different loops 
1. basic for loop
2. forEach a function based method used to manipulate array elements (arrays and string)
3. For..of used for Array/String traversal
4. For..in used for Object traversal (faser than for forEach)
5. while loop
6. do while
*/

let array = ['abc', 123, 'def', 456, 'ghi', 789, 'jkl', 'ABC']

//using basic for loop
for (let i = 0; i < array.length; i++){
    console.log(`${i} Element : ${array[i]}`);
}

//using For..in 
for (let i of array){
    console.log(`Element : ${i}`);
}

//Using forEach
array.forEach((num, index) =>{
     num = num * 2;
})

for (let i of array){
    console.log(`Element After Update: ${i}`);
}

//using for...Of
const data = JSON.parse('{"abc":123, "def":456, "ghi":789}');
for (const key in data){
    console.log(`${key} == ${data[key]}`);
}