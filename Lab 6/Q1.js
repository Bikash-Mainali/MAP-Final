
//returns promise since we have used async
async function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return { prime: false };
        } else {
            return { prime: num > 1 };
        }
}

async function isPrimeAsync(num) {
    try {
        const promiseResult = await isPrime(num);
        console.log(promiseResult);
    }
    catch (e) {
        console.log('Error');
    }
}

console.log('start');
isPrimeAsync(7);
console.log('end');