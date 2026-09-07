let searchBtn = document.getElementById("searchBtn")
let pokemonInput = document.getElementById("pokemonInput")
let pokemonResult = document.getElementById("pokemonResult")


searchBtn.addEventListener("click", () => {
    pokemonResult.textContent = ""
    let valuePokemon = pokemonInput.value.trim().toLowerCase()

    if (valuePokemon == "") {
        pokemonResult.textContent = "Please add a Pokemon name!"
        return
    }

    pokemonResult.textContent = "Just a moment please"

    let url = "https://pokeapi.co/api/v2/pokemon/" + valuePokemon

    fetch(url).then((response) => {
        if (!response.ok) {
            throw Error("No Pokemon for you!")
        }
        return response.json()
    }).then((data) => {
        let name = data.name
        let height = data.height
        let weight = data.weight
        let types = data.types.map(function(ev) {
            return ev.type.name
        })
        let abilities = data.abilities.map(function(ab) {
            return ab.ability.name
        })
        let stats = data.stats.map(function(st) {
            return {
                nameof: st.stat.name,
                valueof: st.base_stat
            }
        })

        pokemonResult.textContent = ""

        let nameEle = document.createElement("h2")
        nameEle.textContent = name
        pokemonResult.append(nameEle)

        let imageEle = document.createElement("img")
        imageEle.src = data.sprites.front_default
        imageEle.width = 200
        imageEle.height = 200
        pokemonResult.append(imageEle)

        let heightEle = document.createElement("h4")
        heightEle.textContent = "height: " + height
        pokemonResult.append(heightEle)

        let weightEle = document.createElement("h4")
        weightEle.textContent = "weight: " + weight
        pokemonResult.append(weightEle)

        let typesEle = document.createElement("h4")
        typesEle.textContent = "types: " + types.join(", ")
        pokemonResult.append(typesEle)

        let abilitiesEle = document.createElement("h4")
        abilitiesEle.textContent = "abilities: " + abilities.join(", ")
        pokemonResult.append(abilitiesEle)

        stats.forEach(element => {
            let statEle = document.createElement("h4")
            statEle.textContent = element.nameof + ": " + element.valueof
            pokemonResult.append(statEle)
        })
    }).catch((error) => {
        pokemonResult.append(error.message)
    })
})