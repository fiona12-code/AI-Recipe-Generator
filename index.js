// display recipe
function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
// Generate recipe
function generateRecipe(event) {
  event.preventDefault();

  // build API URL
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "3553b3fea60f2bt4edfefb3ad730a38o";
  let prompt = `generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a world-renowned chef who loves writing recipes from around the world, your mission is to generate simple, short and easy to follow recipes. Write in html format but do not display that you are writing in html format. Do not display the heading element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating recipe about ${instructionsInput.value}...</div>`;

  console.log("Generating recipe");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  // make a call to API
  axios.get(apiURL).then(displayRecipe);
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);
