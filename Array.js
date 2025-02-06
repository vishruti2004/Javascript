// const myarr = [1,2,3,4,5]
// const myarr1=new Array(1,2,3,4)
// console.log(myarr[1]);
// console.log(myarr1[1]);


// //shallow copy

// //--->same reference orignal change 

// //array methods
// myarr.push(7)
// console.log(myarr);
// myarr.push(9)
// console.log(myarr)
// myarr.pop(9)
// console.log(myarr)

// // myarr.unshift(7)
// // myarr.shift()

// console.log(myarr.includes(1));
// console.log(myarr.indexOf(1));

// const newArray = myarr.join()
// console.log(myarr);
// console.log(newArray);

//slice,splice

// console.log("A ", myarr);
// const myn1 = myarr.slice(1,3)
// console.log(myn1);

// console.log("B" ,myarr);
// const myn2 = myarr.splice(1,3);
// console.log(myn2); 


// console.log(myn1);


const language = ['c','c++','java'];
console.log(language);

const framework = ['react.js','node js','next.js'];
console.log(framework);

// language.push(framework);
// console.log(language)

// language.concat(framework);
// console.log(language)


// const add = language.concat(framework);
// console.log(add)

const add =[...language,...framework];
console.log(add)

const mix_array = [1,2,[4,7],3,8,9,[5,[8,0]]]
console.log(mix_array)

// const real_array = mix_array.flat(Infinity);
const real_array = mix_array.flat(1);

console.log(real_array);




