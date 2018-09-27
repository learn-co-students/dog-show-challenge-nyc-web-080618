class Adapter {
  static getDogs(){
    return fetch('http://localhost:3000/dogs')
    .then(response => response.json())
  }

  static editDog(name, breed, sex, dogId){
    return fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        sex: sex
      })
    }).then(response => response.json())
  }
}
