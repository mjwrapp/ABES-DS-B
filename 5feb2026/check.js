function myFunction(){
    console.log('starting a task...');
    let sum = 0;
    for(let i = 0; i< 10000000000; i++){
        sum += i;
    }
    console.log("Task finished");
    return sum;
}
console.log("before the function call");
let result = myFunction();
console.log("after the function call");
console.log("result:", result);