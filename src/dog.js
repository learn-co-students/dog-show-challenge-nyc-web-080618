class Dog {
  constructor(object) {
    this.id = object.id
    this.name = object.name
    this.breed = object.breed
    this.sex = object.sex
    Dog.all.push(this)
  }
  render() {
    return `
    <tr id="${this.id}">
      <td>${this.name}</td>
      <td>${this.breed}</td>
      <td>${this.sex}</td>
      <td><button onClick="editDog()" style="width: 100%;">Edit</button></td>
    </tr>
    `
  }
}

Dog.all = []
