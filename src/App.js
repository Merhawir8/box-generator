import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Color from './components/Color';


function App() {
  const [color, setColor] = useState([]);
  const [currColor, setCurrColor] = useState("");

  const onSubmitHandler = (event) => {
    console.log("hello",event );
    event.preventDefault();
    setColor([...color, currColor]); 
    event.target[0].value =" " //this makes the text in our search bar disapper
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group col-5 mx-auto center d-flex justify-content-between">
          <h1>Color</h1>
          <input className="form-control" placeholder="Enter Color" onChange={(event)=>setCurrColor(event.target.value)} />
          <input type="submit" className="btn btn-success" value="Add"/>
        </div>
      </form>
      <div className="mainContainer">
        {/* <ul> */}
          { 
            color.map((item, i) => <Color key={i} text={item} /> )
          }
        {/* </ul> */}

      </div>
    </div>
  );
}

export default App;
