'use strict';
//=include jquery.js
//=include Chart.bundle.js

// Data for doughnut charts
const doughnutData = [
  {
    skill: 'Accountancy',
    percent: 95
  },
  {
    skill: 'Problem-solving',
    percent: 80
  },
  {
    skill: 'Communication',
    percent: 75
  },
  {
    skill: 'Planning',
    percent: 70,
  },
  {
    skill: 'Teamwork',
    percent: 65 
  }
];

$(document).ready(ready);

function ready() {
  
  // add click event to navigation items in header
  $('.nav-item a').on('click', handleNavClick)

  // Create horizontal bar chart
  const ctx = document.getElementById('horizontalBar').getContext('2d');

  const chart = new Chart(ctx, {
    // Type of chart
    type: 'horizontalBar',

    // data
    data: {
      labels: ['Javascript', ' ', 'Node', ' ', 'SQL', ' ', 'NoSQL', ' ', 'HTML5', ' ', 'CSS3', ' ', 'React'],
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

  // doughnut charts code
  doughnutData.forEach((v, i) => {
    
    // Append doughnut for each data point. 
    // Use container class to control chart size.
    $(`<div class='doughnut-container' id='doughnut-container-${i}'>
        <canvas id='doughnut-${i}' class='doughnut'></canvas>
      </div>`
    ).appendTo('#doughnuts');
  
    insertDoughnut(v, i);
  
    addText(v.skill, i);
  });
}

function handleNavClick(evt) {

  // isolate reference to DOM element
  const node = evt.target;

  // Update class on header navigation menu
  $('.nav-item').removeClass('active-tab');
  $(node).parent().addClass('active-tab');
  
  // Update main section to show correct page
  const target = '#' + $(node).attr('id') + '-content';
  $('.page').attr('hidden', true);
  $(target).attr('hidden', false);
}

// These functions are used to create the doughnut charts
function addText(skill, n) {
  
  const target = `#doughnut-container-${n}`;
  const text = `<p class='skill-label'>${skill}</p>`;
  
  $(target).prepend(text);

};

function insertDoughnut(props, n) {
   
  /* adds doughnut chart with fields as defined by
    <canvas id='doughnut-${props.n}'></canvas>
      the props object passed in */

  const percent = props.percent;
  
  const data = {
    datasets: [
      {
        data: [percent, 100-percent],
        backgroundColor: [
          '#2facf9',
          '#dadada'
        ],
      }]
  };

  const promisedDeliveryChart = new Chart(
    document.getElementById(`doughnut-${n}`), {
      type: 'doughnut',
      data: data,
      options: {
        tooltips: false,
        cutoutPercentage: 65,
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
      }
    });
}
