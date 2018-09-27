let allDogs = [];

class Dog {
  constructor(name, breed, sex){
    this.name = name
    this.breed = breed
    this.sex = sex
    allDogs.push(this)
  }

}



// - Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.
// - On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).
// - Once the form is submitted, the table should reflect the updated dog information. You can either use the response from the PATCH request for this or use _optimistic rendering_. This means you can update the frontend before you have gotten the response from the backend.
// - In order to locate one row on the DOM and update specific data cells within it, you may need to assign id and or class values to locate each attribute.
