class Adapter {
  static getDogs(){
    return fetch('http://localhost:3000/dogs')
    .then(res => res.json())
  }

  static editDog(dogObj, dogId){
    return fetch(`http://localhost:3000/dogs/${dogId}`, {
     method: 'PATCH',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(dogObj)
   }).then(resp => resp.json())
  }
}
