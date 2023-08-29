import React from 'react';


const Footer = () => {
  const year = new Date()

  return(
    <div>
      <footer>{`Site created by Fabio in
       ${year.getFullYear()}`}</footer>
    </div>
  )
};

export default Footer;