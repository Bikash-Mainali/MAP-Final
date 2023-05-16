console.log('start');
async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
    //return 1;
}
async function run() {
    console.log('inside run')
    try {
        await thisThrows();
        console.log(await thisThrows());
    } catch (e) {
        console.log('Caught the error....');
    } finally {
        console.log('We do cleanup here');
    }
    console.log('heyyyy');
}
run();
console.log('end');