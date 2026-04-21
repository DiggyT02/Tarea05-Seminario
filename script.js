var miGrafico = new Chart(document.getElementById("chart1"), {
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
 
    miGrafico.data.datasets[0].data = [val1, val2, val3, val4, val5];
    miGrafico.update();
  }