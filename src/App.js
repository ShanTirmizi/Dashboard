import './App.css';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import StickyHeadTable from './components/Table';
import { useSelector, useDispatch } from 'react-redux';
import {getData} from './redux/data'
import { useState, useEffect } from 'react';
import Map from './components/Map';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [ vehicles, setVehicles ] =  useState([])
  const [loading, setLoading ] = useState(true)

  // const columns = [
  //   { id: 'uuid', label: 'VehicleID', minWidth: 170 },
  //   { id: 'qrCode', label: 'QRCode', minWidth: 100 },
  //   {
  //     id: 'status',
  //     label: 'status',
  //     minWidth: 170,
  //     align: 'right',
  //   },
  //   {
  //     id: 'graphUrl',
  //     label: 'Location',
  //     minWidth: 170,
  //     align: 'right',
  //   },
  //   {
  //     id: 'batteryLevel',
  //     label: 'BatteryLevel',
  //     minWidth: 170,
  //     align: 'right',
  //   },
  // ];

    const { vehicleData, status } = useSelector(state => state.data)
    const dispatch = useDispatch()
 
  const content = () => {
    try {
      if(vehicleData != []) {
        setVehicles(vehicleData)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(getData())
  }, [])

  useEffect(() => {
    if(status == 'success') {
      content()
      setLoading(false)
    }
  }, [status])
  return (
    <Router>
        <SideMenu />
        <Navbar />
        <div className='main'>
          <Switch>
            <Route exact path='/'>
            {
              !loading && (
                <StickyHeadTable rows={vehicles[0].content} />
              )
            }
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
