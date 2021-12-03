import './App.css';
import Counter from './component/tutorial/Counter';
import Form from './pages/form';
import React from 'react';
import Network from './component/tutorial/Network';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './component/tutorial/Post';
import Transalator from './component/translator';
import GeoLocation from './component/geolocation';
import Pics from './component/pics';

function App() {
  const [state, setstate] = React.useState({mounted:true, ignoreProps:false, seed:40})
  
  const mount = () => {
    setstate({mounted:true})
  }

  const unmount = () => {
    setstate({mounted:false})
  }

  const generateSeed = () => {
    setstate({...state, seed: parseInt(Math.random()*100)})
  }

  return (
    <div className="App">
      {/* <Form status={false} lastName="wipro" firstName="infosys" /> */}
      {/* <button disabled={state.mounted} onClick={()=>mount()} >Mount Counter </button>&nbsp;
      <button  disabled={!state.mounted} onClick={()=>unmount()} >Unmount Counter </button> &nbsp;
      <button onClick={()=>generateSeed()} >Generate Seed </button>
      {state.mounted ? 
            <Counter seed={state.seed} />
            :
            null
      } */}

      <BrowserRouter>
        <Routes>
          <Route  exact path="comments" element={<Network />} />
          <Route  exact path="counter" element={<Counter seed={state.seed} />} />
          <Route  exact path="post" element={<Post  />} />
          <Route  exact path="/translator" element={<Transalator  />} />
          <Route  exact path="/geolocation" element={<GeoLocation  />} />
          <Route  exact path="/" element={<Pics  />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
