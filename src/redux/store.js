import { configureStore } from "@reduxjs/toolkit"
import potentialCountriesReducer from "./slices/potentialCountriesSlice"
import displayCountryReducer from '../redux/slices/displayCountrySlice'
import isLoadingReducer from '../redux/slices/isLoadingSlice'


export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayCountry: displayCountryReducer,
        isLoading: isLoadingReducer,
    },
})