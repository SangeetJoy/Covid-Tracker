import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changebleUrl = url

    if(country) {
        changebleUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changebleUrl)
        return { confirmed, deaths, recovered, lastUpdate }
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        let modifiedData = data.countries.map((country) => ({ label: country.name, value: country.name }))
        modifiedData.push({label: "Global", value: ""})
        return modifiedData
    }
    catch (err) {
        console.log(err);
    }
}