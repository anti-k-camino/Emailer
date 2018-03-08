import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: "Baloo", opacity: "0.8" }}>
        <i className="fa fa-paper-plane-o" style={{font: "40px", color: "black", marginRight: "30px"}}></i>
        <span style={{color: "red"}}>E</span>mailer
      </h1>
      <p style={{ font: "20px Permanent Marker"}}>
        Collect feedback from your users!
      </p>
    </div>
  );
};

export default Landing;
