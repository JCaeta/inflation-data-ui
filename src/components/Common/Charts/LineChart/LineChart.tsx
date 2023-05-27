import styles from './LineChart.module.scss';
import React, {useRef, useEffect, useImperativeHandle, forwardRef, useState} from 'react';
import PropTypes from 'prop-types';
import { createChart, CrosshairMode, LineStyle} from 'lightweight-charts';

export const LineChart = forwardRef((props: any, ref: any) => {
    const chartRef = useRef<HTMLDivElement>(null);
    var created = false;
    const [areaSeries, setAreaSeries] = useState(null)
    const [chart, setChart] = useState(null)
    const [chartData, setChartData] = useState(null)
    const [loadingData, setLoadingData] = useState(false)

    const setupData = (data) => {
        areaSeries.setData(data)
    }

    useEffect(() => {
        if(props.data !== null){
            setLoadingData(true)
            setChartData(null)
        }
        console.log("  ")
    }, [props.data])

    useEffect(() => {
        if(chartData === null){
            setChartData(props.data)
        } else {
            createLineChart()
        }
    }, [chartData])

    useEffect(() => {
        if(areaSeries !== null 
            && loadingData 
            && chart !== null
            && chartData !== null){
            setLoadingData(false)
            setupData(chartData)
        }
    }, [areaSeries, loadingData, chart])


    function createLineChart() {
        if (!created) {
            // Access the chart element using document.getElementById()
            const chartElement = chartRef.current;
            if (!chartElement) return;

            const c = createChart(chartElement, {
                autoSize: true,
                height: props.height,
                timeScale: {
                    timeVisible: true,
                    secondsVisible: false,
                },
            });

            c.applyOptions({
                crosshair: {
                    // Change mode from default 'magnet' to 'normal'.
                    // Allows the crosshair to move freely without snapping to datapoints
                    mode: CrosshairMode.Normal,
                    
                    // Vertical crosshair line (showing Date in Label)
                    vertLine: {
                        width: 4,
                        color: '#C3BCDB44',
                        style: LineStyle.Solid,
                        labelBackgroundColor: '#9B7DFF',
                    },
            
                    // Horizontal crosshair line (showing Price in Label)
                    horzLine: {
                        color: '#9B7DFF',
                        labelBackgroundColor: '#9B7DFF',
                    },
                },
            });
            
            const area = c.addAreaSeries({
                lineColor: '#A80F07', 
                topColor: '#C02115',
                bottomColor: '#F6F6F6'
            })
            setChart(c)
            setAreaSeries(area)


            // Example data
            // const data = [
            //     { time: '2022-01-01', value: 50},
            //     { time: '2022-01-02', value: 55},
            //     { time: '2022-01-03', value: 60},
            //     // ...
            // ];

            created = true;
        }
    }
    
  return (<>
        {chartData !== null?<div ref={chartRef} id="chart" className={styles.container}/>:null}
    </>);
})

LineChart.defaultProps =
{
    width: 1200,
    height: 800,
    data: null
}

LineChart.propTypes = 
{
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.any
    
    // data: PropTypes.arrayOf(
    //     PropTypes.shape({
    //       time: PropTypes.string,
    //       value: PropTypes.number,
    //     })
    // )
}
/**

const onAction = () => {

}

console.log("")
console.log(": ", )

 */


