let myLibrary = [];

function Book(title, author, pages, readBool){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBool = readBool;
  this.index;
  this.info = function() {
    return title + ' by ' + author + ' , ' + pages + ' , ' + readBool;
  }
}

// When 'Add book' is clicked, retrieved the form inputs.
const addBook = document.querySelector(".add");
addBook.addEventListener("click", createNewBookObject);
/*
  able to get form info in 'createNewBookObject' but
  it is not being added to myLibrary properly.

  Also pages is being read as a string.
*/

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
  let readBool = document.getElementById("readBool").value;

  const book = new Book(title, author, pages, readBool);
  addBookToLibrary(book);
  displayLibrary(myLibrary);

  return;
}

function addBookToLibrary(book) {
  book.index = myLibrary.length;  
  myLibrary.push(book);
  return;
}
// Selector to target library container
const lib = document.querySelector(".library");
function displayLibrary(myLibrary) {
  removeAllChildNodes(lib);
  for(i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);

    // Create a new div to append to the library container
    const div = document.createElement("div");
    // Add the title of the book to the text content of div
    div.textContent = myLibrary[i].title;
    // Append the div to the library container
    document.querySelector(".library").appendChild(div);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const deepWork = new Book("Deep Work", "Cal N.", 260, true);
const theMartian = new Book("The Martian", "Andy W.", 300, true);
const theOneThing = new Book("The One Thing", "Gary S.", 168, false);
addBookToLibrary(theHobbit);
addBookToLibrary(deepWork);
addBookToLibrary(theMartian);
addBookToLibrary(theOneThing);


