# Module2-A2---JavaScript-language

In this modue, I defined an Array and practiced how to access an Array, and among the many ways to define a function, I practiced the arrow fat function.

The following method of defining a function is familiar as it is used in Python and many other languages.

```
function f_name (parameters) {
    actions...
 }
```

In JavaScript, thers's another way to define a function, which is called by Arrow function. 

```
const f_name = (parameters) => { }
```
or, if there's only one paramter and one action,
```
const f_name = parameter => action
```

for example, if I define greeTheStudents function in the following way, the result is going to be "Hello there Name". In this case, even the return statement is not needed. 

```
const greetTheStudents = studentName => `Hello there ${studentName}`;
```
