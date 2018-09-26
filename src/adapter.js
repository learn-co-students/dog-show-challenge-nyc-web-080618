class Adapter {
  static getRegistered() {
    return fetch("http://localhost:3000/dogs")
    .then( response => response.json())
  }
  static updateDog(obj) {
    return fetch(`http://localhost:3000/dogs/${obj.id}`, {
      method: "PATCH",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(response => response.json())
  }
}
