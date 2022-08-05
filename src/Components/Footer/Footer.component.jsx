import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import {
    AiOutlineRollback,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import Services from "../Services/Services.component";
import ListOfFooter from "../ListOfFooter/ListOfFooter.component";
import "./Footer.style.css";

function Footer() {
    const col1 = [
        "News",
        "Sell with us",
        "Job opportunity",
        "Contact us",
        "About us",
    ];
    const col2 = [
        "Q&A",
        "How to send back",
        "Terms of use",
        "Privacy",
        "Bug report",
    ];
    const col3 = [
        "How to buy",
        "How to sell",
        "How to edit product",
        "Contact seller",
    ];

    return (
        <footer className="footer">
            <div className="services">
                <Services icon={BiBadgeCheck} text={"Original product"} />
                <Services icon={BsCreditCard2Back} text={"In-place payment"} />
                <Services icon={IoIosTime} text={"24/7 support"} />
                <Services icon={AiOutlineRollback} text={"Bring back"} />
                <Services icon={FaShippingFast} text={"Fast shipping"} />
            </div>
            <div className="sm-tags">
                <ListOfFooter props={col1} title="Whit us" />
                <ListOfFooter props={col2} title="User services" />
                <ListOfFooter props={col3} title="Site guide" />
                <div>
                    <h1 style={{textAlign:"center"}}>Stay with us</h1>
                    <div className="social">
                        <AiOutlineLinkedin size={30}/>
                        <AiOutlineYoutube size={30}/>
                        <FiTwitter size={30}/>
                        <FiInstagram size={30}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
