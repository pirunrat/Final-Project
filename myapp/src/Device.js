import axios from 'axios';


const updateDevice = async (id) => {
  try {
    await axios.put(
      `http://localhost:3001/SmarthomeCommand/updatedevice/${id}`
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteDevice = async (id) => {
  try {
    await axios.delete(
      `http://localhost:3001/SmarthomeCommand/deletedevice/${id}`
    );
  } catch (error) {
    console.error(error);
  }
};

const turnOn = async (id, deviceName) => {
  try {
    await axios.put(
      `http://localhost:3001/SmarthomeCommand/turnon/${id}/${deviceName}`
    );
  } catch (error) {
    console.error(error);
  }
};

const turnOff = async (id, deviceName) => {
  try {
    await axios.put(
      `http://localhost:3001/SmarthomeCommand/turnoff/${id}/${deviceName}`
    );
  } catch (error) {
    console.error(error);
  }
};

export {
  updateDevice,
  deleteDevice,
  turnOn,
  turnOff
};
