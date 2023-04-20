import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { deletePotentialCountries, setPotentialCountries } from "../redux/slices/potentialCountriesSlice";
import { selectDisplay, deleteDisplayCountry } from '../redux/slices/displayCountrySlice'
import { setIsLoading, selectLoading } from '../redux/slices/isLoadingSlice'


const Header = () => {
    const currentDisplay = useSelector(selectDisplay)
    const loading = useSelector(selectLoading)

    const [input, setInput] = useState();

    const dispatch = useDispatch()

    return (
        <div className="header">
            <div className="home">
                <BsFillFlagFill
                    style={{ marginRight: "10px" }}
                    fontSize="1.6em"
                />
                <h3 className="home-country">{currentDisplay && currentDisplay.name.common}</h3>
            </div>
            {loading ? <h3 className="loading">LOADING...</h3> : <h3 className="loading"></h3>}
            <div className="country-input">
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        dispatch(setIsLoading())
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                // console.log(res.data);
                                dispatch(deleteDisplayCountry())
                                dispatch(deletePotentialCountries())
                                dispatch(setPotentialCountries(res.data))
                                dispatch(setIsLoading())
                            })
                            .catch((err) => {
                                alert(
                                    "No countries found that match your search!"
                                    );
                            });
                    }}
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default Header;
