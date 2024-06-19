const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        var info = `${this.title} by ${this.author}, ${this.pages} pages, ` + (this.read ? 'already read.' : 'not read yet.');
        return info;
    };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("1984", "George Orwell", 328, true);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book4 = new Book("Moby Dick", "Herman Melville", 635, true);
const book5 = new Book("Pride and Prejudice", "Jane Austen", 279, false);

const bookExamples = [book1, book2, book3, book4, book5];
bookExamples.forEach((book) => myLibrary.push(book));

function populateBook(book) {
    const bookDisplay = document.getElementById("book-display");
    const newDiv = document.createElement("div");
    newDiv.className = "book-card";

    const title = document.createElement("h3");
    title.textContent = book.title;
    newDiv.appendChild(title);

    const newList = document.createElement("ul");
    
    const author = document.createElement("li");
    author.textContent = `Author: ${book.author}`;
    newList.appendChild(author);

    const pages = document.createElement("li");
    pages.textContent = `Pages: ${book.pages}`;
    newList.appendChild(pages);

    const read = document.createElement("li");
    read.textContent = book.read ? "Read: Yes" : "Read: No";
    newList.appendChild(read);

    newDiv.appendChild(newList);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        removeBookFromLibrary(book, newDiv);
    });
    newDiv.appendChild(deleteButton);

    bookDisplay.appendChild(newDiv);
}

function addBookToLibrary(title, author, pages, read) {
    var newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    populateBook(newBook);
    return newBook;
}

function removeBookFromLibrary(book, bookElement) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    bookElement.remove();
}

document.addEventListener("DOMContentLoaded", () => {
    myLibrary.forEach((book) => populateBook(book));
});

const bookForm = document.querySelector("#form");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(
        bookForm.title.value,
        bookForm.author.value,
        bookForm.pages.value,
        false
    );
    bookForm.reset();
});
