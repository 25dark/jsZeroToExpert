// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

const jokeText = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("li");
  newLI.append(jokeText);
  jokes.append;
};

const getDadJoke = async () => {
  try {
    const button = document.querySelector("#button");
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/");
    return res.data.joke;
  } catch (e) {
    return "No Joke Available! Sorry :(";
  }
};

button.addEventListener("click", addNewJoke);
