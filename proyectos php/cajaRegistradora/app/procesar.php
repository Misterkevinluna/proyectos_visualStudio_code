<?php
include 'bd.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $documento = $_POST['documento'];
    $valor_producto = (float) $_POST['valor_producto'];
    $dinero_recibido = (float) $_POST['dinero_recibido'];

    $descuento = 0;
    $participa_rifa = 0;

    if ($valor_producto >= 100000) {
        $descuento = $valor_producto * 0.05;
        $participa_rifa = 1;
    } elseif ($valor_producto >= 50000) {
        $descuento = $valor_producto * 0.05;
    }

    $valor_total = $valor_producto - $descuento;
    $devuelta = $dinero_recibido - $valor_total;

    if ($devuelta < 0) {
        echo "<p style='color: red;'>Error: El dinero recibido no cubre el total de la compra.</p>";
        exit;
    }

   
    $stmt = $conn->prepare("INSERT INTO registros (nombre, documento, valor_producto, dinero_recibido, devuelta, valor_total, participa_rifa) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssdddii", $nombre, $documento, $valor_producto, $dinero_recibido, $devuelta, $valor_total, $participa_rifa);
    $stmt->execute();

    $ultimo_id = $conn->insert_id; // ID del último registro insertado
    $stmt->close();

    
    $stmtVerificar = $conn->prepare("SELECT * FROM registros WHERE id = ?");
    $stmtVerificar->bind_param("i", $ultimo_id);
    $stmtVerificar->execute();
    $resultado = $stmtVerificar->get_result();
    $registro_valido = $resultado->num_rows > 0;
    $stmtVerificar->close();
    $conn->close();

    if ($registro_valido) {
        
        echo '<link rel="stylesheet" href="estilos.css">';
        echo '<div class="mensaje-exito">';
        echo '<h2>✅ Registro exitoso</h2>';
        echo "<p><strong>Total a pagar:</strong> $" . number_format($valor_total, 0, ',', '.') . "</p>";
        echo "<p><strong>Devuelta:</strong> $" . number_format($devuelta, 0, ',', '.') . "</p>";
        if ($participa_rifa) {
            echo '<p class="rifa">🎉 ¡Participas en la rifa!</p>';
        }
        echo '<a href="index.php" class=\"boton-volver\">Volver al formulario</a>';
        echo '</div>';
    } else {
        echo "<p style='color:red;'>❌ Error: El registro no se pudo verificar en la base de datos.</p>";
    }
} else {
    echo "Acceso no permitido.";
}
