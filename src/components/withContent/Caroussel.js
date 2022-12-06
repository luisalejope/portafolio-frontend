import React from 'react'
import './styles/Caroussel.css'

export const Caroussel = () => {
    return (
        <div className="crosssell-cards-container">
            <div className="crosssell-cards">

                <a href="https://somewhere.com" className="crosssell-card swiper-slide">
                    <img className="bg-img" src="https://via.placeholder.com/400x230" alt="Sportka - kartička" />
                        <div className="text">
                            <h2 className="title">Game</h2>
                            <span className="price">
                                Win over
                                <br />
                                    <strong>
                                        <span className="prize">86&nbsp;500&nbsp;</span>&nbsp;€
                                    </strong>
                            </span>
                        </div>
                </a>
                <a href="https://somewhere.com" className="crosssell-card swiper-slide">
                    <img className="bg-img" src="https://via.placeholder.com/400x230" alt="Sportka - kartička" />
                        <div className="text">
                            <h2 className="title">Game</h2>
                            <span className="price">
                                Win over
                                <br />
                                    <strong>
                                        <span className="prize">86&nbsp;500&nbsp;</span>&nbsp;€
                                    </strong>
                            </span>
                        </div>
                </a>
                <a href="https://somewhere.com" className="crosssell-card swiper-slide">
                    <img className="bg-img" src="https://via.placeholder.com/400x230" alt="Sportka - kartička" />
                        <div className="text">
                            <h2 className="title">Game</h2>
                            <span className="price">
                                Win over
                                <br />
                                    <strong>
                                        <span className="prize">86&nbsp;500&nbsp;</span>&nbsp;€
                                    </strong>
                            </span>
                        </div>
                </a>

            </div>
        </div>
    )
}