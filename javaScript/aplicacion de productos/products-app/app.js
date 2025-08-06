class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: Example
                    <strong>Product Price</strong>: 100
                    <strong>Product Year</strong>: 2025
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.recetForm();
    }

    recetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado Satisfactoriamente', 'info');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app)

        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

//DOM Events
document.getElementById('product-form')
.addEventListener('submit', 
    function(event){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);
        const ui = new UI();

        if(name === '' || price === '') {
            return ui.showMessage('Complete los campos', 'danger');
        }// agregando el retur para que no se ejecute el resto del código si no se cumple la condición

        ui.addProduct(product)
        ui.showMessage('Pruducto Agregado Satifactoriamente', 'success');
        console.log(product);
    });

    document.getElementById('product-list').addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
    });