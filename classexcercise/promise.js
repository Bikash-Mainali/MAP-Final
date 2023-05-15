//promise can only have one state at a time
console.log(1);
const promise =  new Promise(function(resolve, reject){
    console.log('2');
    if(Math.random() > 0.5) {
        resolve('success'); //async
    }
    console.log('asdf')
    reject('err'); //async
});
console.log(promise);

promise
.then(data => console.log(data))
.catch(err => console.error(err));

console.log(3);

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 20)), // 1 
    new Promise(resolve => setTimeout(() => resolve(2), 10)), // 2 
    new Promise(resolve => setTimeout(() => resolve(3), 0)) // 3
    ]).then(console.log);


