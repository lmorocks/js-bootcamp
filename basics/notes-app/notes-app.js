// DOM - Document Object Model
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// JSON {"name":"Andrew", "age":27} , note JSON uses DOUBLE QUOTES
//---------------------------------------------------------------------------------------------
// JSON.stringify('someArray') - convert object to 'string' JSON object
// JSON.parse('someJSONobject') - convert JSON object to original object
const user = {
    name: 'Andrew',
    age: 27
}
//const userJSON = JSON.stringify(user); //convert array to "string"(JSON format)
//console.log(userJSON);
//localStorage.setItem('user', userJSON);

// const userJSONNew = localStorage.getItem('user');
// console.log(userJSONNew);
// const userNew = JSON.parse(userJSONNew);
// console.log(`${userNew.name} is ${userNew.age}`);

// CRUD - create read update delete
//---------------------------------------------------------------------------------------------
// localStorage only supports STRINGS. not arrays. Solution: JSON - convert array to string objects
//---------------------------------------------------------------------------------------------

/*

// data is stored in key-value pair, eg. location:'Philadelphia

localStorage.setItem('location', 'Philadelphia'); // preserve data in local storage. 

console.log(localStorage.getItem('location')); // retrieve data in local storage

localStorage.removeItem('location'); // delete key-value pair in local storage .removeItem('key-of-key-value-pair')

localStorage.clear(); // delete all data in local storage
*/

// Drop down list
//---------------------------------------------------------------------------------------------
document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
})
// Checkboxes input
//---------------------------------------------------------------------------------------------
document.querySelector('#for-fun').addEventListener('change', function(e){
    console.log(e.target.checked);
})


// Forms in HTML and JS
//---------------------------------------------------------------------------------------------
// A way to encapsulate different/multiple inputs
// "name of an <input> element in a <form>" can be accessed by referring to field name.
// <form id='..'> 
// <input .. name="..>
// <button>Submit</button>
// </form>
// In <input ... name='firstName'>, 'name' attribute is used to refer to fields in form input
// e.target.elements -> .elements refers to the FIELDS in the form
// ..elements.firstName.value -> refers to the value of the field (follow camel casing === to JS variable or sth like that)
//---------------------------------------------------------------------------------------------

//adding event listener to form
document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault() //stop browser from auto refreshing (prevents losing previously key-ed in inputs)
    console.log(e.target.elements.firstName.value); 
    e.target.elements.firstName.value = ''; //clear form value after clicking submit
})


//---------------------------------------------------------------------------------------------
// <REAL-TIME SEARCH FEATURE> USING FILTER
// filter & rendering notes that satisfies input
//---------------------------------------------------------------------------------------------

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    //get notes that fits searchText
    const filteredNotes = notes.filter(function(item){
        return item.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    //clear <div id='notes'>'s content
    document.querySelector('div#notes').innerHTML = '';

    //display filtered notes
    filteredNotes.forEach(function(item){
        const newNote = document.createElement('p');
        newNote.textContent = item.title;
        document.querySelector('div#notes').appendChild(newNote);
    })
}

// updates filters {..} whenever user types something into <input>
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.filterText = e.target.value;
    renderNotes(notes, filters); 
})
renderNotes(notes, filters);

//---------------------------------------------------------------------------------------------
// id, classes - used to identify elements in HTML doc
//---------------------------------------------------------------------------------------------
// id naming convention : name-1
// class naming convention :
// id : unique to one element, class : can be held by multiple elements
// document.querySelector('#some-id-name') - for ID
// document.querySelectorAll('.someClass') - for classes

// Making multiple references in querySelector():
// tagName.class-name#id-name , or tagName#id-name.class-name (order doesn't matter)
// element must satisfy all that before querySelector() correctly identifies it

document.querySelector('#bttn-create-note').addEventListener('click', function (e) {
    e.target.textContent = 'Creating a new note...'
})

document.querySelector('#bttn-remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (item) {
        item.remove();
    })
})

//.addEventListener(<type>, function(...))
//type 'change': event is fired when <input> is out-of-focus
//type 'input': every change to <input> element's value attribute fires an event
//---------------------------------------------------------------------------------------------
// document.querySelector('#search-text').addEventListener('input', function (e) {
//     console.log(e.target.value);
// })

// Event Handlers, Event Listeners. OnClick Button listener
//---------------------------------------------------------------------------------------------
document.querySelector('button').addEventListener('click', function (event) {
    console.log('did this work');
    //how to modify element content
    //event.target.textContent = 'test' //event.target - the element that triggered the event
});


//---------------------------------------------------------------------------------------------
// Query and remove first occurance (ONE TAG) 
// const p = document.querySelector('p'); //input: tag
// p.remove();
// console.log(p);

// //---------------------------------------------------------------------------------------------
// // Query all and remove ALL elements with tag '<p>'
// const ps = document.querySelectorAll('p') //return array of all elements with tag <p>


//---------------------------------------------------------------------------------------------
// Modify, remove and print textContent of element 
// ps.forEach(function(p){
//     p.textContent = '*****' //modify text content
//     console.log(p.textContent) //print text content to console
//     p.remove(); //remove text content
// })

//---------------------------------------------------------------------------------------------
// Add a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from JavaScript';

// //element.appendChild adds new element to the end of the child of the current element
// document.querySelector('body').appendChild(newParagraph); 