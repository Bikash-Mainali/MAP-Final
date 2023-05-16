const isPrime = num => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return resolve({ prime: false });
        reject({ prime: true });

    })
}

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');