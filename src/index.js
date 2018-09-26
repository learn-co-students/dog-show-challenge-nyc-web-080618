document.addEventListener('DOMContentLoaded', () => {
  const tableDiv = document.querySelector("#table-body")

  Adapter.getDogs()
    .then((json) => {
      json.forEach((dogJson) => {
        let dog = new Dog(dogJson)
        tableDiv.innerHTML += `
          <tr id = "${dogJson.id}"><td>${dogJson.name}</td> <td>${dogJson.breed}</td> <td>${dogJson.sex}</td> <td><button id= "edit${dogJson.id}">Edit</button></td></tr>`
      }) // end forEach
    }) //end then statement
}) //end of DOM event listener

document.addEventListener('click', (event) => {
  const editFormDiv = document.querySelector("#dog-form")
  const tableDiv = document.querySelector("#table-body")
  for (let i = 1; i < Dog.all.length + 1; i++){
    if (event.target.id === `edit${i}`){
      let currentDogObj = Dog.find(i)
      //edit Form
      editFormDiv.innerHTML = `<form id='dog-form' class="padding margin border-round border-grey">
            <input type="name" name="name" placeholder="${currentDogObj.name}" value="${currentDogObj.name}">
            <input type="breed" name="breed" placeholder="${currentDogObj.breed}" value="${currentDogObj.breed}">
            <input type="sex" name="sex" placeholder="${currentDogObj.sex}" value="${currentDogObj.sex}">
            <input type="submit"value="Submit">
          </form>`
      //event listener for submission of changes
      //edit front end
      editFormDiv.addEventListener('submit', (event) => {
        event.preventDefault()
        const specificDogDiv = document.getElementById(`${currentDogObj.id}`)
        specificDogDiv.innerHTML = `
          <tr><td>${event.target.children[0].value}</td> <td>${event.target.children[1].value}</td> <td>${event.target.children[2].value}</td> <td><button id= "edit${currentDogObj.id}">Edit</button></td></tr>`
        //update class
        currentDogObj.name = event.target.children[0].value
        currentDogObj.breed = event.target.children[1].value
        currentDogObj.sex = event.target.children[2].value
        //edit database
        Adapter.editDog(currentDogObj)
      }) //end of submit form listener
    } //end of if statement
  } //end of for loop
}) //end of click event listener
