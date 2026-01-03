const nodemailer = require("nodemailer");

const index =  (req, res)=>{
    res.render("contacto");//Este index que esta renderizando hace referencia al del src\views\contacto.ejs
}

const submit =  async(req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_POST,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"${req.body.nombre}" <${req.body.correo}>`,
            to: "bar@example.com, baz@example.com",
            subject: "Formulario de Contacto",
            text: req.body.mensaje, // plain‑text body
            html: `<pre>${req.body.mensaje}</pre>`, // HTML body
        });
        console.log(info);
    } catch (error) {
        console.error(error);
    }

    res.send("Enviando");
}

//De esta forma se exportan funciones en expecifica para que sean usadas por fuera
module.exports = {
    index,
    submit,
}