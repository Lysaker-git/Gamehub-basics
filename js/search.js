const key = "ck_6e7b5ccf3b139c63b449b01df71f6cfe0fee9158";
const secret = "cs_ff5de18d18fb9e3c4ec80432bf4cb64a979b12b8";
const url = "https://lysakerdesign.store/api/wp-json/wc/v3/products";
const authKEY = `consumer_key=${key}&consumer_secret=${secret}`;
const tagsURL = "/tags"

const tagSelection = document.querySelector(".tag-selection");
const searchForm = document.querySelector(".searchbar");
const searchInput = document.querySelector("#search");
const checkForm = document.querySelector(".tag-selection")

const searchCont = document.querySelector(".search_results");
const query = document.location.search;
const params = new URLSearchParams(query);
const value = params.get("searchValue").toLowerCase();



async function getCheckbox(url) {
    const response = await fetch(url);
    const tags = await response.json();
    console.log(tags);
    tags.forEach(tag => {
        searchCont.innerHTML += `
        <input type="checkbox" name="${tag.name}" id="${tag.name}" class="checkBoxes">
        <label for="${tag.name}">${tag.name}</label>
        `
    })
};

getCheckbox(url + tagsURL + "?"+ authKEY)


async function searchResults(url) {
    const response = await fetch(url);
    const games = await response.json();
    games.forEach(game => {
        let gameName = game.name.toLowerCase();
        const image = game.images[0].src;

        if (gameName.includes(value)) {
            const rating = game.attributes[0].options[0];
            let stars = "";
            let starsText = "";
            for (let i = 0; i < parseFloat(rating); i++) {
                starsText = i + 1;
                stars += `<i class="fas fa-star"></i>`
            }
            searchCont.innerHTML += `
            <div class="search_cards shade border-rad">
                <div class="stars">
                    <div class="small_number">${starsText}</div>
                    ${stars}
                </div>
                <div class="search_image" style="background-image: url(${image})"></div>
                <div class="search_info">
                    <h3>${game.name}</h3>
                    <p>${game.short_description}</p>
                    <p class="hidden_content_small">${game.short_description}</p>
                </div>
                <div class="search_bar">
                    <p>16</p>
                    <a href="games-pages/game.html?id=${game.id}">view more</a>
                </div>
            </div>
            `

        }
    })
    if (searchCont.innerHTML === "") {
        searchCont.innerHTML = "<h2>No Results</h2>"
    }
}

searchForm.addEventListener ('submit', (event) => {
    event.preventDefault();
    const searchValue = searchInput.value;
    location.href = `search.html?searchValue=${searchValue}`;
});



searchResults(url + "?" + authKEY);
