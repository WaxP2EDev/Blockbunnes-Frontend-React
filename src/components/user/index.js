import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useRef} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {List, ListItem, ListItemText, NoSsr, Popover} from "@material-ui/core";
import NftShape from '../../images/nft-shape-logo.png';

import Mining1 from '../../images/Mining1.png';
import MiningHammerImg from '../../images/mininghammer.png';
import MiningWarningImg from '../../images/miningwarning.png';
const UserPanel = ({...props}) => {
    const {activeUser, chain, users} = props.ual;
    const button = useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [top, setTop] = useState(true);

    const headerStyle = {
        backgroundColor: '#1a2647'
    }

    const loginBtnStyle = {
        backgroundColor: '#2cdada',
        color: '#182648'
    }

    const nftlogoStyle = {
        backgroundImage: `url(${NftShape})`,
        width: '58px',
        height: '56px'
      }
    
      const miningStyle = {
        width: '60px',
        height: '60px'
      }
    
      const hammerStyle = {
        backgroundImage: `url(${MiningHammerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // margin: 0, /* No padding */
        // padding: '0px' /* No margins */,
      }
    
      const warningStyle = {
        backgroundImage: `url(${MiningWarningImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // margin: 0, /* No padding */
        // padding: '0px' /* No margins */,
      }
    let addAccount = () => {
        props.ual.showModal();
    };
    let logout = () => {
        props.ual.logout();
        setAnchorEl(null)
    };
    const open = Boolean(anchorEl);
    useEffect(() => {
        const scrollHandler = () => {
          window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
      }, [top]);
    if (users.length > 0) {
        return (
            <NoSsr>
                <button ref={button} onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <img
                        src={process.env.NEXT_PUBLIC_HREF + "/img/wax.png"}
                        alt={"avatar"}
                    />
                    <p>{users[0].accountName}</p>
                    <MoreVertIcon/>
                </button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <List className={"min-w-full"}>
                        <ListItem className={"cursor-pointer"}>
                            <ListItemText onClick={logout} primary="Logout"/>
                        </ListItem>
                    </List>
                </Popover>
            </NoSsr>
                
        );
    }
    return (
        <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`} style={headerStyle}>
                    <div className="max-w-6xl mx-auto px-5 sm:px-6">
                        <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Site branding */}
                        <div className="flex-shrink-0 flex mr-4">
                            <div style={nftlogoStyle} ></div>
                            {/* Logo */}
                            <div class="logo-title">
                            <a href="/" className="block" aria-label="Cruip">
                                <svg
                                width="296px" height="61px">
                                <defs>
                                    <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="296px" height="61px"  >
                                    <feOffset in="SourceAlpha" dx="0" dy="10" />
                                    <feGaussianBlur result="blurOut" stdDeviation="0" />
                                    <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                    <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                    <feComponentTransfer><feFuncA type="linear" slope="0.35" /></feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                    </filter>

                                </defs>
                                <g filter="url(#Filter_0)">
                                    <text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" transform="matrix( 0.7781656809352, 0, 0, 0.86023037882758, 0.4594591887532, 46.5756442812758)" font-size="60px"><tspan font-size="60px" font-family="BadaBoomProBB" fill="#2CDADA">BLOCK</tspan><tspan font-size="32px" font-family="BadaBoomProBB" fill="#CCD53F">BUNNIES</tspan></text>
                                </g>
                                </svg>
                            </a>
                            </div>
                        </div>
                        {/* Site navigation */}
                        <nav className="flex justify-end">
                            <div className="mining-circle flex flex-row justify-between">
                            <div className="relative mining mx-1 px-1 my-1 py-1">
                                <img src={Mining1} style={miningStyle} />
                                <div className="absolute z-[3] md:z-[3] w-6 h-6 top-0 left-0 pt-[12px] pl-[16px] mt-[9px] ml-[22px]" style={hammerStyle}>
                                </div>
                                <div className="absolute z-[3] md:z=[3] top-0 left-0 mt-[30px] ml-[16px] text-yellow-400"><span>100%</span></div>
                            </div>
                            <div className="relative mining mx-1 px-1 my-1 py-1 flex items-center">
                                <img src={Mining1} style={miningStyle} />
                                <div className="absolute z-[3] md:z-[3] w-6 h-6 top-0 left-0 pt-[12px] pl-[16px] mt-[9px] ml-[22px]" style={warningStyle}>
                                </div>
                                <div className="absolute z-[3] md:z=[3] top-0 left-0 mt-[30px] ml-[16px] text-yellow-400"><span>100%</span></div>
                            </div>
                            <div className="relative mining mx-1 px-1 my-1 py-1">
                                <img src={Mining1} style={miningStyle} />
                                <div className="absolute z-[3] md:z-[3] w-6 h-6 top-0 left-0 pt-[12px] pl-[16px] mt-[9px] ml-[22px]" style={warningStyle}>
                                </div>
                                <div className="absolute z-[3] md:z=[3] top-0 left-0 mt-[30px] ml-[16px] text-yellow-400 text-center"><span>100%</span></div>
                            </div>
                            </div>
                            <div className="flex coins-carrot flex-col px-1 my-1 py-1 align-items justify-center">
                            <div className="bunnycoins text-center"><span className="uppercase text-yellow-400">bunnycoin 0000000</span></div>
                            <div className="carrots text-center"><span className="uppercase text-yellow-400">carrots 0000000</span></div>
                            </div>
                            <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <li>
                                <button onClick={addAccount} className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" style={loginBtnStyle}>
                                <span class="uppercase text-2xl font-bold">Login</span>
                                </button>
                            </li>
                            </ul>

                        </nav>

                        </div>
                    </div>
                </header>
        // <NoSsr>
        //     <Button onClick={addAccount}>
        //         <img
        //             src={process.env.NEXT_PUBLIC_HREF + "/img/wax.png"}
        //             alt={"avatar"}
        //         />
        //         <p>Login</p>
        //     </Button>
        // </NoSsr>
    );
};

export default UserPanel;
