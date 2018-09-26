allDogs =[];
class Dog {
  constructor(dogJson){
    this.name = dogJson.name
    this.breed = dogJson.breed
    this.sex = dogJson.sex
    this.id = dogJson.id
    allDogs.push(this);
  }

  render(){
      return (`<tr>
        <td id ='name-${this.id}'>${this.name}</td>
        <td id = 'breed-${this.id}'>${this.breed}</td>
        <td id='sex-${this.id}'>${this.sex}</td>
        <td><button id="${this.id}"> Edit</button></td>
      </tr>
      `)
  }
}
