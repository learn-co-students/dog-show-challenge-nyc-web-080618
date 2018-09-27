document.addEventListener('DOMContentLoaded', () => {
  let table = document.getElementById('table-body')
  let newTable = document.createElement('TABLE')
  let editForm = document.getElementById('dog-form')
  let btnCounter = 0
  let dogInfo = {}
  fetch('http://localhost:3000/dogs')
  .then(r => r.json())
  .then(data => {
    data.forEach(function(dog){
      btnCounter ++
      dogInfo[btnCounter] = dog

      let x = new Dog(dog.name, dog.breed, dog.sex )
      // console.log(x)
      table.innerHTML += `<tr id='tbl${btnCounter}'><td id ="input-name${dog.id}">${dog.name}</td> <td id ="input-breed${dog.id}">${dog.breed}</td> <td id ="input-sex{dog.id}">${dog.sex}</td> <td><button  id=${btnCounter}>Edit</button></td></tr>
      <br>`
      table.append(newTable)
      })
   })


   table.addEventListener('click', function(event){
     event.preventDefault()
     console.log(event.target)
     let x = dogInfo[event.target.id]
     editForm.innerHTML =` <form id='dog-form' class="padding margin border-round border-grey">
       <input id="input-name"type="name" name="name" placeholder="name" value=${x.name}>
       <input id='input-breed'type="breed" name="breed" placeholder="breed" value=${x.breed}>
       <input id='input-sex' type="sex" name="sex" placeholder="sex" value=${x.sex}>
       <input id='submit' type="submit"value="Submit">
     </form>`




       let submit = document.getElementById('submit').addEventListener('click',function (event){
         event.preventDefault()
         let y = document.getElementById('dog-form')
         let newName = y.name.value
         let newBreed = y.breed.value
         let newSex = y.sex.value
         fetch(`http://localhost:3000/dogs/${x.id}`, {
  // override the default GET Method w/ the PATCH method to update
      method: "PATCH",
  // tell our server that we are sending over JSON data
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  // the data that we are sending over to update
      body: JSON.stringify({
        id: x.id,
        name: newName,
        breed: newBreed,
        sex: newSex
      })
    }).then(r => r.json()).then(data=> console.log(document.getElementById(`${x.id}`).parentNode.parentNode))
  })

       })
       // console.log(submit)
     })
// })
