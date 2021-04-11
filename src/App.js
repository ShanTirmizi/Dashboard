import './App.css';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';

import StickyHeadTable from './components/Table';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counter';
import { useState, useEffect } from 'react';
import Map from './components/Map';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// -------------

// -------------
function App() {
  // -----------------------------------
  const [ vehicles, setVehicles ] =  useState([])

  const fetchData = async() => {
    try {
      const response = await fetch("http://console-api.tracmobility.com/test/vehicles")
      const data = await response.json()
      setVehicles(data.content)
      console.log(data.content)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    fetchData()
  }, [])

  // function createData(name, code, population, size) {
  //   const density = population / size;
  //   return { name, code, population, size, density };
  // }
  const columns = [
    { id: 'uuid', label: 'VehicleID', minWidth: 170 },
    { id: 'qrCode', label: 'QRCode', minWidth: 100 },
    {
      id: 'status',
      label: 'status',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'graphUrl',
      label: 'Location',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'batteryLevel',
      label: 'BatteryLevel',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

//   const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// console.log(rows)

  // -----------------------------------
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <Router>
        <SideMenu />
        <Navbar />
        <div className='main'>
        {/* <h1>The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>plussss</button>
        <button onClick={() => dispatch(decrement())}>minusss</button> */}
        <Switch>
          <Route exact path='/'>
            <StickyHeadTable rows={vehicles} columns={columns}/>
          </Route>
          <Route  path='/map'>
            <Map />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
