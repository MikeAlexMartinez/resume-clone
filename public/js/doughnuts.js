const doughnutData = [
  {
    skill: "Accountancy",
    percent: 95
  },
  {
    skill: "Problem-solving",
    percent: 80
  },
  {
    skill: "Communication",
    percent: 75
  },
  {
    skill: "Planning",
    percent: 70,
  },
  {
    skill: "Teamwork",
    percent: 65 
  }
];

doughnutData.forEach((v, i) => {

  // Append doughnut for each data point. 
  // Use container class to control chart size.
  $(`<div class="doughnut-container" id="doughnut-container-${i}">
      <canvas id="doughnut-${i}" class="doughnut"></canvas>
    </div>`
  ).appendTo('#doughnuts');

  insertDoughnut(v, i);

  addText(v.skill, i);
});

function addText(skill, n) {
  
  const target = `#doughnut-container-${n}`;
  const text = `<p class="skill-label">${skill}</p>`;
  
  $(target).prepend(text);

};

function insertDoughnut(props, n) {
   
  /* adds doughnut chart with fields as defined by
    <canvas id="doughnut-${props.n}"></canvas>
      the props object passed in */

  const skill = props.skill;
  const percent = props.percent;
  
  const data = {
    datasets: [
      {
        data: [percent, 100-percent],
        backgroundColor: [
          "#2facf9",
          "#dadada"
        ],
      }]
  };

  const promisedDeliveryChart = new Chart(
    document.getElementById(`doughnut-${n}`), {
      type: 'doughnut',
      data: data,
      options: {
        tooltips: false,
        cutoutPercentage: 75,
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
      }
    });
}
