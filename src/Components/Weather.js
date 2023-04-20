import axios from "axios";
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {selectDisplay} from '../redux/slices/displayCountrySlice'
import { setIsLoading, selectLoading } from "../redux/slices/isLoadingSlice";



const Weather = () => {
    const dispatch = useDispatch()
    const loading = useSelector(selectLoading)
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay)
    const latitude = display.capitalInfo.latlng[0]
    const longitude = display.capitalInfo.latlng[1]


    useEffect(() => {
        dispatch(setIsLoading())
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude}, ${longitude}`},
            headers: {
                'X-RapidAPI-Key': 'ff0c4b35d9msh91a01cb93c2cbc5p1f827djsn97c214849533',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            },
        };
        
        axios.request(options).then((response) => {
            console.log(response.data);
            setWeather(response.data)
            dispatch(setIsLoading())
        }).catch(function (error) {
            console.error(error);
        });
},[])
   
    return (
        <div>
            <table className="overview-table">
            <tbody>
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} 
                        mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default Weather;
