/*
JavaSript Operators
======================
1).Arithmentic Operators
2).Comparison (Relational) Operators
3).Logical Operators
4).Bitwise Operators
5).Assignment Operators

>Arithmentic Operators:-
   (+) (-) (*) (/) (%) (++) (--)

 <script>
        var a=10; var b=23; var c=56;
        var d=a+b+c;
        document.write(d);

    </script>

 <script>
        var a=10; var b=23; var c=56;
        var d=a-b-c;
        document.write(d);

    </script>

>Relational Operators:-
 (<)  less than      5<2   False
 (>)  Greater Than   5>2   True
 (<=) Less than or   5<=2  False
      equal to 
 (>=) Greater than   5>=2  True
      or equal to  

(==)  Equal to       5==2  False
(!=)  Not equal to   5!=2  True
(===) Equal value    5===5 True
      and same type
(!==) Not Equal value 5!===5 False
      or Not same type 5!==="5" True

   <script>
       var a=5;
       var b=20
       var c=a>b
       document.write(c);
    </script>
==============================
>Logical Operators
============================
(&&) Logical And (5<2) && (5>3)  False
(||) Logical Or  (5<2) || (5>3)  True
(!)  Logical Not !(5<2)          True

Operand 1      Operand2      Result
  True           True         True
  True           False        False
  False          True         False
  False          False        False

=======================
Bitwise Operators
=======================

Operator  Meaning
<<        Shift the bits to left
>>        Shift the bits to right
~         Bitwise inversion (one's complement)
&         Bitwise logical AND
|         Bitwise logical OR
^         Bitwise exclusive Or

Operand 1      Operand2      Result(Operand 1 & Operand2)
  True           True         True
  True           False        False
  False          True         False
  False          False        False

Operand 1      Operand2      Result(Operand 1 & Operand2)
    1              1           1
    1              0           0
    0              1           0
    0              0           0

Operand 1      Operand2      Result(Operand 1 | Operand2)
  True           True         True
  True           False        True
  False          True         True
  False          False        False

Operand 1      Operand2      Result(Operand 1 | Operand2)
    1              1           1
    1              0           1
    0              1           1
    0              0           0

(Bitwise NOT~)    
Operand          Result
 True 1          False 0
 False 0         True  1

============================ 
>Assignment Operators
===========================
Operator      Example      Equivalent Expression
  =           M = 10            M=10
  +=          M +=10            M=M+10
  -=          M -=10            M=M-10
  *=          M *=10            M=M*10
  /=          M /=10            M=M/10
  %=          M %=10            M=M%10
  <<=         A<<=b             A=A<<B     
  >>=         A>>=b             A=A>>b
  >>>=        A>>>=b            A=A>>>b
  &=          A&=b              A=A&b
  ^=          A^=b              A=A^b
  |=          A|=b              A=A|b


 <script>
     var m=15;
        m+=10;
    document.write(m);    
   </script>

========================================================================
Prompt Method Getting Input From User in JavaScript.
========================================================================
prompt():- The browser provides a build-in function which can be used to
           get input from the user, named prompt. The prompt() method
           displays a dialog box that prompts the visitor for input.
           Once the prompt function obtains imput from the user, it 
           returns that input.
Syntax:- prompt(text,defaultText)
         prompt("Enter Your Name:","name");
         prompt("Enter Your Roll No.:");            

<script>
    var a=prompt("Enter value:");
    document.write(a);
    var a=prompt("Enter value:","India");
    document.write(a);
  </script>
      

========================================================================
IF Statement
========================================================================


















*/
