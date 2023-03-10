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

if there is function inside a function the inner function can access
outer function's variables but outer function can not access inner
function's variable.
Funtion arguments (parameters) work as local variable inside functions.

function show()
{
    var j="J a local variable of outer function";
    document.write(j + "<br>");
    function innerFun()                                     //ye total sahi hai
    {
        var k="k a local variable of inner function";
        document.write(k+"<br>");
    }
    innerFun();
}
show();


function show()
{
    var j="J a local variable of outer function";
    document.write(j + "<br>");                        // ye access nahi ho payega
    function innerFun()
    {
        var k="k a local variable of inner function"; 
        document.write(j + "<br>");                   // ye access ho jayega
    }
    innerFun();
    document.write(k+"<br>");  
}
show();

=========================
Block Scope
=========================

if(true)
{
    var i=10;
    document.write(i + "<br>");
}

=============================
Variable Hoisting
=============================
Hoisting is JavaScript default behavior of moving declaration to the
top of the function, if define in a function, or the top of the global
context, if outside a function.

var a; ------ variable declaration
a=10; ------- variable Initialization


var a=10;   | var a=10;         |            var a;
 var a;     | document.write(a);|            var b;
 a=10;      | var b=20;         |              a=10;
                                             document.write(a);
                                             b=20;

A variable can be used before it has been declared.
Only variable declarations are hoisted to the top, not variable initialization.

variable hoisting me variable pahle use ho jata hai leking declaration 
baad me use hota hai 

we write like this         compile phase
a=10;                      var a;
document.write(a);         a=10;
var a;                     document.write(a);

we write like this         compile phase
var a=10;                   var a=10;
document.write(a+""+b);        var b;
var b=20;                   document.write(a+""+b);   yanha b ka value undefine milega
                            b=20;

variable hoisting me java script sabse pahel declaration check karta hai
ki kha kha declaration hai baad me value check karta hai.


 <script>
        var i ="hello";
        document.write(i + "<br>");
        function show()
        {
            document.write(i+"<br>");  //(undefine dikhega)
            var i="Sahi hai";
        }
        show();
    </script>

    kyoki

     <script>
        var i ="hello";
        document.write(i + "<br>");
        function show()
        {
            var i;
            document.write(i+"<br>");  //(undefine dikhega)
            var i="Sahi hai";
        }
        show();
    </script>

=====================
Closure
=====================
A closure is a function having access to the parent scope. It preserve
the data from outside.
A closure is an inner function that has access to the outer(enclosing)
function's variables.
For every closure we have three scopes:-

>Local Scope (Own Scope)

>Outer Functions Scope

>Global Scope

 <script>
        function show{
        var j="j a local variable of Outer function";
        document.write(j+"<br>");
        function innerFun()
        {
            var k="k a Local variable of inner Function";    //ye closure hai yanha inner se outer 
            document.write(k+"<br>");                          access kiya ja raha hai
            document.write(j+"<br>");
        }
        innerFun()
    }
    show();
    </script>


===========================
Function Expression
===========================
When we create a function and assign it to a variable, known as
function expression.
Ex:-

var myfun=function show()
{
    document.write("GeekyShows");
};
myfun();

you can't call function expression before function definition.
function ko top se call nahi kar sakte hai function expression me.
Like:---------

myfun();
var myfun=function show()
{
    document.write("GeekyShows");
}

Function expressions in javascript are not hoisted, unlike function
declarations.

    <script>
        //function declaration
        function show()
        {
            document.write("Geekyshows1");
        }
        show();

        //function Expression
        var disp = function show()
        {
            document.write("Geekyshows2");
        }
        disp();
    </script>

=================================
Anonymous Functions
=================================
Anonymous functions allow the creation of functions which have no specified
name.

>Can be stored in a variable
>Can be returned in a function
>Can be pass in a function

Syntax:-
     function()
     {
        body of function;
     };----- semicolm

------------------------------------
Store Anonymous Function in Variable
-------------------------------------
var a=function()
{
    document.write("Geekyshows");
};
a();

var a=function(x,y)
{
    document.write(x+" "+y);
};
a(10,20);

     //Anonymous function
        var disp = function ()
        {
            document.write("Geekyshows2");
        }
        disp();

======================================
Passing Anonymous Function as Argument
======================================

function disp(myfun)
{
    return myfun();
}
document.write(disp(function(){
    return "GeekyShows"
}))


    <script>
        //passing anonymous function as argument
        function disp(myfun)
        {
            return myfun();
        }
        document.write(disp(function (){
            return "Jo bole so nehal."
        }))
    </script>
    </script>


===========================================
Returning Anonymous Function
===========================================
<script>
        function disp(a)
        {
            return function(b)
            {
                return a+b;
            };
        }
        var af=(disp(10));
        document.write(af(20));
    </script>
Output:-30;

=========================================
Arrow Function
=========================================
An arrow function expression (previously, and now incorrectly knows as fat
arrow function) has a shorter syntax compared to function expressions.
arrow functions are always anonymous.
Syntax:-
         ()=>{statements};

