import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/countryPicker/countryPicker";
import fetchData from "./api";
import coronaLogo from "./images/image.png";
import CovidDetails from "./components/covidDetails/covid";
import gif from "./images/things.gif";
import Lists from "./components/lists/list";
import stayHome from "./images/giphy.gif"
import CovidSymptoms from "./components/symptoms/symptoms";
import githubButton from "./images/github.png";


import styles from "./app.module.css";


class App extends React.Component {

    state = {
        data : {},
        country: "",
    }


    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});        
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className ={styles.container} >
                
                <img className={styles.covidLogo} src={coronaLogo} alt="covid-19" />
                <CovidDetails />
                <h2>STAY HOME, STAY SAFE <br />PLEASE FOLLOW THESE STEPS FOR PREVENTING YOURSELF FROM COVID-19 :</h2>
                <Lists />
                <img src={gif} className={styles.gif} alt="covid-gif" />
                <div className={styles.symptoms}>
                    <h2>SYMPTOMS OF COVID-19 :</h2>
                    <CovidSymptoms />
                </div>
                
                <div className={styles.whiteContainer}>
                    <p>Select your country to know the status of COVID-19 -</p>
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Cards data={data} />
                    <Chart data={data} country={country} />
                </div>
                <img src={stayHome} className={styles.stayHome} alt="stayHome"/>
                <p>We stand with everyone standing in the frontier <br />and fighting against the COVID-19 pandemic. </p>
                <p className={styles.footer}> Developed by : @kulendu, 2020</p>
                <a href="https://github.com/kulendu/covid-tracker-project" target="blank">
                    <img className={styles.button} src={githubButton} alt="github button" />
                </a>
            </div>    
        );   
    }
};


export default App;
