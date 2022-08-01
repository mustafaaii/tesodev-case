
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LogoImage from "../asset/img/logo/tesodev-logo.svg";

const Image = (props) => {
    return (
        <>
            <Link to={props.url || "/"}>
                <img src={props.src} className={props.class} alt={props.alt} />

            </Link>
        </>
    )
}
export default Image;


Image.propTypes = {
    url: PropTypes.string,
    src: PropTypes.string,
    class: PropTypes.string,
    string: PropTypes.string
}

Image.defaultProps = {
    url: "/",
    src: LogoImage,
    class: "img-fluid",
    string: "tesodev"
}
