 const dogController=new DogController()

    document.addEventListener('DOMContentLoaded', () => {
       const dogData=document.getElementById('dog-data')
       const dogForm=document.getElementById('dog-form')
       const name=document.getElementById('name')
       const breed=document.getElementById('breed')
       const sex=document.getElementById('sex')
       const dogIdHidden=document.getElementById('dog-id')
       const createEdit=document.getElementById('create-edit')

       fetch("http://localhost:3000/dogs")
       .then(res=>res.json())
       .then(data=>{
         data.forEach(dataObj=>
           {let newDog=new Dog(dataObj)})
         dogData.innerHTML=dogController.render()
       })

       dogForm.addEventListener("submit",e=>{
         e.preventDefault()

          if (dogIdHidden.value.length>0) {
            fetch(`http://localhost:3000/dogs/${parseInt(dogIdHidden.value)}`,{
              method:"PATCH",
              headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
              },
              body:JSON.stringify({name:name.value,breed:breed.value,sex:sex.value})
            }).then(res=>res.json())
          }//submit edit form
         else {

           fetch("http://localhost:3000/dogs",{
             method:"POST",
             headers:{
               "Accept":"application/json",
               "Content-Type":"application/json"
             },
             body:JSON.stringify({name:name.value,breed:breed.value,sex:sex.value})
           }).then(res=>res.json())
           .then(data=>{
             const newDog=new Dog(data)
             dogData.innerHTML+=newDog.render()
           })
         }
       })// end of submit new dog form

       dogData.addEventListener("click",e=>{
         if (e.target.className==="edit") {
           createEdit.innerText=createEdit.innerText=="Edit Existing Dog"?"Create New Dog":"Edit Existing Dog"
           const dogId=e.target.id
           const dog=dogController.lists.find(dog=>dog.id==dogId)
           name.value=name.value==dog.name?"":dog.name
           breed.value=breed.value==dog.breed?"":dog.breed
           sex.value= sex.value==dog.sex?"":dog.sex
           dogIdHidden.value=dogIdHidden.value==dogId?"":dogId
         }
       })//get info from local class


    })
