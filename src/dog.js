class Dog {
constructor(dogObject){
    this.id = dogObject.id
    this.name = dogObject.name
    this.breed = dogObject.breed
    this.sex = dogObject.sex
    Dog.all.push(this)
  }

   render(){
    return `<tr>
       <td id="name-${this.id}">${this.name}</td>
       <td id="breed-${this.id}">${this.breed}</td>
       <td id="sex-${this.id}">${this.sex}</td>
       <td><button data-id="${this.id}" class="edit-button">Edit</button></td>
      </tr>`
  }
}
Dog.all = []
