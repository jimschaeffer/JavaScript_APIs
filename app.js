console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const giphyKey = `PNt5YX0oqcYgnfjkFxGseaVJM83Bs7NB`;
const url = `https://api.giphy.com/v1/gifs/translate`;

// search button
const submitSearch = document.getElementById("submitSearch");
// search input
const searchWord = document.getElementById("searchWord");
// image element
const img = document.getElementById("img");
// feedback paragraph
const feedback = document.getElementById("feedback");

submitSearch.addEventListener("click", (event) => {
    fetch (`${url}?api_key=${giphyKey}&s=${searchWord.value}`)
    .then((response) => {
        return response.json();
    })
.then((result) => {
    console.log(result.data.url);
    img.src = result.data.images.original.url;
    searchWord.value = "";
    feedback.textContent = "";
})
.catch((err) => {
    console.error(err);
    feedback.textContent = err.message;
})
})