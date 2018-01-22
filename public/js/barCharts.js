const ctx = document.getElementById('horizontalBar').getContext('2d');

const chart = new Chart(ctx, {
  // Type of chart
  type: 'horizontalBar',

  // data
  data: {
    labels: ["Javascript", " ", "Node", " ", "SQL", " ", "NoSQL", " ", "HTML5", " ", "CSS3", " ", "React"],
    datasets: [{
      backgroundColor: '#2facf9',
      borderColor: '#2facf9',
      data: [95, 0, 87.5, 0, 78.75, 0, 70, 0, 64, 0, 57.5, 0, 50],
    },{
      backgroundColor: '#EDEDED',
      borderColor: '#EDEDED',
      data: [5, 0, 12.5, 0, 21.25, 0, 30, 0, 36, 0, 42.5, 0, 50],
    }]
  },

  // Configuration
  options: {
    tooltips: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
        display: false,
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          suggestedMin: 0, // Will be Zero unless there is a lower value
        }
      }],
      yAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        stacked: true,
        categoryPercentage: 0.75,
        barPercentage: 1
      }]
    }
  }
});