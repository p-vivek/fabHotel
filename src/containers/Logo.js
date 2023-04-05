import React from 'react';
import logo from '../images/logo.png';
function Logo() {
  return (
    <section className='logo-box' data-testid = "logo">
    <img src={logo} alt="" className='logo-box--logo'/>
  </section>
  )
}

export default Logo;