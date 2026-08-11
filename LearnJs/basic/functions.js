function trackFunction(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let stri = "abd";
stri.toUpperCase();

function amountOperation(){
    let balance = 0;
    return {
        deposit(amt){
            balance += amt;
        },
        getBalance(){
            return balance;
        }
    };
}
//design HOF to take name from function and then modiy it through some other function
function getname(name){
    return name.toUpperCase();
}
function manuplateFunction(nameFunc, nme){
    name = nameFunc(nme);
    return {
        fullNameFunc(lastName){
            return name.concat(lastName);
        },
        upperCassedName(lastName){
            return manuplateFunction(nameFunc, nme).fullNameFunc(lastName).toUpperCase();
        }
    }
}

const nameOperation = manuplateFunction(getname, "Vivekanand");
console.log(nameOperation.fullNameFunc("Naik"));
console.log(nameOperation.upperCassedName("Naik"));