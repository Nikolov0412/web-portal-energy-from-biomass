import { Chart } from "chart.js";
import { useEffect, useRef } from "react"
import chartData from '../chart-data/renewable-energy-chart.json'


function RenewableEnergyChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Destroy the previous chart instance if it exists
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }

                // Create a new chart instance
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: {
                        scales: {
                            x: {
                                type: 'category',
                                title: {
                                    display: true,
                                    text: 'Months'
                                }
                            },
                            y: {
                                type: 'linear',
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Values (trilion BTU)'
                                }
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: '2023 Bio Energy production by category'
                            },
                            tooltip: {
                                enabled: true
                            },
                            legend: {
                                display: true,
                                position: 'top'
                            }
                        }
                    }
                });
            }
        }

        // Cleanup function to destroy the chart instance when the component unmounts
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);
    return (
        <div style={{ width: '1000px', height: '600px' }}>
            <canvas ref={chartRef} />
        </div>
    );
};
export default RenewableEnergyChart;