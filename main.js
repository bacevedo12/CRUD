let buttonAgregar = document.getElementById('btnagregarpaciente')
buttonAgregar.addEventListener('click', (evento) => crearForm (evento))

let formDatos= [];


let buttonActualizar = document.getElementById('btnactualizarpaciente')
buttonActualizar.addEventListener('click', (evento) => actualizarPaciente (evento))



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

       limpiarForm ()
       document.getElementById("close").click();   
        
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
     document.getElementById("tablaPacientes").deleteRow(fila.rowIndex);
     localStorage.setItem("formDatos",JSON.stringify(formDatos));


  
}

//funcion editar 
function editarRegistro (editar){
    buttonAgregar .style.display = 'none'
    buttonActualizar.style.display = 'block'

    pacienteEnEdicion = editar.parentElement.parentElement;

    document.getElementById("nombreCompleto").value = pacienteEnEdicion.cells[0].innerHTML;
    document.getElementById("edad").value = pacienteEnEdicion.cells[1].innerHTML;
    document.getElementById("patologia").value = pacienteEnEdicion.cells[2].innerHTML;
    document.getElementById("fecha").value = fecha.value = pacienteEnEdicion.cells[3].innerHTML;
    // nombreCompleto.setAttribute('disabled', true)


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
               <td>
                  <button class="btn2" id="btnEditar" data-bs-toggle="modal" data-bs-target="#modalPaciente" onclick="editarRegistro(this)">Editar</button>
                  <button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this)">Borrar</button></td>
            </tr>
            `
        }
    }
}

function actualizarPaciente(evento) {
   evento.preventDefault ()

   let nuevoNombreCompleto = document.getElementById("nombreCompleto").value
   let nuevaEdad = document.getElementById("edad").value
   let nuevaPatologia = document.getElementById("patologia").value
   let nuevaFecha = document.getElementById("fecha").value 

   formDatos = formDatos.map(Paciente => {
      if (Paciente.nombreCompleto === nombreCompleto){
      return {
         nombreCompleto: 'nuevoNombreCompleto',
         edad: 'nuevaEdad',
         patologia:'nuevaPatologia',
         fecha:'nuevaFecha'
      }
      }else
      console.log('else')
      return Paciente
   })



    limpiarForm ()


    buttonAgregar .style.display = 'block'
    buttonActualizar.style.display = 'none'

    // nombreCompleto.removeAttribute('diseable')

    localStorage.setItem("formDatos",JSON.stringify(formDatos));

    actualizarPaginaConDatosLocalStorage()

}

    
   
//     // limpiar los input
//     limpiarInput()
  
//     // vuelve a aparecer boton agregar
//     botonAgregar.style.display = 'block'
//     // vuelva a desaparecer el boton actualizar
//     botonActualizar.style.display = 'none'
//     // vuelve a quedar activo el input
//     nombre.removeAttribute('disabled')
//     // actualizo el LS
//     guardarEnLS()
//     // actualizar la tabla
//     mostrarTareas()
//   }
  
//   leerTareas()
