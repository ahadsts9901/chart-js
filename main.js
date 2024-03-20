const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar', // pie, bar, bubble, line, dougnnut, polarArea, scatter, radar
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Pink'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'pink'],
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 5,
            hoverBorderWidth: 3,
            hoverBorderColor: "white",
            spanGaps: true,
            showLine: false,
            // datasets: [{
            //     spanGaps: true // enable for a single dataset
            // }],
            // data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10},{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}],
            // data: [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}],
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                },
                // grid: {
                //     display: false
                // },
                borderRadius: 5,
                hoverBorderWidth: 3,
                hoverBorderColor: "purple",
            },
            x: {
                ticks: {
                    stepSize: 2
                },
                borderRadius: 5,
                hoverBorderWidth: 3,
                hoverBorderColor: "purple",
            },
        },
        plugins: {
            colors: {
                // forceOverride: true
            },
            legend: {
                labels: {
                    font: {
                        size: 30
                    }
                }
            }
        },
        layout: {
            padding: 50,
            // padding:{
            //     left: 20,
            //     right: 100,
            //     top: 20,
            //     bottom: 20,
            // }
        },
        // animation: false,

    },
});