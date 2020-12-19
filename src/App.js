import './App.css';
import {useState} from 'react'
import Buttons from './components/Buttons'
import HappyFamily from './components/HappyFamily'

const App = () => {
  const [woo, setWoo] = useState(false)

  const buttonOptions = [{name: "tryingTimes"}, {name: "woo"}]
  
  return (
    <div className="App flex flex-row">
      
      <HappyFamily title="Happy Holidays" subHead="From the Salzmans" imgSrc="../FamilyPhotos-3.jpg"/>
      
      <Buttons buttonOptions={buttonOptions} />
      
    </div>
  );
}

export default App;
