import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeUrl = url;

    if(country) {
        changeUrl = `${url}/countries/${country}`;
    }
    
    const { data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeUrl);

    const modifiedData = {
        confirmed : confirmed,
        recovered : recovered,
        deaths  : deaths,
        lastUpdate : lastUpdate
    }


    return (modifiedData);    
}

export default fetchData;


export const fetchDailyData = async () => {
    const {data} = await axios.get( `${url}/daily` );
    
    const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
    }));

    return modifiedData;
    
}


export const fetchCountries = async() => {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
    
}





