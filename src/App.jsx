import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Phonetics from './components/Phonetics';
import './App.css';
import Meaning from './components/Meaning';

function App() {
  const [result, setResult] = useState([]);

  /**
   * Get the search term and make a request to the API.
   * @param {String} search - The word to search for
   */
  const getSearchTerm = (search) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((data) => setResult([data.data[0]]));
  };

  return (
    <div className="App">
      <SearchBar onChange={getSearchTerm} />

      <main>
        {result.map((item) => (
          <div key={item.word}>
            <h1>{item.word}</h1>
            <Phonetics phonetics={item.phonetics} />
            <Meaning meanings={item.meanings} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
