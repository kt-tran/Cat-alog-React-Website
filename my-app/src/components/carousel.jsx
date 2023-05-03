import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';


const testArray = [
    {
        id: "J2PmlIizw",
        url: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
        width: 1080,
        height: 1350
    },
    {
        id: "8ciqdpaO5",
        url: "https://cdn2.thecatapi.com/images/8ciqdpaO5.jpg",
        width: 1080,
        height: 809
    },
    {
        id: "aaxNf4D0H",
        url: "https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg",
        width: 1080,
        height: 1350
    },
    {
        id: "8RsP7Xt3h",
        url: "https://cdn2.thecatapi.com/images/8RsP7Xt3h.jpg",
        width: 1024,
        height: 817
    },
    {
        id: "byQhFO7iV",
        url: "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
        width: 1795,
        height: 2397
    },
    {
        id: "UhqCZ7tC4",
        url: "https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg",
        width: 1600,
        height: 1200
    },
    {
        id: "dN6eoeLjY",
        url: "https://cdn2.thecatapi.com/images/dN6eoeLjY.jpg",
        width: 3648,
        height: 2736
    },
    {
        id: "NwMUoJYmT",
        url: "https://cdn2.thecatapi.com/images/NwMUoJYmT.jpg",
        width: 2160,
        height: 1440
    },
    {
        id: "udZiLDG_E",
        url: `https://cdn2.thecatapi.com/images/udZiLDG_E.jpg`,
        width: 880,
        height: 1100
    },
    {
        id: "4-5SzDNIL",
        url: `https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg`,
        width: 880,
        height: 1100
    }
];

export function CustomCarousel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === testArray.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? testArray.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = testArray.map((item) => {
        return (
            <CarouselItem
                className="imageStyle"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.url} alt="cats" />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={testArray}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}