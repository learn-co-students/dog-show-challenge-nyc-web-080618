document.addEventListener('DOMContentLoaded', () => {

  const tablePlace = document.getElementById('table-body')


Adapter.getDogs().then((el) => {
  console.log(el)
  tablePlace.innerHTML = el.map((dogObj) => {
    let dog = new Dog(dogObj)
      return dog.render();
    }).join("")
  })

})

function edit() {
  const tablePlace = document.getElementById('table-body')
  const editPlace = document.getElementById('dog-form')
  const dogTarget = Dog.all.find((dog) => event.target.id == dog.id)
  const targetId = dogTarget.id
  editPlace.innerHTML = dogTarget.editForm()
  editPlace.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.getElementById(`name-${targetId}`).value
    const breed = document.getElementById(`breed-${targetId}`).value
    const sex = document.getElementById(`sex-${targetId}`).value
    Adapter.editDogs({name, breed, sex}, targetId)
    .then(dogUpdate => {
      let editName = document.getElementById(`edit-name-${targetId}`)
      let editBreed = document.getElementById(`edit-breed-${targetId}`)
      let editSex = document.getElementById(`edit-sex-${targetId}`)
        editName.innerHTML = name
        editBreed.innerHTML = breed
        editSex.innerHTML = sex
    })
  })
}
