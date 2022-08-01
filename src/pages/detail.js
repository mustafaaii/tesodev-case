
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataJson from "../data/search.json";
import Icon from '../modul/icon';
import Filter from "../asset/img/icon/tesodev-filter.svg";
import Button from '../modul/button';
import Image from '../modul/Image';
import Input from '../modul/input';
import Point from "../asset/img/icon/tesodev-point.svg";
import Seo from "../func/seo-url";
import Search from "../asset/img/icon/tesodev-search.svg";
const Detail = () => {

    //#region Default Usestate
    const [option, setoption] = useState(0)
    const [data, setdata] = useState(DataJson)
    const [selected, setselected] = useState("");
    //#endregion

    //#region Useparams
    const { title } = useParams();
    const [urls, seturls] = useState(title)
    //#endregion



    //-----Option Section ------------------------------>

    //#region Option
    const optiondata = [
        {
            name: "Name ascending",
        },
        {
            name: "Name descending",
        },
        {
            name: "Year ascending",
        },
        {
            name: "Year descending",
        }
    ]
    const optionshow = (e) => {
        if (parseInt(e) === 1) {
            setoption(0)
        }
        else {
            setoption(1)
        }

    }

    //#endregion



    //-----Pagination Section ------------------------>

    //#region Pagination Usestate
    const [current, setcurrent] = useState(1);
    //#endregion

    //#region Pagination Next & Previous Button
    function next() {
        setcurrent((p) => p + 1);
    }
    function previous() {
        setcurrent((p) => p - 1);
    }
    //#endregion

    //#region Pagination Change Page Functionalty
    function changepage(event) {
        const number = Number(event.target.textContent);
        setcurrent(number);
    }
    //#endregion

    //#region Pagination List Data
    const getdata = () => {

        const start = current * 10 - 10;
        const end = start + 10;
        return data.slice(start, end);
    };
    //#endregion

    //#region Pagination List Number
    const getpagination = () => {
        const start = Math.floor((current - 1) / 9) * 9;
        return new Array(9).fill().map((_, x) => start + x + 1);
    };
    //#endregion



    //-----Filter Section ------------------------------>

    //#region OrderBy
    const optionselected = (e) => {
        setdata(0)
        setselected(e);
        if (e === "Name ascending") {
            const ascending = data.sort((a, b) => { return a.title.localeCompare(b.title) })
            setdata(ascending)

        }
        else if (e === "Name descending") {
            const ascending = data.sort((a, b) => { return b.title.localeCompare(a.title) })
            setdata(ascending)

        }
        else if (e === "Year ascending") {
            const ascending = data.sort((a, b) => { return a.date.localeCompare(b.date) })
            setdata(ascending)

        }
        else {
            const ascending = data.sort((a, b) => { return b.date.localeCompare(a.date) })
            setdata(ascending)
        }

    }
    //#endregion



    //-----Search Section ------------------------------>


    const [inputvalue, setinputvalue] = useState("");
    const searchfilter = (e) => {

        if (e.length < 1) {
            setinputvalue(e)
            setdata(DataJson.filter(d => { return (d.title.toLowerCase().includes(e.toLowerCase())) }))
        }
        else
        {
            setinputvalue(e)
            setdata(DataJson.filter(d => { return (d.title.toLowerCase().includes(e.toLowerCase())) }))
        }


    }

    function SeoConverter() {
        var decodedUrl = "";
        decodedUrl = title.toString();
        decodedUrl = title.split("-and-").join(" ")
        decodedUrl = title.split("-").join(" ");
        decodedUrl = decodedUrl.trim('-');
        return decodedUrl;
    }




    //#region UseEffect
    useEffect(() => {
        setinputvalue(SeoConverter(urls))
        setdata(data.filter(d => d.title.toLowerCase().includes(SeoConverter(urls).toLowerCase())))
    }, [urls]);
    //#endregion




    return (
        <>
            <div className='container'>
                <div className="row margin-none justify-content-center mt-5 ">
                    <div className="col-lg-2">
                        <Image class="logo-image" url="/" alt="tesodev" />
                    </div>
                    <div className="col-lg-8">
                        <div className="row margin-none mt-2">
                            <div className="col-lg-9 p-0 text-center">
                                <Input class="input-group search" value={inputvalue} func={(e) => { searchfilter(e.target.value) }} icon={<Icon src={Search} class="search-icon" alt="" />} />
                            </div>
                            <div className="col-lg-3 p-0 text-center">
                                <Button type="submit" class="btn btn-search" to={`/${Seo((inputvalue || ""))}`} text="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <Button class="btn btn-add  mt-2" to="/new" text="Add new record" />
                    </div>
                    <div className="col-lg-9 mt-5"></div>
                    <div className="col-lg-3 mt-5">
                        <button className='option float-right' value={option} onClick={(e) => { optionshow(e.target.value) }}>
                            <Icon src={Filter} class="mt-0 float-left " alt="option-icon" />
                            <div className='option-selected ml-1'>Order By</div>
                        </button>
                        <div className={`option-container ${option === 1 ? "active" : ""}`}>
                            {
                                optiondata.map((item) => {
                                    return (
                                        <div key={item.name} className={`option-list p-2 mt-1 ${selected === item.name ? "active" : ""}`} onClick={(e) => { optionselected(e.target.textContent) }}>
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="row margin-none justify-content-center mt-5 ">
                    <div className="col-lg-8 mt-3">

                        {
                            getdata().map((item, index) => {
                                return (
                                    <div key={item.id} id={item.id} className="col-lg-12" style={{ borderBottom: "solid 1px #888" }}>
                                        <div className='mb-2 mt-2'>
                                            <div className="row select-hover">
                                                <div className="col-lg-1  mt-3 pr-0 mx-auto">
                                                    <Icon src={Point} class="mt-2" alt={item.title} />
                                                </div>
                                                <div className="col-lg-9  mt-3 pl-0">
                                                    <div className="search-list-title">{item.title}</div>
                                                    <div className="search-list-subtitle">{item.subtitle}</div>
                                                </div>
                                                <div className="col-lg-2  mt-3 pr-0 mx-auto">
                                                    <div className='search-list-name'>{item.name}</div>
                                                    <div className='search-list-date mt-2'>{item.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                    <div className={`col-lg-5 mt-5 mb-5 pagination ${data.length > 10 ? "active" : ""}`}>
                        <div className="row justify-content-center">
                            <div className="col-lg-1 p-0">
                                <button onClick={previous} className={`pagination-button float-right ${current === 1 ? 'disabled' : ''}`}>
                                    Previous
                                </button>
                            </div>

                            <div className={`col-lg-${Math.ceil((data.length / 10)) < 7 ? Math.ceil((data.length / 10)) : "9"} p-0`}>
                                <div className='row justify-content-center'>
                                    {getpagination().map((item, index) => (
                                        <Fragment key={`${item}${index}`}>
                                            {
                                                item <= Math.ceil((data.length / 10)) ?
                                                    (
                                                        index > 2 && index < 6 ?
                                                            (
                                                                index > 4 && index < 6 ? <div className='pagination-dots' >...</div> : ""
                                                            )
                                                            :
                                                            (
                                                                < button key={index} onClick={changepage} className={`pagination-number ${index <= 0 ? "" : "ml-2"} ${current === item ? 'active' : null}`}>
                                                                    {item}
                                                                </button>
                                                            )
                                                    ) :
                                                    (
                                                        ""
                                                    )
                                            }
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                            {

                            }
                            <div className="col-lg-1 p-0">
                                <button onClick={next} className={`pagination-button ${current === Math.ceil((data.length / 10)) ? 'disabled' : ''}`} >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>


                </div >
                <div className={`ovarlay ${option === 1 ? "active" : ""}`} onClick={() => { setoption(0) }}></div>
            </div>
        </>
    )
}
export default Detail;