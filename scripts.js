fetch('https://localhost:7289/api/Books')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    
    const books = data;
    
    for (const book of books) {
        
    }


});