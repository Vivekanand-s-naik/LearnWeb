const worker = new Worker('worker.js');
console.log("Check-0");
worker.postMessage({
    data1: 100,
    data2: 150
});
console.log("Check-1");
worker.onmessage = (event)=>{
    console.log("data After Processing : ", event.data);
}
console.log("Check-2");
worker.onerror = (error)=>{
    console.error(error.message)
}
console.log("Check-3");