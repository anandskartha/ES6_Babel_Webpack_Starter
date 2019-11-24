export const person = {
    name: 'Joe Rogan',
    location: 'Sacramento',
    age: 31
}

export function sayHello(person) {
    return `Hello ${person.name} from ${person.location} aged ${person.age}`
}

export async function getPosts() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}