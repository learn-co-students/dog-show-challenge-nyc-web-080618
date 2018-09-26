class DogController {
  constructor(){
    this.lists=[]
  }

  render(){
    return this.lists.map(
      dog=>dog.render()
    ).join("")
  }
}
