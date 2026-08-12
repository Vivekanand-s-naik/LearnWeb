function throttleExec(func, interval){
    let start = 0;
    return function(...args){
        let cur = Date.now();
        if (cur - start >= interval){
            func.apply(this, args);
            start = cur;
        }else{
            //ignore or reject
            console.log("ignore or reject");
            return
        }
    }
}
function sendRequests(){
    console.log("Hello : "+Date.now().toLocaleString());
}

const throttleSHello = throttleExec(sendRequests, 1000);

throttleSHello();
throttleSHello();
throttleSHello();
throttleSHello();
throttleSHello();