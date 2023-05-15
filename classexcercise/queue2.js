
const promise1 = new Promise((resolve, reject) => {
    console.log(`Promise starts`)
    resolve(`Promise result`)
    console.log(`Promise ends`)
 })
 console.log(`Code starts`)
 promise1.then(console.log)
 console.log(`Code ends`)