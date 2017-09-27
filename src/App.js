import React, { Component } from 'react';
import Header from './header'
import ArtistList from './artistList';
import './App.css';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      artists: []
    };
  }
  getApiUrl(){
    this.apiBase = 'http://ws.audioscrobbler.com/2.0/?';
    this.method = 'geo.gettopartists';
    this.apiKey = '68f8a46d1a2dd9ff8af36675642064a5';
    this.country = 'brazil';
    return `${this.apiBase}method=${this.method}&country=${this.country}&api_key=${this.apiKey}&format=json`;
  };

  componentDidMount(){
      fetch(this.getApiUrl())
      .then(resp => resp.json())
      .then(resp => {
          const {topartists:{artist: respArtist}} = resp;
          respArtist.sort((obj1, obj2) =>{
              return obj2.listeners - obj1.listeners;
          });
          this.setState({
            artists: respArtist
          });
          console.log(this.state.artists);
      });
  };
 
  render() {
    return (
      <div className="App-intro">
        <Header />
        <ArtistList artists={this.state.artists}/>
      </div>
    );
  }
}

export default App;
