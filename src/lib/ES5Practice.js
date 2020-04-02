export let output1, output2;
/*
//1. Different ways of creating objects in Javascript
var result = '';

//Constructor function
var MyClass1 = function (name) {
    this.name = name;
}
MyClass1.prototype.callName = function () {
    return this.name;
}
var obj1 = new MyClass1('hello world 1'); 
result += JSON.stringify(obj1); // JSON.stringify () ignores member functions as functions are not an expected type in JSON

//Singleton Object
var obj2 = new function (name) {
    this.name = name
} ('hello world 2');
result += '<br>' + JSON.stringify(obj2);

var obj3 = Object.create(MyClass1.prototype);
obj3.name = 'Hello World 3';
//result += '<br>' + JSON.stringify(obj3);
result += '<br>' + obj3.callName();
output1 = result;
*/
/*
//2. Result of undefined == null and undefined === null 
var a = undefined;
var b = null;
output1 = a == b; //true
output2 = a === b; //false
*/
/**/

