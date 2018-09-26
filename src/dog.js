class Dog {
  constructor(obj){
    this.id=obj.id
    this.name=obj.name
    this.breed=obj.breed
    this.sex=obj.sex
    dogController.lists.push(this)
  }

  render(){
  return ` <tr>
      <td>${this.name}</td>
      <td>${this.breed}</td>
      <td>${this.sex}</td>
      <td><button id="${this.id}" class="edit">Edit</button></td>
    </tr>`
  }
}
