export let output1, output2;
import $ from 'jquery';
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
//13. Callbacks, Promises, async/await
//Callbacks
var getData = function(fulfillCallback, rejectCallback) {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
        if(response.ok) {
            response.json().then(function(data) {
                fulfillCallback(data);
            });
        } else {
            rejectCallback({
                status: response.status,
                message: 'Callback Example: Failed to fetch data'
            });
        }
    });
};
getData(function(response) {
    console.log(response);
    //output1 = JSON.stringify(response);
}, function(error) {
    console.log(error);
    //output2 = JSON.stringify(error)
});

//Promise
var getData = function() {
    var promise = new Promise(function(resolutionFunc, rejectionFunc) {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
            if(response.ok) {
                response.json().then(function(data) {
                    resolutionFunc(data);
                });
            } else {
                rejectionFunc({
                    status: response.status,
                    message: 'Promise Example: Failed to fetch data'
                });
            }
        });
    });
    return promise;
};
getData().then(function(response) {
    console.log(response);
});

//Promise - 2
var getData = function() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
};
getData().then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
        });
    } else {
        console.log({
            status: response.status,
            message: 'Promise Example: Failed to fetch data'
        });
    }
});

//Jquery Deffered
var getData = function() {
    var deferred = $.Deferred();
    fetch('https://jsonplaceholder.typicode.com/toos/1').then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                deferred.resolve(data)
            });
        } else {
            deferred.reject({
                status: response.status,
                message: 'Promise Example: Failed to fetch data'
            });
        }
    })
    .catch(function(err) {
        console.log(err);
        deferred.reject({
            status: response.status,
            message: 'Promise Example: Failed to fetch data'
        });
    });
    return deferred.promise();
};

getData().then(function(data) {
    console.log(data);
}, function(err) {
    console.log(err);
});
*/
/*
//Type Coercion
output1 = 1 + 1 - '1' + 1 + 1.0;
output2 = 1 + 1 - new Date () + true + 1.0 + '1' + false;
//output1 = [] - [];

//Immediately Invoked Function Expression (IIFE)
output1 = 'test';
(function a() {
    var a = 100;
    output2 = a;
})();
//output1 = a;

//24. Call, Apply, Bind
function MyConstructor(value) {
    this.value = value;
    this.getValue = function(str, a, b, c, d, e) {
        return str + ' : ' + this.value + '##' + a + b + c + d + e;
    }
}
var myObject1 = new MyConstructor(1);
var myObject2 = new MyConstructor(2);
//output1 = myObject1.getValue.call(myObject2, 'Call Output is');

output2 = myObject2.getValue.apply(myObject1, ['Call Output is']);

var bindFunc = myObject1.getValue.bind(myObject2, 'Call Output is', '7');
output1 = bindFunc('5', '4', '3', '1');
*/
//How to find all properties under a given object ?
/*
var MyContructor = function(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;

    this.getValues1 = function() {
        return this.value1;
    }
};
MyContructor.prototype.getValues2 = function() {
    return this.value2;
};
var myObject = new MyContructor(1, 2);
//(a)Object.getOwnPropertyNames()
output1 = Object.getOwnPropertyNames('as'); //[value1,value2,getValues1]
output2 = Object.getOwnPropertyNames(myObject) instanceof Array; //true - Error for ES5; string will be coerced in 2015+
//(b) Object.keys() works the same way //ES 5 +
//(c) for .. in - support from ES 3 +
var result = [];
for(var key in myObject) { //Gets all properties directly under object and prototype
    result.push(key + ' : ' + myObject[key]);
}
output1 = result;
output2 = myObject.hasOwnProperty('getValues1'); //Checks members directly under the object, ignores prototype
*/
//26. What is Deep copy and Shallow copy? Implement it in Javascript.
/*
function deepCloneObject(obj) {
    if (obj === null || typeof(obj) !== 'object') {
        return obj;
    }
    var temp = new obj.constructor();
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) { //To ignore prototype members
            temp[key] = deepCloneObject(obj[key]);
        }
    }
    return temp;
}
var MyContructor = function(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = new Date();
    this.value4 = undefined;
    this.value5 = /^test1/;
    this.value6 = {
        subVal1: 1,
        subVal2: 2,
        subFunc1: function() {
            return;
        }
    }
    this.value7 = [1, '2', 3.0, null, 4, undefined, function(){return;}];
    this.value8 = null;
    this.value9 = true;

    this.getValues1 = function() {
        return this.value1;
    }
};
MyContructor.prototype.getValues2 = function() {
    return this.value2;
};
var myObject1 = new MyContructor(1, '2');
//var myObject2 = JSON.parse(JSON.stringify(myObject1));
var myObject2 = deepCloneObject(myObject1);
output1 = Object.getOwnPropertyNames(myObject1);
output2 = Object.getOwnPropertyNames(myObject2);
console.log(myObject2);
*/
//27. What is (NaN === NaN)? 
//Check for NaN
//For ECMAScript-5 Users:
/*
var x = 1;
if(parseFloat(x) !== x) {
    console.info(x + ' is NaN.');
}
else {
    console.info(x + ' is NOT a NaN.');
}
//For people using ECMAScript-6:
//Number.isNaN(x);
*/
//28. How to create a static, private, public variable?
/*
var Circle = function (radius) {
    var PI = 3.14; //PRIVATE
    this.radius = radius; //PUBLIC
    this.findArea = function() { //PUBLIC
        return PI * (this.radius * this.radius);
    };
};
Circle.myStaticVariable = 'My Circle';
var c1 = new Circle(10);
output1 = c1.findArea();
output2 = Circle.myStaticVariable; //STATIC
let dog = {
    sound: 'woof',
    talk: function() {
        return this.sound;
    }
}
output1 = dog.talk();
let talkFunction = dog.talk;
output2 = talkFunction.call(dog);

//Setting a protoype of an object
var cat = {
    breed: 'munchkin'
};
var myCat = {
    name: 'Fluffy'
};
Object.setPrototypeOf(myCat, cat);
output1 = myCat.name;
output2 = myCat.breed;
*/
//29. Public and Private members using CLOSURES (without using constructor method)
//This method is also known as module pattern.
/*
var Circle = function(radius) {
    var PI = 3.14; //Private
    return {
        radius: radius, //Public
        findArea: function() {
            return this.radius * this.radius * PI;
        }
    };
}
var c1 = Circle(10);
output1 = c1.findArea(); */
//31. How can we maintain constant variables in ES5?
Object.defineProperty(typeof global === "object" ? global : window, "PI1", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
});
output1 = PI1;
//Constants using closures
var CONFIG = (function() {
    var privateObj = {
        PI2: 3.14159
    };
    return {
        get: function(key) {
            return privateObj[key];
        }
    }
})();
output2 = CONFIG.get('PI2');