var myfun = function show()
{
    document.write("GeekyShows");
};

var myfun =()=>{document.write("GeekyShows");}; this arrow function


    <script>
        // //Function Expression---------------
        // var myfun1 = function show(){
        //     document.write("GeekyShows");
        // };
        // //Anonymous Function---------------------
        // var myfun = function(){
        //     document.write("GeekyShows");
        // };
        //Arrow Function----------------------------------
        var myfun =()=>{document.write("GeekyShow");};
        myfun();
    </script>

=============================
Arrow Function with parameter
=============================
var myfun = (a,b) => {
    document.write(a+" "+b);
};
myfun(10, 20);


======================================
Arrow Function with Default Parameter
======================================
var myfun=(a,b=30)=>{
    document.write(a+""+b);
};
myfun(20);

---------------------------
    <script>
        var myfun = (a,...args) =>{
            document.write(a+" "+args);
        };
        myfun(10,20,50,80,90);
    </script>
---------------------------
    <script>
        var myfun = (a,b)=>(a+b);
        document.write(myfun(10,20));

        // var myfun=c=>c;       //work
        // var myfun=c=>{c};    //won't work
        // var myfun=c=>{return c};  //work
    </script>    


=======================================================================
Immediatedly Invoked Function Expression (IIFE)
=======================================================================
IIFE (Immediately invoked Function Expression) is a JavaScript that runs
as soon as it is defined.
It is a design pattern which is also known as Self-Executing Anonymous 
Function and contains two major parts. The first is the anonymous function
with lexical scope enclosed within the Grouping Operator (). This prevents
accessing variables within the IIFE idiom as well as polluting the global
scope.
The second part is creating the immediately executing function expression(),
through which the JavaScript engine will directly interpret the function.

Ex:-
 (function(){document.write("Geekyshows");})();
 (function(a,b){document.write(a+""+b);})(10,20);


>Avoid creating global variable and functions
>As it doesn't define variable and function globally so there will be 
 no name conflicts.
>Scope is limited to that particular function. 

IIFE function self exutive hota hai ye khud ko call karta hai.

    <script>
        (function (a,b){
            var a=20;
            document.write(a+" "+b);
        })(10,30);
    </script>


======================================================
Typeof Operator
======================================================
The typeof operator is used to get the data type(returns a string)
of its operand. The operand can be either a literal or a data
structure such as a variable, a function, or an object.

Syntax:-
typeof operand
typeof(operand)

Ex:- 
typeof"a";

    <script>
        var a=13;
        document.write(typeof(a) + "<br>");
        document.write(typeof("hello")+"<br>");
    </script>

===========================================
Undefined in JavaScript
===========================================
The undefined type is used for variable or object properties that either
do not exist or have not been assigned a value. The only value an undefined
type can have is undefined.

var a;
document.write(a);     //not assigned a value:- Undefined
document.write(b);     //Not exist:- Undefined Error

    <script>
        var a;
        //value not assigned undefined
        document.write(a + "<br>");
        //b doesn't exist underfined
        document.write(typeof(b)+"<br>");
        //undefined Error
        document.write(b+"<br>");
    </script>

========================
Null in JavaScript
========================
The null value indicates an empty value; it is essentially a placeholder
that represents "nothing". The null value is defined as an empty object
so using typeof operator on a variable holding null shows its type to be 
object.

var a=null;
document.write(a+"<br>");          //null
document.write(typeof(a)+"<br>");  //object

======================================================
undefined Vs Null
======================================================

Undefined means the value hasn't been set, whereas null means the value
has been set to be empty.

====================================================================
Var,let and const
====================================================================

Var:- The scope of a variable declared with var is its current execution
      context, which is either the enclosing function or, for variable
      declared outside any function, global.

      ye function ko local me yadi assign kiya gaya hai toh global me bhi kam karega
      
let:- let allows you to declare variable that are limited in scope to the
      block, statement, or expression on which it is used.

      ye function ko local me yadi assign kiya gaya hai toh local me hi
      sirf kam karega global me nahi kam karega
      
const:-This declaration creates a constant whose scope can be either global
       or local to the block in which it is declared. Global constants do
       not become properties of the window object, unlike var variables. An
       initializer for a constant is required; that is, you must specify its
       value in the same statement in which its's declared which can't be 
       changed later.    
 
ye function ko local me yadi assign kiya gaya hai toh local me hi
      sirf kam karega global me nahi kam karega       

const ok re-assign nahi kiya ja sakta hai     const a=10   (a=20) bad me ye nahi kiya ja sakta hai
const window object properties nahi hota hai

    <script>
        function myvar(){
            var a=10;
            if(true){
                var a=20;
                document.write(a+"<br>");
            }
            document.write(a+"<br>");
        }
        myvar();
        function mylet(){
            let a=40;
            if(true){
                let a=50;
                document.write(a+"<br>");
            }
            document.write(a+"<br>");
        }
        mylet();
    </script>











*/