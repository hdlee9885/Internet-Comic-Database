//function radar() {
//	var ctxR = document.getElementById("radarChart").getContext('2d');
//
//	        var myRadarChart = new Chart(ctxR, {
//	        type: 'radar',
//	        data: {
//		        labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
//		        datasets: [
//		          {
//			        label: "Captain America",
//			        data: [69, 79, 48, 85, 60, 100],
//			        backgroundColor: ['rgba(0, 0, 255, .2)',],
//			        borderColor: ['rgba(0, 0, 255, .7)',],
//			        borderWidth: 2
//			        },
//		          {
//			        label: "Iron Man",
//			        data: [100, 85, 58, 85, 100, 64],
//			        backgroundColor: ['rgba(255, 255, 0, .2)',],
//			        borderColor: ['rgba(255, 255, 0, .7)',],
//			        borderWidth: 2
//		        	},
//		          {
//			        label: "Spider-Man",
//			        data: [90, 55, 67, 75, 74, 85],
//			        backgroundColor: ['rgba(255, 0, 0, .2)',],
//			        borderColor: ['rgba(200, 99, 132, .7)',],
//			        borderWidth: 2
//		        }]
//	        },
//	        options: {
//	        	responsive: true
//	        }
//	        });
//}

window.chartColors = {
 				  red: 'rgb(255, 99, 132)',
 				  orange: 'rgb(255, 159, 64)',
 				  yellow: 'rgb(255, 205, 86)',
 				  green: 'rgb(75, 192, 192)',
 				  blue: 'rgb(54, 162, 235)',
 				  purple: 'rgb(153, 102, 255)',
 				  grey: 'rgb(231,233,237)'
 				};

 				var label1 ="Captain America";
 				var label2 = "Iron Man";
 				var label3 = "Spider Man";

 				var color = Chart.helpers.color;
 				var config = {
 				  type: 'radar',
 				  data: {
 				    labels: [
 				      "Intelligence", "Strength", "Speed","Durability", "Power", "Combat"],
 				    datasets: [{
 				      label: label1,
 				      backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
 				      borderColor: window.chartColors.red,
 				      pointBackgroundColor: window.chartColors.red,
 				      data: [69, 79, 48, 85, 60, 100],
 				      notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
 				    }, {
 				      label: label2,
 				      backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
 				      borderColor: window.chartColors.blue,
 				      pointBackgroundColor: window.chartColors.blue,
 				      data: [100, 85, 58, 85, 100, 64],
 				      notes: ["Joined social club","none","none","none","none","Was late one day","Just broke up"]
 				    },{
 				      label: label3,
 				      backgroundColor: color(window.chartColors.purple).alpha(0.2).rgbString(),
 				      borderColor: window.chartColors.purple,
 				      pointBackgroundColor: window.chartColors.purple,
 				      data: [90, 55, 67, 75, 74, 85],
 				      notes: ["none","none","none","none","Won at bingo","none","none","Leg week", "Fed the poor", "Positive Mental Attitude"]
 				    } ]
 				  },
 				  options: {
 				    legend: {
 				      position: 'top',
 				    },
 				    title: {
 				      display: true,
 				      text: 'Chart.js Outcome Graph'
 				    },
 				    scale: {
 				      ticks: {
 				        beginAtZero: true
 				      }
 				    },
 				    tooltips:{
 				      enabled:false,
 				      callbacks:{
 				        label: function(tooltipItem, data){
 				          var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
 				          //This will be the tooltip.body
 				          return datasetLabel + ': ' + tooltipItem.yLabel +': '+ data.datasets[tooltipItem.datasetIndex].notes[tooltipItem.index];
 				        }
 				      },
 				      custom: function(tooltip){
 				        // Tooltip Element
 				      var tooltipEl = document.getElementById('chartjs-tooltip');
 				      if (!tooltipEl) {
 				        tooltipEl = document.createElement('div');
 				        tooltipEl.id = 'chartjs-tooltip';
 				        tooltipEl.innerHTML = "<table></table>"
 				        document.body.appendChild(tooltipEl);
 				      }
 				      // Hide if no tooltip
 				      if (tooltip.opacity === 0) {
 				        tooltipEl.style.opacity = 0;
 				        return;
 				      }
 				      // Set caret Position
 				      tooltipEl.classList.remove('above', 'below', 'no-transform');
 				      if (tooltip.yAlign) {
 				        tooltipEl.classList.add(tooltip.yAlign);
 				      } else {
 				        tooltipEl.classList.add('no-transform');
 				      }
 				      function getBody(bodyItem) {
 				        return bodyItem.lines;
 				      }
 				      // Set Text
 				      if (tooltip.body) {
 				        var titleLines = tooltip.title || [];
 				        var bodyLines = tooltip.body.map(getBody);
 				        var innerHtml = '<thead>';
 				        titleLines.forEach(function(title) {
 				          innerHtml += '<tr><th>' + title + '</th></tr>';
 				        });
 				        innerHtml += '</thead><tbody>';
 				        bodyLines.forEach(function(body, i) {
 				          var colors = tooltip.labelColors[i];
 				          var style = 'background:' + colors.backgroundColor;
 				          style += '; border-color:' + colors.borderColor;
 				          style += '; border-width: 2px';
 				          var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
 				          innerHtml += '<tr><td>' + span + body + '</td></tr>';
 				        });
 				        innerHtml += '</tbody>';
 				        var tableRoot = tooltipEl.querySelector('table');
 				        tableRoot.innerHTML = innerHtml;
 				      }
 				      var position = this._chart.canvas.getBoundingClientRect();
 				      // Display, position, and set styles for font
 				      tooltipEl.style.opacity = 1;
 				      tooltipEl.style.left = position.left + tooltip.caretX + 'px';
 				      tooltipEl.style.top = position.top + tooltip.caretY + 'px';
 				      tooltipEl.style.fontFamily = tooltip._fontFamily;
 				      tooltipEl.style.fontSize = tooltip.fontSize;
 				      tooltipEl.style.fontStyle = tooltip._fontStyle;
 				      tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
 				      }
 				    }
 				  }
 				};
 				window.onload = function() {
 				  window.myRadar = new Chart(document.getElementById("radarChart"), config);
 				};
 				var colorNames = Object.keys(window.chartColors);