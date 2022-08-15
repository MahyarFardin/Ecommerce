import React, { useEffect, useState, useContext } from "react";
import { userSignInCheck } from "../../App";
import {FiMapPin} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import Cart from "../../Components/Cart/Cart.page";
import MyButton from "../../Components/MyButton/MyButton.component";
import { Link } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const { setSignCheck } = useContext(userSignInCheck);
    const [user, setUser] = useState({});

    useEffect(() => {
        const userlogin = document.cookie;
        let ID = JSON.parse(userlogin.split(":")[1].split(",")[0]);
        fetch(`http://localhost:3002/api/user/${ID}`)
            .then((rawData) => {
                return rawData.json();
            })
            .then((user) => {
                setUser(user);
            });
    }, []);

    const handleClick = () => {
        let time = new Date();
        time.setTime(time.getTime() - 2 * 24 * 60 * 60 * 1000);
        document.cookie = `loginUser = ${JSON.stringify(
            user
        )} ; path= / ; expires =${time} `;

        setSignCheck(false);
        navigate("/shop");
    };

    return (
        <div style={{ margin: "3em" }} className="profile page">
            <h1 style={{textTransform:"uppercase"}}>{user.firstName + " " + user.lastName}</h1>
            <p>{user.address}
                <FiMapPin size={25} style={{marginLeft:"1em"}}/>
            </p>

            <MyButton name="Log out" func={handleClick} />

            {user.seller && (
                <Link to="/product-manager">
                    <MyButton name="Product manager" />
                </Link>
            )}

            <hr style={{marginTop:"3em", width:"100%", border:".5px solid #5F5449"}}/>
            <h3>This is your cart:</h3>
            {user.cart && <Cart />}
        </div>
    );
}

export default Profile;
