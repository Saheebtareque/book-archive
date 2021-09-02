document.getElementById('output-books').style.display = 'none';
document.getElementById('error-message').style.display = 'none';

// calling the function after the utton is clicked 

const searchbook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('output-books').style.display = 'none';
    // console.log(searchText);

    if (searchText == '') {
        alert(" Please write a book's name to display !!");
    }
    else {
        // data to load
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => showBooks(data.docs))
            .catch(error => displayError(error));
    }
}

const displayError = wrong => {
    document.getElementById('error-message').style.display = 'block';
}

// looping through the array
const showBooks = books => {
    document.getElementById('output-books').style.display = 'block';
    //     console.log(books);

    bookResult = document.getElementById('book-result');
    bookResult.textContent = '';

    let count = 0;
    books.forEach(book => {

        count++;

        const cover_i = book.cover_i;
        if (book.author_name === undefined) {
            book.author_name = 'NOT AVAILABLE';
        }

        if (book.first_publish_year === undefined) {
            book.first_publish_year = 'NOT PROVIDED';
        }

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
            <img style="height:350px"src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text"> <span style="color:green; font-weight:bold" >Author: </span>  ${book.author_name}</p>
            <p class="card-text"> <span style="color:green; font-weight:bold" >Published in:</span> ${book.first_publish_year}</p>
            <p class="card-text"> <span style="color:green; font-weight:bold" >Publisher:</span> ${book.publisher}</p>

            </div>
        </div>`;

        bookResult.appendChild(div);

    })



    document.getElementById('book-total').innerText = count;

}