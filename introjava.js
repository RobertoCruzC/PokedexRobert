const fetchPokemon = () => {
  const url = " https://pokeapi.co/api/v2/pokemon/bulbasaur"
  fetch (url).then((res) => {
    //console.log(res);
    return res.json();

  }). then ((data) => {
    console.log(data);
    let pokeimg = data.sprites.front_default;
    console.log(pokeimg);
    pokeimage(pokeimg);

  }
  )


}
   
fetchPokemon ();

const pokeImage = (url) => {
  const pokeImage = document.getElementById("pokeImg");
  pokeimg.src = url;

}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
  
const imprimir = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value;
  console.log("Hola "  + pokeInput );
}         