document.addEventListener('DOMContentLoaded', () => {

  const registeredDogsContainer = document.getElementById("table-body")
  const TableContainer = document.getElementById("dogRoster")
  const editForm = document.getElementById("dog-form")
  const DogName = document.getElementById("name")
  const DogBreed = document.getElementById("breed")
  const DogSex = document.getElementById("sex")

  fetch('http://localhost:3000/dogs')
    .then((response) => {
      return response.json()
    })
    .then((dogObj) => {
      console.log(dogObj)

      dogObj.forEach((dog) => {
        console.log(dog)
        const newDog = new Dog(dog)
        registeredDogsContainer.innerHTML += newDog.render()
      })

    }) //end of GET fetch

  TableContainer.addEventListener("click", function(event) {

    const dogId = event.target.id.split("-")[1]
    console.log(dogId)

    const dogEdit = Dog.all.find((dog) => {
      return dog.id == dogId
    })
    editForm.id = dogEdit.id
    DogName.value = dogEdit.name
    DogBreed.value = dogEdit.breed
    DogSex.value = dogEdit.sex
  })

  editForm.addEventListener("submit", function(event) {
    const dogId = event.target.id.split("-")[1]
    const dogEdit = Dog.all.find((dog) => {
      return dog.id == dogId
    })

    let newName = DogName.value
    let newBreed = DogBreed.value
    let newSex = DogSex.value

    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: dogId,
        name: newName,
        breed: newBreed,
        sex: newSex
      })
    }).then((response) => {
      return response.json()
    }).then((dogData) => {

      console.log(dogData)
    })

  })

}) //end of DOMLOADER
