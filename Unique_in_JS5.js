/*
Variable Scope
===============================================================
JavaScript has two scopes:-
1).Global
2).Local
=============
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

var a=10;    //Global Variable
function add(b)
{
    return(a+b); // a is gloable variable
}
document.write(add(20));

Ex:--------------
<script>
var i="i am global variable";
function show()
{
    document.write(i + "<br>");  //inside function
}
show();
document.write(i + "<br>");  //outside function

function disp(){
    document.write(i + "<br>"); //inside function kisi dusre function me bhi access hota hai
}

<script>


=================================
Local Scope
=================================
A variable that is declared inside a function definition is local.
it is created and destroyed every time the function is executed, and
it cannot be accessed by any code outside the funtion. inside a function,
if a variable has not been declared with vair it is created as a global
variable.

ye kisi scope ke under hi access kiya ja sakta hai

function add(b)                             function add(b)
{                                           {
    var a=10; //local variable               a=10;   //global variable yanha pe var nahi hai
    return (a+b);                            return (a+b);
}                                            }
document.write(add(20));                     document.write(add(20));

EX:-

function show()
{
    var j="i am local variable";
    document.write(j + "<br>"); yanha access ho jayega
}
show();
document.write(j +"<br>"); yanha access nahi ho payega

Note point:-
yadi var remove kar denge toh Global ban jayega.














*/