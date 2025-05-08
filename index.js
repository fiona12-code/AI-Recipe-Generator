function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ["Recipe will be displayed here"],
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", generateRecipe);
