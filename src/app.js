import {sayHello, getPosts} from './lib'
//alert(sayHello(person))

getPosts().then(posts => console.log(posts))