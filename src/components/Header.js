import React, { Component } from "react";
// import "./Header.css";
import "../css/Header.css"
import logoImg from "../images/logo.svg";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top__navbar">
                    <div className="container">
                        <div className="navbar__logo">
                            <img src={logoImg} alt="company logo" />
                        </div>

                        <div className="navbar__items">
                            <ul className="navbar__items__contents">
                                <li className="navbar__items__contents__list"><a href="#">Kard</a></li>
                                <li className="navbar__items__contents__list"><a href="#">Kardless</a></li>
                                <li className="navbar__items__contents__list"><a href="#">Security</a></li>
                                <li className="navbar__items__contents__list"><a href="#">rewards</a></li>
                                <li className="navbar__items__contents__list"><button className="btn__gta">get the app</button></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header;