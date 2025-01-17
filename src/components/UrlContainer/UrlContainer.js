import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map(url => {
    return (
      <div className="url">
        <h3 className='title'>{url.title}</h3>
        <a className='short-link' href={url.short_url} target="blank">{url.short_url}</a>
        <p className='long-link' >{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
