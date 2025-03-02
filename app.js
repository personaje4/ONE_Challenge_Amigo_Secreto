// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

    let nombres = [];
    
   
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let name = input.value.trim();

    if (name === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(name);
    input.value = ""; // Limpiar el campo después de agregar
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach((name) => {
        let li = document.createElement("li");
        li.textContent = name;
        li.classList.add("name-item");
        lista.appendChild(li);
    });
}

  
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="winner">El amigo secreto es: ${nombreSorteado}</li>`;
}
