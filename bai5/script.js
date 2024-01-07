if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([]))
}

document.getElementById("btn").addEventListener('click', function() {
    // console.log('hello')
    const name = document.getElementById('name')
    const author = document.getElementById('author')

    const book = {
        name: name,
        author: author
    }

    const books = JSON.parse(localStorage.getItem('books'))
    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))

})
