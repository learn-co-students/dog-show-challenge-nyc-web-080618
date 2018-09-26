class Dog {
  constructor(name,breed,sex,id){
    this.name = name
    this.breed = breed
    this.sex = sex
    this.id = id
    Dog.all.push(this)
  }

  render(){
    let value = `<tr><td id="${this.id}">Dog ${this.name}</td><td>${this.breed}</td> <td>${this.sex}</td><td>
    <button class="editButton" id="${this.id}">Edit</button></td></tr>`
    return value;
  }


  static findDog(id){
    return Dog.all.find((dog)=>{
      return dog.id == id
    })
  }

}

Dog.all = []
