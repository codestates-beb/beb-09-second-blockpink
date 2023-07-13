import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

const ProfileImg = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=jdD5IM6ap-DOODtYPjCftFNwFwDFa-Nw8aRiXZkLt44`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setPhoto(data.urls.regular);
      })
      .catch(error => {
        console.error('Error fetching photo:', error);
      });
  }, []);

  return (
    <div>
      <Avatar 
        src={photo} 
        alt="ProfileImage" 
        sx={{ 
          width: '175px',
          height: '175px',
          marginTop: '-100px', 
          marginLeft: '25px',
          '@media (max-width: 1799px)': {
            marginLeft: '110px',
          },
          '@media (max-width: 999px)': {
            marginTop: '-80px',
            marginLeft: '50px',
            width: '150px',
            height: '150px',
          },
          '@media (max-width: 600px)': {
            display: 'none',
          },
          border: '7px solid white',
          boxSizing: 'border-box',
          borderRadius: '50%',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
        }} 
      />
    </div>
  );
};

export default ProfileImg;