const searchKey = "ck_91e7e8ce0e372ca5b386b3efd76474aab57c6e07";
const searchSecret = "cs_a591cc5b3b754afa5f0edb0a8e6ac438e98ed097";
const searchUrl = "https://lysakerdesign.store/api/wp-json/wc/v3/products";
const searchAuthKEY = `consumer_key=${searchKey}&consumer_secret=${searchSecret}`;

const tagSelection = document.querySelector(".tag-selection");
const searchForm = document.querySelector(".searchbar");
const searchInput = document.querySelector("#search");
const checkForm = document.querySelector(".tag-selection")

const searchCont = document.querySelector(".search_results");
const query = document.location.search;
const params = new URLSearchParams(query);
const value = params.get("searchValue").toLowerCase();

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
                    <a href="game.html?id=${game.id}">view more</a>
                </div>
            </div>
            `

        }
    })
}

searchForm.addEventListener ('submit', (event) => {
    event.preventDefault();
    const searchValue = searchInput.value;
    location.href = `search.html?searchValue=${searchValue}`;
});



searchResults(searchUrl + "?" + searchAuthKEY);
