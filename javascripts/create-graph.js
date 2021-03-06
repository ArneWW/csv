/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/data.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var setosa = [];
	var versicolor = [];

	for (var i = 1; i < data.length; i++) {
		setosa.push(data[i][0]);
		versicolor.push(data[i][2]);
	}

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	versicolor
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: setosa,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);