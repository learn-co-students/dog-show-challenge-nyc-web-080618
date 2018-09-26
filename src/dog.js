class Dog {
  constructor(dogJson){
    this.id = dogJson.id
    this.name = dogJson.name
    this.breed = dogJson.breed
    this.sex = dogJson.sex
    Dog.all.push(this);
  }

  render(){
    return (
      `<tr>
        <td>${this.name}</td>
        <td>${this.breed}</td>
        <td>${this.sex}</td>
        <td><button class="edit-button" id="dog-${this.id}">Edit</button></td>
      </tr>`
    )
  }

  static find(id){
    //You can create functions that will make your lives easier
    //I use this to search through my instances and operate on them
    return Dog.all.find((dog) => {
      return dog.id == id
    })
  }
}

Dog.all = []
