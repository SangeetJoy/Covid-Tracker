import React from "react"
import styles from "./Cards.module.css"
import CountUp from "react-countup"

class Cards extends React.Component {
    render() {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = this.props
        return (
            <div className={styles.cardContainer}>
                <div className={styles.activeCasesContainer}>
                    <div className={styles.mainHeading}>Infected</div>
                    <div className={styles.cardCount}>
                        {!confirmed ? "Loading..." :
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />}
                    </div>
                    <div className={styles.date}>{new Date(lastUpdate).toDateString()}</div>
                    <div className={styles.footerText}>Number of active cases of COVID-19</div>
                </div>
                <div className={styles.recoveredCasesContainer}>
                    <div className={styles.mainHeading}>Recovered</div>
                    <div className={styles.cardCount}>
                        { !recovered ? "Loading..." : <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                        />}
                    </div>
                    <div className={styles.date}>{new Date(lastUpdate).toDateString()}</div>
                    <div className={styles.footerText}>Number of recovered cases of COVID-19</div>
                </div>
                <div className={styles.deathContainer}>
                    <div className={styles.mainHeading}>Deaths</div>
                    <div className={styles.cardCount}>
                        {!deaths ? "Loading..." : <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                        />}
                    </div>
                    <div className={styles.date}>{new Date(lastUpdate).toDateString()}</div>
                    <div className={styles.footerText}>Number of death cases of COVID-19</div>
                </div>
            </div>
        )
    }
}

export default Cards;