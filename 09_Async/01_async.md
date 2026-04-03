->JavaScript 
        |->Synchornous 
        |->Single threaded
these two are the default but in the real world default are not only used

->Execution context
        |->execute one line of code at a time
        |->console log ->1
        |->console log ->2
        |
        |->CALL STACK        MEMORY HEAP
Each operation waits for the last one to complete before executing

Blocking Code       v/s          Non Blocking code
        |                               |
Block the flow of program       Doest not block execution
        |                               |
read file sync                  read file async
//end