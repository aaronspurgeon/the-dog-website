import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breed: 'husky',
      images: []
    }
  }

  componentDidMount() {
    this.fetchDogImages()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.setState({
        images: []
      });
      this.fetchDogImages()
    }
    
  }

  fetchDogImages = () => {
    Axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
      .then(res => {
        this.setState({
          images: res.data.message
        })
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }

  handleChange = (e) => {
    this.setState({
      breed: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>dog website</h1>
        <select value={this.state.breed} onChange={this.handleChange}>
          <option disabled>Select breed</option>
          <option value="husky">Husky</option>
          <option value="beagle">Beagle</option>
          <option value="corgi">Corgi</option>
          <option value="boxer">Boxer</option>
        </select>
        {this.state.images.map((item, index) => (
          <img src={item} key={index} alt="Dog"/>
        ))}
      </div>
    )
  }
}

export default App;
