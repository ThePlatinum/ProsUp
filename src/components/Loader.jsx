import React from 'react';
import loaderImg from '../resources/ReactLogoLoader.png'

const Loader = ({isLoading}) => {
  if(!isLoading) return null;
  return (
    <div id="loader" className="d-flex justify-content-center align-items-center flex-column">
      <img src={loaderImg} alt="loader" className="mb-5 App-logo" />
      <p>Loading...</p>
    </div>
  )
}

export default Loader
