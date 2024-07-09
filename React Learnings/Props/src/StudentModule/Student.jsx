import styles from './Student.module.css'
import PropTypes from 'prop-types'

function Student(props){
    return (
        <div className= {styles.card}>
            <h3 className= {styles.name}>{props.name}</h3>
            <hr />
            <p className="ph">Age is: {props.age}</p>
            <p className="ph">Is a Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student