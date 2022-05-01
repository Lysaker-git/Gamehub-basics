const key = "ck_6e7b5ccf3b139c63b449b01df71f6cfe0fee9158";
const secret = "cs_ff5de18d18fb9e3c4ec80432bf4cb64a979b12b8";
const url = "https://lysakerdesign.store/api/wp-json/wc/v3/products";
const authKEY = `consumer_key=${key}&consumer_secret=${secret}`;

const primaryCont = document.querySelector(".primary_game_cards");
const popularCont = document.querySelector(".secondary_game_cards");
const communityCont = document.querySelector(".community_section");

const searchForm = document.querySelector(".searchbar");
const searchInput = document.querySelector("#search");

async function featuredGames(url) {
    const response = await fetch(url);
    const games = await response.json();
    games.forEach(game => {
        const tags = game.tags;
        const image = game.images[0].src;
        tags.forEach(tag => {
            if (tag.name === "feature") {
                primaryCont.innerHTML += `
                <div href="games-pages/game.html?id=${game.id}" class="shade border-rad" style="background-image: url(${image})">
                    <div class="tag">
                        <h2>${game.name}</h2>
                        <p>Price: ${game.price_html}</p>
                        <a href="games-pages/game.html?id=${game.id}" tabindex="0">View more</a>
                    </div>
                </div>
                `
            } else if (tag.name === "popular") {
                popularCont.innerHTML += `
                <div class="shade border-rad" style="background-image: url(${image})">
                    <div class="second_game_box">
                        <div class="title_and_price">
                            <h3 class="">${game.name}</h3>
                            <p class="">Price: ${game.price_html}</p> 
                        </div>
                        <a href="games-pages/game.html?id=${game.id}" tabindex="0">View more</a>
                    </div>
                </div>
                `
            } else if (tag.name === "community") {
                communityCont.innerHTML += `
                <div class="community_game_cards shade border-rad">
                    <div class="imgage_container_community black" style="background-image: url(${image})">
                        <p class="price_tag_community_games shade">${game.price}$</p>
                    </div>
                    <div class="community_game_name_and_link">
                        <h3>${game.name}</h3>
                        <a href="games-pages/game.html?id=${game.id}">view more</a>
                    </div>

                </div>
                `
            }

        });
    });
}

searchForm.addEventListener ('submit', (event) => {
    event.preventDefault();
    const searchValue = searchInput.value;
    location.href = `search.html?searchValue=${searchValue}`;
})


featuredGames(url + "?" + authKEY)
