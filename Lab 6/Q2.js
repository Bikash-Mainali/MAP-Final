
//return promise object
async function removeDuplicates(array) {
    return Array.from(new Set(array));
}

Array.prototype.removeDuplicatesAsync = async function () {
    console.log(removeDuplicates(this)); //promise object
    try {
        const uniqueArrayPromise = await removeDuplicates(this);  //this  = [4,1,5,7,6,1,4]
        console.log(uniqueArrayPromise); //gives promise value since we have use await before
    }
    catch (e) {
        console.log("Error");
    }
    finally {
        console.log("connection close : file, DB,...")
    }
};

console.log(`start`);
[4, 1, 5, 7, 6, 1, 4].removeDuplicatesAsync();
console.log(`end`);