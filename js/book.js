const searchbook = () =>
{
    const searchField = document.getElementById('search-field');
    const searchText  =  searchField.value;
    searchField.value = '';
    // console.log(searchText);

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showBooks(data.docs))
}

const showBooks = books =>
{
    bookResult = document.getElementById('book-result');
    bookResult.textContent = '';
    books.forEach(book => {
        console.log(book.cover_i);
        // const div = document.createElement('div');
        // div.classList.add('col');
        // div.innerHTML= ``;
    })

}