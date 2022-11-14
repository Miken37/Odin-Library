function log(words){
    console.log(words)
}

let myLibrary = [];

function addBookToLibrary(){
    let bookTitle = input("Enter book title: ");
    let bookAuthor = input("Enter book author: ");
    let bookPageCount = input("Enter book page count: ");
    let bookReadStatus = input("Did you read it? y/n: ");
}

function Book(title, author, pages, readStatus){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}


const book1 = new Book('The Hobbit', 'JRR Tolkien', 300, "Y");
myLibrary.push(book1);

const book2 = new Book('The Hobbit', 'JRR Tolkien', 300, "Y");
myLibrary.push(book2);

const book3 = new Book('The Hobbit', 'JRR Tolkien', 300, "Y");
myLibrary.push(book3);

const book4 = new Book('The Hobbit', 'JRR Tolkien', 300, "Y");
myLibrary.push(book4);


log(myLibrary);