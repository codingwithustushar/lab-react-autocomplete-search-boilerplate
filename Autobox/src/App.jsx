import { useState } from 'react'
import countryData from "./resources/countryData.json" 
import './App.css'

function App() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  function handleChange(e) {
    setSearchText(e.target.value);

    setSuggestions(countryData.filter((country) =>
      country.name.toLowerCase().startsWith(searchText.toLowerCase())
    ));

    setShowSuggestions(true);
  }

  let handleEsc = (e) => {
    if (e.keyCode === 27) {
      setShowSuggestions(false);
      console.log('Escape');
    } 
  }

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleEsc}
        list='suggestions'
      />
      <datalist id='suggestions'>
        {showSuggestions && suggestions.map((country, i) => (
          <option key={i} value={country.name}></option>
        ))}
      </datalist>
      <button>Search</button>
    </div>
  );
}

export default App;
