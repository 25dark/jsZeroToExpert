// const form = document.querySelector("#searchForm");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchTerm = form.elements.query.value;

//   const config = { params: { q: searchTerm } };

//   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
//   //   console.log(res.data[0].show.image.medium);
//   makeImages(res.data);
//   form.elements.query.value = "";
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("img");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

// select the form
// prevent default
// submit event
// link the api
// get the medium image
// loop through images
// display the image
// clear the inout

const form = document.querySelector("#searchForm");
const resultContainer = document.querySelector("#resultContainer"); // Add a container for the results

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };

  try {
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    clearImages(); // Clear previously displayed images
    makeImages(res.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      resultContainer.appendChild(img); // Append images to the resultContainer
    }
  }
};

const clearImages = () => {
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
};
