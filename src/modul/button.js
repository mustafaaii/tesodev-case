import { Link } from "react-router-dom";
const Button = (props) => {
    return (<Link to={props.to}><button type={props.type} className={props.class}>{props.text}</button></Link>)
}
export default Button;