function hello(y,s){
    const a = "varA";
    const b = "varB";

    return function(){
        console.log(a,b,s,y);
    }
}

const ans = hello("ff");
ans();

/* 

       A closure is a function having access to the parent scope, 
      even after the parent function has closed.

 */