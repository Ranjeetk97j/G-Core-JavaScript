/*
============
Function
============
Function are subprograms which are used to compute a value or perform a taks.

Type of Function:-----

>Library or Built-in functions
 Ex:- valueOf(), Write(), Alert() etc

>User-Defined Function 


======================================================
Creating and Calling a Function
======================================================
Creating a Function:-----------
Syntax:-
Function function_name()
{
    Block of statement;
}
Ex:-
function display()
{
    document.write("Hello World");
}

Calling a Function:------------
Syntax:-
Function_name();
Ex:-
Display();

=======================
Function Rules
========================
>Function name only starts with a latter, an underscore(_)
>Function name cannot start with a number
>Do not use reserved keywords. e.g. else, if etc.
>Function names are case-sensitive in JavaScript

    <script>
        function display()
        {
            document.write("Hello world");
        }
        display();

    </script>


Function with Parameters:-----------
====================================
Syntax:-
Function function_name(parameter1, parameter2,....)
{
    block of statement;
}
Ex:-
function display(name)
{
    document.write(name);
}

>Javascript function definitions do not specify data types for parameters.
>Javascript function do not perform type checking on the passed arguments.
>Javascript function do not check the number of arguments received.

Call Function with Parameter:----------
========================================
Syntax:-
Function function_name(para1,para2.....)
{
    block of statement;
}
Syntax:-
function_name(argument1,argument2);

function display(name)
{
    document.write(name);
}
Ex:-
display("Hello World");


    <script>
        function display(name1,name2)
        {
            document.write(name1,name2);
        }
        display("Ye sahi hai","kya baat kya baat");
    </script>

Function Argument Missing
==========================================
If a function is called with missing arguments, the missing values are set
to undefined.

function add(a,b,c)
{
    document.write("A:"+a+"B:"+b+"C:"+c)
}
add(10,20;)

============================================
Arguments Objects
============================================
The arguments object contains an array of the arguments used when the
function was called. This object contains an entry for each argument
passed to the function, the first entry's index starting at 0. The 
arguments object is not an array. it is similar to an Array, but does
not have any Array properties except length.














*/