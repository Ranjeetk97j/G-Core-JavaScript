/*
Way of adding JavaScript

1). Inline
    :-Inside head Tag
    :-Inside body Tag

2). External File
    :-Inside head Tag
    :-Inside body Tag    

 <Script>

 </Script>
 
(Inline):------------------------------------------------------------------------------

 :-Inside head Tag
 ===================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratice</title>
     <script type="text/javascript">
     document.write("Hello HTML");
     </script>
</head>
<body>
 
    <h1>
        style = color:red; I am Heading
    </h1>

</body>
</html>

:-Inside body Tag
===================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratice</title>
</head>
<body>
    <h1>
        style = color:red; I am Heading
    </h1>
     <script type="text/javascript">
      document.write("Hello HTML");
     </script>

</body>
</html>

(External):--------------------------------------------------------------

iss me humlog html file me javaScript na likh kar humlog alag se koi file 
banate hai .js name ke aur isko link kar dete hai HTML file se.

:-Inside head Tag
====================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratice</title>
     <script src="p.js" type="text/javascript">
     </script>
</head>
<body>
 
    <h1>
        style = color:red; I am Heading
    </h1>
        

</body>
</html>

-Inside body Tag
==================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratice</title>
     
</head>
<body>
 
    <h1>
        style = color:red; I am Heading
    </h1>
    <script src="p.js" type="text/javascript">
        
    </script>
        
</body>
</html>


Note point:- You can add lots of javascript file into html document.
   <script src="p.js" type="text/javascript"></script>
   <script src="p.js" type="text/javascript"></script>
   <script src="p.js" type="text/javascript"></script>
   <script src="p.js" type="text/javascript"></script>

   inline & external line ko ek sath nahi execute kar sakte hai lekin alag alag
   script me run kar sakte hai

   <script src="p.js" type="text/javascript"></script>|
    document.write("hello world");                    |  Ye nahi kar sakte hai

    <script src="p.js" type="text/javascript"></script>|
                                                       |
    <script type="text/javascript">                    | ye ho sakta hai
    document.write("hello world");                     |
    </script>                                          |


*/

/*

===============================================================================================================================================================
===============================================================================================================================================================
Write funnstion in javascript.
===============================================================================================================================================================
===============================================================================================================================================================

Document.write():- This function is used to write arbitrary HTML and content into
                   page. if we use this function after and HTML document is fully
                   loaded. will delete all existing HTML. It is used only for 
                   testing purpose.
Ex:- Document.write("hello world");
     Documemnt.write(variable);
     Document.write(4+2);
     Document.write("Hello World.<br>");
     Document.write("Hello World.<br>"+ variable + "<br>");


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratice</title>
     
</head>
<body>
 
    <script>
        document.write("Hello world");
    </script>
    <scriptt>
        document.write(4+5);
    </scriptt>
    <script>
        var name="hello bhai"
        document.write(name + " " + "kya haal chal");
    </script>


</body>
</html>

=====================
Window.alert():-  jab aap forcely chahte hai ki user iss box ko dekhe.
======================
This function is used to display data in alert dialog box. alert really 
should be used only when you truly want to stop everything and let the 
user know something. 
Ex:-
Window.alert("Hello World");
window.alert(Variable);
window.alert(4+5);
window.alter("Hello World"+Variable);

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratice</title>
     
</head>
<body>
 
    <script>
        window.alert("Hello World");
    </script>
    <script>
        window.alert(4+5);
    </script>
    <Script>
        var name="please write correct code"
        window.alert(name+"Thik hai");
    </Script>


</body>
</html>


===================
Identifier
===================
An identifier is a name having a few letters, numbers and special charcters
_(underscore). It is used to identify a variable, function, symbolic constant
and so on.
Ex:-
     X2
     PI
     Sigma
     matadd


====================
Variables
====================
A variable is an identifier of a name which is used to refer a value.
A variable is written with a combination of letters, numbers and special
characters _(underscore) and $ (dollar) with the first letter being an
alphabet.
Ex:- C, fact, b33, total_amount etc.

Rules:-
1). Variable can contain combination of letters, digits, underscore(_),
    and dollar signs($).
2). Must begin with a letter A-Z or a-z or underscore or dollar sign
3). A variable name cannot start with a number
4). Must not contain any space characters
5). JavaScript is case-sensitive
6). Can't use reserved keywords


Note point:-
--------------
Keywords or Reserved Words
1).var   2).Delete  3).for 4).let  5).Break  6).Super  7).Void  8).Case
9).do    10).Static  11).Function  12).New  13).Switch  14).While  
15).interface 16).Catch 17).else 18).if 19).package 20).finally 21).this
22).with 23).class 24).enum 25).default 26).implements 27).private
28). throw 29).yield 30).typeof 31).const 32).export 33).import 34).protected
35).return 36).true 37).continue 38).extends 39).in 40).instanceof 41).public
42).try 43).debugger 44).false


===========================
Data Type in javaScript
===========================
In javaScript we do not need specify type of the variable because it is
dynamically used by javaScript engine.
We can use var data type. it can hold any type of data like String, Number,
Boolean etc.

Primitive Data Type                     Non-Primitive Data Type
     String                                    Object
     Number                                    Array
     Boolean                                   RegExp
     Undefined
     Null

======================================
Declaring Variable
======================================
var roll; |
var name; | These all are undefined.
var price;|

A variable declared without a value will have the value undefined.

note point:- yanha pe koi bhi variable store kar sakte hai kisi bhi 
             data type me.

===================
Initializing Variable
===================
Var roll;
roll=101;

var name;
name="geeky shows";

var price;
price=125.36;

var roll=101;

var name="geeky shows";

var price =125.36;

roll=101;

name="geeky shows";

price=125.36

var ans=true;

var ans=false;

* String are written inside double or single quotes.
* Number are writen without quotes.
* if you put a number in quotes, it will be treated as a text string.

</head>
<body>
    <script>
        var roll;
        roll=101;
        document.write(roll);
        var name="Ranjeet kumar"
        document.write(name);
    </script>
</body>
</html>   

if you re-declare a javaScript variable, it will not lose its value.

var name="Ranjeet kumar";
var name;
document.write(name);
out put will be Ranjeet kumar

* The statements are executed, one by one, in the same order as they are
  written.
* JavaScript programs (and javascript statements) are often called
  javaScript code.
* Semicolons separate JavaScript statements.
* Ending statements with semicolon is not required, but highly recommended.
* JavaScript ignores multiple spaces.
* Use line Break (Enter Key). 

===============================
Comment
===============================
1). Single Line Comment
2). Multi Line Comment

>Single Line Comment
 Single line comments start with //.
 Text between // and the end of the line will be ignored by javascript.

 //you can assign any type of value.

 var imvalue =101;

 var imvalue =101;    // assign any type of value

>Multi Line Comment
Multi-line comments start with (/*) and end with
Any text between (/*) and  will be ignored by javascript.

/*comment here

Adding // in front of a code line changes the code lines from an
executable line to a Comment.
var imvalue=101;
//var imvalue=101;























*/