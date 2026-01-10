//this is my first code
/** 
* *This is a importent comment
* ! This is warning comment.
* ? This is a question comment.
* TODO: This is a todo comment
*/
function buttonclicked(){
    console.log('Button was Clicked.');

}
function changetext(){
    document.getElementById('first').innerHTML='The Para was Changed.';
    document.getElementsByTagName('h1')[0].style.color = 'red';
} 
console.log("This will be executed by node");
console.log(4+5*20);
console.error('Just want to see what will happen');