import React,{useState} from 'react';
import './App.css';
import { Button, Input} from 'semantic-ui-react';


const App = () => {
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at " +city+Math.round(celcius)+"\n"+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  

  return (
    <div>
      <center>
         <div className="card">
        <h2 className="card-title">Weather App</h2>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              
              <Input type="text" name="city" onChange={changeHandler} value={city} icon='search' placeholder='Type a City...' />
              <br /><br />
              <div>
             
              <Button type="submit" inverted color='green'>
        Search
      </Button></div>
            </form><br /> <br />
            <div className='res'>
              <img className='weatherIcon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
               <h1>{result}</h1> 
              
            </div>
          </div>
        </div>
        
      </center>
      </div>
  )
}

export default App