<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Caja Registradora</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h2>Caja Registradora</h2>
    <form action="procesar.php" method="post">
        <label>Nombre:</label><br>
        <input type="text" name="nombre" required><br>

        <label>Documento:</label><br>
        <input type="text" name="documento" required><br>

        <label>Valor del Producto:</label><br>
        <input type="number" name="valor_producto" step="0.01" required><br>

        <label>Dinero Recibido:</label><br>
        <input type="number" name="dinero_recibido" step="0.01" required><br><br>

        <input type="submit" value="Registrar">
    </form>
</body>
</html>