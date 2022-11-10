let myLibrary = [];

function Book(title, author, pages, readBool){
  this.title = title
  this.author = author
  this.pages = pages
  this.readBool = readBool
  //this.index
  // this.info = function() {
  //   return title + ' by ' + author + ' , ' + pages + ' , ' + readBool;
  // }
}

// When 'Add book' is clicked, retrieved the form inputs.
const addBook = document.querySelector(".add");
addBook.addEventListener("click", displayLibrary);

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

  //book.index = myLibrary.length;  
  myLibrary.push(book);
}
// Old function to add book to library
// Removed since caused issues
// function addBookToLibrary(book) {
//   book.index = myLibrary.length;  
//   myLibrary.push(book);
//   return;
// }
// Selector to target library container
const lib = document.querySelector(".library");
function displayLibrary() {
  removeAllChildNodes(lib);
  createNewBookObject();
  for(i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);

    // Create a new div to append to the library container

    //const divContainer = document.createElement("div");
    const divTitle = document.createElement("div");
    //const divAuthor = document.createElement("div");
    //const divPages = document.createElement("div");

    // Add the title of the book to the text content of div

    divTitle.textContent = myLibrary[i].title;
    //divAuthor.textContent = myLibrary[i].author;
    //divPages.textContent = myLibrary[i].pages;

    // Append the div to the library container
    document.querySelector(".library").appendChild(divTitle);
  }
}

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
// const deepWork = new Book("Deep Work", "Cal N.", 260, true);
// const theMartian = new Book("The Martian", "Andy W.", 300, true);
// const theOneThing = new Book("The One Thing", "Gary S.", 168, false);
// addBookToLibrary(theHobbit);
// addBookToLibrary(deepWork);
// addBookToLibrary(theMartian);
// addBookToLibrary(theOneThing);
