import React, { useContext, useEffect } from "react";
import { userSignInCheck } from "../../App";
import { Link } from "react-router-dom";
import MyLink from "../NavItems/NavItems.component";
import ProfileBadge from "../ProfileBadge/ProfileBadge.component";
import "./Navigation.style.css";

function NavigationBar() {
    const { signCheck, setSignCheck } = useContext(userSignInCheck);

    useEffect(() => {
        if (document.cookie) {
            setSignCheck(true);
        }
    }, [signCheck]);

    return (
        <nav>
            <Link className="logo" to="/">
                <span>SHOPPER</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                </svg>
            </Link>

            <ul>
                <li>
                    <MyLink path="" text="Home" />
                </li>
                <li>
                    <MyLink path="shop" text="Shop" />
                </li>
                <li>
                    {signCheck === false ? (
                        <MyLink path="auth" text="Signin/Login" />
                    ) : (
                        <Link to={"/profile"}>
                            <ProfileBadge />
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
