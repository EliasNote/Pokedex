let offset = 1;
let limit = 10;
let pokemons = []

function buttonBack() {
    if (offset > 1) {
        offset -= 10, limit -= 10;
        loadPoke()
    }
}

function buttonNext() {
    if (offset < 250) {
        offset += 10, limit += 10;
        loadPoke()
    }
}

async function loadPoke() {
    const list = document.getElementById("pokemonList");
    pokemons = []
    list.innerHTML = "";
    for (let i = offset; i <= limit; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
        await fetch(url).then((response) => response.json()).then((response) => {pokemons.push(response)})
    }
    convHtml()
}


loadPoke()
