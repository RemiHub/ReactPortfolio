import React from 'react';
import Tilt from './Tilt';
import '../style.scss';

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = Tilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
          
        />
        
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
        
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
            
            
          </div>
          <p className="slideLink">{slide.link}</p>
        </div>
        
      </div>
    );
  }

  export default Slide;