import React from 'react';
import '../App.css';
import RouteConfig from './route-config';
import RouterViews from './router-views';
import { BrowserRouter } from 'react-router-dom';
// import useStore from '../context/useContext';
// import { useObserver } from 'mobx-react-lite'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <RouterViews routes = {RouteConfig}></RouterViews>
        </BrowserRouter>
    </div>
  );
}

export default App;
