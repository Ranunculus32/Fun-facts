// function displayFact(response) {
//   console.log(response.data.answer);

//   new Typewriter("#fun-fact-text", {
//     strings: response.data.answer,
//     autoStart: true,
//     cursor: null,
//     delay: 20,
//   });
// }

function displayFact(response) {
  let funFactElement = document.querySelector("#fun-fact-text");
  funFactElement.innerHTML = response.data.answer;
}

function generateFact(event) {
  event.preventDefault();
  let apiKey = "066o5d48fda51f70aa04736cb34b18dt";
  let context =
    "You are a medical expert and funny API. Generate one short and fun fact of the human body part ";
  let bodyPartInput = document.getElementById("bodyPartInput").value;
  let prompt = bodyPartInput;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let funFactElement = document.querySelector("#fun-fact-text");

  funFactElement.innerHTML = "Generating a fun fact for you... Please wait.";

  console.log("Calling the AI API");
  axios
    .get(apiUrl)
    .then(displayFact)
    .catch((error) => {
      console.error("Error fetching data:", error);
      funFactElement.innerHTML =
        "Failed to generate fun fact. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", function () {
  let generatorButton = document.querySelector("#generate-fun-btn");
  generatorButton.addEventListener("click", generateFact);
});
