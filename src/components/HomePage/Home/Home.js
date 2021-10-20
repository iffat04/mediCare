import React from 'react';
import Banner from '../Banner/Banner';
import TodaysDoctor from '../TodaysDoctor/TodaysDoctor';
import TommorowsDoctor from '../TommorowsDoctor/TommorowsDoctor';

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <TodaysDoctor></TodaysDoctor>
           <TommorowsDoctor></TommorowsDoctor>
           
        </div>
    );
};

export default Home;