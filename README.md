# Promises-and-Async-Await

### Promises
- Promise is an object that can be in one of these states: 
-> **fulfilled**: successfully got data;
-> **rejected**: failed to get data;
-> **pending**: waiting for answer

Promises are used to request data asynchronously, meaning that the program continues to run while we wait for the data to return - while the promise is pending.
You can have more than one promise pending - they load in parallel.

### Async/Await
- Syntax sugar for promises, the code can be easier to read.
- Useful for simpler cases of using promises or when you want your program to behave like synchronous code (work sequentially)

Inside a function marked as **async**, you are allowed to place the **await** keyword in front of an expression that returns a promise. When you do, the execution of the async function is paused until the promise is resolved.