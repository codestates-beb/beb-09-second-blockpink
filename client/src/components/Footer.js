import React from "react";

import "../assets/Footer.css";

const footerStyle = {
  position: 'fixed',
  backgroundColor: '#f5f5f5',
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <div id="footer">Footer</div>
    </div>
  );
}