import React from 'react'


import SideNav from '../components/SideNav'
import Home from '../components/Home'
import TrendSide from '../components/TrendSide'

const Twitter = () => {
    return (
        <>
            <div className="twitter-full container flex">
                <SideNav />
                <Home />
                <TrendSide />
            </div>
        </>
    )
}

export default Twitter