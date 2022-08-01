
import PropTypes from "prop-types";

const Input = (props) => {
    return (
        <>
            {props.icon}
            <input
                name={props.name}
                value={props.value}
                className={props.class}
                placeholder={props.placeholder}
                onChange={props.func}
            />
        </>
    )
}
export default Input;
Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func
}
Input.defaultProps = {
    name: "",
    value: " ",
    class: "",
    placeholder: "Search Value",
    onClick: function () { }
}