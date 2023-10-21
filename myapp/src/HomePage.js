import axios from 'axios';
import React, { useState } from 'react';
import './HomePage.css';
import DeviceList from './DeviceList';

const HomePage = ({ setAuthenticated }) => {
  const [deviceName, setDeviceName] = useState('');
  const [id, setId] = useState('');
  const [showDevice, setshowDevice] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/SmarthomeCommand/createdevice', {
        deviceName,
        id,
      });
      console.log(response.data); // Log the response from the server
      // Reset the form after successful device creation
      setDeviceName('');
      setId('');
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'deviceName') {
      setDeviceName(value);
    } else if (name === 'id') {
      setId(value);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => setshowDevice(true)}>View Devices</button>
      {!showDevice ? (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              Device Name:
              <input
                type="text"
                name="deviceName"
                value={deviceName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              ID:
              <input type="text" name="id" value={id} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Create Device</button>
          </form>
        </div>
      ) : (
        <DeviceList setshowDevice={setshowDevice} />
      )}
    </div>
  );
};

export default HomePage;
