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














*/