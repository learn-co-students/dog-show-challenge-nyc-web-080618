document.addEventListener('DOMContentLoaded', () => {

  const tableContainer = document.getElementById("table-body")
  const editForm = document.getElementById("dog-form")
  const dogContainer = document.getElementById("all-dogs")
  const formName = document.getElementById("name")
  const formBreed = document.getElementById("breed")
  const formSex = document.getElementById("sex")

  fetch('http://localhost:3000/dogs')
    .then((response)=> response.json())
    .then((dogJsonData) =>{
      dogJsonData.forEach((dogJsonObj)=>{
        let newDog = new Dog(dogJsonObj)
        tableContainer.innerHTML += newDog.render()
      })
    })

  dogContainer.addEventListener("click", (event)=>{
    console.log(event.target.id)
    let dogId = event.target.id.split("-")[1]
    let dogToEdit = Dog.all.find((dog)=>{
      return dog.id == dogId
    })
    editForm.dataset.id = dogToEdit.id //pass through ID
    formName.value = dogToEdit.name
    formBreed.value = dogToEdit.breed
    formSex.value = dogToEdit.sex
  })

  editForm.addEventListener("submit", (event)=>{
    console.log(event.target)
    let dogId = event.target.dataset.id
    let dogToEdit = Dog.all.find((dog)=>{
      return dog.id == dogId
    })
    console.log(dogToEdit)
    let newDogName = formName.value
    let newDogBreed = formBreed.value
    let newDogSex = formSex.value

    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: dogId,
        name: newDogName,
        breed: newDogBreed,
        sex: newDogSex
      })
    })
    .then((response)=> response.json())
    .then((dogJsonData)=>{
      console.log(dogJsonData)
    })


  })


})
