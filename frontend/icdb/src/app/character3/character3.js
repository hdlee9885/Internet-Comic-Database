//radar
    var ctxR = document.getElementById("radarChart").getContext('2d');
    var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
        datasets: [
          {
	        label: "Captain America",
	        data: [69, 79, 48, 85, 60, 100],
	        backgroundColor: ['rgba(0, 0, 255, .2)',],
	        borderColor: ['rgba(0, 0, 255, .7)',],
	        borderWidth: 2
	        },
          {
	        label: "Iron Man",
	        data: [100, 85, 58, 85, 100, 64],
	        backgroundColor: ['rgba(255, 255, 0, .2)',],
	        borderColor: ['rgba(255, 255, 0, .7)',],
	        borderWidth: 2
        	},
          {
	        label: "Spider-Man",
	        data: [90, 55, 67, 75, 74, 85],
	        backgroundColor: ['rgba(255, 0, 0, .2)',],
	        borderColor: ['rgba(200, 99, 132, .7)',],
	        borderWidth: 2
        }]
    },
    options: {
    	responsive: true
    }
    });