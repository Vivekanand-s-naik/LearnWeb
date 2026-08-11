//My Way of Doing It 
// const mainConatainer = document.querySelector('.main-container');

// mainConatainer.addEventListener('click', (e)=>{
//     switch ( e.target.id){
//         case 'fpara':
//             console.log("First para  Clicked");
//             break;
//         case 'spara':
//             console.log("Second Para Clicked");
//             break;
//         case 'tpara':
//             console.log("Third Para Clicked");
//             break;
//         case 'frpara':
//             console.log("FOurth Para Clicked");
//             break;
//         default:
//             console.log(`Unknown : ${e.target}`);
//     };
    
// });

function triggerAlert(e){
    if (e.target.nodeName === 'SPAN'){
        confirm("R U Sure");
        return
    }
    alert('You Clicked On : '+ e.target.id);
}
// const paraList = document.querySelectorAll('p');
// for (let i = 0; i < paraList.length; i++){
//     let para = paraList[i];
//     para.addEventListener('click', triggerAlert);
// }


// console.log('starting : '+ new Date().getTime());
// const parentELem = document.querySelector('.main-container');
// console.log('Terminated : '+ new Date().getTime());

// console.log('starting : '+ new Date().getTime());
// const parentELemm = document.getElementsByClassName('.main-container');
// console.log('Terminated : '+ new Date().getTime());
// parentELemm[0].addEventListener('click', triggerAlert);

const t1 = performance.now();
console.log(t1);
for(let i = 0; i < 1000; i++){
    let elem = document.createElement('p');
    elem.textContent = "This is Para : "+i+1;
    document.body.appendChild(elem);
}
const t2 = performance.now();
document.addEventListener('DOMContentLoaded', ()=>{
    const mainContainer = document.querySelector('.main-container');
    mainContainer.addEventListener('click', (e) =>{
        if (e.target.id ==="frpara"){
            let textScript = document.createElement('script');
            textScript.innerHTML =`
            let elem = document.getElementById("frpara");
            elem.style.backgroundColor = "red";`
            mainContainer.insertAdjacentElement('afterend', textScript);            
        }
    });
});

console.log(t2);
console.log("Total Time For Execution : "+ (t2 - t1));