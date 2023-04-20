import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice"
import { useSelector } from "react-redux"
import { selectDisplay } from './redux/slices/displayCountrySlice'
import { selectLoading } from "./redux/slices/isLoadingSlice";
import LoadingScreen from "./Components/LoadingScreen";

function App() {

    const potentials = useSelector(selectPotentials)
    console.log(potentials)

    const currentDisplay = useSelector(selectDisplay)
    console.log('DISPLAY', currentDisplay)

    const loading = useSelector(selectLoading)
    console.log(loading)

    return (
        <div className="App font-link">
            
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
