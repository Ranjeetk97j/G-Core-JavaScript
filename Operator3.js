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

It is used to execute an instruction or block of instruction only if a 
condition is fulfilled.
Syntax:-
        If(Condition)
        {
            Block of statements.
        }
<script>
    var a=10;
    if(a==10)
    document.write("Sahi hai"); 
  </script>

<script>
        var a=10;
        var b=10;
        if((a==10) && (b==10))
        document.write("Barabar hai")
    </script>
  <script>
        var a=10;
        var b=12;
        if((a==10) || (b==10))
        document.write("Barabar hai")
    </script>
   <script>
        var a=prompt("Enter your No:");
        if((a==10))
        document.write("Tum birender ho na");
    </script>
========================
IF else Statement
========================
if....else statement is used when a different sequence of instructions is
to be executed depending on the logical value(True/False) of the condition
evaluated.

Syntax:-
        if(condition)
        {
            Statement_1_Block;
        }
        else
        {
            Statement_2_Block;
        }
        Statement_3;

    <script>
        var a=prompt("Enter your No:");
        if((a==10))
        document.write("Tum birender ho na");
        else
        document.write("Sahi no daal bhai");
    </script>

=========================
Else IF Statement
=========================
To show a multi-way decision based on several conditions, we use else 
if statement.
Syntax:-
         if(condition_1)
         {
            Statements_1_Block;
         }
         else if(condition_2)
         {
            Statement_2_Blocks;
         }
         else if(condition_n)
         {
            Statement_n_Block;
         }
         else
         Statement_x;

<body>
    <script>
        var a=prompt("Please enter marks:-");
        if((a=>33) && (a<=44))
        document.write("Pass");
        else if((a=>45) && (a<=59))
        document.write("Good");
        else if((a=>60) && (a<=74))
        docuement.write("Very Good");
        else if(a=>75)
        document.write("Execellence");
        else
        docuement.write("Fail");
    </script>
<script>
    var a=prompt("Please enter marks:-");
    if(a<=33)
    document.write("Fail");
    else if(a<=45)
    document.write("Good");
    else if(a<=60)
    docuement.write("Very Good");
    else if(a<=75)
    document.write("Execellence");
    else
    docuement.write("Thik hai");
</script>

</body>         

========================================================================
Switch Statement
========================================================================
Check several possible constant values for an expression.
Syntax:- 
Switch(Expression){
    case expression 1:
        block of statements 1;
        break;
    case expression 2:
        block of statements 2;
        break;
    default:
        default block of instruction;

}
Ex:--------------------------------------------- 
<Script>
        var day=2;
        switch(day){
            case 1:
                document.write("sun");
                break;
                case 2:
                    document.write("Mon");
                    break;
                    case 3:
                        document.write("Tue");
                        break;
                        default:
                            document.write("kucch bhi");
        }
    </Script>

Switch(Expression){
    case expression 1:
        block of statements 1;
        break;
    case expression 2:
    case expression 3:    
        block of statements 2;
        break;
    default:
        default block of instruction;

 Ex:-------------------------------------------------       
    <Script>
        var day=1;
        switch(day){
            case 1:
                document.write("sun");
                break;
                case 2:
                case 3:
                        document.write("Tue");
                        break;
                        default:
                            document.write("kucch bhi");
        }

    </Script>

========================================================================
For Loop
========================================================================
The for loop is frequently used, usually where the loop will be traversed
a fixed number of times.
Syntax:-
          for(initialization; test condition; increment or decrement)
          {
            block of statements;
          }

Ex:---------
    <script>
        for(i=1; i<=5; i++)
        {
            document.write(i + "<br>");
        }
    </script>

    






*/
