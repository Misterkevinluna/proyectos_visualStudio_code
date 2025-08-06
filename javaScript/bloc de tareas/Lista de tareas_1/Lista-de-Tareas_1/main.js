const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty_P = document.querySelector('.empty p');
const empty = document.querySelector('.empty');

const btnDeleteAll = document.createElement("button");
btnDeleteAll.textContent = "Delete All";

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        
        
        input.value = "";
        empty_P.style.display = "none";
        addBtnDeleteAll();
    }

});
btnDeleteAll.addEventListener("click", () =>{
    ul.innerHTML = "";
    addBtnDeleteAll();
});

function addBtnDeleteAll(){
    
    const itemsLi = document.querySelectorAll("li");
    
    
    if (ul.children.length === 1) {
        
        btnDeleteAll.style.display = "block";
        empty.appendChild(btnDeleteAll);
    } else if(ul.children.length === 0){
        empty_P.style.display = "block";
        console.log('ENTRANDO');
        btnDeleteAll.style.display = "none";
    }
   
}


function addDeleteBtn(){
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent ="X";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        
        const items = document.querySelectorAll("li");
        if (items.length === 0) {

            addBtnDeleteAll();
        }
    });
    
    return deleteBtn;
}


