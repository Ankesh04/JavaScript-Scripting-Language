/*THIS keyword
it refers to an object that is executing the current piece of code.
window object is the default function in the javascript browser
*/

const student ={
    name : "ankesh",
    age:23,
    eng:90,
    math:98,
    phy: 91,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
        //we have used this keyword to take variable from the object
        //this represent the object which is been called
    }
}
