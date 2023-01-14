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







*/