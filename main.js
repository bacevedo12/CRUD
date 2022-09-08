
let button = document.getElementById('btnagregarpaciente')
button.addEventListener('click', crearForm)



//funcion crear
function crearForm(){
       
    function Paciente (nombreCompleto,edad,patologia,fecha){
          this.nombreCompleto=nombreCompleto;
          this.edad=edad;
          this.patologia=patologia;
          this.fecha=fecha;

    }
        var capturarNombreCompleto = document.getElementById("nombreCompleto").value;
        var capturarEdad = document.getElementById("edad").value;
        var capturarPatologia = document.getElementById("patologia").value;
        var capturarFecha = document.getElementById("fecha").value;

        nuevoPaciente = new Paciente(capturarNombreCompleto,capturarEdad,capturarPatologia,capturarFecha);
        insertarNuevoPaciente ();
        }

        let formDatos= [];
       
//funcion leer
function insertarNuevoPaciente(){
    formDatos.push(nuevoPaciente);
    console.log(formDatos);
    // document.getElementById("tablaPacientes").innerHTML += '<tbody><td>'+ nuevoPaciente.nombreCompleto+'</td><td>'+nuevoPaciente.edad+'</td><td>'+nuevoPaciente.patologia+'</td><td>'+nuevoPaciente.fecha+'</td></tbody>';
    var tabla = document.getElementById("tablaPacientes").getElementsByTagName('tbody')[0];
        var nuevaFila = tabla.insertRow();
        cell1 = nuevaFila.insertCell(0);
        cell1.innerHTML = nuevoPaciente.nombreCompleto;
        cell2 = nuevaFila.insertCell(1);
        cell2.innerHTML = nuevoPaciente.edad;
        cell3 = nuevaFila.insertCell(2);
        cell3.innerHTML = nuevoPaciente.patologia;
        cell4 = nuevaFila.insertCell(3);
        cell4.innerHTML = nuevoPaciente.fecha;
        cell5 = nuevaFila.insertCell(4);
        cell5.innerHTML = '<button class="btn2" id="btnEditar">Editar</button><button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this);">Borrar</button>';
        localStorage.setItem("formDatos",JSON.stringify(formDatos));

              
        
}

actualizarPaginaConDatosLocalStorage(); 

//funcion eliminar 
function eliminarRegistro (boton){
 let fila = boton.parentElement.parentElement;
 console.log(fila);
 document.getElementById("cuerpotabla").deleteRow(fila[0]);
 
  
}

//funcion editar 
function editarRegistro (){
    let buttonEditar = document.getElementById('btnEditar')
 buttonEditar.addEventListener('click', editarRegistro)



}
//funcion para que se guarden los datos en la tabla cuando se refresca la pagina
function actualizarPaginaConDatosLocalStorage(){
    if(localStorage.getItem("formDatos") === null){
            console.log("No hay datos en el localStorage")
        }

    else{
       formDatos = JSON.parse(localStorage.getItem("formDatos"));
       let mostrarEnTabla = document.getElementById("cuerpotabla");
console.log(mostrarEnTabla);
       mostrarEnTabla.innerHTML = '';

        for(let i = 0; i < formDatos.length; i++){
            let nombreCompletoLs = formDatos[i].nombreCompleto;
            let edadLs = formDatos[i].edad;
            let patologiaLs = formDatos[i].patologia;
            let fechaLs = formDatos[i].fecha;

        mostrarEnTabla.innerHTML +=   
            `<tr>
               <td>${nombreCompletoLs}</td>
               <td>${edadLs}</td>
               <td>${patologiaLs}</td>
               <td>${fechaLs}</td>
               <td><button class="btn2" id="btnEditar">Editar</button><button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this);">Borrar</button></td>
            </tr>
            `
        }
    }
}





// function onSubmitForm(){
//    let formDatos = leerForm();
//    insertarNuevoPaciente(formDatos);
// }

// function leerForm(){
//     let formDatos = {};
//     formDatos["nombreCompleto"] = document.getElementById("nombreCompleto").value;
//     formDatos["edad"] = document.getElementById("edad").value;
//     formDatos["patologia"] = document.getElementById("patologia").value;
//     formDatos["fecha"] = document.getElementById("fecha").value;
//     return formDatos
// }

// function insertarNuevoPaciente(formDatos){
//     var tabla = document.getElementById("tablaPacientes").getElementsByTagName('tbody')[0];
//     var nuevaFila = tabla.insertRow();
//     cell1 = nuevaFila.insertCell(0);
//     cell1.innerHTML = formDatos.nombreCompleto;
//     cell2 = nuevaFila.insertCell(1);
//     cell2.innerHTML = formDatos.edad;
//     cell3 = nuevaFila.insertCell(2);
//     cell3.innerHTML = formDatos.patologia;
//     cell4 = nuevaFila.insertCell(3);
//     cell4.innerHTML = formDatos.fecha;
//     cell5 = nuevaFila.insertCell(4);
//     cell5.innerHTML = '<button class="btn2">Editar</button><button class="btn3" onClick=eliminarRegistro(this)>Borrar</button>';
// }

// function eliminarRegistro(btn3) {
//     var borrarFila = btn3.parentElement.parentElement;
//     document.getElementsByClassName("cuerpoTabla").deleteRow(borrarFila.filaIndex);

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

