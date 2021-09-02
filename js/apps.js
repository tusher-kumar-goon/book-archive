const searchResult = document.getElementById('search-result');
const result = document.getElementById('result');
const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText);
  if (searchText === '') {
    result.innerText = 'You have to write something to search!';
  }
  else {
    result.innerText = '';

    // clear data
    searchField.value = ' ';
    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`


    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.docs));
  }
}


const displaySearchResult = docs => {


  searchResult.textContent = ' ';
  // forEach
  if (docs.length === 0) {
    result.innerText = 'Please Give a Valid Book Name For Search';
  }
  else {
    result.innerText = `Showing top result:${docs.length}`;

    docs.forEach(doc => {

      console.log(doc);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
    <div class="card h-100 border border-4">
           <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top p-3 h-100 w-100" alt="...">
           <div class="card-body">
            <h2 class="card-title">${doc.title}</h2>
            <p class="card-text">Author : ${doc.author_name}</p>
            <p class="card-text">First Published : ${doc.first_publish_year}</p>
            <p class="card-text">publisher : ${doc.publisher}</p>
          </div>
        </div>
    `;
      searchResult.appendChild(div);
    });
  }
}