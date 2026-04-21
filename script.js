var grafico1 = new Chart(document.getElementById("chart1"), {
    type: "bar",
    data: {
      labels: ["Python", "JavaScript", "Java", "PHP", "C++"],
      datasets: [{
        label: "Popularidad",
        data: [85, 72, 61, 45, 58],
        backgroundColor: ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8"]
      }]
    }
  });
 
  function actualizar() {
    var val1 = document.getElementById("v1").value;
    var val2 = document.getElementById("v2").value;
    var val3 = document.getElementById("v3").value;
    var val4 = document.getElementById("v4").value;
    var val5 = document.getElementById("v5").value;
 
    grafico1.data.datasets[0].data = [val1, val2, val3, val4, val5];
    grafico1.update();
  }


  var datosJSON = {
    dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    horas: [4, 6, 3, 7, 5, 8, 2]
  };
 
  var cargado = false;
 
  document.getElementById("btnG2").addEventListener("shown.bs.tab", function() {
    if (cargado) return;
    cargado = true;
 
    new Chart(document.getElementById("chart2"), {
      type: "line",
      data: {
        labels: datosJSON.dias,
        datasets: [{
          label: "Horas de estudio",
          data: datosJSON.horas,
          borderColor: "#7f1ec5",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          fill: true
        }]
      }
    });
  });


  // BUSCAR DNI

  async function buscarDNI() {
    var dni = document.getElementById("inputDNI").value;

    if (dni.length != 8) {
      alert("El DNI debe tener 8 dígitos");
      return;
    }

    document.getElementById("resultadoDNI").innerHTML = "<p>Buscando...</p>";

    try {
      var respuesta = await fetch("/buscar/dni/" + dni);
      var data = await respuesta.json();

      document.getElementById("resultadoDNI").innerHTML = `
    <table class="table table-bordered" style="max-width: 400px;">
    <tr><th>Apellido Paterno</th><td>${data.first_last_name}</td></tr>
    <tr><th>Apellido Materno</th><td>${data.second_last_name}</td></tr>
    <tr><th>Nombres</th><td>${data.first_name}</td></tr>
    <tr><th>DNI</th><td>${data.document_number}</td></tr>
  </table>
`;
    } catch (error) {
      document.getElementById("resultadoDNI").innerHTML = "<p class='text-danger'>Error al buscar el DNI</p>";
    }
  }


// Buscar RUC
  async function buscarRUC() {
    var ruc = document.getElementById("inputRUC").value;

    if (ruc.length != 11) {
      alert("El RUC debe tener 11 dígitos");
      return;
    }

    document.getElementById("resultadoRUC").innerHTML = "<p>Buscando...</p>";

    try {
      var respuesta = await fetch("/buscar/ruc/" + ruc);
      var data = await respuesta.json();

      document.getElementById("resultadoRUC").innerHTML = `
  <table class="table table-bordered" style="max-width: 500px;">
    <tr><th>Razón Social</th><td>${data.razon_social}</td></tr>
    <tr><th>RUC</th><td>${data.numero_documento}</td></tr>
    <tr><th>Estado</th><td>${data.estado}</td></tr>
    <tr><th>Condición</th><td>${data.condicion}</td></tr>
    <tr><th>Dirección</th><td>${data.direccion}</td></tr>
    <tr><th>Distrito</th><td>${data.distrito}</td></tr>
    <tr><th>Provincia</th><td>${data.provincia}</td></tr>
    <tr><th>Departamento</th><td>${data.departamento}</td></tr>
    </table>
`;
    } catch (error) {
      document.getElementById("resultadoRUC").innerHTML = "<p class='text-danger'>Error al buscar el RUC</p>";
    }
  }

 
