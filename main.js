// Challenge 1
let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");

let savedStringValue = localStorage.getItem('savedStringValue');

if (savedStringValue === null) {
    savedString.innerText = 'Nothing Saved - Please submit an item into the form';
} else {
    savedString.innerText = savedStringValue;
}

stringSaveForm.addEventListener('submit', function(event){
    event.preventDefault();

    //localStorage.setItem('key','value') - adds a key value pair into your local storage that will persist even after you refresh or exist the page
    localStorage.setItem('savedStringValue', stringInput.value);

    //localStorage.getItem('key') - takes in a key as a parameter and gets the value associated with that key from localStorage
    console.log(localStorage.getItem('savedStringValue'));

    savedStringValue = localStorage.getItem('savedStringValue');
    savedString.innerText = savedStringValue;
})

// Challenge 2

let counter = document.querySelector("#counter");
let count = localStorage.getItem('count');

if (count === null) {
    count = 0
    counter.innerText = count
} else {
    counter.innerText = count
}

count++;
localStorage.setItem('count', count);

// Challenge 3

let listForm = document.querySelector("#list-form");
let listInput = document.querySelector("#list-input");
let savedList = document.querySelector("ol");
// let savedListItem = document.querySelector("li");


let savedListValue = localStorage.getItem('savedListValue');



function setupArray() {
    savedListValue = localStorage.getItem('savedListValue');
    if (savedListValue === null) {
        savedListValue = [];
        
    } else {
        savedListValue = JSON.parse(savedListValue);

        for (const str of savedListValue) {
            console.log(str);
            let savedListItem = document.createElement("li")

            savedList.appendChild(savedListItem);

            savedListItem.innerHTML = str;

        }
    }

}

listForm.addEventListener('submit', function(event) {
    event.preventDefault();
    setupArray();
    let newInput = listInput.value;
    savedListValue.push(newInput);
    // localStorage.setItem('savedListValue', JSON.stringify(savedListValue));
    // savedListValue = localStorage.getItem('savedListValue');
    console.log(savedListValue);
    
    let savedListItem = document.createElement("li");

    savedList.appendChild(savedListItem);

    savedListItem.innerHTML = newInput;


        
    


})



