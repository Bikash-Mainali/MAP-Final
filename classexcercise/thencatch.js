
const makePizza = function(isPizzaReady){
const promise = new Promise(function(resolve, reject){
    if(isPizzaReady){
        resolve('Pizza is ready');
    }
    else{
        reject('Pizza is not ready yet');
    }
})
return promise;
}

makePizza(false)
.then(data => console.log(data))
.catch(err => console.log(err));