import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/bag' element={<Bag/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
