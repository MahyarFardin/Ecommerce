import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import data from "./data.json";
import CarouselCard from '../CarouselCard/CarouselCard.component';

import "./Carousel.style.css"
import '@splidejs/react-splide/css';


function Carousel() {
    return (
        <div className='slider-container'>
            <Splide options={{
                perpage: 1,
                arrows: false,
                type: "loop",
                height: "500px",
                rewind: "true",
                autoplay: "true",
                interval: "2000"
            }}>
                {data.map(item => {
                    return (<SplideSlide key={item.id}>
                        < CarouselCard {...item} />
                    </SplideSlide>)
                })}
            </Splide>
        </div>
    );
}

export default Carousel;