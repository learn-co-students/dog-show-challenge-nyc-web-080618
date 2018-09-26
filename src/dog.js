class Dog {

  constructor(dogJsonObj){
    this.id = dogJsonObj.id;
    this.name = dogJsonObj.name;
    this.breed = dogJsonObj.breed;
    this.sex = dogJsonObj.sex;
    Dog.all.push(this)
  }

  render(){
    return `
    <tr>
      <td>${this.name}</td>
      <td>${this.breed}</td>
      <td>${this.sex}</td>
      <td><button type="button" id="edit-${this.id}">edit</button></td>
    </tr>
    `
  }

}

Dog.all = [];
