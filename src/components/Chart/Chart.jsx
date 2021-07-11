import React from "react"
import { Line, Bar } from "react-chartjs-2"
import styles from "./Chart.module.css"
import { fetchDailyData } from "../../api"
class Chart extends React.Component {

    state = {
        dailyData: []
    }

    async componentDidMount() {
        const fetchedDailyData = await fetchDailyData()
        this.setState({ dailyData: fetchedDailyData })
    }
    render() {
        const { dailyData } = this.state
        const { data: { confirmed, recovered, deaths }, country } = this.props
        const lineChart = (
            dailyData.length ?
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infected",
                            borderColor: "purple",
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths",
                            borderColor: "#ff3838",
                            fill: true
                        }]
                    }}
                /> : null
        )
        const barChart = (
            confirmed ?
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            label: "people",
                            backgroundColor: ["purple", "green", "red"],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current State in ${country}` }
                    }}
                /> : null
        )
        return (
            <div className={styles.chartContainer}>
                {country ? barChart : lineChart}
            </div>
        )
    }
}

export default Chart;