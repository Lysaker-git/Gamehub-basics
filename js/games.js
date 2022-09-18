const gamesKey = "ck_91e7e8ce0e372ca5b386b3efd76474aab57c6e07";
const gamesSecret = "cs_a591cc5b3b754afa5f0edb0a8e6ac438e98ed097";
const gamesUrl = "https://lysakerdesign.store/api/wp-json/wc/v3/products";
const gamesAuthKEY = `consumer_key=${gamesKey}&consumer_secret=${gamesSecret}`;

const imageCont = document.querySelector(".carousel_img_1");
const starsCont = document.querySelector(".stars_games");
const gameHeader = document.querySelector(".game_name");


const query = document.location.search;
const params = new URLSearchParams(query);
const value = params.get("id");

const recommendedGames = document.querySelector(".recommends");

async function randomRecommend (url) {
    const response = await fetch(url);
    const games = await response.json();
    const randArray = [];
    
    while(randArray.length < 4) {
        let random = Math.floor(Math.random() * 8) + 1;
        if (randArray.indexOf(random) === -1) randArray.push(random);
    }
    randArray.forEach(int => {
        console.log(games[int])
        const image = games[int].images[0].src;
        recommendedGames.innerHTML += `
        <div class="game_grid_recommend shade border-rad" style="background-image: url(${image})">
            <div class="bottom_line_recommend">
                <div class="title_and_price">
                    <h3 class="">${games[int].name}</h3>
                    <p class="">${games[int].price}$</p> 
                </div>
                <a href="game.html?id=${games[int].id}"  tabindex="0">View more</a>
            </div>
        </div>
        `
    });
    console.log(games);
}
randomRecommend(gamesUrl + "?" + gamesAuthKEY)

async function getGame(url) {
    const response = await fetch(url);
    const games = await response.json();
    games.forEach(game => {
        const id = value;
        const image = game.images[0].src;
        console.log(image)
        if (game.id === parseFloat(value)) {
            imageCont.style.backgroundImage = `url('${image}')`;
            gameHeader.innerHTML = game.name;

            const rating = game.attributes[0].options[0];
            let stars = "";
            let starsText = "";
            for (let i = 0; i < parseFloat(rating); i++) {
                starsText = i + 1;
                stars += `<i class="fas fa-star"></i>`
            }
            starsCont.innerHTML = stars
        }
    });
}

getGame(gamesUrl + "?" + gamesAuthKEY);