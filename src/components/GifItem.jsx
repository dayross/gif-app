import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({title, url}) => {
    
  return (

    <div> 
      <img src={url} alt={title}/>
      <p className="card"> {title} </p>
    </div>
    
  )
}

GifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
}