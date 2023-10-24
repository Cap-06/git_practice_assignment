// Check whether a number is Prime or not..

let num = 6;
 let c = 0;
 for(let i=1; i<=num; i++){
    if(num%i==0){
        c++;
    }
  }
  if(c==2){
    console.log("Is a prime Number");
  }else{
    console.log("Not a prime Number");
 }   
