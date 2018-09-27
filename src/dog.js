class Dog {
  constructor(dogJson){
    this.id = dogJson.id;
    this.name = dogJson.name;
    this.breed = dogJson.breed;
    this.sex = dogJson.sex;
    Dog.all.push(this)
  }

  render(){
    return `<tr>
    <td>${this.name}</td>
    <td>${this.breed}</td>
    <td>${this.sex}</td>
    <td><button class="edit-btn" id=editDog-${this.id}>Edit Dog</button></td>
    </tr>`
  }

  editForm(){
    return `<input id="name-${this.id}" type="name" name="name" placeholder="name" value="${this.name}">
      <input id="breed-${this.id}" type="breed" name="breed" placeholder="breed" value="${this.breed}">
      <input id="sex-${this.id}" type="sex" name="sex" placeholder="sex" value="${this.sex}">
      <input type="submit" value="Submit">`
  }
}
Dog.all = [];
