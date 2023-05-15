
Array.prototype.removeDuplicatesAsync =  function() {
    const uniqueArrayPromise =  removeDuplicates(this);
    uniqueArrayPromise.then(result => console.log(result));
  };
  
   function removeDuplicates(array) {
    return new Promise(resolve => {
        const itemSet = Array.from(new Set(array));
        resolve(itemSet);
    });
  }

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

