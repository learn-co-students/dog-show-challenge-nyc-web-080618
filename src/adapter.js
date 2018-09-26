class Adapter {


  static getDogs(){
    return fetch("http://localhost:3000/dogs")
      .then(response => response.json())
  }

  static patchDog(id, name, breed, sex){
    return fetch(`http://localhost:3000/dogs/${id}`,
      {method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
            sex: sex
          })
    })
  }



}//end class
