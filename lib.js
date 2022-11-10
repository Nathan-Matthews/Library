let myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    //this.readBool = readBool;
    // this.info = function () {
    //   return title + ' by ' + author + ' , ' + pages + ' , ' + readBool;
    // };
  }
}

// When 'Add book' is clicked, retrieved the form inputs.
const addBook = document.querySelector(".add");
addBook.addEventListener("click", createNewBookObject);

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
  //let readBool = document.getElementById("readBool").value;

  let book = new Book(title, author, pages);
  console.log(book);
  myLibrary.push(book);
  displayLibrary();
}

// Selector to target library container
const lib = document.querySelector(".library");
function displayLibrary() {
  removeAllChildNodes(lib);
  for(i = 0; i < myLibrary.length; i++){
    // Create a new div to append to the library container
    const divTitle = document.createElement("div");

    // Add the title of the book to the text content of div
    divTitle.textContent = myLibrary[i].title;

    // Append the div to the library container
    document.querySelector(".library").appendChild(divTitle);
  }
}

