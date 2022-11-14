// Array for Library, holds all book objects.
let myLibrary = [];

// Constructor for Book object
class Book {
  constructor(title, author, rating, readBool) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.readBool = readBool;
    this.index;
  }
  changeReadBool() {
    if (this.readBool) {
      this.readBool = false;
      displayLibrary();
      return;
    }
    this.readBool = true;
    displayLibrary();
    return;
  }
}


// When 'Add book' is clicked, retrieve the form inputs.
const addBook = document.querySelector(".add");
addBook.addEventListener("click", function(){
  displayLibrary(true);
}, false);

// Deletes a book from myLibrary
function removeBookFromLibrary(name) {
  let libraryLengthCheck = Math.floor(myLibrary.length / 10) > 0;
  if(libraryLengthCheck){
    myLibrary.splice(parseInt(name.slice(-2)),2);
    updateLibraryIndex();
    displayLibrary(false);
  }
  else{
    myLibrary.splice(parseInt(name.slice(-1)),1);
    updateLibraryIndex();
    displayLibrary(false);
  }

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
  let rating = document.getElementById("rating").value;
  let readBool = document.getElementById("readBool").checked;

  const book = new Book(title, author, rating, readBool);  
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
    // Create a new div to append to the library container
    const divContainer = document.createElement("div");
    const divButton = document.createElement("button");
    const divTitle = document.createElement("div");
    const divAuthor = document.createElement("div");
    const divRating = document.createElement("div");

    const divReadBool = document.createElement("INPUT");
    divReadBool.setAttribute("type", "checkbox");

    // Add the content of the book to the textcontent
    divButton.textContent = "X";
    divButton.className = "delete ";
    divButton.className += i;
    divTitle.textContent = "Title: " + myLibrary[i].title;
    divAuthor.textContent = "Author: " + myLibrary[i].author;
    divRating.textContent = "My Rating: " + myLibrary[i].rating;

    // Checks the checkbox to see if the book has been read yet.
    if(myLibrary[i].readBool){
      divReadBool.checked = true;
    }
    else{
      divReadBool.checked = false;
    }

    // Append the book container to the library container and then the book info to the book container.
    document.querySelector(".library").appendChild(divContainer);
    divContainer.className = "card";
    divContainer.appendChild(divButton);
    divContainer.appendChild(divTitle);
    divContainer.appendChild(divAuthor);
    divContainer.appendChild(divRating);
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

  // Event listener for the book 'have read' check boxes.
  document.querySelectorAll('input[type=checkbox]').forEach(item => {
    item.addEventListener('click', event => {
      // Prevents 'Add book' checkbox from attempting to changeReadBool
      if(item.className == 'checkbox'){return;}

      // Targets the 'delete' button and slices off the number part of the class name
      // This provides an index of the library that we are working with.
      // Library length check adjusts the slice value for libraries > 10
      let libraryLengthCheck = Math.floor(myLibrary.length / 10) > 0;
      if(libraryLengthCheck){
        let name = parseInt(item.parentElement.firstChild.className.slice((-2)));
        myLibrary[name].changeReadBool();
      }
      else{
        let name = parseInt(item.parentElement.firstChild.className.slice((-1)));
        myLibrary[name].changeReadBool();
      }
      
    })
  })

}


// Example Books included on initial page load.
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 5, false);
const deepWork = new Book("Deep Work", "Cal N.", 5, true);
const theMartian = new Book("The Martian", "Andy W.", 4, true);
const theOneThing = new Book("The One Thing", "Gary S.", 4, false);
addBookToLibrary(theHobbit);
addBookToLibrary(deepWork);
addBookToLibrary(theMartian);
addBookToLibrary(theOneThing);

// Run the displayLibrary once to show example books on page load.
displayLibrary(false);