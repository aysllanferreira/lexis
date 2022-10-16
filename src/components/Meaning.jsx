import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Meaning.scss';

function Meaning(props) {
  const { meanings } = props;
  return (
    <div className="Meaning">
      {meanings.map(({ partOfSpeech, definitions }) => (
        <div key={Math.random()}>
          <h2>{partOfSpeech}</h2>

          {definitions.splice(0, 3).map(({ definition, example }) => (
            <div key={Math.random()}>
              <p>
                {definition && <span>Definition</span>}
                {definition}
              </p>

              <p>
                {example && <span>Example</span>}
                {example}
              </p>

              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

Meaning.propTypes = {
  meanings: PropTypes.instanceOf(Array).isRequired,
};

export default Meaning;
