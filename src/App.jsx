import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Phonetics from './components/Phonetics';
import './App.css';
import Meaning from './components/Meaning';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState([]);

  /**
   * Get the search term and make a request to the API.
   * @param {String} search - The word to search for
   */
  const getSearchTerm = (search) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((data) => setResult([data.data[0]]))
      .catch(({ response }) => {
        if (response.status === 404) setResult(undefined);
      });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onChange={getSearchTerm} />

      <main>
        {!result ? (
          <Error />
        ) : (
          result.map((item) => (
            <div key={item.word}>
              <h1>{item.word.charAt(0).toUpperCase() + item.word.slice(1)}</h1>
              <Phonetics phonetics={item.phonetics} />
              <Meaning meanings={item.meanings} />
            </div>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
