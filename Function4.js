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

    <script>
        function disp(name1,name2)
        {
            document.write(arguments[0]+" ");
            document.write(arguments[1]);
        }
        disp("india","usa");
    </script>


    <script>
        function disp(name1,name2)
        {
            document.write(arguments.lenghth);
        }
        disp("india","usa");
    </script>

    <script>
        function disp()
        {
           for(var i=0; i<=arguments.length; i++)
           {
            document.write(arguments[i]+" ");
           }
        }
        disp("india","usa","dubai");
    </script>

=====================================
Many Function Arguments
=====================================
IF a function is called with too many arguments, these arguments can be reached
using the arguments object which is a built-in.

Function add(a,b)
{
    document.write("A:-"+a+"B:-"+b);
    document.write("C:-"+arguments[2]+"D:"+arguments[3]);
}
add(10,20,30,40);

    <script>
        function add(a,b)
        {
            document.write("A:-"+a,"B:-"+b+"C:-"+Arguments[2])
        }
        add(10,20,30);
    </script>

=========================================
Default Parameter
=========================================
Syntax:-
Function function_name(para1,para2,para3="value")
{
    block of statement;
}
Syntax:-
function function_name(para1,para2="value",para3)  //problem undefined
{
    block of statement;
}
Syntax:-
function function_name(para1,para2="value1",para3="value2")  //problem undefined
{
    block of statement;
}


<script>
        function add (a,b,c=70)
        {
            document.write("A="+a+"<br>");
            document.write("B="+b+"<br>");
            document.write("C="+c+"<br>");
        }
        add(10,20);

        output:-10 20 70
    </script>


script>
        function add (a,b,c=70)
        {
            document.write("A="+a+"<br>");
            document.write("B="+b+"<br>");
            document.write("C="+c+"<br>");
        }
        add(10,20,30);

        output:-10 20 30
    </script>

    <script>
        function add (a,b=70,c)
        {
            document.write("A="+a+"<br>");
            document.write("B="+b+"<br>");
            document.write("C="+c+"<br>");
        }
        add(10,20);
        output:-10 20 undefine


    </script>    


>JavaScript also allows the use of arrays and null as default values.
Ex:-
 Function add(a, b, c=null)  //null is case sensitive
 {
    document.write("A="+a+"<br>");
    document.write("B="+b+"<br>");
    document.write("C="+c+"<br>");
 }
add(10,20);    //10 20 null
add(10,20,30); //10 20 30
add(10);       //10 undefined null


array:---------
function add(a=[101])
{
    document.write("A="+a[0]+"<br>");
}
add([10]);    //10
add();        //101

==================================================================
Rest Parameters
==================================================================
The rest parameter allows to represent an indefinite number of arguments
as an array.
Syntax:-
function function_name(...args)
{
    block of statement;
}

Syntax:-
function function_name(a,...args)
{
    block of statement;
}

The rest operator must be the last parameter to a function.

    <script>
        function show(a,...args)
        {
            document.write(a+"<br>")
            document.write(args);
        }
        show(10,20,30,40,50);
    </script>
Output:-
10
20,30,40,50


<script>
        function show(a,...args) last me hi rest parameter likhna hai
        {
            document.write(a+"<br>")
            document.write(args[2]);
        }
        show(10,20,30,40,50);
    </script>
Output:-
10
40









*/