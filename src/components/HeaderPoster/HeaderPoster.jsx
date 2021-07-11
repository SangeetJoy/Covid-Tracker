import React from "react"
import styles from "./HeaderPoster.module.css"

class HeaderPoster extends React.Component {
    render() {
        return (
            <div className={styles.headerRowContainer}>
                <div className={styles.headerTextContainer}>
                    <div className={styles.mainText}>Covid-19</div>
                    <div className={styles.subText}>The virus that shook the world</div>
                </div>
                <div className={styles.headerImageContainer}></div>
            </div>
        )
    }
}

export default HeaderPoster;