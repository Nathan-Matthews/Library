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
addBook.addEventListener("click", function(){
  displayLibrary(true);
}, false);

document.querySelectorAll('.delete').forEach(item => {
  item.addEventListener('click', event => {
    console.log("You made it!");
  })
})

// Deletes a book from myLibrary
function removeBookFromLibrary(name) {
  console.log(name.slice(-1))
  myLibrary.splice(parseInt(name.slice(-1)),1);
  updateLibraryIndex();
  displayLibrary(false);
  console.log(myLibrary);
}

// Updates the Library index after a book is deleted.
function updateLibraryIndex(){
  for(let i = 0; i < myLibrary.length; i++){
    myLibrary[i].index = i;
  }
}

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
function displayLibrary(addNewBookBool) {
  removeAllChildNodes(lib);
  // If the call was made by clicking "add book" create a new book object
  // This prevents this call from being made when deleting a book
  if(addNewBookBool){
    createNewBookObject();
  }
  for(i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);

    // Create a new div to append to the library container
    const divContainer = document.createElement("div");
    const divButton = document.createElement("button");
    const divTitle = document.createElement("div");
    const divAuthor = document.createElement("div");
    const divPages = document.createElement("div");
    const divReadBool = document.createElement("div");

    // Add the content of the book to the textcontent
    divButton.textContent = "Delete";
    divButton.className = "delete ";
    divButton.className += i;
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
    divContainer.appendChild(divButton);
    divContainer.appendChild(divTitle);
    divContainer.appendChild(divAuthor);
    divContainer.appendChild(divPages);
    divContainer.appendChild(divReadBool);

  }
  // Add the event listener for the delete buttons after they
  // are recreated each time since they are dynamically created.
  document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', event => {
      removeBookFromLibrary(item.className);
      item.parentElement.remove();
    })
  })
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

displayLibrary(false);