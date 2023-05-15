const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return getPromise(false);
    return getPromise(true);

}
const getPromise = function (flag) {
    return new Promise(function (resolve) {
        resolve({ prime: flag });
    });
}

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');