import React from 'react';
import './MenuItem.styles.scss';

const MenuItem = (props) => {
  const { title, image, size } = props;
  return (
    <div className={`menu-item ${size}`} >
    <div className='background-image' style={{backgroundImage: `url(${image})`}} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Take a Look!</span>
      </div>
    </div>
  )
};

export default MenuItem
