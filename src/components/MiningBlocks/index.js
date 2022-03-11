import React, { useState } from 'react';
import NFTBlockImg from '../../images/nft-block.png'

const MiningBlocks = () => {
    const nftlist = [];
    for (var i = 0; i < 9; i++) {
        nftlist.push(<div className="object-cover px-1 md:container flex flex-wrap md:flex-1 md:flex-row md:flex-wrap flex-row justify-center"><img src={NFTBlockImg} /></div>)
    }
    return (
        <section className="relative py-[5px] flex items-center flex-col w-full">
            <div className="crew-nft-9 flex flex-col items-center justify-between container mx-auto px-[186px]">
                <div className="crew-title text-center w-11/12">
                    <span className="uppercase text-yellow-400 text-center">choose 9 crew nfts</span>
                </div>
                <div className="crew-card flex flex-1 flex-wrap flex-row md:flex-wrap sm:flex-row w-11/12 justify-evenly min-w-0 justify-center h-[130px] pt-[5px] pb-[5px] border-solid border-2 border-[#dac406] rounded-md">
                    {nftlist}
                </div>
            </div>
            <div className="mining-tool-9 flex flex-col items-center  flex-wrap justify-between container mx-auto px-[186px]">
                <div className="mining-title text-center w-11/12 pt-2">
                    <span className="uppercase text-yellow-400 text-center">choose 9 mining tools</span>
                </div>
                <div className="mining-card flex flex-1 flex-wrap flex-row md:flex-row md:flex-wrap sm:flex-row w-11/12  justify-evenly min-w-0 h-[130px] pt-[5px] pb-[5px] border-solid border-2 border-[#dac406] rounded-md">
                    {nftlist}
                </div>
            </div>
            <div className="time-claim w-full items-center text-center pt-2">
                <span className="uppercase text-[#2cdada]">Total farming power</span>
            </div>
            <div className="claim-btn w-full items-center text-center">
                <span className="uppercase text-[#d8e41e] text-4xl rounded-md">0000</span>
            </div>
            <div className="time-claim w-full items-center text-center py-2">
                <span className="uppercase text-[#2cdada]">time until next claim 4:00</span>
            </div>
            <div className="claim-btn w-full items-center text-center rounded-md mb-2">
                <button className="uppercase bg-[#d8e41e] w-[163px] h-[38px] text-2xl font-bold rounded-md">claim</button>
            </div>
        </section>
    )
}

export default MiningBlocks