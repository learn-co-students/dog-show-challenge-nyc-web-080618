class Adapter {

  // controller to get a list of each of the different
  // dogs
  static getDogs(){
    return fetch('http://localhost:3000/dogs')
      .then((resp) => resp.json())
  }

  // controller to add a new dog to the lsit of dogs
  static createDog(dogObject){
    return fetch('http://localhost:3000/dogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(dogObject)
    }).then(resp => resp.json())
  }

  static editDog(dogObject){
    return fetch(`http://localhost:3000/dogs/${dogObject.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: dogObject.id,
        name: dogObject.name,
        breed: dogObject.breed,
        sex: dogObject.sex

      })
    }).then(resp => resp.json())
  }


}
