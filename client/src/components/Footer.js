import React, { useState } from "react";

const footerStyle = {
  position: 'fixed',
  backgroundColor: '#f5f5f5',
};

const footerContentStyle = {
  boxSizing: 'border-box',
  position: 'fixed',
  bottom: '0%',
  right: '0%',
  background: "linear-gradient(to bottom, #fff, #faf4f7)",
  padding: '2%',
  width: '20%',
  height: '95%',
  border: '1px solid #d3d3d3',
  boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.2)',
};

const teamMembers = [
  {
    name: 'Chanu 👑',
    profilePicture: 'Chanu.png',
    text: 'Backend',
  },
  {
    name: 'Yoonsu',
    profilePicture: 'YoonSu.png',
    text: 'Backend',
  },
  {
    name: 'Chaewon',
    profilePicture: 'Chaewon.png',
    text: 'Frontend',
  },
  {
    name: 'Jaegyeong',
    profilePicture: 'Jaegyeong.png',
    text: 'Frontend',
  },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnterAdsInfo = () => {
    setHoveredIndex('adsInfo');
  };

  const handleMouseEnterLanguage = () => {
    setHoveredIndex('language');
  };

  return (
    <div style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={{ fontWeight: 'bold', marginTop: '10%', marginBottom: '10%', color: 'black', fontSize: '15px' }}>Team(2): <span style={{ color: 'black' }}>BlockPink</span></div>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '3%' }}>
            <img src={member.profilePicture} alt={member.name} style={{ width: '16%', borderRadius: '50%', marginTop: '1.5%' }} />
            <div style={{ marginTop: '5%', marginLeft: '4%' }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '0.3rem' }}>{member.name}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginTop: '-13%', fontSize: '12px', fontWeight: 'bold', color: 'gray', marginRight: '20%' }}>{member.text}</p>
              </div>
            </div>
            <button
              id={`follow-button-${index}`}
              style={{
                backgroundColor: hoveredIndex === index ? '#e20060' : '#ff006c',
                color: 'white',
                border: 'none',
                padding: '5% 6%',
                borderRadius: '15px',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                marginBottom: '-1.5%',
                marginLeft: '10%',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              Follow
            </button>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15%', paddingBottom: '2%', paddingTop: '20%' }}>
          <a href="https://github.com/codestates-beb/beb-09-second-blockpink" target="_blank" rel="noopener noreferrer">
           <img src="/github.png" alt="GitHub" style={{ width: '32px', height: '32px' }} />
          </a>
          <a href="https://www.notion.so/2-835312a0556b466887c25ef016a8042a" target="_blank" rel="noopener noreferrer">
           <img src="/notion.png" alt="Notion" style={{ width: '32px', height: '32px' }} />
          </a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
           <img src="/discord.png" alt="Discord" style={{ width: '32px', height: '32px' }} />
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{
            fontSize: '12px',
            color: hoveredIndex === 'introduction' ? '#000' : '#bbbbbb',
            marginTop: '-20px',
            textDecoration: hoveredIndex === 'introduction' ? 'underline' : 'none',
            cursor: 'pointer',
            transition: 'text-decoration 0.3s',
          }}
          onMouseEnter={() => handleMouseEnter('introduction')}
          onMouseLeave={handleMouseLeave}>
            introduction
          </p>
          <p style={{ fontSize: '12px', color: '#bbbbbb', marginTop: '-20px' }}>·</p>
          <p
            style={{
              fontSize: '12px',
              color: hoveredIndex === 'help' ? '#000' : '#bbbbbb',
              marginTop: '-20px',
              textDecoration: hoveredIndex === 'help' ? 'underline' : 'none',
              cursor: 'pointer',
              transition: 'text-decoration 0.3s',
            }}
            onMouseEnter={() => handleMouseEnter('help')}
            onMouseLeave={handleMouseLeave}
          >
            Help
          </p>
          <p style={{ fontSize: '12px', color: '#bbbbbb', marginTop: '-20px' }}>·</p>
          <p
            style={{
              fontSize: '12px',
              color: hoveredIndex === 'privacyPolicy' ? '#000' : '#bbbbbb',
              marginTop: '-20px',
              textDecoration: hoveredIndex === 'privacyPolicy' ? 'underline' : 'none',
              cursor: 'pointer',
              transition: 'text-decoration 0.3s',
            }}
            onMouseEnter={() => handleMouseEnter('privacyPolicy')}
            onMouseLeave={handleMouseLeave}
          >
            privacypolicy
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p
            style={{
              fontSize: '12px',
              color: hoveredIndex === 'accessibility' ? '#000' : '#bbbbbb',
              marginTop: '-5px',
              textDecoration: hoveredIndex === 'accessibility' ? 'underline' : 'none',
              cursor: 'pointer',
              transition: 'text-decoration 0.3s',
            }}
            onMouseEnter={() => handleMouseEnter('accessibility')}
            onMouseLeave={handleMouseLeave}
          >
            Accessibility
          </p>
          <p style={{ fontSize: '12px', color: '#bbbbbb', marginTop: '-5px' }}>·</p>
          <p
            style={{
              fontSize: '12px',
              color: hoveredIndex === 'adsInfo' ? '#000' : '#bbbbbb',
              marginTop: '-5px',
              textDecoration: hoveredIndex === 'adsInfo' ? 'underline' : 'none',
              cursor: 'pointer',
              transition: 'text-decoration 0.3s',
            }}
            onMouseEnter={handleMouseEnterAdsInfo}
            onMouseLeave={handleMouseLeave}
          >
            Ads info
          </p>
          <p style={{ fontSize: '12px', color: '#bbbbbb', marginTop: '-5px' }}>·</p>
          <p
            style={{
              fontSize: '12px',
              color: hoveredIndex === 'language' ? '#000' : '#bbbbbb',
              marginTop: '-5px',
              textDecoration: hoveredIndex === 'language' ? 'underline' : 'none',
              cursor: 'pointer',
              transition: 'text-decoration 0.3s',
            }}
            onMouseEnter={handleMouseEnterLanguage}
            onMouseLeave={handleMouseLeave}
          >
            language
          </p>
        </div>
        <p style={{ fontSize: '12px', color: '#bbbbbb', marginTop: '20px', textAlign: 'center' }}>© 2023 SWEETER FROM BLOCKPINK</p>
      </div>
    </div>
  );
}