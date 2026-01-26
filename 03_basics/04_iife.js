// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();       //iife function ko immediatly acces karne ke liye use karte hai to usko pata nahi hota ki kaha break kare to ; ka use karte hai taki line break hojaye

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//why we use IIFE because global scope ke pollution se problem hoti hai kaie bar to uss global scope ke pollution ya variables ko haane ke liye IIFE ka use karte hai