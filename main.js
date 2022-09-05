function onSubmitForm(){
   let formDatos = leerForm();
   insertarNuevoPaciente(formDatos);
}

function leerForm(){
    let formDatos = {};
    formDatos["nombreCompleto"] = document.getElementById("nombreCompleto").value;
    formDatos["edad"] = document.getElementById("edad").value;
    formDatos["patologia"] = document.getElementById("patologia").value;
    formDatos["fecha"] = document.getElementById("fecha").value;
    return formDatos
}

function insertarNuevoPaciente(formDatos){
    var tabla = document.getElementById("tablaPacientes").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow();
    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = formDatos.nombreCompleto;
    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = formDatos.edad;
    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = formDatos.patologia;
    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = formDatos.fecha;
    cell5 = nuevaFila.insertCell(4);
    cell5.innerHTML = '<button class="btn2">Editar</button><button class="btn3" onClick=eliminarRegistro(this)>Borrar</button>';
}

// function eliminarRegistro(btn3) {
//     var fila = btn3.parentElement.parentElement
//     document.getElementsByClassName("cuerpoTabla").deleteRow(fila.filaIndex);

// }

// function editarForm (button)
//     var filaSelec = button.parentElement.parentElement
//     document.getElementById("nombreCompleto").value = filaSelec.cells[0].innerHTML;
//     document.getElementById("edad").value = filaSelec.cells[1].innerHTML;
//     document.getElementById("patologia").value = filaSelec.cells[2].innerHTML;
//     document.getElementById("fecha").value = filaSelec.cells[3].innerHTML;



// const formularioUsuario = document.querySelector("#formulario");
// const tablaPacientesUsuarios = document.querySelector ('#tablaPacientes');


// let arrayPacientes = [];

// //funcion crear paciente
// const crearNuevoPaciente = () => {
   
//     sNombreCompleto = document.getElementById("nombreCompleto").value
//     sEdad = document.getElementById("edad").value
//     sPatologia = document.getElementById("patologia").value
//     sFecha = document.getElementById("fecha").value

//     let nuevoPaciente = {
//         sNombreCompleto,
//         sEdad,
//         sPatologia,
//         sFecha
    
//     }

//     arrayPacientes.push(nuevoPaciente);

//     return nuevoPaciente
// }

// //eventListener

// formularioUsuario.addEventListener('submit', (e) => {

//     e.preventDefault();

//     let actividadUsuario = {
//         nombrecompleto: document.querySelector('#nombreCompleto').value,
//         edad: document.querySelector ("#edad").value,
//         patologia: document.querySelector ("#patologia").value,
//         fecha: document.querySelector ("#fecha").value
       
//     }
// })




// document.querySelector("#btnagregarpaciente").addEventListener('click',agregarPaciente);

// function agregarPaciente(){
//    let aNuevoPaciente = [],
//        sNombreCompleto = '',
//        sEdad = '',
//        sPatologia = '',
//        sFecha = '';

//     sNombreCompleto = document.querySelector('#txtnombreCompleto').value;
//     sEdad = document.querySelector ('#txtedad').value;
//     sPatologia = document.querySelector ('#txtpatologia').value;
//     sEdad = document.querySelector ('#txtedad').value;
//     sFecha =  document.querySelector ('#txtfecha').value;

// aNuevoPaciente.push(sNombreCompleto,sEdad,sPatologia,sFecha);

// return aNuevoPaciente

// }

// console.log(aNuevoPaciente)










// document.getElementById("formulario").addEventListener("submit",crear);

// //funcion agregar paciente 
// function crearNuevoPaciente (e){
//     nombreCompleto = document.getElementById("nombreCompleto").value
//     edad = document.getElementById("edad").value
//     patologia = document.getElementById("patologia").value
//     fecha = document.getElementById("fecha").value

// let nuevoPaciente = {
//     nombreCompleto,
//     edad,
//     patología,
//     fecha
// }

// if(localStorage.getItem("NuevosPacientes") === null){
//     let nuevosPacientes = []
//     nuevosPacientes.push(nuevoPaciente)
//     localStorage.setItem("NuevosPacientes",JSON.stringify(nuevosPacientes))

// }else {
//     let nuevosPacientes = JSON.parse(localStorage.getItem("NuevosPacientes"))
//     nuevosPacientes.push(nuevoPaciente)
//     localStorage.setItem("NuevosPacientes",JSON.stringify(nuevosPacientes))
// }

// document.getElementById("formulario").reset();
// console.log("nuevo paciente guardado")
// e.preventDefault()

// }

