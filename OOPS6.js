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

==================================================================
Acessing Methods
==================================================================
Object members that are functions are called methods. These are accessed
with dot operator applied to an object alternative to the dot operator is
the array [] operator.
Syntax:-
        object_name.Method_name();
Ex:-
    var fees={Rahul:100, Sumit:200, Rohan:300, total:function(){return(100+200+300);}};

    var fees={};

    fees['total']=function() {return(100+200+300);};
    fees.total=function(){return(100+200+300);};
    
    document.write(fees.total());
    document.write(fees.["total"]());

    <script>
        var fees = new Object();
        fees ["Rahul"] =100;    //fees.Rahul=100;
        fees ["Sumit"] =200;    //fees.Sumit=200;
        fees ["Rohan"] =300;    //fees.Rohan=300;
        fees ["total"] = function(){return(100+200);}; //Method
        document.write(fees.total()); 
    </script>

==========================================================================
Adding Properties/Methods
==========================================================================
Syntax:-
        Object_name.Property_name=value;
        Object_name['Property_name']=value;
Ex:-
    fees.Sonam=600;
    fees["Sonam"]=600;   
    
        <script>
        var fees={Rahul:100, Sumit:200};
        document.write(fees.Rahul +" "+fees.Sumit);
        fees.Sonam=600;     //fees ['Sonam']=600;  ye add ho gaya object me.
        console.log(fees);
        document.write(fees.Rahul +" "+fees.Sumit+" "+fees.Sonam);
        
    </script>

===========================================================================
Delete Properties
===========================================================================
Delete operator is used to delete instance properties.
Syntax:-
         delete object_name.property_name
    Ex:-delete fees.Rahul;

After removal with delete operator, the property has the undefined value.

Ex:-
    <script>
        var fees={Rahul:100, Sumit:200};
        delete fees.Rahul;
        document.write(fees.Rahul +" "+fees.Sumit);
        console.log(fees);
        
    </script>

===========================================================================
Factory Function
===========================================================================
When a function returns an object, we call it a factory function. It can
produce object instance without new keyword or classes.

Ex:-
     function mobile(){
        return{
            model:"Galaxy",
            price:function(){return("Price:Rs.3000");}
        };
     }
     var samsung=Mobile();
     document.write(samsung.model+" "+samsung.price());

Ex:----------------
     <script>
        function mobile(){
            return{
                model:"Galaxy",
                price: function(){return "Price Rs.3000";}
            };
        }
         var samsung = mobile();
         document.write(samsung.model+" "+samsung.price());
    </script>    

======================================
Factory Function with Parameter
======================================
function mobile(model_no){
    return{
        model: model_no,
        price: function(){
            return("Price is Rs.3000");
        }
    };
}
var samsung=mobile("galaxy");
var nokia=mobile("3310");
document.write(samsung.model+" "+samsung.price());
document.write(nokia.model+" "+nokia.price());

    <script>
        function mobile(model_no){
            return{
                model:model_no,
                price: function(){return "Price Rs.3000";}
            };
        }
         var samsung = mobile("galaxy");
         var nokia = mobile("3310");
         document.write(samsung.model+" "+samsung.price()+"<br>");
         document.write(nokia.model+" "+nokia.price());
    </script>
===============================================================
Constructor
===============================================================
Object instance are created with constructor, which are basically special
function that prepare new instance of an object for use.

function Mobile(){
    this.model="3310";
    this.price=function(){
        document.write(this.model+"price Rs.3000");
    }
}
var samsung=new Mobile();
samsung.price();


=============================================================
Constructor with Parameter
=============================================================

function Mobile(model_no){
    this.model=model_no;
    this.model=function(){
        document.write(this.model+"Price Rs.3000 <br>");
    };
}
var samsung=new Mobile("Galaxy");
var nokia=new Mobile("3310");
samsung.price();
nokia.price();

==================================================================
Check Properties Exist
==================================================================
>Typeof Operator:-----------------

Syntax:- if(typeof object_name.key!=="undefined")

Ex:-
    if(typeof nokia.memory!=="undefined")
    {
        document.write("Available");
    }else{
        document.write("Doesn't Exist");
    }


    <script>
        function Mobile(model_no){
            this.model=model_no;
            this.memory=4;
        }
        var samsung=new Mobile("Galaxy");
        var nokia=new Mobile("3310");
        if(typeof nokia.memory !== "undefined")
        {
            document.write("Available");
        }else{
            document.write("doesn't Exist");
        }
    </script>    

>In Operator:----------------------
Syntax:- if("key" in object_name)

Ex:- if("Memory" in nokia){
    document.write("Available");
}else{
    docuement.write("Doesn't Exist");
}


    <script>
        function Mobile(model_no){
            this.model=model_no;
            this.memory=4;
        }
        var samsung=new Mobile("Galaxy");
        var nokia=new Mobile("3310");
        
        if("memory" in nokia)
        {
            document.write("Available");
        }else{
            document.write("doesn't Exist");
        }
    </script>


============================================================
For In Loop
============================================================
The for...in loop is used to loop through an objects properties.
Syntax:-
        for(var variable_name in object_name){
            block of statement
        }    

