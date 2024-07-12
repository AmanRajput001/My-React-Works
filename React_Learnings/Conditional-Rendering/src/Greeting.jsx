import {PropTypes} from 'prop-types'

function Greeting(props) {
    return (
        <>
            {props.logined ?
            <h1 className="text-white bg-success">Hello {props.name} 😊</h1> :
            <h1 className="text-white bg-danger">Please Login To Continue...</h1>}
        </>
    )
}

Greeting.propTypes = {
    name: PropTypes.string,
    logined: PropTypes.bool,
}
Greeting.defaultProps = {
    logined: false,
    name: "Guest",
}

export default Greeting