//how to declare objects in js

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

//returning an object
let getSummary = function(book) {
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.summary);

//challenge area
let convertFahrenheitToCelsius = function (fah) {
    return {
        fahrenheit: fah,
        celsius: (fah - 32) * 5/9,
        kelvin: (fah + 459.67) * 5/9
    }
}

let temp = convertFahrenheitToCelsius(74);
console.log(temp.fahrenheit);
console.log(temp.celsius);
console.log(temp.kelvin);