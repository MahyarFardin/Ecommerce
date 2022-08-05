import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../Components/Cart/Cart.page";
import MyButton from "../../Components/MyButton/MyButton.component";
import { Link } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
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
    console.log(user);

    const handleClick = () => {
        let time = new Date();
        time.setTime(time.getTime() - 2 * 24 * 60 * 60 * 1000);
        document.cookie = `loginUser = ${JSON.stringify(
            user
        )} ; path= / ; expires =${time} `;

        navigate("/shop");
    };

    return (
        <div style={{ margin: "3em" }} className="profile page">
            <h1>{user.firstName + " " + user.lastName}</h1>
            <p>{user.address}</p>

            <MyButton name="Log out" func={handleClick} />

            {user.seller && (
                <Link to="/product-manager">
                    <MyButton name="Product manager" />
                </Link>
            )}

            {user.cart && <Cart {...user.cart} />}
        </div>
    );
}

export default Profile;
