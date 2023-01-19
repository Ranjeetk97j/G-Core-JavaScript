/*
========================================================================
    Concat () Method
========================================================================
The concat() method is used to merge two or more arrays. This method
does not change the exsting arrays, but instead returns a new array.
Syntax:- new_array=old_array.concat(value1,value2,value_n);
         new_array=old_array1.concat(old_array2,old_array_n);
Ex:-
     var geek1=["Rahul","Sonam","Sumit"];
     var new_geek=geek1.concat("Raj","Rohit");
     
     var geek1=["Rahul","Sonam","Sumit"];
     var geek2=["Raj","Rohit"];
     var new_geek=geek1.concat(geek2);

    <script>
        var geek=["Rahul","Sonam","Sumit"];
        //concat values
        var new_geek=geek.concat("Raj","Rohit");
        document.write(new_geek);
    </script>


    <script>
        var geek=["Rahul","Sonam","Sumit"];
        var geek1=("Raj","Rohit");
        //concat values
        var new_geek=geek.concat(geek1);
        document.write(new_geek);
    </script>


===================================================================
Joins() Method
===================================================================
The join() method joins the elements of an array into a string, and
returns the string. The elements willbe separated by a specified
separator. The default separator is comma(,).
Syntax:-
         array_name.join(separator);
Ex:-
     var geek=["Rahul","Sonam","Sumit"];
     geek.join("/")            //Rahul/Sonam/Sumit
     geek.join("or")           //Rahul or Sonam or Sumit
     geek.join("")             //RahulSonamSumit


    <script>
        var geek=["Rahul","Sonam","Sumit"];
        var new_geek=geek.join("/");
        var new_geek1=geek.join("or");
        var new_geek2=geek.join(geek);
        document.write(new_geek + "<br>");
        document.write(new_geek1+ "<br>");
        document.write(new_geek2+"<br>");
    </script>    
</body>

=================================================================
Reverse () Method
=================================================================
The reverse() method reverses the order of the elements in an array.
Syntax:- array_name.reverse();
Ex:- geek.reverse();

    <script>
        var geek=["Rahul","Sonam","Sumit"];
        geek.reverse();
        document.write(geek);
    </script>  

=================================================================
Slice () Method
=================================================================
The slice() method returns a shallow copy of a portion of an array
into a new array object select from begin to end (end not included).
The original array will not be modified.
Syntax:-array_name.slice(begin,end)

Start:-
>if begin is undefined, slice begins from index 0.
>if begin is greater than the length of the sequence, an empty is returned.
>A negative index can be used, indicating an offset from the end of the
 sequence. slice(-2) extracts the last two elements in the sequence.

End:-
>If end is omitted,slice extracts through the end of the sequence(arr.length).
>If end is greater than the length of the sequence, slice extracts through to 
 the end of the sequence (arr.length).
>A negative index can be used, indicating an offset fro the end of the 
 sequence. slice(2,-1) extracts the third element through the second-to-last
 element in the sequence.
>slice extracts up to but not including end.

Ex:---
    <script>
        var geek=["Rahul","Sonam","Sumit","Rohit","Jitesh","Birender"];
        var new_geek=geek.slice(1,3);
        document.write(new_geek+"<br>");
        var new_geek=geek.slice(-3,-2);
        document.write(new_geek);
    </script> 


======================================================================
toString() Method
======================================================================
The toString() Method returns a string containing the comma-separated
values of the array. This method is invoked automatically when you
print an array. It is equivalent to invoking join() method without any
arguments. The returned string will separate the elements in the array
with commas.
Syntax:- array_name.toString();
Ex:-
     var geek=["Rahul","Sonam","Sumit","Raj","Rohan"];
     geek.toString();

    <script>
        var geek = ["Rahul","Sonam","Sumit","Raj"];
        geek.toString();
        document.write(geek);
    </script>

=======================================================================
Array.isArray() Method
=======================================================================
The Array.isArray() method determines whether the passed value is an 
Array. This function returns true if the object is an array, and false
if not.
Syntax:- Array.isArray(value);
Ex:-
      var result=Array.isArray(["Rohan","Raj"]);  //true
      var result=Array.isArray("IAmString");      //false

    <script>
        var result1=Array.isArray(["Rose","Kunal"]);
        document.write(result1);
    </script>

=======================================================================
Splice() Method
=======================================================================
The splice() method changes the contents of an array by removing existing
elements and/or adding new elements. This method changes the original array.
Syntax:-
           array_name.splice(start,deletecount,replacevalue);

Start:- The first argument start specifies at what position to add/remove items,
       use negative values to specify the position from the end of the array.
       
Deletecount:- The second argument deletecount, is the number of elements 
            to delete beginning with index start.
Replacevalues:-replacevalues are inserted in place of the deleted elements.
          if more than one separate it by comma.

    <script>
        var geek=["Rahul","Sonam","Sumit","Raj","Rohan"];
        geek.splice(2,2);  //Rahul,Sonam,Rohan
        geek.splice(2,0,"Dell","HP"); //Rahul,Sonam,Dell,HP,Sumit,Raj,Rohan
        document.write(geek);
    </script>

=========================================================================
IndexOf() Method
=========================================================================
This method allows to easily find the occurrence of an item in an array.
>If the item not found, it returns -1.
>The search will start at the specified position, or at the beginning if no 
 start position is specified, and end the search at the end of the array.
>If the item is present more than once, the indexOf method returns the
 position of the first occurrence.

Syntax:- var position=array_name.indexOf(item,start);
Ex:- var position=geek.indexOf("Rohit",2);
 
    <script>
        var geek=["Rahul","Sonam","Raj","Sumit","Raj"];
        var position=geek.indexOf("Raj");
        document.write(position);
    </script>

==========================================================================
Fill() Method
==========================================================================
The fill() method fills all the elements in an array with a static value.
Syntax:- array_name.fill(value,start,end)
Ex:- geek.fill("Done") //all elements fill with Don

    <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        geek.fill("Don",1,3);
        document.write(geek); //Rahul,Don,Don,Sumit
    </script>

    <script>
        var new_array=new Array(3).fill("Veeru");
        document.write(new_array); //Veeru,Veeru,Veeru
    </script>


===========================================================================
Unshift() Method
===========================================================================
The unshift() method adds one or more elements to the beginning of an
array and returns the new length of the array.
This method changes the length of an array.
Syntax:-
Array_name.unshift(value1,value2,value_n);
Ex:- geek.unshift("Dell","HP");
     var geek_length=geek.unshift("Dell","HP"); //it will return length of new array.
      
    <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        geek.unshift("Dell","HP");
        document.write(geek); //Dell,HP,Rahul,Sonam,Raj,Sumit
    </script>

===========================================================================
Push() Method
===========================================================================
The push() method adds one or more elements to the end of an array and returns
the new length of the array.
The new item will be added at the end of the array.
This method changes the length of the array.
Syntax:-
         Array_name.push(value1,value2,value_n);
Ex:-  geek.push("Dell","HP");
    var geek_length=geek.push("Dell","HP"); //it will return length of new array.
    
        <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        geek.push("Dell","HP");
        document.write(geek); //Rahul,Sonam,Raj,Sumit,Dell,HP
    </script>

============================================================================
Shift() Method
============================================================================
The shift() method removes the first element from an array and returns that 
removed element. This method changes the length of the array.
Syntax:- array_name.shift();
Ex:- geek.shift();

    <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        geek.shift();
        document.write(geek);
    </script>

    <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        var geek_removed=geek.shift();
        document.write(geek+ "<br>");
        document.write(geek_removed);
    </script>

========================================================================
pop() Method
========================================================================
The pop() method removes the last element from an array and returns that
removed element. This method changes the length of the array.
Syntax:- array_name.pop();
Ex:-  geek.pop();

    <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        geek.pop();
        document.write(geek+ "<br>"); //Rahul,Sonam,Raj
    </script>

    <script>
        var geek=["Rahul","Sonam","Raj","Sumit"];
        var geek_removed=geek.pop();
        document.write(geek_removed); //Sumit
    </script>

========================================================================
Boolean
========================================================================
Boolean is the built-in object corresponding to the primitive Boolean 
data type. JavaScript boolean can have one of two value: true or false.
> Primitive Values:-----
  var primitiveTrue = true;
  var primitiveFalse = false;

> Boolean Function:-----
  var functionTrue = Boolean(true);
  var functionFalse = Boolean(false);

> Boolean Constructor:-----  
  var constructorTrue = new Boolean(true);
  var constructorFalse = new Boolean(false);

If value parameter is omitted or is 0, -0, null, false, NaN, undefined, or
the empty string(""), the object has an initial value of false.
Ex:-
var a=Boolean() //false
var a=Boolean(0) //false
var a=Boolean(-0) //false
var a=Boolean(NaN) //false
vara a=Boolean(null) //false

==========================================================================
String
==========================================================================
String is the built in object corresponding to the primitive string
data type. String is group of characters.
Ex:-
   "Welcome"
   "Geeky Shows"
   "12345"

>Pimitive:-----
var str="Hello GeekyShows"; |
var str='Hello GeekyShows'; |--String
var str=`Hello GeekyShows`; |

>Constructor:----
var str=new String("Hello GeekyShows");|
var str=new String('Hello GeekyShows');|--Object
var str=new String(`Hello GeekyShows`);|

    <script>
        var str=("Hello GeekyShows");
        document.write(typeof(str)+"<br>");//String
        var str=new String("Hello GeekyShows");
        document.write(typeof(str)); //object
    </script>

==================================================================
String Concatenation
==================================================================
var str1="Hello";
var str2='GeekyShows';
document.write(str1+str2);
document.write(str1+"Geekyshows");
document.write(str1+"Something"+str2);

    <script>
        var str1="Hello";
        var str2="Geekyshows";
        document.write(str1+" "+str2);
    </script>

>Concat() Method:-----
The concat() method accepts any number of arguments and returns the 
string obtained by concatenating the arguments to the string on which
it was invoked.
Syntax:- string.concat(string1,string2,string_n);
Ex:-
    "Hello".concat("Something","Geekyshows");
    var str1="Hello";
    var str2='GeekyShows';
    var new_str=str1.concat(str2);
    var new_str=str1.concat("Something",str2);


 <script>
Ex:-    var new_str="Hello".concat("Something","Geekyshows");
        document.write(new_str);

Ex:-    var str1="Hello";
        var str2="Geekyshows";
        var new_str=str1.concat(str2);
        document.write(new_str);
    </script>

========================================================================
Escape Notation
========================================================================
> \0  the NULL character
> \'  single quote
> \"  double quote
> \\ backslash
> \n new line
> \r carriage return
> \v vertical tab
> \t tab
> \b backspace
> \f form feed

    <script>
       console.log("Hello \n World");
    </script>

=========================================================================
Template Literal/ Template Strings
=========================================================================
Template literals are string literals allowing embedded expressions. You 
can use multi-line strings and string interpolation features with them.
Template literals are enclosed by the back-tick('') character instead of 
double or single quotes.

var str1="Hello GeekyShows";
var str2='Hello GeekyShows';
var str3=`Hello GeekyShows';

>Multiple Line String:-----
var str="Hello
GeekyShows";

var str="Hello \n GeekyShows";

var str=`Hello Line 1
Geekyshows Line2`;

var str = `Hello Line 1
Something Line 2
Geekyshows Line3`;

>String Interpolation:----------------
Template literals can contain placeholders. These are indicated by the dollar
sign and curly braces (${expression})

var str1="Hello GeekyShows";
var str2='Hello GeekyShows';
var str3=`Hello GeekyShows`;
document.write(str1);
document.write(str1+"World");

document.write(`${str1}World`);
document.write(`${5+4}World`);
document.write(`${a+b}World`);
document.write(`${functionCall}World`);

    <script>
       var str="Hello";
       document.write(`${5+4} world ${str}`); //9 world Hello
       document.write(`${str} World`); //Hello World
    </script>

    <script>     
       var a=4;
       var b=8;
       function myfun(say){
        return say;
       }
       document.write(`${a+b} world`); //12 world Hello
       document.write(`${myfun("Hello")} World`); //Hello World
    </script>

===========================================================================
Tagged Template
===========================================================================
Tagged Templates are advanced form of template literal. Tags allow you to
parse template literals with a function. The first argument of a tag 
function contains an array of string values. The remaining arguments are
related to the expressions. In the end, your function can return your
manipulated string.










*/







