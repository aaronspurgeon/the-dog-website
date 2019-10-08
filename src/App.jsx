import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [value, setValue]
}

function App(props) {

  const [breed, setBreed] = useInput('husky');
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([])
    fetchDogImages()
  }, [breed])

  const handleChange = (e) => {
    setBreed(e.target.value)
  }

  const fetchDogImages = () => {
    Axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        setImages(res.data.message)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }
  return (
    <div>
      <h1>dog website</h1>
      <select value={breed} onChange={handleChange}>
        <option disabled>Select breed</option>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>
      {images.map((item, index) => (
        <img src={item} key={index} alt="Dog"/>
      ))}
    </div>
  )
}

export default App;
