import Map from "../asset/img/photo/tesodev-map.svg";
const Footer = () => {
    return (
        <div className="row justify-content-center margin-none  mt-25 footer-container">
            <div className="col-lg-8 my-auto">
                <div className="row">
                    <div className="col-lg-7  ">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={require(`../asset/img/photo/footer-image.png`)} className="mt-5" />
                            </div>

                            <div className="col-lg-8 mt-5">
                                <div className="row">
                                    <div className="col-lg-12 mt-4">
                                        <div className="footer-title">
                                            İletişim
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-2">
                                        <div className="footer-text">
                                            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul

                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="footer-link">
                                            Email: bilgi@tesodev.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img src={Map} className="p-4" />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Footer;