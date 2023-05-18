import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';

export const BarChart = (props: any) => {
    const chartRef = useRef(null);

    useEffect(() => {
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
                }
            }
        });
    }, []);

    return (
        <canvas ref={chartRef} />
    );
};

BarChart.defaultProps = {
    title: 'Title',
    data: [],
    labels: [],
    backgroundColor: "rgba(75,192,192,1)",
    xTitle: "X axis",
    yTitle: "Y axis",
    xFontSize: 20,
    yFontSize: 20


};
  
BarChart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
    backgroundColor: PropTypes.string,
    xTitle: PropTypes.string,
    xFontSize: PropTypes.number,
    yTitle: PropTypes.string,
    yFontSize: PropTypes.string
};