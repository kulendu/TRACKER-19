// This is the live chart component 

import React, {useState, useEffect} from "react";
import  {fetchDailyData}  from "../../api";
import { Line, Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.css";


const Chart = ({data: {confirmed,deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length  ? (
            <Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    fill: true,
                    borderColor: "blue"
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: "Deaths",
                    fill: true,
                    borderColor: "red"
                }],
            }}
            />) : null
    );
    
    const donutChart = (
        confirmed
            ? ( 
                <Doughnut 
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                             label: "People",
                             backgroundColor: [
                                "rgba(0, 0, 255, 0.5)",
                                "rgba(0, 255, 0, 0.5)",
                                "rgba(255, 0, 0, 0.5) ",
                             ],
                             data:[confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false},
                        title: {display: true, text:`Current state in ${country}`},
                    }}
                />
            ): null
    );

    return(
        <div className={styles.container}>
            {country ? donutChart : lineChart}
        </div>
    )
};


export default Chart;