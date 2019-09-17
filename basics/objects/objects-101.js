let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

//challenge area

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philedalphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age += 1;

console.log(`And one year later, he is now ${person.age}`);