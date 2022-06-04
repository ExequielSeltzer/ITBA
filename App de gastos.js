const gastos = [];
const personas = [];
const persona = document.getElementById("nombre"); //Trae el elemento que ingreso al input con ese id, en este caso, el nombre de la persona.
const gasto = document.getElementById("pago");
const listado = document.getElementById("list-group");
const resultado = document.getElementById("total");

function agregarGasto() {
  personas.push(persona.value); //persona.value es el input que traigo desde HTML, eso lo agrego al array.
  gastos.push(gasto.value);
}

function ultimoAPantalla() {
  const li = document.createElement("li"); //Crea un elemento li en el HTMl, creando la lista.
  // Creamos nodos de texto y los estructuramos haciéndolos hijos de otros elementos.
  const text = document.createTextNode(`${persona.value}: $${gasto.value}`); //Creo un nuevo nodo de texto que me muestre los últimos elementos añadidos a los arrays.
  // Para concatenar strings y variables, uso `${variable} string` y lo concatena automáticamente sin usar comillas ni sumar strings.
  li.classList.add("list-group-item");
  li.appendChild(text); //Agrego el elemento que quiero que sea hijo de otro, en este caso, que text sea hijo de li y aparezca dentro.
  listado.appendChild(li);
}

function sumarValores(gastos) {
  let suma = +0;
  for (let gasto of gastos) {
    suma += +gasto;
  }
  return suma;
}

function mostrarPagoIndividual() {
  resultado.innerText = `Total: $${sumarValores(gastos)} 
                        Cada uno debe aportar: $${
                          sumarValores(gastos) / gastos.length
                        }`;
}

function repartir() {
  agregarGasto();
  ultimoAPantalla();
  mostrarPagoIndividual();
}


