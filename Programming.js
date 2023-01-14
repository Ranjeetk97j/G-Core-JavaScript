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

Write funnstion in javascript.
==============================================

Document.write():- This function is used to write arbitrary HTML and content into
                   page. if we use this function after and HTML document is fully
                   loaded. will delete all existing HTML. It is used only for 
                   testing purpose.
Ex:- Document.write("hello world");
     Documemnt.write(variable);
     Document.write(4+2);
     Document.write("Hello World.<br>");
     Document.write("Hello World.<br>"+ variable + "<br>");











*/