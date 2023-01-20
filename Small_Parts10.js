/*
String Length Property
============================================================================
Lenth property returns the lenth of a string.

    <script>
    var str="Hello GeekyShows";
    //including space 
    document.write(str.length);   //16  
    </script>


=============================================================================
charAt Method
=============================================================================
charAt (position) method returns the character at a specified index
(position) in a string.

    <script>
    var str="Hello GeekyShows";
    document.write(str.charAt(9));   //k  
    </script>

=============================================================================
charCodeAt Method
=============================================================================
charCodeAt (position) method returns the unicode of the character at a
specified index in a string.

    <script>
    var str="Hello GeekyShows";
    document.write(str.charCodeAt(2));   //108  
    </script>

=============================================================================
toUpperCase() Method
=============================================================================
toUpperCase() method convert string to upper case
    <script>
    var str="Hello GeekyShows";
    document.write(str.toUpperCase());   //HELLO GEEKYSHOWS
    </script>

=============================================================================
toLowerCase() Method
=============================================================================
toLowerCase() Method convert string to Lower case
var str="HELLO GEEKYSHOWS";
document.write(str.toLowerCase()); //hello geekyshows

=============================================================================
trim Method
=============================================================================
trim() Method it removes white space from both side of string

<script>
var str="      Hello Geekyshows       "
document.write(str.trim());  // Hello GeekyShows
</script>

=============================================================================
replace Method
=============================================================================
replace (old, new) method replaces a specified value with another value in a 
string, replace() function replaces only the first match.

    <script>
    var str="Hello GeekyShows";
    document.write(str.replace("GeekyShows","World"));  
    </script>

=============================================================================
split Method
=============================================================================
split() Method breaks the string up into separate string according to a
delimeter passed as its first argument. The result is returned in an array.

<script>
var str="Hii guys Lets Learn JavaScript";
var arr=srt.split(" ");
document.write(arr);
</script>

<script>
var str="Hii & guys & Lets & Learn & JavaScript";
var arr=srt.split("&");
document.write(arr);
</script>

==============================================================================
indexOf() Method
==============================================================================
IndexOf() Method takes a string argument and returns the index of the first 
occurance of the argument in the string. If the argument is not found returns -1.
This method also accepts an optional second argument that specifies the index
at which to start the search.
The indexOf() method cannot take powerful search values (regular expressions).

    <script>
    var str="Hi guys Lets learn JavaScript";
    document.write(str.indexOf("e"));  //9  
    document.write("<br>");
    document.write(str.indexOf("e",10)); //14
    document.write("<br>");
    document.write(str.indexOf("Lets"));  //8
    </script>

==============================================================================
search Method
==============================================================================
The search () Method searches a string for a specified value and returns the 
position of the match. 
The search() method cannot take a second start position argument.

    <script>
        var str= "Hii guys Lets Learn JavaScript";
        document.write(str.search("e")); //9
        document.write("<br>");
        document.write(str.search("Lets")); //8
    </script>

==============================================================================
slice
==============================================================================
The slice() extracts a part of a string and returns the extracted part in a new
string. The method takes 2 parameters: the starting index (position), and the 
ending index (position). The method returns a string containing the string
beginning at the given index up to but not including the character at the index
specified by the second argument.If a parameter is negative, the position is 
counted from the end of the string.

    <script>
        var str= "Hii guys Lets Learn JavaScript";
        document.write(str.slice(8,14)); //Lets
    </script>

==============================================================================
substring() Method
==============================================================================
The substring() is similar to slice(). The first argument specified the index
at which the desired substring begins. The optional second argument indicates
the index at which the desired substring ends. The method returns a string
containing the substring beginning at the given index up to but not including
the character at the index specified by the second argument. the difference
between slice and substring is that substring() can not accept negative indexes.

    <script>
        var str= "Hii guys Lets Learn JavaScript";
        document.write(str.substring(8,14)); //Lets
        //14 not included
        isme index count hota
    </script>

==============================================================================
Substr() Method
==============================================================================
The substr() is similar to slice(). The substr() method returns the part of a
string between the start index and a number of characters after it. substr() 
extracts length characters from a string, countingg from the start indes. If 
start is a positive number, the index starts counting at the start of the
string. I start is a negative number, the index starts counting from the end of
the string.

    <script>
        var str= "Hii guys Lets Learn JavaScript";
        document.write(str.substr(8,8)); //Lets Le
        //14 not included
        //isme char count hota hai index nahi

    </script>














*/