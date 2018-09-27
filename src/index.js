document.addEventListener('DOMContentLoaded', () => {

  const dogTable = document.getElementById('table-body')

  Adapter.getDogs().then(dogs => {
    dogTable.innerHTML = dogs.map(dog => {
      let newDog = new Dog(dog);
       return newDog.render();
    }).join("")
  })



  const wholeTable = document.getElementsByClassName("margin")[4]
  const editTable = document.getElementById('dog-form')

  wholeTable.addEventListener("click", (event) => {
    if (event.target.className === "edit-btn"){
      let dogId = Number(event.target.id.split("-")[1]);
      let dogObj = Dog.all.find((dog) => dogId === dog.id)
      editTable.innerHTML = dogObj.editForm()
    }
  })

  editTable.addEventListener("submit", (event) => {
    dogId = Number(event.target.children[0].id.split("-")[1]);
    let newName = event.target.children[0].value;
    let newBreed = event.target.children[1].value;
    let newSex = event.target.children[2].value;
    Adapter.editDog(newName, newBreed, newSex, dogId)
  })

})
