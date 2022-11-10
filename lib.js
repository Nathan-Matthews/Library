// Array for Library, holds all book objects.
let myLibrary = [];

// Constructor for Book object
function Book(title, author, pages, readBool){
  this.title = title
  this.author = author
  this.pages = pages
  this.readBool = readBool
  this.index
  this.info = function() {
    return title + ' by ' + author + ' , ' + pages + ' , ' + readBool;
  }
}

// When 'Add book' is clicked, retrieve the form inputs.
const addBook = document.querySelector(".add");
addBook.addEventListener("click", displayLibrary);

// Selector to target library container
const lib = document.querySelector(".library");

// Removes all child nodes from a parent.
function removeAllChildNodes(parent) {
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

// Use the form inputs to create a new book object and then 
// add the book to the library.
function createNewBookObject() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readBool = document.getElementById("readBool").checked;

  const book = new Book(title, author, pages, readBool);  
  addBookToLibrary(book);
}
// Adds a book to the library array.
function addBookToLibrary(book) {
  book.index = myLibrary.length;  
  myLibrary.push(book);
  return;
}


// Removes all child nodes of library and recreates the display from myLibrary plus the newBook Object.
function displayLibrary() {
  removeAllChildNodes(lib);
  createNewBookObject();
  for(i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);

    // Create a new div to append to the library container
    const divContainer = document.createElement("div");
    const divTitle = document.createElement("div");
    const divAuthor = document.createElement("div");
    const divPages = document.createElement("div");
    const divReadBool = document.createElement("div");

    // Add the content of the book to the textcontent
    divTitle.textContent = myLibrary[i].title;
    divAuthor.textContent = myLibrary[i].author;
    divPages.textContent = myLibrary[i].pages;

    // Checks the checkbox to see if the book has been read yet.
    if(myLibrary[i].readBool){
      divReadBool.textContent = "You have read this book.";
    }
    else{
      divReadBool.textContent = "You have NOT read this book yet!";
    }

    // Append the book container to the library container and then the info to the book container.
    document.querySelector(".library").appendChild(divContainer);
    divContainer.appendChild(divTitle);
    divContainer.appendChild(divAuthor);
    divContainer.appendChild(divPages);
    divContainer.appendChild(divReadBool);

  }
}

// Example Books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const deepWork = new Book("Deep Work", "Cal N.", 260, true);
const theMartian = new Book("The Martian", "Andy W.", 300, true);
const theOneThing = new Book("The One Thing", "Gary S.", 168, false);
addBookToLibrary(theHobbit);
addBookToLibrary(deepWork);
addBookToLibrary(theMartian);
addBookToLibrary(theOneThing);

displayLibrary();