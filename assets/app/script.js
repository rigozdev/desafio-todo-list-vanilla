//Elementos html
const formulario = document.querySelector('#formulario');
const inputTarea = document.querySelector('#inputTarea');
//const statusTarea = document.querySelector('#statusTarea');
const tareasContainer = document.querySelector('#tareasContainer');
const cantidadTareas = document.querySelector('#cantidadTareas');
const cantidadTareasRealizadas = document.querySelector('#cantidadTareasRealizadas');


let listaDeTareas = [
    { id: +String(Date.now() + 1).slice(7), descripcionTarea: 'Salir a regar', estado: false },
    { id: +String(Date.now() + 2).slice(7), descripcionTarea: 'Ir a comer', estado: false },
    { id: +String(Date.now() + 3).slice(7), descripcionTarea: 'Hacer las tareas', estado: false },
    { id: +String(Date.now() + 4).slice(7), descripcionTarea: 'Practicar estudios', estado: false },

];
console.log(listaDeTareas);


// const isChecked = () => {
//     for (const tarea of listaDeTareas) {
//         if (tarea.estado === true ) {

//             statusTarea.checked;
//         }
//     }
// }

const renderizaTareas = () => {
    let totalTareas = listaDeTareas.length;
    cantidadTareas.innerHTML = '';
    console.log('totaltareas:', totalTareas);
    cantidadTareas.innerHTML += `<p id="cantidadTareas">Total tareas: <b>${totalTareas}</b></p>`;


    totalTareasRealizadas = 0;
    for (const tarea of listaDeTareas) {
        if (tarea.estado===true) {
            totalTareasRealizadas+=1;
        }
    }

    cantidadTareasRealizadas.innerHTML='';
    cantidadTareasRealizadas.innerHTML+=`<p id="cantidadTareasRealizadas">Tareas realizadas: <b>${totalTareasRealizadas}</b></p>`;

}

const renderizado = () => {
    // renderizaTareas();
    let totalTareas = listaDeTareas.length;


    tareasContainer.innerHTML = '';

    listaDeTareas.forEach(element => {
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
                    <input onclick="modifica(${element.id})" type="checkbox" name="">
                </div>
                <div class="col">
                    <button onclick="elimina(${element.id})" class="eliminar-button">❌</button>
                </div>
        </div>
        </div>
        `

    });

    renderizaTareas();
    // cantidadTareas.innerHTML='';
    // console.log('totaltareas:', totalTareas);
    // cantidadTareas.innerHTML+=`<p id="cantidadTareas">Total tareas: <b>${totalTareas}</b></p>`;
    // isChecked();
    //console.log(statusTarea.checked);
}

renderizado();

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

    let html = '';
    for (const tarea of listaDeTareas) {
        html += `
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    ${tarea.id}
                </div>
                <div class="col">
                    ${tarea.descripcionTarea}
                </div>
                <div class="col">
                    <input onclick="modifica(${tarea.id})" type="checkbox" name="" id="statusTarea">
                </div>
                <div class="col">
                    <button onclick="elimina(${tarea.id})" class="eliminar-button">❌</button>
                </div>
            </div>
        </div>
        `;
    }
    tareasContainer.innerHTML = html;
    renderizaTareas();
};


/* Función para cambiar estado de actividad */





/* Botón que envía la info del formulario */
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    agrega();
    renderizado();

    inputTarea.value = '';

});



// console.log(Date.now());
// console.log(Date.now()+1);





// const modifica = (idTarea) => {
//     const tarea = listaDeTareas.find((tarea) => tarea.id === idTarea);
//     if (tarea) {
//         if (tarea.estado) {
//             tarea.estado = false;

//             let html = '';
//             for (const tarea of listaDeTareas) {
//                 html += `
//                 <div class="container text-center">
//                     <div class="row">
//                         <div class="col">
//                             ${tarea.id}
//                         </div>
//                         <div class="col">
//                             ${tarea.descripcionTarea}
//                         </div>
//                         <div class="col">
//                             <input onclick="modifica(${listaDeTareas.id})" type="checkbox" name="" id="status">
//                         </div>
//                         <div class="col">
//                             <button onclick="elimina(${listaDeTareas.id})" class="eliminar-button">❌</button>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//             }
//             tareasContainer.innerHTML = html;
//         } else {
//             tarea.estado = true;
//             let html = '';
//             for (const tarea of listaDeTareas) {
//                 html += `
//                 <div class="container text-center">
//                     <div class="row">
//                         <div class="col">
//                             ${tarea.id}
//                         </div>
//                         <div class="col">
//                             ${tarea.descripcionTarea}
//                         </div>
//                         <div class="col">
//                             <input onclick="modifica(${listaDeTareas.id})" type="checkbox" name="" id="status" checked>
//                         </div>
//                         <div class="col">
//                             <button onclick="elimina(${listaDeTareas.id})" class="eliminar-button">❌</button>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//             }
//             tareasContainer.innerHTML = html;
//         }
//     }


// }


const modifica = (id) => {
    console.log('modificando');

    listaDeTareas.map((elem) => {
        if (elem.id === id) {
            if (elem.estado === false) {
                return elem.estado = true;
            } else {
                return elem.estado = false;
            }
        }
    })

}

renderizaTareas();