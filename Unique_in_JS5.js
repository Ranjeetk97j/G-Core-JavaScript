/*
Variable Scope
===============================================================
JavaScript has two scopes:-
1).Global
2).Local

>Global Scope:-
A variable that is declared outside a function definition is a global variable,
and its value is accessible and modifiable throughout your program.
In a web browser, global variables are deleted when you close the browser
window(or tab), but remain available to new pages loaded into the same
window.

global variable ko kanhi se access kiya ja sakta hai progarma me
global variable jab tak web browser open rahega tab tak hi valid 
rahega daise hi browser close hoga global variable bhi delete ho 
jayega.

var a=10;
function add(b)
{
    return(a+b);
}

*/