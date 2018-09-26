document.addEventListener('DOMContentLoaded', () => {

  const dogDisplayTable = document.getElementById("table-body")
  const addANewDogbutton = document.getElementById("dog-form")




  Adapter.getDogs()
    .then(function(myJson) {
      myJson.forEach(function(dog) {
        let newDog = new Dog(dog.name, dog.breed, dog.sex, dog.id)
        dogDisplayTable.innerHTML += newDog.render()
      })
    })

  addANewDogbutton.addEventListener("submit", (event) => {
    event.preventDefault()
    const addANewDogForm = document.getElementsByClassName("dogInformation")
    const name = addANewDogForm.name.value
    const breed = addANewDogForm.breed.value
    const sex = addANewDogForm.sex.value
    const id = event.target[3].id


    // Adapter.createDog({name,breed,sex})
    // .then(json => {
    //   let dog = new Dog(json.name,json.breed,json.sex)
    //   dogDisplayTable.innerHTML += dog.render()
    //
    // })

    Adapter.editDog({name,breed,sex,id})


  })

dogDisplayTable.addEventListener("click", (event) => {
  event.preventDefault()
  if(event.target.className === "editButton"){
    let dogId = event.target.id
    let dog = Dog.findDog(dogId)
    addANewDogbutton.innerHTML = `<form id='dog-form' tag="${dogId}" class="padding margin border-round border-grey">
      <input type="name" name="name" placeholder="name" value="${dog.name}" class="dogInformation">
      <input type="breed" name="breed" placeholder="breed" value="${dog.breed}" class="dogInformation">
      <input type="sex" name="sex" placeholder="sex" value="${dog.sex}" class="dogInformation">
      <input type="submit"value="Update this dog" id="${dogId}" >
    </form>`

    const editADogButton = document.getElementById("#editDogForm")

    editADogButton.addEventListener("submit", (event) => {

    })


  }

})




})
