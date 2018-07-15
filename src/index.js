import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


const API_KEY='AIzaSyCL3fUPgUglBxDjJDNEzyldfvOGvx85z_M';

class App extends Component{
  constructor(props){
    super(props);

    this.state={videos:[]};
    YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{
      this.setState({videos:videos});
    });
  }
  render(){
  return (
    <div>
      <SearchBar/>
      <VideoList videos={this.state.videos}/>
    </div>
  );
}
}

ReactDOM.render(
    <App />, document.querySelector('.container'));
