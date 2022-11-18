function log(words){
    console.log(words)
}

let myLibrary = [];


function addBookToLibrary(){ 
    const form = document.querySelector(".form");
    form.style.display = "none";
    if (form.style.display === "none"){
        form.style.display = "inline-block";
    } else {
        form.style.display = "none"; //Must switch back to none after form submition
    }
}

function Book(title, author, pages, readStatus){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

const cardContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");


function bookCard(){
    const cardElement = document.createElement("div")
    cardElement.classList.add('card');
    cardContainer.appendChild(cardElement);

    const cardTitleElement = document.createElement("h1");
    cardTitleElement.classList.add('card-title');
    cardElement.appendChild(cardTitleElement);
    cardTitleElement.innerText = myLibrary[myLibrary.length-1].title;       //Referencing index: OF LENGTH -1

    const cardAuthorElement = document.createElement("p");
    cardAuthorElement.classList.add('card-author');
    cardElement.appendChild(cardAuthorElement);
    cardAuthorElement.innerText = "Written by: " + myLibrary[myLibrary.length-1].author;

    const cardPagesElement = document.createElement("p");
    cardPagesElement.classList.add('card-pages');
    cardElement.appendChild(cardPagesElement);
    cardPagesElement.innerText = "Pages: " + myLibrary[myLibrary.length-1].pages;

    const cardReadElement = document.createElement("p");
    cardReadElement.classList.add('card-read');
    cardElement.appendChild(cardReadElement);
    cardReadElement.innerText = "Read: " + myLibrary[myLibrary.length-1].readStatus;

    const deleteElement = document.createElement("div");
    deleteElement.classList.add('del-button')
    cardElement.appendChild(deleteElement);
    deleteElement.addEventListener("click" , () => {
        log("delete me bb");
    })
}

/*Old bookCard function with forEach loop
function bookCard(){
    myLibrary.forEach(book => {
        const test = document.createElement("div")
        myLibrary.pop();        //Removes item from array so it is able to add only ONE item at a time instead of the entire array. 
        test.classList.add('card');
        cardContainer.appendChild(test);
    });
}
*/

const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
    addBookToLibrary();
})

const formSubmit = document.querySelector(".form");
formSubmit.addEventListener('submit', (e) =>{
    e.preventDefault();
    const titleData = formSubmit.elements['title'].value;
    const authorData = formSubmit.elements['author'].value;
    const pagesData = formSubmit.elements['pages'].value;
    const readData = formSubmit.elements['read-status'].checked;
    const book = new Book(titleData, authorData, pagesData, readData); 
    myLibrary.push(book);  
    log(myLibrary);
    bookCard();
})