Ex:-
For(var specs in samsung){
    document.write(specs);
}        


    <script>
        function Mobile(model_no){
            this.model=model_no;
            this.color="white";
            this.ram="4GB";
            this.price=function(){
                document.write(this.model +"Price Rs.3000<br>");
            };
        }
        var samsung=new Mobile("Galaxy");
        var nokia=new Mobile("3310");
        for(var specs in nokia){
            if(typeof nokia[specs]!=="function"){
                document.write(specs+" "+nokia[specs]+"<br>");
            }
        }
Output:-  //model 3310
          //color white
          //ram 4GB

        
    </script>

======================================================================
Ways of creating objects in javascript
======================================================================
//Object Literal
  var fees={};
  fees["Rahul"]=200;

//Object Literal Declare and Initial 
var fees = {Rahul:200};

//Object Constructor
var fees=new object();

//Factory Function
function mobile(){
    return{
        model:"Galaxy";
    }
}
var samsung=mobile();
var lg=mobile();

//Constructor Function
function Mobile(){
    this.model="Galaxy";
}
var samsung=new Mobile();
var lg=new Mobile();

====================================================================
Class
====================================================================
A specific category can be defined as class.
Example:-
          Mobile  -------  Class ----------- Person       
   samsung   LG  Nokia --- Objects ----  Rahul   Sonam   Sujit
      Model                                 Name
      Ram   --------    Properties------     Address
      Color             Methods             Mobile
      Price                                 Email
      Calling()                             Eating()

========================
Defining a Class
========================
We define calss in javascript using custom constructor.
var Mobile=Function(model_no,sprice){
    this.model=model_no;
    this.color="white";
    this.price=3000;
    this.sp=sprice;
    this.sellingprice=function(){
        return (this.price+this.sp);
    };
};
var samsung=new Mobile("Galaxy",2000);
var nokia=new Mobile("3310",1000);

script>
        var Mobile = function(model_no,sprice){
            this.model=model_no;
            this.color="white";
            this.price=3000;
            this.sp=sprice;
            this.sellingprice=function(){
                return (this.price + this.sp);
            };
            this.data=function(){
                document.write("Model No:"+ this.model+"Price:"+
                this.sellingprice());
            }
        };
        var samsung=new Mobile("Galaxy",2000);
        var nokia=new Mobile("3310",1000);
        nokia.data();
    </script>

=============================================================
Private Properties and Methods
=============================================================
Using var or let const you can create private properties and methods.
Ex:-
this.price
var price
let price


   <script>
        var Mobile = function(model_no,sprice){
            this.model=model_no;
            this.color="white";
            var price=3000;        //we can't access it
            this.sp=sprice;
            var show=function(){       //we can't access it
                return "Hello World";
            };
        };
        var samsung=new Mobile("Galaxy",2000);
        var nokia=new Mobile("3310",1000);
        document.write(nokia.show());
    </script>

==========================================================
Prototype
==========================================================
jab koi new properities add hota hai toh sirf
kisi ek ke liye kam kartan jaise samsung ke liye ek properties
banaya white toh wo sirf samsung ke liye karega nokia ke liye
alag se bana padega leking prototype se single line code se 
multi object ke liye kam karega.


instance:-jo properties pahle se hi create hua hota hai usse
          instance kate hai

Prototype Member:-prototype properties use karke jo new properties
           banate hai usse prototype Memberkahte hai 

This one is without prototype:----------------
    <script>
        var Mobile=function(model_no){
            this.model=model_no;
            this.price=3000;
        };
        var samsung=new Mobile("Galaxy");
        var nokia=new Mobile("3310");
        samsung.color="White";
        nokia.color="White";
        document.write(samsung.color);
        console.log(samsung);
        console.log(nokia);
    </script>


Now with prototype:--------------------

    <script>
        var Mobile=function(model_no){
            //instance Member
            this.model=model_no;
            this.price=3000;
        };
        var samsung=new Mobile("Galaxy");
        var nokia=new Mobile("3310");
      //Classname.prototype.key="value";
      //Prototype Member
        Mobile.prototype.color="white"
        document.write(samsung.color);
        console.log(samsung);
        
    </script>


Note:- 
     yadi apne prototype use karke properties likha matlab apne
     super class/Base class ka use karke likha hai


================================================================
Instance & Prototype Member Iteration Using for in Loop
================================================================


    <script>
        var Mobile=function(model_no){
            //instance Member
            this.model=model_no;
            this.price=3000;
        };
        var samsung=new Mobile("Galaxy");
        var nokia=new Mobile("3310");
      //Classname.prototype.key="value";
      //Prototype Member
        Mobile.prototype.color="white"
        document.write(Object.keys(samsung));//isme sirf instance Member hi dikhai dete hai
        for(var key in samsung)// isme instance & prototype memeber bhi dikhai dete hai
        {
            document.write(key)
        }
    </script>

=================================================================
Prototype Object
=================================================================
Every object is associated with another Object in javascript.
                    A
Object        | Properties |  A is prototype object of object B.
                    |
                    |
                    |
                    B
Object        | Properties | B will inherit all properties of Prototype object A.


>Every object is associated with another object in JavaScript.

var b={};        var b2=new Array();
                 

                null
                  |
Object     |objet.prototype|   Object.prototype is prototype Object of Object B 
           |  properties   |
                 |
                 |
                 |
            |    B       |     B will inherit All properties of Object.prototype.
Object      |  Properties|      


Note:- Prototype Object of Object.prototype is null

                  null
                    |
                  object
                    |
         |-----------|-------------|
         Array      RegExp        B
          |
          B2






*/