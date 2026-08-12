console.log(this);
const newObj = {
    name: "Vivek",
    greet: ()=>{
        console.log("Hello ", this.name);
        
    },
}
console.log("Test", newObj.greet())
