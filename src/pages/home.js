
import { useState } from "react";
import Breadcrumd from "../modul/Breadcrumd";
import Button from "../modul/button";
import Input from "../modul/input";
import Image from "../modul/Image";
import Result from "../modul/result";
import LogoImage from "../asset/img/logo/tesodev-logo.svg";
import Data from "../data/search.json";
import Seo from "../func/seo-url";
import Icon from "../modul/icon";
import Search from "../asset/img/icon/tesodev-search.svg";
import Carousel from "../modul/caroulsel";
import Footer from "../modul/footer";

const Home = () => {
    const [inputvalue, setinputvalue] = useState("");
    const [result, setresult] = useState([]);
    const inputsearch = (e) => {
        setinputvalue(e);
        setresult(Data.filter(d => d.title.toLowerCase().includes(e.toLowerCase())));
    }
    return (
        <>
            <div className="container">
                <div className="row margin-none justify-content-center mt-5">
                    <div className="col-lg-12 text-right">
                        <Button class="btn btn-add" to="/new" text="Add new record" />
                    </div>
                    <div className="col-lg-9 text-center mt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <Image src={LogoImage} url="/" class="" alt="resodev" />
                            </div>
                            <div className="col-lg-5 mt-2 p-0">
                                <div className="logo-text float-right">Search app</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 text-center mt-5"></div>
                    <div className="col-lg-9 mt-5">
                        <Breadcrumd text="Find in records" />
                    </div>
                    <div className="col-lg-9 mt-3">
                        <div className="row margin-none">
                            <div className="col-lg-10 p-0 text-center">
                                <Input class="input-group search" value={inputvalue} func={(e) => { inputsearch(e.target.value) }} icon={<Icon src={Search} class="search-icon" alt="" />} />
                            </div>
                            <div className="col-lg-2 p-0 text-center">
                                <Button class={`btn btn-search  ${inputvalue.length > 2 && result.length !== 0 ? "" : "btn-disabled"}`} to={`/${Seo(inputvalue || "")}`} text="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 mt-1">
                        <Result class="search-result" onclick="" result={result} search={inputvalue || ""} />
                    </div>
                </div>
                <Carousel />
            </div>
            <Footer />
        </>
    )
}
export default Home;