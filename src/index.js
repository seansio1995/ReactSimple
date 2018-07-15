import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


const API_KEY='AIzaSyCL3fUPgUglBxDjJDNEzyldfvOGvx85z_M';
const App=()=>{
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(
    <App />, document.querySelector('.container'));
