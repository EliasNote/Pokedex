function convHtml() {
    const list = document.getElementById("pokemonList")
    for (let i = 0; i < 10; i++) {
        list.innerHTML +=
        `<li class="pokemon ${pokemons[i].types[0].type.name}">
            <div class="detail">
                <img src="${pokemons[i].sprites.other.dream_world.front_default}">
                <span class="name">${pokemons[i].name}</span>
                <ol class="types">
                    <li class="type ${pokemons[i].types[0].type.name}">${pokemons[i].types[0].type.name}</li>
                    ${convHtmlType(pokemons[i])}
                </ol>
                <button class="detalhes" value="${i}" onclick="pokeDetails(this)">Detalhes</button>
            </div>
        </li>`
    }
}

function convHtmlType(pokemon) {
    if (pokemon.types[1]) {
        return `<li class="type ${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</li>`
    } else {
        return ''
    }
}



function pokeDetails(pokemon) {
    //cor do background
    document.getElementById('info').className = `${pokemons[pokemon.value].types[0].type.name}`
    
    //nome do pokemon
    document.querySelector('#detail-name').innerText = pokemons[pokemon.value].name;

    //carrega os tipos do pokemons e adiciona as classes de cores
    document.querySelector('#info-type0').innerText = pokemons[pokemon.value].types[0].type.name;
    document.getElementById('info-type0').className = `type ${pokemons[pokemon.value].types[0].type.name}`;
    if (pokemons[pokemon.value].types[1]) {
        document.querySelector('#info-type1').innerText = pokemons[pokemon.value].types[1].type.name;
        document.getElementById('info-type1').className = `type ${pokemons[pokemon.value].types[1].type.name}`;
    } else {
        document.querySelector('#info-type1').innerText = '';
        document.getElementById('info-type1').className = `type`;
    }

    //carrega a imagem do pokemon
    document.querySelector('#info-img').src = `${pokemons[pokemon.value].sprites.other.dream_world.front_default}`;

    //carrega as informações do pokemon
    document.querySelector(".order").innerText = `Order ${pokemons[pokemon.value].order}`
    let abilities = []
    for (let i = 0; i < pokemons[pokemon.value].abilities.length; i++) {
        abilities.push(pokemons[pokemon.value].abilities[i].ability.name)
    }
    document.querySelector(".abilities").innerText = abilities.join(", ")
    document.querySelector(".height").innerText = `Height ${pokemons[pokemon.value].height}`
    document.querySelector(".weight").innerText = `Weight ${pokemons[pokemon.value].weight}`

    //carrega os status do pokemon
    document.getElementById("info-stats-list").innerHTML = '';
    for (let i = 0; i < pokemons[pokemon.value].stats.length; i++) {
        document.getElementById("info-stats-list").innerHTML +=
            `<li class="${pokemons[pokemon.value].stats[i].stat.name}"><span>${pokemons[pokemon.value].stats[i].stat.name}</span><div><div style="width: ${(pokemons[pokemon.value].stats[i].base_stat)/1.5}%" value="${pokemons[pokemon.value].stats[i].base_stat}"></div></div></li>`;
    }

    altern()
}

function altern() {
    if (document.querySelector('#info').style.display == "none") {
        document.querySelector('#info').style.display = "block"
    } else {
        document.querySelector('#info').style.display = "none"
    }
}

function alternTitle(selected) {
    document.querySelector(".info-about").style.textDecoration = "none";
    document.querySelector(".info-stats").style.textDecoration = "none";
    selected.style.textDecoration = "underline";

    document.querySelectorAll(".info-about")[1].style.display = "none";
    document.querySelectorAll(".info-stats")[1].style.display = "none";
    document.querySelectorAll(`.${selected.className}`)[1].style.display = "flex";

}