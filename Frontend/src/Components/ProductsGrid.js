
import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../Services/api';
import { UpdateProduct } from './UpdateProduct';

const ProductsGrid = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
  });
  const [editingItemId, setEditingItemId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [Ndata, setNdata] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const items = await getItems();
      setData(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      console.log('Deleting item with ID:', itemId);
      await deleteItem(itemId);
      console.log('Item deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  const handleEditItem = (itemId) => {
    const selectedItem = data.find((item) => item._id === itemId);
    setFormData(selectedItem);
    setNdata(selectedItem);
   
    setEditingItemId(itemId);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelEdit = () => {
    setShowForm(false);
    setEditingItemId(null);
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: '',
    });
  };

  const buttonStyle = { marginRight: '30px' };

  return (
    <div>
      {showForm ? (
        <UpdateProduct prod={Ndata} />
      ) : (
        data.map((item) => (
          <div
            className="card"
            style={{
              backgroundColor: 'black',
              width: '23rem',
              borderRadius: '20px',
              margin: '5px',
              padding: '15px',
            }}
            key={item._id}
          >
            <img
              src={item.image}
              className="card-img"
              alt={item.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                overflow: 'hidden',
                backgroundColor: 'black',
              }}
            />
            <div
              className="card-body"
              style={{
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                overflow: 'hidden',
                backgroundColor: 'black',
                height:"300px"
              }}
            >
              <p>ID: {item._id}</p>
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-text">Description: {item.description}</p>
              <p className="card-text">Price: {item.price}</p>
              
              <div className="d-flex" style={{ padding: '10px' }}>
            
                <button
                  className="btn btn-secondary"
                  style={buttonStyle}
                  onClick={() => handleEditItem(item._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteItem(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsGrid;





