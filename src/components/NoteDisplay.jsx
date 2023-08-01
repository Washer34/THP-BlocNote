import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = ({ title, content }) => {
  const contentHTML = converter.makeHtml(content);

  return (
    <div className='NoteDisplay'>
      <div style={{ width: '100%', height: '100%' }}>
        <h1>title: {title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </div>
    </div>
  )

}

export default NoteDisplay;
