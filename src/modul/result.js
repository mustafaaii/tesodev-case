import Icon from "./icon";
import Point from "../asset/img/icon/tesodev-point.svg";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../func/seo-url";
const Result = (props) => {
    const [counter, setcounter] = useState([])
    useEffect(() => { setcounter(props.search) }, [props.search])

    return (
        <>
            <div className={`${props.class} ${counter.length > 2 ? "active" : ""}`}>
                <div className={`search-list-container my-auto`}>
                    <div className="row">
                        {
                            (props.result || []).map((item, index) => {
                                return (
                                    <Fragment key={item.id}>
                                        {
                                            index <= 2 ?
                                                <div className="col-lg-12 mt-1">
                                                    <Link to={`${Seo(item.title)}`}>
                                                        <div className="row">
                                                            <div className="col-lg-1 pr-0 mt-3 mx-auto">
                                                                <Icon src={Point} class="mt-1" alt={item.title} />
                                                            </div>
                                                            <div className="col-lg-11 pl-0 mt-2">
                                                                <div className="search-list-title">{item.title}</div>
                                                                <div className="search-list-subtitle">{item.subtitle}</div>
                                                            </div>
                                                            <div className="search-line" ></div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                :
                                                ""
                                        }
                                    </Fragment>
                                )
                            })
                        }
                        {
                            props.result.length === 0 ?
                                <div className="col-lg-12 mt-2 mb-2">
                                    <div className="search-read-more my-auto">
                                        No Match Found
                                    </div>
                                </div>
                                :
                                <div className="col-lg-12 mt-2 mb-2 text-center">
                                    <Link className="search-read-more my-auto" to={`/${Seo(props.search || "")}`}>Show more...</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Result;