Es5 > Ecma Script
es6
es7

3 types of datatypes in javascript
String 
Number
Boolean

string = "hii" 'hello' '32543' 'true' "3252frg"
number = 6 476437678 45.454 .4534 45243435.464564545
boolean = true/false
null
undefined
///////
Es5
///Declare variable////

var a = "Hiii"
var b = 10
var c = true

typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"
var d = 10.44
undefined
typeof(d)
"number"
var e = "10"
undefined
typeof(e)
"string"

///////////////
var a = 10
var b = 20


a+b (add)
30
a-b
-10
a*b
200
a/b
0.5

4%2  > modules(remender value)
0
4%3
1
4%4
0

2%4
2  
3%4
3

>>>>>>>>>modules of smaller to higher is always smaller



var a = "Hi "
var b = "javaScript"
undefined
a+b (concat)
"Hi javaScript"
a-b
NaN
a*b 
NaN
a/b
NaN  > Not a number

var a = "Hi "
undefined
var b = 10
undefined
a+b
"Hi 10"
b+a
"10Hi "
a-b
NaN
a/b
NaN

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

"10"+20+30
"1020"+30
"102030"

//////////////
10+"20"+30-1
"102030"-1
102029

10+20+"30"-1
"3030"-1
3029

"10"+20+30-1
"102030"-1
102029


"10"-"a"
NaN
"10"-"1"
9
"10"+"1"
"101"
"10"*"2"
20
10*"2"
20
"10"*"2"
20
"10"*2
20
"10"+2
"102"
"10"-"1a"
NaN
"10"-"a10"
NaN

var a = true
var b = true
a+b 
2
true+false
1
false+false
0
true+10
11

true === 1
false === 0
"a"+true
"atrue"
"a"+true
"atrue"
"a"-true
NaN
"10"-true
9

var a = "10"
var b = "20"
a+b
"1020"
parseInt(a)+parseInt(b)
30

var a = "10.11"
undefined
parseInt(a)
10
parseFloat(a)
10.11
var b = "11"
undefined
parseFloat(b)
11
parseFloat(a)
10.11

//es6
Number(a)
10.11
Number(b)
11

var a = "egreg"
isNaN(a)
true

var b = 10
isNaN(b)
false