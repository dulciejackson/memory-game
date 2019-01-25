var aTotal = [];
let totalResults = 0;
var ctx = document.getElementById("myChart").getContext('2d');

function create_chart() {
  var backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];
  var borderColor = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ];
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6"].slice(0, aTotal.length - 1), // iterate array of SCREENS once available
      datasets: [{
        data: aTotal, // retrieve data once user has completed
        backgroundColor: backgroundColor.slice(0, aTotal.length - 1),
        borderColor: borderColor.slice(0, aTotal.length - 1),
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function calculate_result() {
  let aGuesses = guesses.split(",");
  let aResults = results.split(",");
  for (let i = 0; i < aGuesses.length; i++) {
    totalResults += aGuesses[i].length;
    aTotal[i] = get_common_elems(aResults[i], aGuesses[i]) / aResults[i].length;
  }
  create_chart();
  show_total();
}

function show_total() {
  $("#total-correct").val(aTotal.reduce((a, b) => a + b, 0));
}