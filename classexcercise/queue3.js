const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promise results')}, 1000); // resolve after 1 second
    });
    console.log('Code starts');
    promise.then((result) => {
       console.log(result);
    })
    console.log('I love JS');