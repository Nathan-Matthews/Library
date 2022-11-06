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

const addBook = document.querySelector(".add");
addBook.addEventListener("click", addBookToLibrary);
/*
  Add button functionality to click and have the form animate
  into frame

  Will need to look up how to create an object out of the info
  that a user puts in a form.
*/

function addBookToLibrary(book) {
  myLibrary.push(book);
  //Add an index for the book
  book.index = myLibrary.length - 1;
  return;
}
// Selector to target library container
const lib = document.querySelector(".library");
function displayLibrary(myLibrary) {
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

displayLibrary(myLibrary);


