dog_store  = []

class Dog {

  constructor(dogObj){
    this.id = dogObj.id
    this.name = dogObj.name
    this.breed = dogObj.breed
    this.sex = dogObj.sex
    dog_store.push(this)
  }


  renderOneDog(){
    return (`
      <tr id=${this.id}>
      <td>${this.name}</td>
      <td>${this.breed}</td>
      <td>${this.sex}</td>
      <td><button class= "button">Edit</button></td>
      </tr>
      `)

  }

  static renderEditedDog(dogobj){
    return(`
      <td>${dogobj.name}</td>
      <td>${dogobj.breed}</td>
      <td>${dogobj.sex}</td>
      <td><button class= "button">Edit</button></td>
      `)
  }



}
