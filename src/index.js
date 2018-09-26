const dogTable = document.getElementById('table-body')
const dogForm = document.getElementById('dog-form')

document.addEventListener('DOMContentLoaded', () => {
  Adapter.getDogs().then(dogJson =>{
    dogJson.forEach((dogObject)=>{
      let dog = new Dog(dogObject)
      dogTable.innerHTML += dog.render()
    })
  })
})

document.addEventListener('click',(event)=>{

  if(event.target.tagName === 'BUTTON' && event.target.innerText === 'Edit'){
    const dogObject = Dog.findDogById(parseInt(event.target.parentNode.parentNode.id))
    dogForm.name.value = dogObject.name
    dogForm.breed.value = dogObject.breed
    dogForm.sex.value = dogObject.sex
    dogForm.dataset.id = dogObject.id
  }else if(event.target.tagName === 'INPUT'){
    const dogId = parseInt(dogForm.dataset.id)
    const dogInput = {
      name: dogForm.name.value,
      breed: dogForm.breed.value,
      sex: dogForm.sex.value
    }
    Adapter.editDog(dogId,dogInput)
    const dogRow = document.getElementById(dogId)
    dogRow = dogObject.render()
  }
})
