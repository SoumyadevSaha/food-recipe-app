import Body from './components/Body';
import imgChef from './components/chef.png';
import './App.css';
import React, { useState } from 'react';

function App() {

  const APPLICATION_ID = '6cfe9801';
  const API_KEY = '4e8af89670b2321c482dcda1777eab40';

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (e) => {
    e.preventDefault();
    var query = document.getElementById('_search-dish').value;
    console.log(query);
    var REQ_URL = `https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${API_KEY}`;
    const response = await fetch(REQ_URL);
    const data = await response.json();
    // console.log(data.hits);
    if (data.hits.length > 0) {
      setRecipes(data.hits);
    }
  }

  return (
    <div className="App">
      <div className="waviy dummy">
        <img src={imgChef} alt=""/>{" "}
        <span style={{ "--i": 1 }}>R</span>
        <span style={{ "--i": 2 }}>E</span>
        <span style={{ "--i": 3 }}>C</span>
        <span style={{ "--i": 4 }}>I</span>
        <span style={{ "--i": 5 }}>P</span>
        <span style={{ "--i": 6 }}>E</span>
        <span style={{ "--i": 7 }}>&ensp;</span>
        <span style={{ "--i": 8 }}>A</span>
        <span style={{ "--i": 9 }}>P</span>
        <span style={{ "--i": 10 }}>P</span>
      </div>
      <form className='search-form' onSubmit={getRecipes}>
        <input type="text" placeholder='Search for a Dish' className='search-bar' id="_search-dish" />
        <button type='submit' className='flat-button'> Search </button>
      </form>
      <div className="container space-y-6">
        <Body recipes={recipes} />
      </div>
      <footer>
        <p>&copy; 2022 Soumyadev's Creations</p>
        <a href="https://soumyadev-portfolio-1.netlify.app/" target="_blank" rel="noreferrer">Visit my Website</a>
      </footer>
    </div>
  );
}

export default App;
