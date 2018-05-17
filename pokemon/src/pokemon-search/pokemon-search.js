import React, { Component } from 'react'
import superagent from 'superagent'

class PokemonSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchName: '',
      height: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    superagent.get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchName}`)
    .then(res => this.props.setAppState({results: res.body}))
    // .then(console.log)
    // .then(res => console.log(res)) // does same as above
    .catch(console.error)
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}) 
  }

  render() {
    return (
      <div className="pokemon-search">
        <form onSumbit={this.handleSubmit}>
          <input 
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleChange}/>
          <input 
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}/>

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}