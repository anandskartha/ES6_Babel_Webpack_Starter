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
/*
//6. How to achieve inheritance in javascript

var Shape = function (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.getId = function () {
        return this.id;
    };
};
Shape.prototype.sayCordinates = function  () {
    return {
        xCord: this.x,
        yCord: this.y
    }
}

var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var Circle = function (id, x, y, radius) {
    Shape.call(id, x, y);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

var rectangle = new Rectangle('id_1', 0, 0, 10, 20);

output1 = JSON.stringify(rectangle);
output2 = JSON.stringify(rectangle.sayCordinates());
*/
/*
//9. Map, Filter & Reduce methods

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var output = myArray.map(function (i, index, arr) {
    if (index === 5) {
        return i * 10;
    }
    return 0;
});
output1 = output;
output2 = JSON.stringify(output);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var output = myArray.filter(function (i, index, arr) {
    return i % 2 !== 0;
});
output1 = output;
output2 = JSON.stringify(output);

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var output = myArray.reduce(function (i, j) {
    return i + j;
}, 0);
output1 = output;
output2 = JSON.stringify(output);
*/
/*
//10. instanceof & typeof
http://tobyho.com/2011/01/28/checking-types-in-javascript/

var MyClass = function() {
    this.id = 1;
};
var color = true;
output1 = color instanceof Number;
output2 = color instanceof Object;
output1 =  typeof (function () {});
output2 = typeof {};
output1 =  typeof undefined;
output2 = typeof null;
*/
/*
//11. Value of “this” inside a constructor method and JavaScript function

function flobalFun () {
    console.log(this); //Returns Window object, or if no window, undefined.
}
flobalFun();
var MyClass = function (name) {
    this.name = name;
    this.sayName = function () {
        console.log(this);
        return this.name;
    };
};
var myObj1 = new MyClass('Anand');
var myObj2 = new MyClass('Mon');
output1 = myObj1.sayName();
output2 = JSON.stringify(myObj1);
output1 = new MyClass('test1').sayName.call(myObj1);
output2 = new MyClass('test2').sayName.call(myObj2); */
/*
//12. Closures
function getFullName (firstName) {
    var myClosure = function (lastName) {
        return `${firstName} ${lastName}`;
    };
    return myClosure;
}
var getClosure = getFullName ('Anand');
output1 = getClosure('Sasidharan');
output2 = getFullName('Anand')('Sasidharan');
*/
/*
//13. Promises
*/
