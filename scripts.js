//populate the page with the existing book library using a for loop
fetch('https://localhost:7289/api/Books')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    
    const books = data;

    //determine and populate the number of card rows needed
    const numOfBooks = data.length
    const rowsNeeded = Math.ceil(numOfBooks / 3)
    const docBody = document.querySelector('main')

    for (let i = 0; i < rowsNeeded; i++) {
      const container = document.createElement('div')
      container.setAttribute('class', 'container')
      docBody.appendChild(container)

      const row = document.createElement('div')
      row.setAttribute('class', 'row')
      row.setAttribute('id', `row${i}`)
      container.appendChild(row)
    }

    //populate books into rows
    for (const book of books) {
      //create a variable for each data piece in the books
        const bookTitle = book.bookName;
        const bookPrice = book.price;
        const bookCategory = book.category;
        const bookAuthor = book.author;
        
      //create a column, card, body, title, text, and buttons for each book
      const col = document.createElement('div')
      col.setAttribute('class', 'col-sm-4')
      const row0 = document.getElementById('row0')
      row0.appendChild(col)

      const bookCard = document.createElement('div')
      bookCard.setAttribute('class', 'card')
      col.appendChild(bookCard)

      const cardBody = document.createElement('div')
      cardBody.setAttribute('class', 'card-body')
      bookCard.appendChild(cardBody)

      const cardTitle = document.createElement('h5')
      cardTitle.setAttribute('class', 'card-title')
      cardTitle.textContent = bookTitle;
      cardBody.appendChild(cardTitle)

      const cardText = document.createElement('p')
      cardText.setAttribute('class', 'card-text')
      cardText.innerHTML = `By: ${bookAuthor}<br/>Category: ${bookCategory}<br/>Price: ${bookPrice}`;
      cardBody.appendChild(cardText)

      const editButton = document.createElement('a')
      editButton.setAttribute('class', 'btn btn-primary me-1')
      editButton.textContent = 'Edit';
      cardBody.appendChild(editButton)

      const deleteButton = document.createElement('a')
      deleteButton.setAttribute('class', 'btn btn-secondary')
      deleteButton.textContent = 'Delete';
      cardBody.appendChild(deleteButton)


    }
});


const newBook = () => {

  fetch('https://localhost:7289/api/Books', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "bookName": document.getElementById("newBookName").innerHTML,
      "price": 0,
      "category": "string",
      "author": "string"
    })
    }).then(res => res.json())
    .then(res => console.log(res));
}

const editBook = () => {

  fetch('https://localhost:7289/api/Books', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "bookName": document.getElementById("newBookName").innerHTML,
      "price": 0,
      "category": "string",
      "author": "string"
    })
    }).then(res => res.json())
    .then(res => console.log(res));
}

const deleteBook = () => {

  fetch('https://localhost:7289/api/Books', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "bookName": document.getElementById("newBookName").innerHTML,
      "price": 0,
      "category": "string",
      "author": "string"
    })
    }).then(res => res.json())
    .then(res => console.log(res));

}

//const submitButton = document.getElementById("newBookCreate");

//submitButton.addEventListener("click", () => {
//    newBook()
//})