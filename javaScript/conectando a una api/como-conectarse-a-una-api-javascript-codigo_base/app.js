const cargarHeader = async() => {
    const respuesta = await fetch('http://localhost:8005/api/120021081221/findBy-header/ID/7001');
    console.log(respuesta);
}

cargarHeader();