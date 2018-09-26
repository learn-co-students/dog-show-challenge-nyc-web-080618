const dogsList = []

class Dog {
  constructor(dogObject){
    this.id = dogObject.id
    this.name = dogObject.name
    this.breed = dogObject.breed
    this.sex = dogObject.sex
    dogsList.push(this)
  }

  render(){
    return `<tr id=${this.id}><td>${this.name}</td>
    <td>${this.breed}</td>
    <td>${this.sex}</td>
    <td><button>Edit</button>
    </td></tr>`
  }

  static findDogById(id){
    return dogsList.find((dog)=>{
      return dog.id === id
    })
  }
}
