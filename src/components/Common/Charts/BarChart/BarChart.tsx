import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

/**
Dependencies
npm i chartjs-plugin-datalabels
 */

export const BarChart = (props: any) => {
    const [visible, setVisible] = useState(false)
    var chartRef = useRef(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        if(props.data === null || props.labels === null){
            setData(null)
        }

        if(props.data !== null && props.labels !== null){
            setVisible(false)
            setData({labels: props.labels, data: props.labels})
        }

    }, [props.data, props.labels])

    useEffect(() => {
        if(data !== null){
            setVisible(true)
        }
    }, [data])

    useEffect(() => {
        if(visible){
            const myChartRef = chartRef.current.getContext("2d");
            new Chart(myChartRef, {
                type: "bar",
                data: {
                    labels: props.labels,
                    datasets: [
                        {
                            label: props.title,
                            data: props.data,
                            backgroundColor: props.backgroundColor
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: props.xTitle,
                                font: {size: props.xFontSize}
                            }
                        },            
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: props.yTitle,
                                font: {size: props.yFontSize}
                            }
                        }
                    },
                    plugins: {
                        datalabels: {
                          color: 'white',
                          font: {
                            weight: 'bold',
                            size: 20
                          },
                        }
                    }
                }
            })
        }
    }, [visible])

    return (<>
        {visible? <canvas ref={chartRef} />: null}
    </>);
};

BarChart.defaultProps = {
    title: 'Title',
    data: [],
    labels: [],
    backgroundColor: "rgba(75,192,192,1)",
    xTitle: "X axis",
    yTitle: "Y axis",
    xFontSize: 20,
    yFontSize: 20,
};
  
BarChart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
    backgroundColor: PropTypes.string,
    xTitle: PropTypes.string,
    xFontSize: PropTypes.number,
    yTitle: PropTypes.string,
    yFontSize: PropTypes.number
};

/**
console.log("")
console.log(": ", )
console.log("  ")
*/