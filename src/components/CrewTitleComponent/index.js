import React, { useState } from 'react';

const CrewTitleComponent = () => {
    const TopTitleStyle = {
        fontSize: '50px',
    }

    const BottomTitleStyle = {
        fontSize: '36px'
    }

    return (
        <section className="relative py-1">
            <div className="flex flex-row items-center justify-center container mx-auto px-[186px]">
                <div className="crewTitle">
                    <div className="top-title text-yellow-400 text-center">
                        <span style={TopTitleStyle}>Farming Time!</span>
                    </div>
                    <div className="bottom-title text-[#28c0c4] text-center">
                        <span style={BottomTitleStyle}>CREW FARMING</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CrewTitleComponent