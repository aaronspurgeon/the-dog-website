import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDogImages } from './hooks/fetchDogImages';
import './App.css';



function App(props) {

  const [breed, setBreed] = useLocalStorage('breed', 'husky');
  const [count, setCount] = useLocalStorage('count', 1);
  const [images, setImages] = useDogImages(breed, count);

  
  return (
    <div>
      <h1>dog website</h1>
      <select value={breed} onChange={e => setBreed(e.target.value)}>
        <option disabled>Select breed</option>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>

      <input 
      type='number'
      placeholder='Image Count'
      value={count}
      onChange={e => setCount(e.target.value)}
      
      />

      {images.map((item, index) => (
        <img src={item} key={index} alt="Dog" />
      ))}
    </div>
  )
}

export default App;
