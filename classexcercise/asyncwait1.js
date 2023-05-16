
console.log('start');
async function test() {
    return 1; //new Promise(resolve => resolve(1));
}
console.log(test());

test().then(console.log);
console.log('end');

