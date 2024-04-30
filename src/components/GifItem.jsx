import React from 'react'

export const GifItem = ({title, url}) => {
    
  return (

    <div> 
      <img src={url} alt={title}/>
      <p className="card"> {title} </p>
    </div>
    
  )
}
