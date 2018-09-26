document.addEventListener('DOMContentLoaded', () => {
  const dogForm = document.getElementById("dog-form");
  const dogTable = document.getElementById("table-body");
  let clickDog;

  Adapter.getDogs()
  .then(dogJsons => {
    dogJsons.forEach( dogJson => {
      let dog = new Dog(dogJson)
      dogTable.innerHTML += dog.render();
    })
  }) // end Adapter.getDogs().then


  dogTable.addEventListener('click', (event) => {
    if(event.target.className === "edit-button"){
      let dogId = event.target.id;
      dogId = dogId.split("-")[1];
      clickedDog = Dog.find(dogId);
      fillInFormOnEditClick(clickedDog);
    }
  }) // end dogTable AEL click

  dogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formInputs = event.target.querySelectorAll('input');
    const name = formInputs[0].value
    const breed = formInputs[1].value
    const sex = formInputs[2].value
    Adapter.editDog({name, breed, sex}, clickedDog.id).then( dogJson => {
      updateDogTableRow(dogJson);
    });
    event.target.reset();
  }); // end dogForm AEL submit


}) // end DOMContentLoaded

function fillInFormOnEditClick(dog){
  const dogForm = document.getElementById("dog-form");
  dogForm.children[0].value = dog.name;
  dogForm.children[1].value = dog.breed;
  dogForm.children[2].value = dog.sex;
}

function updateDogTableRow(dogJson){
  const dogTable = document.getElementById("table-body");
  const rowToUpdate = dogTable.children[dogJson.id - 1];
  const rowsColumns = rowToUpdate.querySelectorAll('td');
  rowsColumns[0].innerText = dogJson.name
  rowsColumns[1].innerText = dogJson.breed
  rowsColumns[2].innerText = dogJson.sex
}
