/* eslint-disable react/prop-types */
import styles from './CardList.module.css'

function CardList(props) {

    return(
        <div className={styles.cardsArray} >
            {props.children}

        </div>
    )
    
}
export default CardList