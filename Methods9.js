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













*/







