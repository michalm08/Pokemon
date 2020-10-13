console.log('hejka')

pokemonTypeCheck = (pokemonName) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

  fetch(url)
      .then((resp) => resp.json()) // Transform the reponse into json
      .then((data) => {
          for(let i = 0; i<=data.types.length-1; i++) {
              let para = document.createElement("li");
              let node = document.createTextNode(data.types[i].type.name);
              para.appendChild(node);
              document.querySelector("ul").appendChild(para);
          }
      })
      .catch((error) => {
          document.querySelector("ul").innerHTML = `<li class='text-danger'>Something went wrong.. Check pokemon name and try again.`;
          
  })
}

document.querySelector('#pokemonTypeCheck').addEventListener('click', () => {
  document.querySelector("ul").innerHTML = '';
  pokemonTypeCheck(document.querySelector('#pokemonName').value)
});