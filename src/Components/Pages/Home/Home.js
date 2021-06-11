import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import { AwardData } from './Awards/AwardData'
import AwardsList from './Awards/AwardsList'
import Chef from './Chef/Chef'
import Cook from './Cook/Cook'
import GuestsSlider from './Guests/GuestsSlider'
import Header from './Header/Header'
import HomeMenu from './HomeMenu/HomeMenu'
import Interior from './Interior/Interior'
import Map from './Map/Map'


const Home = () => {
    return (
        <>
            <Header/>
            <AboutUs/>
            <AwardsList data={AwardData}/>
            <HomeMenu/>
            <GuestsSlider/>
            <Cook/>
            <Chef/>
            <Interior/>
            <Map/>
        </>
    )
}

export default Home
