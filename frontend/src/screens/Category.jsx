import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { PRODUCTS_URL } from '../constants';

function Category() {
  const { cat } = useParams();
  const [obj, setObj] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`${PRODUCTS_URL}/get-category/${cat}`);
      setObj(response.data);
      console.log(response.data);
    }
    getProduct();
  }, [cat]);

  const navigation = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1
        style={{
          padding: '10px 20px',
          color: '#686D76',
          fontFamily: 'sans-serif',
          fontSize: '2.8rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {cat}
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {obj.map((single, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '400px',
              fontFamily: 'serif',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer', // add cursor pointer for better UX
            }}
            onClick={() => navigation(single._id)}
          >
            <div
              style={{
                width: '100%',
                height: '250px', // fixed height
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={single.image}
                alt={single.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: '10px',
                  objectFit: 'contain',
                   borderBottom:'1px solid #333',
                  
                }}
              />
            </div>
            <h2 style={{textAlign:'center', fontSize: '1.4em',color: '#333', margin: '5px 0', borderBottom:'1px dotted #333',padding:'10px' }}>{single.name}</h2>
            <p style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#333' }}>Price: TND&nbsp;{single.price}</p>
            <p style={{ borderBottom:'1px dotted gray',paddingBottom:'10px',fontWeight:'bold', color: '#333' }}>Category: {single.category}</p>
            <p style={{ color: '#555' }}>Brand: {single.brand}</p>
            <p style={{ color: '#555' }}>Rating: {single.rating}</p>
            <p style={{  borderBottom:'1px dotted #333',paddingBottom:'10px',color: '#777' }}>Reviews: {single.numReviews}</p>
            <p style={{ marginTop: '10px'}}>{single.description}</p>
            <p style={{ color: '#555' }}>In Stock: {single.countInStock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
