import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner4.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './banner.css'

const Banner = () => {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
    return (
        < div id="banner">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption" >
                    <h3>We Give Our Best</h3>
                    <p>Doctors give their best effort</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                    <h3>We Ensure Best Quality Equipments</h3>
                    <p>Every machine is modern and updated</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-caption" >
                    <h3>We Provide Homelike Freshness</h3>
                    <p>
                       Clean and refreshing environment
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;