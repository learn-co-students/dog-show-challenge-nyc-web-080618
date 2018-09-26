


document.addEventListener('DOMContentLoaded', () => {
  const table_body = document.getElementById("table-body")
  const edit_form = document.getElementById("dog-form")
  const form_name = document.getElementById("fname")
  const form_breed = document.getElementById("fbreed")
  const form_sex = document.getElementById("fsex")



  Adapter.getDogs().then((data)=>{
    data.forEach((dog)=>{
      let new_dog_obj = new Dog(dog)
      table_body.innerHTML += new_dog_obj.renderOneDog()
    })
  }) //end initial fetch

//edit event

  document.addEventListener("click", edit_dog)
  edit_form.addEventListener("submit", send_edit )

  function edit_dog(){
    if (event.target.className === "button"){
      let dogToEditId = parseInt(event.target.parentElement.parentElement.id)


      //using this ID, grab the dog object from the store
      let dogObjToEdit = dog_store.find((dog)=>{
        return dog.id === dogToEditId
      })

      //populate the edit form with this info
      form_name.value = dogObjToEdit.name
      form_name.name = dogObjToEdit.id
      form_breed.value = dogObjToEdit.breed
      form_sex.value = dogObjToEdit.sex

      //event listener for the form

    }
  }
function send_edit(){

    event.preventDefault()

    let edited_id = parseInt(event.target.querySelector("#fname").name)
    let edited_name = event.target.querySelector("#fname").value
    let edited_breed = event.target.querySelector("#fbreed").value
    let edited_sex = event.target.querySelector("#fsex").value
    

    Adapter.patchDog(edited_id, edited_name, edited_breed, edited_sex
    ).then(response => response.json())
     .then(data => {
       //update dog store object

       document.getElementById(`${edited_id}`).innerHTML = Dog.renderEditedDog(data)


     })


}



}) //end event listener
