// Check whether a number is Prime or not..

let num = 6;
 let count = 0;
 for(let i=1; i<=num; i++){
    let count = 0;
    if(num%i==0){
        count++;
    }
  }
  if(count==2){
    console.log("Is a prime Number");
  }else{
    console.log("Not a prime Number");
 }
