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
        // console.log(book.cover-i);
       const cover_i = book.cover_i;
       
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `<div class="card h-100">
        <img style="height:350px"src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Author: ${book.author_name}</p>
          <p class="card-text">Published in: ${book.first_publish_year}</p>
          <p class="card-text">Publisher: ${book.publisher}</p>

        </div>
      </div>`;
      
      bookResult.appendChild(div);

    })

}