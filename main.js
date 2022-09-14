let buttonAgregar = document.getElementById('btnagregarpaciente')
buttonAgregar.addEventListener('click', (evento) => crearForm (evento))

let buttonActualizar = document.getElementById('btnactualizarpaciente')
buttonActualizar.addEventListener('click', actualizarPaciente)

let formDatos= [];


let capturarNombreCompleto = document.getElementById("nombreCompleto");
let capturarEdad = document.getElementById("edad");
let capturarPatologia = document.getElementById("patologia");
let capturarFecha = document.getElementById("fecha");


let pacienteEnEdicion


//funcion crear
function crearForm(){
       
    function Paciente (nombreCompleto,edad,patologia,fecha){
          this.nombreCompleto=nombreCompleto;
          this.edad=edad;
          this.patologia=patologia;
          this.fecha=fecha;
    }
    let nuevoPaciente = new Paciente(capturarNombreCompleto.value,capturarEdad.value,capturarPatologia.value,capturarFecha.value);
    insertarNuevoPaciente (nuevoPaciente);   
}
       
//funcion insertar
function insertarNuevoPaciente(nuevoPaciente){
    formDatos.push(nuevoPaciente);

    let tabla = document.getElementById("cuerpotabla");
    let nuevaFila = tabla.insertRow(tabla.length);
    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = nuevoPaciente.nombreCompleto;
    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = nuevoPaciente.edad;
    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = nuevoPaciente.patologia;
    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = nuevoPaciente.fecha;
    cell5 = nuevaFila.insertCell(4);
    cell5.innerHTML = `
        <button class="btn2" id="btnEditar" data-bs-toggle="modal" data-bs-target="#modalPaciente" onclick="editarRegistro(this)">Editar</button>
        <button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this)">Borrar</button>
        `;
    localStorage.setItem("formDatos",JSON.stringify(formDatos));

    limpiarForm ()
    document.getElementById("close").click();           
}
 
function limpiarForm (){
    capturarNombreCompleto.value = '',
    capturarEdad.value = '',
    capturarPatologia.value = '',
    capturarFecha.value = ''
}

//funcion eliminar 
function eliminarRegistro (boton){
     let fila = boton.parentElement.parentElement;
     console.log(fila.rowIndex);
     formDatos.splice(fila.rowIndex -1, 1);
     document.getElementById("tablaPacientes").deleteRow(fila.rowIndex);
     localStorage.setItem("formDatos",JSON.stringify(formDatos)); 
}

//funcion editar 
function editarRegistro (editar){

    buttonAgregar.style.display = 'none'
    buttonActualizar.style.display = 'block'
    pacienteEnEdicion = editar.parentElement.parentElement;
    capturarNombreCompleto.value = pacienteEnEdicion.cells[0].innerHTML;
    capturarEdad.value = pacienteEnEdicion.cells[1].innerHTML;
    capturarPatologia.value = pacienteEnEdicion.cells[2].innerHTML;
    capturarFecha.value = pacienteEnEdicion.cells[3].innerHTML;
}

//funcion para que se guarden los datos en la tabla cuando se refresca la pagina
function actualizarPaginaConDatosLocalStorage(){
    if(localStorage.getItem("formDatos") === null){
    console.log("No hay datos en el localStorage")
    } else {
        formDatos = JSON.parse(localStorage.getItem("formDatos"));
        let mostrarEnTabla = document.getElementById("cuerpotabla");
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
                        <button class="btn3 "id="btnBorrar" onclick="eliminarRegistro(this)">Borrar</button>
                    </td>
                </tr>
                `
        }
    }
}

function actualizarPaciente(){
    formDatos.splice(pacienteEnEdicion.rowIndex -1, 1,{
        nombreCompleto: capturarNombreCompleto.value,
        edad: capturarEdad.value,
        patologia: capturarPatologia.value,
        fecha: capturarFecha.value

    });
    document.getElementById("close").click(); 
    pacienteEnEdicion.cells[0].innerText = formDatos[pacienteEnEdicion.rowIndex -1].nombreCompleto;
    pacienteEnEdicion.cells[1].innerHTML = formDatos[pacienteEnEdicion.rowIndex -1].edad;
    pacienteEnEdicion.cells[2].innerHTML = formDatos[pacienteEnEdicion.rowIndex -1].patologia;
    pacienteEnEdicion.cells[3].innerHTML = formDatos[pacienteEnEdicion.rowIndex -1].fecha;
    localStorage.setItem("formDatos",JSON.stringify(formDatos));

    console.log(pacienteEnEdicion.rowIndex)
}

actualizarPaginaConDatosLocalStorage(); 


