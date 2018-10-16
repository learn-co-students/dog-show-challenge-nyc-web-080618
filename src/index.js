document.addEventListener('DOMContentLoaded', () => {
  const dogContainer = document.querySelector(".dog-table")
  const inputForm = document.querySelector("#dog-form")
  const inputNameField = document.querySelector(".dog-name")
  const inputBreedField = document.querySelector(".dog-breed")
  const inputSexField = document.querySelector(".dog-sex")
  const submitBtn = document.querySelector("#submit-button")

  fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(jsonObj => {
    dogContainer.innerHTML += jsonObj.map((dogObj) => {
      let newDog = new Dog(dogObj);
      return newDog.render();
    }).join("")
  })

  document.addEventListener("click", () => {
    if (event.target.className === "edit-button") {
      let dogId = parseInt(event.target.dataset.id);
      let clickedDog = allDogs.find((dog) => dog.id === dogId);
      submitBtn.dataset.id = dogId;
      inputNameField.value = clickedDog.name;
      inputBreedField.value = clickedDog.breed;
      inputSexField.value = clickedDog.sex;
    }
  })

  inputForm.addEventListener("submit", () => {
    event.preventDefault();
    let dogId = submitBtn.dataset.id
    let editedName = inputNameField.value;
    let editedBreed = inputBreedField.value;
    let editedSex = inputSexField.value;

    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: editedName,
        breed: editedBreed,
        sex: editedSex
      })
    })
    .then(response => response.json())
    .then(editedObj => {
      document.querySelector(`#name-${dogId}`).innerText = editedName
      document.querySelector(`#breed-${dogId}`).innerText = editedBreed
      document.querySelector(`#sex-${dogId}`).innerText = editedSex
    })
    submitBtn.dataset.id = ""
    event.target.reset()
  })
})
