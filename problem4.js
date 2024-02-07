/*
### 4. Checking if it's an Array
**Instructions:**
1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/
let num1=[2,3,4,5,3];
let num2= 3;
let str1='Hello';
let str2=true;
let check1=Array.isArray(num1);
console.log(check1);
let check2=Array.isArray(num2);
console.log(check2);
let check3=Array.isArray(str1);
console.log(check3);
let check4=Array.isArray(str2);
console.log(check4);
