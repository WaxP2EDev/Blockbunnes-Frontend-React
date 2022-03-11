import React, { useState } from 'react';
// import Modal from '../utils/Modal';
import CrewTitleComponent from '../CrewTitleComponent'
import MingingBlocks from '../MiningBlocks'
import CrewBgImage from '../../images/crewmining-bg.png'
import SawBladeImage from '../../images/saw_blade.png'

const HeroHome = () => {

  const crewbodystyle = {
    backgroundImage: `url(${CrewBgImage})`,
    backgroundColor: '#1a2f58',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    margin: 0, /* No padding */
    padding: '10px 0px 0px 0px' /* No margins */
  }

  const sawbladeStyle = {
    backgroundImage: `url(${SawBladeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    margin: 0, /* No padding */
    padding: '10px 0px 0px 0px' /* No margins */
  }

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative" style={crewbodystyle}>
      <div className="sawblade block" style={sawbladeStyle}>
        <CrewTitleComponent />
        <MingingBlocks />
      </div>
    </section>
  );
}

export default HeroHome;