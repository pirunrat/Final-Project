import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  updateDevice,
  deleteDevice,
  turnOn,
  turnOff
} from './Device';

const DeviceList = ({ setshowDevice }) => {
  const [devices, setDevices] = useState([]);

  const getAllDevices = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/SmarthomeCommand/getalldevices'
      );

      setDevices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateDevice = async (id) => {
    await updateDevice(id);
    getAllDevices();
  };

  const handleDeleteDevice = async (id) => {
    await deleteDevice(id);
    getAllDevices();
  };

  const handleTurnOn = async (id, deviceName) => {
    await turnOn(id, deviceName);
    getAllDevices();
  };

  const handleTurnOff = async (id, deviceName) => {
    await turnOff(id, deviceName);
    getAllDevices();
  };

  useEffect(() => {
    getAllDevices();
  }, []);

  return (
    <div className='Device'>
      <button onClick={() => setshowDevice(false)}>Back</button>
      {devices.map((device) => (
        <div className="device" key={device._id}>
          <p>Device Name: {device.deviceName}</p>
          <p>ID: {device.id}</p>
          <p>Status: {device.status}</p>
          <button onClick={() => handleUpdateDevice(device.id)}>Update</button>
          <button onClick={() => handleDeleteDevice(device.id)}>Delete</button>
          <button onClick={() => handleTurnOn(device.id, device.deviceName)}>Turn on</button>
          <button onClick={() => handleTurnOff(device.id, device.deviceName)}>Turn off</button>
        </div>
      ))}
    </div>
  );
};

export default DeviceList;
