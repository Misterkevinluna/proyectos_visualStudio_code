import '../../assets/css/style/clientes.css';

export default function Clientes() {
    return (
        <>
            <section className="clientes">
                <div className="encabezado">
                    <h3 className="titulo">Mis clientes</h3>
                    <p className="subtitulo">Estas marcas han confiado en mis servicios como freelance.</p>
                </div>
                <div className="logos">
                    <img src="/assets/logos/Recharge.svg" className="logo" alt="Logo de Recharge" />
                    <img src="/assets/logos/Volume.svg" className="logo" alt="Logo de Volume" />
                    <img src="/assets/logos/Umbrella.svg" className="logo" alt="Logo de Umbrella" />
                    <img src="/assets/logos/Waveless.svg" className="logo" alt="Logo de Waveless" />
                    <img src="/assets/logos/Vision.svg" className="logo" alt="Logo de Vision" />
                </div>
            </section>
        </>
    );
}