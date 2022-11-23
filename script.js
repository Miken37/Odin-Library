function log(words){
    console.log(words)          //Log Function
}

let myLibrary = [];             //Empty Array to contain book objects


function addBookToLibrary(){        //Reveals form to input book
    const form = document.querySelector(".form");
    form.style.display = "none";
    if (form.style.display === "none"){
        form.style.display = "inline-block";
    } else {
        form.style.display = "none"; 
    }
}


function Book(title, author, pages, readStatus){        //Constructor for book
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

Book.prototype.toggleRead = function(){                 //Attempt to use prototype to toggleRead. Able to receive log result
    if (this.readStatus == true){                       //Struggling to change DOM for elements in other function
        log("read");
    } else{
        log("not read");
    }
}

const cardContainer = document.querySelector(".card-container");    //Queries the div that contains all the cards
const card = document.querySelector(".card");                       
let idNum = 0;          //For use with the delete button, ID's every remove button within a card

function bookCard(){
    const cardElement = document.createElement("div")       //Creates initial card
    cardElement.classList.add('card');
    cardContainer.appendChild(cardElement);

    const cardInnerContainer = document.createElement("div")    //Two containers within to help with flexbox spacing
    cardInnerContainer.classList.add('card-inner-one');         
    cardElement.appendChild(cardInnerContainer);

    const cardTitleElement = document.createElement("h1");      //Book Title Element 
    cardTitleElement.classList.add('card-title');
    cardInnerContainer.appendChild(cardTitleElement);
    cardTitleElement.innerText = myLibrary[myLibrary.length-1].title;       //Referencing index: OF LENGTH -1

    const cardAuthorElement = document.createElement("p");      //Book Author Element 
    cardAuthorElement.classList.add('card-author');
    cardInnerContainer.appendChild(cardAuthorElement);
    cardAuthorElement.innerText = "Written by: " + myLibrary[myLibrary.length-1].author;

    const cardPagesElement = document.createElement("p");       //Book Pages Element
    cardPagesElement.classList.add('card-pages');
    cardInnerContainer.appendChild(cardPagesElement);
    cardPagesElement.innerText = "Pages: " + myLibrary[myLibrary.length-1].pages;

    const cardInnerContainerTwo = document.createElement("div")
    cardInnerContainerTwo.classList.add('card-inner-two');
    cardElement.appendChild(cardInnerContainerTwo);

    const cardReadElement = document.createElement("button");       //Read element responds based on form toggle (true/false)
    cardReadElement.classList.add('card-read');
    cardInnerContainerTwo.appendChild(cardReadElement);
    cardReadElement.addEventListener("click", () =>{                //CURRENT PROBLEM
        if (this.readStatus == true){      
            cardReadElement.style.backgroundColor = "Red";
            cardReadElement.innerText = "Not Read";
            this.readStatus = false;
        } else {
            cardReadElement.style.backgroundColor = "rgb(0, 182, 0)";
            cardReadElement.innerText = "Read";
            this.readStatus = true;
        }
    })
    
    if (myLibrary[myLibrary.length-1].readStatus == true){          //Sets read div to read or not read based on form.
        cardReadElement.style.backgroundColor = "rgb(0, 182, 0)";
        cardReadElement.innerText = "Read";
    } else{
        cardReadElement.style.backgroundColor = "red";
        cardReadElement.innerText = "Not Read";
    }

    let cardId = idNum;                                            
    const deleteElement = document.createElement("button");         //Delete book code, ID's it to be able to pull 
    deleteElement.classList.add('del-button')                       //proper entry from array and remove card
    deleteElement.innerText = "Remove";
    deleteElement.setAttribute(`id`, `Card${cardId}`)
    idNum +=1;
    cardInnerContainerTwo.appendChild(deleteElement);
    deleteElement.addEventListener("click" , () => {
        myLibrary.splice(cardId, 1);
        cardInnerContainerTwo.parentElement.remove();
    })
}


const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
    addBookToLibrary();
})

const formSubmit = document.querySelector(".form");
formSubmit.addEventListener('submit', (e) =>{
    e.preventDefault();     //Prevents default submit for the form.
    const titleData = formSubmit.elements['title'].value;       //Adds the form value to the variable to be used in constructor
    const authorData = formSubmit.elements['author'].value;
    const pagesData = formSubmit.elements['pages'].value;
    const readData = formSubmit.elements['read-status'].checked;
    const book = new Book(titleData, authorData, pagesData, readData);  //Creates the new book object
    myLibrary.push(book);   //Adds book to the myLibrary array generated at start
    bookCard();             //Creates the book card with the form data
    const form = document.querySelector(".form");
    form.style.display = "none";            //Sets display to 'none' to 'close' the form after submit
})

