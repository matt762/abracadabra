document.addEventListener('DOMContentLoaded', function() {
    var data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16],
        type: 'scatter'
    }];

    Plotly.newPlot('plot', data);
});