/*
Object Oriented Programming
==========================================================================
Object-oriented programming (OOP) is a programming language model organized
around objects rather than "actions" and data rather than logic.

OOPS aisi model hai jisme object se bani hui model hoti hai siwaye functio ke

Concepts of OOP
==================================
1). Encapsulation
2). Abstraction
3). Inheriance
4). Polymorbhism

===========================================================================
Objects
===========================================================================
An object is a collection of properties, and a property is an association 
between a name (or key) and a value. A property's value can be a function,
in which case the property is known as a method. In addition to objects 
that are predefined in the browser, you can define your own objects.

var fees={
    Rahul: 100;|
    Sumit: 200;|---- properties
    Rohan: 300;|
    total: function() {return (100+200+300);}----Methods  
};
=============================================
Type of Objects
==============================================
1). User-Defined Objects:- These are custom objects created by the programmer
    to bringg structure and consistency to a particular programming task.

2). Nativ Objects:- These are provided by the javascript language itself
    like String, Number, Boolean, Function, Date, Object, Array, Math,
    RegExp, Error as well as object that allow creation of user-defined
    objects and composite types.
    
3). Host Objects:- These objects are not specified as part of the JavaScript
    language but that are supported by most host environments, typically
    browsers like window, navigator.

4). Document Objects:- These are part of the document object model (DOM),
    as defined by the W3C. These objects presents the programmer with a 
    structured interface to HTML and XML documents. Access to the document
    objects is provided by the browser via the document property of the 
    window object (window.document).


============================================================================
Declaration And Initialization of Object
============================================================================
>Using Object Literal
Syntax:- var object_name ={}
Ex:-
   var fees={};
   Fees["Rahul"]=100; -----> Fees.Rahul=100;
   Fees["Sumit"]=200; -----> Fees.Sumit=200;
   Fees["Rohan"]=300; -----> Fees.Rohan=300;

   Fee["Super Man"]=400; ------> Fees.Super Man=400;
  
   Multiwork key required quotation.

   Fee ["total"] = funtion() { return (100+200+300);};  --> Fee.total = funtion() { return (100+200+300);};
   Fee ["total"] = sum; ----> Fee.total = sum;

    <script>
        //declaration of object
        var fees ={};
        fees["rahul"]=100;
        fees["sumit"]=200;
        fees["rohan"]=300;
        document.write(fees['rahul']);
2nd way:--
        var fees ={};
        fees.rahul=100;
        fees.sumit=200;
        fees.rohan=300;
        document.write(fees.sumit);
    </script>   
Method:--
          var fees ={};
          fees["rahul"]=100;
          fees["total"]=function(){
            return (100+200);
          };
          document.write(fees.total());
2nd way--  fees.total=function(){
            return (100+200);
          };
          document.write(fees.total());

==================================================================
Declaration And Initilization of Object
==================================================================
>Using Object Literal
Syntax:-
        var object_name = {key1:value1, key2:value2, key_n:value_n};
        var fees={
            Rahul: 100;
            Sumit: 200;
            Rohan: 300;
        };

        var fees={
            Rahul: 100;
            Sumit: 200;
            Rohan: 300;
            "Super Man":400
        };
        var fees={Rahul:100, Sumit:200, Rohan:300, "Super Man":400};

Syntax:- var object_name ={key1:value1, key2:value2, key_n:value_n, key:function};
Ex:-    var fees={Rahul:100, Sumit:200, Rohan:300, total:function(){
                 return(100+200+300);
                 }};
 var fees={
    Rahul:100,
    Sumit:200,
    Rohan:300,
    total:function(){
        return(100+200+300);
    }
 };

Ex:-
    <script>
        var fees={Rahul:100, Sumit:200, Rohan:300};
        document.write(fees.Sumit);
    </script>
    <script>
        var fees={Rahul:100, 
            Sumit:200, 
            Rohan:300;
            "Super Man":400
        };
        document.write(fees.Sumit);
        document.write(["Super Man"]);

    </script>

     // For Method
        var fees={Rahul:100, total: function(){
            return(100+200)
        }};
        document.write(fees.total());

=========================================================================
Declaration and Initialization of Object
=========================================================================
>Using Object Constructor
Syntax:- var object_name = new Object();
Ex:-
    var fees = new Object();
    fees ["Rahul"]=100; ----> fees.Rahul=100;
    fees ["Sumit"]=200; ----> fees.Sumit=200;
    fees ["Rohan"]=300; ----> fees.Rohan=300;

    fees["total"]=function() {return(100+200+300);};
    fees["total"]=sum;
    fees.total=function(){return(100+200+300);};
    fees.total=sum;



          <script>
        var fees = new Object();
        fees ["Rahul"] =100;    //fees.Rahul=100;
        fees ["Sumit"] =200;    //fees.Sumit=200;
        fees ["Rohan"] =300;    //fees.Rohan=300;
        fees ["total"] = function(){return(100+200);}; //Method
        document.write(fees.total()); 
        
        document.write(fees["Sumit"]);
        document.write(fees.Sumit);
    </script>

Note:- 
       Object Literal & dot operator hi use karna hai
       var fees ={ } ---- iska follow kare  ------this is litral
       var fees = new Object(); ---- iska nahi ------this is object

======================================================================
Accessing Properties
=======================================================================
A property of an object is some piece of named data it contains. These
are accessed with dot operator applied to an object alternative to the
dot operator is the array [] operator.

Syntax:- object_name.property_name
Ex:-
    var fees = {Rahul:100, Sumit:200, Rohan:300};
    
    var fees ={};

    fees ['Rahul']=100; or fees.Rahul = 100;

    document.write(fees['Rahul']);
    document.write(fees["Rahul"]);
    document.write(fees.rahul);

var fees = {Rahul:100, Sumit:200,"Super Man":400};

var fees={};

fees["Super Man"]=100;

document.write(fees["Super Man"]);
document.write(fees["Super Man"]);



















*/