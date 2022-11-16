function log(words){
    console.log(words)
}

let myLibrary = [];


function addBookToLibrary(){ //RE WRITE THIS AS A FORM
    /*let bookTitle = prompt("Enter book title: ");
    let bookAuthor = prompt("Enter book author: ");
    let bookPageCount = prompt("Enter book page count: ");
    let bookReadStatus = prompt("Did you read it? y/n: ");*/
    /*const book = new Book(bookTitle, bookAuthor, bookPageCount, bookReadStatus);
    myLibrary.push(book);*/
    log(myLibrary);
    const form = document.querySelector(".formContainer");
    form.style.display = "none";
    if (form.style.display === "none"){
        form.style.display = "flex";
    } else {
        form.style.display = "none";
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
    bookCard();
})