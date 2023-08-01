import React from 'react';
import { Card } from 'react-bootstrap'
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const LeftDisplay = ({ data }) => {


  return (
    <>
      {data.map((note, index) => {
        const noteDataHTML = converter.makeHtml(note.content);
        return (
          <Card id='card' key={index}>
            <Card.Body>
              <Card.Title id='card-title'>{note.title}</Card.Title>
              <Card.Text id='card-text'>
                <div dangerouslySetInnerHTML={{ __html: noteDataHTML }} />
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })
      }
    </>
  )
}

export default LeftDisplay;