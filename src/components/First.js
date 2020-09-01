import React from 'react';

const First = ({setRoute}) => {

  return (
    <div className="container">
      <div className="first">
        <h1 className="mainH">2019 AUDI Q5</h1>
        <h3 className="minorH">Awarded Compact Luxury SUV Best Buy</h3>
        <h3 className="minorH lowerBlock">of 2019 by Kelley Blue Dook</h3>
        <button className="inventory">view inventory</button>
        <img src={require("../content/info-block.png")} alt="Info block" className="info-block"/>
      </div>
      <div className="baner-block">
        <img src={require("../content/baner.png")} alt="Baner" className="baner"/>
      </div>
    </div>
  );
}

export default First;
