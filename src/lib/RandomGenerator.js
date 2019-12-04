export let output, output2;

//Template Literals
const word1 = 'Hello';
const word2 = 'World';
output = `${word1} <b>${word2}</b>`;

//Object Destructuring
let personalInfo = {
    firstName: 'John',
    lastName: 'Honai',
    age: '40',
    country: 'Singapore'
};
const {firstName: fn, lastName: ln} = personalInfo;
output = `Hello ${fn} ${ln}`;

//Array Destructuring
const nameArray = ['John', 'Honai', 'Gopalakrisnan', 'Pavanai'];
const [name1, name2, , name4] = nameArray;
output = `${name1} ${name2} ${name4}`;

//Object Literal
const addressObjectMaker = (city, state) => { return {city, state}};
output = JSON.stringify(addressObjectMaker('Austin', 'Texas'));

//Object Literal Challenge
const addressMaker = (address) => { 
    const {city, state} = address;
    const newAddress = {
        city,
        country: 'United States', 
        state
    }
    return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;
};
output = addressMaker({city: 'Austin', state: 'Texas'});

//For of Loop
const incomes = [100, 200, 300];
let sum = 0;
output = null;
for(const income of incomes) {
    output = `${output || ''} + ${income}`
    sum += income;
}
output = `${output} = ${sum}`;

const fullName = 'John Honai';
let name = '';
for(const char of fullName) {
    name = ` ${name} ${char} - `;
}
output = name;

//Spread Operator
personalInfo = {
    firstName: 'John',
    lastName: 'Honai',
    age: '40',
    country: 'Singapore'
};
const personalInfo2 = {
    ...personalInfo,
    profession: 'Hitman'
};
output = JSON.stringify(personalInfo2);

//Rest operator
((...nums) => {
    output = nums;
})(1, 2, 3, 4, 5, 6, 7);

//Default Parameters
const add = (a = 0, b = 0, c = 0) => a + b + c;
output = add(2);

//Inludes()
const numArray = [1, 2, 3, 4, 5];
output = numArray.includes(0);

//padStart(), padEnd()
name = 'John Honai';
output = `${name.slice(-4).padStart(name.length, '*')} - ${name.slice(0, 4).padEnd(name.length, '*')}`;

//Classes
class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoice() {
        if(this.type === 'Pussy') {
            return 'Meaw';
        }
    }
    static whoAmI() {
        return `I'm an Animal`;
    }
    get metadata() {
        return `Type is ${this.type} and Legs are ${this.legs}`;
    }
}
const cat = new Animal('Pussy', 4);
output = JSON.stringify(cat);
//output2 = cat.makeNoice();
//output2 = Animal.whoAmI();
output2 = cat.metadata;

class Bird extends Animal {
    constructor(type, legs, canFly){
        super(type, legs);
        this.canFly = canFly;
    }

    makeNoice() {
        if(this.type === 'KaKa') {
            return 'Craaawwwwww';
        }
    }
}
const crow = new Bird('KaKa', 2, true);
output = JSON.stringify(crow);
//output2 = crow.makeNoice();
//output2 = crow.metadata;
output2 = Bird.whoAmI();

//Trailing Commas
(function noErr(param1,){ //Trailing comma here
    const yeaNoErr = {
        name: 'Onnu Podappa. Comma ittalum oru kozhappola.', //Trailing comma here
    };
    //console.log(yeaNoErr.name);
})();

//Async & Await
//This is using promise:
let apiURL = 'https://jsonplaceholder.typicode.com/posts';
let getAllPosts = () => {
    fetch(apiURL).then((response) => {
        //console.log(response);
    }).catch((err) => {
        console.error(err);
    });
}
getAllPosts();
//This is using Async & Await
apiURL = 'https://jsonplaceholder.typicode.com/posts';
//Same as async function getAllPosts(){.....}
getAllPosts = async () => {
    output = '';
    const response = await fetch(apiURL);
    const json = await response.json();
    //console.log(response);
    document.querySelector('#content2').innerHTML = JSON.stringify(json);
}
//getAllPosts();

//Sets - to create a unique list
const exampleSet = new Set([1, 2, 3, 4, 5, 5, 5, 4]);
exampleSet.add(6);
//exampleSet.delete(5);
//output = exampleSet.has(1);
//exampleSet.clear();
output = exampleSet;
output2 = exampleSet.size;












// export class RandomGenerator {
//     static randomInteger() {
//         return Math.ceil(Math.random() * 100);
//     }
//     static randomRange(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
// }

// async function getPosts() {
//     const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     return data;
// }