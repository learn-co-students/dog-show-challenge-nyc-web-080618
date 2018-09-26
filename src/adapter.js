class Adapter {
  static getDogs(){
    return fetch('http://localhost:3000/dogs')
    .then(response => response.json())
  }

  static editDog(id,updatedDog){
    return fetch(`http://localhost:3000/dogs/${id}`,{
      method: 'PATCH',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: updatedDog.name,
        breed: updatedDog.breed,
        sex: updatedDog.sex,
        id: updatedDog.id
      })
    })
  }
}
