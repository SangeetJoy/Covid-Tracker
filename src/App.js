import React from "react";
import { Cards, Chart, CountryPicker, HeaderPoster} from "./components"
import { fetchData } from "./api"
class App extends React.Component {

    state = {
        data: {},
        selectedCountry: ""
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    onCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, selectedCountry: country})
    }
    render() {
        const {data, selectedCountry} = this.state
        return (
            <>
                <HeaderPoster />
                <Cards data={data}/>
                <CountryPicker onCountryChange ={this.onCountryChange}/>
                <Chart data={data} country={selectedCountry}/>
            </>
        )
    }
}

export default App