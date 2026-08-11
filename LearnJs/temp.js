async function Test(){
    let work = true;

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Working...");
            if (work){
                resolve("Work Done");
            }
            else{
                reject("Errorr...");
            }

        },1000);
    });
}

try{
    const res = await Test();
    console.log("Result : ", res);
}
catch(error){
    console.log("Errorr...");
}





// const promiseFunction = new Promise((resolve, reject)=>{
//     //Asynchronous task completed Successfully
//     let booleanVal = false;
//     if (booleanVal){
//         resolve({
//             val1:10,
//             val2:20
//         });
//     }
//     else
//         reject("Error");
// });
// promiseFunction
// .then((msg1)=>{
//     console.log(msg1['val1'], msg1['val2']);
//     return [msg1['val1']*msg1['val1'], msg1['val2']*msg1['val2']];
// })
// .then((msg1)=>{
//     console.log(msg1[0], msg1[1]);
// })
// .catch((msg)=>{
//     console.log("Error : ", msg);
// })
