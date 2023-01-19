/*
========================================================
Class 
========================================================
JavaScript classes, introduced in ECMA Script 2015 or ES6,
classes are in fact "special function".
There are two way to define class in JavaScript using class
keyword:-
1). Class Declaration
2). Class Expression

>Class Declaration:-

Class class_name{
    constructor(){
        Properties
    }
    Methods
}


class Mobile{
    constructor(){
        this.model="Galaxy";
    }
    show(){return this.model+"Price 3000";

    }
}
var nokia=new Mobile();

* Constructor:- The constructor method is a specail method for creating
and initializing an object created within a class. There can be only
one special method with the name "constructor" in a class.

constructor ek parkar ka method hai jo object ko create or initialize 
karne ka kam karta hai

Ek class me ek hi constructor create kar sakte hai

    <script>
        //class declaration
        class Mobile{
            constructor(){
                //instance Member
                this.a=12;
                this.show=function(){
                    return "Instance Member";
                };
            }
            //Prototype Member
            display(){
                return "Prototype Member";
            }
        }
        var nokia=new Mobile();
        document.write(nokia.a);
        document.write(nokia.show());
        document.write(nokia.display());


    </script>
===============================================================
Default Constructor
===============================================================
If you do not specify a constructor method a default constructor
is used.

    <script>
        //class declaration
        class Mobile{
            
            display(){
                return "Prototype Member";
            }
        }
        var nokia=new Mobile();
        document.write(nokia.display());

   Output:-Prototype Member
    </script>


================================================================
Prameterized Constructor
================================================================
    <script>
        class Mobile{
            constructor(model_no, color){
                this.model=model_no;
                this.clr=color;
            }
            show(){
                return this.model+"Price Rs. 3000" + this.clr;
            }
        }
        var nokia=new Mobile("Galaxy","White");
        var lg=new Mobile("Note4","Green");
        document.write(nokia.show()+"<br>");
        document.write(lg.show());

    </script>

===============================================================
Class Expression
===============================================================
Class expression can be named or unnamed.
var Mobile=class{
    constructor(){
        Properties
    }
};


var Mobile=class Mobile2{
    constructor(){
        Properties
    }
};


    <script>
       var Mobile = class{
            constructor(model_no, color){
                this.model=model_no;
                this.clr=color;
            }
            show(){
                return this.model+"Price Rs. 3000" + this.clr;
            }
        }
        var nokia=new Mobile("Galaxy","White");
        var lg=new Mobile("Note4","Green");
        document.write(nokia.show()+"<br>");
        document.write(lg.show());

    </script>

=============================================================
Class Hoisting
=============================================================
Class declarations and class expression are not hoisted. You
first need to declare your class and then access it.

=============================================================
Class Inheritance
=============================================================
The extends keyword is used in class declarations or class
expressions to create a class which is a child of another class.
The extends keyword can be used to subclass custom classes as well
as built-in objects.

class Father{

}
class Son extends Father{

}

Inherit Built-in Object:-----------------
>Date
>String
>Array

class myDate extends Date{

}

Ex:------------
    <script>
        class Father{
            showFMoney(){
                return "Father Money <br>";
            }

        }
        class Son extends Father{
            showSMoney(){
                return "Son Money <br>";
            }
        }
        class GrandSon extends Son{
            showGMoney(){
                return "GrandSon Money";
            }
        }
        var g=new GrandSon();
        document.write(g.showFMoney());
        document.write(g.showSMoney());
        document.write(g.showGMoney());
    </script>

==============================================================
Super Method
==============================================================
Super() is used to initialize parent class constructor. If there
is a constructor present in subclass, it needs to first call 
super() before using "this". A constructor can use the super
keyword to call the constructor of a parent class.

Class Father{
    constructor (money){
        this.Fmoney=money;
    }
}
Class Son extends Father{
    constructor (money){
        super(money);
    }
}

    <script>
        class Father{
            constructor(money){
                this.Fmoney=money;
            }
            showFMoney(){
                return this.Fmoney + "Father Money <br>";
            }
        }
        class Son extends Father{
            constructor (money){
                super(money);
            }
            showSMoney(){
                return "Son Money <br>";
            }
        

        }
        var s= new Son(10000);
        document.write(s.showFMoney());
        document.write(s.showSMoney());
    </script>


=======================================================
Method Overriding
=======================================================
Same function name with different implementation.

<script>
    class Father{
        show(){
            return "Super Class <br>";
        }
    }
    class Son extends Father{
        show(){
            return "Sub Class";
        }
    }
    var s=new Son();
    document.write(s.show());
    
</script>

==============================================================
Static Method
==============================================================
The static keyword is used to define a static method for a class.
Static methods are called without creating object and cannot be 
called through a class instance (object). Static methods are 
often used to create utility functions for an application.
Ex:-
class Mobile{
    constructor(){}
    static disp(){return "Static Method";}
}
Mobile.disp();

Ex:-
class Mobile{
    Static disp(){
        return "Static Method";
    }
}
document.write(Mobile.sisp());

================================================================
Array
================================================================
Arrays are collection of data items stored under a single name.
Array provide a mechanism for declaring and accessing serveral
data items with only one identifier, thereby simplifying the task
of data management.
we use array when we have to deal with multiple data items.
Arrays are a special type of objects. The typeof operator in
JavaScript returns "object" for arrays.

<script>
   var stu =["Rahul", "Raj"];
   document.write(stu);
   document.write(typeof(stu));
</script>

===============================================================
Declaration and Initialization of Array
===============================================================
>Using Array Literal
Syntax:- var array_name=[value1, value2, value_n];
Ex:-   var geek=["Rahul","Ram",56,"Jay"];

var geek=[,,,,];  all values are undefined

var geek=[,,,45,,,78];

var a=10,b=20,c=30;
var geek=[a,b,c];

var geek=["Rahul","Ram",56,"Jay"];

index       value
geek[0]     Rahul
geek[1]     Ram
geek[2]     56
geek[3]     jay

Note:-By default, array starts with index 0.
ex:-
    <sctipt>
        var geek=[]; // empty array
        geek[0]="rahul";
        geek[1]="ram";
        geek[2]=56;
        geek[3]="jay";
        document.write(3);
    </sctipt>

 ex:-   
    var geek=["rahul","ram",56,"jay"];
    document.write(geek);

Ex:-
   var a=10,b=20,c=30;
   var geek=[a,b,c];


=============================
Using Array Constructor
=============================
Syntax:- var array_name=new Array(value1, value2, value_n):
Ex:-
    var geel=new Array("Rahul","Ram",56,"Jay");
    var geek=new Array(10,20,30,40,50);

    <sctipt>
        var geek = new Array(); // empty array
        geek[0]="rahul";
        geek[1]="ram";
        geek[2]=56;
        geek[3]="jay";
        document.write(geek[3]);
    </sctipt>

    Ex:--
    <script>
        var geek=["Rahul","Ram",56,"Jay"];
        var geek=new Array("Rahul","Ram",56,"Jay");
        document.write(geek[3]);
    </script>

========================================================================
Important Point In Array
========================================================================
> JavaScript arrays are zero-indexed: the first element of an array is at
  index 0.
> Using an invalid index number return undefined.
> Its possible to quote the JavaScript array indexes as well (eg.geek['2']
  instead of geek[2]), although it's not necessary.
> Arrays cannot use strings as element indexes but must use integers.
> There is no associative array in JavaScript.
       geek["fees"]=200;
> No advantage to use Array constructor so better to use Array Literal
  for creating Arrays in JavaSctipt.
  
========================================================================
Accessing Array Elements
========================================================================

 <script>
        var geek=["Rahul","Ram",56,"Jay"];
        var geek=new Array("Rahul","Ram",56,"Jay");
        document.write(geek[3]);
    </script>

Access all at Once:------

<script>
        var geek=["Rahul","Ram",56,"Jay"];
        var geek=new Array("Rahul","Ram",56,"Jay");
        document.write(geek);
    </script>

====================================================================
Modifying Array Elements
====================================================================
Var geek = ["Rahul","Ram",56,"Jay"];
document.write(geek);
geek[0]="Rohit";
document.write(geek);

    <script>
        var geek=["Rahul","Ram",56,"Jay"];
        document.write(geek + "<br>");
        geek[0]="Rohit";
        document.write(geek + "<br>");
    </script>

====================================================================
Removing Array Elements
====================================================================
Array elements can be removed using delete operator. This operator
sets the array element it is invoked on to undefined but does not
change the array's lenth

Syntax:- delete Array_name[index];
Ex:-    delete geek[0];

    <script>
        var geek=["Rahul","Ram",56,"Jay"];
        document.write(geek + "<br>");
        delete geek[0];
        document.write(geek);
        document.write(geek[0] + "<br>"); //undefined
    </script>

====================================================================
Length Property
====================================================================
The lenght property retrieves the index of the next available 
position at the end of the array. The length property is automatically
updated as new elements are added to the array. For this reason,
length is commonly used to iterate through all elements of an array.

var geek = ["Rahul", "Ram", 56, "jay"];
document.write(geek.length);

    <script>
        var geek=["Rahul","Ram",56,"Jay"];
        document.write(geek.length);
    </script>

====================================================================
Iteration of Array using for Loop in JavaScript
====================================================================
<script>
        var geek=["Rahul","Ram",56,"Jay"];
        for(let i=0; i<=3; i++){
            document.write(geek[i]+"<br>");
        }
</script>

<script>
        var geek=["Rahul","Ram",56,"Jay"];
        for(let i=0; i<geek.length; i++){
            document.write(geek[i]+"<br>");
        }
</script>

====================================================================
forEach Loop
====================================================================
The forEach calls a provided function once for each element in an array,
in order.
Syntax:- array.forEach(function(value, index, arr){

})

where:-
     value:- It is the current value of array index.
     index:- Array's index number
     arr:-   The array object the current element belongs to
  Ex:- geek.forEach(function(name){
        document.write(name);
  });   

    <script>
        var geek=["Rahul","Ram",56,"Jay"];
        geek.forEach(function(name){
            document.write(name+"<br>");
        })
        
        var geek=["Rahul","Ram",56,"Jay"];
        geek.forEach(function(value,index){
            document.write(value+" "+ index + "<br>");
        })
    </script>
===================================================================    
for of Loop
===================================================================
The for...of statement creates a loop iterating over iterable objects.
Syntax:-
        for(var variable_name of array){

        }
Ex:- 
     for(var value of geek){

     }

    <script>
        var geek=["Rahul", "Ram", 56, "Jay"];
        for(let value of geek){
            document.write(value+"<br>");
        }
    </script>

=====================================================================
Input from User in Array
=====================================================================
you can get input from user in an empty array:-

* var geek=[];
* var geek=new Array();
* var geek=new Array(3); //3 is length of array

    <script>
        //defining Array
        var elm=prompt("Enter No. of Elements:");
        var geek=[];
        //Input
        for(let i=0; i<=elm; i++){
            geek[i]=prompt("Enter Name:");
        }
        //Display Values
        for(let i=0; i<=elm; i++){
            document.write(geek[i]+"<br>");
        }
    </script>

>Constructor:------------------------    
    <script>
        //defining Array
        var geek=new Array(2);
        var In=geek.length;
        //Input
        for(let i=0; i<=In; i++){
            geek[i]=prompt("Enter Name:");
        }
        //Display Values
        for(let i=0; i<=In; i++){
            document.write(geek[i]+"<br>");
        }
    </script>

=================================================================
Multidimension Array
=================================================================
Multidimensional array is Arrays of Arrays.
Multifimensional array can be 2D, 3D, 4D Etc.
Ex:-
      2D:- var name[[],[],[]]
---------------------
| Rahul | Dell | 10 |
| Sonam | Hp   | 20 |
| Sumit | Zed  | 30 |
---------------------

    <script>
        var geek =[ 
         ["Rahul","Dell",10],
         ["Sonam","HP",20],
         ["Sumit","Zed",30]
        ];
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                document.write(geek[i][j]+ " ");
            }
            document.write("<br>");
        }
    </script>

    you can write also like this:---
 var geek =[[],[],[]];
        geek[0][0] = "Rahul";
        geek[0][1] = "Dell";
        geek[0][2] = "30";
        geek[1][0] = "Sonam";
        geek[1][1] = "HP";
        geek[1][2] = "20";
        geek[2][0] = "Sumit";
        geek[2][1] = "Zed";
        geek[2][2] = "30";

With Array:-------
    <script>
    
        var geek = new Array (["Rahul","Dell",10],["Sonam","HP",20],["Sumit","Zed",30]);
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                document.write(geek[i][j]+ " ");
            }
            document.write("<br>");
        }
    </script>

===========================================================================
Create Empty 2D Array
===========================================================================
    <script>
        //using array literal
        var geek=[[],[]];
        //using array constructor
        var geek = new Array([],[]);
        for(let i=0; i<2; i++){
            for(let j=0; j<3; j++){
                document.write(geek[i][j]+ " ");
            }
            document.write("<br>");
        }
    </script>
>change row with single key.
        <script>
        var geek =[];
        var rows =4;
        var cols =3;
        for(var i=0; i<rows; i++){
            geek[i]=[];
        }
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                document.write(geek[i][j]+ " ");
            }
            document.write("<br>");
        }
    </script>



*/