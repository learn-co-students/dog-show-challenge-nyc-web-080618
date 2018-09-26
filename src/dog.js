class Dog {
  constructor(dogObj){
    this.name = dogObj.name;
    this.id = dogObj.id
    this.breed = dogObj.breed
    this.sex = dogObj.sex
    Dog.all.push(this)
  }

  render(){
    return `<tr>
    <td id="edit-name-${this.id}">${this.name}</td>
    <td id="edit-breed-${this.id}">${this.breed}</td>
    <td id="edit-sex-${this.id}">${this.sex}</td>
    <td><button id="${this.id}" onclick="edit()">Edit Dog</button></td>
    </tr>`

  }

  editForm(){
    return `<form id='dog-form' class="padding margin border-round border-grey">
              <input id="name-${this.id}"type="name" name="name" placeholder="name" value="${this.name}">
              <input id="breed-${this.id}"type="breed" name="breed" placeholder="breed" value="${this.breed}">
              <input id="sex-${this.id}"type="sex" name="sex" placeholder="sex" value="${this.sex}">
              <input type="submit"value="Submit">
            </form>`
  }
}


Dog.all = [];
