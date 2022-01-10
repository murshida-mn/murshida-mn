import './App.css';
// import Form from './pages/form';
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { pathList } from './component/navigation/pathList';
// import { Header } from './component/navigation/header';
import Streams from './component/stream/client/Index';

var userDetailContext = React.createContext(null);

function App() {
  const [state] = React.useState({ mounted: true, ignoreProps: false, seed: 40 })
  
  var [userDetails, setuserDetails] = useState({
    name: "Mayank",
    age: 30
  });
      
  // const mount = () => {
  //   setstate({mounted:true})
  // }

  // const unmount = () => {
  //   setstate({mounted:false})
  // }

  // const generateSeed = () => {
  //   setstate({...state, seed: parseInt(Math.random()*100)})
  // }

  console.log('parent comp');

  // React.useEffect(() => {
  //   const timer = setTimeout(()=> setuserDetails({name:'Murshida', age:21}), 1000);
  //   return () => {clearTimeout(timer)}
  // })

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


      {/* <BrowserRouter>
        <Header />
        <div className='main-content'>
        <Routes>
          {pathList.map(({ to, path, Component }) => (
            <Route exact path={path} element={<Component />} />
          ))}
        </Routes>
        </div>
         </BrowserRouter> */}

         <Streams />
     
    </div>
  );
}

export default App;
