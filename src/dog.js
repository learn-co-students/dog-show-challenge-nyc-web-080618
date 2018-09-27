class Dog {

  constructor(dogObj) {
    this.id = dogObj.id
    this.name = dogObj.name
    this.breed = dogObj.breed
    this.sex = dogObj.sex
    Dog.all.push(this)
  }

  render() {
    return  ` <tr>
              <th>${this.name}</th>
              <th>${this.breed}</th>
              <th>${this.sex}</th>
              <td><button type="button" id="data-${this.id}" class="editButton">Edit</button></td>
              </tr>
            `
  }

}//end of class
Dog.all = []
