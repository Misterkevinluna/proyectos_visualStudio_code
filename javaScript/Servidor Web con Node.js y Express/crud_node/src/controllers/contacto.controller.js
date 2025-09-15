const index =  (req, res)=>{
    res.render("contacto");//Este index que esta renderizando hace referencia al del src\views\contacto.ejs
}

const submit =  (req, res)=>{
    console.log(req.body);
    res.send("Enviando");
}

//De esta forma se exportan funciones en expecifica para que sean usadas por fuera
module.exports = {
    index,
    submit,
}