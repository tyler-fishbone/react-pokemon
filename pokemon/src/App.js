import React, { Component } from 'react';
import MainHeader from './main-header/main-header'
import PokemonSearch from './pokemon-search/pokemon-search'
import PokemonData from './pokemon-data/pokemon-data'

class App extends Component {
constructor(props) {
    super(props)
    this.state = {
        results: undefined,
    }
}
  render() {
    return (
      <div className="App">
        <MainHeader/>
        <PokemonSearch appState={this.setState.bind(this)}/>

        { this.state.results ? 
          <PokemonData results={this.state.results}/>
        
        }

      </div>
    );
  }
}

export default App;

