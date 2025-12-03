/*
*********HOW CODE IS EXECUTED IN JAVASCRIPT**********

JAVASCRIPT EXECUTION CONTEXT
Whatever js file yo have made how it will be executed
what js does is that it runs in two phase

{}--> this our code 
so in this Gobal execution context will be made and if the gec is made it will be refered to variable "this" 

interviewer ask if you run js code in browser then browser's gec is different and nodejs environment is different so what we call browser's gec this value ?
for browser gec this value we call it "window object"

javascript is single threaded iske andar har ek chiz process hoti hai

There are different excecution context:
-GLOBAL EXECUTION CONTEXT
-FUNCTION/FUNCTIONAL EXECUTION CONTEXT
-EVAL EXECUTION CONTEXT

Two phases are:
{} -> Memory Creation Phase
        only the memory is assigned to the variables , they are not executed
   -> Execution Phase
        all the functioning part like plus minus loops are executed here

Example:-
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result = addNum(val1, val2)
let result2 = addNum(10,2)

Now we will see step by step how this is executed
********************************************
1) Global execution (Global Environment)
whatever code we have to run either it is big or small that is run by global execution and it is alocated in "this".
********************************************
2) Memory phase
all the variables are collected and kept and marked as undefined
val1-->undefined
val2-->undefined
addNum-->defination     function ki defination mtlb uske andar ka sara maal chala gaya iske andar
result1-->undefined
result2-->undefied
this is called FIRST CYCLE
********************************************
3)Execution Phase
val1<--10
val2<--5
addNUm me kuch hoga nahi kyuki usko pehle hi define kar chuke hai 
result1 pe addNum pe aagaya and ye addNum makes it own exceution context:
New Variable Environment + Execution Thread
so new execution context is made so two phases will be done again for this:
a)Memory Phase
val1-->undefined
val2-->undefined
total-->undefined      we see inside the funstion
b)Execution phase
num1<--10
num2<--5
total<--15
this total will be returned in the Global Execution 
now all the process of that fucntion is complete so this execution context is deleted

result2  me same new execution context banega and sara process hoga result one ki tarah
********************************************
CALL STACK
to check call stack in browser we go to inspect and then SOURCE->SNIPETS->CALL STACK
LIFO works here 
one()
two()
three()
|            |
|            |
|            |
|            |
|            |
|            |
--------------
|Global      |
|Execution   |
--------------
in this first one is added then after completion it will be removed the same process wil happen with rest of the call function
if there is call function inside call function then one() will be added then two() will be added then two() will be removed after the process has been done then one() will be removed
*/