//Elementos html
const formulario = document.querySelector('#formulario');
const inputTarea = document.querySelector('#inputTarea');
const status = document.querySelector('#status');
const tareasContainer = document.querySelector('#tareasContainer');


listaDeTareas = [
    {id: +String(Date.now()+1).slice(7), descripcionTarea:'Salir a regar', estado: false},
    {id: +String(Date.now()+2).slice(7), descripcionTarea:'Ir a comer', estado: false},
    {id: +String(Date.now()+3).slice(7), descripcionTarea:'Hacer las tareas', estado: false},
    {id: +String(Date.now()+4).slice(7), descripcionTarea:'Practicar estudios', estado: false},

];
console.log(listaDeTareas);


const renderizado =()=>{
    tareasContainer.innerHTML = '';

    listaDeTareas.forEach(element => {
        tareasContainer.innerHTML+=`
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    ${element.id}
                </div>
                <div class="col">
                    ${element.descripcionTarea}
                </div>
                <div class="col">
                    <input type="checkbox" name="" id="status">
                </div>
                <div class="col">
                    <button class="eliminar-button">❌</button>
                </div>
        </div>
        </div>
        `
    });
}


const agrega = ()=>{
    if(inputTarea.value!=='' ||inputTarea ==undefined && inputTarea.value=== isNaN(+(inputTarea.value))){
        listaDeTareas.push({
            id: +String(Date.now()).slice(7),
            descripcionTarea: inputTarea.value,
            estado: false
        })
    }else{
        alert('Ingrese una tarea válida');
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    agrega();
    renderizado();

    inputTarea.value ='';
});



// console.log(Date.now());
// console.log(Date.now()+1);
