import React from "react"
import styles from "./CountryPicker.module.css"
import Select from 'react-select'
import { fetchCountries } from "../../api"
const customStyles = {
    control: () => ({
        borderBottom: "2px #1E1E1E solid",
        display: "flex",
        padding: "5px 21px",
        fontSize: "22px",
        fontFamily: "'Open Sans', sans-serif"
    }),
    menu: () => ({
        border: "2px #1E1E1E solid",
        borderRadius: "26px",
        padding: "19px 24px",
        marginTop: "12px",
        fontFamily: "'Open Sans', sans-serif"
    }),
    placeholder: () => ({
        color: "#1E1E1E"
    })
}

const customThemes = (theme) => {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#ff3838',
            primary: 'black',
        }
    }
}

class CountryPicker extends React.Component {

    state = {
        countryNames: []
    }

    async componentDidMount() {
        const countryData = await fetchCountries();
        this.setState({countryNames: countryData})
    }

    render() {
        const {countryNames} = this.state
        const {onCountryChange} = this.props
        return (
            <div className={styles.countryPickerContainer}>
                <Select
                    theme={customThemes}
                    options={countryNames}
                    styles={customStyles}
                    onChange={(e) => onCountryChange(e.value)}
                    defaultValue={[{label: "Global", value: ""}]}
                />
            </div>
        )
    }
}

export default CountryPicker;