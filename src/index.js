

document.addEventListener('DOMContentLoaded', () => {
  const dogTable = document.getElementById('table-body')
  const editForm = document.getElementById('dog-form')

  //get all existing dogs
  fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(resJson => {
      const dogHtml = resJson.map(dogObj =>{
        const newDog = new Dog(dogObj)
        return newDog.render()
      })
      dogTable.innerHTML = dogHtml.join('')
    })
  // edit each dog
let dogId;
 document.addEventListener('click', e=> {
  if (e.target.tagName === "BUTTON"){
    dogId = parseInt(event.target.id);
    let clickedDog = allDogs.find(dog => {
      return (dog.id === dogId)
    });

     editForm[0].value = clickedDog.name

     editForm[1].value = clickedDog.breed

     editForm[2].value = clickedDog.sex

  }

 })

 editForm.addEventListener("submit", (e)=> {
   e.preventDefault()
   const formInputs = event.target.querySelectorAll('input')
   let  editedName = formInputs[0].value
   let editedBreed = formInputs[1].value
    let editedSex = formInputs[2].value


    // debugger

   fetch (`http://localhost:3000/dogs/${dogId}`, {
     method: 'PATCH',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name: editedName,
       breed: editedBreed,
       sex: editedSex
     })
   }).then (res => res.json())

     .then (resJson => {
       document.getElementById(`name-${dogId}`).innerTEXT = resJson.name

       // console.log("element", nameCol)
       // console.log("resp", resJson);
       document.getElementById(`name-${dogId}`).innerText=resJson.name

       document.querySelector(`#breed-${dogId}`).innerText =resJson.breed

       document.querySelector(`#sex-${dogId}`).innerText = resJson.sex
     })
     editForm.reset()
 })


  // function editDog(dogId){
  //
  //   fetch(`http://localhost:3000/dogs/${dogId}`)
  //     .then(res => res.json())
  //     .then(resJson => {
  //       // debugger
  //     })
  // }
  // fetch(`http://localhost:3000/dogs/${dogId}`)
  //   .then(res => res.json())
  //   .then(resJson => oldinfo = resJson)
  //   .then(() => {
  //     fetch(`http://localhost:3000/dogs/${dogId}`,{
  //       method: 'PATCH'
  //
  //     })
  //   })
})   // end of Dom loaded
