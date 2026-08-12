function debouncedExe(func, timeInterval){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeInterval)
    }
}


const user = {
    name : "Alice",
    greet : function () {
        console.log(this.name);
    }
}

user.greet = debouncedExe(user.greet, 1000);
user.greet();
user.greet();
user.greet();
user.greet();
