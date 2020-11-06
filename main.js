Highcharts.getJSON('https://raw.githubusercontent.com/paxtondg/Covid19/main/csvjson(1).json', function (data) {


    // Instantiate the map
    Highcharts.mapChart('map', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 1
        },

        title: {
            text: 'Positive Covid-19 Cases'
        },

        exporting: {
            sourceWidth: 600,
            sourceHeight: 500
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#fbfc00',
            maxColor: '#ff0000',
            stops: [
                [0, '#fbfc00'],
                [0.67, '#ffac12'],
                [1, '#ff0000']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Positive Cases',
            tooltip: {
                pointFormat: '{point.code}: {point.value}'
            }
        }]
    });
});
