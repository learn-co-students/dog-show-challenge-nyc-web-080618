
class Dog {
  constructor(obj) {
    this.name = obj.name
    this.breed = obj.breed
    this.sex = obj.sex
    this.id = obj.id
    Dog.all.push(this)
  }

  static find(id){
    return Dog.all.find((dog) => {
      return dog.id == id
    })
  }

} //end of class
  Dog.all = []
