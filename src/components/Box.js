import React from 'react';

const Box = ({ icon, title, description, backgroundColor, borderColor, iconWidth, iconHeight }) => {
  const boxStyle = {
    color: 'white',
    backgroundColor,
    border: `1px solid ${borderColor}`,
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '300px',
    minWidth: '145px',
  };

  const iconStyle = {
    width: iconWidth,
    height: iconHeight,
  };

  return (
    <div className="box" style={boxStyle}>
      <div className="box-icon">
        <img src={icon} alt={title} style={iconStyle} />
      </div>
      <h4 className="box-title">{title}</h4>
      <p className="box-description">{description}</p>
    </div>
  );
};

export default Box;
