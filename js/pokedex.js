// Recuperando o nome do pokemon
const pokemonName = document.querySelector('.pokemon__name')


// Recuperando o gif do pokemon
const pokemonGif = document.querySelector('.pokemon_imagem')

// Recuperando o numero do Pokemon
const pokemonId = document.querySelector('.pokemon__number')

// Buscando dados do pokemon na API PokeApi
const fetchPokemon = async (pokemon) => {

	const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

	const data = await APIResponse.json()

	return data
}

// Mostrando os dados na tela
const renderPokemon = async (pokemon) => {

	const data = await fetchPokemon(pokemon)

	pokemonName.innerHTML = data.name

	pokemonGif.src = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`

	pokemonId.innerHTML = data.id

	console.log(data)

}

function pesquisaPokemon()
{

	const valorCampo = document.querySelector('.input__search').value

	console.log(valorCampo)
	// renderPokemon(valorCampo.value)
}

const proximoPokemon = () => {
	let valorId = parseInt(pokemonId.innerHTML) + 1

	if(isNaN(valorId)){
		valorId = 1
	}
	
	renderPokemon(valorId)
}

const prevPokemon = () => {
	let valorId = parseInt(pokemonId.innerHTML) - 1
	
	if(isNaN(valorId)){
		valorId = 1
	}
	
	if(valorId == 0){
		valorId = 1
	}

	renderPokemon(valorId)
}