// Info Date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Task Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () =>{
    const date = new Date();
    // el 'es' dentro de .toLocaleString('es'...) le indicamos que los resultados los queremos en español
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });// extraer el dia en formato numerico
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });// extraer el dia de la semana, con 'long' se usa para que muestre el texto completo (mie=>miercoles).
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });// 'short' para mostrar una parte del nombre del mes (agosto=>ago).
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });// extraer el dia en formato numerico
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });// extraer el año en formato numerico
}



const addNewTask = event => {
    event.preventDefault();//con el xxxx evitamos que el form de html haga un submit para querer llevarnos a otra pagina
    const {value} = event.target.taskText;// tomaremos del evento el value (valor) de taskText, taskText es el name que le dimos al input que se encuentra dentro del form 
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);//.prepend lo usamos para agregar la tarea el principio de la lista.
    event.target.reset();//receteamos el form, para que quede basio el input.
    
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
}

const order = () =>{
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el =>{
        el.classList.contains('done')? done.push(el) : toDo.push(el);
    });

    return [...toDo, ...done];
}

const renderOrderedTasks = () =>{
    order().forEach(el => tasksContainer.appendChild(el));
}

setDate();