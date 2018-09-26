function editDog() {
  const oData = event.target.parentElement.parentElement
  const name = oData.childNodes[1].innerText
  const breed = oData.childNodes[3].innerText
  const sex = oData.childNodes[5].innerText
  const dogId = oData.id
  const nameInput = document.getElementById("name")
  const breedInput = document.getElementById("breed")
  const sexInput = document.getElementById("sex")

  nameInput.value = name
  breedInput.value = breed
  sexInput.value = sex

  const editForm = document.querySelector("#dog-form")
  editForm.addEventListener('submit', function(){
    event.preventDefault()
    const nameInput = document.getElementById("name")
    const breedInput = document.getElementById("breed")
    const sexInput = document.getElementById("sex")


    Adapter.updateDog({
      id: dogId,
      name: nameInput.value,
      breed: breedInput.value,
      sex: sexInput.value
    })
    const newName = oData.childNodes[1]
    const newBreed = oData.childNodes[3]
    const newSex = oData.childNodes[5]
    newName.innerText = nameInput.value
    newBreed.innerText = breedInput.value
    newSex.innerText = sexInput.value

    nameInput.value = ""
    breedInput.value = ""
    sexInput.value = ""

  })


}

document.addEventListener('DOMContentLoaded', () => {
  Adapter.getRegistered()
  .then( function(arr) {
    const table = document.querySelector("#table-body")
    arr.forEach( function(obj){
      let dog = new Dog(obj)
      table.innerHTML += dog.render()
    })











  })




})
