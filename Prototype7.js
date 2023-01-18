/*
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


    <script>
          //These all are associated with each other----------------

        //it will return Object.prototype
        //console.log(Object.prototype);  -------Same output

        // var b={};
        // console.log(Object.getPrototypeOf(b)); -----Same Output

        // var b1=new Object();
        // console.log(Object.getPrototypeOf(b1));   ----Same Output

        // var b1=new Object();
        // console.log(Object.getPrototypeOf(Object.prototype));   :----Null

        // var b2=new Array();
        // console.log(Object.getPrototypeof(b2));
        // console.log(Object.getPrototypeOf(Array.prototype));
        // console.log(Object.getPrototypeOf(Object.prototype)); ----Null

    </script>

=================================================================
How Prototype Works in JavaScript
=================================================================

==================================================================
Prototype Inheritance
==================================================================

==================================================================
One Super and Two SubClasses
==================================================================

==================================================================
Method Overriding
==================================================================

==================================================================
Multi-Level Inheritance
==================================================================

==================================================================
Composition Or Mixins
==================================================================



















    */