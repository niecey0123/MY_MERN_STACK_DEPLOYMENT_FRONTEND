import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../Context/ItemContext"

const Header = () => {
    const { itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <div className="header">
            <h1 className="gfg">Niecey's Book Store </h1>
            <h3 style={{ color: "green" }}>Total Price: ${totalPrice}</h3>

            <div className="cart-num">
                <div className="cart-items">{itemsInCart}</div>

                <FontAwesomeIcon icon={faCartShopping} size="4x" />
                <div className="buy-now-btn">Buy Now</div>

            </div>
        </div>
    );
};

export default Header;