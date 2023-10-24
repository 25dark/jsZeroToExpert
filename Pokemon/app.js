// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

//How I did mine

// const container = document.querySelector("#container");

// for (let i = 1; i <= 100; i++) {
//   const newImg = document.createElement("img");
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//   container.appendChild(newImg);
// }

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  pokemon.classList.add("pokemon");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
