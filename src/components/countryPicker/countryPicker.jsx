// This is the country Picker component from where you can select your countries

import React,{useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core"
import Styles from "../countryPicker/countryPicker.module.css"
import { fetchCountries } from "../../api"


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]) 

    useEffect(() => {  
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);
    

    return(
        <FormControl className={Styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};


export default CountryPicker;