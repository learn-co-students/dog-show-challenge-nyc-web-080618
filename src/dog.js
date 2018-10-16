allDogs = [];
class Dog {
  constructor(dogObj){
    this.id = dogObj.id;
    this.name = dogObj.name;
    this.breed = dogObj.breed;
    this.sex = dogObj.sex;
    allDogs.push(this);
  }

  render(){
    return `
      <tr>
       <td id="name-${this.id}">${this.name}</td>
       <td id="breed-${this.id}">${this.breed}</td>
       <td id="sex-${this.id}">${this.sex}</td>
       <td><button data-id="${this.id}" class="edit-button">Edit</button></td>
      </tr>
    `
  }
}
