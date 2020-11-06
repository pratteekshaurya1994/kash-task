import React, { Component } from "react";
import "../css/Body.css"
import backgroundBasicImage from "../images/background-basic-image.png";
import animStartArrow from "../images/anim-start-arrow.svg"

class Body extends Component {
    render() {
        const startAnimation = () => {
            // background basic image animation
            document.querySelector(".main__div .main__div__bg").style.animation = "main__div__bg 5s linear forwards";
            // first page i.e, card__container animation
            document.querySelector(".main__div .card__container").style.animation = "card__container 5s linear forwards";
            // single card shubham nayyar animation and all card animation
            document.querySelector(".single__card").style.animation = "single__card 5s linear 3.85s, all__card 1.15s forwards 8.85s";
            // all card content animation
            document.querySelector(".all__card__title").style.animation = "all__card__content 1.15s forwards 8.85s";
        }
        return (
            <div className="main__div">
                <img className="main__div__bg" src={backgroundBasicImage} alt="background basic display"/>
                <div className="cards">
                    <li className="single__card"></li>
                    <h1 className="all__card__title">One App. One Card.For all others.</h1>
                </div>
                <div className="card__container">
                    <h1 className="main__div__title">Kashware is an exclusive ecosystem that unites your money.</h1>
                    <h3 className="main__div__hashtags">#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</h3>
                    <img className="anim__start__img" src={animStartArrow} alt="start animation" onClick={() => { startAnimation() }}  />
                </div>
            </div>
        )
    }
}

export default Body;
