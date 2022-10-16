import React from 'react';
import PropTypes from 'prop-types';
import { GiSpeaker } from 'react-icons/gi';
import '../styles/Phonetics.scss';

function Phonetics(props) {
  const { phonetics } = props;

  const handleButtonClick = (audio) => {
    const sound = new Audio(audio);
    sound.play();
  };

  return (
    <div>
      <div className="Phonetics">
        {phonetics.map(({ text, audio }) => (
          <div key={Math.random()}>
            {!text ? null : (
              <>
                <p>{text}</p>
                {!audio ? null : (
                  <GiSpeaker onClick={() => handleButtonClick(audio)} />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

Phonetics.propTypes = {
  phonetics: PropTypes.instanceOf(Array).isRequired,
};

export default Phonetics;
