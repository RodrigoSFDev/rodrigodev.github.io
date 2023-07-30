import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import skills from '../data/skills';

const Skills = () => {
  const responsive = {
    0: {items: 2},
    568: {items: 3},
    1024: {items: 6},
  };

  return (
    <section className="skill" id="skills">

      <div className="skill-bx">
        <h2>Skills</h2>
        <AliceCarousel
          mouseTrackingEnabled
          items={skills}
          responsive={responsive}
          disableButtonsControls={true}
        />
      </div>
    </section>
  );
};

export default Skills;
