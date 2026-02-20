function myFunction(){
  console.log("Starting a task..");
  setTimeout(()=>{
  let sum=0;
  for(let i=0;i<1000000;i++){
    sum+=i;
  }
   console.log("Task finished");
  console.log(sum);
  },0);
}
console.log("Before the function call");
myFunction();
console.log("after the function call");
