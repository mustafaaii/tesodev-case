import Image from "../modul/Image";
import Arrow from "../asset/img/icon/tesodev-arrow.svg";
import Button from "../modul/button";
import { useEffect, useState } from "react";
import DataJson from "../data/search.json";
import CountryJson from "../data/country.json";

const AddNew = () => {
    const [data] = useState(DataJson)
    const [count] = useState(CountryJson)



    const [errorname, seterrorname] = useState("");
    const [errorcountry, seterrorcountry] = useState("");
    const [errorcity, seterrorcity] = useState("");
    const [errormail, seterrormail] = useState("");
    const [status, setstatus] = useState(0);


    const [name, setname] = useState("");
    const [country, setcountry] = useState("");
    const [city, setcity] = useState("");
    const [mail, setmail] = useState("");





    const inputvalue = (e) => {
        seterrorname("")
        seterrorcountry("")
        seterrorcity("")
        seterrormail("")
        emailvalidat(mail)
        switch (e.target.name) {
            case "name": setname(e.target.value); break;
            case "country": setcountry(e.target.value); break;
            case "city": setcity(e.target.value); break;
            case "mail": setmail(e.target.value); break;
        }
        inputcontrol()
    }

    const inputcontrol = () => {
        if (name.length === 0) {
            setstatus(0)
        }
        else if (country.length === 0) {
            setstatus(0)
        }
        else if (city.length === 0) {
            setstatus(0)
        }
        else if (mail.length === 0) {
            setstatus(0)
        }
        else {
            setstatus(1)
        }

    }

    const namecontrol = (e) => {
        if (e !== undefined) {
            if (name) {
                seterrorname("There is a record with this name")
                setstatus(0)
            }
        }
    }

    const countrycontrol = (e) => {
        if (e === undefined && country.length > 3) {
            seterrorcountry("There Is No Such Country Named " + country)
            setstatus(0)
        }
    }

    const emailcontrol = (e) => {
        if (e !== undefined) {
            if (mail) {
                seterrormail("Email named " + mail + " already exists ")
                setstatus(0)
            }
        }
    }

    const emailvalidat = (e) => {
        if (e.length > 8) {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!e || regex.test(e) === false) {
                seterrormail("Your email format is not suitable.")
                setstatus(0);
            }
            return true;
        }
    }



    useEffect(() => {
        inputcontrol();
        const ControlName = data.find(obj => { return obj.name.toUpperCase() === name.toUpperCase(); });
        namecontrol(ControlName)

        const controlCountry = count.find(obj => { return obj.name.toUpperCase() === country.toUpperCase(); });
        countrycontrol(controlCountry)

        const ControlEmail = data.find(obj => { return obj.mail.toUpperCase() === mail.toUpperCase(); });
        emailcontrol(ControlEmail)

    }, [name, country, city, mail])


    return (
        <>
            <div className='container'>
                <div className="row margin-none justify-content-center mt-5">
                    <div className="col-lg-12 float-left">
                        <div className="row">
                            <div className="col-lg-2">
                                <Image class="logo-image" url="/" alt="tesodev" />
                            </div>
                            <div className="col-lg-1 my-auto">
                                <Image src={Arrow} class="ml-2" url="/" alt="tesodev" />
                            </div>
                            <div className="col-lg-8 p-0  my-auto">
                                <Button class="btn-link my-auto" to={`/`} text={<div className="back-page float-left">Return to List Page</div>} />
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-8 mt-5">
                        <span className={`input-title ${errorname.length > 1 ? "error-label" : ""}`}>Name Surname</span>
                        <input id="" name="name" value={name} onChange={(e) => { inputvalue(e) }} className={`input-group form pl-3 mb-2 mt-2 ${errorname.length > 1 ? "error-input" : ""} `} placeholder="Enter name and surname" />
                        <span className={`input-error ${errorname.length > 1 ? "" : "hider"}`}>{errorname}</span>
                    </div>

                    <div className="col-lg-8 mt-3">
                        <span className={`input-title ${errorcountry.length > 1 ? "error-label" : ""}`}>Country</span>
                        <input id="" name="country" value={country} onChange={(e) => { inputvalue(e) }} className={`input-group form pl-3 mb-2 mt-2 ${errorcountry.length > 0 ? "error-input" : ""}`} placeholder="Enter a country" />
                        <span className={`input-error ${errorcountry.length > 1 ? "" : "hider"}`}>{errorcountry}</span>
                    </div>

                    <div className="col-lg-8 mt-3">
                        <span className="input-title">City</span>
                        <input id="" name="city" value={city} onChange={(e) => { inputvalue(e) }} className={`input-group form pl-3 mb-2 mt-2 ${errorcity.length > 0 ? "error-input" : ""}`} placeholder="Enter a city" />
                        <span className={`input-error ${errorcity === 1 ? "" : "hider"}`}>{errorcity}</span>
                    </div>

                    <div className="col-lg-8 mt-3">
                        <span className={`input-title ${errormail.length > 1 ? "error-label" : ""}`}>Email</span>
                        <input id="" name="mail" value={mail} onChange={(e) => { inputvalue(e) }} className={`input-group form pl-3 mb-2 mt-2 ${errormail.length > 0 ? "error-input" : ""}`} placeholder="Enter a e-mail (abc@xyz.com)" />
                        <span className={`input-error ${errormail.length > 1 ? "" : "hider"}`}>{errormail}</span>
                    </div>

                    <div className="col-lg-5 pr-0 mt-3">
                        <button className={`btn btn-input float-right ${status === 0 ? "btn-disabled" : ""}`}>Add</button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AddNew;