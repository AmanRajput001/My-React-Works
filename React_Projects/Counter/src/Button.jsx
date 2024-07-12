function Button(props){
    return (<button className="btn btn-primary p-3 m-2" onClick={props.handler}>{props.text}</button>)
}

export default Button