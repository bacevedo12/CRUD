let buttonAgregar = document.getElementById('btnagregarpaciente')
buttonAgregar.addEventListener('click', (evento) => crearForm (evento))

let formDatos= [];


// let buttonActualizar = document.getElementById('btnactualizarpaciente')
// buttonActualizar.addEventListener('click', (evento) => editarRegistro (evento))



// function getNewpacienteId (){
//     let ultimoNewpacienteId = localStorage.getItem ("ultimoNewpacienteId") || "-1";
//     let newPacienteId = JSON.parse(ultimoNewpacienteId) + 1;
//     localStorage.setItem("ultimoNewpacienteId",JSON.stringify(newPacienteId))
//     return newPacienteId;
// }

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

        
       
//funcion leer
function insertarNuevoPaciente(){
    formDatos.push(nuevoPaciente);
    console.log(formDatos);
    var tabla = document.getElementById("cuerpotabla");
        var nuevaFila = tabla.insertRow(tabla.length);
        cell1 = nuevaFila.insertCell(0);
        cell1.innerHTML = nuevoPaciente.nombreCompleto;
        cell2 = nuevaFila.insertCell(1);
        cell2.innerHTML = nuevoPaciente.edad;
        cell3 = nuevaFila.insertCell(2);
        cell3.innerHTML = nuevoPaciente.patologia;
        cell4 = nuevaFila.insertCell(3);
        cell4.innerHTML = nuevoPaciente.fecha;
        cell5 = nuevaFila.insertCell(4);
        cell5.innerHTML = '<button class="btn2" id="btnEditar">Editar</button><button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this,);">Borrar</button>';
        localStorage.setItem("formDatos",JSON.stringify(formDatos));

              
        
}
 
actualizarPaginaConDatosLocalStorage(); 

function limpiarForm (){
    document.getElementById("nombreCompleto").value = '',
    document.getElementById("edad").value = '',
    document.getElementById("patologia").value = '',
    document.getElementById("fecha").value = ''
}
//funcion eliminar 
function eliminarRegistro (boton){
     fila = boton.parentElement.parentElement;
     console.log(fila.rowIndex);
     formDatos.splice(fila.rowIndex -1, 1);
     document.getElementById("cuerpotabla").deleteRow(fila.rowIndex);
     localStorage.setItem("formDatos",JSON.stringify(formDatos));

    //  console.log(fila);
    //  document.getElementById("cuerpotabla").deleteRow(fila[0]);
    // formDatos = formDatos.filter((paciente) => nombreCompleto !== nombreCompleto)
    // localStorage.setItem("formDatos",JSON.stringify(formDatos));

 //filtrar el array y borrar el elemento y luego guardar ese array en el localstorage
  
}

//funcion editar 
function editarRegistro (){
//     botonAgregar.style.display = 'none'
//     botonActualizar.style.display = 'block'


//  let pacienteEnEdicion = formDatos.find((nuevoPaciente) => nuevoPaciente.nombreCompleto === nombreCompleto)

// nombreCompleto.value = pacienteEnEdicion.nombreCompleto
// edad.value = pacienteEnEdicion.edad
// patologia.value = pacienteEnEdicion.patologia
// fecha.value = pacienteEnEdicion.fecha

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
               <td><button class="btn2" id="btnEditar" onclick="editarRegistro(this, '${nombreCompletoLs}');" >Editar</button><button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this)">Borrar</button></td>
            </tr>
            `
        }
    }
}
