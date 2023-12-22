import axios from 'axios';

const baseURL = "https://vintage-items-limited-api.vercel.app";

const api = axios.create({
  baseURL: baseURL,
});



export const addItem = async (formData) => {
  try {
    const response = await api.post('/add-item', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (formData) => {
  try {
    const response = await api.post('/sign-up', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const login = async (logdata) => {
  try {
    const response = await api.post('/log-in', logdata);
    // console.log(logdata)
    // const logdataJSON = JSON.stringify(logdata, null, 2);
    // alert(logdataJSON)
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const userdata = async (proData) => {
  try {
    const response = await api.post('/user-data', proData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getData = async () => {
  try {
    const response = await api.get('/user-items');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItems = async () => {
  try {
    const response = await api.get('/get-items');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await api.delete(`/delete-product/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const deleteItem = async (itemId) => {
  try {
    const response = await api.delete(`/delete-item/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// export const addData = async (value) =>{
//   console.log("API REACHED");
//   return await axios.post(`${baseURL}/prac`,value);
// }



