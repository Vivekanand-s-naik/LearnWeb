// const t1 = performance.now()
// for (let i = 0; i < 10000; i++){
//     let para = document.createElement('p');
//     para.textContent = `This is para : ${i+1}`;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();
// console.log(`Total Time 1 : ${t2 - t1}`);


// Best and optimale way to add multiple element to DOM
// const t5 = performance.now();
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 10000; i++){
//     let para = document.createElement('p');
//     para.textContent = `This is para : ${i+1}`;
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);
// const t6 = performance.now();

// console.log(`Total Time 3 : ${t6 - t5}`);


// const t3 = performance.now()
// let parentDiv = document.createElement('div')
// for (let i = 0; i < 10000; i++){
//     let para = document.createElement('p');
//     para.textContent = `This is para : ${i+1}`;
//     parentDiv.appendChild(para);
// }
// document.body.appendChild(parentDiv);
// const t4 = performance.now()
// console.log(`Total Time 2 : ${t4 - t3}`);

let text = "hello"
setInterval(() => {
    console.log("Hello AFter 100 millis sec"+ text);
}, 100, text);