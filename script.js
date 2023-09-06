// Función para mostrar los datos en una alerta estructurada como tabla HTML
  function mostrarDatosEnAlerta() {
  function escapeHTML(html) {
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  var tabla = "<table style='border-collapse: collapse; width: 100%;'>";
  tabla += "<tr style='background-color: #f2f2f2;'>";
  tabla += "<th style='border: 1px solid #ddd; padding: 8px;'>Campo</th>";
  tabla += "<th style='border: 1px solid #ddd; padding: 8px;'>Valor</th>";
  tabla += "</tr>";
  tabla += "<tr>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>Nombre</td>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>" + escapeHTML(nombre) + "</td>";
  tabla += "</tr>";
  tabla += "<tr>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>Apellido</td>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>" + escapeHTML(apellido) + "</td>";
  tabla += "</tr>";
  tabla += "<tr>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>Teléfono</td>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>" + escapeHTML(telefono) + "</td>";
  tabla += "</tr>";
  tabla += "<tr>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>Email</td>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>" + escapeHTML(email) + "</td>";
  tabla += "</tr>";
  tabla += "<tr>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>Mensaje</td>";
  tabla += "<td style='border: 1px solid #ddd; padding: 8px;'>" + escapeHTML(mensaje) + "</td>";
  tabla += "</tr>";
  tabla += "</table>";

  // Crear una alerta con los datos en formato de tabla HTML
  var alertaHTML = '<div style="background-color: #fefefe; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">';
  alertaHTML += "<h2>Datos del formulario:</h2>";
  alertaHTML += tabla;
  alertaHTML += '</div>';

  // Mostrar la alerta como contenido HTML en una ventana emergente
  var ventanaEmergente = window.open("", "Datos del Formulario", "width=600,height=400");
  ventanaEmergente.document.write("<html><head><title>Datos del Formulario</title></head><body>");
  ventanaEmergente.document.write(alertaHTML);
  ventanaEmergente.document.write("</body></html>");
  ventanaEmergente.document.close();
}

// Asigna la función al botón
document.getElementById("btnMostrarDatos").addEventListener("click", mostrarDatosEnAlerta);


// Función para mostrar una sección y ocultar las demás
function mostrarSeccion(id) {
  var secciones = document.querySelectorAll(".seccion");
  secciones.forEach(function (seccion) {
    seccion.style.display = "none";
  });

  var seccionAMostrar = document.getElementById(id);
  seccionAMostrar.style.display = "block";
}

// Asigna la función a los enlaces del menú
document.querySelector("nav").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault(); // Evita el comportamiento predeterminado de los enlaces
    var targetSection = event.target.getAttribute("data-section");
    mostrarSeccion(targetSection);
  }
});