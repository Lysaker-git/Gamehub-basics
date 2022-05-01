

const imageCont = document.querySelector(".carousel_img_1");

const query = document.location.search;
const params = new URLSearchParams(query);
const value = params.get("id");

async function getGame(url) {
    const response = await fetch(url);
    const games = await response.json();
    games.forEach(game => {
        const id = value;
        const image = game.images[0].src;
        console.log(image)
        if (game.id === parseFloat(value)) {
            imageCont.style.backgroundImage = `url('${image}')`;
        }
    });
}

getGame(url + "?" + authKEY);