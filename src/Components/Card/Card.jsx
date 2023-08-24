/* eslint-disable react/prop-types */
import styles from './Card.module.css'

function Card(props) {

    
    return(
            <div className={styles.div}>
                <img className={styles.img} src={props.imgUrl} alt="" />
                <h2>{props.title ?? "Infedinido"} </h2>
                <p> {props.description}</p>
            </div>
    );    
}

export default Card