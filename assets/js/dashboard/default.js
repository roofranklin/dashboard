(function () {

    var growthoptions = {
        series: [{
            name: 'Growth',
            data: [22, 14, 23, 8, 14, 12, 2, 14, 18, 35, 18, 8, 24]
        }],
        chart: {
            height: 150,
            type: 'line',
            stacked: true,
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 4,
                color: '#14B67B',
                opacity: 0.22
            },
        },
        grid: {
            show: true,
            borderColor: '#000000',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },

        colors: ["#5527FF"],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        xaxis: {
            lines: {
                show: true
            },
            type: 'category',
            categories: ['0', '', '10k', '', '20k', '', '30k', '', '40k', '', '50k', '', '60k', ''],
            tickAmount: 10,
            labels: {
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#8D8D8D',
                },
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            tooltip: {
                enabled: false,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#5527FF'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: "#14B67B",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#48A3D7",
                        opacity: 1
                    },
                ]
            },
        },
        yaxis: {
            min: -10,
            max: 40,
            labels: {
                show: false
            }
        }
    };

    var growthchart = new ApexCharts(document.querySelector("#growthchart"), growthoptions);
    growthchart.render();

    // ----------Shifts Overview-----//
    var option = {
        labels: ["Aberto", "Atendimento", "Aguardando", "Resolvido", "Fechado"],
        series: [31, 21, 23, 37, 91],
        chart: {
            type: "donut",
            height: 300,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            width: 6,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: "83%",
                    labels: {
                        show: true,
                        name: {
                            offsetY: 4,
                        },
                        total: {
                            show: true,
                            fontSize: "20px",
                            fontFamily: "Outfit', sans-serif",
                            fontWeight: 600,
                            label: "652",
                            formatter: () => "Total de Chats",
                        },
                    },
                },
            },
        },
        states: {
            normal: {
                filter: {
                    type: "none",
                },
            },
            hover: {
                filter: {
                    type: "none",
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: "none",
                },
            },
        },
        colors: ["#E44141", "#D77748", "#C95E9E", "#14B67B", "#48A3D7"],
    };

    var chart = new ApexCharts(
        document.querySelector("#shifts-overview"),
        option
    );
    chart.render();
    var options = {
        series: [{
            type: 'bar',
            data: [350, 380, 440, 470, 500, 570, 600]
        }],
        chart: {
            height: 300,
            toolbar: {
                show: false
            },
        },
        markers: {
            size: 6,
            strokeColor: "#ffffff",
            strokeWidth: 3,
            offsetX: -3,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
                size: 6
            }
        },
        hover: {
            size: 5,
            sizeOffset: 0,
        },
        plotOptions: {
            bar: {
                vertical: true,
                columnWidth: '60%',
                borderRadius: 6,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
            offsetX: -6,
            style: {
                fontSize: '14px',
                fontWeight: 600,
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: [4, 4, 3],
            colors: ['#ffffff', '#ffffff', MofiAdminConfig.primary]
        },
        colors: [MofiAdminConfig.primary, MofiAdminConfig.secondary],
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: ['Ter 24/10', 'Qua 25/10', 'Qui 25/10', 'Sex 26/10', 'Sab 27/10', 'Dom 28/10', 'Seg 29/10'],
            axisBorder: {
                show: false
            },
            labels: {
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#8D8D8D',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#3D434A',
                },
            },
        },
        responsive: [
            {
                breakpoint: 1400,
                options: {
                    series: [{
                        type: 'bar',
                        data: [350, 180, 240, 470, 200]
                    }, {
                        type: 'bar',
                        data: [500, 390, 280, 140, 290]
                    },
                    {
                        type: 'line',
                        data: [350, 180, 240, 470, 200]
                    }],
                }
            },
            {
                breakpoint: 1200,
                options: {
                    series: [{
                        type: 'bar',
                        data: [350, 180, 240, 470, 200, 570, 300, 200]
                    }, {
                        type: 'bar',
                        data: [500, 390, 280, 140, 290, 190, 390, 90]
                    },
                    {
                        type: 'line',
                        data: [350, 180, 240, 470, 200, 570, 300, 200]
                    }],
                }
            },
            {
                breakpoint: 550,
                options: {
                    series: [{
                        type: 'bar',
                        data: [350, 180, 240, 470]
                    }, {
                        type: 'bar',
                        data: [500, 390, 280, 140]
                    },
                    {
                        type: 'line',
                        data: [350, 180, 240, 470]
                    }],
                }
            },
        ]
    };

    var chart = new ApexCharts(document.querySelector("#customer-transaction"), options);
    chart.render();

    var options = {
        series: [{
            type: 'bar',
            data: [350, 380, 440, 470, 500, 570, 600]
        },
        {
            type: 'bar',
            data: [418, 785, 610, 700, 754, 802, 549]
        }],
        chart: {
            height: 212,
            toolbar: {
                show: false
            },
        },
        markers: {
            size: 6,
            strokeColor: "#ffffff",
            strokeWidth: 3,
            offsetX: -3,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
                size: 6
            }
        },
        hover: {
            size: 5,
            sizeOffset: 0,
        },
        plotOptions: {
            bar: {
                vertical: true,
                columnWidth: '60%',
                borderRadius: 6,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
            offsetX: -6,
            style: {
                fontSize: '14px',
                fontWeight: 600,
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: [4, 4, 3],
            colors: ['#ffffff', '#ffffff', MofiAdminConfig.primary]
        },
        colors: [MofiAdminConfig.primary, MofiAdminConfig.secondary],
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: ['Ter 24/10', 'Qua 25/10', 'Qui 25/10', 'Sex 26/10', 'Sab 27/10', 'Dom 28/10', 'Seg 29/10'],
            axisBorder: {
                show: false
            },
            labels: {
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#8D8D8D',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#3D434A',
                },
            },
        },
        responsive: [
            {
                breakpoint: 1400,
                options: {
                    series: [{
                        type: 'bar',
                        data: [350, 180, 240, 470, 200]
                    }, {
                        type: 'bar',
                        data: [500, 390, 280, 140, 290]
                    },
                    {
                        type: 'line',
                        data: [350, 180, 240, 470, 200]
                    }],
                }
            },
            {
                breakpoint: 1200,
                options: {
                    series: [{
                        type: 'bar',
                        data: [350, 180, 240, 470, 200, 570, 300, 200]
                    }, {
                        type: 'bar',
                        data: [500, 390, 280, 140, 290, 190, 390, 90]
                    },
                    {
                        type: 'line',
                        data: [350, 180, 240, 470, 200, 570, 300, 200]
                    }],
                }
            },
            {
                breakpoint: 550,
                options: {
                    series: [{
                        type: 'bar',
                        data: [350, 180, 240, 470]
                    }, {
                        type: 'bar',
                        data: [500, 390, 280, 140]
                    },
                    {
                        type: 'line',
                        data: [350, 180, 240, 470]
                    }],
                }
            },
        ]
    };

    var chart = new ApexCharts(document.querySelector("#customer-transaction2"), options);
    chart.render();

    var options = {
        series: [{
            name: 'Quant. de chats',
            type: 'area',
            data: [34, 58, 26, 44, 19, 12, 61]
        }, {
            name: 'Novos Atendimentos',
            type: 'line',
            data: [20, 31, 12, 19, 8, 3, 25]
        }],
        chart: {
            height: 186,
            type: 'line',
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                top: 4,
                left: 1,
                blur: 8,
                color: [MofiAdminConfig.primary, '#8D8D8D'],
                opacity: 0.6
            },

        },
        stroke: {
            curve: 'smooth',
            width: [3, 3],
            dashArray: [0, 4]

        },
        grid: {
            show: true,
            borderColor: 'rgba(106, 113, 133, 0.30)',
            strokeDashArray: 3,
        },
        fill: {
            type: 'solid',
            opacity: [0, 1],
        },

        labels: ['Ter 24/10', 'Qua 25/10', 'Qui 25/10', 'Sex 26/10', 'Sab 27/10', 'Dom 28/10', 'Seg 29/10'],
        markers: {
            size: [3, 0],
            colors: ['#3D434A'],
            strokeWidth: [0, 0],
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        height: 300
                    }
                }
            },
            {
                breakpoint: 1500,
                options: {
                    chart: {
                        height: 325
                    }
                }
            }
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;
                }
            }
        },
        annotations: {
            xaxis: [{
                x: 550,
                strokeDashArray: 5,
                borderWidth: 3,
                borderColor: '#14B67B69',
            },
            ],
            points: [{
                x: 550,
                y: 330,
                marker: {
                    size: 8,
                    fillColor: MofiAdminConfig.primary,
                    strokeColor: "#ffffff",
                    strokeWidth: 4,
                    radius: 5,
                },
                label: {
                    borderWidth: 1,
                    offsetY: 0,
                    text: '32.10k',
                    style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        fontFamily: 'Outfit, sans-serif',
                    }
                }
            }],
        },
        legend: {
            show: false,
        },
        colors: [MofiAdminConfig.primary, '#8D8D8D'],
        xaxis: {
            labels: {
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#8D8D8D',
                },
            },
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 500,
                    colors: '#3D434A',
                },
            },
        },
        responsive: [
            {
                breakpoint: 576,
                options: {
                    series: [{
                        name: 'TEAM A',
                        type: 'area',
                        data: [00, 50, 60, 180, 90, 340, 120, 250, 190, 100, 180, 380, 190, 220, 100, 90, 140]
                    }, {
                        name: 'TEAM B',
                        type: 'line',
                        data: [00, 70, 30, 100, 120, 220, 250, 100, 200, 300, 330, 270, 300, 200, 180, 220, 130]
                    }],
                }
            },
        ]
    };
    var chart = new ApexCharts(document.querySelector("#chart-dash-2-line"), options);
    chart.render();

})();

