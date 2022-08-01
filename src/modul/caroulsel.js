import Breadcrumd from "./Breadcrumd";

import ArrowRight from "../asset/img/icon/tesodev-arrow-right.svg"
import ArrowLeft from "../asset/img/icon/tesodev-arrow-left.svg"
import React, { useState } from "react";

const slideWidth = 38;
const _items = [
    {
        player: {
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            desc: '1h ago · by Troy Corlson',
            image: require("../asset/img/photo/blog-image.png"),
        },
    },
    {
        player: {
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            desc: '1h ago · by Troy Corlson',
            image: require("../asset/img/photo/blog-image.png"),
        },
    },
    {
        player: {
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            desc: '1h ago · by Troy Corlson',
            image: require("../asset/img/photo/blog-image.png"),
        },
    },
    {
        player: {
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            desc: '1h ago · by Troy Corlson',
            image: require("../asset/img/photo/blog-image.png"),
        },
    },
    {
        player: {
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            desc: '1h ago · by Troy Corlson',
            image: require("../asset/img/photo/blog-image.png"),
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {

    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: '' };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <div className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </div>
    );
};
const keys = Array.from(Array(_items.length).keys());
const Carousel = () => {

    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };


    React.useEffect(() => { if (isTicking) sleep(300).then(() => setIsTicking(false)); }, [isTicking]);
    React.useEffect(() => { setActiveIdx((length - (items[0] % length)) % length) }, [items]);





    return (
        <div className="col-lg-12 mt-45 mb-5">
            <Breadcrumd text="Top News" />
            <div className="carousel__wrap">
                <div className="carousel__inner">
                    <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                        <img src={ArrowRight} className="" alt="arrowright" />
                    </button>
                    <div className="carousel__container">
                        <div className="carousel__slide-list">
                            {items.map((pos, i) => (
                                <CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx} />
                            ))}
                        </div>
                    </div>
                    <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                        <img src={ArrowLeft} className="" alt="arrowleft" />
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Carousel;