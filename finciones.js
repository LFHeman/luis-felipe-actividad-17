function mostrarPersona (datos){
    const nombre=datos.result[0].name
    const fot=datos.result[0].piecture.large

    const divPersona = document.querySelector("#persona")

    divPersona.innerHTML= ${nombre.first} ${nombre.last}
}

fetch('https://randomuser.me/api/')
          .then(respuesta => respuesta.json())
          .then(persona => mostrarPersona(persona));