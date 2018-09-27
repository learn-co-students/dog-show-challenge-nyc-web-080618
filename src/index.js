// event listener for DOM Loaded Content
document.addEventListener('DOMContentLoaded', () => {
// declared variables
const dogTableBody = document.getElementById("table-body")
const dogContainer = document.getElementById("all-dogs")
const editForm = document.getElementById("dog-form")
const formName = document.getElementById("dogName")
const formBreed = document.getElementById("dogBreed")
const formSex = document.getElementById("dogSex")


// make fetch request to the url
  fetch('http://localhost:3000/dogs')
// transform the promise data into json
  .then(response => response.json())
  .then(doggyData => {
// console log the doggyData to verify that's what we want back
// console.log(doggyData)
// for each dog w/in the doggyData Object, go through and for each run the code below
// create new dog objects using data from API
    doggyData.forEach((dogObject)=>{
// declare a new dog variable that is set equal to a new Dog Object with the params of the JSON Dog Object
        let newDog = new Dog(dogObject)
// set the innerHTML of the dogTableBody(this is the table row) equal to the accumulation
// of each new dog object that we are rendering
        dogTableBody.innerHTML += newDog.render()
      })
  })

// add an event listener to the allDogs variable that holds our section of all dogs
  dogContainer.addEventListener("click", (event)=>{
// console log the click event to verify it works
  // console.log(event.target.className)
// the console logging of the event.target.id returns something like 'name-6' if we click the 6th dogs Name
// so we want to set a variable equal to the 2nd part of that log (just the ID number)
    const dogId = event.target.id.split("-")[1]
// set another variable equal to the specific dog we want to edit from our goodBOYES array (from the Dog Class)
    const dogToEdit = Dog.all.find((dog)=>{
// return that specificDog if it's ID matches the dogId variable we declared
      return dog.id == dogId
       })

// set the editDog dataset id equal to our dogToEdit variable id
      editForm.id = dogToEdit.id
// set the edit form inputs equal to that specific dogs info
      formName.value = dogToEdit.name
      formBreed.value = dogToEdit.breed
      formSex.value = dogToEdit.sex
  })

// add an event listener to the editDog form to allow edit submissions
   editForm.addEventListener("submit", (event)=>{
// console log the click event to verify it works
      console.log(event.target)
// the console logging of the event.target.id returns something like 'name-6' if we click the 6th dogs Name
// so we want to set a variable equal to the 2nd part of that log (just the ID number)
      const dogId = event.target.id.split("-")[1]
// set another variable equal to the specific dog we want to edit from our goodBOYES array (from the Dog Class)
      const dogToEdit = Dog.all.find((dog)=>{
// return that specificDog if it's ID matches the dogId variable we declared
        return dog.id == dogId
       })

// declare variables that will allow us to update the API info for a doggo
  let newName = formName.value
  let newBreed = formBreed.value
  let newSex = formSex.value

// make a fetch request to the API for that specific dogID
   fetch(`http://localhost:3000/dogs/${dogId}`, {
// override the default GET Method w/ the PATCH method to update
    method: "PATCH",
// tell our server that we are sending over JSON data
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
// the data that we are sending over to update
    body: JSON.stringify({
      id: dogId,
      name: newName,
      breed: newBreed,
      sex: newSex
    })
  })
// return the promise object of JSON data & verify that the API has updated the dog
  .then((response)=> response.json())
  .then((doggyData)=>{
    console.log(doggyData)
  })
})
})
