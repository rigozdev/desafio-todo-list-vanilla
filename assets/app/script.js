/*Elementos y variables html*/
const formulario = document.querySelector('#formulario');
const inputTarea = document.querySelector('#inputTarea');
const tareasContainer = document.querySelector('#tareasContainer');
const cantidadTareas = document.querySelector('#cantidadTareas');
const cantidadTareasRealizadas = document.querySelector('#cantidadTareasRealizadas');


let listaDeTareas = [

    //! Se comentarion los elementos para que se inicie con una lista vacía
    // { id: +String(Date.now() + 1).slice(7), descripcionTarea: 'Salir a regar', estado: false },
    // { id: +String(Date.now() + 2).slice(7), descripcionTarea: 'Ir a comer', estado: false },
    // { id: +String(Date.now() + 3).slice(7), descripcionTarea: 'Hacer las tareas', estado: false },
    // { id: +String(Date.now() + 4).slice(7), descripcionTarea: 'Practicar estudios', estado: false },

];

const renderizaTareas = () => {

    /* Este fragmento de código pinta la cantidad de tareas */
    let totalTareas = listaDeTareas.length;
    cantidadTareas.innerHTML = '';
    cantidadTareas.innerHTML += `<p id="cantidadTareas">Total tareas: <b>${totalTareas}</b></p>`;

    /* Este fragmento cuenta tiene un contador, luego se evalua la cantidad de tareas realizadas con un forOf */
    totalTareasRealizadas = 0;
    for (const tarea of listaDeTareas) {
        if (tarea.estado === true) {
            totalTareasRealizadas += 1;
        }
    }
    cantidadTareasRealizadas.innerHTML = '';
    cantidadTareasRealizadas.innerHTML += `<p id="cantidadTareasRealizadas">Tareas realizadas: <b>${totalTareasRealizadas}</b></p>`;

}

const renderizado = () => {

    tareasContainer.innerHTML = '';
    /* Se recorren todas las tareas del arreglo 'listaDeTareas' */
    listaDeTareas.forEach(element => {

        /* Se evalua el estado de cada tarea, en caso de ser false no se agrega el atributo checked a la tarea */
        //! Se le asigna una función en 'onClick' del checkbox, al momneto de clickearlo, se marcará 'checked'
        //!
        if (element.estado === false) {
            tareasContainer.innerHTML += `
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        ${element.id}
                    </div>
                    <div class="col">
                        ${element.descripcionTarea}
                    </div>
                    <div class="col">
                        <input onclick="tareaChecker(${element.id})" type="checkbox" name="" id="${element.id}">
                    </div>
                    <div class="col">
                        <button onclick="elimina(${element.id})" class="eliminar-button" id="${element.id}">❌</button>
                    </div>
                </div>
            </div>
            `;
        } else {
            tareasContainer.innerHTML += `
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        ${element.id}
                    </div>
                    <div class="col">
                        ${element.descripcionTarea}
                    </div>
                    <div class="col">
                        <input onclick="tareaChecker(${element.id})" type="checkbox" name="" id="${element.id}" checked>
                    </div>
                    <div class="col">
                        <button onclick="elimina(${element.id})" class="eliminar-button" id="${element.id}">❌</button>
                    </div>
                </div>
            </div>
            `;
        }


    });
    renderizaTareas();
}

renderizado();

/* Función para cambiar estado de actividad */
// !Esta función funciona en el 'onClick' del checkbox
const tareaChecker = (checkeador) => {
    
    /* Para cada tarea, comparo la id de la tarea en el arreglo con la enviada por el checkbox en onClick */
    listaDeTareas.forEach((tarea) => {
        if (tarea.id === checkeador) {

            /* Accedemos al estado de la tarea y en caso de ser falso, su estado cambiará a true, en caso contrario cambiará a false */
            if (tarea.estado === false) {
                tarea.estado = true;
                renderizado();
                renderizaTareas();
            } else {
                tarea.estado = false;
                renderizado();
                renderizaTareas();
            }
        }
    });
}


/* Función que agrega un elemento */
const agrega = () => {
    if (inputTarea.value !== '' || inputTarea == undefined && inputTarea.value === isNaN(+(inputTarea.value))) {
        listaDeTareas.push({
            id: +String(Date.now()).slice(7),
            descripcionTarea: inputTarea.value,
            estado: false
        })
    } else {
        alert('Ingrese una tarea válida');
    }
}


/* Función que elimina un elemento */
const elimina = (id) => {
    const indice = listaDeTareas.findIndex((elemento) => elemento.id === id);
    listaDeTareas.splice(indice, 1);
    renderizado();
    renderizaTareas();
};


/* Botón que envía la info del formulario */
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    agrega();
    renderizado();

    inputTarea.value = '';/* Este fragmento limpia el input luego de ingresar una tarea */

});


renderizaTareas();